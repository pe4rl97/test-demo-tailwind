import { Route, Routes } from "react-router-dom"
import { FeaturedAds, Footer, Hero, Nav, Newsletter, OurBlog, PopularProducts, Services, Testimonials, TrendingToday } from "./sections"
import FileUploader from "./components/FileUploader"

const TestDemo = () => (
    <main className="relative">
        <Nav/>
        <section id="home">
            <Hero/>
        </section>
        <section>
            <Services/>
        </section>
        <section className="padding-x py-13 bg-very-light-gray">
            <FeaturedAds/>
        </section>
        <section className="padding">
            <PopularProducts/>
        </section>
        <section className="padding  bg-very-light-gray">
            <TrendingToday/>
        </section>
        <section className="padding" id="testimonials">
            <Testimonials/>
        </section>
        <section className="padding-y bg-very-light-gray" id="blog">
            <OurBlog/>
        </section>
        <section className="padding-x py-8 bg-primary" id="contact-us">
            <Newsletter/>
        </section>
        <footer className="padding bg-slate-gray">
            <Footer/>
        </footer>
    </main>
)

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<TestDemo/>}/>
                <Route path='/uploader' element={<><Nav/><FileUploader/></>}/>
            </Routes>
        </>
    )
}

export default App

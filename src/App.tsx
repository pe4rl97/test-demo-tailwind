import { FeaturedAds, Footer, Hero, Nav, Newsletter, OurBlog, PopularProducts, Services, Testimonials, TrendingToday } from "./sections"

function App() {

    return (
        <>
            <main className="relative">
                <Nav/>
                <section>
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
                <section className="padding bg-very-light-gray">
                    <TrendingToday/>
                </section>
                <section className="padding">
                    <Testimonials/>
                </section>
                <section className="padding bg-very-light-gray">
                    <OurBlog/>
                </section>
                <section className="padding-x py-8 bg-primary">
                    <Newsletter/>
                </section>
                <footer className="padding bg-slate-gray">
                    <Footer/>
                </footer>
            </main>
        </>
    )
}

export default App

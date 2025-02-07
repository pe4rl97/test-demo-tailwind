import BlogCard from "../components/BlogCard"
import { blogs } from "../constants"

const OurBlog = () => {
    return (
        <div className="max-container">
            <div className="flex flex-col items-center w-full">
                <h1 className="text-center text-primary text-4xl font-semibold">Our Blog</h1>
                <p className="text-gray-400 mt-3 text-lg">See Our Daily News & Updates</p>
                <hr className="w-20 mt-4 text-primary font-bold border-2 border-primary text-center"/>
                <div className="grid grid-cols-3 w-full gap-10 mt-10 max-lg:grid-cols-1 max-md:px-10 px-20">
                    {blogs.map((blog, index) => (
                        <BlogCard key={blog.title+index} {...blog}/>
                    ))}
                </div>
                <button className="bg-primary text-white p-3 px-10 mt-10 rounded text-lg cursor-pointer hover:bg-hover-primary">View All Posts</button>
            </div>
        </div>
    )
}

export default OurBlog
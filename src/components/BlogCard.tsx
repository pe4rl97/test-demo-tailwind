import { Blog } from "../constants"

const BlogCard = ({ imageUrl, title, author, date, category, text }: Blog) => {
    return (
        <div className="relative w-full mb-5">
            <div className="w-full">
                <img src={imageUrl} alt={title} className="object-cover h-60 w-full rounded"/>
                <div className="mt-8">
                    <h3 className="text-2xl">{title}</h3>
                    <div className="flex justify-start gap-3 text-gray-400 mt-1.5">
                        <p>by {author}</p>
                        <span className="-mt-1 font-extrabold">.</span>
                        <p>{date}</p>
                        <span className="-mt-1 font-extrabold">.</span>
                        <p className="text-primary">{category}</p>
                    </div>
                    <p className="mt-5 text-gray-600 text-lg">{text}</p>

                </div>
            </div>
        </div>
    )
}

export default BlogCard
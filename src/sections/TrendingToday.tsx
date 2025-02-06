import TrendingCard from "../components/TrendingCard"
import { trendingToday } from "../constants"

const TrendingToday = () => {
    return (
        <div className="max-container">
            <h1 className="text-4xl font-semibold text-primary">Trending Today</h1>
            <hr className="w-20 mt-2.5 text-primary font-bold border-2 border-primary"/>
            
            <div className="relative w-full mt-10">
                <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                    {trendingToday.map((trending, index) => (
                        <TrendingCard key={trending.name+index} {...trending}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrendingToday
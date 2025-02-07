import { blog1 } from "../assets/blogs"
import { booksIcon, carsIcon, electronicsIcon, furnitureIcon, pizzaIcon, realEstateIcon } from "../assets/icons"
import { ferrari, house, iphone, woodenFurniture } from "../assets/images"
import { testimonial1, testimonial2, testimonial3, testimonial4 } from "../assets/testimonials"

export interface Service {
    iconURL: string,
    serviceName: string,
    numbers: string
}

export const services : Service[] = [
    {
        iconURL: realEstateIcon,
        serviceName: "Real Estate",
        numbers: '3,921'
    },
    {
        iconURL: booksIcon,
        serviceName: "Books & Magazines",
        numbers: '398'
    },
    {
        iconURL: furnitureIcon,
        serviceName: "Furniture",
        numbers: '1,229'
    },
    {
        iconURL: electronicsIcon,
        serviceName: "Electronics",
        numbers: '32,891'
    },
    {
        iconURL: carsIcon,
        serviceName: "Cars & Vehicles",
        numbers: '29,221'
    },
    {
        iconURL: pizzaIcon,
        serviceName: "Other",
        numbers: '219'
    },
]

export interface Ad {
    imageUrl: string,
    category: string,
    name: string,
    address: string,
}

export const featuredAds: Ad[] = [
    {
        imageUrl: iphone,
        category: "Electronics",
        name: "iPhone X Gray",
        address: "Don St, Brooklyn, New York"
    },
    {
        imageUrl: ferrari,
        category: "Cars & Vehicles",
        name: "Red Luxury Car",
        address: "Don St, Brooklyn, New York"
    },
    {
        imageUrl: house,
        category: "Real Estate",
        name: "House with Swimming Pool",
        address: "Don St, Brooklyn, New York"
    },
    {
        imageUrl: woodenFurniture,
        category: "Furniture",
        name: "Wooden Chair & Table",
        address: "Don St, Brooklyn, New York"
    },
]

export interface Product {
    imageUrl: string,
    category: string,
    name: string,
    address: string,
}

export const popularProducts: Product[] = [
    {
        imageUrl: ferrari,
        category: "Cars & Vehicles",
        name: "Red Luxury Car",
        address: "West Orange, New York"
    },
    {
        imageUrl: house,
        category: "Real Estate",
        name: "House with Swimming Pool",
        address: "West Orange, New York"
    },
    {
        imageUrl: woodenFurniture,
        category: "Furniture",
        name: "Wooden Chair & Table",
        address: "West Orange, New York"
    },
    {
        imageUrl: iphone,
        category: "Electronics",
        name: "iPhone X Gray",
        address: "West Orange, New York"
    },
    {
        imageUrl: house,
        category: "Real Estate",
        name: "House with Swimming Pool",
        address: "West Orange, New York"
    },
]

export interface Trending {
    imageUrl: string,
    category: string,
    name: string,
    address: string,
}

export const trendingToday: Trending[] = [
    {
        imageUrl: house,
        category: "Real Estate",
        name: "House with Swimming Pool",
        address: "West Orange, New York"
    },
    {
        imageUrl: ferrari,
        category: "Cars & Vehicles",
        name: "Red Luxury Car",
        address: "West Orange, New York"
    },
    {
        imageUrl: woodenFurniture,
        category: "Furniture",
        name: "Wooden Chair & Table",
        address: "West Orange, New York"
    },
    {
        imageUrl: house,
        category: "Real Estate",
        name: "House with Swimming Pool",
        address: "West Orange, New York"
    },
    {
        imageUrl: iphone,
        category: "Electronics",
        name: "iPhone X Gray",
        address: "West Orange, New York"
    },
    {
        imageUrl: woodenFurniture,
        category: "Furniture",
        name: "Wooden Chair & Table",
        address: "West Orange, New York"
    },
]

export interface Testimonial {
    imageUrl: string,
    name: string,
    text: string,
}

export const testimonialDetails: Testimonial[] = [
    {
        imageUrl: testimonial1,
        name: 'Layla Yoder',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt asperiores cupiditate veritatis distinctio illum aliquam necessitatibus adipisci tenetur, dolores veniam sapiente neque in exercitationem nesciunt officia facilis culpa eum itaque?"
    },
    {
        imageUrl: testimonial3,
        name: 'Charley George',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt asperiores cupiditate veritatis distinctio illum aliquam necessitatibus adipisci tenetur, dolores veniam sapiente neque in exercitationem nesciunt officia facilis culpa eum itaque?"
    },
    {
        imageUrl: testimonial2,
        name: 'Aria Meyer',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt asperiores cupiditate veritatis distinctio illum aliquam necessitatibus adipisci tenetur, dolores veniam sapiente neque in exercitationem nesciunt officia facilis culpa eum itaque?"
    },
    {
        imageUrl: testimonial4,
        name: 'Ricky Parra',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt asperiores cupiditate veritatis distinctio illum aliquam necessitatibus adipisci tenetur, dolores veniam sapiente neque in exercitationem nesciunt officia facilis culpa eum itaque?"
    },
]

export interface Blog {
    imageUrl: string,
    title: string,
    author: string,
    date: string,
    category: string,
    text: string
}

export const blogs: Blog[] = [
    {
        imageUrl: blog1,
        title: "Many People Selling Online",
        author: "Mark Spiker",
        date: "Jan 18, 2019",
        category: "News",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure, illum beatae necessitatibus cum exercitationem delectus nulla at saepe voluptatibus aliquid sequi adipisci consectetur blanditiis."
    },
    {
        imageUrl: blog1,
        title: "Many People Selling Online",
        author: "Mark Spiker",
        date: "Jan 18, 2019",
        category: "News",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure, illum beatae necessitatibus cum exercitationem delectus nulla at saepe voluptatibus aliquid sequi adipisci consectetur blanditiis."
    },
    {
        imageUrl: blog1,
        title: "Many People Selling Online",
        author: "Mark Spiker",
        date: "Jan 18, 2019",
        category: "News",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure, illum beatae necessitatibus cum exercitationem delectus nulla at saepe voluptatibus aliquid sequi adipisci consectetur blanditiis."
    },
]
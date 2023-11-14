import ProductCard from "./ProductCard";

import image1 from '../assets/discover1.png'
import image2 from '../assets/discover2.png'
import image3 from '../assets/discover3.png'
import image4 from '../assets/discover4.png'
import image5 from '../assets/discover5.png'
import image6 from '../assets/discover6.png'
import image7 from '../assets/discover7.png'
import image8 from '../assets/discover8.png'


export default function Discover() {
    return (
        <>
            <div className="flex justify-between px-2">
                <div className="text-3xl">DISCOVER</div>
                <div className="flex gap-6 ">
                    <a href="">Category</a>
                    <a href="">Cheapest</a>
                    <a href="">Newest</a>
                    <a href="">Filter</a>
                </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-32 mb-5">
                <ProductCard image={image1} />
                <ProductCard image={image2} />
                <ProductCard image={image3} />
                <ProductCard image={image4} />
                <ProductCard image={image5} />
                <ProductCard image={image6} />
                <ProductCard image={image7} />
                <ProductCard image={image8} />


            </div>
            <div className="flex justify-center">
                <button className="text-white mx-auto border px-2 py-1 rounded" href="">Show More</button>
            </div>
        </>
    )
}

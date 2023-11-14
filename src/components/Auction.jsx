import ProductCard from "./ProductCard";
import image1 from '../assets/auction1.png'
import image2 from '../assets/auction2.png'
import image3 from '../assets/auction3.png'
import image4 from '../assets/auction4.png'

export default function Auction() {
    return (
        <div >
            <div className="flex justify-between mx-2"><h3 className="text-2xl font-semibold">HOT AUCTION</h3> <a href="#">View All</a></div>
            <div className="flex flex-wrap justify-center gap-8 py-10">
                <ProductCard image={image1} />
                <ProductCard image={image2} />
                <ProductCard image={image3} />
                <ProductCard image={image4} />

            </div>
        </div>
    )
}

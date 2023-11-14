export default function ProductCard({ image }) {
    return (
        <div className='w-72 h-auto my-5'>
            <img src={image} alt="" srcset="" />
            <div>
                <div className='flex justify-between border-b my-3 pb-2'>
                    <p className='m-0 font-semibold'>Lorem Ipsum</p>
                    <p className='m-0 '>1.20 weth</p>

                </div>
                <div className='flex justify-between'>
                    <p className='m-0 '>Ends in 01.34.45</p>
                    <button className='text-sm border px-3 py-0.5 rounded'> Bid</button>

                </div>
            </div>
        </div>
    )
}

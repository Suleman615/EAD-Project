import { Instagram, Facebook, Twitter } from 'lucide-react';
export default function Footer() {
    return (
        <>
            <div className='mx-4 flex gap-16 justify-around mt-20 border-b pb-4'>
                <h2 className='w-[30%] pe-20 text-3xl'>Etiam et id tincidunt faucibus mollis a sociis pretium fermentum quis magna faucibus lacus.</h2>
                <div>
                    <p className='text-xl mb-5'>MarketPlace</p>
                    <ul >
                        <li className='my-2 text-gray-400'>Home</li>
                        <li className='my-2 text-gray-400'>Activity</li>
                        <li className='my-2 text-gray-400'>Discover</li>
                        <li className='my-2 text-gray-400'>Learn More</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl mb-5'>Company</p>
                    <ul >
                        <li className='my-2 text-gray-400'>Home</li>
                        <li className='my-2 text-gray-400'>Activity</li>
                        <li className='my-2 text-gray-400'>Discover</li>
                        <li className='my-2 text-gray-400'>Learn More</li>
                    </ul>
                </div><div>
                    <p className='text-xl mb-5'>Contact</p>
                    <ul >
                        <li className='my-2 text-gray-400'>Home</li>
                        <li className='my-2 text-gray-400'>Activity</li>
                        <li className='my-2 text-gray-400'>Discover</li>
                        <li className='my-2 text-gray-400'>Learn More</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between items-center mx-2 py-6'>
                <div className='flex gap-2'>
                    <Instagram />
                    <Facebook />
                    <Twitter />
                </div>
                <p className='text-gray-300'>Copyright 2021 Gaslur</p>
            </div>
        </>
    )
}

import React from 'react'
import Zoom from 'react-reveal/Zoom';

function Home() {
    return (
        <div className='text-white justify-between md:ml-80 my-40 h-24 px-10 mx-auto font-serif'>
            <Zoom left delay={200}>
                <div className="inset-0 max-w-[400px] max-h-[400px] sm:max-h-[600px] md:max-w-[600px] bg-[#3f372d] bg-opacity-80 rounded-3xl p-5">
                    <h1 className='text-4xl sm:text-5xl md:text-7xl'>Create Coffe</h1>
                    <p className='sm:text-lg my-5 sm:my-10'>Coffe adalah tanaman semak yang dapat tumbuh di daerah tropis hingga mencapai ketinggian 700 - 1600 mdpl. 
                    Pohon kopi dipangkas pendek untuk menghemat energi dan bantuan panen, namun bisa tumbuh lebih dari 30 kaki (9 meter) tinggi. </p>
                    <a href="#About"><button className='mb-5 bg-transparent hover:bg-white text-white hover:text-black font-bold text-[20px] py-3 px-5 border-2 
                        border-white border-solid p-4 rounded-xl'>Learn More</button></a>
                </div>
            </Zoom>
        </div>
    )
}

export default Home
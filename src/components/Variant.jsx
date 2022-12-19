import React from 'react'
import espresso from './image/espresso.jpg'
import americano from './image/Americano.jpg'
import ristretto from './image/Ristretto.jpg'
import redeye from './image/Red Eye.jpeg'
import latte from './image/Latte.jpg'
import cappuccino from './image/Cappuccino.jpg'
import macchiato from './image/Macchiato.jpg'
import mochaccino from './image/Mochaccino.jpg'
import flatwhite from './image/Flat white.jpg'
import coldbrew from './image/Cold brew.jpg'

function Variant() {
    return (
        <div className="mx-10 md:mx-36">
            <div className="bg-white my-5 md:my-10">
                <h1 className="text-4xl font-bold">Variant Coffe</h1>
            </div>
            <div className="grid grid-rows-1 md:grid-cols-5 md:gap-8">
                <div className="bg-white w-[300px] h-[350px]">
                    <img src={espresso} alt="espresso" className='w-[120px] h-[120px] rounded-full mx-auto my-5 border-4 border-[#ffb200]'/>
                    <h1 className="my-2 font-bold text-xl">Espresso</h1>
                    <p>Espresso merupakan kopi murni tanpa menggunakan campuran bahan apapun seperti susu atau gula yang dibuat dengan mesin brewing khusus.</p>
                </div>
                <div className="bg-white w-[300px] h-[350px]">
                    <img src={americano} alt="espresso" className='w-[120px] h-[120px] rounded-full mx-auto my-5 border-4 border-[#ffb200]'/>
                    <h1 className="my-2 font-bold text-xl">Americano</h1>
                    <p>Americano terdiri dari satu shot espresso yang dituangkan dalam cangkir berukuran 178 mililiter yang dicampur dengan air panas hingga memenuhi gelas. </p>
                </div>
                <div className="bg-white w-[300px] h-[350px]">
                    <img src={ristretto} alt="espresso" className='w-[120px] h-[120px] rounded-full mx-auto my-5 border-4 border-[#ffb200]'/>
                    <h1 className="my-2 font-bold text-xl">Ristretto</h1>
                    <p>Ristretto sering juga disebut sebagai half espresso karena air yang digunakan dibatasi dan volume kopi yang dihasilkan ristretto hanya setengah dari espresso.</p>
                </div>
                <div className="bg-white w-[300px] h-[350px]">
                    <img src={redeye} alt="espresso" className='w-[120px] h-[120px] rounded-full mx-auto my-5 border-4 border-[#ffb200]'/>
                    <h1 className="my-2 font-bold text-xl">Red Eye</h1>
                    <p>Red Eye terdiri dari espresso dicampur dengan kopi hitam. Jenis kopi ini biasanya lebih popular dengan sebutan coffee with espresso.</p>
                </div>
                <div className="bg-white w-[300px] h-[350px]">
                    <img src={latte} alt="espresso" className='w-[120px] h-[120px] rounded-full mx-auto my-5 border-4 border-[#ffb200]'/>
                    <h1 className="my-2 font-bold text-xl">Latte</h1>
                    <p>Latte merupakan kopi yang dicampur dengan susu, latte biasanya menggunakan perbandingan espresso dan susu 2:1.</p>
                </div>
                <div className="bg-white w-[300px] h-[350px]">
                    <img src={cappuccino} alt="espresso" className='w-[120px] h-[120px] rounded-full mx-auto my-5 border-4 border-[#ffb200]'/>
                    <h1 className="my-2 font-bold text-xl">Cappuccino</h1>
                    <p>Cappuccino terdiri dari espresso dan steamed milk dengan rasio 1:1. Namun, ada juga yang memakai perbandingan 1/3 espresso, 1/3 steamed milk, dan 1/3 susu foam.</p>
                </div>
                <div className="bg-white w-[300px] h-[350px]">
                    <img src={macchiato} alt="espresso" className='w-[120px] h-[120px] rounded-full mx-auto my-5 border-4 border-[#ffb200]'/>
                    <h1 className="my-2 font-bold text-xl">Macchiato</h1>
                    <p>Macchiato adalah double shot espresso dan susu, Perbandingan komposisi pada jenis kopi ini adalah 4:1. Ada dua macam jenis macchiato yaitu espresso macchiato dan latte macchiato.</p>
                </div>
                <div className="bg-white w-[300px] h-[350px]">
                    <img src={mochaccino} alt="espresso" className='w-[120px] h-[120px] rounded-full mx-auto my-5 border-4 border-[#ffb200]'/>
                    <h1 className="my-2 font-bold text-xl">Mochaccino</h1>
                    <p>Mochaccino berasal dari campuran espresso dengan coklat dan susu,  kopi ini merupkan kombinasi espresso dengan susu dan cokelat. Mochachino terbuat dari 1/5 susu, 2/5 cokelat, dan 2/5 espresso.</p>
                </div>
                <div className="bg-white w-[300px] h-[350px]">
                    <img src={flatwhite} alt="espresso" className='w-[120px] h-[120px] rounded-full mx-auto my-5 border-4 border-[#ffb200]'/>
                    <h1 className="my-2 font-bold text-xl">Flat white</h1>
                    <p>Flat white menggunakan rasio susu lebih banyak dari café latte dan disajikan hampir tanpa foam, kopi ini biasanya terdiri dari 60 mililiter textured milk alias microfoam atau gelembung yang terbentuk saat susu dipanaskan.</p>
                </div>
                <div className="bg-white w-[300px] h-[350px]">
                    <img src={coldbrew} alt="espresso" className='w-[120px] h-[120px] rounded-full mx-auto my-5 border-4 border-[#ffb200]'/>
                    <h1 className="my-2 font-bold text-xl">Cold brew</h1>
                    <p>Cold brew didaptkan dari mencampur hasil gilingan kopi dengan air dingin di satu wadah. Lalu, dibiarkan selama 12 jam atau sampai satu hari penuh. Rasa yang dihasilkan cold brew cenderung tidak terlalu pahit dan tidak terlalu asam.</p>
                </div>
            </div>
        </div>
    )
}

export default Variant
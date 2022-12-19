import React from 'react'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import arabika from './image/arabika.jpg'

function Arabika() {
    return (
        <div className="bg-[#ffb200]">
            <div className="blcok md:flex max-w-[1240px] px-4 mx-auto pt-16 pb-5 md:py-20">
                <Bounce delay="300"><img src={arabika} alt="robusta" className='w-[800px] h-[300px] md:w-[700px] md:h-[550px] rounded-[20px] md:hidden z-0'/></Bounce>
                <Fade left delay="800">
                    <div className="bg-white z-10 max-w-[500px] md:mr-[-50px] py-5 px-2 md:mx-5 my-10 text-center md:text-left md:pl-10 border-[10px] border-[#3e2a1f] border-solid">
                            <h1 className="flex justify-center text-4xl font-bold text-[#3e2a1f]">Arabika</h1>
                            <p className="font-serif pt-8 md:px-2 text-[16px]">Kopi arabika (Coffea arabica), juga dikenal sebagai kopi Arab, kopi semak Arab, atau 
                            kopi gunung, adalah spesies dari genus Coffea. Spesies ini diyakini sebagai spesies kopi pertama yang dibudidayakan, dan merupakan kultivar
                            dominan, mewakili sekitar 60% dari produksi kopi global. Kopi arabika berasal dari Ethiopia. Kopi ini tercatat pertama kali dibudidayakan 
                            di Yaman, dan didokumentasikan pada abad ke-12. Beberapa varietas kopi arabika yang dikembangkan di Indonesia antara lain kopi arabica 
                            jenis Abesinia, arabika jenis Pasumah, Marago, Typica dan kopi arabika Congensis.</p>
                    </div>
                </Fade>
                <Bounce delay="300"><img src={arabika} alt="robusta" className=' hidden md:inline w-[700px] md:h-[550px] rounded-[20px] z-0'/></Bounce>
            </div>
        </div>
    )
}

export default Arabika
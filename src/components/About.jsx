import React from 'react'
import Fade from 'react-reveal/Fade';
import aboutImg from './image/aboutimg.jpg'

function About() {
    return (
        <div className="container text-white max-w-[100%] mx-auto">
            <div className="inset-0 bg-white w-full flex justify-center items-center max-w-[1240px] h-0 px-4 mx-auto">
                <div className="mt-[600px] md:mt-96 md:flex">
                    <Fade bottom delay={300}><img src={aboutImg} alt="coffe" className='w-[800px] h-[300px] md:max-w-[400px] md:h-[550px]'/></Fade>
                    <Fade right delay={350}>
                        <div className="text-black mt-10 md:mt-auto md:pl-8 text-center max-w-[600px]">
                            <h1 className="text-4xl md:text-6xl font-bold">About Coffee</h1>
                            <p className='p-5 font-serif'>Kopi berasal dari genus tanaman yang dikenal dengan nama Coffea. Dalam genus ada lebih dari 500 marga dan 6.000 spesies 
                                pohon tropis dan semak belukar. Para ahli memperkirakan bahwa ada sekitar 25 sampai 100 spesies tanaman kopi. 
                                Genus ini pertama kali dijelaskan pada abad ke-18 oleh ahli botani Swedia, Carolus Linneaus, yang juga menggambarkan 
                                Coffea Arabica di Species Plantarum pada tahun 1753. Ahli botani tidak setuju sejak klasifikasi yang tepat, 
                                karena tanaman kopi dapat berkisar secara luas. Mereka bisa menjadi semak-semak kecil ke pohon tinggi, 
                                dengan daun berukuran satu sampai 16 inci, dan warnanya ungu atau kuning ke hijau gelap yang dominan. 
                                Dalam industri kopi komersial, ada dua jenis kopi penting - Arabika dan Robusta. </p>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="w-full h-[800px] md:h-[600px] bg-[#ffb200] mx-auto"></div>
        </div>
    )
}

export default About
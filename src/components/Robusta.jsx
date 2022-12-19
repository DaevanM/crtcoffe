import React from 'react'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import robusta from './image/robusta.jpg'

function Robusta() {
    return (
        <div className="bg-white">
            <div className="block md:flex max-w-[1240px] px-4 mx-auto pb-10 md:py-20">
                <Bounce delay="300"><img src={robusta} alt="robusta" className='w-[800px] h-[300px] md:w-[700px] md:h-[550px] rounded-[20px]'/></Bounce>
                <Fade right delay="800">
                    <div className="bg-white max-w-[500px] md:ml-[-50px] py-5 px-2 md:mx-5 my-10 text-center md:text-left md:pl-10 border-[10px] border-[#3e2a1f] border-solid">
                            <h1 className="flex justify-center text-4xl font-bold text-[#3e2a1f]">Robusta</h1>
                            <p className="font-serif pt-8 md:px-2 text-[16px]">Robusta adalah salah satu jenis tanaman kopi dengan nama ilmiah Coffea canephora. Nama robusta diambil dari kata 
                            “robust“, istilah dalam bahasa Inggris yang artinya kuat. Sesuai dengan namanya, minuman yang diekstrak dari biji kopi robusta 
                            memiliki cita rasa yang kuat dan cenderung lebih pahit dibanding arabika. Biji kopi robusta dianggap inferior dan dihargai lebih rendah 
                            dibanding arabika. Indonesia merupakan salah satu negara penghasil kopi robusta terbesar di dunia. Sebagian besar perkebunan 
                            kopi di negeri ini ditanami jenis robusta, sisanya arabika, liberika, dan excelsa.</p>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Robusta
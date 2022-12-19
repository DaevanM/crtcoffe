import React from 'react'
import enjoy from './image/enjoy.jpg'
import {AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'
import Rotate from 'react-reveal/Rotate';
import Roll from 'react-reveal/Roll';
import Reveal from 'react-reveal/Fade';
import { Fade } from 'react-reveal';

function Footer() {
    return (
        <div className='w-full block bg-footer bg-cover'>
            <div className="py-10 md:py-24 gap-10 mx-5">
                <div className="md:flex max-w-[1240px] mx-auto justify-center gap-10 mb-10">
                    <Rotate top left delay={300}>
                        <div className="bg-white bg-opacity-70 w-full h-[100px] md:w-[400px] md:h-[400px] rounded-2xl flex justify-center my-10">
                            <h1 className="text-3xl md:text-6xl font-bold md:m-28 my-8">Enjoy Your Coffee</h1>
                        </div>
                    </Rotate>
                    <Roll right delay={300}>
                        <img src={enjoy} alt="enjoy" className='md:w-[400px] md:h-[400px] rounded-2xl md:my-10'/>
                    </Roll>
                </div>
                <div className="flex max-w-[1240px] mx-auto justify-center">
                    <Fade bottom delay={500}>
                        <div className="bg-white text-white bg-opacity-30 w-[840px] h-[300px] rounded-2xl">
                            <div className="md:m-20 m-5">
                                <p className='text-center md:text-xl text-lg'>“Kesempurnaan rasa kopi berasal dari rasa pahit di dalamnya. Maka dari itu, kenangan yang pahit juga akan membentuk 
                                    kita menjadi lebih baik di waktu yang akan datang.”</p>
                                <div className="flex justify-center my-10 gap-5">
                                    <a href=""><AiOutlineInstagram size={40}/></a>
                                    <a href="https:/www.linkedin.com/in/daevanmartana"><AiOutlineLinkedin size={40}/></a>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Footer
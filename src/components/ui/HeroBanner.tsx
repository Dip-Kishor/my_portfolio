import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import CustomButton from './CustomButton'

const HeroBanner = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center text-center md:text-left lg:text-left gap-8">
                <div>
                    <h4 className="text-muted-text">Hi I am</h4>
                    <h3 className="text-xl font-bold">Dip Kishor Regmi</h3>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl my-4 text-button font-bold whitespace-nowrap md:whitespace-normal">Software Developer</h3>
                    <div className="flex items-center justify-center md:justify-start gap-4 my-6">
                        <a
                            href="https://instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-muted-text text-muted-text hover:bg-button hover:text-white transition"
                        >
                            <FaInstagram size={18} />
                        </a>

                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-muted-text text-muted-text hover:bg-button hover:text-white transition"
                        >
                            <FaGithub size={18} />
                        </a>
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-muted-text text-muted-text hover:bg-button hover:text-white transition"
                        >
                            <FaLinkedin size={18} />
                        </a>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-center md:justify-start">
                        <CustomButton
                            variant="primary"
                            rippleColor="rgba(255, 255, 255, 0.5)"
                            rippleDuration={800}
                            className="pr-2 py-2 rounded-2xl"
                        >
                            <p className='text-sm font-semibold'>Hire me</p>
                        </CustomButton>

                        <CustomButton
                            variant="secondary"
                            rippleColor="rgba(255, 255, 255, 0.5)"
                            rippleDuration={800}
                            className="px-2 py-2 rounded-2xl"
                        >
                            <p className='text-sm font-semibold text-text'>Download CV</p>
                        </CustomButton>
                    </div>
                    {/* Experience Card */}
                    <div className="mt-8  md:max-w-125  bg-cards rounded-xl px-6 mx-5 md:mx-0 py-4 flex justify-between">
                        <div>
                            <h3 className="text-button text-2xl font-bold">2+ Years</h3>
                            <p className="text-sm text-muted-text">Experience</p>
                        </div>

                        <div className="border-l border-gray-700 px-6">
                            <h3 className="text-button text-2xl font-bold">15+</h3>
                            <p className="text-sm text-muted-text">Projects Done</p>
                        </div>

                        <div className="border-l border-gray-700 px-6">
                            <h3 className="text-button text-2xl font-bold">20+</h3>
                            <p className="text-sm text-muted-text">Happy Clients</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center order-last md:order-none mt-10 md:mt-0 relative">
                    <div className="w-60 h-60 md:w-105 md:h-105 rounded-full bg-cards relative overflow-visible">
                        <img
                            src="/Images/MyImgNew.png"
                            alt="Dip Kishor Regmi"
                            className="w-72 h-108 md:w-[30rem] md:h-[47rem] object-cover rounded-full absolute -top-[80%] md:-top-[79%] left-1/2 -translate-x-1/2"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeroBanner
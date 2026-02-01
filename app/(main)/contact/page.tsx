'use client';
import React, { useId, useState } from 'react'



export default function ContactPage() {
   

    return (
        <>
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Right Side - Picture (Mobile First) */}
                <div className="w-full lg:w-1/2 bg-gray-200 flex items-center justify-center overflow-hidden min-h-48 lg:min-h-screen">
                    <img 
                        src="/assets/images/street-photography/street-photography (28).jpg" 
                        alt="Contact us" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Left Side - Contact Info and Form */}
                <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center text-[#5a4b2e]">
                   
                   <div className='shadow-md p-5 rounded-lg'>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Maral Amirkian</h1>
                    
                        <div className="mb-3 sm:mb-4">
                            <p className="text-base sm:text-lg">
                                <strong>Email:</strong>  
                                <a href="mailto:maral.amirkian@gmail.com" className="text-[#67593d] hover:underline break-all">maral.amirkian@gmail.com</a>
                                </p>
                        </div>
                        <div className="mb-3 sm:mb-4">
                            <p className="text-base sm:text-lg"><strong>Phone:</strong>
                            
                            <a href="tel:+37495838831" className="text-[#67593d] hover:underline">+374 95 838 831</a>
                            </p>
                        </div>
                        <div>
                            <p className="text-base sm:text-lg"><strong>Social Media:</strong></p>
                            <ul className="list-disc list-inside mt-2">
                                <li>
                                    <a href="https://instagram.com/maral.amirkian" target="_blank" rel="noopener noreferrer" className="text-[#67593d] hover:underline">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://facebook.com/maral.amirkian" target="_blank" rel="noopener noreferrer" className="text-[#67593d] hover:underline">
                                        Facebook
                                    </a>
                                </li>
                            </ul>
                        </div>
                   </div>
                      
                </div>  
            </div>
        </>
    )
}
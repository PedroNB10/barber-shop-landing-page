'use client'

import { useState } from "react"

export function Header() {

    const [showMenu, setShowMenu] = useState('hidden')




    function openMenu() {
        setShowMenu('visible')
        console.log(showMenu)
    }

    function closeMenu() {
        setShowMenu('hidden')
        console.log(showMenu)
    }


    return (


        <div className="">

            <header className='bg-azul-escuro-forte text-white h-24 flex items-center justify-evenly w-full fixed'>
                <picture>
                    <img className="w-[65px]" src="/img/barba-rolling-logo.png" alt="" />
                </picture>
                <h1 className="font-rollingstone uppercase">Barba Rolling</h1>
                {/* Ícone de MenuBar */}
                <button onClick={openMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:hidden w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>



            </header>

            <div className={` ${showMenu == 'visible' ? 'h-80' : 'h-0'}  fixed top-0 left-0 right-0 z-10 bg-bege flex flex-col items-center justify-center transition-all duration-500 ease-in-out `}>

                <button >
                    <svg onClick={closeMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${showMenu} md:hidden  w-10 h-10 absolute top-0 right-0 m-5`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>



                <ul className="flex flex-col gap-4 text-center">
                    <a href="#home">
                        <li className="font-rollingstone text-azul-escuro-forte uppercase hover:text-vermelho hover:underline">Home</li>
                    </a>
                    <a href="#sobre">
                        <li className="font-rollingstone text-azul-escuro-forte uppercase hover:text-vermelho hover:underline">Sobre</li>
                    </a>
                    <a href="#valores">
                        <li className="font-rollingstone text-azul-escuro-forte uppercase hover:text-vermelho hover:underline">Valores</li>
                    </a>
                    <a href="#contato">
                        <li className="font-rollingstone text-azul-escuro-forte uppercase hover:text-vermelho hover:underline">Contato</li>
                    </a>

                </ul>





            </div>









            {showMenu === 'visible' ? (
                <div className="pt-96" />
            ) : (
                <div className="pt-24" />
            )}








        </div>
    )
}
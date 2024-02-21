"use client";

import Product from "@/components/Product";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      {/* Valores */}
      <section className="flex items-center justify-center bg-bege py-6">
        <div className="flex flex-col items-center justify-center bg-bege mb-6 max-w-screen-xl">
          <h2 className="text-3xl md:text-6xl text-vermelho font-rollingstone py-6 md:mb-16">
            VALORES
          </h2>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <div className="flex md:flex-col items-center justify-center w-5/12 md:h-72 md:justify-around ml-5">
              <span className="flex text-lg text-center font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
                id.
              </span>
              <div className="hidden md:flex justify-center bg-black rounded-3xl p-1 border-2 border-black w-52">
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  className="flex flex-row items-center text-white font-bold text-2xl text-center text-nowrap md:gap-3"
                >
                  Agende já!
                  <img
                    className="w-10 "
                    src="\img\logo-whatsapp.png"
                    alt="ícone do whatsapp"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-4 pb-6">
              <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 rounded-md gap-6 md:gap-3 lg:gap-8 md:mr-5">
                <Services
                  imgUrl="\img\valor-barba.jpg"
                  imgAlt="Imagem de uma barba"
                  name="Barba"
                  price="R$50,00"
                ></Services>
                <Services
                  imgUrl="\img\valor-cabelo.jpg"
                  imgAlt="Imagem de um homem cortando o cabelo"
                  name="Cabelo"
                  price="R$50,00"
                ></Services>
                <Services
                  imgUrl="\img\valor-sobrancelha.jpg"
                  imgAlt="Imagem de um homem na barbearia sorrindo"
                  name="Sobrancelha"
                  price="R$50,00"
                ></Services>
              </div>
              <div className="md:hidden flex justify-center bg-black rounded-3xl p-1 border-2 border-black w-52">
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  className="flex flex-row items-center text-white font-bold text-xl text-center text-nowrap md:gap-3"
                >
                  Agende já!
                  <img
                    className="w-10 "
                    src="\img\logo-whatsapp.png"
                    alt="ícone do whatsapp"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="bg-gradient-to-r from-vermelho to-black py-12">
        <div className="flex flex-col items-center justify-center mb-6">
          <h2 className="text-3xl md:text-6xl text-white font-rollingstone m-9 md:mb-16">
            PRODUTOS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row auto-rows items-center justify-center gap-y-32 md:mx-28 md:flex-row ">
          <Product
            imgUrl="\img\produtos.png"
            imgAlt="temp"
            titulo="Título"
            descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                totam aliquid itaque ex quibusdam tempore, nisi accusamus quia
                fugiat?."
          ></Product>
          <Product
            imgUrl="\img\produtos.png"
            imgAlt="temp"
            titulo="Título"
            descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            totam aliquid itaque ex quibusdam tempore, nisi accusamus quia
            fugiat?."
          ></Product>
          <Product
            imgUrl="\img\produtos.png"
            imgAlt="temp"
            titulo="Título"
            descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            totam aliquid itaque ex quibusdam tempore, nisi accusamus quia
            fugiat?."
          ></Product>
          <Product
            imgUrl="\img\produtos.png"
            imgAlt="temp"
            titulo="Título"
            descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            totam aliquid itaque ex quibusdam tempore, nisi accusamus quia
            fugiat?."
          ></Product>
          <Product
            imgUrl="\img\produtos.png"
            imgAlt="temp"
            titulo="Título"
            descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            totam aliquid itaque ex quibusdam tempore, nisi accusamus quia
            fugiat?."
          ></Product>
        </div>
      </section>
    </>
  );
}

"use client";

import Product from "@/components/Product";
import Services from "@/components/Services";

import { Carousel, Slide } from "@/components/Carousel";

export default function Home() {
  let slides: Slide[] = [
    {
      src: "img/carrossel-01.jpg",
      alt: "Rapaz cortando o cabelo de um outro homem.",
    },
    {
      src: "img/carrossel-02.jpg",
      alt: "Corte em foco de um outro cabeleireiro.",
    },
    {
      src: "img/carrossel-03.jpg",
      alt: "Barbeiro realizando um corte preciso na barba do cliente.",
    },
  ];

  return (
    <>
      {/* Carrossel */}
      <Carousel slides={slides} />

      {/* Sobre */}
      <section className="flex items-center justify-center py-6 bg-[url('/img/img-sobre.jpg')] bg-local bg-cover bg-center md:bg-none md:bg-azul-escuro-forte">
        <div className="md:flex md:flex-row items-center pb-8 max-w-screen-xl">
          <img
            className="hidden md:flex w-6/12 rounded-r-full mt-4"
            src="/img/img-sobre.jpg"
            alt=""
          />
          <div className="flex flex-col items-center justify-center md:w-6/12">
            <h2 className="text-3xl md:text-6xl text-vermelho font-rollingstone py-6">
              Sobre
            </h2>
            <div className="bg-azul-escuro-forte w-3/4 rounded-3xl p-4">
              <p className="text-white text-center text-lg font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                accusamus magni maiores suscipit molestiae voluptas velit
                repellendus ut culpa. Sequi nemo blanditiis sed reiciendis aut
                iusto dicta porro qui adipisci aliquam facilis molestiae
                repellendus quia ipsam minus excepturi, culpa deserunt?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="flex items-center justify-center bg-bege py-6">
        <div className="flex flex-col items-center justify-center bg-bege mb-6 max-w-screen-xl">
          <h2 className="text-3xl md:text-6xl text-vermelho font-rollingstone py-6 md:mb-16">
            Valores
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
      <section className="flex items-center justify-center bg-gradient-to-r from-vermelho to-black py-12">
        <div className="flex flex-col items-center justify-center max-w-screen-xl">
          <div className="flex flex-col items-center justify-center mb-6">
            <h2 className="text-3xl md:text-6xl text-white font-rollingstone m-9 md:mb-16">
              Produtos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row auto-rows items-center justify-center gap-y-32 md:mx-6 md:flex-row ">
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
        </div>
      </section>
    </>
  );
}

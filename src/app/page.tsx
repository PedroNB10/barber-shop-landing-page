"use client";

import Product from "@/components/Product";

export default function Home() {
  return (
    <>
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

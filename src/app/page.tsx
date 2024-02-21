
import { Carousel, Slide } from "./components/Carousel";


export default function Home() {

  let slides: Slide[] = [
    { src: "img/carrossel-01.jpg", alt: "Rapaz cortando o cabelo de um outro homem." },
    { src: "img/carrossel-02.jpg", alt: "Corte em foco de um outro cabeleireiro." },
    { src: "img/carrossel-03.jpg", alt: "Barbeiro realizando um corte preciso na barba do cliente." },
  ];

  return (

    <>


      <Carousel slides={slides} />




    </>

  );
}

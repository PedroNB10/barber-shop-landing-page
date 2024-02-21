
import { Carousel, Slide } from "./components/Carousel";


export default function Home() {

  let slides: Slide[] = [
    { src: "img/carrossel-01.jpg", alt: "Placeholder 1" },
    { src: "img/carrossel-02.jpg", alt: "Placeholder 2" },
    { src: "img/carrossel-03.jpg", alt: "Placeholder 3" },
  ];

  return (

    <>


      <Carousel slides={slides} />




    </>

  );
}

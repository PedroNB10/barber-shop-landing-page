import React from "react";

interface IProps {
  imgUrl: string;
  imgAlt: string;
  name: string;
  price: string;
}

const Services = ({ imgUrl, imgAlt, name, price }: IProps) => {
  return (
    <div className="flex flex-col justify-center gap-2 w-full">
      <img
        className="h-64 w-64 bg-black rounded-2xl border-2 border-vermelho object-cover brightness-75"
        src={imgUrl}
        alt={imgAlt}
      />
      <div className="flex flex-col items-center p-1 gap-1">
        <h3 className="text-2xl font-bold">{name}</h3>
        <span className="text-lg">{price}</span>
      </div>
    </div>
  );
};

export default Services;

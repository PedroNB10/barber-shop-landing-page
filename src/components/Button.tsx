import React from "react";

interface IProps {
  content: string;
  href?: string;
  addClass?: string;
  isSubmitType: boolean;
}

const Button = (props: IProps) => {
  return (
    <button
      className={`${
        props.addClass
      } flex justify-center bg-vermelho-escuro hover:bg-vermelho ${
        props.isSubmitType ? " " : "hover:scale-110"
      }  active:bg-vermelho-claro transition-all duration-500 rounded-3xl p-1 px-4 border-2 border-black w-full`}
    >
      {props.isSubmitType ? (
        <a
          type={"submit"}
          target="_blank"
          className="flex flex-row items-center text-white font-bold text- text-center text-nowrap py-2"
        >
          {props.content}
        </a>
      ) : (
        <a
          href={props.href}
          target="_blank"
          className="flex flex-row items-center text-white font-bold text- text-center text-nowrap py-2"
        >
          {props.content}
        </a>
      )}
    </button>
  );
};

export default Button;

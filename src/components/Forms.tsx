"use client";

import { FormEvent, useEffect, useState } from "react";

import { Toaster, toast } from "sonner";
import emailjs, { send } from "@emailjs/browser";

import { getConfigIds } from "../app/config";
import { ConfigIds } from "../app/config";
import { sendEmail } from "../app/config";

interface IProps {
  SERVICE_ID: string;
  TEMPLATE_ID: string;
  PUBLIC_KEY: string;
}

export interface UserInputs {
  name: string;
  email: string;
  message: string;
}

export default function Forms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [IDs, setIDs] = useState<ConfigIds>({
    PUBLIC_KEY: "",
    SERVICE_ID: "",
    TEMPLATE_ID: "",
  });

  useEffect(() => {
    const getEnv = async () => {
      const configIds = await getConfigIds();
      setIDs(configIds);
    };

    getEnv();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name === "" || email === "" || message === "undefined") {
      toast.error("Preencha todos os campos");
      return;
    }

    console.log(name, email, message);

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    console.log(IDs);

    try {
      emailjs
        .send(IDs.SERVICE_ID, IDs.TEMPLATE_ID, templateParams, IDs.PUBLIC_KEY)
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            if (response.status === 200) {
              toast.success("Email enviado com sucesso!");
              setName("");
              setEmail("");
              setMessage("");
            }
          },
          (err) => {
            console.log("FAILED...", err);
            toast.error("Erro ao enviar email");
          }
        );
    } catch (err) {
      console.log(err);
      toast.error("Erro ao enviar email");
    }
  }

  return (
    <div>
      <div className="bg-red-400 mx-auto p-6 space-y-7">
        <h1 className="text-center text-white ">Contato</h1>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="p-2 rounded-md text-slate-700"
            type="text"
            placeholder="Digite seu nome"
          />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="p-2 rounded-md text-slate-700"
            type="email"
            placeholder="Digite seu email"
          />
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name=""
            id=""
            className="resize-none p-2 rounded-md"
            placeholder="Escreva sua mensagem"
          ></textarea>
          <input
            className=" bg-white cursor-pointer rounded-xl p-3"
            type="submit"
            value={"Enviar Forms"}
          />
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
}

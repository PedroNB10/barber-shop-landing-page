import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";
import GoogleSignInButton from "@/components/GoogleSignInButton";

async function SignInPage() {
  const session = await getServerSession(authConfig);
  console.log("Session: ", session);

  if (session) {
    redirect("/schedule");
  }

  return (
    <div className="bg-bege h-30 py-6 text-azul-escuro-medio font-sans w-[90vw] mx-auto md:w-full">
      <section className="flex flex-col items-center justify-center  scroll-m-24 gap-10">
        <div className="flex flex-col items-center gap-6">
          <FontAwesomeIcon icon={faCalendarDays} className="h-8" />
        </div>

        <div className="flex flex-col gap-5 justify-center">
          <span className=" font-sans font-bold  w-48 mx-auto text-center">
            Olá seja bem vindo a página de agendamento!
          </span>

          <p className="font-sans text-center w-72 md:w-96">
            Para realizar o agendamento com o serviço desejado primeiro faça o
            Login com sua conta google para poder notificar o seu barbeiro e
            encontrar um horário perfeito para vocês :){" "}
          </p>

          <GoogleSignInButton />
        </div>
      </section>
    </div>
  );
}

export default SignInPage;

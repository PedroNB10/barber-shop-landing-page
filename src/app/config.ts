"use server";

import emailjs from "@emailjs/browser";

export interface ConfigIds {
  SERVICE_ID: string;
  TEMPLATE_ID: string;
  PUBLIC_KEY: string;
}

export async function getConfigIds() {
  console.log(process.env.SERVICE_ID);
  console.log(process.env.TEMPLATE_ID);
  console.log(process.env.PUBLIC_KEY);
  return {
    SERVICE_ID: process.env.SERVICE_ID ? process.env.SERVICE_ID : "",
    TEMPLATE_ID: process.env.TEMPLATE_ID ? process.env.TEMPLATE_ID : "",
    PUBLIC_KEY: process.env.PUBLIC_KEY ? process.env.PUBLIC_KEY : "",
  };
}

export async function sendEmail(templateParams: any) {
  const IDs = await getConfigIds();

  console.log(IDs);
  try {
    const response = await emailjs.send(
      IDs.SERVICE_ID,
      IDs.TEMPLATE_ID,
      templateParams,
      IDs.PUBLIC_KEY
    );

    console.log("SUCCESS!", response.status, response.text);

    if (response.status === 200) {
      // Handle success
      console.log("Email enviado com sucesso!");
    } else {
      // Handle other status codes
      console.error("Erro ao enviar email:", response.status, response.text);
    }

    return response;
  } catch (err) {
    console.error("Error sending email:", err);
  }
}

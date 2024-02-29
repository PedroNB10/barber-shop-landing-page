"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { createClient } from "@supabase/supabase-js";
import { Session } from "@supabase/auth-helpers-react";

import { getWeekData } from "../getWeekData";
import { Toaster, toast } from "sonner";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

interface period {
  startTime: string;
  endTime: string;
}

interface Day {
  day: string;
  periods: period[];
}

// nessa variável contém os horários que o barbeiro está disponível para atender

let barberSchedule: Day[] = [
  {
    day: "Domingo",
    periods: [
      { startTime: "09:00", endTime: "12:00" },
      { startTime: "14:00", endTime: "18:00" },
    ],
  },
  {
    day: "Segunda",
    periods: [
      { startTime: "08:00", endTime: "12:00" },
      { startTime: "14:00", endTime: "18:00" },
    ],
  },
  {
    day: "Terça",
    periods: [
      { startTime: "09:00", endTime: "12:00" },
      { startTime: "14:00", endTime: "18:00" },
    ],
  },
  {
    day: "Quarta",
    periods: [
      { startTime: "09:00", endTime: "12:00" },
      { startTime: "14:00", endTime: "18:00" },
    ],
  },
  {
    day: "Quinta",
    periods: [
      { startTime: "08:00", endTime: "12:00" },
      { startTime: "14:00", endTime: "18:00" },
    ],
  },
  {
    day: "Sexta",
    periods: [
      { startTime: "09:00", endTime: "12:00" },
      { startTime: "14:00", endTime: "18:00" },
    ],
  },
  {
    day: "Sábado",
    periods: [
      { startTime: "09:00", endTime: "12:00" },
      { startTime: "14:00", endTime: "18:00" },
    ],
  },
];

let daysOfWeek = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

let services = ["Barba", "Cabelo", "Sobrancelha"];

function Schedule() {
  const [session, setSession] = useState<Session>();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [serviceSelected, setServiceSelected] = useState<string>("Barba");
  const [timeSelected, setTimeSelected] = useState<string>(
    barberSchedule[0].periods[0].startTime
  );

  const [availableHours, setAvailableHours] = useState<string[][]>();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session || undefined);

      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session || undefined);
    });

    return () => subscription.unsubscribe();
  }, []);

  const googleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          scopes: "https://www.googleapis.com/auth/calendar",
          redirectTo: "http://localhost:3000/schedule",
        },
      });

      if (error) {
        console.error("Error signing in with Google:", error);
      }
    } catch (error) {
      console.error("Unexpected error during Google sign-in:", error);
    }
  };

  useEffect(() => {
    let periodosDisponiveis = [];

    console.log(barberSchedule[selectedDay].periods);

    periodosDisponiveis = barberSchedule[selectedDay].periods.map((period) => {
      let availableHours = [];
      let startHour = Number(period.startTime.split(":")[0]);
      let endHour = Number(period.endTime.split(":")[0]);

      let actualDate = new Date();

      for (let i = startHour; i < endHour; i++) {
        let hour = i.toString().padStart(2, "0");

        if (selectedDay === actualDate.getDay() && i <= actualDate.getHours())
          continue;

        availableHours.push(`${hour}:00`);

        if (serviceSelected === "Barba") {
          availableHours.push(`${hour}:15`);
          availableHours.push(`${hour}:30`);
          availableHours.push(`${hour}:45`);
        }
        if (serviceSelected === "Cabelo") {
          availableHours.push(`${hour}:30`);
        }
        if (serviceSelected === "Sobrancelha") {
          availableHours.push(`${hour}:10`);
          availableHours.push(`${hour}:20`);
          availableHours.push(`${hour}:30`);
          availableHours.push(`${hour}:40`);
          availableHours.push(`${hour}:50`);
        }
      }

      return availableHours;
    });

    setAvailableHours(periodosDisponiveis);
    setTimeSelected(periodosDisponiveis[0][0]);
  }, [selectedDay, serviceSelected]);

  async function signOut() {
    await supabase.auth.signOut();
  }

  const handleSignInClick = () => {
    googleSignIn();
  };

  async function createCalendarEvent() {
    let initialDate;
    let finalDate;
    console.log(timeSelected);
    console.log(serviceSelected);
    console.log(barberSchedule[selectedDay].day);

    let week = getWeekData();
    console.log(week);

    let day = week.find((day) => day.indexDoDia === selectedDay);
    console.log(day?.diaDoMes);
    let actualDate = new Date();

    let currentMinute = timeSelected.split(":")[1];
    let currentHour = timeSelected.split(":")[0];

    let initialDateDay = `${actualDate.getFullYear()}-${day?.numeroDoMes}-${
      day?.diaDoMes
    }T${timeSelected}:00-03:00`;

    let finalHour;
    let finalMinute;

    if (serviceSelected === "Barba") {
      finalMinute = Number(currentMinute) + 15;

      if (finalMinute >= 60) {
        finalMinute = finalMinute - 60;
        finalHour = Number(currentHour) + 1;
      } else {
        finalHour = currentHour;
      }
    }

    if (serviceSelected === "Cabelo") {
      finalMinute = Number(currentMinute) + 30;

      if (finalMinute >= 60) {
        finalMinute = finalMinute - 60;
        finalHour = Number(currentHour) + 1;
      } else {
        finalHour = currentHour;
      }
    }

    if (serviceSelected === "Sobrancelha") {
      finalMinute = Number(currentMinute) + 10;

      if (finalMinute >= 60) {
        finalMinute = finalMinute - 60;
        finalHour = Number(currentHour) + 1;
      } else {
        finalHour = currentHour;
      }
    }

    let finalHourString = finalHour?.toString().padStart(2, "0");
    console.log(finalHourString);
    let finalMinuteString = finalMinute?.toString().padStart(2, "0");
    console.log(finalMinuteString);

    let finalDateDay = `${actualDate.getFullYear()}-${day?.numeroDoMes}-${
      day?.diaDoMes
    }T${finalHourString}:${finalMinuteString}:00-03:00`;

    console.log(initialDateDay);
    console.log(finalDateDay);
    //dateTime: "2024-02-29T18:00:00-03:00",

    // dateTime: "2024-02-29T18:00:00-03:00",
    // initialDate 2024-02-29T:00-03:00

    const event = {
      summary: serviceSelected,
      description: "Serviço realizado por barbearia Barba Rolling ",

      start: {
        dateTime: initialDateDay,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        //dateTime: "2024-02-29T18:45:00-03:00",
        dateTime: finalDateDay,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      attendees: [
        { email: "barbarolling@gmail.com", responseStatus: "needsAction" },
      ],

      sendUpdates: "all",
    };

    await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session?.provider_token}`,

          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      }
    )
      .then((data) => {
        return data;
      })
      .then((data) => {
        console.log(data);
        console.log(data.status);
        if (data.status === 200) {
          console.log("Evento criado com sucesso!");
          toast.success("Evento criado com sucesso!");
        } else {
          console.log("Erro ao criar evento!");
          toast.error("Erro ao criar evento!");
        }
      });
  }

  return (
    <div className="bg-bege h-30 py-12 text-azul-escuro-medio font-sans ">
      <section className="flex flex-col items-center justify-center  scroll-m-24 gap-10">
        <div className="flex flex-col items-center gap-6">
          <FontAwesomeIcon icon={faCalendarDays} className="h-8" />

          {isLoading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-azul-escuro-forte"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            <></>
          )}
        </div>

        {session ? (
          <div className="flex flex-col gap-5 justify-center">
            <span className=" font-sans font-bold w-96 text-center">
              Seja bem vindo(a) {session.user.user_metadata.full_name}, prossiga
              selecionando o tipo de serviço e o horário desejado.
            </span>

            <span className="self-start">Serviço</span>
            <select name="" id="">
              {services.map((service) => {
                return (
                  <option
                    value={service}
                    onClick={() => {
                      setServiceSelected(service);
                    }}
                  >
                    {service}
                  </option>
                );
              })}
            </select>

            <span className="self-start">Dia</span>
            <select name="" id="">
              {daysOfWeek.map((day, index) => {
                return (
                  <option
                    value={index}
                    onClick={() => {
                      setSelectedDay(index);
                    }}
                  >
                    {day}
                  </option>
                );
              })}
            </select>

            <span className="self-start">Horário</span>
            <select name="" id="">
              {availableHours?.map((hour) => {
                return hour.map((time) => {
                  return (
                    <option
                      value={time}
                      onClick={() => {
                        setTimeSelected(time);
                      }}
                    >
                      {time}
                    </option>
                  );
                });
              })}
            </select>

            <button
              className="bg-cinza text-bege p-3 w-fit mx-auto"
              onClick={createCalendarEvent}
            >
              Agendar
            </button>

            <button
              className="bg-vermelho-escuro px-4 py-2 rounded-md text-bege w-fit mx-auto"
              onClick={signOut}
            >
              Sair
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-5 justify-center">
            <span className=" font-sans font-bold text-center">
              Olá seja bem vindo a página de agendamento!
            </span>

            <p className="font-sans text-center w-96">
              Para realizar o agendamento com o serviço desejado primeiro faça o
              Login com sua conta google para poder notificar o seu barbeiro e
              encontrar um horário perfeito para vocês :){" "}
            </p>
            <button
              className="bg-vermelho-escuro px-4 py-2 rounded-md text-bege flex items-center gap-2 mx-auto"
              onClick={handleSignInClick}
            >
              <FontAwesomeIcon icon={faGoogle} className="h-5" />
              Login com Google
            </button>
          </div>
        )}
      </section>

      <Toaster richColors />
    </div>
  );
}

export default Schedule;

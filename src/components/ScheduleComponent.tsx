"use client";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { signOut } from "next-auth/react";
import { createEventOnCalendar } from "@/app/actions";
import { useRouter } from "next/navigation";

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
      { startTime: "14:00", endTime: "23:00" },
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
      { startTime: "07:00", endTime: "12:00" },
      { startTime: "14:00", endTime: "18:00" },
    ],
  },
];

let daysOfWeekOnly = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const daysOfWeek: Record<string, number> = {
  Domingo: 0,
  Segunda: 1,
  Terça: 2,
  Quarta: 3,
  Quinta: 4,
  Sexta: 5,
  Sábado: 6,
};

let services = ["Barba", "Cabelo", "Sobrancelha"];

function ScheduleComponent() {
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [serviceSelected, setServiceSelected] = useState<string>(services[0]);
  const [timeSelected, setTimeSelected] = useState<string>(
    barberSchedule[0].periods[0].startTime
  );

  const [availableHours, setAvailableHours] = useState<string[][]>();

  async function handleCreateEvent() {
    await createEventOnCalendar({
      selectedDay,
      serviceSelected,
      timeSelected,
    }).then((result) => {
      if (result == 200) {
        toast.success("Evento criado com sucesso");
      } else {
        toast.error("Erro ao criar evento");
      }
    });
  }

  useEffect(() => {
    let avaiblePeriods = [];

    avaiblePeriods = barberSchedule[selectedDay].periods.map((period) => {
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

    setAvailableHours(avaiblePeriods);

    console.log("Primeiro Horario disponíveis:");
    // console.log(avaiblePeriods);
    let selectComponent = document.getElementById(
      "selectTime"
    ) as HTMLSelectElement;

    for (let i = 0; i < avaiblePeriods.length; i++) {
      if (avaiblePeriods[i].length > 0) {
        console.log(avaiblePeriods[i][0]);
        setTimeSelected(avaiblePeriods[i][0]);
        if (selectComponent) selectComponent.value = avaiblePeriods[i][0];
        break;
      }
    }
  }, [selectedDay, serviceSelected]);

  return (
    <div className="flex flex-col gap-5 justify-center md:w-1/2 w-full">
      <div className="flex flex-col px-5 gap-2">
        <span className="self-start">Serviço</span>
        <select
          className="bg-azul-escuro-medio text-bege p-2 rounded-md"
          name=""
          id=""
          onChange={(e) => {
            setServiceSelected(e.target.value);
            console.log(e.target.value);
          }}
        >
          {services.map((service) => {
            return (
              <option
                value={service}
                key={service}
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
        <select
          name=""
          id=""
          className="bg-azul-escuro-medio text-bege p-2 rounded-md"
          onChange={(e) => {
            setSelectedDay(daysOfWeek[e.target.value]);
            console.log(e.target.value);
            console.log(
              barberSchedule[daysOfWeek[e.target.value]].periods[0].startTime
            );
          }}
        >
          {daysOfWeekOnly.map((day) => {
            return (
              <option key={day} value={day}>
                {day}
              </option>
            );
          })}
        </select>
        <span className="self-start">Horário</span>
        <select
          name=""
          id="selectTime"
          className="bg-azul-escuro-medio text-bege p-2 rounded-md"
          onChange={(e) => {
            setTimeSelected(e.target.value);
            console.log(e.target.value);
          }}
        >
          {availableHours?.flatMap((hour) =>
            hour.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))
          )}
        </select>

        <button
          className="bg-cinza text-bege py-2 w-full mx-auto rounded-md mb-10"
          onClick={() => {
            handleCreateEvent();
          }}
        >
          Agendar
        </button>

        <button
          className="bg-vermelho-escuro rounded-md text-bege w-full mx-auto py-2"
          onClick={() => {
            signOut();
          }}
        >
          Sair
        </button>
      </div>

      <Toaster richColors />
    </div>
  );
}

export default ScheduleComponent;

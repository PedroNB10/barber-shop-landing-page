"use server";

import {  getServerSession } from "next-auth";

import { authConfig } from "@/lib/auth";
import { getWeekData } from "./util/getWeekData";
interface Event {
    timeSelected: string;
    serviceSelected: string;
    selectedDay: number;
}

export  async function createEventOnCalendar({selectedDay, serviceSelected, timeSelected} : Event) {
  const session = await getServerSession(authConfig);
    // console.log(session);
    // console.log(session?.accessToken)
    let week = getWeekData();

    let day = week.find((day) => day.indexDay === selectedDay);

    let actualDate = new Date();

    let currentMinute = timeSelected.split(":")[1];
    let currentHour = timeSelected.split(":")[0];

    let initialDateDay = `${actualDate.getFullYear()}-${day?.numberOfMonth}-${
      day?.dayOfMonth
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

    let finalMinuteString = finalMinute?.toString().padStart(2, "0");

    let finalDateDay = `${actualDate.getFullYear()}-${day?.numberOfMonth}-${
      day?.dayOfMonth
    }T${finalHourString}:${finalMinuteString}:00-03:00`;

    // console.log(initialDateDay);
    // console.log(finalDateDay);
    // console.log(selectedDay);
    // console.log(serviceSelected);
    // console.log(timeSelected);
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
      
      const response =  await fetch(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
  
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
        }
      )
        .then((data) => {
          return data;
        })
        
        console.log(response.status);
        return response.status;
}
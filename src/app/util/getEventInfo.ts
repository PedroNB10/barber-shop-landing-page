 import { getWeekData } from "./getWeekData";
 
 export function getEventInfo(props: {
    selectedDay: number;
    serviceSelected: string;
    timeSelected: string;
  }) {
    let week = getWeekData();
  
    let day = week.find((day) => day.indexDay === props.selectedDay);
  
    let actualDate = new Date();
  
    let currentMinute = props.timeSelected.split(":")[1];
    let currentHour = props.timeSelected.split(":")[0];
  
    let initialDateDay = `${actualDate.getFullYear()}-${day?.numberOfMonth}-${
      day?.dayOfMonth
    }T${props.timeSelected}:00-03:00`;
  
    let finalHour;
    let finalMinute;
  
    if (props.serviceSelected === "Barba") {
      finalMinute = Number(currentMinute) + 15;
  
      if (finalMinute >= 60) {
        finalMinute = finalMinute - 60;
        finalHour = Number(currentHour) + 1;
      } else {
        finalHour = currentHour;
      }
    }
  
    if (props.serviceSelected === "Cabelo") {
      finalMinute = Number(currentMinute) + 30;
  
      if (finalMinute >= 60) {
        finalMinute = finalMinute - 60;
        finalHour = Number(currentHour) + 1;
      } else {
        finalHour = currentHour;
      }
    }
  
    if (props.serviceSelected === "Sobrancelha") {
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
  
    console.log(initialDateDay);
    console.log(finalDateDay);
    console.log(props.selectedDay);
    console.log(props.serviceSelected);
    console.log(props.timeSelected);

    return {
        initialDateDay,
        finalDateDay,
        selectedDay: props.selectedDay,
        serviceSelected: props.serviceSelected,
        timeSelected: props.timeSelected,
    }
  
    
  
  }
  
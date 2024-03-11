import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import { getServerSession } from "next-auth";
import ScheduleComponent from "@/components/ScheduleComponent";

async function Schedule() {
  await loginIsRequiredServer();
  const session = await getServerSession(authConfig);

  return (
    <div className="bg-bege h-30 py-6 text-azul-escuro-medio font-sans w-[90vw] mx-auto md:w-full">
      <section className="flex flex-col items-center justify-center  scroll-m-24 gap-10">
        <div className="flex flex-col items-center gap-6">
          <FontAwesomeIcon icon={faCalendarDays} className="h-8" />
        </div>

        <div className="flex flex-col gap-5 justify-center">
          <span className=" font-sans font-bold text-center w-2/3 mx-auto">
            Seja bem vindo(a) {session?.user?.name}, prossiga selecionando o
            tipo de serviço e o horário desejado.
          </span>
        </div>

        <ScheduleComponent />
      </section>
    </div>
  );
}

export default Schedule;

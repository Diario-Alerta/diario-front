"use client";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
export default function Home() {
  return (
    <div className="xl:mx-96">
      <div className="border mt-1 rounded-sm">
        <NavBar></NavBar>
      </div>
      <div className="flex flex-col border rounded-sm mt-1 md:h-[650px] items-center pt-10">
        <h1 className="md:mx-52 text-center mt-5">Este e o campo de pesquisa personalizada, onde pode-se colocar Notificações para qualquer termo ou frase desejada.</h1>
          <form className="flex flex-col gap-2 my-5">
          <input
            name="termo"
            type="text"
            id="termo"
            required
            placeholder="Termo a Ser Pesquisado"
            className="w-42 border rounded-sm p-2"
          />
          <input
            name="termo2"
            type="text"
            id="termo2"
            placeholder="Segundo Termo"
            className="w-42 border rounded-sm p-2"
          /><input
          name="termo3"
          type="text"
          id="termo3"
          placeholder="Terceiro Termo"
          className="w-42 border rounded-sm p-2"
        />
        <input
          name="termo4"
          type="text"
          id="termo4"
          placeholder="Quarto Termo"
          className="w-42 border rounded-sm p-2"
        />
        <input
          name="termo5"
          type="text"
          id="termo5"
          placeholder="Quinto Termo"
          className="w-42 border rounded-sm p-2"
        />
          <input
            name="Email"
            type="text"
            id="email"
            required
            placeholder="Email de Notificação"
            className="w-42 border rounded-sm p-2"
          />
          <button className="border p-1 dark:text-black bg-[#FFBD59] hover:text-white hover:bg-[#0E7201]">
            <span>Enviar dados</span>
          </button>
        </form>
        <a href="/" className="border p-1 dark:text-black bg-[#242D4C] text-white dark:bg-white hover:text-white hover:bg-[#0E7201]">VOLTAR</a>
      </div>
    </div>
  );
}

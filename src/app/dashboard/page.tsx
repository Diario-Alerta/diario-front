"use client";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useFieldArray, useForm } from "react-hook-form";
export default function Home() {
  const { register, handleSubmit, control } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  return (
    <div className="xl:mx-96">
      <div className="border mt-1 rounded-sm">
        <NavBar></NavBar>
      </div>
      <div className="flex flex-col border rounded-sm mt-1 md:h-[650px] items-center pt-10">
        <h1 className="md:mx-52 text-center mt-5">
          Este e o campo de pesquisa personalizada, onde pode-se colocar
          Notificações para qualquer termo ou frase desejada.
        </h1>
        <div className="border p-1 rounded-lg flex justify-items-center flex-col mt-4 text-center w-60">
          <h1>Você pode Adicionar ou Remover campos livremente</h1>
          <div className="flex gap-1 justify-center">
            <button
              className="border p-1 mt-2 hover:bg-[#242D4C] text-white bg-[#0E7201]"
              onClick={() => append({})}
            >
              ADICIONAR
            </button>
            <button
              className="border p-1 mt-2 hover:bg-[#242D4C] text-white bg-red-800"
              onClick={() => remove()}
            >
              REMOVER
            </button>
          </div>
        </div>
        <form className="flex flex-col gap-2 my-5">
          <div className="flex flex-col gap-2">
            <input
              name="termo1"
              type="text"
              required
              placeholder="Termo a Ser Pesquisado"
              className="w-42 border rounded-sm p-2"
            />
            {fields.map(({ id }, index) => {
              return (
                <input
                  key={id}
                  name="termo"
                  type="text"
                  placeholder="Termo a Ser Pesquisado"
                  className="w-42 border rounded-sm p-2"
                />
              );
            })}
          </div>
          <input
            name="Email"
            type="text"
            id="email"
            required
            placeholder="Email de Notificação"
            className="w-42 border rounded-sm p-2"
          />
          <button
            type="submit"
            className="border p-1 dark:text-black bg-[#FFBD59] hover:text-white hover:bg-[#0E7201]"
          >
            <span>Enviar dados</span>
          </button>
        </form>
        <a
          href="/"
          className="border p-1 dark:text-black bg-[#242D4C] text-white dark:bg-white hover:text-white hover:bg-[#0E7201]"
        >
          VOLTAR
        </a>
      </div>
    </div>
  );
}

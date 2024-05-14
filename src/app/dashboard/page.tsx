"use client";
import NavBar from "@/components/NavBar";
import { useFieldArray, useForm } from "react-hook-form";
import PopSucess from "@/components/PopSucess";
import PopError from "@/components/PopError";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import Logout from "../logout";

export default function Dashboard() {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  return (
    <div className="xl:mx-96">
      <div className="border dark:border-gray-500 mt-1 rounded-sm">
        <NavBar></NavBar>
      </div>
      <div className="flex flex-col border dark:border-gray-500 rounded-sm mt-1 items-center pt-10 pb-10">
        <h1 className="font-medium text-2xl text-center dark:text-white text-[#242D4C]">
          Pesquisa Avançada
        </h1>
        <h1 className="md:mx-52 mx-5 text-center mt-5">
          Este e o campo de pesquisa personalizada, onde pode-se colocar
          Notificações para qualquer termo ou frase desejada.
        </h1>
        <div className="border dark:border-gray-500 p-1 rounded-lg flex justify-items-center flex-col mt-4 text-center w-60">
          <h1>Você pode Adicionar ou Remover campos livremente</h1>
          <div className="flex gap-1 justify-center mb-2">
            <button
              className="border p-1 mt-2 hover:bg-[#51b842] rounded text-white bg-[#0E7201]"
              onClick={() => append({})}
            >
              ADICIONAR
            </button>
            <button
              title="REMOVER"
              className="border p-1 mt-2 hover:bg-[#ce4747] rounded text-white bg-[#8f3131]"
              onClick={() => remove()}
            >
              LIMPAR
            </button>
          </div>
        </div>
        <form className="flex flex-col gap-2 my-5">
          <label htmlFor="departmento">Escolha um Departamento:</label>
          <select
            required
            name="departamento"
            className="w-60 border rounded-sm p-2"
          >
            <option value="todos">Todos</option>
            <option value="Presidência da República">
              Presidência da República
            </option>
            <option value="Ministério da Agricultura, Pecuária e Abastecimento">
              Ministério da Agricultura, Pecuária e Abastecimento
            </option>
            <option value="Ministério da Cidadania">
              Ministério da Cidadania
            </option>
            <option value="Ministério da Ciência, Tecnologia e Inovações">
              Ministério da Ciência, Tecnologia e Inovações
            </option>
            <option value="Ministério das Comunicações">
              Ministério das Comunicações
            </option>
            <option value="Ministério da Defesa">Ministério da Defesa</option>
            <option value="Ministério do Desenvolvimento Regional">
              Ministério do Desenvolvimento Regional
            </option>
            <option value="Ministério da Economia">
              Ministério da Economia
            </option>
            <option value="Ministério da Educação">
              Ministério da Educação
            </option>
            <option value="Ministério da Infraestrutura">
              Ministério da Infraestrutura
            </option>
            <option value="Ministério da Justiça e Segurança Pública">
              Ministério da Justiça e Segurança Pública
            </option>
            <option value="Ministério do Meio Ambiente">
              Ministério do Meio Ambiente
            </option>
            <option value="Ministério de Minas e Energia">
              Ministério de Minas e Energia.
            </option>
          </select>
          <Separator></Separator>
          <div className="flex flex-col gap-2">
            <input
              name="termo1"
              type="text"
              required
              placeholder="Termo a Ser Pesquisado"
              className="w-60 border rounded-sm p-2"
            />
            {fields.map(({ id }, index) => {
              return (
                <div>
                  <input
                    key={id}
                    name="termo"
                    type="text"
                    placeholder="Termo adicional"
                    className="w-56 border rounded-sm p-2"
                  />
                  <button
                    className="border p-1 h-[42px] hover:bg-[#ce4747] text-white bg-[#8f3131] rounded"
                    onClick={() => remove(index)}
                  >
                    -
                  </button>
                </div>
              );
            })}
          </div>

          <input
            name="Email"
            type="text"
            id="email"
            required
            placeholder="Email de Notificação"
            className="w-60 border rounded-sm p-2"
          />
          <button
            type="submit"
            className="border p-1 dark:text-black bg-[#FFBD59] hover:bg-[#ffd28f]"
          >
            <span>Enviar dados</span>
          </button>
        </form>
        <Logout></Logout>
        <div className="mt-3 flex flex-col">
          <PopSucess></PopSucess>
          <PopError></PopError>
        </div>
      </div>
    </div>
  );
}

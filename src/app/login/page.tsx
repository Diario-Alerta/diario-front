import NavBar from "@/components/NavBar";
import Form from "./form";

export default function LoginPage() {
  return (
    <div className="min-w-full h-screen flex flex-col">
      <div className="border dark:border-gray-500 mt-1 rounded-sm xl:mx-96">
        <NavBar></NavBar>
      </div>
      <div className="flex flex-col justify-center xl:mx-96 border dark:border-gray-500 rounded-sm mt-1 md:h-[450px] items-center ">
        <h1 className="mx-10 md:mx-44 text-center text-2xl underline italic dark:text-white text-[#242D4C]">Bem-vindo ao Diario Alerta!</h1>
        <h1 className="mx-10 md:mx-44 lg:mx-80 mt-2 text-center dark:text-white text-[#242D4C]">
          Faça login para acessar sua conta e aproveitar todos os recursos e
          benefícios.
        </h1>
        <div className="bg-black/70 flex flex-col items-center p-2 rounded-lg mt-2">
          <Form></Form>
          <a
            className="m-1 bg-white hover:bg-gray-200 rounded-sm p-1 dark:text-black"
            href="/"
          >
            Voltar
          </a>
        </div>
      </div>
      <div className="border dark:border-gray-500 mt-1 rounded-sm xl:mx-96 p-1 gap-1">
        <h1 className="text-2xl dark:text-white text-[#242D4C]">REGISTRO</h1>
      <h1>Os registros no sistema sao feitos de forma manual, e podemos cobrar uma taxa pequena dependendo to tamanho da sua consulta. Se você deseja acessar todas as funcionalidades, entre em contato por email.</h1>
      <h1 className="mt-2 mb-2 text-center text-lg font-semibold dark:text-white text-[#242D4C]">Antoniocarlosjr007@hotmail.com</h1>
      </div>
    </div>
  );
}

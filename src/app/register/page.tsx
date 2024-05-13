import { FormEvent } from "react";
import Form from "./form";

export default async function registerPage() {
 
  return (
    <div className="min-w-full h-screen bg-[#242D4C] flex justify-center">
      <div className="flex items-center bg-white h-96 w-96 m-40 border rounded-sm flex-col">
        <h1 className="text-2xl m-10">Registros</h1>
        <Form></Form>
        <a
          href="/"
          className="m-1 bg-gray-300 hover:bg-gray-100 rounded-sm p-1"
        >
          SAIR
        </a>
      </div>
    </div>
  );
}

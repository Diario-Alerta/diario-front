import NavBar from "@/components/NavBar";
import Form from "./form";

export default function LoginPage() {
  return (
    <div className="min-w-full h-screen flex flex-col">
      <div className="border dark:border-gray-500 mt-1 rounded-sm xl:mx-96">
        <NavBar></NavBar>
      </div>
      <div className="flex flex-col justify-center xl:mx-96 border dark:border-gray-500 rounded-sm mt-1 md:h-[650px] items-center ">
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
    </div>
  );
}

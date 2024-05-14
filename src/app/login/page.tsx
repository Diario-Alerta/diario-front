import Form from "./form";

export default function LoginPage() {
  return (
    <div className="min-w-full h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center">
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

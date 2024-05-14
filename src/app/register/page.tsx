import Form from "./form";
import { getServerSession } from "next-auth";
import { redirect} from "next/navigation";
import Logout from "../logout";

export default async function registerPage() {

  const session = await getServerSession();
  if(!session){
    redirect("/login");
  }
  return (
    <div className="min-w-full h-screen bg-[#242D4C] flex justify-center">
      <div className="flex items-center bg-white h-96 w-96 m-40 border rounded-sm flex-col">
        <h1 className="text-2xl m-10">Registros</h1>
        <Form></Form>
        <Logout></Logout>
      </div>
    </div>
  );
}

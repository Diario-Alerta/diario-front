import { getServerSession } from "next-auth";
import { redirect} from "next/navigation";

export default async function Verification() {
  const session = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }
  return redirect("/login");
}

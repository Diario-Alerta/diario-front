"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log({ response });

    if (!response?.error) {
      router.push("/verification");
      router.refresh();
    }if(!!response?.error){
      router.refresh()
      window.alert("Usuario ou Senha Invalida!");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="m-2 flex items-center justify-center flex-col gap-1"
    >
      <input
        name="username"
        type="username"
        required
        className="border rounded"
        placeholder="username"
      />
      <input
        name="password"
        type="password"
        required
        className="border rounded"
        placeholder="senha"
      />
      <button
        type="submit"
        className="m-1 bg-white hover:bg-gray-200 rounded-sm p-1 dark:text-black"
      >
        LOGIN
      </button>
    </form>
  );
}

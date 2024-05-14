"use client";

import { FormEvent } from "react";

export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
      }),
    });
    console.log({ response });
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
        className="m-1 bg-gray-300 hover:bg-gray-100 rounded-sm p-1"
      >
        Enviar
      </button>
    </form>
  );
}

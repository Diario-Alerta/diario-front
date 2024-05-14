"use client";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <a className="border py-1 px-2 mt-2 hover:bg-[#ce4747] rounded text-white bg-[#8f3131]"
      onClick={() => {
        signOut();
      }}
    >
      SAIR
    </a>
  );
}

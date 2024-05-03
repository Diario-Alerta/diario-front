"use client";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
export default function Home() {
  return (
    <div className="xl:mx-96">
      <div className="border mt-1 rounded-sm">
        <NavBar></NavBar>
      </div>
      <div className="flex flex-col border rounded-sm mt-1 md:h-[650px] items-center pt-10">
        <a href="/">VOLTAR</a>
      </div>
    </div>
  );
}

"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ModeToggle } from "@/providers/mode-toggle";
export default function NavBar() {
  return (
    <div className="text-[#242D4C] justify-between flex flex-row items-center">
      <div className="w-[250px] p-1 ">
        <AspectRatio ratio={1000 / 250}>
          <Image
            src={"/1.png"}
            fill
            alt="logo do site"
            className="rounded-md object-fill dark:hidden light-visible"
          />
          <Image
            src={"/2.png"}
            fill
            alt="logo do site"
            className="rounded-md object-fill invisible dark:visible"
          />
        </AspectRatio>
      </div>
      <div className="flex items-center gap-5  dark:text-white p-1">
        <a href="/dashboard" className="rounded-lg hover:bg-slate-100/50 p-2 ">
          LOGIN
        </a>
        <Drawer>
          <DrawerTrigger className="text-center rounded-lg hover:bg-slate-100/50 p-2">
            SOBRE
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-center">Seja Bem Vindo!</DrawerTitle>
              <DrawerDescription className="text-center lg:mx-80 mt-2">
              O Diário Alerta é um aplicativo que oferece a tranquilidade de monitorar se o seu CPF ou CNPJ foi mencionado no Diário Oficial da União. Com uma interface intuitiva, você pode cadastrar seus documentos e receber notificações instantâneas sempre que houver uma citação relevante para você. Esteja sempre informado sobre quaisquer menções legais que envolvam seus dados pessoais ou empresariais, permitindo que você tome medidas proativas, se necessário. Mantenha-se atualizado e protegido com o Diário Alerta!
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="text-center">
              Antonio Carlos de Abreu Junior & Arthur Oliveira da Silva
              <DrawerClose>
                <Button variant="outline">Fechar</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
}

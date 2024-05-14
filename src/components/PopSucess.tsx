"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function PopSucess() {
  return (
    <Dialog>
      <DialogTrigger className="border p-1 rounded bg-[#3d3d3d] text-white dark:text-gray-400 hover:text-white hover:bg-[#5f5f5f]">teste pop up sucesso</DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-green-600 flex items-center">
          <DialogTitle>Sucesso!</DialogTitle>
          <DialogDescription className="text-center">
            Seus dados foram enviados com sucesso. Agora é só so ficar de olho em seu email, se seus dados forem citados, avisaremos você! 
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

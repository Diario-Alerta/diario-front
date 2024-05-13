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
      <DialogTrigger>teste sucesso</DialogTrigger>
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

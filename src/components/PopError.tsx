"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function PopError() {
  return (
    <Dialog>
      <DialogTrigger>teste erro</DialogTrigger>
      <DialogContent>
        <DialogHeader  className="text-red-600 items-center flex">
          <DialogTitle>ERRO!!</DialogTitle>
          <DialogDescription className="text-center">
            Seus dados NÃO foram enviados. [motivo do erro] 
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

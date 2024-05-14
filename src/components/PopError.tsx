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
      <DialogTrigger className="border p-1 rounded bg-[#3d3d3d] text-white dark:text-gray-400 hover:text-white hover:bg-[#5f5f5f]">teste pop up erro</DialogTrigger>
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

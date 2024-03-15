import Image from "next/image";
import React from "react";
import MainButton from "../MainButton";
import CloseDialogButton from "../CloseDialogButton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function GameDialog() {
  return (
    <Dialog>
      <DialogTrigger className="col-span-2 ">
        <div className="relative active:scale-95 duration-75 transition-transform">
          <div className="shadow-lg rounded-[30px] aspect-square flex items-center justify-center overflow-hidden">
            <Image
              src={"/icons/game.gif"}
              layout={"responsive"}
              height={400}
              width={100}
              alt="boost"
              unoptimized={true}
              className="scale-[1.6]"
            />
            <Image
              src={"/icons/cases.gif"}
              layout={"responsive"}
              height={100}
              width={100}
              alt="boost"
              unoptimized={true}
              className="scale-[0.6] -translate-y-10 absolute"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <MainButton text="Play" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-transparent border-none p-0 py-8">
        <CloseDialogButton />
      </DialogContent>
    </Dialog>
  );
}

export default GameDialog;
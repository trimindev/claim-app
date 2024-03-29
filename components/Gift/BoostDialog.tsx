import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import BoostCardList from "./BoostCardList";
import CloseDialogButton from "../CloseDialogButton";

function BoostDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative active:scale-95 duration-75 transition-transform">
          <div className="shadow-lg rounded-[30px] aspect-[7/8] flex items-center justify-center overflow-hidden">
            <Image
              src={"/icons/rocket.gif"}
              height={400}
              width={100}
              alt="boost"
              unoptimized={true}
              className="scale-[1.6] w-full"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 shadow-lg">
            <div className="bg-gradient-to-tr from-amber-300 to-amber-400 border-neutral-800 border-[1px] px-4 py-2 rounded-xl text-nowrap font-bold text-xl">
              Boost
            </div>
            <div className="absolute bg-neutral-950 w-full h-full rounded-xl -z-10 top-[3px] left-1 "></div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-transparent border-none p-0 py-8">
        <BoostCardList />

        <CloseDialogButton />
      </DialogContent>
    </Dialog>
  );
}

export default BoostDialog;

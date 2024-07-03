"use client";
//TextScroll.tsx
import { ReactNode } from "react";
import { RemoveScroll } from "react-remove-scroll";

export default function TextScroll({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full bg-red-400">
      <div className="flex flex-col gap-8 mb-[5vh] h-full mt-[250px] bg-blue-700 ">
        {children}
      </div>
    </div>
  );
}

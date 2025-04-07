"use client";
import React from "react";
import Formlogin from "./_components/formlogin";

export default function Login() {
  return (
    <div className="w-[90vw] flex flex-col items-center justify-center mt-12 overflow-x-hidden rounded-xl">
      <p className="mb-2 font-semibold text-orange-400 text-start w-full sm:w-1/2">
        Seja bem vindo...
      </p>
      <Formlogin />
      <p className="mt-4 font-semibold text-sm text-end w-[90vw] sm:w-1/2 text-orange-400">
        Ano 2025
      </p>
    </div>
  );
}

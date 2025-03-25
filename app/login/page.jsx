import React from "react";
import Formlogin from "./_components/formlogin";
export default function Login() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-12 ">
      <p className="mb-4 font-semibold text-slate-200">Bem Vindo ao SenacX</p>
      <Formlogin />
      <p className="mt-4 font-semibold text-sm text-end w-1/3 text-slate-200">
        Ano 2025
      </p>
    </div>
  );
}

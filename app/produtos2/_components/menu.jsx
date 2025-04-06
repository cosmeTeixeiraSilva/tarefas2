import React from "react";
import Link from "next/link";
export default function MenuPrincipal() {
  return (
    <div>
      <nav className="bg-blue-600 p-4 flex items-center justify-center  w-screen z-50 border-b-2 ">
        <Link href="/home">
          <button className="p-4 mt-4 rounded text-white font-bold border border-orange-400 bg-orange-500 w-[80vw] text-xl">
            Voltar
          </button>
        </Link>
      </nav>
    </div>
  );
}

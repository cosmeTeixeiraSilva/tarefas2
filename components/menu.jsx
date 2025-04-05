import React from "react";
import Link from "next/link";
export default function MenuPrincipal() {
  return (
    <div>
      <nav className="bg-blue-600 p-1 flex items-center justify-center sm:justify-end gap-4 fixed top-0 z-50 w-full border-b-2">
        <Link href="/home">
          <button className="px-8 rounded text-orange-400 font-bold border border-orange-400 bg-[#121212]">
            Voltar
          </button>
        </Link>
      </nav>
    </div>
  );
}

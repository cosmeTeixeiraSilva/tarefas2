import { AuthProvider } from "@/context/autContext";
import "./globals.css";




export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className=" bg-[#121212] overflow-x-hidden flex m-auto justify-center"
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

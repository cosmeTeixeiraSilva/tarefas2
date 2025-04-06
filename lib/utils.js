import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

//criando uma função de atraso 
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//Escolha do componente pelo tamanho da Tela 
export default function Mobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define mobile se for menor que 768px
    };

    handleResize(); // Chamada inicial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? true : false;
}

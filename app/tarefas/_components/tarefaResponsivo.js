"use client";

import { useEffect, useState } from "react";
import CardTarefas from "./cards";
import ListaTarefas2 from "./ListaTarefas2";// Certifique-se de que esse componente existe

export default function TarefasResponsivo({ tarefas, carregarTarefas }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Define mobile se for menor que 768px
        };

        handleResize(); // Chamada inicial
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile ? <CardTarefas tarefas={tarefas} carregarTarefas={carregarTarefas} /> : <ListaTarefas2 tarefas={tarefas} carregarTarefas={carregarTarefas} />;
}

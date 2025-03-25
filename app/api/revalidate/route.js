import { revalidatePath } from "next/cache";

export async function POST(req) {
    try {
        // Simula um atraso de 3 segundos
        await new Promise((resolve) => setTimeout(resolve, 3000));
        revalidatePath("/dashboard");
        return Response.json({ message: "Revalidado com sucesso!" });
    } catch (error) {
        return Response.json({ error: "Erro ao revalidar" }, { status: 500 });
    }
}

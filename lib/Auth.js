// lib/Auth.js (sem "use server")
export class AuthObject {
    async Autenticar(user, senha) {
        if (user === "admin" && senha === "lavras") {
            const userAtual = user;
            console.log("1");
            return { isAutenticado: true, nivel: 1, user: userAtual };
        } else if (user === "aluno" && senha === "senac") {
            console.log("2");
            const userAtual = user;
            return { isAutenticado: true, nivel: 2, user: userAtual };
        } else {
            console.log("3");
            return { isAutenticado: false, nivel: 0, user: null };
        }
    }
}

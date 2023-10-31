import { Router, Response, Request } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

// --- ROTA TESTE ---
router.get("/test", (req: Request, res: Response) => {
  //throw new Error("Erro ao fazer essa requisição")
  return res.json({ nome: "TESTE - Pizza Fácil - TESTE" });
});


// --- ROTAS USER ---
router.get("/users", new CreateUserController().handle)


export { router };

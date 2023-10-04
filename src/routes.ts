import { Router, Response, Request } from "express";

const router = Router();

router.get("/test", (req: Request, res: Response) => {
  //throw new Error("Erro ao fazer essa requisição")
  return res.json({ nome: "Pizza Fácil" });
});

export { router };

import express, { Request, response, NextFunction } from "express";
import "express-async-errors"; // Sempre colocar essa libry em segundo. Documentação deles
import cors from "cors";
import { router } from "./routes";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use(router);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        // Trata erros do tipo Error com mensagens personalizadas
        res.status(400).json({ error: err.message });
    }
    // Trata erros não especificados com uma mensagem padrão
    console.error(err); // Registra o erro no console para fins de depuração
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
});


app.listen(port, () =>
    console.log("Server listening on http://localhost" + port)
);
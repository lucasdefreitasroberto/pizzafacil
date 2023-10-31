import { Request, Response } from "express";

import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        //passando o processo direto executado para variavel, descartando o processo abaixo 
        //const vCreateUserService = new CreateUserService();
        //const vUser = vCreateUserService.execute();

        const vUser = await new CreateUserService().execute({ name, email, password });

        return res.json(vUser);
    }

}

export { CreateUserController }
import { AuthService } from "../services/auth.service.js";

export const AuthController = {
  //REGISTRAR USUARIO
  async register(req, res) {
    const result = await AuthService.register(req.body);

    if (result.exists) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    res.status(201).json({
      message: "User register completed"
    });
  },

  //LOGEAR USUARIO
  async login(req, res) {
    const result = await AuthService.login(req.body);
    if(!result) return res.status(400).json({message: "Credenciales Invalidas"});

    res.status(201).json(result);
  }

};
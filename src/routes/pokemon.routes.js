import { Router } from 'express';
import { PokemonController } from '../controllers/pokemon.controller.js';
import { authVerify } from '../middleware/auth.middleware.js';

export const pokemonRouter = Router();

pokemonRouter.post('/', PokemonController.create);
pokemonRouter.get('/:id', PokemonController.get);
pokemonRouter.put('/:id', PokemonController.update);
pokemonRouter.delete('/:id', PokemonController.remove);


pokemonRouter.use(authVerify)
pokemonRouter.get('/', PokemonController.list)
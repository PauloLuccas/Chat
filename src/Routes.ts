import { request, response, Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingRepository } from './repositories/SettingsRepositoy';

const routes = Router();

/**
 * TIPOS DE PARÂMETROS
 * Routes Params -> Parâmetros de rotas
 * http://localhost:3333/settings/1
 * 
 * Query Params -> Filtros e busca
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body Params -> Passa objetos dentro da requisição = JSON {
 * 
 * }
 */

routes.post("/settings", async (request, response) => {
    const { chat, username } = request.body;
    const settingsRepository = getCustomRepository(SettingRepository);

    const settings = settingsRepository.create({
        chat,
        username
    })

    await settingsRepository.save(settings);

    return response.json(settings);
});

export { routes };
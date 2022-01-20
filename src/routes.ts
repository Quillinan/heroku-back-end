import {Router, Request, Response} from "express";
import {getProdutos, saveProduto, getProduto, updateProduto, removeProduto} from './controller/ProdutosController';

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Teste nodemon'})
})

routes.get('/produtos', getProdutos)
routes.get('/produtos/:id', getProduto)
routes.post('/produtos', saveProduto)
routes.put('/produtos/:id', updateProduto)
routes.delete('/produtos/:id', removeProduto)

export default routes
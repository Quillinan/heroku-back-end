import {getRepository} from "typeorm";
import { Request, Response} from "express";
import {Produtos} from "../entity/Produtos";


export const getProdutos = async (request: Request, response: Response) => {

    const produtos = await getRepository(Produtos).find()
    return response.json(produtos)
};

export const getProduto = async(request: Request, response: Response) => {
    const {id} = request.params
    const produto = await getRepository(Produtos).findOne(id)
    return response.json(produto)
};

export const saveProduto = async(request: Request, response: Response) => {

    const produtos = await getRepository(Produtos).save(request.body)
    return response.json(produtos)

};

export const updateProduto = async(request: Request, response: Response) => {
    const {id} = request.params

    const produto = await getRepository(Produtos).update(id, request.body)

    if (produto.affected == 1) {
        const produtoUpdated = await getRepository(Produtos).findOne(id)
        return response.json(produtoUpdated)
    }

    return response.status(404).json({message: "Produto não encontrado"})
    

};

export const removeProduto = async(request: Request, response: Response) => {
    const {id} = request.params

    const produto = await getRepository(Produtos).delete(id)

    if (produto.affected == 1) {
        const produtoUpdated = await getRepository(Produtos).findOne(id)
        return response.json({message: "Produto removido"})
    }

    return response.status(404).json({message: "Produto não encontrado"})
    

};
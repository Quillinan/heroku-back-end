import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Produtos } from '../entity/Produtos';

export const getProdutos = async (request: Request, response: Response) => {
  try {
    const produtos = await getRepository(Produtos).find();
    return response.status(200).json(produtos);
  } catch (err) {
    return response.status(500).json(err);
  }
};

export const getProduto = async (request: Request, response: Response) => {
  const { id } = request.params;
  const produto = await getRepository(Produtos).findOne(id);
  return response.json(produto);
};

export const saveProduto = async (request: Request, response: Response) => {
  try {
    const produtos = await getRepository(Produtos).save(request.body);
    return response.status(200).json(produtos);
  } catch (error) {
    return response.status(500).json(error);
  }
};

export const updateProduto = async (request: Request, response: Response) => {
  const { id } = request.params;
  console.log('Olá');

  const produto = await getRepository(Produtos).update(id, request.body);
  console.log('Tchau');

  if (produto.affected == 1) {
    const produtoUpdated = await getRepository(Produtos).findOne(id);
    return response.json(produtoUpdated);
  }

  return response.status(404).json({ message: 'Produto não encontrado' });
};

export const removeProduto = async (request: Request, response: Response) => {
  const { id } = request.params;

  const produto = await getRepository(Produtos).delete(id);

  if (produto.affected == 1) {
    const produtoUpdated = await getRepository(Produtos).findOne(id);
    return response.json({ message: 'Produto removido' });
  }

  return response.status(404).json({ message: 'Produto não encontrado' });
};

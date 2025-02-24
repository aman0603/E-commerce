import axios from 'axios';
import { Product } from '../types';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await api.get('/products');
  return data;
};

export const getCategories = async (): Promise<string[]> => {
  const { data } = await api.get('/products/categories');
  return data;
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  const { data } = await api.get(`/products/category/${category}`);
  return data;
};

export const getProduct = async (id: number): Promise<Product> => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};
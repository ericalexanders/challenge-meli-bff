import { Request, Response } from "express";
import axios from "axios";

const URL_QUERY = process.env.API_MELI_QUERY
const URL_ITEMS = process.env.API_MELI_ITEMS

export async function getItems(req: Request, res: Response) {
  try {
    const query = req.query.q;
    if (!query || typeof query !== 'string') {
      return res.status(400).json({
        error: 'Query parameter is required and must be a string' 
      });
    }
    
    const { data } = await axios.get(URL_QUERY, {
      params: { q: query }
    });
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
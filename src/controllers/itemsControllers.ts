import type { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
import { transformItemDetailResponse, transformResponse } from "../utils";

dotenv.config();

const URL_QUERY = process.env.API_MELI_QUERY as string;
const URL_ITEMS = process.env.API_MELI_ITEMS as string;

export const getItems: (req: Request, res: Response) => Promise<any> = async (
	req,
	res,
) => {
	try {
		const { data } = await axios.get(URL_QUERY, {
			params: req.query,
		});
		return res.json(transformResponse(data));
	} catch (error) {
		console.log("Error", error);
		return res.status(500).json({ error: "Internal server error" });
	}
};

export const getItemDetails: (req: Request, res: Response) => Promise<any> =
	async (req, res) => {
		try {
			const { data } = await axios.get(`${URL_ITEMS}/${req.params.id}`);
			const { data: descData } = await axios.get(
				`${URL_ITEMS}/${req.params.id}/description`,
			);
			return res.json(transformItemDetailResponse(data, descData.plain_text));
		} catch (error) {
			console.log("Error", error);
			return res.status(500).json({ error: "Internal server error" });
		}
	};

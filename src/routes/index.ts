import { Router, Request, Response } from "express";
const router = Router();

router.get("/items", (req: Request, res: Response) => {
  const query = req.query.q;
  res.send(`Search results for: ${query}`);
});

router.get("/items/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Item details for ID: ${id}`);
});

router.get("/items/:id/description", (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Description for item ID: ${id}`);
});

export default router
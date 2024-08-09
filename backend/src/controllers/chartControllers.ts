import { Request, Response } from 'express';
import models from '../models';
import { getTextResponse } from '../utils/textResponse';
import { getImageTextResponse } from '../utils/imageTextResponse';

export const createChart = async (req: Request, res: Response) => {
  const { title, userInput } = req.body;
  const userId = (req as any).user.userId;
  const date = new Date();
  const image = req.file; // Multer handles file upload, and `image` will contain the file data

  try {
    let systemResponse: string;

    if (image) {
      // Handle image input
      systemResponse = await getImageTextResponse(userInput, image.buffer, image.mimetype);
    } else {
      // Handle text-only input
      systemResponse = await getTextResponse(userInput);
    }

    const newChart = await models.Chart.create({
      userId,
      title,
      userInput,
      systemResponse,
      date
    });

    res.status(201).json(systemResponse);
  } catch (error) {
    res.status(500).json({ message: 'Error creating chart', error });
  }
};

export const getCharts = async (req: Request, res: Response) => {
  const userId = (req as any).user.userId;

  try {
    const charts = await models.Chart.findAll({ where: { userId } });
    res.json(charts);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving charts', error });
  }
};

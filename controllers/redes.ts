import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Redes from '../models/redes';


export const getRedes = async( req: Request , res: Response ) => {

    const redes = await Redes.findAll();

    res.json({ redes });
}

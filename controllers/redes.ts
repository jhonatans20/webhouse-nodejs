import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Redes from '../models/redes';


export const obtenerRedes = async( req: Request , res: Response ) => {

    const redes = await Redes.findAll();

    res.json({ redes });
}

export const actualizarRedes = async( req: Request , res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        
        const red = await Redes.findByPk( id );
        if ( !red ) {
            return res.status(404).json({
                msg: 'No existe un red con el id ' + id
            });
        }

        await red.update( body );

        res.json( red );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }   
}

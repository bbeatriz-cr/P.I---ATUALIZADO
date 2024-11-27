import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import { Paciente } from '../models/Paciente';

export const form = async (req: Request, res: Response)=>{
 
    let dados = await Paciente.findAll()

    res.render('pages/form', {
        dados
    });

};

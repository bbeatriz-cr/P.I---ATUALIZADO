import { Request, Response } from 'express';
import {sequelize} from '../instances/mysql'
import { Paciente } from '../models/Paciente'

export const home = async (req: Request, res: Response)=>{
    res.render('pages/home', {
         
    });
    let nome: string
    let endereco: string
    let bairro: string
    let data_nascimento: number
    let telefone: number
    let email: string
    let tel_residencial: number
    let tel_emergencia:number
 

};

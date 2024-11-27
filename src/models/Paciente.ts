import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

//passando os dados do banco para a linguagem
export interface PacienteInstance extends Model {
    id: number,
    nome: string,
    endereco: string,
    bairro: string,
    data_nascimento: number,
    telefone: number,
    email: string,
    tel_residencial: number,
    tel_emergencia: number
    

}
//ensinando o sequelize sobre as infos do nosso banco
export const Paciente = sequelize.define<PacienteInstance>("podologia,",{

    id:{
        primaryKey: true,
        type:DataTypes.INTEGER
    },
    nome: {
        type:DataTypes.STRING
    },
    endereco:{
        type:DataTypes.STRING,
    },
    bairro:{
        type:DataTypes.STRING
    },
    data_nascimento:{
        type:DataTypes.INTEGER
    },
    telefone:{
        type:DataTypes.INTEGER
    },
    email:{
        type:DataTypes.STRING
    },
    telefone_residencial:{
        type:DataTypes.INTEGER
    },
    telefone_emergencia:{
        type:DataTypes.INTEGER
    }

},{
    tableName: 'paciente',
    timestamps: false
})
// LOGICAD EL NEGOCIO,  SE CONECTE CON LA BASE DE DE DATOS SEGUN LA PETICION. 

import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const insertCar =  async (item: Car) => {

    const responseInsert =  await ItemModel.create(item);
    return responseInsert;
}

const getCars = async() => {
    const responseGet = await ItemModel.find({});
    return responseGet;
}

const getCar = async(id:string) => {
    const responseItem = await ItemModel.findOne({_id:id});
    return responseItem;
}

const updateCar = async(id: string, data: Car) =>{

    const responseUpdate = await ItemModel.findOneAndUpdate({_id: id}, data, { new: true} )
    return responseUpdate;
}

const deleteCar = async (id: string) =>{
    const responseItem = await ItemModel.deleteOne({ _id: id});
    return responseItem;
    
}

export {insertCar , getCars, getCar, updateCar, deleteCar };


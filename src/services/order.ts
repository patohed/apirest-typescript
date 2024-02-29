// LOGICAD EL NEGOCIO,  SE CONECTE CON LA BASE DE DE DATOS SEGUN LA PETICION. 

import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";



const getOrders = async() => {
    const responseGet = await ItemModel.find({});
    return responseGet;
}




export { getOrders };
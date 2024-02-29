import { Request, Response, response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handle"
import { getCar, getCars, insertCar, updateCar, deleteCar  } from "../services/item.service";



const getItem = async({ params }: Request, res:Response) => {
    try { 
        const { id } = params;
        const responseItem = await getCar(id);
        const data = responseItem ? response : "NOT_FOUND";
        res.send(data);
       
        
    } catch (e) {

       handleHttp(res, 'ERROR_GET_ITEM')

    }
};

const getItems = async(req: Request, res:Response) => {
    try {
        const response = await getCars();
        res.send(response);

    } catch (e) {

       handleHttp(res, 'ERROR_GET_ITEMS')
    }
};



const postItem = async ({ body }: Request, res:Response) => {

    try {
        const responseItem = await insertCar(body);
       res.send(responseItem);
    } catch (e) {

       handleHttp(res, 'ERROR_POST_ITEM')

    }
};

const updateItem = async ({ params, body }: Request, res:Response) => {
    try {
        const { id } = params;
        const responseItem = await updateCar(id, body);

        return responseItem;  
        
    } catch (e) {

       handleHttp(res, 'ERROR_UPDATE_ITEM')

    }
};

const putItem = ({ body }: Request, res:Response) => {
    try { 

        console.log(body)
    } catch (e) {

       handleHttp(res, 'ERROR_PUT_ITEM')

    }
};  

const deleteItem = async ({ params }:Request, res:Response) => {
    try {
        const { id } = params;
        const responseItem   = await deleteCar(id);
        
        res.send(responseItem);
          
    } catch (e) {

       handleHttp(res, 'ERROR_DELETE_ITEM')

    }
};
    
export { getItem, deleteItem, putItem, postItem, getItems, updateItem };
import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle"



const getItems = (req: Request, res:Response) => {

    try {
        
    } catch (e) {

       handleHttp(res, 'ERROR_GET_BLOGS')

    }
};

const getItem = (req:Request, res:Response) => {
    try {
       
    } catch (e) {

       handleHttp(res, 'ERROR_GET_BLOG')

    }
};

const postItem = ({ body }: Request, res:Response) => {

    try {
        res.json(body);
    } catch (e) {

       handleHttp(res, 'ERROR_POST_BLOG')

    }
};

const updateItem = (req: Request, res:Response) => {
    try {
        
    } catch (e) {

       handleHttp(res, 'ERROR_UPDATE_BLOG')

    }
};


const putItem = ({ body }: Request, res:Response) => {

    try {
        console.log(body)
    } catch (e) {

       handleHttp(res, 'ERROR_PUT_BLOG')

    }
};
  

const deleteItem = (req:Request, res:Response) => {

    try {
        
    } catch (e) {

       handleHttp(res, 'ERROR_DELETE_BLOG')

    }
};
    


export { getItem, deleteItem, putItem, postItem, getItems, updateItem };
import { Schema, Model, Types, model, } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
    {
       color: {
        type: String,
        required: false,
       },
       brand: {
        type: String,
        required: true,
       },
       model: {
        type: String,
        required: true,
       },
       year: {
        type: Number,
        required: true,
       },
       domain: {
        type: String,
        required: false,
       },
       kilometres: {
        type: Number,
        required: true,
       },
       description: {
        type: String,
        required: false,
       },
       price: {
        type: Number,
        required: true,
       },
       transmission: {
        type: String,
        required: true,
        enum: ["manual", "automatic"]
       },
    },
    {
        timestamps: true,
        versionKey: false,
    },
   
)

// nombre de la tabla o coleccion en la DB

const ItemModel = model('items', ItemSchema) 
export default ItemModel;
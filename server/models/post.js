import mongoose, { mongo, Mongoose }  from "mongoose";

import { Schema } from "mongoose";


const  PostSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true
    } ,
     body : {
        type : String  , 
        required : true
     } , 
     createdAt : {
        type : Date , 
        default : Date.now
     } , 
     updatedAt : {
        type : Date , 
        default : Date.now
     }
})

const Post = mongoose.model("Post", PostSchema);


export default Post 



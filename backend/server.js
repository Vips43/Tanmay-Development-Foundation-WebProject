import express from 'express';
import multer from 'multer';
import cors from 'cors';

const PORT = 3000;

const app = express();



app.listen(PORT,()=>{
    console.log("Server starte on ", PORT)
})
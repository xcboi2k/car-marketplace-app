import express from 'express';
import UserRouter from './routers/UserRouter.js'

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", UserRouter)
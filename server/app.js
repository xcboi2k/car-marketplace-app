import express from 'express';
import UserRouter from './routers/UserRouter.js'

export const app = express();

app.use("/api/users", UserRouter)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
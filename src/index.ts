import express, { Request, Response } from "express";
import path from 'path'

const app = express();

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'pug')

app.get("/", async (req: Request, res: Response) => {
  res.render('index.pug')
});

app.listen(4000);

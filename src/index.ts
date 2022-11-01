import express, { Request, Response } from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "./static/")));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");

app.get("/", async (req: Request, res: Response) => {
  const verseApi = await fetch(
    "https://www.abibliadigital.com.br/api/verses/nvi/sl/23"
  );
  const data = await verseApi.json();

  res.render("index.pug", {
    text: `${data.verses[0].text}`,
    book_chapter: `${data.book.name} ${data.chapter.number} ${data.verses[0].number}`,
  });
});

app.listen(4000);

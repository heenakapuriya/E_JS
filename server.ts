import express, { Application,Request, Response } from 'express';
import ejs from "ejs";
import mustacheExpress from 'mustache-express';
import mustache from 'mustache-express';

const app: express.Application = express();
// app.use(expess.json());

const hostname: string = "localhost";
// const hostname: string = "";
const port: number = 8000;

// app.set("view engine", "ejs");
app.engine("mustache",mustacheExpress());
app.set("view engine", "mustache");


app.get("/", (req: Request, res: Response) => {
    let model = { x: 1000, y: 20 };
    res.render("index", model)
});


app.get("/login", (req: Request, res: Response) => {
    let model = { uname: "qode", upwd: "qode@123" };
    res.render("login", model)
});

app.get("/student", (req: Request, res: Response) => {
    let model = {
        studentId: "S001",
        studentName: "Ramesh",
        studentMarks: 40,
        subjects: [
            { name: "math", marks: "54" },
            { name: "science", marks: "53" },
            { name: "english", marks: "55" }
        ]
    };
    
    res.render("student", model)
});

app.listen(port, hostname, () => {
    console.log(`server started at http://${hostname}:${port}`);
})
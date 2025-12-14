//server setup:
import express from "express";
import cors from "cors";
import {dbPool} from "./dbConnection.js";

const app = express();

app.use(cors());
app.use(express.json());

//create a port:
const port = 8080;
app.listen(8080);
/* Checked app is working:
app.listen(port, ()=>  {
     console.info(`server is runinig is port ${port}`)
 })*/

//create a root route:
app.get("/", function (_, res)   {
    res.json({message:"welcome to the root route. Get comfy!"});
});

//todo: a route to READ data from the DB
app.get("/memowall", async function (req, res)   {
   const queryDB = await dbPool.query(`SELECT name, course, age, location, comment FROM memowall`);
   console.log(queryDB);
   res.json(queryDB.rows);
});


//todo: a route to CREATE data in the DB
app.post("/new-comment", (req, res)=>  {
    const newComment = req.body.formValues;
    const queryDB = dbPool.query(
        `INSERT INTO memowall (name, course, age, location, comment) VALUES ($1, $2, $3, $4, $5)`,
        [newComment.name, newComment.course, newComment.age, newComment.location, newComment.comment]
    );
    res.json({status: "success", values:newComment});
});
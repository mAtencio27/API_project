const express = require("express");
const path = require("path");
//const knex = require("./knexfile2.js");
//const knex = require("./knexfile.js")
//const knex = require("/Users/Marcus/Desktop/API project/knex/migrations/knex.js")
const knex = require('./knex/knex.js');
const port = 1990 || process.env.PORT;
const app = express();

// Serving up HTML
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/index.html'));
  });
//

app.use(express.json());

//Where stull goes


//Looking at all the films
app.get("/api/allfilms", async(_,res) => {
    const films = await knex.select().table("film");
    res.status(200).send(films)

});

//create a new film
app.post("/api/allfilms",async(req,res) => {
    const films = await knex.select().table("film")
    //test
    //const newFilm = { "id" : 14, "brand" : "Kodak" , "name" : "Portra", "iso" : 200}
    //films.push(newFilm)
    //test
    films.push(req.body)
    res.send(films)
    //console.error.log(films)
});

// path edit data
app.patch("/api/allfilms:id",async(req,res) => {
    const films = await knex.select().table("film")

    const change = req.body

    //test change
    //const change = { "iso" : 1600 }
    //test change

    const idparam = req.params.id;
    const result = films.filter((film) => film.id === Number(idparam));
    result[0].iso = change.iso;
    res.send(result);

});

//Delete Data

app.delete("/api/allfilms:id", async(req,res) => {
    const films = await knex.select().table("film")
    const idparam = req.params.id
    const result = films.filter((film) => film.id !== Number(idparam));
    res.send(result)
    //console.log(result)
})



/*app.get("/api/id", async(_,res) => {
    const noteID = await knex.select().table("film_stocks")
    console.log(noteID[0])
    res.send(noteID[0])
})

//where stuff goes*/


app.listen(1990, ()=>{
    console.log(`Server running at https://localhost:${port}!`);
});
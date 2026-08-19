import express from "express"
import mysql2 from "mysql2"
import cors from "cors"

const database = mysql2.createPool({
    host: "benserverplex.ddns.net",
    user: "alunos",
    password: "senhaAlunos",
    database: "alunos_filmes_03MA"
})


const app = express()

app.use(cors())

app.use(express.json())

app.get("/all-movies", (request, response) => {
    const selectCommand = "SELECT * FROM filmes_EduardoCabral_Phelipe"

    database.query(selectCommand, (error, data) => {
        if (error) {
            console.log(error)
            return
        }

        response.json(data)
    })
})


app.post("/add-movie", (request, response) => {
    const { titulo, genero, duracao, classificacao_etaria } = request.body

    const insertCommand = 
        "INSERT INTO filmes_EduardoCabral_Phelipe(titulo, genero, duracao, classificacao_etaria) VALUES (?, ?, ?, ?)"

    database.query(insertCommand, [titulo, genero, duracao, classificacao_etaria], (error) => {
        if (error) {
            console.log(error)
        } else {
            response.status(201).json({
                message: "Filme adicionado com sucesso!"
            })
        }
    })
})

app.delete("/delete-movie/:id", (request, response) => {

    const { id } = request.params

    const deleteCommand = "DELETE FROM filmes_EduardoCabral_Phelipe WHERE id=?"

    database.query(deleteCommand, [id], (error) => {
        if (error) {
            console.log(error)
        } else {
            response.json({
                message: "Filme apagado com sucesso!"
            })
        }
    })

})

app.put("/update-movie/:id", (request, response) => {
    const { id } = request.params
    const { titulo, genero, duracao, classificacao_etaria } = request.body

    const updateCommand = 
        "UPDATE filmes_EduardoCabral_Phelipe SET titulo = ?, genero = ?, duracao = ?, classificacao_etaria = ? WHERE id = ?"

    database.query(updateCommand, [titulo, genero, duracao, classificacao_etaria, id], (error) => {
        if (error) {
            console.log(error)
        } else {
            response.json({
                message: "Informações do filme atualizadas com sucesso!"
            })
        }
    })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})                                         

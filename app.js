const express = require('express')
const app = express()
const port = 3000

let BBDD = {
    
}

//Aca estoy creando un id//
app.get('/Crear/:nombre/:apellido', (request, response) => {
    const user = request.params
    let indice = Object.keys(BBDD).length + 1
    user.id=indice

    BBDD[indice] = user
    console.log(BBDD)

    response.json(user)
})


app.get('/MostrarTodos', (request, response) => {
    console.log(BBDD)
    response.json(BBDD)
})

//Aca estoy eliminando un id en la url//
app.get('/Eliminar/:id', (request, response) => {
    const id=request.params.id
    BBDD[id] = 'eliminado'
    
    response.send('Fue eliminado')
})

//Edito en la url y luego mnuestro todo
app.get('/Editar/:nombre/:apellido/:id', (request, response) => {
    const user=request.params
    BBDD[user.id] = user

    response.send('fue modificado')

})

//busco en la url//
app.get('/BuscarID/:id', (request, response) => {
    const id=request.params.id

    response.json(BBDD[id])
})

//Es iniciar el servidor de node
app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`)
})


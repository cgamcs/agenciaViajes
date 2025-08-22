import express from 'express'
import router from './routes/index.js'

const app = express()

// Definir puerto
const port = process.env.PORT || 4000

// Habilitar pug
app.set('view engine', 'pug')

app.use((req, res, next) => {
    const year = new Date()
    res.locals.fecha = year.getFullYear()

    next()
})

// Definir la carpeta publica
app.use(express.static('public'))

// Agregar router
app.use('/', router)

app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
})
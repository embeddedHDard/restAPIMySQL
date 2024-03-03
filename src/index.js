import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express() // Guardamos la ejecución de express en una constante app.
app.use(express.json())
let PORT = 3000
app.listen(PORT)
console.log("Server ejecutándose en puerto " + PORT)

app.use(indexRoutes)
app.use(employeesRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        message: 'endpoint not found'
    })
})

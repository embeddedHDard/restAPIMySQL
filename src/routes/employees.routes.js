import {Router} from 'express'
import {getEmployees, getEmployee, createEmployees, updateEmployees, deleteEmployees} from '../controllers/employees.controller.js'

const router = Router()

//Definiendo rutas para procesar las peticiones http
/* Cuando reciba la ruta /employees (en la barra de busqueda del navegador) lo voy a procesar con un req y un res que devolverá un texto "obteniendo empleados"*/
// router.get('/employees', (req, res) =>{ 
//     res.send('obteniendo empleados')
// })

router.get('/employees',getEmployees)

router.get('/employees/:id', getEmployee)

/* Cuando reciba la ruta /employees (en la barra de busqueda del navegador) lo voy a procesar con un req y un res que devolverá un texto "creando empleados"*/
router.post('/employees', createEmployees)

/* Cuando reciba la ruta /employees (en la barra de busqueda del navegador) lo voy a procesar con un req y un res que devolverá un texto "actualizando empleados"*/
router.put('/employees/:id', updateEmployees)

/* Cuando reciba la ruta /employees (en la barra de busqueda del navegador) lo voy a procesar con un req y un res que devolverá un texto "eliminando empleados"*/
router.delete('/employees/:id', deleteEmployees)

export default router
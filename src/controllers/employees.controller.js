import {pool} from '../db.js'

export const getEmployees = async (req, res) => {    
    try {
        const { name, salary } = req.body;
        const [rows] = await pool.query('SELECT * FROM employee'); //Las consultas a base de datos son asíncronas, por eso el await
        res.json(rows)
    } catch (error) {
        console.error("Error leyendo employees:", error);
        res.status(500).send("Error leyendo employees");
    }
}

export const getEmployee = async (req, res) => {    
    try {
        const id = req.params.id
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]); //Las consultas a base de datos son asíncronas, por eso el await
        res.json(rows[0])
    } catch (error) {
        console.error("Error leyendo employees:", error);
        res.status(500).send("Error leyendo employees");
    }
}

export const createEmployees = async (req, res) => {    
    try {
        const { name, salary } = req.body;
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]); //Las consultas a base de datos son asíncronas, por eso el await
        res.send({
            id: rows.id,
            name,
            salary
        })
    } catch (error) {
        console.error("Error creando employee:", error);
        res.status(500).send("Error creando employee");
    }
}

export const deleteEmployees = async (req, res) => {    
    try {
        const id = req.params.id
        const [rows] = await pool.query('DELETE FROM employee WHERE id = ?', [id]); //Las consultas a base de datos son asíncronas, por eso el await
        res.json(rows[0])
    } catch (error) {
        console.error("Error borrando employee:", error);
        res.status(500).send("Error borrando employee");
    }
}

export const updateEmployees = async (req, res) => {    //Actualiza todo el empleado
    try {
        const {id} = req.params
        const {name, salary} = req.body
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?', [name, salary, id]); //Las consultas a base de datos son asíncronas, por eso el await
        //res.json(result)
        if(result.affectedRows===0) return res.status(404).json({
            message: 'Empleado no encontrado'
        })
        else{
         const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]); //Las consultas a base de datos son asíncronas, por eso el await
         res.json(rows[0])
        }
    } catch (error) {
        console.error("Error actualizando employee:", error);
        res.status(500).send("Error actualizando employee");
    }
}
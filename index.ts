import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'
//config .env
dotenv.config()

//crate express app
const app: Express = express() //creamos una instancia de espress
const port: string | number = process.env.PORT || 3000 //puerto de la aplicacion



app.get('/hello', (req: Request, res: Response) => {
    //mandamos una respuesta cuando se haga una peticion
    res.send({hola: 'como estas'})
})

//ejecutar la app
app.listen(port, () => {
    console.log(`[RUN] http://localhost:${port}`)
})
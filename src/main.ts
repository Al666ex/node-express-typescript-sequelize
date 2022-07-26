import express, { Express, Request, Response } from 'express'
import 'reflect-metadata'
import dotenv from 'dotenv'

const app : Express = express();
dotenv.config()
app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/', (req : Request, res : Response) => {
    res.json({message  : 'type-script4s56'})
})

async function start(){
    try {
        app.listen(PORT, () => console.log(`App started at port = http://localhost:${PORT}`))        
    } catch (error) {
        console.log(error)
        process.exit(1)        
    }
}

void start()

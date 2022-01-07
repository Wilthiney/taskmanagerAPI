const express = require ('express')
const cors = require ('cors')

const app = express()
app.use(cors())

const port = process.env.PORT || 3000

app.use(express.urlencoded({extends:true}))

app.use(express.json())

app.get("/", async(req, res) => {

    res.send('Bienvenue dans notre API Task Managers')
 })

 app.listen(port, ()=> {
     console.log('Notre Serveur tourne avec le port ' + port )
 })
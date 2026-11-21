import express from "express"

const app = express()
const PORT = 4000

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.get('/hello', (req,res)=>{
    const values = [
        {name: "rohan"},
        {class: "graduation"}
    ]
    res.json(values)
})

app.listen(PORT, ()=>{
    console.log("Port is up ")
})
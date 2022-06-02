const { request, response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Sheyaa',
        'birthDayLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName':'Chancolar',
        'birthDayLocation': 'Chicago, Illinous'
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'birthDayLocation': 'Dylan'
    },
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
    const rappersName= request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])

    }else{
        response.json(rappers['dylan'])
    }
    // response.json(rappers)
})

app.listen(PORT, () =>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})
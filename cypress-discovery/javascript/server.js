const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.json({ message: 'Hello Cypress Discovery' })
})

app.get('/avengers', function (req, res) {
    var avengers = ['Tony Stark', 'Clint barton', 'Natasha Romanoff', 'Steve Rogers', 'Bruce Banner', 'Bruce Banner', 'Scot Lang']
    return res.json({ data: avengers })
})

app.get('/cnh', function (req, res) {
    const idade = req.query.idade

    if (!idade) {
        return res.json({ message: 'Idade é um campo obrigatório.' })
    }

    var idadeNum = parseInt(idade)

    if (idadeNum >= 18) {
        return res.json({ menssage: 'Ok, você pode tirar sua CNH.' })
    } else if (idadeNum > 4) {
        return res.json({ menssage: 'você é menor de idade, por enquanto sugiro andar de bike.' })
    } else {
        return res.json({ menssage: 'Melhor você tomar leite.....' })
    }

    
})

app.listen(3000)
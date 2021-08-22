const express = require('express')

let app = express()

app.get('/calc', async (req, res) => {
  const numb1 = 2
  const numb2 = 6
  const total = async (numb1, numb2) => {
    return numb1 + numb2
  }
  const result = await total(numb1, numb2)
  res.send(`Sum of the two numbers is : ${result}`)
})



app.listen(3000, () => {
  console.log('express server started on port:3000')
})


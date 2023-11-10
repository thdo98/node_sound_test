const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!!!!111')
})

app.get('/sound/:name', (req, res) => {
   const { name } = req.params
   console.log(name)

  if(name=="dog"){
    res.json({'sound':'ddddddd'})
  } else if(name=="cat"){
    res.json({'sound':'ccccccc'})
  }else{
    res.json({'sound':'default'})
  }


   // console.log(q.id)

    // const q = req.query
    // console.log(q.q)
    // console.log(q.name)
    // console.log(q.age)

})

app.get('/cat', (req, res) => {
  res.send('고양이')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

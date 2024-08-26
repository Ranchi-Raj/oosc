const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoute')
const app = express()
app.use(express.json())

const url = "mongodb+srv://rajadi792:30102003@cluster0.cf8oq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url).then(() =>{
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log(err)
})

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.use('/api/user',userRoute)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))



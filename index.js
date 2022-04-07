const express = require('express')
const app = express()
const { join } = require('path')


// app.get('/',(req,res)=>{
//     console.log(join(__dirname,'/dist/index.html'));

//     return res.sendfile(join(__dirname,'./dist/index.html'))
// })
app.use(express.static(join(__dirname, '/dist/')))
app.get('*', (req, res) => {
    console.log(join(__dirname, '/dist/index.html'));

    return res.sendfile(join(__dirname, './dist/index.html'))
})




app.listen(3000, console.log('listening'))
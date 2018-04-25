const express = require('express')
const app = express()


app.use(express.static('./static'))  //静态目录


//跨域,全局模式(方便测试用,不推荐使用)
app.all('*',(req,res,next)=>{    //*表示所有的请求方式和路由路径都会触发这个路由
    res.set('Access-Control-Allow-Origin','*')  //跨域
    next()      //next()表示继续往下执行
})

app.get('/shops',require('./src/get.shops.js'))  //路由
app.get('/ctgs',require('./src/get.ctgs.js'))  //路由
app.get('/goods',require('./src/get.goods.js'))  //路由
app.get('/lists',require('./src/get.lists.js'))  //路由
app.get('/category',require('./src/get.category.js'))  //路由


app.listen(88) //端口
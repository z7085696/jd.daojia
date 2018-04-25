const mock = require('mockjs')
module.exports = (req, res) => {

    res.set('Access-Control-Allow-Origin','*')    //设置跨域

    var result = mock.mock({
        errcode:0,
        msg:'ok',
       'data|5':[    //重复5次
           {    
                'id|+1':1,
                'guid':'@guid',
                'title':'@ctitle',
                'star|2-5':'★',   //随机1-5个
                'time|1-59':1,
                'img|1':[
                    'static/img/43.jpg','static/img/44.png','static/img/45.png','static/img/46.png','static/img/47.png',
                    'static/img/48.jpg','static/img/49.jpg','static/img/50.jpg','static/img/51.png','static/img/52.jpg',
                    'static/img/53.jpg','static/img/54.jpg',
                ],
                'freight|4-8':0,
                'em3|1-50':0,
                'num|50-4000':0,
                'm|0-2.2':0,

           }
       ]
    })
    res.send(result)
}
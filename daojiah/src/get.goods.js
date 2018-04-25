const mock = require('mockjs')
module.exports = (req, res) => {
    var text = req.query.ctgtext
    res.json(
        mock.mock({
            errcode: 0,
            msg: 'ok',
            ctgText: text,
            'count|8-15': 0,
            'data|8-15': [    //重复8-15次
                {
                    guid: '@guid',
                    text: '@cword(2,5)',   //2-5个
                    'price|1-100': 0,     //价格1-100,小数点后面2位
                    'store|1-10': 0,        //库存0-10
                    "mon|10-2000": 0,
                    "per|10-500": 0,
                    'img|1':[
                        'static/img/56.jpg','static/img/57.jpg','static/img/58.jpg','static/img/59.jpg','static/img/60.jpg',
                        'static/img/61.jpg','static/img/62.jpg','static/img/63.jpg','static/img/64.jpg','static/img/65.jpg',
                        'static/img/66.jpg','static/img/67.jpg','static/img/68.jpg','static/img/69.jpg','static/img/70.jpg',
                    ],
                }
            ]
        })
 
    )
}
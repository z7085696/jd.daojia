const mock = require('mockjs')
module.exports = (req, res) => {

    res.json(
        mock.mock({
            errcode: 0,
            msg: 'ok',
            'data|10-18': [    //重复10-18次
                {
                    //'id|+1': 1,   //自增
                    'guid': '@guid',
                    'text': '@cword(2,5)',   //2-5个
                    'img|1':[
                        'static/img/43.jpg','static/img/44.png','static/img/45.png','static/img/46.png','static/img/47.png',
                        'static/img/48.jpg','static/img/49.jpg','static/img/50.jpg','static/img/51.png','static/img/52.jpg',
                        'static/img/53.jpg','static/img/54.jpg',
                    ],
                    'childrens|7-15':[       //添加子菜单,随机7-15个
                        {
                            guid:'@guid',
                            text:'@cword(2,5)'  //随机2-5个字
                        }
                    ]
                }
            ]
        })
    )
}
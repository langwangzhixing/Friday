/**
 * Created by lanouhn on 17/7/19.
 */
var express = require('express');
var app = express();
var router = express.Router();
var userRouter = express.Router();

var bodyParser = require('body-parser')
var urlencodeParser = bodyParser.urlencoded();
//var devServer = require('./dev-server')
//var app = devServer.app
//var router = devServer.router;
//var userRouter = devServer.userRouter;

var formidable = require("formidable");
var fs = require('fs');

var mysql = require("mysql");

var link = mysql.createConnection({
	host: "10.90.85.229",
	host: "10.90.85.229",
	user: "root",
	password: "",
	database: "friday"
});
//链接数据库
link.connect();

//查询语句
var all = 'SELECT * FROM goods';

var friday = 'SELECT * FROM goods WHERE activeDay>0 LIMIT 0,4';
var greens = 'SELECT * FROM goods WHERE firstType="田园蔬菜" LIMIT 0,4';
var meat = 'SELECT * FROM goods WHERE firstType="肉食家禽" LIMIT 0,4';
var fish = 'SELECT * FROM goods WHERE firstType="海鲜水产" LIMIT 0,4';
var goodFood = 'SELECT * FROM goods WHERE firstType="优选食材" LIMIT 0,4';
var wine = 'SELECT * FROM goods WHERE firstType="零食酒水" LIMIT 0,4';
var fastFood = 'SELECT * FROM goods WHERE firstType="蛋奶速食" LIMIT 0,4';
var global = 'SELECT * FROM goods WHERE firstType="全球代购" LIMIT 0,4';
var fruit = 'SELECT * FROM goods WHERE firstType="新鲜水果" LIMIT 0,4';

//登录
userRouter.post('/login', urlencodeParser, function(req, res) {
	var phone = req.body.phone;
	var passWord = req.body.passWord;
	var user = 'SELECT passWord FROM user WHERE phone=' + phone;
	link.query(user, function(err, result) {
		if(err) {
			console.log(err)
		} else {
			if(result.length == 0) {
				res.send("0");
			} else {
				if(result[0].passWord == passWord) {
					res.send('1');
				} else {
					res.send("0")
				}
			}
		}
	})
});
userRouter.post('/reg', urlencodeParser, function(req, res) {
	var phone = req.body.phone;
	var passWord = req.body.passWord;
	var user = 'SELECT * FROM user WHERE phone=' + phone;
	link.query(user, function(err, result) {
		if(err) {
			console.log(err)
		} else {
			if(result.length == 0) {
				var regQuery = "INSERT INTO user(phone,userName,passWord,sex,birthday,integral,wallet,headImg,shopCar,browse,collect,address) VALUES(" + phone + ",'nomsg','" + passWord + "',0,'nomsg',0,'nomsg','default.png','nomsg','nomsg','nomsg','nomsg')";
				link.query(regQuery, function(err, result) {
					if(err) {
						console.log(err);
					} else {
						var data = {
							err: 1,
							data: {
								phone: phone,
								passWord: passWord
							}
						};
						res.send(data)
					}
				});
			}
		}
	})
});
//购物车
userRouter.get('/cart', (req, res) => {
	var phone = req.query.phone;
	var shopCarQuery = 'SELECT shopCar FROM user WHERE phone=' + phone;
	link.query(shopCarQuery, (err, result) => {
		if(!err) {
			var shopCar = result[0].shopCar;
			if(shopCar == 'nomsg') {
				res.send('nomsg')
			} else {
				var data = {
					goods: [],
					count: []
				}
				var arr3 = [];
				var arr = shopCar.split(',');
				for(var i = 0; i < arr.length; i++) {
					var arr1 = arr[i].split('/');
					data.count.push(arr1[1]);
					var user = 'SELECT * FROM goods WHERE id=' + arr1[0];
					link.query(user, function(err, result) {
						if(!err) {
							arr3.push(result[0])
							if(arr3.length == i) {
								data.goods = arr3;
								res.send(data)
							}
						}
					});
				}
			}
		}
	});
});

userRouter.get('/addShop', (req, res) => {
	var phone = req.query.phone;
	var goodsID = req.query.id;
	var flag = Number(req.query.flag);
	var count = Number(req.query.count);
	if (!flag) {
		count = -1;
	} 
	var user = 'SELECT shopCar FROM user WHERE phone=' + phone;
	link.query(user, function(err, result) {
		var shopCar = result[0].shopCar;
		if(!err) {
			if(shopCar == 'nomsg') {
				var newShopCar = goodsID + "/" + count;
			} else {
				var newShopCar = itemStr(shopCar,goodsID,count);
			}
			var updateShopCar = "UPDATE user SET shopCar='" + newShopCar + "' WHERE phone=" + phone;
			link.query(updateShopCar, function(err, result) {
				if(!err) {
					res.send('1');
				}
			});
		}
	});
});

function itemStr(shopCar,goodsID,count) {
	var str = ''
	var arr3 = [];
	var arr = shopCar.split(',');
	var act = true;
	for(var i = 0; i < arr.length; i++) {
		var arr1 = arr[i].split('/');
		if(arr1[0] == goodsID) {
			var num = Number(arr1[1])
			num +=count;
			arr1[1] = num;
			act = false
		}
		str = arr1.join('/');
		arr3.push(str);
	}
	if (act) {
		var str1 = goodsID + '/' + count;
		arr3.push(str1);
	}
	var newStr = arr3.join(',');
	return newStr;
}

userRouter.get('/delShop',function (req,res) {
	var goodsID = req.query.id;
	var phone = req.query.phone;
	var delID = 'SELECT shopCar FROM user WHERE phone=' + phone;
	link.query(delID,function (err,result) {
		var shopCar = result[0].shopCar;
		var arr = shopCar.split(',');
		for (var i = 0; i < arr.length; i++) {
			var arr1 = arr[i].split('/');
			if (arr1[0]==goodsID) {
				arr.splice(i,1);
			}
		}
		if(arr.length==0){
			var newShopCar = 'nomsg';
		}else{
			var newShopCar = arr.join(',');
		}
		
		var updateShopCar = "UPDATE user SET shopCar='" + newShopCar + "' WHERE phone=" + phone;
		link.query(updateShopCar, function(err, result) {
			if(!err) {
				console.log(3333)
				res.send('1');
			}
		});
	});
});

userRouter.get('/shopCarCount', (req,res) => {
	var phone = req.query.phone;
	var queryCount = 'SELECT shopCar FROM user WHERE phone=' + phone;
	link.query(queryCount, function(err, result) {
		if(!err) {
			var num = 0;
			var shopCar = result[0].shopCar;
			if (shopCar == 'nomsg') {
				num = 0;
			}else{
				var arr = shopCar.split(",");
				for (var i = 0; i < arr.length; i++) {
					var arr1 = arr[i].split('/');
					num += Number(arr1[1])
				}
			}
			res.send(num+"");
		}
	});
});

//个人中心
userRouter.get("/myAccount",(req,res) => {
	var phone = req.query.phone;
	var user = 'SELECT * FROM user WHERE phone=' + phone;
	link.query(user,function (err,result) {
		res.send(result);
	})
});


var num = 0
userRouter.post('/file', (req, res) => {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, field, files) {
		num++;
		var phone = field.phone;
		var imgUrl = phone + '-' + num + '.png';
		var nickname = field.nickname;
		var sex = field.sex;
		var birthday = field.year + "/" + field.month + "/" + field.day;
		var newPhone = field.newPhone;
//		console.log(birthday);
		var str = 'headImg="' + imgUrl + '",userName="' + nickname + '",sex="' + sex + '",birthday="' + birthday + '"';
		var user = "UPDATE user SET " + str + " WHERE phone=" + phone;
//		console.log(user)
		var oldImgUrl = phone + '-' + (num - 1) + '.png';
		fs.unlink("../static/upload/" + oldImgUrl, function(err) {
			if(!err) console.log("删除成功");
		});
		//创建可读流
		var rs = fs.createReadStream(files.file.path);
		// 创建可写流
		var ws = fs.createWriteStream("../static/upload/" + imgUrl);
		rs.pipe(ws);
		link.query(user, function(err, result) {
			if(!err) {
				res.send(imgUrl)
			} else {
				console.log(err)
			}
		});
	})
});
userRouter.get('/personMsg', (req, res) => {
	var phone = req.query.phone;
	var user = 'SELECT headImg FROM user WHERE phone=' + phone;
	link.query(user, function(err, result) {
		if(!err) {
			if(result[0].headImg == 'nomsg') {
				res.send("default.png");
			} else {
				res.send(result[0].headImg);
			}
		}
	});
})

//进入页面的展示数据的接口
router.get('', function(req, res) {
	var data = [];

	link.query(greens, function(err, result) {
		if(!err) {
			data.push({
				title: '田园蔬菜',
				count: result
			});
		}
	});
	link.query(meat, function(err, result) {
		if(!err) {
			data.push({
				title: '肉食家禽',
				count: result
			});
		}
	});
	link.query(fish, function(err, result) {
		if(!err) {
			data.push({
				title: '海鲜水产',
				count: result
			});
		}
	});
	link.query(goodFood, function(err, result) {
		if(!err) {
			data.push({
				title: '优选食材',
				count: result
			});
		}
	});
	link.query(wine, function(err, result) {
		if(!err) {
			data.push({
				title: '零食酒水',
				count: result
			});
		}
	});
	link.query(fastFood, function(err, result) {
		if(!err) {
			data.push({
				title: '蛋奶速食',
				count: result
			});
		}
	});
	link.query(fruit, function(err, result) {
		if(!err) {
			data.push({
				title: '新鲜水果',
				count: result
			});
		}
	});
	link.query(global, function(err, result) {
		if(!err) {
			data.push({
				title: '全球代购',
				count: result
			});
		}
	});
	link.query(friday, function(err, result) {
		if(!err) {
			res.send({
				friday: result,
				type: data
			})
		}
	});
});
//详情页 展示
router.get('/detail', function(req, res) {
	var id = req.query.id;
	var querysql = 'SELECT * FROM goods WHERE id=' + id;
	link.query(querysql, function(err, result) {
		if(!err) {
			res.send(result);
		}
	})
});
//首页点击 更多 的几口
router.get('/more', function(req, res) {
	var firstType = req.query.firstType;
	var secondType = req.query.secondType;
	if(!secondType) {
		if(firstType === '全部') {
			link.query(all, function(err, result) {
				if(!err) {
					res.send(result);
				}
			});
		} else {
			var firstSql = 'SELECT * FROM goods WHERE firstType="' + firstType + '"';
			link.query(firstSql, function(err, result) {
				if(!err) {
					res.send(result);
				}
			});
		}
	} else {
		var secondSql = 'SELECT * FROM goods WHERE firstType="' + firstType + '"AND  secondType="' + secondType + '"';
		link.query(secondSql, function(err, result) {
			if(!err) {
				res.send(result);
			}
		});
	}
});

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

app.use('/user', userRouter);
app.use('/goods', router);
app.listen(8000);
console.log('服务器创建成功')
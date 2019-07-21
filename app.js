const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
    });

//-------------------kimminwoo------------------------------------ 
router.get('/main', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/minwoo/main.html'));
    //__dirname : It will resolve to your project folder.
    });
    router.get('/notice', function (req, res) {
        res.sendFile(path.join(__dirname + '/views/minwoo/notice.html'));
        //__dirname : It will resolve to your project folder.
        });

        router.get('/signup', function (req, res) {
            res.sendFile(path.join(__dirname + '/views/minwoo/signup.html'));
            //__dirname : It will resolve to your project folder.
            });

        


//form을 통해 summit한 파라미터를 확인
router.get('/detail', function (req, res) {
    console.log(req.query);
        res.send('<h1>Request parmeters</h1>'+'ID : '+ req.query.email +'<br>password : '+ req.query.pwd+'<br>Remember : '+ req.query.remember);
    

    //res.send('<h1>Request parmeters</h1>'+'Email : '+ req.query.email +'<br>password : '+ req.query.pwd
        //+'<br>Checkbox : '+ req.query.optcheckbox+'<br>Radio : '+ req.query.optradio+'<br>Select : '+ req.query.select);
    //__dirname : It will resolve to your project folder.
    });
//-------------------kimbyoungkwan------------------------------------ 

    

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
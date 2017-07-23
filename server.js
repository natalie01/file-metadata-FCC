var cors = require('cors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = module.exports = express();
var port = process.env.PORT || 3000;
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })

app.use(bodyParser.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function(req,res,next){
	 res.sendFile(path.join(__dirname + './views/index.html'));
	});

app.post('/upload',  upload.single('file'),function(req, res) {
 res.json({file_size : req.file.size +'bytes'});
});

app.listen(port,function(){
console.log('app is working on port '+port);
})

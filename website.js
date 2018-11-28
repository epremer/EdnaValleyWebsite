var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(express.static("public"));
//app.use('/public', express.static('/public'));
//app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);



/*
app.get('/', function(req,res){
	var array = [];
	for (var p in req.query){
		array.push({"name":p, "value":req.query[p]})
	}
	console.log(array);
	console.log(req.query);
	var context = {};
	context.dataList = array;
	res.render('get-page', context);
});

app.post('/', function(req,res){
	var arrayG = [];
	for (var p in req.query){
		arrayG.push({"name":p,"value":req.query[p]})
	}
	var arrayP = [];
	for (var p in req.body){
		arrayP.push({"name":p,"value":req.body[p]})
	}
	console.log(arrayG);
	console.log(req.query);
	console.log(arrayP);
	console.log(req.body);
	/*var context2 = {};
	context2.dataList = arrayG;
	var context = {};
	context.dataList = arrayP;
	var container {context2, context};
	res.render('post-page', container);


	var foo = {};
	foo.dataList = arrayG;
	var bar = {};
	bar.otherDataList = arrayP;
	var container = {foo, bar};
	res.render('post-page', container);
});
*/

app.get('/',function(req,res){
  res.render('home');
});

app.get('/about', function(req,res){
    res.render('about');
});

app.get('/services', function(req,res){
    res.render('services');
});
app.get('/ashi', function(req,res){
    res.render('ashi');
});
app.get('/contact', function(req,res){
    res.render('contact');
});
app.get('/benefits' , function(req,res) {
    res.render('benefits');
})

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

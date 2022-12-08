const express= require ('express')
const app= express()


app.get("/", function (req, res){
    res.send("your calculator")
});

//end point http://localhost:5000/add?value1=10&value2=2

app.get("/add", function (req, res){
    let number1=parseInt(req.query.value1);
    let number2=parseInt(req.query.value2);
    const sum= number1+number2;
    res.send("result is: " + sum)

});

//end point http://localhost:3000/substract?value1=10&value2=2

app.get("/subtract", function (req, res){
    let number1=parseInt(req.query.value1);
    let number2=parseInt(req.query.value2);
    const difference= number1-number2;
    res.send("result is: " + difference)
});

//end point localhost:5000/multiply?value1=10&value2=2

app.get("/multiply", function (req, res){
    let number1=parseInt(req.query.value1);
    let number2=parseInt(req.query.value2);
    const product= number1*number2;
    res.send("result is: " + product)
});

// end point localhost:5000/divide?value1=10&value2=2

app.get("/divide",function (req,res){
    let number1=parseInt(req.query.value1);
    let number2=parseInt(req.query.value2);
    const quotient=number1/number2;
    res.send("result is: " + quotient)
});

// end point http://localhost:5000/add/10/2

app.get("/add/:value1/:value2" ,function (req,res){
    let number1=(req.params.value1);
    let number2=(req.params.value2);
    console.log(`user requested the sum of ${number1} and ${number2}`);
    res.send(`user requested the sum of ${number1} and ${number2}`);
});

// end point http://localhost:5000/substract/10/2

app.get("/subtract/:value1/:value2" ,function (req,res){
    let number1=(req.params.value1);
    let number2=(req.params.value2);
    console.log(`user requested the difference of ${number1} and ${number2}`);
    res.send(`user requested the difference of ${number1} and ${number2}`);
});

//end point http://localhost:5000/multiply/10/2

app.get("/multiply/:value1/:value2" ,function (req,res){
    let number1=(req.params.value1);
    let number2=(req.params.value2);
    console.log(`user requested the product of ${number1} and ${number2}`);
    res.send(`user requested the product of ${number1} and ${number2}`);
});

//end point http://localhost:5000/divide/10/2
app.get("/divide/:value1/:value2" ,function (req,res){
    let number1=(req.params.value1);
    let number2=(req.params.value2);
    console.log(`user requested the quotient of ${number1} and ${number2}`);
    res.send(`user requested the quotient of ${number1} and ${number2}`);
});

//logger

const myLogger = (req, res, next) => {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    next();
  };
  app.use(myLogger);

//port

const port = 5000;
app.listen(port, function(){
    console.log ("your listening to port" + " " + port)
});




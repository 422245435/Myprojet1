/**
 * Created by Administrator on 2017/3/29.
 */
//提交表单后将数据存储在数据库
var express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'static')));

//连接数据库
mongoose.connect("mongodb://127.0.0.1/161101",function(err){
    if(err)
        throw err;
    console.log("数据库连接成功")
});

var formSchema = new mongoose.Schema({
    names:String,
    title:String,
    fixed:Number,
    tel:Number,
    Email:String,
    content:String
});
var formModule = mongoose.model("formList",formSchema);


app.post('/api/aboutUs',function(req,res){
    console.log(req.body);
    var userList = req.body;
    formModule.create(userList,function(err){
        if(err)
            res.status(200).json({status:false,msg:"添加失败，请重新输入"});
        else
            res.status(200).json({status:true,msg:"添加成功，我们会尽快联系您"})
    })
})



app.use(function(req,res){
    res.sendFile(path.join(__dirname,"static","index.html"))
})

app.listen(3000,function(err){
    if(err)
        throw err;
    console.log("success")
})
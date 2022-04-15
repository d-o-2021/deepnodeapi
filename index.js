var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.get("/",(req,res) => {
    res.send("Hello");
})
app.post("/bfhl",(req,res) => {
    var a = {};
    var status = true;
    var User_Id = "deepanshu_oswal_29012001";
    var colleage_Roll_Number = "0827CS191079"
    var Email_Id = "deepanshuoswalcs19@acropolis.in"; 
    var arr = req.body.data;
    var alpha = [];
    var number = [];
    var cnt1 = 0,cnt2 = 0;
    str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(i = 0;i<arr.length;i++){
        var flag = false;
        for(let j = 0; j < str.length; j++){
            if(arr[i] == str[j]){ 
                flag = true;
                break;
            }    
        }
        if(flag){
            alpha[cnt2++] = arr[i];
        }
        if(!isNaN(arr[i])){
            number[cnt1++] = arr[i];
        }
    }
    var is_success = true;
    ans = {is_success:is_success,user_id:User_Id,email:Email_Id,roll_number:colleage_Roll_Number,numbers:number,alphabets:alpha};
    res.json(ans);
})
app.listen(port);

const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");
const app = express();
const https = require("https");
const { options } = require("request");
const port = 3000;

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended : true}));


app.get("/" , function (req , res) {
    res.sendFile(__dirname + "/index.html")
    // res.sendFile(__dirname +  "/csstindog/styles.css");
    // res.sendFile(__dirname + "/images")
})  ;

app.get("/login.html" ,function (request , response ) {
    response.sendFile(__dirname + "/login.html")
});


app.get("/kids.html" ,function (request , response ) {
    response.sendFile(__dirname + "/kids.html")
});


app.get("/womens.html" ,function (request , response ) {
    response.sendFile(__dirname + "/womens.html")
});


app.get("/mens.html" ,function (request , response ) {
    response.sendFile(__dirname + "/mens.html")
});

app.post("/login" , function (req , res) {
    const firstname = req.body.fname;
    const lastname  = req.body.lname;
    const emailid  = req.body.emailid;
    const contactno = req.body.contactno;
    const Password = req.body.password;

    console.log(firstname , lastname ,emailid , contactno);
    const data = {
        members : [
            {
                email_address : emailid,
                status : "subscribed",
                merge_fields : {
                    FNAME: firstname,
                    LNAME:lastname,
                    PHONE:contactno,
                    MMERGE6:Password
                }
            }
        ]
    };

    var jasonData = JSON.stringify(data);

    const url = "https://us20.api.mailchimp.com/3.0/lists/a080791189"


    const options ={
        method : "POST",
        auth  :"himanshu:63e5ee8a9d6f201e44b6fd5b1b17ef5a-us20"
    }


   const request =  https.request(url, options , function (response) {
      
    if (response.statusCode ===200) {
        res.sendFile(__dirname + "/success.html");
    }
    else{
        res.sendFile( __dirname + "/failure.html");
    }
    
        response.on("data" ,function (data) {
            console.log(JSON.parse(data));
        } )
    })

    request.write(jasonData);
    request.end();
});






app.listen(port , function (res) {
    console.log("server is running at 3000.");
});





// api key 
// 63e5ee8a9d6f201e44b6fd5b1b17ef5a-us20

//id
//a080791189
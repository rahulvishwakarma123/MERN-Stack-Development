const figlet = require("figlet")

figlet("Shiwangi",(err, data) =>{
    if(err) {
        console.log("Somthing went wrong.")
        console.dir(err)
        return;
    }
    console.log(data)
});
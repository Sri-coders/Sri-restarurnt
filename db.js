import mysql from "mysql";
export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
})
db.connect((err)=>{
if(err){
    console.error("show error",err)
}

else{
    console.log("database connected");
}
});
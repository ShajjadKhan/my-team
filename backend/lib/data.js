/*
 * Title: data handler file 
 * Description: data handler file 
 * Author: Rks Team
 * Developer: Md Shamim
 */
// depedencies 
const fs = require('fs')

// crud object 
const crud = {}

crud.create = (orginaldata) =>{
    // first of all read the file 
    fs.readFile("../backend/.database/users.json",'utf-8',(err,data)=>{
        // parse the data 
        
        const parseData = JSON.parse(data);
        const userData = parseData;
        userData.users.push(orginaldata)
        fs.writeFileSync("../backend/.database/users.json", JSON.stringify(userData))
    })
}
crud.read = (callback)=>{
    fs.readFile("../backend/.database/users.json",'utf-8',(err,data)=>{
        if(err){
            return
        }
       callback(err,data)
    })
}

module.exports = crud;
const mongoose = require('mongoose')

const DB = async ()=>{
    try {
        await mongoose.connect(process.env.URL_DB)
        
    }catch(e){
        console.log(e)
    }
}
module.exports = DB


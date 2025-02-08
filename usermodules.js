// const mongoose = require('mongoose');
// mongoose.set('strictQuery', true);
// mongoose.connect(`mongodb://127.0.0.1:27017/projectdata`,{ useNewUrlParser: true, useUnifiedTopology: true });

// const userSchema = mongoose.Schema({
//     userid : String ,
//     password_hash : String ,
//     role : String 
// })

// module.exports = mongoose.model("user", userSchema);
import postgres from 'postgres'
const DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.ccjdcvsbdpechjaufhti.supabase.co:5432/postgres
const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString)

export default sql

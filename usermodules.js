const { Client } = require('pg');

// Create a client for the SAPA database
const client = new Client({
    host: "db.ccjdcvsbdpechjaufhti.supabase.co",       // e.g., "sapa.example.com"
    user: "vivek7kushwah",        // Your SAPA database username
    password: "6116a939",    // Your SAPA database password
    database: "users",    // The name of your SAPA database
    port: 5432                    // Optional: Default is 5432 for PostgreSQL
});

// Connect to the database
client.connect((err) => {
    if (err) {
        console.error("Error connecting to SAPA database:", err);
        return;
    }
    console.log("Connected to SAPA database!");
});

module.exports = client;
// const mongoose = require('mongoose');
// mongoose.set('strictQuery', true);
// mongoose.connect(`mongodb://127.0.0.1:27017/projectdata`,{ useNewUrlParser: true, useUnifiedTopology: true });

// const userSchema = mongoose.Schema({
//     userid : String ,
//     password_hash : String ,
//     role : String 
// })

// module.exports = mongoose.model("user", userSchema);
// import postgres from 'postgres'
// const DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.ccjdcvsbdpechjaufhti.supabase.co:5432/postgres
// const connectionString = process.env.DATABASE_URL
// const sql = postgres(connectionString)

// export default sql

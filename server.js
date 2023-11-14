const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors')
const app = express();
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const successRoutes = require('./routes/success');
// app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));


app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(4000,()=>{
    console.log("Server is Running.")
});
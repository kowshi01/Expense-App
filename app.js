const express =require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const  path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(cors());
const sequelize = require('./util/database');

const expenseRoute = require('./router/expense');

app.use(expenseRoute);

sequelize.sync()
.then(()=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
})

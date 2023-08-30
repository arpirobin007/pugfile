const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
//const message = 'Alert';

    const express = require('express');

    const app = express();

    app.set('view engine', 'pug');
    app.set('views','views');

        const adminData = require('./Routes1/admin.js');
        const shopPage = require('./Routes1/shop.js');

        app.use(bodyParser.urlencoded({extended: true}));
        app.use(express.static(path.join(__dirname,'public')));
        app.use(adminData.routes);
        app.use(shopPage);

        app.use((req,res,next) => {
            res.status(404).render('404', {docTitle: 'Page Not found'});           
           // res.status(404).send('<h1><center>PAGE NOT FOUND</h1>');
        })



    const server = http.createServer(app); 
    
    server.listen(3335)

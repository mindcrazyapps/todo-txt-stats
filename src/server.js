const express = require('express');
const multer  = require('multer');
const fs  = require('fs');
const { parse } = require('@lggruspe/todo-txt-parser');
const { readFileSync } = require('fs')
const todo = readFileSync('todo.txt', 'utf8').trim()
const tasks = parse(todo);
const parser = require("todotxt-parser");
const tasks1 = parser.relaxed("x 2014-07-04 (A) 2014-06-19 Document YTD spending on +SocialEvents for @Alex due:2014-08-01");

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        const dir = './app/uploads';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

const upload = multer({storage: storage}).array('files', 12);

app.post('/upload', function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Something went wrong:(");
        }
        res.end("Upload completed.");
    });
})

app.listen(3000);

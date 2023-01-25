const express = require('express');
const multer  = require('multer');
const fs  = require('fs');
const parser = require("todotxt-parser");
const { parse } = require('@lggruspe/todo-txt-parser');
const { readFileSync } = require('fs')

//requiring path and fs modules
const path = require('path');
//joining path of directory 
const directoryPath = path.join(__dirname, '../data');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    console.log("directoryPath", directoryPath);
    //listing all files using forEach
    var filenamepath;
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        filenamepath= file;
        if (filenamepath.endsWith("txt")){
            const filepathnew = directoryPath+"/"+filenamepath;
            fs.readFile(filepathnew, {encoding: 'UTF-8'}, (err, data) => {
                const todo = readFileSync(filepathnew, 'utf8').trim() // '../app/uploads/todo.txt'
                if (err) { // or if (err) throw err;
                    console.error(err);
                    return;
                  }
                //console.log(data);
                console.log(parser.relaxed(data));
                //console.log(parse(todo));
              });
            //console.log(filenamepath); 
        }
        else {
          return null; //console.log("out extension:", filenamepath); 
        }
    });
});

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const dir = '../data/';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: (req, file, callback) => {
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

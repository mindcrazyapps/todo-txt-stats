//requiring path and fs modules etc
const express = require('express');
const multer  = require('multer');
//const ejs = require('ejs');
const fs  = require('fs');
const bodyParser = require('body-parser');
const parser = require("todotxt-parser");
const { parse } = require('@lggruspe/todo-txt-parser');
const { readFileSync } = require('fs')
const path = require('path');
const directoryPath = path.join(__dirname, '../data'); //joining path of directory 
const app = express();
app.use(express.static('public'))
app.use(express.static('js'))
app.use(express.static('css'))
app.use('/css', express.static('public'))
app.use('/js', express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug'); //ejs
//app.set('views', './src/views')
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

app.post('/upload',  (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            return res.end("Something went wrong:(");
        }
        else {
            fs.readdir(directoryPath, (err, files) => { //passsing directoryPath and callback function
                if (err) {//handling error
                    return console.log('Unable to scan directory: ' + err);
                } //console.log("directoryPath", directoryPath); //listing all files using forEach
                var filenamepath;
                files.forEach( (file) => {
                    // Do whatever you want to do with the file
                    filenamepath= file;
                    if (filenamepath.endsWith("txt")){
                        const filepathnew = directoryPath+"/"+filenamepath;
                        fs.readFile(filepathnew, {encoding: 'UTF-8'}, (err, data) => {
                            const todo = readFileSync(filepathnew, 'utf8').trim(); // '../app/uploads/todo.txt'
                            if (err) { // or if (err) throw err;
                                console.error(err);
                                return;
                              } 
                            res.render('index', {dataFileUpload: JSON.stringify(parser.relaxed(data))})
                          }); //console.log(parse(todo)); //res.end("Upload completed."+JSON.stringify(parser.relaxed(data)));
                    }
                    else {
                      return null; //console.log("out extension:", filenamepath); 
                    }
                });
            });
        }
    });
})

app.listen(3000);
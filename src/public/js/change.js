//const jsonfile = {
//    "resultFileUpload": txt;
// };
//const jsone = jsonfile.resultFileUpload.map((e) => {
//    return e.x;
// });
//console.log(jsone);
//$(document).ready(function (){
//    const txt = $("#resultFileUpload").val();
//    console.log(txt);
//});

const txt = $("#resultFileUpload").val(); //console.log( JSON.parse(txt));//JSON.stringify(txt);
new JsonViewer({container: document.body, data: txt, theme: 'light', expand: true});
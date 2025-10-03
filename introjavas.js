const http= require("http"), fs= require("fs"), url= require("url"), txt_md= require("querystring"), {MongoClient}= require("mongodb");
const cnx_bd= new MongoClient("mongodb+srv://athanasey376:Bionase12@cluster0.uiomylq.mongodb.net/"); 

const serveur= http.createServer((req,rep)=>{
rep.setHeader('Content-Type','text/html');

var adr= url.parse(req.url, true), pg_adr="."+ req.url;
var pg_type="", pg_web="";

pg_type=(req.method==="POST")?
req.on("data",data=>{
console.log("la medthode est maintenant en POST");

const txt_e= encodeURI(data);
const txt_d= decodeURIComponent(txt_e);
const cv_txtd= txt_md.parse(txt_d);
console.log(cv_txtd.nom +' '+ cv_txtd.prenom +' '+cv_txtd.tel +' '+cv_txtd.pass);
(async ()=> {
await cnx_bd.connect();
var m_cns= cnx_bd.db("sample_mflix");
var fam= m_cns.collection("athanaseCol");
var pers_asp=
{nom:cv_txtd.nom,
prenoms:cv_txtd.prenom,
tel:cv_txtd.tel,
pass:cv_txtd.pass}
var mbr= await fam.insertOne(pers_asp);
var aff_mbr= await fam.findOne(pers_asp);
var aff_mbr_rp= "<br><h2 style=\"color:blue;font-weight:bold;\">"+aff_mbr.nom +"</h2><br><span style=\"color:green;font-weight:bold;\">"+ aff_mbr.prenoms+"</span><br><span style=\"color:red;font-weight:bold;\">"+ aff_mbr.tel+ "</span>";
var aff_Gle=aff_mbr_rp;
var html_Strc="<html><"+"head><"+"meta charset"+"=\"utf-8\">"+"</head"+"><h1>Nouvelle personne enregistrée:</h1>"+ aff_Gle+ "</html>";
//var bja="<html><"+"head><"+"meta charset"+"=\"utf-8\">"+"</head"+"><h1>"+ bj+ "</h1></html>";

fs.writeFile("pg_succes.html",
html_Strc,
//"<html><"+"head><"+"meta content="+"\"text/html; charset=utf-8\">"+"</head"+"><h1>"+ bj+ "</h1></html>",
//bja,
{encoding:"utf8", flag:"w"},
(err)=>{
if(err){console.log(err);}
else{console.log("ajoute avec succes");}
});

//console.log("nouvelle personne enregistree: ",aff_mbr);

})();

fs.readFile(pg_adr,"utf8",(err, info)=>{
var c_info="";
c_info= (err)?console.log(err):rep.end(info);})
}
)
// fin du 1er if principale
:
pg_web=(req.url==="/")?
fs.readFile("./registre.html","utf8",(err, info)=>{
console.log(adr.search|| req.url);							   
var c_info="";
c_info=(err)?console.log(err):rep.end(info);
})
:
fs.readFile(pg_adr,"utf8",(err, info)=>{
var c_info="";
c_info= (err)?console.log(err):rep.end(info);});

});

serveur.listen(3004,"localhost",
(async ()=> {await cnx_bd.connect();
console.log("Emission serveur activee");
console.log("Base de donnee connectee");
})()
);
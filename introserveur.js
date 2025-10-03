// chargement des differents module utiliser pour cette page dans nodejs.
const http= require("http"), fs= require("fs"), url= require("url"), txt_md= require("querystring"), {MongoClient, ObjectId}= require("mongodb"), path = require('path');
const cnx_bd= new MongoClient("mongodb+srv://athanasey376:Bionase12@cluster0.uiomylq.mongodb.net/"); 

// creation du serveur
const serveur= http.createServer((req,rep)=>{

// Entete du serveur
rep.setHeader('Content-Type','text/html');

// debut du corps du serveur.
// declaration des variables a l'interieur du serveur
var adr= url.parse(req.url, true), pg_adr="."+ req.url;
var pg_type="", pg_web="";

// declenchement automatique de la creation de page d'accueil(dynamique, sinon pas necessaire si statique) 
//utilisant des informations depuis la base de donnees
(async ()=> {
await cnx_bd.connect();
var Lbd= cnx_bd.db("Bionase_LBM");
var Lpt= Lbd.collection("PATIENTS");

// recherche et recuperation des informations depuis la base donnee
var rch_Mld= await Lpt.find({}).toArray();
const tbN=[],tbP=[], tbDC=[], tbPRS=[], tbBt=[];
let txtN= "", txtP= "", txtDC= "", txtPRS= "", txtBt= "";
for( let pers of  rch_Mld){
txtN += tbN.push(Object.values(pers)[1]) + "<br>";
txtP += tbP.push(Object.values(pers)[2]) + "<br>";
txtDC += tbDC.push(Object.values(pers)[5]) + "<br>";
txtPRS += tbPRS.push(Object.values(pers)[6]) + "<br>";
txtBt += tbBt.push(Object.values(pers)[8]) + "<br>";}


let tb_oN= new Set(tbN), tb_oP= new Set(tbP), tb_oDC= new Set(tbDC), tb_oPRS= new Set(tbPRS), tb_oBt= new Set(tbBt);
tb_oN= [...tb_oN]; tb_oP= [...tb_oP]; tb_oDC= [...tb_oDC]; tb_oPRS= [...tb_oPRS]; tb_oBt= [...tb_oBt];

let txt_sdN= "";
for( let npers of tb_oN){
txt_sdN += "<option value=\"" + npers + "\">";}

let txt_sdP= "";
for( let ppers of tb_oP){
txt_sdP += "<option value=\"" + ppers + "\">";}

let txt_sdDC= "";
for( let dcpers of tb_oDC){
txt_sdDC += "<option value=\"" + dcpers + "\">";}

let txt_sdPRS= "";
for( let prspers of tb_oPRS){
txt_sdPRS += "<option value=\"" + prspers + "\">";}

let txt_sdBt= "";
for( let btpers of tb_oBt){
txt_sdBt += "<option value=\"" + btpers + "\">";}


var p1="<!DOCTYPE html><html><head>\n"+
"<meta content=\"fr-ci\" http-equiv=\"Content-Language\">\n"+
"<meta content=\"text/html; charset=utf-8\" http-equiv=\"Content-Type\">\n"+
"<title>Enregistrement</title>\n"+
"<link href=\"MFormat.css\" rel=\"stylesheet\" type=\"text/css\">\n"+
"</head>";
var p2="<body><div ><img alt=\"encart\" height=\"91\" src=\"imageTest2.jpg\" width=\"730\"><br></div>\n"+
"<form action=\"transit.html\" method=\"post\"><div id=\"bk_Hid\">\n"+
"<label>Nom: <input list=\"nomf\" name=\"nom\" type=\"text\" autocomplete=\"off\" ><datalist id=\"nomf\">";
var p3="</datalist></label><br><label>Prénoms :<input list=\"prn\" name=\"prenoms\" type=\"text\" autocomplete=\"off\" ><datalist id=\"prn\">";
var p4="</datalist></label><br><br>\n"+
"<label>Sexe :<select name=\"Sexe\" style=\"width: 45px\"><option></option><option>M</option><option>F</option></select></label><br><br>\n"+
"<label>Téléphone: <input name=\"Telephone\" type=\"tel\"></label><br><br>\n"+
"<label>Diagnostic Clinique:<input list=\"dc\" name=\"Diagnostic_Clinique\" type=\"text\" autocomplete=\"off\"><datalist id=\"dc\">";
var p5="</datalist></label><br><br><label>Prescripteur: <input  name=\"Prescripteur\" type=\"text\" autocomplete=\"off\" list=\"prs\"> <datalist id=\"prs\">";
var p6="</datalist></label><br><br><label>Examens Demandés : \n"+
"<select name=\"Examens_Demandes\" size=\"10\" multiple=\"multiple\"><option></option>\n"+
"<optgroup label=\"bilan cytobacteriologie\"><option>ECBU</option><option>Coproculture</option><option>LCR/Exudat</option><option>PU</option><option>PV</option><option>Spermoculture</option></optgroup>\n"+
"<optgroup label=\"bilan enzymatique musculaires\"><option>CPK</option><option>CPK-mb</option><option>LDH</option></optgroup>\n"+
"<optgroup label=\"bilan glycemique\"><option>Glycemie à Jeûn</option><option>Glycemie Post Prandiale</option><option>Glycorachie</option><option>Glycosurie</option><option>HBA1C</option></optgroup>\n"+
"<optgroup label=\"bilan hepatique et bilaire\"><option>ACHBC</option><option>ACHBe</option><option>ACHBS</option><option>ACHVC</option><option>AgHBe</option><option>AgHBS</option><option>Bilirubine conjuguee</option><option>Bilirubine Totale</option><option>Gamma-GT</option><option>HAV (IgM)</option><option>Phosphatase Alcaline</option><option>Transaminases</option></optgroup>\n"+
"<optgroup label=\"bilan hormonal\"><option>Beta HCG (sang)</option><option>Beta HCG (urine)</option><option>Cortisol</option><option>Estradiol</option><option>FSH</option><option>LH-RH</option><option>Progesterone</option><option>Prolactinemie</option><option>PSA</option><option>T3 libre</option><option>T4 libre</option><option>Testosterone</option><option>TSH</option><option>TSH_us</option></optgroup>\n"+
"<optgroup label=\"bilan Immuno-hematologique\"><option>NFS</option><option>Fibrinemie</option><option>Groupe Sanguin</option><option>INR</option><option>Taux de Prothrombine</option><option>TCK</option></optgroup>\n"+
"<optgroup label=\"bilan lipidique\"><option>Cholesterol HDL</option><option>Cholesterol LDL</option><option>Cholesterol Total</option><option>Triglycerides</option><option>Lipide totale</option></optgroup>\n"+
"<optgroup label=\"bilan renal\"><option>Acide urique</option><option>Albumine</option><option>Albuminurie</option><option>Clairance de creatininurie</option><option>Creatinine</option><option>DFG</option><option>Electrophorese des Proteines Serique</option><option>Gamma</option><option>Ionogramme Urinaire</option><option>Proteinurie</option><option>Proteinurie 24h</option><option>Uree</option></optgroup>\n"+
"<optgroup label=\"bilan serologie\"><option>ASLO</option><option>Bilharziose</option><option>BW (VDRL-TPHA)</option><option>Chlamydia</option><option>CRP</option><option>Mycoplasme</option><option>Rubeole</option><option>Toxoplasmose</option><option>VIH</option><option>Waaler Rose</option><option>Widal et Felix</option></optgroup>\n"+
"<optgroup label=\"bilan spermiologique\"><option>Spermocytogramme</option><option>Spermogramme</option></optgroup>\n"+
"<optgroup label=\"inflammation\"><option>Vitesse de Sedimentation (VS)</option><option>Facteur Rhumatoïde (FR)</option></optgroup>\n"+
"<optgroup label=\"ionogramme\"><option>Ionogramme simple</option><option>Calcium (Ca2+)</option><option>Magnesium (Mg2+)</option><option>Potassium (k+)</option><option>Protides Totaux</option><option>Reserve Alcalin</option></optgroup>\n"+
"</select></label><br><br><label>Le Biotechnologiste: <input  name=\"Biotechnologiste\" type=\"text\" autocomplete=\"off\" list=\"btech\"><datalist id=\"btech\">";
var p7="</datalist></label><br><br><label>Prix des Examens (ou statut): <input  name=\"Prix_des_Examens_ou_statut\" type=\"number\"  step=\"0.01\"></label><br><br>\n"+
"<label>Date du Prelevement: <input  name=\"Date_du_Prelevement\" type=\"date\">&nbsp;</label><br><br></div>\n"+
"<div id=\"bk_C\">\n"+
"<div id=\"bk_CG\">\n"+
"<h3>inflammation</h3>\n"+
"<label>VS : 1ère HEURE <input name=\"VS_1ereHEURE\" type=\"number\"  step=\"0.01\"></label><label>2ième HEURE : <input name=\"VS_2iemeHEURE\" type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>ionogramme</h3>\n"+
"<div>\n"+
"<label>Potassium (k+) : <input name=\"Potassium\" type=\"number\"  step=\"0.01\" ></label> \n"+
"<label>Sodium (Na+) : <input name=\"Sodium\" type=\"number\"  step=\"0.01\" ></label>\n"+
"<label>Chlore (Cl-) : <input name=\"Chlore\" type=\"number\"  step=\"0.01\" /></label>\n"+
"</div><br>\n"+
"<label>Magnésium (Mg2+) : <input name=\"Magnesium\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Calcium (Ca2+) : <input name=\"Calcium\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Reserve Alcalin : <input name=\"Reserve_Alcalin\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Protides Totaux : <input name=\"Protides_Totaux\" type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>bilan lipidique</h3>\n"+
"<label>Triglycérides: <input name=\"Triglycerides\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Cholestérol Total : <input name=\"Cholesterol_Total\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Cholestérol HDL : <input name=\"Cholesterol_HDL\" type=\"number\"  step=\"0.01\"> </label><br>\n"+
"<label>Cholestérol LDL : <input name=\"Cholesterol_LDL\" type=\"number\"  step=\"0.01\"> </label><br>\n"+
"<label>Lipide Totale : <input name=\"Lipide_Totale\" type=\"number\"  step=\"0.01\"> </label><br>\n"+
"<h3>bilan hepatique et bilaire</h3>\n"+
"<label>Transaminasemie GOT : <input name=\"TGO\" type=\"number\"  step=\"0.01\"></label><label>Transaminases TGP : <input name=\"TGP\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Bilirubine Totale : <input name=\"Bilirubine_Totale\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Bilirubine conjuguee : <input name=\"Bilirubine_Conjuguee\" type=\"number\"  step=\"0.01\"> </label><br>\n"+
"<label>AgHBS : <select name=\"AgHBS\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>\n"+
"<label>ACHBS : <select name=\"ACHBS\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>\n"+
"<label>AgHBe : <select name=\"AgHBe\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>\n"+
"<label>ACHBe : <select name=\"ACHBe\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select> </label><br>\n"+
"<label>ACHBC : <select name=\"ACHBC\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>\n"+
"<label>ACHVC : <select name=\"ACHVC\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>\n"+
"<label>HAV (IgM) : <select name=\"HAV_IgM\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>\n"+
"<label>Gamma-GT <input name=\"Gamma_GT\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Phosphatase Alcaline <input name=\"Phosphatase_Alcaline\" type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>bilan cytobacteriologie</h3>\n"+
"			<a href=\"ECBU.html\">ECBU: </a><br> \n"+
"			<a href=\"coproculture.html\">Coproculture:  </a><br> \n"+ 
"			<a href=\"pv.html\">PV :  </a><br>  \n"+
"			<a href=\"pu.html\">PU :</a><br>\n"+
"			<a href=\"spermoculture.html\">Spermoculture : </a><br> \n"+
"			<a href=\"lcr_exudat.html\">LCR/Exudat :</a> \n"+

"<h3>bilan spermiologique</h3>\n"+
"			<a href=\"spermogramme.html\">Spermogramme:</a><br>\n"+
"			<a href=\"spermocytogramme.html\">Spermocytogramme:</a>\n"+
"</div><div id=\"bk_CC\">\n"+
"<h3>bilan renal</h3>\n"+
"<label>Créatinine : <input name=\"Creatinine\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Uree:<input name=\"Uree\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Albuminurie:<input name=\"Albuminurie\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Protéinurie:<input name=\"Proteinurie\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Protéinurie 24h:<input name=\"Proteinurie_24h\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>DFG:<input name=\"DFG\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Ionogramme Urinaire : <input name=\"Ionogramme_Urinaire\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Clairance de Créatininurie : <input name=\"Clairance_de_Creatininurie\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Electrophorèse des Proteines Serique : <select name=\"Electrophorese_des_Proteines_Serique\"><option></option><option>NORMALE</option><option>ANORMALE</option></select></label><br>\n"+	
"<label>Albumine : <input name=\"Albumine_EP\"  type=\"number\"  step=\"0.01\"></label>\n"+
"<label>Alpha I : <input name=\"AlphaI\"  type=\"number\"  step=\"0.01\"></label>\n"+
"<label>Alpha II : <input name=\"AlphaII\"  type=\"number\"  step=\"0.01\"></label>\n"+
"<label>Beta : <input name=\"Beta\"  type=\"number\"  step=\"0.01\"></label>\n"+
"<label>Gamma : <input name=\"Gamma\"  type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>bilan glycemique</h3>\n"+
"<label>Glycémie à Jeûn : <input name=\"Glycemie_à_Jeûn\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Glycémie Post Prandiale : <input name=\"Glycemie_Post_Prandiale\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>HBA1C : <input name=\"HBA1C\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Glycosurie : <input name=\"Glycosurie\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Glycorachie : <input name=\"Glycorachie\" type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>bilan Immuno-hematologique</h3>\n"+
"NFS (Numeration  Sanguine):\n"+
"<label>Leucocytes : <input name=\"nfs_Leucocytes\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Hématies : <input name=\"nfs_Hematies\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Hemoglobine : <input name=\"nfs_Hemoglobine\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Hematocrite : <input name=\"nfs_Hematocrite\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>VGM : <input name=\"nfs_VGM\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>TCMH : <input name=\"nfs_TCMH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>CCMH : <input name=\"nfs_CCMH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Plaquette : <input name=\"nfs_Plaquette\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>PN : <input name=\"nfs_PN\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>PE : <input name=\"nfs_PE\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>PB : <input name=\"nfs_PB\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>LY : <input name=\"nfs_LY\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Mn : <input name=\"nfs_Mn\" type=\"number\"  step=\"0.01\"></label><br><br>\n"+
"<label>Groupe Sanguin : <select name=\"Groupe_Sanguin\"><option></option><option>O</option><option>A</option><option>B</option><option>AB</option></select></label>\n"+ 
"<label>Rhésus : <select name=\"Rhesus\"><option></option><option>(+) POSITIVE</option><option>(-) NEGATIVE</option></select></label>\n"+
"<label>TP : <input name=\"TP\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>TCK : <input name=\"TCK\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Fibrinémie : <input name=\"Fibrinemie\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Taux de Prothrombine : <input name=\"Taux_de_Prothrombine\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>INR : <input name=\"INR\" type=\"number\"  step=\"0.01\"></label><br><br>\n"+
"<label>Electrophorèse de hemoglobine : <select name=\"Electrophorese_de_hemoglobine\"><option></option><option>A1A2</option><option>AC</option><option>SC</option><option>SS</option><option>AF</option></select></label><br>\n"+
"<label>A1 : <input name=\"ElectroHB_A1\" type=\"number\"  step=\"0.01\"></label>\n"+
"<label>A2 : <input name=\"ElectroHB_A2\" type=\"number\"  step=\"0.01\"></label>\n"+
"<label>S : <input name=\"ElectroHB_S\" type=\"number\"  step=\"0.01\"></label>\n"+
"<label>C : <input name=\"ElectroHB_C\" type=\"number\"  step=\"0.01\"></label>\n"+
"<label>F : <input name=\"ElectroHB_F\" type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>bilan serologie</h3>\n"+
"<label>Widal et Félix : <select name=\"Widal_et_Felix\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>\n"+
"<label>TO : <input name=\"TO\" type=\"number\"  step=\"0.01\"></label>\n"+
"<label>TH :	<input name=\"TH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>AO : <input name=\"AO\" type=\"number\"  step=\"0.01\"></label>\n"+
"<label>AH : <input name=\"AH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>BO : <input name=\"BO\" type=\"number\"  step=\"0.01\"></label>\n"+ 
"<label>BH : <input name=\"BH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>CO : <input name=\"CO\" type=\"number\"  step=\"0.01\"></label>\n"+
"<label>CH :	<input name=\"CH\" type=\"number\"  step=\"0.01\"></label><br><br>\n"+
"<label>Toxoplasmose : <select name=\"Toxoplasmose\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> IgM : <input name=\"toxo_igm\" type=\"number\"  step=\"0.01\"></label><label> IgG :<input name=\"toxo_igg\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Rubéole : <select name=\"Rubeole\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> IgM : <input name=\"rub_igm\" type=\"number\"  step=\"0.01\"></label><label> IgG :<input name=\"rub_igg\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Chlamydia : <select name=\"Chlamydia\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> IgM : <input name=\"chld_igm\" type=\"number\"  step=\"0.01\"></label><label> IgG : <input name=\"chld_igg\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Mycoplasme : <select name=\"Mycoplasme\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> IgM : <input name=\"mycp_igm\" type=\"number\"  step=\"0.01\"></label><label> IgG : <input name=\"mycp_igg\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Bilharziose : <select name=\"Bilharziose\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> IgM : <input name=\"bilh_igm\" type=\"number\"  step=\"0.01\"></label><label> IgG : <input name=\"bilh_igg\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>VDRL : <select name=\"BW\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> TPHA : <input name=\"tpha\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Waaler Rose : <select name=\"Waaler_Rose\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> Titre : <input name=\"wlr_t\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>ASLO : <select name=\"ASLO\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> Titre : <input name=\"aslo_t\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>VIH : <select name=\"VIH\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> Typage : <select name=\"vih_tp\"><option></option><option>VIH1</option><option>VIH2</option><option>VIH1 et VIH 2</option></select></label><br>\n"+
"<label>CRP: <select name=\"CRP\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> Titre: <input name=\"CRP_t\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"</div><div id=\"bk_CD\">\n"+
"<h3>bilan hormonal</h3>\n"+
"<label>T3 libre: <input name=\"T3_libre\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>T4 libre : <input name=\"T4_libre\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>TSH : <input name=\"TSH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>PSA : <input name=\"PSA\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Estradiol : <input name=\"Estradiol\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Progestérone : <input name=\"Progesterone\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Prolactinémie : <input name=\"Prolactinemie\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>LH-RH : <input name=\"LH_RH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Cortisol : <input name=\"Cortisol\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>FSH : <input name=\"FSH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Testosterone : <input name=\"Testosterone\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>TSH_us : <input name=\"TSH_us\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Beta HCG (sang) : <input name=\"Beta_HCG_sang\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Beta HCG (urine) : <input name=\"Beta_HCG_urine\" type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>bilan enzymatique musculaires</h3>\n"+
"<label>LDH : <input name=\"LDH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>CPK : <input name=\"CPK\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>CPK-mb : <input name=\"CPK_mb\" type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>bilan divers</h3>\n"+
"<label>Myoglobine: <input name=\"Myoglobine\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Troponime: <input name=\"Troponime\" type=\"number\"  step=\"0.01\"></label><br><br>\n"+
"<input id=\"vdg\"  type=\"submit\" value=\"Envoyer [Vider]\">\n"+
"<input id=\"Enr_av\" type=\"button\" value=\"<\">\n"+
"<input  id=\"Enr_dv\" type=\"button\" value=\"/\" >\n"+
"<input id=\"edit_exam\" type=\"button\" value=\"Redaction d'examens\">\n"+
"<input type=\"button\" value=\"Nouveau Patient\"><input type=\"button\" value=\"Bilan Operationnel\"><input  type=\"button\" value=\"Utilisez une Calculatrice?\">\n"+
"<br></div></div></form><script src=\"Manip.js\"></script></body></html>";

var pt= p1+p2+txt_sdN +p3+txt_sdP+p4+txt_sdDC+p5+txt_sdPRS+p6+txt_sdBt+p7;

//insertion des donnees dans la page d'accueil
fs.writeFile("specimenMalad.html",
pt,
{encoding:"utf8", flag:"w"},
(err)=>{
if(err){console.log(err);}
else{console.log("Accueil OK");}
});

}
)();
//Fin de creation de la page d'accueil dynamique par le serveur.

// pose des conditions pour l'affichage des differentes page web contenu dans  l'ordinateur du serveur vers le navigateur internet.

// debut Condition SiVrai
pg_type=(req.method==="POST")?
//cdt imbriq
(req.headers.referer==="http://localhost:3004/")?
req.on("data",data=>{
console.log("Formulaire Envoye !");

const txt_e= encodeURI(data);
const txt_d= decodeURIComponent(txt_e);
const info_p= txt_md.parse(txt_d);

(async ()=> {
await cnx_bd.connect();
var Lbd= cnx_bd.db("Bionase_LBM");
var Lpt= Lbd.collection("PATIENTS");
var pers2= await Lpt.insertOne(info_p);
var rch_Mld= await Lpt.find({}).toArray();
var pers_rtv= await Lpt.findOne(info_p), info_pers="", info_exa="", info_persT="";

for (var i= 0; i < 11; i++){info_pers += Object.keys(pers_rtv)[i] + ": "+ Object.values(pers_rtv)[i]+"<br>";}
for (var f= 11; f < Object.values(pers_rtv).length; f++){info_exa += Object.keys(pers_rtv)[f] + ":"+ Object.values(pers_rtv)[f] + " ";}
for (var h= 0; h < Object.keys(pers_rtv).length; h++){info_persT += Object.keys(pers_rtv)[h] + ":"+"\""+ Object.values(pers_rtv)[h]+"\""+ ",";}

var impr_exa_json="export let exa_Grp={"+ info_persT + "};";
fs.writeFile("scode.js",impr_exa_json,{encoding:"utf8", flag:"w"},(err)=>{var info=(err)?console.log(err):console.log("imprExaModule ok");});

const tbN=[],tbP=[], tbDC=[], tbPRS=[], tbBt=[];
let txtN= "", txtP= "", txtDC= "", txtPRS= "", txtBt= "";
for( let pers of  rch_Mld){
txtN += tbN.push(Object.values(pers)[1]) + "<br>";
txtP += tbP.push(Object.values(pers)[2]) + "<br>";
txtDC += tbDC.push(Object.values(pers)[5]) + "<br>";
txtPRS += tbPRS.push(Object.values(pers)[6]) + "<br>";
txtBt += tbBt.push(Object.values(pers)[8]) + "<br>";}
let tb_oN= new Set(tbN), tb_oP= new Set(tbP), tb_oDC= new Set(tbDC), tb_oPRS= new Set(tbPRS), tb_oBt= new Set(tbBt);
tb_oN= [...tb_oN]; tb_oP= [...tb_oP]; tb_oDC= [...tb_oDC]; tb_oPRS= [...tb_oPRS]; tb_oBt= [...tb_oBt];

let txt_sdN= "";
for( let npers of tb_oN){
txt_sdN += "<option value=\"" + npers + "\">";}

let txt_sdP= "";
for( let ppers of tb_oP){
txt_sdP += "<option value=\"" + ppers + "\">";}

let txt_sdDC= "";
for( let dcpers of tb_oDC){
txt_sdDC += "<option value=\"" + dcpers + "\">";}

let txt_sdPRS= "";
for( let prspers of tb_oPRS){
txt_sdPRS += "<option value=\"" + prspers + "\">";}

let txt_sdBt= "";
for( let btpers of tb_oBt){
txt_sdBt += "<option value=\"" + btpers + "\">";}


var m1="<!DOCTYPE html><html><head>\n"+
"<meta content=\"fr-ci\" http-equiv=\"Content-Language\">\n"+
"<meta content=\"text/html; charset=utf-8\" http-equiv=\"Content-Type\">\n"+
"<title>Enregistrement</title>\n"+
"<link href=\"MFormat.css\" rel=\"stylesheet\" type=\"text/css\">\n"+
"</head>";
var m2="<body><div ><img alt=\"encart\" height=\"91\" src=\"imageTest2.jpg\" width=\"730\"><br></div>\n"+
"<form action=\"transit.html\" method=\"post\"><div id=\"bk_Hid\">\n"+
"<label>ID (Auto): <input name=\"_id\" type=\"text\" autocomplete=\"off\" readonly=\"readonly\" ></label><br>\n"+
"<label>Nom: <input list=\"nomf\" name=\"nom\" type=\"text\" autocomplete=\"off\" ><datalist id=\"nomf\">";
var m3="</datalist></label><br><label>Prénoms :<input list=\"prn\" name=\"prenoms\" type=\"text\" autocomplete=\"off\" ><datalist id=\"prn\">";
var m4="</datalist></label><br><br>\n"+
"<label>Sexe :<select name=\"Sexe\" style=\"width: 45px\"><option></option><option>M</option><option>F</option></select></label><br><br>\n"+
"<label>Téléphone: <input name=\"Telephone\" type=\"tel\"></label><br><br>\n"+
"<label>Diagnostic Clinique:<input list=\"dc\" name=\"Diagnostic_Clinique\" type=\"text\" autocomplete=\"off\"><datalist id=\"dc\">";
var m5="</datalist></label><br><br><label>Prescripteur: <input  name=\"Prescripteur\" type=\"text\" autocomplete=\"off\" list=\"prs\"> <datalist id=\"prs\">";
var m6="</datalist></label><br><br><label>Examens Demandés : \n"+
"<select name=\"Examens_Demandes\" size=\"10\" multiple=\"multiple\">\n"+
"<optgroup label=\"bilan cytobacteriologie\"><option>ECBU</option><option>Coproculture</option><option>LCR/Exudat</option><option>PU</option><option>PV</option><option>Spermoculture</option></optgroup>\n"+
"<optgroup label=\"bilan enzymatique musculaires\"><option>CPK</option><option>CPK-mb</option><option>LDH</option></optgroup>\n"+
"<optgroup label=\"bilan glycemique\"><option>Glycemie à Jeûn</option><option>Glycemie Post Prandiale</option><option>Glycorachie</option><option>Glycosurie</option><option>HBA1C</option></optgroup>\n"+
"<optgroup label=\"bilan hepatique et bilaire\"><option>ACHBC</option><option>ACHBe</option><option>ACHBS</option><option>ACHVC</option><option>AgHBe</option><option>AgHBS</option><option>Bilirubine conjuguee</option><option>Bilirubine Totale</option><option>Gamma-GT</option><option>HAV (IgM)</option><option>Phosphatase Alcaline</option><option>Transaminases</option></optgroup>\n"+
"<optgroup label=\"bilan hormonal\"><option>Beta HCG (sang)</option><option>Beta HCG (urine)</option><option>Cortisol</option><option>Estradiol</option><option>FSH</option><option>LH-RH</option><option>Progesterone</option><option>Prolactinemie</option><option>PSA</option><option>T3 libre</option><option>T4 libre</option><option>Testosterone</option><option>TSH</option><option>TSH_us</option></optgroup>\n"+
"<optgroup label=\"bilan Immuno-hematologique\"><option>NFS</option><option>Fibrinemie</option><option>Groupe Sanguin</option><option>INR</option><option>Taux de Prothrombine</option><option>TCK</option></optgroup>\n"+
"<optgroup label=\"bilan lipidique\"><option>Cholesterol HDL</option><option>Cholesterol LDL</option><option>Cholesterol Total</option><option>Triglycerides</option><option>Lipide totale</option></optgroup>\n"+
"<optgroup label=\"bilan renal\"><option>Acide urique</option><option>Albumine</option><option>Albuminurie</option><option>Clairance de creatininurie</option><option>Creatinine</option><option>DFG</option><option>Electrophorese des Proteines Serique</option><option>Gamma</option><option>Ionogramme Urinaire</option><option>Proteinurie</option><option>Proteinurie 24h</option><option>Uree</option></optgroup>\n"+
"<optgroup label=\"bilan serologie\"><option>ASLO</option><option>Bilharziose</option><option>BW (VDRL-TPHA)</option><option>Chlamydia</option><option>CRP</option><option>Mycoplasme</option><option>Rubeole</option><option>Toxoplasmose</option><option>VIH</option><option>Waaler Rose</option><option>Widal et Felix</option></optgroup>\n"+
"<optgroup label=\"bilan spermiologique\"><option>Spermocytogramme</option><option>Spermogramme</option></optgroup>\n"+
"<optgroup label=\"inflammation\"><option>Vitesse de Sedimentation (VS)</option><option>Facteur Rhumatoïde (FR)</option></optgroup>\n"+
"<optgroup label=\"ionogramme\"><option>Ionogramme simple</option><option>Calcium (Ca2+)</option><option>Magnesium (Mg2+)</option><option>Potassium (k+)</option><option>Protides Totaux</option><option>Reserve Alcalin</option></optgroup>\n"+
"</select></label><br><br><label>Le Biotechnologiste: <input  name=\"Biotechnologiste\" type=\"text\"autocomplete=\"off\" list=\"btech\"><datalist id=\"btech\">";
var m7="</datalist></label><br><br><label>Prix des Examens (ou statut): <input  name=\"Prix_des_Examens_ou_statut\" type=\"number\"  step=\"0.01\"></label><br><br>\n"+
"<label>Date du Prelevement: <input  name=\"Date_du_Prelevement\" type=\"date\">&nbsp;</label><br><br></div>\n"+
"<div id=\"bk_C\">\n"+
"<div id=\"bk_CG\">\n"+
"<h3>inflammation</h3>\n"+
"<label>VS : 1ère HEURE <input name=\"VS_1ereHEURE\" type=\"number\"  step=\"0.01\"></label><label>2ième HEURE : <input name=\"VS_2iemeHEURE\" type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>ionogramme</h3>\n"+
"<div>\n"+
"<label>Potassium (k+) : <input name=\"Potassium\" type=\"number\"  step=\"0.01\" ></label> \n"+
"<label>Sodium (Na+) : <input name=\"Sodium\" type=\"number\"  step=\"0.01\" ></label>\n"+
"<label>Chlore (Cl-) : <input name=\"Chlore\" type=\"number\"  step=\"0.01\" /></label>\n"+
"</div><br>\n"+
"<label>Magnésium (Mg2+) : <input name=\"Magnesium\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Calcium (Ca2+) : <input name=\"Calcium\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Reserve Alcalin : <input name=\"Reserve_Alcalin\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Protides Totaux : <input name=\"Protides_Totaux\" type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>bilan lipidique</h3>\n"+
"<label>Triglycérides: <input name=\"Triglycerides\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Cholestérol Total : <input name=\"Cholesterol_Total\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Cholestérol HDL : <input name=\"Cholesterol_HDL\" type=\"number\"  step=\"0.01\"> </label><br>\n"+
"<label>Cholestérol LDL : <input name=\"Cholesterol_LDL\" type=\"number\"  step=\"0.01\"> </label><br>\n"+
"<label>Lipide Totale : <input name=\"Lipide_Totale\" type=\"number\"  step=\"0.01\"> </label><br>\n"+
"<h3>bilan hepatique et bilaire</h3>\n"+
"<label>Transaminasemie GOT : <input name=\"TGO\" type=\"number\"  step=\"0.01\"></label><label>Transaminases TGP : <input name=\"TGP\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Bilirubine Totale : <input name=\"Bilirubine_Totale\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Bilirubine conjuguee : <input name=\"Bilirubine_Conjuguee\" type=\"number\"  step=\"0.01\"> </label><br>\n"+
"<label>AgHBS : <select name=\"AgHBS\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>\n"+
"<label>ACHBS : <select name=\"ACHBS\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>\n"+
"<label>AgHBe : <select name=\"AgHBe\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>\n"+
"<label>ACHBe : <select name=\"ACHBe\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select> </label><br>\n"+
"<label>ACHBC : <select name=\"ACHBC\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>\n"+
"<label>ACHVC : <select name=\"ACHVC\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>\n"+
"<label>HAV (IgM) : <select name=\"HAV_IgM\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>\n"+
"<label>Gamma-GT <input name=\"Gamma_GT\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Phosphatase Alcaline <input name=\"Phosphatase_Alcaline\" type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>bilan cytobacteriologie</h3>\n"+
"			<a href=\"ECBU.html\">ECBU: </a><br> \n"+
"			<a href=\"coproculture.html\">Coproculture:  </a><br> \n"+ 
"			<a href=\"pv.html\">PV :  </a><br>  \n"+
"			<a href=\"pu.html\">PU :</a><br>\n"+
"			<a href=\"spermoculture.html\">Spermoculture : </a><br> \n"+
"			<a href=\"lcr_exudat.html\">LCR/Exudat :</a> \n"+

"<h3>bilan spermiologique</h3>\n"+
"			<a href=\"spermogramme.html\">Spermogramme:</a><br>\n"+
"			<a href=\"spermocytogramme.html\">Spermocytogramme:</a>\n"+
"</div><div id=\"bk_CC\">\n"+
"<h3>bilan renal</h3>\n"+
"<label>Créatinine : <input name=\"Creatinine\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Uree:<input name=\"Uree\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Albuminurie:<input name=\"Albuminurie\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Protéinurie:<input name=\"Proteinurie\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Protéinurie 24h:<input name=\"Proteinurie_24h\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>DFG:<input name=\"DFG\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Ionogramme Urinaire : <input name=\"Ionogramme_Urinaire\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Clairance de Créatininurie : <input name=\"Clairance_de_Creatininurie\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Electrophorèse des Proteines Serique : <select name=\"Electrophorese_des_Proteines_Serique\"><option></option><option>NORMALE</option><option>ANORMALE</option></select></label><br>\n"+	
"<label>Albumine : <input name=\"Albumine_EP\"  type=\"number\"  step=\"0.01\"></label>\n"+
"<label>Alpha I : <input name=\"AlphaI\"  type=\"number\"  step=\"0.01\"></label>\n"+
"<label>Alpha II : <input name=\"AlphaII\"  type=\"number\"  step=\"0.01\"></label>\n"+
"<label>Beta : <input name=\"Beta\"  type=\"number\"  step=\"0.01\"></label>\n"+
"<label>Gamma : <input name=\"Gamma\"  type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>bilan glycemique</h3>\n"+
"<label>Glycémie à Jeûn : <input name=\"Glycemie_à_Jeûn\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Glycémie Post Prandiale : <input name=\"Glycemie_Post_Prandiale\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>HBA1C : <input name=\"HBA1C\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Glycosurie : <input name=\"Glycosurie\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Glycorachie : <input name=\"Glycorachie\" type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>bilan Immuno-hematologique</h3>\n"+
"NFS (Numeration  Sanguine):\n"+
"<label>Leucocytes : <input name=\"nfs_Leucocytes\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Hématies : <input name=\"nfs_Hematies\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Hemoglobine : <input name=\"nfs_Hemoglobine\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Hematocrite : <input name=\"nfs_Hematocrite\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>VGM : <input name=\"nfs_VGM\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>TCMH : <input name=\"nfs_TCMH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>CCMH : <input name=\"nfs_CCMH\"  type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Plaquette : <input name=\"nfs_Plaquette\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>PN : <input name=\"nfs_PN\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>PE : <input name=\"nfs_PE\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>PB : <input name=\"nfs_PB\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>LY : <input name=\"nfs_LY\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Mn : <input name=\"nfs_Mn\" type=\"number\"  step=\"0.01\"></label><br><br>\n"+
"<label>Groupe Sanguin : <select name=\"Groupe_Sanguin\"><option></option><option>O</option><option>A</option><option>B</option><option>AB</option></select></label>\n"+ 
"<label>Rhésus : <select name=\"Rhesus\"><option></option><option>(+) POSITIVE</option><option>(-) NEGATIVE</option></select></label>\n"+
"<label>TP : <input name=\"TP\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>TCK : <input name=\"TCK\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Fibrinémie : <input name=\"Fibrinemie\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Taux de Prothrombine : <input name=\"Taux_de_Prothrombine\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>INR : <input name=\"INR\" type=\"number\"  step=\"0.01\"></label><br><br>\n"+
"<label>Electrophorèse de hemoglobine : <select name=\"Electrophorese_de_hemoglobine\"><option></option><option>A1A2</option><option>AC</option><option>SC</option><option>SS</option><option>AF</option></select></label><br>\n"+
"<label>A1 : <input name=\"ElectroHB_A1\" type=\"number\"  step=\"0.01\"></label>\n"+
"<label>A2 : <input name=\"ElectroHB_A2\" type=\"number\"  step=\"0.01\"></label>\n"+
"<label>S : <input name=\"ElectroHB_S\" type=\"number\"  step=\"0.01\"></label>\n"+
"<label>C : <input name=\"ElectroHB_C\" type=\"number\"  step=\"0.01\"></label>\n"+
"<label>F : <input name=\"ElectroHB_F\" type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>bilan serologie</h3>\n"+
"<label>Widal et Félix : <select name=\"Widal_et_Felix\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>\n"+
"<label>TO : <input name=\"TO\" type=\"number\"  step=\"0.01\"></label>\n"+
"<label>TH : <input name=\"TH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>AO : <input name=\"AO\" type=\"number\"  step=\"0.01\"></label>\n"+
"<label>AH : <input name=\"AH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>BO : <input name=\"BO\" type=\"number\"  step=\"0.01\"></label>\n"+ 
"<label>BH : <input name=\"BH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>CO : <input name=\"CO\" type=\"number\"  step=\"0.01\"></label>\n"+
"<label>CH :	<input name=\"CH\" type=\"number\"  step=\"0.01\"></label><br><br>\n"+
"<label>Toxoplasmose : <select name=\"Toxoplasmose\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> IgM : <input name=\"toxo_igm\" type=\"number\"  step=\"0.01\"></label><label> IgG :<input name=\"toxo_igg\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Rubéole : <select name=\"Rubeole\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> IgM : <input name=\"rub_igm\" type=\"number\"  step=\"0.01\"></label><label> IgG :<input name=\"rub_igg\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Chlamydia : <select name=\"Chlamydia\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> IgM : <input name=\"chld_igm\" type=\"number\"  step=\"0.01\"></label><label> IgG : <input name=\"chld_igg\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Mycoplasme : <select name=\"Mycoplasme\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> IgM : <input name=\"mycp_igm\" type=\"number\"  step=\"0.01\"></label><label> IgG : <input name=\"mycp_igg\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Bilharziose : <select name=\"Bilharziose\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> IgM : <input name=\"bilh_igm\" type=\"number\"  step=\"0.01\"></label><label> IgG : <input name=\"bilh_igg\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>VDRL : <select name=\"BW\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> TPHA : <input name=\"tpha\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Waaler Rose : <select name=\"Waaler_Rose\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> Titre : <input name=\"wlr_t\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>ASLO : <select name=\"ASLO\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> Titre : <input name=\"aslo_t\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>VIH : <select name=\"VIH\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> Typage : <select name=\"vih_tp\"><option></option><option>VIH1</option><option>VIH2</option><option>VIH1 et VIH 2</option></select></label><br>\n"+
"<label>CRP: <select name=\"CRP\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> Titre: <input name=\"CRP_t\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"</div><div id=\"bk_CD\">\n"+
"<h3>bilan hormonal</h3>\n"+
"<label>T3 libre: <input name=\"T3_libre\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>T4 libre : <input name=\"T4_libre\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>TSH : <input name=\"TSH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>PSA : <input name=\"PSA\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Estradiol : <input name=\"Estradiol\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Progestérone : <input name=\"Progesterone\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Prolactinémie : <input name=\"Prolactinemie\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>LH-RH : <input name=\"LH_RH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Cortisol : <input name=\"Cortisol\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>FSH : <input name=\"FSH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Testosterone : <input name=\"Testosterone\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>TSH_us : <input name=\"TSH_us\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Beta HCG (sang) : <input name=\"Beta_HCG_sang\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Beta HCG (urine) : <input name=\"Beta_HCG_urine\" type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>bilan enzymatique musculaires</h3>\n"+
"<label>LDH : <input name=\"LDH\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>CPK : <input name=\"CPK\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>CPK-mb : <input name=\"CPK_mb\" type=\"number\"  step=\"0.01\"></label>\n"+
"<h3>bilan divers</h3>\n"+
"<label>Myoglobine: <input name=\"Myoglobine\" type=\"number\"  step=\"0.01\"></label><br>\n"+
"<label>Troponime: <input name=\"Troponime\" type=\"number\"  step=\"0.01\"></label><br><br>\n"+
"<input id=\"vdg\"  type=\"submit\" value=\"Envoyer [Vider]\">\n"+
"<input id=\"Enr_av\" type=\"button\" value=\"<\">\n"+
"<input  id=\"Enr_dv\" type=\"button\" value=\"/\" >\n"+
"<input id=\"edit_exam\" type=\"button\" value=\"Redaction d'examens\">\n"+
"<input type=\"button\" value=\"Nouveau Patient\"><input type=\"button\" value=\"Bilan Operationnel\"><input  type=\"button\" value=\"Utilisez une Calculatrice?\">\n"+
"<br></div></div></form><script src=\"Manip.js\"></script><script type=\"module\"> import {exa_Grp} from \"./scode.js\";\n"+
"var lgn_chp=document.getElementsByTagName(\"label\");\n"+
"let CvED=exa_Grp.Examens_Demandes.split(\",\");\n"+
"for (var i= 0; i < lgn_chp.length; i++)\n"+
"{if(lgn_chp[i].firstElementChild.nodeName===\"INPUT\"){lgn_chp[i].firstElementChild.value= exa_Grp[lgn_chp[i].firstElementChild.name]}\n"+
"else if(lgn_chp[i].firstElementChild.multiple){\n"+
"for (var j= 0; j < lgn_chp[i].firstElementChild.children.length; j++)\n"+
"{let cph=lgn_chp[i].firstElementChild.children[j].textContent;\n"+
"for (var l= 0; l < lgn_chp[i].firstElementChild.children[j].children.length; l++){for (var m= 0; m < CvED.length; m++){\n"+
"if(lgn_chp[i].firstElementChild.children[j].children[l].textContent===CvED[m]){let NvS=document.createElement(\"option\");NvS.selected=\"selected\";NvS.textContent=CvED[m];\n"+
"lgn_chp[i].firstElementChild.children[j].children[l].replaceWith(NvS);}}}}}\n"+
"else {lgn_chp[i].firstElementChild.firstElementChild.textContent= exa_Grp[lgn_chp[i].firstElementChild.name]}}\n"+
"</script></body></html>";

var mt= m1+m2+txt_sdN +m3+txt_sdP+m4+txt_sdDC+m5+txt_sdPRS+m6+txt_sdBt+m7;
fs.writeFile("Modif.html",mt,{encoding:"utf8", flag:"w"},(err)=>{var info=(err)?console.log(err):console.log("Mdf_pg pret! ");});

var suc1="<html><head>"+
"<meta content=\"fr-ci\" http-equiv=\"Content-Language\">"+
"<meta content=\"text/html; charset=utf-8\" http-equiv=\"Content-Type\">"+
"<link href=\"MFormat.css\" rel=\"stylesheet\" type=\"text/css\">"+
"<title>sans titre 1</title></head><body><h1>Vous venez d'enregistrez:</h1><table>"+
"<tr><td>Pour BULLETIN DU PATIENT</td><td>Et&nbsp; EXAMENS EFFECTUES :</td></tr><tr><td>";
var suc2="</td><td>";
var suc3="</td></tr></table><br><br><br><br><p>"+
"<input id=\"mdf\"  type=\"button\"  value=\"Modifier\"><input id=\"enr_sv\"  type=\"button\" value=\"Passez à letape suivante\"><br></p><br>"+
"<script>document.getElementById(\"mdf\").addEventListener('click',()=>{window.location.href=\"Modif.html\";});"+
"document.getElementById(\"enr_sv\").addEventListener('click',()=>{window.location.href=\"/\";});"+
"</script></body></html>";

var aff_Gle= suc1+info_pers+suc2+info_exa+suc3;

fs.writeFile("pg_succes.html",aff_Gle,{encoding:"utf8", flag:"w"},(err)=>{var info=(err)?console.log(err):console.log("OK succes");});

})();


fs.readFile(pg_adr,"utf8",(err, info)=>{
var c_info="";
c_info= (err)?console.log(err):rep.end(info);})
}
)
/*:
(req.headers.referer==="http://localhost:3004/ECBU.html")?
req.on("data",data=>{
console.log("ECBU rediger!");

const txt_eECBU= encodeURI(data);
const txt_dECBU= decodeURIComponent(txt_eECBU);
const info_pECBU= txt_md.parse(txt_dECBU);let info_persTECBU="",info_persECBU="", info_exaECBU="";
for (var p= 0; p < Object.keys(info_pECBU).length; p++){info_persTECBU += Object.keys(info_pECBU)[p] + ":"+"\""+ Object.values(info_pECBU)[p]+"\""+ ",";}
var impr_exa_jsonECBU="export let exa_GrpECBU={"+ info_persTECBU + "};";
fs.writeFile("scodeECBU.js",impr_exa_jsonECBU,{encoding:"utf8", flag:"w"},(err)=>{var info=(err)?console.log(err):console.log("imprECBUModule ok");});
for (var q= 0; q < 5; q++){info_persECBU += Object.keys(info_pECBU)[q] + ": "+ Object.values(info_pECBU)[p]+"<br>";}
for (var r= 5; r < Object.values(info_pECBU).length; r++){info_exaECBU += Object.keys(info_pECBU)[r] + ":"+ Object.values(info_pECBU)[r] + " ";}
(async ()=> {
await cnx_bd.connect();
var LbdECBU= cnx_bd.db("Bionase_LBM"),LptECBU= LbdECBU.collection("PATIENTS");
const ptIDECBU= info_pECBU._id; delete info_pECBU._id;var rchMldECBU= await LptECBU.findOne({_id:new ObjectId(ptIDECBU)});
console.log(rchMldECBU);
var persECBU= await LptECBU.findOneAndReplace({_id:new ObjectId(ptIDECBU)},info_pECBU);

}))
*/
/*fin d'une cdt vraie*/
:
req.on("data",data=>{
console.log("Formulaire Modifier Envoyé!");

const txt_eM= encodeURI(data);
const txt_dM= decodeURIComponent(txt_eM);
const info_pM= txt_md.parse(txt_dM);let info_persTM="",info_persM="", info_exaM="";


for (var k= 0; k < Object.keys(info_pM).length; k++){info_persTM += Object.keys(info_pM)[k] + ":"+"\""+ Object.values(info_pM)[k]+"\""+ ",";}
var impr_exa_jsonM="export let exa_GrpM={"+ info_persTM + "};";
fs.writeFile("scodeM.js",impr_exa_jsonM,{encoding:"utf8", flag:"w"},(err)=>{var info=(err)?console.log(err):console.log("imprExaModule_M ok");});

for (var m= 0; m < 11; m++){info_persM += Object.keys(info_pM)[m] + ": "+ Object.values(info_pM)[m]+"<br>";}
for (var n= 11; n < Object.values(info_pM).length; n++){info_exaM += Object.keys(info_pM)[n] + ":"+ Object.values(info_pM)[n] + " ";}



(async ()=> {
await cnx_bd.connect();
var LbdM= cnx_bd.db("Bionase_LBM");
var LptM= LbdM.collection("PATIENTS");


const ptID= info_pM._id; delete info_pM._id;

var persM= await LptM.findOneAndReplace({_id:new ObjectId(ptID)},info_pM);

var rch_MldM= await LptM.find({}).toArray();
const tbNM=[],tbPM=[], tbDCM=[], tbPRSM=[], tbBtM=[];
let txtNM= "", txtPM= "", txtDCM= "", txtPRSM= "", txtBtM= "";
for( let persmM of rch_MldM){
txtNM += tbNM.push(Object.values(persmM)[1]) + "<br>";
txtPM += tbPM.push(Object.values(persmM)[2]) + "<br>";
txtDCM += tbDCM.push(Object.values(persmM)[5]) + "<br>";
txtPRSM += tbPRSM.push(Object.values(persmM)[6]) + "<br>";
txtBtM += tbBtM.push(Object.values(persmM)[8]) + "<br>";}
let tb_oNM= new Set(tbNM), tb_oPM= new Set(tbPM), tb_oDCM= new Set(tbDCM), tb_oPRSM= new Set(tbPRSM), tb_oBtM= new Set(tbBtM);
tb_oNM= [...tb_oNM]; tb_oPM= [...tb_oPM]; tb_oDCM= [...tb_oDCM]; tb_oPRSM= [...tb_oPRSM]; tb_oBtM= [...tb_oBtM];

let txt_sdNM= "";
for( let npersM of tb_oNM){
txt_sdNM += "<option value=\"" + npersM + "\">";}

let txt_sdPM= "";
for( let ppersM of tb_oPM){
txt_sdPM += "<option value=\"" + ppersM + "\">";}

let txt_sdDCM= "";
for( let dcpersM of tb_oDCM){
txt_sdDCM += "<option value=\"" + dcpersM + "\">";}

let txt_sdPRSM= "";
for( let prspersM of tb_oPRSM){
txt_sdPRSM += "<option value=\"" + prspersM + "\">";}

let txt_sdBtM= "";
for( let btpersM of tb_oBtM){
txt_sdBtM += "<option value=\"" + btpersM + "\">";}


var mM1="<!DOCTYPE html><html><head>"+
"<meta content=\"fr-ci\" http-equiv=\"Content-Language\">"+
"<meta content=\"text/html; charset=utf-8\" http-equiv=\"Content-Type\">"+
"<title>Enregistrement</title>"+
"<link href=\"MFormat.css\" rel=\"stylesheet\" type=\"text/css\">"+
"</head>";
var mM2="<body><div ><img alt=\"encart\" height=\"91\" src=\"imageTest2.jpg\" width=\"730\"><br></div>"+
"<form action=\"transit.html\" method=\"post\"><div id=\"bk_Hid\">"+
"<label>ID (Auto): <input name=\"_id\" type=\"text\" autocomplete=\"off\" readonly=\"readonly\" ></label><br>"+
"<label>Nom: <input list=\"nomf\" name=\"nom\" type=\"text\" autocomplete=\"off\" ><datalist id=\"nomf\">";
var mM3="</datalist></label><br><label>Prénoms :<input list=\"prn\" name=\"prenoms\" type=\"text\" autocomplete=\"off\" ><datalist id=\"prn\">";
var mM4="</datalist></label><br><br>"+
"<label>Sexe :<select name=\"Sexe\" style=\"width: 45px\"><option></option><option>M</option><option>F</option></select></label><br><br>"+
"<label>Téléphone: <input name=\"Telephone\" type=\"tel\"></label><br><br>"+
"<label>Diagnostic Clinique:<input list=\"dc\" name=\"Diagnostic_Clinique\" type=\"text\" autocomplete=\"off\"><datalist id=\"dc\">";
var mM5="</datalist></label><br><br><label>Prescripteur: <input  name=\"Prescripteur\" type=\"text\" autocomplete=\"off\" list=\"prs\"> <datalist id=\"prs\">";
var mM6="</datalist></label><br><br><label>Examens Demandés : "+
"<select name=\"Examens_Demandes\" size=\"10\" multiple=\"multiple\">"+
"<optgroup label=\"bilan cytobacteriologie\"><option>ECBU</option><option>Coproculture</option><option>LCR/Exudat</option><option>PU</option><option>PV</option><option>Spermoculture</option></optgroup>"+
"<optgroup label=\"bilan enzymatique musculaires\"><option>CPK</option><option>CPK-mb</option><option>LDH</option></optgroup>"+
"<optgroup label=\"bilan glycemique\"><option>Glycemie à Jeûn</option><option>Glycemie Post Prandiale</option><option>Glycorachie</option><option>Glycosurie</option><option>HBA1C</option></optgroup>"+
"<optgroup label=\"bilan hepatique et bilaire\"><option>ACHBC</option><option>ACHBe</option><option>ACHBS</option><option>ACHVC</option><option>AgHBe</option><option>AgHBS</option><option>Bilirubine conjuguee</option><option>Bilirubine Totale</option><option>Gamma-GT</option><option>HAV (IgM)</option><option>Phosphatase Alcaline</option><option>Transaminases</option></optgroup>"+
"<optgroup label=\"bilan hormonal\"><option>Beta HCG (sang)</option><option>Beta HCG (urine)</option><option>Cortisol</option><option>Estradiol</option><option>FSH</option><option>LH-RH</option><option>Progesterone</option><option>Prolactinemie</option><option>PSA</option><option>T3 libre</option><option>T4 libre</option><option>Testosterone</option><option>TSH</option><option>TSH_us</option></optgroup>"+
"<optgroup label=\"bilan Immuno-hematologique\"><option>NFS</option><option>Fibrinemie</option><option>Groupe Sanguin</option><option>INR</option><option>Taux de Prothrombine</option><option>TCK</option></optgroup>"+
"<optgroup label=\"bilan lipidique\"><option>Cholesterol HDL</option><option>Cholesterol LDL</option><option>Cholesterol Total</option><option>Triglycerides</option><option>Lipide totale</option></optgroup>"+
"<optgroup label=\"bilan renal\"><option>Acide urique</option><option>Albumine</option><option>Albuminurie</option><option>Clairance de creatininurie</option><option>Creatinine</option><option>DFG</option><option>Electrophorese des Proteines Serique</option><option>Gamma</option><option>Ionogramme Urinaire</option><option>Proteinurie</option><option>Proteinurie 24h</option><option>Uree</option></optgroup>"+
"<optgroup label=\"bilan serologie\"><option>ASLO</option><option>Bilharziose</option><option>BW (VDRL-TPHA)</option><option>Chlamydia</option><option>CRP</option><option>Mycoplasme</option><option>Rubeole</option><option>Toxoplasmose</option><option>VIH</option><option>Waaler Rose</option><option>Widal et Felix</option></optgroup>"+
"<optgroup label=\"bilan spermiologique\"><option>Spermocytogramme</option><option>Spermogramme</option></optgroup>"+
"<optgroup label=\"inflammation\"><option>Vitesse de Sedimentation (VS)</option><option>Facteur Rhumatoïde (FR)</option></optgroup>"+
"<optgroup label=\"ionogramme\"><option>Ionogramme simple</option><option>Calcium (Ca2+)</option><option>Magnesium (Mg2+)</option><option>Potassium (k+)</option><option>Protides Totaux</option><option>Reserve Alcalin</option></optgroup>"+
"</select></label><br><br><label>Le Biotechnologiste: <input  name=\"Biotechnologiste\" type=\"text\"autocomplete=\"off\" list=\"btech\"><datalist id=\"btech\">";
var mM7="</datalist></label><br><br><label>Prix des Examens (ou statut): <input  name=\"Prix_des_Examens_ou_statut\" type=\"number\"  step=\"0.01\"></label><br><br>"+
"<label>Date du Prelevement: <input  name=\"Date_du_Prelevement\" type=\"date\">&nbsp;</label><br><br></div>"+
"<div id=\"bk_C\">"+
"<div id=\"bk_CG\">"+
"<h3>inflammation</h3>"+
"<label>VS : 1ère HEURE <input name=\"VS_1ereHEURE\" type=\"number\"  step=\"0.01\"></label><label>2ième HEURE : <input name=\"VS_2iemeHEURE\" type=\"number\"  step=\"0.01\"></label>"+
"<h3>ionogramme</h3>"+
"<div>"+
"<label>Potassium (k+) : <input name=\"Potassium\" type=\"number\"  step=\"0.01\" ></label> "+
"<label>Sodium (Na+) : <input name=\"Sodium\" type=\"number\"  step=\"0.01\" ></label>"+
"<label>Chlore (Cl-) : <input name=\"Chlore\" type=\"number\"  step=\"0.01\" /></label>"+
"</div><br>"+
"<label>Magnésium (Mg2+) : <input name=\"Magnesium\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Calcium (Ca2+) : <input name=\"Calcium\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Reserve Alcalin : <input name=\"Reserve_Alcalin\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Protides Totaux : <input name=\"Protides_Totaux\" type=\"number\"  step=\"0.01\"></label>"+
"<h3>bilan lipidique</h3>"+
"<label>Triglycérides: <input name=\"Triglycerides\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Cholestérol Total : <input name=\"Cholesterol_Total\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Cholestérol HDL : <input name=\"Cholesterol_HDL\" type=\"number\"  step=\"0.01\"> </label><br>"+
"<label>Cholestérol LDL : <input name=\"Cholesterol_LDL\" type=\"number\"  step=\"0.01\"> </label><br>"+
"<label>Lipide Totale : <input name=\"Lipide_Totale\" type=\"number\"  step=\"0.01\"> </label><br>"+
"<h3>bilan hepatique et bilaire</h3>"+
"<label>Transaminasemie GOT : <input name=\"TGO\" type=\"number\"  step=\"0.01\"></label><label>Transaminases TGP : <input name=\"TGP\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Bilirubine Totale : <input name=\"Bilirubine_Totale\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Bilirubine conjuguee : <input name=\"Bilirubine_Conjuguee\" type=\"number\"  step=\"0.01\"> </label><br>"+
"<label>AgHBS : <select name=\"AgHBS\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>"+
"<label>ACHBS : <select name=\"ACHBS\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>"+
"<label>AgHBe : <select name=\"AgHBe\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>"+
"<label>ACHBe : <select name=\"ACHBe\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select> </label><br>"+
"<label>ACHBC : <select name=\"ACHBC\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>"+
"<label>ACHVC : <select name=\"ACHVC\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>"+
"<label>HAV (IgM) : <select name=\"HAV_IgM\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>"+
"<label>Gamma-GT <input name=\"Gamma_GT\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Phosphatase Alcaline <input name=\"Phosphatase_Alcaline\" type=\"number\"  step=\"0.01\"></label>"+
"<h3>bilan cytobacteriologie</h3>"+
"			<a href=\"ECBU.html\">ECBU: </a><br> "+
"			<a href=\"coproculture.html\">Coproculture:  </a><br> "+ 
"			<a href=\"pv.html\">PV :  </a><br>  "+
"			<a href=\"pu.html\">PU :</a><br>"+
"			<a href=\"spermoculture.html\">Spermoculture : </a><br> "+
"			<a href=\"lcr_exudat.html\">LCR/Exudat :</a> "+

"<h3>bilan spermiologique</h3>"+
"			<a href=\"spermogramme.html\">Spermogramme:</a><br>"+
"			<a href=\"spermocytogramme.html\">Spermocytogramme:</a>"+
"</div><div id=\"bk_CC\">"+
"<h3>bilan renal</h3>"+
"<label>Créatinine : <input name=\"Creatinine\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Uree:<input name=\"Uree\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Albuminurie:<input name=\"Albuminurie\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Protéinurie:<input name=\"Proteinurie\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Protéinurie 24h:<input name=\"Proteinurie_24h\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>DFG:<input name=\"DFG\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Ionogramme Urinaire : <input name=\"Ionogramme_Urinaire\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Clairance de Créatininurie : <input name=\"Clairance_de_Creatininurie\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Electrophorèse des Proteines Serique : <select name=\"Electrophorese_des_Proteines_Serique\"><option></option><option>NORMALE</option><option>ANORMALE</option></select></label><br>"+	
"<label>Albumine : <input name=\"Albumine_EP\"  type=\"number\"  step=\"0.01\"></label>"+
"<label>Alpha I : <input name=\"AlphaI\"  type=\"number\"  step=\"0.01\"></label>"+
"<label>Alpha II : <input name=\"AlphaII\"  type=\"number\"  step=\"0.01\"></label>"+
"<label>Beta : <input name=\"Beta\"  type=\"number\"  step=\"0.01\"></label>"+
"<label>Gamma : <input name=\"Gamma\"  type=\"number\"  step=\"0.01\"></label>"+
"<h3>bilan glycemique</h3>"+
"<label>Glycémie à Jeûn : <input name=\"Glycemie_à_Jeûn\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Glycémie Post Prandiale : <input name=\"Glycemie_Post_Prandiale\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>HBA1C : <input name=\"HBA1C\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Glycosurie : <input name=\"Glycosurie\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Glycorachie : <input name=\"Glycorachie\" type=\"number\"  step=\"0.01\"></label>"+
"<h3>bilan Immuno-hematologique</h3>"+
"NFS (Numeration  Sanguine):"+
"<label>Leucocytes : <input name=\"nfs_Leucocytes\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Hématies : <input name=\"nfs_Hematies\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Hemoglobine : <input name=\"nfs_Hemoglobine\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Hematocrite : <input name=\"nfs_Hematocrite\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>VGM : <input name=\"nfs_VGM\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>TCMH : <input name=\"nfs_TCMH\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>CCMH : <input name=\"nfs_CCMH\"  type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Plaquette : <input name=\"nfs_Plaquette\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>PN : <input name=\"nfs_PN\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>PE : <input name=\"nfs_PE\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>PB : <input name=\"nfs_PB\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>LY : <input name=\"nfs_LY\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Mn : <input name=\"nfs_Mn\" type=\"number\"  step=\"0.01\"></label><br><br>"+
"<label>Groupe Sanguin : <select name=\"Groupe_Sanguin\"><option></option><option>O</option><option>A</option><option>B</option><option>AB</option></select></label>"+ 
"<label>Rhésus : <select name=\"Rhesus\"><option></option><option>(+) POSITIVE</option><option>(-) NEGATIVE</option></select></label>"+
"<label>TP : <input name=\"TP\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>TCK : <input name=\"TCK\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Fibrinémie : <input name=\"Fibrinemie\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Taux de Prothrombine : <input name=\"Taux_de_Prothrombine\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>INR : <input name=\"INR\" type=\"number\"  step=\"0.01\"></label><br><br>"+
"<label>Electrophorèse de hemoglobine : <select name=\"Electrophorese_de_hemoglobine\"><option></option><option>A1A2</option><option>AC</option><option>SC</option><option>SS</option><option>AF</option></select></label><br>"+
"<label>A1 : <input name=\"ElectroHB_A1\" type=\"number\"  step=\"0.01\"></label>"+
"<label>A2 : <input name=\"ElectroHB_A2\" type=\"number\"  step=\"0.01\"></label>"+
"<label>S : <input name=\"ElectroHB_S\" type=\"number\"  step=\"0.01\"></label>"+
"<label>C : <input name=\"ElectroHB_C\" type=\"number\"  step=\"0.01\"></label>"+
"<label>F : <input name=\"ElectroHB_F\" type=\"number\"  step=\"0.01\"></label>"+
"<h3>bilan serologie</h3>"+
"<label>Widal et Félix : <select name=\"Widal_et_Felix\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><br>"+
"<label>TO : <input name=\"TO\" type=\"number\"  step=\"0.01\"></label>"+
"<label>TH : <input name=\"TH\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>AO : <input name=\"AO\" type=\"number\"  step=\"0.01\"></label>"+
"<label>AH : <input name=\"AH\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>BO : <input name=\"BO\" type=\"number\"  step=\"0.01\"></label>"+ 
"<label>BH : <input name=\"BH\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>CO : <input name=\"CO\" type=\"number\"  step=\"0.01\"></label>"+
"<label>CH :	<input name=\"CH\" type=\"number\"  step=\"0.01\"></label><br><br>"+
"<label>Toxoplasmose : <select name=\"Toxoplasmose\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> IgM : <input name=\"toxo_igm\" type=\"number\"  step=\"0.01\"></label><label> IgG :<input name=\"toxo_igg\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Rubéole : <select name=\"Rubeole\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> IgM : <input name=\"rub_igm\" type=\"number\"  step=\"0.01\"></label><label> IgG :<input name=\"rub_igg\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Chlamydia : <select name=\"Chlamydia\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> IgM : <input name=\"chld_igm\" type=\"number\"  step=\"0.01\"></label><label> IgG : <input name=\"chld_igg\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Mycoplasme : <select name=\"Mycoplasme\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> IgM : <input name=\"mycp_igm\" type=\"number\"  step=\"0.01\"></label><label> IgG : <input name=\"mycp_igg\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Bilharziose : <select name=\"Bilharziose\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> IgM : <input name=\"bilh_igm\" type=\"number\"  step=\"0.01\"></label><label> IgG : <input name=\"bilh_igg\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>VDRL : <select name=\"BW\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> TPHA : <input name=\"tpha\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Waaler Rose : <select name=\"Waaler_Rose\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> Titre : <input name=\"wlr_t\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>ASLO : <select name=\"ASLO\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> Titre : <input name=\"aslo_t\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>VIH : <select name=\"VIH\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> Typage : <select name=\"vih_tp\"><option></option><option>VIH1</option><option>VIH2</option><option>VIH1 et VIH 2</option></select></label><br>"+
"<label>CRP: <select name=\"CRP\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select></label><label> Titre: <input name=\"CRP_t\" type=\"number\"  step=\"0.01\"></label><br>"+
"</div><div id=\"bk_CD\">"+
"<h3>bilan hormonal</h3>"+
"<label>T3 libre: <input name=\"T3_libre\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>T4 libre : <input name=\"T4_libre\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>TSH : <input name=\"TSH\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>PSA : <input name=\"PSA\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Estradiol : <input name=\"Estradiol\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Progestérone : <input name=\"Progesterone\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Prolactinémie : <input name=\"Prolactinemie\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>LH-RH : <input name=\"LH_RH\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Cortisol : <input name=\"Cortisol\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>FSH : <input name=\"FSH\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Testosterone : <input name=\"Testosterone\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>TSH_us : <input name=\"TSH_us\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Beta HCG (sang) : <input name=\"Beta_HCG_sang\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Beta HCG (urine) : <input name=\"Beta_HCG_urine\" type=\"number\"  step=\"0.01\"></label>"+
"<h3>bilan enzymatique musculaires</h3>"+
"<label>LDH : <input name=\"LDH\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>CPK : <input name=\"CPK\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>CPK-mb : <input name=\"CPK_mb\" type=\"number\"  step=\"0.01\"></label>"+
"<h3>bilan divers</h3>"+
"<label>Myoglobine: <input name=\"Myoglobine\" type=\"number\"  step=\"0.01\"></label><br>"+
"<label>Troponime: <input name=\"Troponime\" type=\"number\"  step=\"0.01\"></label><br><br>"+
"<input id=\"vdg\"  type=\"submit\" value=\"Envoyer [Vider]\">"+
"<input id=\"Enr_av\" type=\"button\" value=\"<\">"+
"<input  id=\"Enr_dv\" type=\"button\" value=\"/\" >"+
"<input id=\"edit_exam\" type=\"button\" value=\"Redaction d'examens\">"+
"<input type=\"button\" value=\"Nouveau Patient\"><input type=\"button\" value=\"Bilan Operationnel\"><input  type=\"button\" value=\"Utilisez une Calculatrice?\">"+
"<br></div></div></form><script src=\"Manip.js\"></script><script type=\"module\"> import {exa_GrpM} from \"./scodeM.js\";"+
"var lgn_chp=document.getElementsByTagName(\"label\");"+
"let CvED=exa_GrpM.Examens_Demandes.split(\",\");"+
"for (var i= 0; i < lgn_chp.length; i++)"+
"{if(lgn_chp[i].firstElementChild.nodeName===\"INPUT\"){lgn_chp[i].firstElementChild.value= exa_GrpM[lgn_chp[i].firstElementChild.name]}"+
"else if(lgn_chp[i].firstElementChild.multiple){"+
"for (var j= 0; j < lgn_chp[i].firstElementChild.children.length; j++)"+
"{let cph=lgn_chp[i].firstElementChild.children[j].textContent;"+
"for (var l= 0; l < lgn_chp[i].firstElementChild.children[j].children.length; l++){for (var m= 0; m < CvED.length; m++){"+
"if(lgn_chp[i].firstElementChild.children[j].children[l].textContent===CvED[m]){let NvS=document.createElement(\"option\");NvS.selected=\"selected\";NvS.textContent=CvED[m];"+
"lgn_chp[i].firstElementChild.children[j].children[l].replaceWith(NvS);}}}}}"+
"else {lgn_chp[i].firstElementChild.firstElementChild.textContent= exa_GrpM[lgn_chp[i].firstElementChild.name]}}"+
"</script></body></html>";

var mtM= mM1+mM2+txt_sdNM +mM3+txt_sdPM+mM4+txt_sdDCM+mM5+txt_sdPRSM+mM6+txt_sdBtM+mM7;
fs.writeFile("Modif.html",mtM,{encoding:"utf8", flag:"w"},(err)=>{var info=(err)?console.log(err):console.log("Mdf_pg_M pret! ");});

var sucM1="<html><head>"+
"<meta content=\"fr-ci\" http-equiv=\"Content-Language\">"+
"<meta content=\"text/html; charset=utf-8\" http-equiv=\"Content-Type\">"+
"<link href=\"MFormat.css\" rel=\"stylesheet\" type=\"text/css\">"+
"<title>sans titre 1</title></head><body><h1>Vous venez d'enregistrez:</h1><table>"+
"<tr><td>Pour BULLETIN DU PATIENT</td><td>Et&nbsp; EXAMENS EFFECTUES :</td></tr><tr><td>";
var sucM2="</td><td>";
var sucM3="</td></tr></table><br><br><br><br><p>"+
"<input id=\"mdf\"  type=\"button\"  value=\"Modifier\"><input id=\"enr_sv\"  type=\"button\" value=\"Passez à letape suivante\"><br></p><br>"+
"<script>document.getElementById(\"mdf\").addEventListener('click',()=>{window.location.href=\"Modif.html\";});"+
"document.getElementById(\"enr_sv\").addEventListener('click',()=>{window.location.href=\"/\";});"+
"  </script></body></html>";

var aff_GleM= sucM1+info_persM+sucM2+info_exaM+sucM3;

fs.writeFile("pg_succes.html",aff_GleM,{encoding:"utf8", flag:"w"},(err)=>{var info=(err)?console.log(err):console.log("OK succesMdf");});

})();


fs.readFile(pg_adr,"utf8",(err, info)=>{
var c_info="";
c_info= (err)?console.log(err):rep.end(info);})
}
)

// fin de la Condition SiVrai

:

// debut de la Condition SiFaux
pg_web=( req.url=== '/')?'./specimenMalad.html':'.' + req.url;
const xson= String(path.extname(pg_web)).toLowerCase();
  const c_typ = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  };
  const Cnu = c_typ[xson] || 'application/octet-stream';

  // Lire le fichier
  fs.readFile(pg_web, (err, info) => {
var c_info="";
c_info=(err)?console.log(err):(rep.setHeader('Content-Type',Cnu),rep.end(info, 'utf-8'));

  });

// fin de la Condition SiFaux

});
// fermeture du corps du serveur

//finalisation du serveur et du signal du OK
serveur.listen(3004,"localhost",
(async ()=> {await cnx_bd.connect();
console.log("Emission serveur activee");
console.log("Base de donnee connectee");
}));
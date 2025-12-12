"<h1 style=\"text-align:center;color:#275280\">EXAMENS BIOLOGIQUES</h1><hr><h3>inflammation</h3>\n"+
"<p><label for=\"VS1ereHEURE\"><span style=\"background-color: #00F3FF\">VS</span>/1ère HEURE:</label><input name=\"VS1ereHEURE\" type=\"number\"  step=\"0.01\" id=\"VS1ereHEURE\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 7\"> <label for=\"VS2iemeHEURE\" >2ième HEURE:</label><input name=\"VS2iemeHEURE\" type=\"number\"  step=\"0.01\" id=\"VS2iemeHEURE\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 20\"></p>\n"+
"<h3>ionogramme</h3><p>\n"+
"<label for=\"Potassium\">Potassium(k+):</label><input name=\"Potassium\" type=\"number\"  step=\"0.01\" id=\"Potassium\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"3.6-5.5\">\n"+
"<label for=\"Sodium\">Sodium(Na+):</label><input name=\"Sodium\" type=\"number\"  step=\"0.01\" id=\"Sodium\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"135-155\">\n"+
"<label for=\"Chlore\">Chlore(Cl-):</label><input name=\"Chlore\" type=\"number\"  step=\"0.01\" id=\"Chlore\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"95-105\">\n"+
"</p><div >\n"+
"<label for=\"Magnesium\">Magnésium(Mg2+):</label><input name=\"Magnesium\" type=\"number\"  step=\"0.01\" id=\"Magnesium\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"19-25\"><br>\n"+
"<label for=\"Calcium\">Calcium(Ca2+):</label><input name=\"Calcium\" type=\"number\"  step=\"0.01\" id=\"Calcium\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"86-103\"><br>\n"+
"<label for=\"ReserveAlcalin\">Reserve Alcalin:</label><input name=\"ReserveAlcalin\" type=\"number\"  step=\"0.01\" id=\"ReserveAlcalin\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"22-26\"><br>\n"+
"<label for=\"ProtidesTotaux\">Protides Totaux:</label><input name=\"ProtidesTotaux\" type=\"number\"  step=\"0.01\" id=\"ProtidesTotaux\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"65-80\">\n"+
"</div><h3 id=\"billip\">bilan lipidique</h3><div>\n"+
"<label for=\"Triglycerides\">Triglycérides:</label><input name=\"Triglycerides\" type=\"number\"  step=\"0.01\" id=\"Triglycerides\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"0.65-1.9\"><br>\n"+
"<label for=\"CholesterolTotal\">Cholestérol Total:</label><input name=\"CholesterolTotal\" type=\"number\"  step=\"0.01\" id=\"CholesterolTotal\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"1.5-2.5\"><br>\n"+
"<label for=\"CholesterolHDL\">Cholestérol HDL:</label><input name=\"CholesterolHDL\" type=\"number\"  step=\"0.01\" id=\"CholesterolHDL\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"0.2-0.4\"> <br>\n"+
"<label for=\"CholesterolLDL\">Cholestérol LDL:</label><input name=\"CholesterolLDL\" type=\"number\"  step=\"0.01\" id=\"CholesterolLDL\" onblur=\"fChpLibC(this)\" onfocus=\"fChpSelC(this)\" readonly=\"readonly\" style=\"border:medium blue solid\" placeholder=\"< 2.5\" ><span style=\"color:blue\"> *Champ Calculé</span><span style=\"color:purple\" title=\"LDL = Cholestérol total - HDL - (Triglycérides / 5)\"> (Formule [ en survol ])</span> <br>\n"+
"<label for=\"LipideTotale\">Lipide Totale:</label><input name=\"LipideTotale\" type=\"number\"  step=\"0.01\" id=\"LipideTotale\" onblur=\"fChpLibC(this)\" onfocus=\"fChpSelC(this)\" placeholder=\"6-7.5\" style=\"border:medium blue solid\" readonly=\"readonly\"><span style=\"color:blue\"> *Champ Calculé</span><span style=\"color:purple\" title=\"Lipides totaux (en g/L) = (Cholestérol total) x 2,56 + (Triglycérides) x 0,87\"> (Formule [ en survol ])</span> <br>\n"+
"</div><h3 id=\"bilhepbil\">bilan hepatique et bilaire</h3><p>\n"+
"<label for=\"TGO\" ><span style=\"background-color: #00F3FF\">Transaminases</span>/TGO:</label><input name=\"TGO\" type=\"number\"  step=\"0.01\" id=\"TGO\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 37\"> <label for=\"TGP\">TGP:</label><input name=\"TGP\" type=\"number\"  step=\"0.01\" id=\"TGP\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 40\"><br>\n"+
"</p><p>\n"+
"<label for=\"BilirubineTotale\" >Bilirubine Tot:</label><input name=\"BilirubineTotale\" type=\"number\"  step=\"0.01\" id=\"BilirubineTotale\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 12\"> <label for=\"BilirubineConjuguee\">Bilirubine Conj:</label><input name=\"BilirubineConjuguee\" type=\"number\"  step=\"0.01\" id=\"BilirubineConjuguee\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 2.5\"><br>\n"+
"</p><div>\n"+
"<label for=\"AgHBS\">AgHBS:</label><select name=\"AgHBS\" id=\"AgHBS\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><br>\n"+
"<label for=\"ACHBS\">ACHBS:</label><select name=\"ACHBS\" id=\"ACHBS\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><br>\n"+
"<label for=\"AgHBe\">AgHBe:</label><select name=\"AgHBe\" id=\"AgHBe\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><br>\n"+
"<label for=\"ACHBe\">ACHBe:</label><select name=\"ACHBe\" id=\"ACHBe\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select> <br>\n"+
"<label for=\"ACHBC\">ACHBC:</label><select name=\"ACHBC\" id=\"ACHBC\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><br>\n"+
"<label for=\"ACHVC\">ACHVC:</label><select name=\"ACHVC\" id=\"ACHVC\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><br>\n"+
"<label for=\"HAVIgM\">HAV(IgM):</label><select name=\"HAVIgM\" id=\"HAVIgM\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><br>\n"+
"<label for=\"GammaGT\">Gamma-GT:</label><input name=\"GammaGT\" type=\"number\"  step=\"0.01\" id=\"GammaGT\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 45\"><br>\n"+
"<label for=\"PhosphataseAlcaline\">Phosphatase Alc:</label><input name=\"PhosphataseAlcaline\" type=\"number\"  step=\"0.01\" id=\"PhosphataseAlcaline\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"30-130\">\n"+
"</div><h3 id=\"bilren\">bilan renal</h3><div>\n"+
"<label for=\"Creatinine\">Créatinine:</label><input name=\"Creatinine\" type=\"number\"  step=\"0.01\" id=\"Creatinine\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"6-13\"><br>\n"+
"<label for=\"Uree\">Uree:</label><input name=\"Uree\" type=\"number\"  step=\"0.01\" id=\"Uree\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"0.15-0.55\"><br>\n"+
"<label for=\"AcideUrique\">Acide Urique:</label><input name=\"AcideUrique\" type=\"number\"  step=\"0.01\" id=\"AcideUrique\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"30-70\"><br>\n"+
"<label for=\"Albumine\">Albumine:</label><input name=\"Albumine\" type=\"number\"  step=\"0.01\" id=\"Albumine\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"35-52\"><br>\n"+
"<label for=\"Albuminurie\">Albuminurie:</label><input name=\"Albuminurie\" type=\"number\"  step=\"0.01\" id=\"Albuminurie\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 0.15\"><br>\n"+
"<label for=\"Proteinurie\">Protéinurie:</label><input name=\"Proteinurie\" type=\"number\"  step=\"0.01\" id=\"Proteinurie\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 0.30\"><br>\n"+
"<label for=\"Proteinurie24h\">Protéinurie 24h:</label><input name=\"Proteinurie24h\" type=\"number\"  step=\"0.01\" id=\"Proteinurie24h\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 0.15\"><br>\n"+
"<label for=\"DFG\">DFG:(Débit Filtration Glomérulaire)</label><input name=\"DFG\" type=\"number\"  step=\"0.01\" id=\"DFG\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"60-89\"><br>\n"+
"<label for=\"ClairanceCreatininurie\">Clairance Créat:</label><input name=\"ClairanceCreatininurie\" type=\"number\"  step=\"0.01\" id=\"ClairanceCreatininurie\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"80-120\"><br>\n"+
"<label for=\"ElectrophoreseProteinesSerique\" >Electroph Prot Sq:</label><select name=\"ElectrophoreseProteinesSerique\" id=\"ElectrophoreseProteinesSerique\" style=\"margin-top:20px\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>NORMALE</option><option>ANORMALE</option></select><br>\n"+
"<label for=\"AlbumineEP\">Albumine:</label><input name=\"AlbumineEP\"  type=\"number\"  step=\"0.01\" id=\"AlbumineEP\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"35-50\">\n"+
"<label for=\"AlphaI\">AlphaI:</label><input name=\"AlphaI\"  type=\"number\"  step=\"0.01\" id=\"AlphaI\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"1-5\"><br>\n"+
"<label for=\"AlphaII\">AlphaII:</label><input name=\"AlphaII\"  type=\"number\"  step=\"0.01\" id=\"AlphaII\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"4-8\">\n"+
"<label for=\"Beta\">Beta:</label><input name=\"Beta\"  type=\"number\"  step=\"0.01\" id=\"Beta\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"5-12\"><br>\n"+
"<label for=\"Gamma\">Gamma:</label><input name=\"Gamma\"  type=\"number\"  step=\"0.01\" id=\"Gamma\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"8-16\">\n"+
"</div><h3>ionogramme Urinaire</h3><p>\n"+
"<label for=\"PotassiumU\" >Potassium(k+):</label><input name=\"PotassiumU\" type=\"number\"  step=\"0.01\" id=\"PotassiumU\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"50-100\">\n"+
"<label for=\"SodiumU\">Sodium(Na+):</label><input name=\"SodiumU\" type=\"number\"  step=\"0.01\" id=\"SodiumU\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"100-300\">\n"+
"<label for=\"ChloreU\">Chlore(Cl-):</label><input name=\"ChloreU\" type=\"number\"  step=\"0.01\" id=\"ChloreU\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"80-270\">\n"+
"</p><h3>bilan glycemique</h3><div>\n"+
"<label for=\"GlycemieJeun\">Glycémie:</label><input name=\"GlycemieJeun\" type=\"number\"  step=\"0.01\" id=\"GlycemieJeun\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"0.60-1.06\"><br>\n"+
"<label for=\"GlycemiePostPrandiale\">Glycémie PP:</label><input name=\"GlycemiePostPrandiale\" type=\"number\"  step=\"0.01\" id=\"GlycemiePostPrandiale\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 1.40\"><br>\n"+
"<label for=\"HBA1C\">HBA1C:</label><input name=\"HBA1C\" type=\"number\"  step=\"0.01\" id=\"HBA1C\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"4-6\"><br>\n"+
"<label for=\"Glycosurie\">Glycosurie:</label><input name=\"Glycosurie\" type=\"number\"  step=\"0.01\" id=\"Glycosurie\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 50\"><br>\n"+
"<label for=\"Glycorachie\">Glycorachie:</label><input name=\"Glycorachie\" type=\"number\"  step=\"0.01\" id=\"Glycorachie\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 0.4\">\n"+
"</div><h3 id=\"bilhem\">bilan Immuno-hematologique</h3> NFS (Numeration  Sanguine):<br><div>\n"+
"<label for=\"nfsLeucocytes\">Leucocytes:</label><input name=\"nfsLeucocytes\" type=\"number\"  step=\"0.01\" id=\"nfsLeucocytes\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"4-10\"><br>\n"+
"<label for=\"nfsHematies\">Hématies:</label><input name=\"nfsHematies\" type=\"number\"  step=\"0.01\" id=\"nfsHematies\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"4-6\"><br>\n"+
"<label for=\"nfsHemoglobine\">Hemoglobine:</label><input name=\"nfsHemoglobine\" type=\"number\"  step=\"0.01\" id=\"nfsHemoglobine\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"12-18\"><br>\n"+
"<label for=\"nfsHematocrite\">Hematocrite:</label><input name=\"nfsHematocrite\" type=\"number\"  step=\"0.01\" id=\"nfsHematocrite\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"38-50\"><br>\n"+
"<label for=\"nfsVGM\">VGM:</label><input name=\"nfsVGM\" type=\"number\"  step=\"0.01\" id=\"nfsVGM\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"80-100\"><br>\n"+
"<label for=\"nfsTCMH\">TCMH:</label><input name=\"nfsTCMH\" type=\"number\"  step=\"0.01\" id=\"nfsTCMH\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"28-32\"><br>\n"+
"<label for=\"nfsCCMH\">CCMH:</label><input name=\"nfsCCMH\" type=\"number\"  step=\"0.01\" id=\"nfsCCMH\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"30-34\"><br>\n"+
"<label for=\"nfsPlaquette\">Plaquette:</label><input name=\"nfsPlaquette\" type=\"number\"  step=\"0.01\" id=\"nfsPlaquette\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"150-500\"><br>\n"+
"<label for=\"nfsPN\">Polyn.Neutrophile:</label><input name=\"nfsPN\" type=\"number\"  step=\"0.01\" id=\"nfsPN\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"45-70\"><br>\n"+
"<label for=\"nfsPE\">Polyn.Eosinophile:</label><input name=\"nfsPE\" type=\"number\"  step=\"0.01\" id=\"nfsPE\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"1-6\"><br>\n"+
"<label for=\"nfsPB\">Polyn.Basophile:</label><input name=\"nfsPB\" type=\"number\"  step=\"0.01\" id=\"nfsPB\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 1\"><br>\n"+
"<label for=\"nfsLY\">Lymphocyte:</label><input name=\"nfsLY\" type=\"number\"  step=\"0.01\" id=\"nfsLY\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"20-40\"><br>\n"+
"<label for=\"nfsMn\">Monocyte:</label><input name=\"nfsMn\" type=\"number\"  step=\"0.01\" id=\"nfsMn\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"3-7\"><br><br>\n"+
"</div><p>\n"+
"<label for=\"GroupeSanguin\" >Groupe Sanguin:</label><select name=\"GroupeSanguin\" id=\"GroupeSanguin\" style=\"width:64px;margin-bottom:20px;text-align:center\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>O</option><option>A</option><option>B</option><option>AB</option></select>\n"+
"<label for=\"Rhesus\">Rhésus:</label><select name=\"Rhesus\" id=\"Rhesus\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>(+)POSITIVE</option><option>(-)NEGATIVE</option></select><br>\n"+
"</p><div>\n"+
"<label for=\"TP\">TP(Taux Prothrombine):</label><input name=\"TP\" type=\"number\"  step=\"0.01\" id=\"TP\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"70-100\"><br>\n"+
"<label for=\"TCK\">TCK:</label><input name=\"TCK\" type=\"number\"  step=\"0.01\" id=\"TCK\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"20-33\"><br>\n"+
"<label for=\"Fibrinemie\">Fibrinémie:</label><input name=\"Fibrinemie\" type=\"number\"  step=\"0.01\" id=\"Fibrinemie\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"2-4\"><br>\n"+
"<label for=\"INR\">INR(InternationalNormalizedRatio):</label><input name=\"INR\" type=\"number\"  step=\"0.01\" id=\"INR\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 1\"><br><br>\n"+
"</div><div>\n"+
"<label for=\"Electrophoresehemoglobine\" >Electrophorèse Hb:</label><select name=\"Electrophoresehemoglobine\" id=\"Electrophoresehemoglobine\" style=\"width:64px;text-align:center\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>A1A2</option><option>AC</option><option>SC</option><option>SS</option><option>AF</option></select><br>\n"+
"<label for=\"ElectroHBA1\">A1:</label><input name=\"ElectroHBA1\" type=\"number\"  step=\"0.01\" id=\"ElectroHBA1\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\">\n"+
"<label for=\"ElectroHBA2\">A2:</label><input name=\"ElectroHBA2\" type=\"number\"  step=\"0.01\" id=\"ElectroHBA2\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br>\n"+
"<label for=\"ElectroHBS\">S:</label><input name=\"ElectroHBS\" type=\"number\"  step=\"0.01\" id=\"ElectroHBS\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\">\n"+
"<label for=\"ElectroHBC\">C:</label><input name=\"ElectroHBC\" type=\"number\"  step=\"0.01\" id=\"ElectroHBC\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br>\n"+
"<label for=\"ElectroHBF\">F:</label><input name=\"ElectroHBF\" type=\"number\"  step=\"0.01\" id=\"ElectroHBF\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\">\n"+
"</div><h3 id=\"bilser\">bilan serologie</h3><div>\n"+
"<label for=\"WidalFelix\" >Widal et Félix:</label><select name=\"WidalFelix\" id=\"WidalFelix\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select>\n"+
"<label for=\"TO\">TO:</label><input name=\"TO\" type=\"number\"  step=\"0.01\" id=\"TO\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\">\n"+
"<label for=\"TH\">TH:</label><input name=\"TH\" type=\"number\"  step=\"0.01\" id=\"TH\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br>\n"+
"<label for=\"AO\">AO:</label><input name=\"AO\" type=\"number\"  step=\"0.01\" id=\"AO\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\">\n"+
"<label for=\"AH\">AH:</label><input name=\"AH\" type=\"number\"  step=\"0.01\" id=\"AH\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br>\n"+
"<label for=\"BO\">BO:</label><input name=\"BO\" type=\"number\"  step=\"0.01\" id=\"BO\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\">\n"+
"<label for=\"BH\">BH:</label><input name=\"BH\" type=\"number\"  step=\"0.01\" id=\"BH\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br>\n"+
"<label for=\"CO\">CO:</label><input name=\"CO\" type=\"number\"  step=\"0.01\" id=\"CO\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\">\n"+
"<label for=\"CH\">CH:</label><input name=\"CH\" type=\"number\"  step=\"0.01\" id=\"CH\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br><br>\n"+
"</div><div>\n"+
"<label for=\"Toxoplasmose\">Toxoplasmose:</label><select name=\"Toxoplasmose\" id=\"Toxoplasmose\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><label for=\"toxoIgm\">IgM:</label><input name=\"toxoIgm\" type=\"number\"  step=\"0.01\" id=\"toxoIgm\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><label for=\"toxoIgg\">IgG:</label><input name=\"toxoIgg\" type=\"number\"  step=\"0.01\" id=\"toxoIgg\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br>\n"+
"<label for=\"Rubeole\">Rubéole:</label><select name=\"Rubeole\" id=\"Rubeole\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><label for=\"rubIgm\">IgM:</label><input name=\"rubIgm\" type=\"number\"  step=\"0.01\" id=\"rubIgm\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><label for=\"rubIgg\">IgG:</label><input name=\"rubIgg\" type=\"number\"  step=\"0.01\" id=\"rubIgg\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br>\n"+
"<label for=\"Chlamydia\">Chlamydia:</label><select name=\"Chlamydia\" id=\"Chlamydia\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><label for=\"chldIgm\">IgM:</label><input name=\"chldIgm\" type=\"number\"  step=\"0.01\" id=\"chldIgm\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><label for=\"chldIgg\">IgG:</label><input name=\"chldIgg\" type=\"number\"  step=\"0.01\" id=\"chldIgg\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br>\n"+
"<label for=\"Mycoplasme\">Mycoplasme:</label><select name=\"Mycoplasme\" id=\"Mycoplasme\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><label for=\"mycpIgm\">IgM:</label><input name=\"mycpIgm\" type=\"number\"  step=\"0.01\" id=\"mycpIgm\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><label for=\"mycpIgg\">IgG:</label><input name=\"mycpIgg\" type=\"number\"  step=\"0.01\" id=\"mycpIgg\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br>\n"+
"<label for=\"Bilharziose\">Bilharziose:</label><select name=\"Bilharziose\" id=\"Bilharziose\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><label for=\"bilhIgm\">IgM:</label><input name=\"bilhIgm\" type=\"number\"  step=\"0.01\" id=\"bilhIgm\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><label for=\"bilhIgg\">IgG:</label><input name=\"bilhIgg\" type=\"number\"  step=\"0.01\" id=\"bilhIgg\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br>\n"+
"<label for=\"BW\">VDRL:</label><select name=\"BW\" id=\"BW\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><label for=\"tpha\">TPHA:</label><input name=\"tpha\" type=\"number\"  step=\"0.01\" id=\"tpha\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br>\n"+
"<label for=\"WaalerRose\">Waaler Rose:</label><select name=\"WaalerRose\" id=\"WaalerRose\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><label for=\"wlrT\">Titre:</label><input name=\"wlrT\" type=\"number\"  step=\"0.01\" id=\"wlrT\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br>\n"+
"<label for=\"ASLO\">ASLO:</label><select name=\"ASLO\" id=\"ASLO\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><label for=\"asloT\">Titre:</label><input name=\"asloT\" type=\"number\"  step=\"0.01\" id=\"asloT\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br>\n"+
"<label for=\"VIH\">VIH:</label><select name=\"VIH\" id=\"VIH\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><label for=\"vihTp\">Typage:</label><select name=\"vihTp\" id=\"vihTp\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>VIH1</option><option>VIH2</option><option>VIH1 et VIH 2</option></select><br>\n"+
"<label for=\"CRP\">CRP:</label><select name=\"CRP\" id=\"CRP\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><label for=\"crpT\">Titre:</label><input name=\"crpT\" type=\"number\"  step=\"0.01\" id=\"crpT\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br>\n"+
"</div><h3 id=\"bilhor\">bilan hormonal</h3><div>\n"+
"<label for=\"T3libre\">T3 libre:</label><input name=\"T3libre\" type=\"number\"  step=\"0.01\" id=\"T3libre\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"3-8.5\"><br>\n"+
"<label for=\"T4libre\">T4 libre:</label><input name=\"T4libre\" type=\"number\"  step=\"0.01\" id=\"T4libre\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"8.6-25\"><br>\n"+
"<label for=\"TSH\">TSH(ThyréoStimuline Hormone):</label><input name=\"TSH\" type=\"number\"  step=\"0.01\" id=\"TSH\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"0.15-4.9\"><br>\n"+
"<label for=\"PSA\">PSA(Prostate-Specific Antigen):</label><input name=\"PSA\" type=\"number\"  step=\"0.01\" id=\"PSA\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 4\"><br>\n"+
"<label for=\"Estradiol\">Estradiol:</label><input name=\"Estradiol\" type=\"number\"  step=\"0.01\" id=\"Estradiol\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"30-400\"><br>\n"+
"<label for=\"Progesterone\">Progestérone:</label><input name=\"Progesterone\" type=\"number\"  step=\"0.01\" id=\"Progesterone\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\">VN<a onclick=\"window.open('images/ProgesteroneTab.jpg', '_blank','left=650,top=50,width=680px,height=302px')\" style=\"text-decoration:underline;color:dimgray\">(Cliquez ici !)</a><br>\n"+
"<label for=\"Prolactinemie\">Prolactinémie:</label><input name=\"Prolactinemie\" type=\"number\"  step=\"0.01\" id=\"Prolactinemie\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\">VN<a onclick=\"window.open('images/ProlactineTab.jpg', '_blank','left=650,top=50,width=680px,height=208px')\" style=\"text-decoration:underline;color:dimgray\">(Cliquez ici !)</a><br>\n"+
"<label for=\"LhRH\">LH-RH(Lutéinostimuline):</label><input name=\"LhRH\" type=\"number\"  step=\"0.01\" id=\"LhRH\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\">VN<a onclick=\"window.open('images/LhTab.jpg', '_blank','left=650,top=50,width=680px,height=302px')\" style=\"text-decoration:underline;color:dimgray\">(Cliquez ici !)</a><br>\n"+
"<label for=\"Cortisol\">Cortisol:</label><input name=\"Cortisol\" type=\"number\"  step=\"0.01\" id=\"Cortisol\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\">VN<a onclick=\"window.open('images/CortisolTab.jpg', '_blank','left=650,top=50,width=680px,height=208px')\" style=\"text-decoration:underline;color:dimgray\">(Cliquez ici !)</a><br>\n"+
"<label for=\"FSH\">FSH(Hormone FolliculoStimulante):</label><input name=\"FSH\" type=\"number\"  step=\"0.01\" id=\"FSH\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\">VN<a onclick=\"window.open('images/FSHTab.jpg', '_blank','left=650,top=50,width=680px,height=302px')\" style=\"text-decoration:underline;color:dimgray\">(Cliquez ici !)</a><br>\n"+
"<label for=\"Testosterone\">Testosterone:</label><input name=\"Testosterone\" type=\"number\"  step=\"0.01\" id=\"Testosterone\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"300-1000\"><br>\n"+
"<label for=\"TSHus\">TSHus(ThyréoS. H. UltraSensible):</label><input name=\"TSHus\" type=\"number\"  step=\"0.01\" id=\"TSHus\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"0.4-4\"><br>\n"+
"<label for=\"bHCGsang\">Beta HCG(plasma):</label><input name=\"bHCGsang\" type=\"number\"  step=\"0.01\" id=\"bHCGsang\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"> VN<a onclick=\"window.open('images/hcg_biomnis_tableau.avif', '_blank','left=650,top=50,width=337px,height=223px')\" style=\"text-decoration:underline;color:dimgray\">(Cliquez ici !)</a><br>\n"+
"<label for=\"bHCGurine\">Beta HCG(urine):</label><input name=\"bHCGurine\" type=\"number\"  step=\"0.01\" id=\"bHCGurine\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 25\">\n"+
"</div><h3 id=\"enzMus\">bilan enzymatique musculaires</h3><div>\n"+
"<label for=\"LDH\">LDH(Lactate DésHydrogénase):</label><input name=\"LDH\" type=\"number\"  step=\"0.01\" id=\"LDH\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"140-280\"><br>\n"+
"<label for=\"CPK\">CPK(Créatine Phosphokinase):</label><input name=\"CPK\" type=\"number\"  step=\"0.01\" id=\"CPK\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"20-200\"><br>\n"+
"<label for=\"CPKmb\">CK-mb(Créatine Kinase-MB):</label><input name=\"CPKmb\" type=\"number\"  step=\"0.01\" id=\"CPKmb\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"0-5\">\n"+
"</div><h3 id=\"bildiv\">bilan divers</h3><div>\n"+
"<label for=\"Myoglobine\">Myoglobine:</label><input name=\"Myoglobine\" type=\"number\"  step=\"0.01\" id=\"Myoglobine\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"25-72\"><br>\n"+
"<label for=\"Troponime\">Troponime:</label><input name=\"Troponime\" type=\"number\"  step=\"0.01\" id=\"Troponime\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\" placeholder=\"< 0.04\"><br>\n"+
"<label for=\"GoutteEpaisse\">Goutte Epaisse:</label><select name=\"GoutteEpaisse\" id=\"GoutteEpaisse\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><option></option><option>POSITIVE</option><option>NEGATIVE</option></select><label for=\"tGE\">Titre:</label><input name=\"tGE\" type=\"number\"  step=\"0.01\" id=\"tGE\" onblur=\"fChpLib(this)\" onfocus=\"fChpSel(this)\"><br>\n"+
"</div><span style=\"display:inline-block;height:330px;width:200px;\n"+
"border:thick #275280 solid;position:fixed;bottom:0px;right:15px;padding-left:3px\">\n"+
"<span style=\"display:inline-block;height:240px;width:200px;padding-bottom:0px\">\n"+
"<span style=\"display:inline-block;height:20px;width:200px\">\n"+
"<span style=\"display:inline-block;width:200px;font-family:bookman Old Style;font-weight:bold;text-decoration:underline;text-align:center;color:#275280\">EDITER EXAMENS ICI </span><br>\n"+
"<span id=\"Lalphb1\" style=\"font-size:14px;text-align:right;letter-spacing:2px\"><span style=\"text-decoration:underline;font-size:11px;letter-spacing:0px;text-align:left\">Ordre A-Z:</span>\n"+
"<a href=\"#A\">A</a><a href=\"#B\">B</a><a href=\"#C\">C</a><a href=\"#D\">D</a><a href=\"#E\">E</a><a href=\"#F\">F</a><a href=\"#G\">G</a><a href=\"#H\">H</a><a href=\"#I\">I</a><a href=\"#J\">J</a><a href=\"#K\">K</a><a href=\"#L\">L</a><a href=\"#M\">M</a>\n"+
"</span><br><span id=\"Lalphb2\" style=\"font-size:14px;letter-spacing:1.3px;padding-left:55px\">\n"+
"<a href=\"#N\">N</a><a href=\"#O\">O</a><a href=\"#P\">P</a><a href=\"#Q\">Q</a><a href=\"#R\">R</a><a href=\"#S\">S</a><a href=\"#T\">T</a><a href=\"#U\">U</a><a href=\"#V\">V</a><a href=\"#W\">W</a><a href=\"#X\">X</a><a href=\"#Y\">Y</a><a href=\"#Z\">Z</a>\n"+
"</span></span><span id=\"LMenu\" style=\"display:inline-block;\n"+
"height:180px;width:180px;border:thin black solid;\n"+
"overflow-y:auto;text-align:left;padding-left:20px;\n"+
"background-color:aqua;display:grid\">\n"+
"<span id=\"A\" style=\"color:red\">A</span><a href=\"#ACHBC\">ACHBC</a><a href=\"#ACHBe\">ACHBe</a><a href=\"#ACHBS\">ACHBS</a><a href=\"#ACHVC\">ACHVC</a><a href=\"#AcideUrique\">Acide urique</a><a href=\"#AgHBe\">AgHBe</a><a href=\"#AgHBS\">AgHBS</a><a href=\"#Albumine\">Albumine</a><a href=\"#Albuminurie\">Albuminurie</a><a href=\"#ASLO\">ASLO</a><span id=\"B\" style=\"color:red\">B</span><a href=\"#bHCGsang\">Beta HCG(plasma)</a><a href=\"#bHCGurine\">Beta HCG(ur)</a><a href=\"#Bilharziose\">Bilharziose</a><a href=\"#BilirubineConjuguee\">Bilirubine Conj.</a><a href=\"#BilirubineTotale\">Bilirubine Tot.</a><a href=\"#BW\">BW(VDRL-TPHA)</a><span id=\"C\" style=\"color:red\">C</span><a href=\"#Calcium\">Calcium(Ca2+)</a><a href=\"#Chlamydia\">Chlamydia</a><a href=\"#CholesterolHDL\">Cholesterol HDL</a><a href=\"#CholesterolLDL\">Cholesterol LDL</a><a href=\"#CholesterolTotal\">Cholesterol Total</a><a href=\"#ClairanceCreatininurie\">Clairance creatininurie</a><a href=\"Coproculture.html\" target=\"_blank\">Coproculture</a><a href=\"#Cortisol\">Cortisol</a><a href=\"#CPK\">CPK</a><a href=\"#CPKmb\">CK-mb</a><a href=\"#Creatinine\">Creatinine</a><a href=\"#CRP\">CRP</a><span id=\"D\" style=\"color:red\">D</span><a href=\"#DFG\">DFG</a><span id=\"E\" style=\"color:red\">E</span><a href=\"ECBU.html\" target=\"_blank\">ECBU</a><a href=\"#ElectrophoreseProteinesSerique\">Electrophorèse.Prot.Sq</a><a href=\"#Estradiol\">Estradiol</a><span id=\"F\" style=\"color:red\">F</span><a href=\"#WaalerRose\">Fact.Rhumat.(FR)</a><a href=\"#Fibrinemie\">Fibrinemie</a><a href=\"#FSH\">FSH</a>\n"+
"<span id=\"G\" style=\"color:red\">G</span><a href=\"#GammaGT\">GAMMA-GT</a><a href=\"#GlycemieJeun\">Glycemie</a><a href=\"#GlycemiePostPrandiale\">Glycemie Post P.</a><a href=\"#Glycorachie\">Glycorachie</a><a href=\"#Glycosurie\">Glycosurie</a><a href=\"#GoutteEpaisse\">Goutte Epaisse</a><a href=\"#GroupeSanguin\">Groupe Sanguin</a><span id=\"H\" style=\"color:red\">H</span><a href=\"#HAVIgM\">HAV(IgM)</a><a href=\"#HBA1C\">HBA1C</a>\n"+
"<span id=\"I\" style=\"color:red\">I</span><a href=\"#INR\">INR</a><a href=\"#Potassium\">Ionogramme Sg</a><a href=\"#PotassiumU\">Ionogramme Urinaire</a><span id=\"L\" style=\"color:red\">L</span><a href=\"LCR.html\" target=\"_blank\">LCR</a><a href=\"#LDH\">LDH</a><a href=\"#LHRH\">LH-RH</a><a href=\"#LipideTotale\">Lipide totale</a><span id=\"M\" style=\"color:red\">M</span><a href=\"#Magnesium\">Magnesium(Mg2+)</a><a href=\"#Mycoplasme\">Mycoplasme</a><span id=\"N\" style=\"color:red\">N</span><a href=\"#nfsLeucocytes\">NFS</a><span id=\"P\" style=\"color:red\">P</span><a href=\"#PhosphataseAlcaline\">Phosphat.Alc</a><a href=\"#Potassium\">Potassium(k+)</a><a href=\"#Progesterone\">Progesterone</a><a href=\"#Prolactinemie\">Prolactinemie</a><a href=\"#Proteinurie\">Proteinurie</a><a href=\"#Proteinurie24h\">Proteinurie 24h</a><a href=\"#ProtidesTotaux\">Protid.Tot.</a><a href=\"#PSA\">PSA</a><a href=\"PU.html\" target=\"_blank\">PU</a><a href=\"PV.html\" target=\"_blank\">PV</a><span id=\"Q\" style=\"color:red\">Q</span><a href=\"#QBC\">QBC</a><span id=\"R\" style=\"color:red\">R</span><a href=\"#ReserveAlcalin\">Res.Alcal.</a><a href=\"#Rubeole\">Rubeole</a><span id=\"S\" style=\"color:red\">S</span><a href=\"Spermoculture.html\" target=\"_blank\">Spermoculture</a><a href=\"Spermocytogramme.html\" target=\"_blank\">Spermocytogramme</a><a href=\"Spermogramme.html\" target=\"_blank\">Spermogramme</a><span id=\"T\" style=\"color:red\">T</span><a href=\"#T3libre\">T3 libre</a><a href=\"#T4libre\">T4 libre</a><a href=\"#TauxProthrombine\">Taux Prothrombine</a><a href=\"#TCK\">TCK</a><a href=\"#Toxoplasmose\">Toxoplasmose</a><a href=\"#TGO\">Transaminases</a><a href=\"#Triglycerides\">Triglycerides</a><a href=\"#TSH\">TSH</a><span id=\"U\" style=\"color:red\">U</span><a href=\"#Uree\">Urée</a><span id=\"V\" style=\"color:red\">V</span><a href=\"#VIH\">VIH</a><a href=\"#VS1ereHEURE\">Vit.Sediment.(VS)</a><span id=\"W\" style=\"color:red\">W</span><a href=\"#WaalerRose\">Waaler-Rose</a><a href=\"#WidalFelix\" style=\"display:inline-block;height:170px\">Widal et Felix</a>\n"+
"</span></span><span style=\"display:inline-block;height:130px;width:200px\">\n"+
"<input id=\"vld\"  type=\"button\" value=\"Valider [Envoyer]\"><br>\n"+
"<input type=\"button\" value=\"Nouveau Patient\" onclick=\"location.reload()\"><br>\n"+
"<input type=\"button\" value=\"Bilan Operationnel\" ><br>\n"+
"<input  type=\"button\" value=\"Calculatrice\" onclick=\"window.open('scratch/hiper-calc_DfFo-e1.exe', '_blank')\">\n"+
"</span></span><span  style=\"position:fixed;bottom:220px;right:35px;display:grid\">\n"+
"<a style=\"font-size:30px;margin-bottom:0px\">&#x1F3E0;</a>\n"+
"<a href=\"#Entree\" style=\"font-size:12px\" >accueil</a></span></form><script>\n"+
"for (var i= 0; i <document.getElementById(\"Lalphb1\").querySelectorAll(\"a\").length; i++){document.getElementById(\"Lalphb1\").querySelectorAll(\"a\")[i].style.color=\"blue\";}\n"+
"for (var i= 0; i <document.getElementById(\"Lalphb2\").querySelectorAll(\"a\").length; i++){document.getElementById(\"Lalphb2\").querySelectorAll(\"a\")[i].style.color=\"blue\";}\n"+
"for (var i= 0; i <document.getElementById(\"lchx\").querySelectorAll(\"span\").length; i++){document.getElementById(\"lchx\").querySelectorAll(\"span\")[i].style.display=\"inline-block\";}\n"+
"for (var i= 0; i <document.getElementById(\"lchx\").querySelectorAll(\"span\").length; i++){document.getElementById(\"lchx\").querySelectorAll(\"span\")[i].style.width=\"186px\";}\n"+
"for (var i= 0; i <document.getElementById(\"lchx\").querySelectorAll(\"span\").length; i++){document.getElementById(\"lchx\").querySelectorAll(\"span\")[i].style.border=\"thin #275280 solid\";}\n"+
"for (var i=1 ; i<document.getElementById(\"Lalphb1\").children.length ; i++){\n"+
"document.getElementById(\"Lalphb1\").children[i].addEventListener(\"click\",Atpg);}\n"+
"for (var i=0 ; i<document.getElementById(\"Lalphb2\").children.length ; i++){\n"+
"document.getElementById(\"Lalphb2\").children[i].addEventListener(\"click\",Atpg);}function Atpg(e){\n"+
"var Diff= scrollY - (document.getElementById(\"lchx\").offsetTop -1) ;\n"+
"window.location.href=\"#l\"+ e.target.textContent;window.scrollBy(0, Diff);}\n"+
"for (var i= 0; i < 6; i++){document.querySelectorAll(\"label\")[i].style.display=\"inline-block\";}\n"+
"for (var i= 0; i < 6; i++){document.querySelectorAll(\"label\")[i].style.width=\"275px\";}\n"+
"for (var i= 87; i< 90 ; i++){document.querySelectorAll(\"label\")[i].style.display=\"inline-block\";}\n"+
"for (var i= 87; i< 90 ; i++){document.querySelectorAll(\"label\")[i].style.width=\"275px\";}\n"+
"for (var i= 0; i < 5; i++){document.querySelectorAll(\"input\")[i].style.width=\"180px\";}\n"+
"for (var i= 86; i< 88 ; i++){document.querySelectorAll(\"input\")[i].style.width=\"180px\";}\n"+
"for (var i= 0; i < 5; i++){document.querySelectorAll(\"input\")[i].style.fontSize=\"15px\";}\n"+
"for (var i= 88; i< 90 ; i++){document.querySelectorAll(\"input\")[i].style.fontSize=\"15px\"}\n"+
"for (var i= 0; i < 5; i++){document.querySelectorAll(\"input\")[i].style.marginBottom=\"5px\";}\n"+
"for (var i= 0; i < 5; i++){document.querySelectorAll(\"input\")[i].style.textTransform=\"capitalize\";}\n"+
"for (var i= 86; i< 90 ; i++){document.querySelectorAll(\"input\")[i].style.textTransform=\"capitalize\";}\n"+
"for (var i= 86; i< 88 ; i++){document.querySelectorAll(\"input\")[i].style.marginBottom=\"5px\";}\n"+
"for (var i= 89; i<document.querySelectorAll(\"input\").length-4 ; i++){document.querySelectorAll(\"input\")[i].style.width=\"85px\";}\n"+
"for (var i= 89; i<document.querySelectorAll(\"input\").length-4 ; i++){document.querySelectorAll(\"input\")[i].style.textAlign=\"center\";}\n"+
"for (var i= 1; i<document.querySelectorAll(\"select\").length ; i++){document.querySelectorAll(\"select\")[i].style.width=\"93px\";}\n"+
"for (var i= 0; i < 6; i++){document.querySelectorAll(\"label\")[i].style.textAlign=\"right\";}\n"+
"for (var i= 87; i< 92 ; i++){document.querySelectorAll(\"label\")[i].style.textAlign=\"right\";}\n"+
"for (var i= 92; i<document.querySelectorAll(\"label\").length ; i++){document.querySelectorAll(\"label\")[i].style.display=\"inline-block\";}\n"+
"for (var i= 0; i<document.querySelectorAll(\"label\").length ; i++){document.querySelectorAll(\"label\")[i].style.fontFamily=\"courier New\";}\n"+
"for (var i= 0; i<document.querySelectorAll(\"input,select\").length ; i++){document.querySelectorAll(\"input,select\")[i].style.fontFamily=\"courier New\";}\n"+
"for (var i= 0; i<document.querySelectorAll(\"input[type=button]\").length ; i++){document.querySelectorAll(\"input[type=button]\")[i].style.fontFamily=\"bookman Old Style\";}\n"+
"for (var i= 0; i<document.querySelectorAll(\"input[type=button]\").length ; i++){document.querySelectorAll(\"input[type=button]\")[i].style.fontWeight=\"bold\";}\n"+
"for (var i= 0; i<document.querySelectorAll(\"input[type=button]\").length ; i++){document.querySelectorAll(\"input[type=button]\")[i].style.color= \"#275280\";}\n"+
"for (var i= 0; i<document.querySelectorAll(\"input[type=button]\").length ; i++){document.querySelectorAll(\"input[type=button]\")[i].style.fontSize=\"15px\"}\n"+
"for (var i= 0; i<document.querySelectorAll(\"input[type=button]\").length ; i++){document.querySelectorAll(\"input[type=button]\")[i].style.width=\"200px\"}\n"+
"for (var i= 0; i <document.getElementById(\"ExamensDemandes\").querySelectorAll(\"label\").length; i++){document.getElementById(\"ExamensDemandes\").querySelectorAll(\"label\")[i].style.display=\"inline-block\";}\n"+
"for (var i= 0; i <document.getElementById(\"ExamensDemandes\").querySelectorAll(\"label\").length; i++){document.getElementById(\"ExamensDemandes\").querySelectorAll(\"label\")[i].style.width=\"150px\";}\n"+
"for (var i= 0; i <document.getElementById(\"ExamensDemandes\").querySelectorAll(\"label\").length; i++){document.getElementById(\"ExamensDemandes\").querySelectorAll(\"label\")[i].style.textAlign=\"right\";}\n"+
"for (var i= 0; i <document.getElementById(\"ExamensDemandes\").querySelectorAll(\"label\").length; i++){document.getElementById(\"ExamensDemandes\").querySelectorAll(\"label\")[i].style.fontSize=\"12px\";}\n"+
"for (var i= 0; i <document.getElementById(\"ExamensDemandes\").querySelectorAll(\"h6\").length; i++){document.getElementById(\"ExamensDemandes\").querySelectorAll(\"h6\")[i].style.textAlign=\"right\";}\n"+
"for (var i= 0; i <document.getElementById(\"ExamensDemandes\").querySelectorAll(\"h6\").length; i++){document.getElementById(\"ExamensDemandes\").querySelectorAll(\"h6\")[i].style.margin=\"5px 0px\";}\n"+
"for (var i= 0; i <document.getElementById(\"ExamensDemandes\").querySelectorAll(\"h6\").length; i++){document.getElementById(\"ExamensDemandes\").querySelectorAll(\"h6\")[i].style.fontSize=\"12px\";}\n"+
"for (var i= 0; i <document.getElementById(\"ExamensDemandes\").querySelectorAll(\"h6\").length; i++){document.getElementById(\"ExamensDemandes\").querySelectorAll(\"h6\")[i].style.textTransform=\"capitalize\";}\n"+
"for (var i= 0; i <document.getElementById(\"ExamensDemandes\").querySelectorAll(\"h6\").length; i++){document.getElementById(\"ExamensDemandes\").querySelectorAll(\"h6\")[i].style.textDecoration=\"underline\";}\n"+
"for (var i= 0; i <document.getElementById(\"LMenu\").querySelectorAll(\"a\").length; i++){document.getElementById(\"LMenu\").querySelectorAll(\"a\")[i].style.fontSize=\"14px\";}\n"+
"for (var i= 0; i <document.getElementById(\"LMenu\").querySelectorAll(\"h6\").length; i++){document.getElementById(\"LMenu\").querySelectorAll(\"h6\")[i].style.textAlign=\"left\";}\n"+
"for (var i= 0; i <document.getElementById(\"LMenu\").querySelectorAll(\"h6\").length; i++){document.getElementById(\"LMenu\").querySelectorAll(\"h6\")[i].style.margin=\"5px 0px\";}\n"+
"for (var i= 0; i <document.getElementById(\"LMenu\").querySelectorAll(\"h6\").length; i++){document.getElementById(\"LMenu\").querySelectorAll(\"h6\")[i].style.fontSize=\"12px\";}\n"+
"for (var i= 0; i <document.getElementById(\"LMenu\").querySelectorAll(\"h6\").length; i++){document.getElementById(\"LMenu\").querySelectorAll(\"h6\")[i].style.textTransform=\"capitalize\";}\n"+
"for (var i= 0; i <document.getElementById(\"LMenu\").querySelectorAll(\"h6\").length; i++){document.getElementById(\"LMenu\").querySelectorAll(\"h6\")[i].style.textDecoration=\"underline\";}\n"+
"for (var i=1; i < document.querySelectorAll(\"p\").length ; i++){document.querySelectorAll(\"p\")[i].style.textAlign=\"center\";}\n"+
"for (var i=2; i < document.querySelectorAll(\"p\").length ; i++){document.querySelectorAll(\"p\")[i].style.marginBottom=\"25px\";}\n"+
"for (var i= 2; i <document.querySelectorAll(\"div\").length; i++){\n"+
"for(var j=0;j<document.querySelectorAll(\"div\")[i].querySelectorAll(\"label\").length;j++)\n"+
"{document.querySelectorAll(\"div\")[i].querySelectorAll(\"label\")[j].style.display=\"inline-block\";}}\n"+
"for (var i= 2; i <document.querySelectorAll(\"div\").length; i++){\n"+
"for(var j=0;j<document.querySelectorAll(\"div\")[i].querySelectorAll(\"label\").length;j++)\n"+
"{document.querySelectorAll(\"div\")[i].querySelectorAll(\"label\")[j].style.width=\"337.5px\";}}\n"+
"for (var i= 2; i <document.querySelectorAll(\"div\").length; i++){\n"+
"for(var j=0;j<document.querySelectorAll(\"div\")[i].querySelectorAll(\"label\").length;j++)\n"+
"{document.querySelectorAll(\"div\")[i].querySelectorAll(\"label\")[j].style.textAlign=\"right\";}}\n"+
"let myInterval;function fChpSel(cel){\n"+
"cel.previousSibling.style.backgroundColor =\"blue\";\n"+
"cel.style.backgroundColor=\"\";cel.style.color=\"\";\n"+
"cel.style.fontWeight=\"\";\n"+
"myInterval = setInterval(()=>{\n"+
"cel.previousSibling.style.color = \"white\"\n"+
"cel.previousSibling.style.backgroundColor = \n"+
"cel.previousSibling.style.backgroundColor == \"blue\" ? \"green\" : \n"+
"cel.previousSibling.style.backgroundColor ==\"green\"?\"red\":\"blue\";}, 500)}\n"+
"function fChpLib(cel){clearInterval(myInterval);\n"+
"cel.previousSibling.style.backgroundColor = \"\";\n"+
"cel.previousSibling.style.color = \"\"var CdtC=\"\",refs=\"\";\n"+
"var ArrplCel=cel.value===\"\"?\n"+
"(cel.style.backgroundColor=\"\",cel.style.color=\"\",cel.style.fontWeight=\"\")\n"+
":cel.value===\"POSITIVE\"||cel.value===\"AC\"||cel.value===\"SC\"||cel.value===\"SS\"?\n"+
"(cel.style.backgroundColor=\"aqua\",cel.style.color=\"red\",cel.style.fontWeight=\"bold\")\n"+
":cel.placeholder.includes(\"<\")?\n"+
"(refs=cel.placeholder.split(\" \"),CdtC=cel.value > parseFloat(refs[1])?\n"+
"(cel.style.backgroundColor=\"aqua\",cel.style.color=\"red\",cel.style.fontWeight=\"bold\"):\"\")\n"+
":cel.placeholder.includes(\"-\")?\n"+
"(refs=cel.placeholder.split(\"-\"),CdtC=cel.value < parseFloat(refs[0])?\n"+
"(cel.style.backgroundColor=\"aqua\",cel.style.color=\"orange\",cel.style.fontWeight=\"bold\")\n"+
":cel.value > parseFloat(refs[1])?\n"+
"(cel.style.backgroundColor=\"aqua\",cel.style.color=\"red\",cel.style.fontWeight=\"bold\"):\"\"):\"\";}\n"+
"function fChpSelC(cel){\n"+
"cel.previousSibling.style.backgroundColor =\"blue\";\n"+
"cel.style.backgroundColor=\"\";\n"+
"cel.style.color=\"\";\n"+
"cel.style.fontWeight=\"\";\n"+
"var CdtC=\"\",refs=\"\";\n"+
"var ArrplCel=cel.placeholder===\"< 2.5\"?\n"+
"(cel.value=(document.getElementById(\"CholesterolTotal\").value -\n"+
"document.getElementById(\"CholesterolHDL\").value -\n"+
"(document.getElementById(\"Triglycerides\").value/ 5)).toFixed(2),\n"+
"refs=cel.placeholder.split(\" \"),CdtC=cel.value > parseFloat(refs[1])?\n"+
"(cel.style.backgroundColor=\"aqua\",cel.style.color=\"red\",cel.style.fontWeight=\"bold\"):\"\")\n"+
":(cel.value=(document.getElementById(\"CholesterolTotal\").value*2.56 +\n"+
"document.getElementById(\"Triglycerides\").value*0.87).toFixed(2),\n"+
"refs=cel.placeholder.split(\"-\"),CdtC=cel.value < parseFloat(refs[0])?\n"+
"(cel.style.backgroundColor=\"aqua\",cel.style.color=\"orange\",cel.style.fontWeight=\"bold\")\n"+
":cel.value > parseFloat(refs[1])?\n"+
"(cel.style.backgroundColor=\"aqua\",cel.style.color=\"red\",cel.style.fontWeight=\"bold\"):\"\");\n"+
"myInterval = setInterval(()=>{\n"+
"cel.previousSibling.style.color = \"white\"\n"+
"cel.previousSibling.style.backgroundColor = \n"+
"cel.previousSibling.style.backgroundColor == \"blue\" ? \"green\" : \n"+
"cel.previousSibling.style.backgroundColor ==\"green\"?\"red\":\"blue\";\n"+
"}, 500)}\n"+
"function fChpLibC(cel){clearInterval(myInterval);\n"+
"cel.previousSibling.style.backgroundColor = \"\";\n"+
"cel.previousSibling.style.color = \"\"}\n"+
"var btn_vld= document.getElementById(\"vld\");\n"+
"btn_vld.addEventListener('click',vd_pgweb);\n"+
"function vd_pgweb(event){let Rtab=[],fTab=\"\";\n"+
"for (var i= 0; i<6 ; i++){\n"+
"fTab += Rtab.push(document.querySelectorAll(\"input,select\")[i].value)}\n"+
"let Rtab2=[],fTab2=\"\";\n"+
"for (var i= 87; i<90 ; i++){\n"+
"fTab2 += Rtab2.push(document.querySelectorAll(\"input,select\")[i].value)}\n"+
"var PrixdesExamensouStatut = document.getElementById(\"PrixdesExamensouStatut\").value;\n"+
"var Telephone = document.getElementById(\"Telephone\").value, negTx=\"\", btn_evt =\"\";\n"+
"for (var i= 0; i<6 ; i++){\n"+
"var fxBlcg=document.querySelectorAll(\"input,select\")[i].value===\"\" && \n"+
"document.querySelectorAll(\"input,select\")[i].nextElementSibling.nodeName!==\"SPAN\"?\n"+
"(negTx= document.createElement(\"span\"),\n"+
"negTx.textContent=\" *Champ obligatoire\",negTx.style.color=\"red\",\n"+
"document.querySelectorAll(\"input,select\")[i].after(negTx))\n"+
":document.querySelectorAll(\"input,select\")[i].value===\"\" && \n"+
"document.querySelectorAll(\"input,select\")[i].nextElementSibling.nodeName===\"SPAN\"?\n"+
"(document.querySelectorAll(\"input,select\")[i].nextElementSibling.remove(),\n"+
"negTx= document.createElement(\"span\"),\n"+
"negTx.textContent=\" *Champ obligatoire\",negTx.style.color=\"red\",\n"+
"document.querySelectorAll(\"input,select\")[i].after(negTx)):\"\";}\n"+
"for (var i= 87; i<90 ; i++){\n"+
"var fxBlcg=document.querySelectorAll(\"input,select\")[i].value===\"\" && \n"+
"document.querySelectorAll(\"input,select\")[i].nextElementSibling.nodeName!==\"SPAN\"?\n"+
"(negTx= document.createElement(\"span\"),\n"+
"negTx.textContent=\" *Champ obligatoire\",negTx.style.color=\"red\",\n"+
"document.querySelectorAll(\"input,select\")[i].after(negTx))\n"+
":document.querySelectorAll(\"input,select\")[i].value===\"\" && \n"+
"document.querySelectorAll(\"input,select\")[i].nextElementSibling.nodeName===\"SPAN\"?\n"+
"(document.querySelectorAll(\"input,select\")[i].nextElementSibling.remove(),\n"+
"negTx= document.createElement(\"span\"),\n"+
"negTx.textContent=\" *Champ obligatoire\",negTx.style.color=\"red\",\n"+
"document.querySelectorAll(\"input,select\")[i].after(negTx)):\"\";}\n"+
"var tstTel=!/^\w{10}$/.test(Telephone) &&\n"+
"document.getElementById(\"Telephone\").nextElementSibling.nodeName!==\"SPAN\" &&\n"+
"Telephone!==\"\"?\n"+
"(negTx= document.createElement(\"span\"),\n"+
"negTx.textContent=\" *Exactement 10 chiffres.Merci!\",\n"+
"negTx.style.color=\"#275280\",negTx.style.fontWeigth=\"bold\",\n"+
"document.getElementById(\"Telephone\").after(negTx))\n"+
":!/^\w{10}$/.test(Telephone) &&\n"+
"document.getElementById(\"Telephone\").nextElementSibling.nodeName===\"SPAN\" &&\n"+
"Telephone!==\"\"?\n"+
"(ocument.getElementById(\"Telephone\").nextElementSibling.remove(),\n"+
"negTx= document.createElement(\"span\"),\n"+
"negTx.textContent=\" *Exactement 10 chiffres.Merci!\",\n"+
"negTx.style.color=\"#275280\",negTx.style.fontWeigth=\"bold\",\n"+
"document.getElementById(\"Telephone\").after(negTx))\n"+
":/\D/.test(Telephone) &&\n"+
"document.getElementById(\"Telephone\").nextElementSibling.nodeName!==\"SPAN\"?\n"+
"(negTx= document.createElement(\"span\"),\n"+
"negTx.textContent=\" *Uniquement [0-9]\",\n"+
"negTx.style.color=\"#275280\",negTx.style.fontWeigth=\"bold\",\n"+
"document.getElementById(\"Telephone\").after(negTx))\n"+
":/\D/.test(Telephone) &&\n"+
"document.getElementById(\"Telephone\").nextElementSibling.nodeName===\"SPAN\"?\n"+
"(document.getElementById(\"Telephone\").nextElementSibling.remove(),\n"+
"negTx= document.createElement(\"span\"),\n"+
"negTx.textContent=\" *Uniquement [0-9]\",\n"+
"negTx.style.color=\"#275280\",negTx.style.fontWeigth=\"bold\",\n"+
"document.getElementById(\"Telephone\").after(negTx)):\"\";\n"+
"var tstPrix=/[a-z]/.test(PrixdesExamensouStatut) && /\d/.test(PrixdesExamensouStatut) \n"+
"&& document.getElementById(\"PrixdesExamensouStatut\").nextElementSibling.nodeName!==\"SPAN\"?\n"+
"(negTx= document.createElement(\"span\"),\n"+
"negTx.textContent=\" *Uniquement (Chiffres ou Lettres)\",\n"+
"negTx.style.color=\"#275280\",negTx.style.fontWeigth=\"bold\",\n"+
"document.getElementById(\"PrixdesExamensouStatut\").after(negTx))\n"+
":/[a-z]/.test(PrixdesExamensouStatut) && /\d/.test(PrixdesExamensouStatut) \n"+
"&& document.getElementById(\"PrixdesExamensouStatut\").nextElementSibling.nodeName===\"SPAN\"?\n"+
"(document.getElementById(\"PrixdesExamensouStatut\").nextElementSibling.remove(),\n"+
"negTx= document.createElement(\"span\"),\n"+
"negTx.textContent=\" *Uniquement (Chiffres ou Lettres)\",\n"+
"negTx.style.color=\"#275280\",negTx.style.fontWeigth=\"bold\",\n"+
"document.getElementById(\"PrixdesExamensouStatut\").after(negTx)):\"\";\n"+
"for (var i=90 ; i<document.querySelectorAll(\"input,select\").length ; i++){\n"+
"var tstEnv= Rtab.includes(\"\")||Rtab2.includes(\"\")||\n"+
"/[a-z]/.test(PrixdesExamensouStatut) && /\d/.test(PrixdesExamensouStatut)||\n"+
"/\D/.test(Telephone)||!/^\w{10}$/.test(Telephone)?\n"+
"event.preventDefault():\n"+
"document.querySelectorAll(\"input,select\")[i].value.trim()===\"\"?\n"+
"(document.querySelectorAll(\"input,select\")[i].previousElementSibling.remove(),\n"+
"document.querySelectorAll(\"input,select\")[i].remove(),i--,\n"+
"btn_evt = document.createElement(\"input\"),\n"+
"btn_evt.id=\"envt\",btn_evt.value=\"Envoyer\",btn_evt.type=\"submit\",\n"+
"btn_evt.style.fontFamily=\"bookman Old Style\",\n"+
"btn_evt.style.fontWeight=\"bold\",\n"+
"btn_evt.style.color= \"#275280\",\n"+
"btn_evt.style.fontSize=\"15px\",\n"+
"btn_evt.style.width=\"200px\",\n"+
"btn_vld.replaceWith(btn_evt)):\"\";}}\n"+
"function Avertir (cel){\n"+
"var ActLibCel=cel.value!==\"\" && cel.nextElementSibling.textContent===\" *Champ obligatoire\"||\n"+
"cel.value!==\"\" && cel.nextElementSibling.textContent===\" *Uniquement [0-9]\"||\n"+
"cel.value!==\"\" && cel.nextElementSibling.textContent===\" *Exactement 10 chiffres.Merci!\"||\n"+
"cel.value!==\"\" && cel.nextElementSibling.textContent===\" *Uniquement (Chiffres ou Lettres)\"?\n"+
"cel.nextElementSibling.remove():\"\";}</script></body></html>";
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const LIST_CANDIDATES = '{"data":[{"ID":1,"HASH":"valjentova","CELEJMENO":"Ing. Eva Valjentov\u00e1","OBVOD":2,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":2,"HASH":"teplik","CELEJMENO":"Jan Tepl\u00edk","OBVOD":2,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 Suverenita"},{"ID":3,"HASH":"pochman","CELEJMENO":"Stanislav Pochman","OBVOD":2,"OBHAJUJE":0,"STRANAJMENO":"Klub anga\u017eovan\u00fdch nestran\u00edk\u016f"},{"WIN": 1, "SECOND": 1, "ID":4,"HASH":"balatka","CELEJMENO":"Ing. Miroslav Balatka","OBVOD":2,"OBHAJUJE":0,"STRANAJMENO":"STAROSTOV\u00c9 A NEZ\u00c1VISL\u00cd"},{"ID":5,"HASH":"nimrichter","CELEJMENO":"Petr Nimrichter","OBVOD":2,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"SECOND": 1, "ID":6,"HASH":"oulehlova","CELEJMENO":"Renata Oulehlov\u00e1","OBVOD":2,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":7,"HASH":"zickler","CELEJMENO":"Josef Zickler","OBVOD":2,"OBHAJUJE":0,"STRANAJMENO":"\u0158\u00e1d n\u00e1roda - Vlasteneck\u00e1 unie"},{"ID":8,"HASH":"picka","CELEJMENO":"Bc. Jan Picka","OBVOD":2,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":9,"HASH":"korbel","CELEJMENO":"Ji\u0159\u00ed Korbel","OBVOD":2,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00fd kandid\u00e1t"},{"SECOND": 1, "ID":10,"HASH":"chodacka","CELEJMENO":"MUDr. Martina Chodack\u00e1","OBVOD":5,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":11,"HASH":"jano","CELEJMENO":"Petr Jano","OBVOD":5,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00fd kandid\u00e1t"},{"WIN": 1, "SECOND": 1, "ID":12,"HASH":"rabas","CELEJMENO":"MVDr. P\u0159emysl Rabas","OBVOD":5,"OBHAJUJE":0,"STRANAJMENO":"SEN\u00c1TOR 21"},{"ID":13,"HASH":"brand","CELEJMENO":"Ing. Roman Brand, MBA","OBVOD":5,"OBHAJUJE":0,"STRANAJMENO":"NEZ\u00c1VISL\u00dd KANDID\u00c1T"},{"ID":14,"HASH":"zahradka","CELEJMENO":"Mgr. Jaroslav Zahr\u00e1dka","OBVOD":5,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"ID":15,"HASH":"hahnova","CELEJMENO":"Bc. Elv\u00edra Hahnov\u00e1","OBVOD":5,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":16,"HASH":"homolka","CELEJMENO":"PaeDr. V\u00e1clav Homolka","OBVOD":5,"OBHAJUJE":1,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":17,"HASH":"krakora","CELEJMENO":"MUDr. Jaroslav Kr\u00e1kora","OBVOD":5,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":18,"HASH":"stano","CELEJMENO":"MUDr. Ota Sta\u0148o","OBVOD":5,"OBHAJUJE":0,"STRANAJMENO":"PRO Zdrav\u00ed a Sport"},{"ID":19,"HASH":"chynovsky","CELEJMENO":"Zden\u011bk Ch\u00fdnovsk\u00fd","OBVOD":8,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"WIN": 1, "SECOND": 1, "ID":20,"HASH":"karpisek","CELEJMENO":"Ing. Mgr. Pavel Karp\u00ed\u0161ek","OBVOD":8,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"SECOND": 1, "ID":21,"HASH":"emmerova","CELEJMENO":"Doc. MUDr. Milada Emmerov\u00e1, CSc.","OBVOD":8,"OBHAJUJE":1,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":22,"HASH":"groene","CELEJMENO":"Lucie Groene","OBVOD":8,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":23,"HASH":"redl","CELEJMENO":"Mgr. David Redl","OBVOD":8,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":24,"HASH":"hess","CELEJMENO":"MUDr. Zden\u011bk Hess, Ph.D.","OBVOD":8,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 pir\u00e1tsk\u00e1 strana"},{"ID":25,"HASH":"uhlir","CELEJMENO":"Ing. Martin Uhl\u00ed\u0159, MBA","OBVOD":8,"OBHAJUJE":0,"STRANAJMENO":"Koalice TOP 09 a LES"},{"ID":26,"HASH":"drabik","CELEJMENO":"Michal Drab\u00edk","OBVOD":8,"OBHAJUJE":0,"STRANAJMENO":"Moravsk\u00e1 a Slezsk\u00e1 pir\u00e1tsk\u00e1 strana"},{"WIN": 1, "SECOND": 1, "ID":27,"HASH":"vilimec","CELEJMENO":"Ing. Vladislav Vil\u00edmec","OBVOD":11,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"ID":28,"HASH":"krutina","CELEJMENO":"Ing. Viktor Krutina","OBVOD":11,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 pir\u00e1tsk\u00e1 strana"},{"SECOND": 1, "ID":29,"HASH":"latka","CELEJMENO":"Jan L\u00e1tka","OBVOD":11,"OBHAJUJE":1,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":30,"HASH":"timura","CELEJMENO":"Mgr. Miroslav Timura","OBVOD":11,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 Suverenita"},{"ID":31,"HASH":"obdrzalek","CELEJMENO":"Ing. Milan Obdr\u017e\u00e1lek","OBVOD":11,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":32,"HASH":"vokac","CELEJMENO":"JUDr. Miroslav Vok\u00e1\u010d","OBVOD":11,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":33,"HASH":"svarcbek","CELEJMENO":"RSDr. Josef \u0160varcbek","OBVOD":11,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":34,"HASH":"janek","CELEJMENO":"MUDr. Michal Janek","OBVOD":11,"OBHAJUJE":0,"STRANAJMENO":"TOP 09"},{"ID":35,"HASH":"tampir","CELEJMENO":"Ing. \u0160t\u011bp\u00e1n Tamp\u00edr","OBVOD":14,"OBHAJUJE":0,"STRANAJMENO":"Strana svobodn\u00fdch ob\u010dan\u016f"},{"WIN": 1, "SECOND": 1, "ID":36,"HASH":"faktor","CELEJMENO":"JUDr. Ladislav Faktor","OBVOD":14,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00fd kandid\u00e1t"},{"ID":37,"HASH":"jakubcova-sykorova","CELEJMENO":"MUDr. Blanka Jakubcov\u00e1 S\u00fdkorov\u00e1","OBVOD":14,"OBHAJUJE":0,"STRANAJMENO":"PRO Zdrav\u00ed a Sport"},{"ID":38,"HASH":"pana","CELEJMENO":"PhDr. Lubom\u00edr P\u00e1na, Ph.D., dr. h. c.","OBVOD":14,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":39,"HASH":"prochazka","CELEJMENO":"Ing. Miloslav Proch\u00e1zka, CSc.","OBVOD":14,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"SECOND": 1, "ID":40,"HASH":"sestak","CELEJMENO":"Ji\u0159\u00ed \u0160est\u00e1k, Ph.D.","OBVOD":14,"OBHAJUJE":1,"STRANAJMENO":"SPOJENI D\u016eV\u011aROU: HOPB, STAN, KDU-\u010cSL, TOP 09, ...."},{"ID":41,"HASH":"schotz","CELEJMENO":"Richard Sch\u00f6tz","OBVOD":14,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":42,"HASH":"paukejova","CELEJMENO":"Ing. Marie Paukejov\u00e1","OBVOD":14,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana n\u00e1rodn\u011b soci\u00e1ln\u00ed"},{"ID":43,"HASH":"david","CELEJMENO":"MUDr. Ivan David, CSc.","OBVOD":17,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":44,"HASH":"nouza","CELEJMENO":"Ji\u0159\u00ed Nouza","OBVOD":17,"OBHAJUJE":0,"STRANAJMENO":"Pro Prahu"},{"ID":45,"HASH":"gerloch","CELEJMENO":"prof. JUDr. Ale\u0161 Gerloch, CSc.","OBVOD":17,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00fd kandid\u00e1t"},{"SECOND": 1, "ID":46,"HASH":"tylova","CELEJMENO":"Ing. Eva Tylov\u00e1","OBVOD":17,"OBHAJUJE":0,"STRANAJMENO":"Pir\u00e1ti s podporou LES"},{"WIN": 1, "SECOND": 1, "ID":47,"HASH":"fischer","CELEJMENO":"Pavel Fischer","OBVOD":17,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00fd kandid\u00e1t"},{"ID":48,"HASH":"pilny","CELEJMENO":"Ing. Ivan Piln\u00fd","OBVOD":17,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":49,"HASH":"dobsik","CELEJMENO":"Mgr. Franti\u0161ek Dob\u0161\u00edk","OBVOD":17,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":50,"HASH":"semelova","CELEJMENO":"Mgr. Marta Semelov\u00e1","OBVOD":17,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":51,"HASH":"dvorak","CELEJMENO":"Ing. Martin Dvo\u0159\u00e1k","OBVOD":20,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"WIN": 1, "ID":52,"HASH":"drahos","CELEJMENO":"prof. Ing. Ji\u0159\u00ed Draho\u0161, DrSc.","OBVOD":20,"OBHAJUJE":0,"STRANAJMENO":"Ji\u0159\u00ed Draho\u0161, nez\u00e1visl\u00fd kandid\u00e1t za koalici"},{"ID":53,"HASH":"kuras","CELEJMENO":"Benjamin Miloslav Kuras","OBVOD":20,"OBHAJUJE":0,"STRANAJMENO":"REALIST\u00c9"},{"ID":54,"HASH":"sykova","CELEJMENO":"prof. MUDr. Eva Sykov\u00e1, DrSc.","OBVOD":20,"OBHAJUJE":1,"STRANAJMENO":"ANO 2011"},{"ID":55,"HASH":"skovajsova","CELEJMENO":"MUDr. Miroslava Skovajsov\u00e1, PhD.","OBVOD":20,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":56,"HASH":"skoupil","CELEJMENO":"Karel Skoupil","OBVOD":20,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":57,"HASH":"mazac","CELEJMENO":"Mgr. Rudolf Karel Maz\u00e1\u010d","OBVOD":20,"OBHAJUJE":0,"STRANAJMENO":"DOST JE DOST ! Ob\u010dan\u00e9 za sv\u00e1 pr\u00e1va"},{"ID":58,"HASH":"kocman","CELEJMENO":"Ing. Ji\u0159\u00ed Kocman","OBVOD":20,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":59,"HASH":"okamura","CELEJMENO":"Mgr. Hayato Okamura","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"K\u0159es\u0165an.a demokrat.unie-\u010ceskosl.strana lidov\u00e1"},{"ID":60,"HASH":"chovancova","CELEJMENO":"JUDr. Marta Chovancov\u00e1","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"Strana st\u00e1tu p\u0159\u00edm\u00e9 demokracie - Strana pr\u00e1ce"},{"ID":61,"HASH":"dolejsi","CELEJMENO":"Hana Dolej\u0161\u00ed","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"Patrioti \u010cesk\u00e9 republiky"},{"ID":62,"HASH":"nosek","CELEJMENO":"Josef Nosek","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"Pro Prahu"},{"ID":63,"HASH":"kopal","CELEJMENO":"Vladislav Kopal","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":64,"HASH":"doubek","CELEJMENO":"JUDr. Ji\u0159\u00ed Doubek","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"N\u00e1rod Sob\u011b"},{"ID":65,"HASH":"witzany","CELEJMENO":"prof. RNDr. Ji\u0159\u00ed Witzany, Ph.D.","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"Koalice SNK ED a evropani.cz"},{"ID":66,"HASH":"vitova","CELEJMENO":"PhDr. Vladim\u00edra V\u00edtov\u00e1, Ph.D.","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"ALIANCE N\u00c1RODN\u00cdCH SIL"},{"ID":67,"HASH":"maly","CELEJMENO":"Michal Mal\u00fd","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"Strana svobodn\u00fdch ob\u010dan\u016f"},{"ID":68,"HASH":"golas","CELEJMENO":"JUDr. Milan Golas","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"ID":69,"HASH":"haramul","CELEJMENO":"Ing. Ji\u0159\u00ed Haramul","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"WIN": 1, "SECOND": 1, "ID":70,"HASH":"wagenknecht","CELEJMENO":"Ing. Luk\u00e1\u0161 Wagenknecht","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 pir\u00e1tsk\u00e1 strana"},{"ID":71,"HASH":"hannig","CELEJMENO":"Mgr. Petr Hannig","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"ROZUMN\u00cd"},{"SECOND": 1, "ID":72,"HASH":"dungl","CELEJMENO":"prof. MUDr. Pavel Dungl, DrSc.","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"TOP 09, Starostov\u00e9 a Nez\u00e1visl\u00ed"},{"ID":73,"HASH":"petrus","CELEJMENO":"Roman Petrus","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":74,"HASH":"kula","CELEJMENO":"genmjr. PhDr. Lud\u011bk Kula","OBVOD":23,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"SECOND": 1, "ID":75,"HASH":"libor-michalek","CELEJMENO":"Mgr. Libor Mich\u00e1lek, MPA","OBVOD":26,"OBHAJUJE":1,"STRANAJMENO":"Libor Mich\u00e1lek - sen\u00e1tor, kter\u00fd pln\u00ed sliby"},{"WIN": 1, "SECOND": 1, "ID":76,"HASH":"hilser","CELEJMENO":"MUDr. Bc. Marek Hil\u0161er, Ph.D.","OBVOD":26,"OBHAJUJE":0,"STRANAJMENO":"Marek Hil\u0161er do Sen\u00e1tu"},{"ID":77,"HASH":"jakl","CELEJMENO":"Ladislav Jakl","OBVOD":26,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":78,"HASH":"srb","CELEJMENO":"V\u00e1clav Srb","OBVOD":26,"OBHAJUJE":0,"STRANAJMENO":"Koruna \u010cesk\u00e1 (monarch.str.\u010cech, Moravy a Slezska)"},{"ID":79,"HASH":"gabal","CELEJMENO":"Ivan Gabal","OBVOD":26,"OBHAJUJE":0,"STRANAJMENO":"Strana zelen\u00fdch"},{"ID":80,"HASH":"kerekes","CELEJMENO":"MUDr. Roman Kereke\u0161","OBVOD":26,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":81,"HASH":"kratina","CELEJMENO":"Vladim\u00edr Kratina","OBVOD":26,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"ID":82,"HASH":"hujova","CELEJMENO":"Ing. Vladislava Hujov\u00e1","OBVOD":26,"OBHAJUJE":0,"STRANAJMENO":"Pro Prahu"},{"ID":83,"HASH":"roskot","CELEJMENO":"Ing. Vladim\u00edr Ro\u0161kot","OBVOD":26,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":84,"HASH":"vondrous","CELEJMENO":"Jan Vondrou\u0161","OBVOD":29,"OBHAJUJE":0,"STRANAJMENO":"NE-VOLIM.CZ"},{"ID":85,"HASH":"senfeld","CELEJMENO":"Ing. Josef \u0160enfeld","OBVOD":29,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":86,"HASH":"rath","CELEJMENO":"MUDr. David Rath","OBVOD":29,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 Suverenita"},{"ID":87,"HASH":"jiranek","CELEJMENO":"MUDr. Miroslav Jir\u00e1nek","OBVOD":29,"OBHAJUJE":0,"STRANAJMENO":"PRO Zdrav\u00ed a Sport"},{"WIN": 1, "SECOND": 1, "ID":88,"HASH":"chlupac","CELEJMENO":"Mgr. Ladislav Chlup\u00e1\u010d","OBVOD":29,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"ID":89,"HASH":"novotny","CELEJMENO":"Franti\u0161ek Novotn\u00fd","OBVOD":29,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":90,"HASH":"uhlik","CELEJMENO":"Libor Uhl\u00edk","OBVOD":29,"OBHAJUJE":0,"STRANAJMENO":"SEN\u00c1TOR 21"},{"ID":91,"HASH":"dobes","CELEJMENO":"Mgr. Josef Dobe\u0161","OBVOD":29,"OBHAJUJE":0,"STRANAJMENO":"Mgr. JOSEF DOBE\u0160, NEZ\u00c1VISL\u00dd KANDID\u00c1T"},{"SECOND": 1, "ID":92,"HASH":"sterba","CELEJMENO":"MUDr. Ond\u0159ej \u0160t\u011brba","OBVOD":29,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":93,"HASH":"zika","CELEJMENO":"Tom\u00e1\u0161 Z\u00edka","OBVOD":32,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":94,"HASH":"holovska","CELEJMENO":"PhDr. Terezie Holovsk\u00e1","OBVOD":32,"OBHAJUJE":0,"STRANAJMENO":"Strana Pr\u00e1v Ob\u010dan\u016f ZEMANOVCI"},{"ID":95,"HASH":"vinicky","CELEJMENO":"Ivan Vinick\u00fd","OBVOD":32,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":96,"HASH":"barta","CELEJMENO":"Josef Barta","OBVOD":32,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dan\u00e9 \u010cesk\u00e9 republiky"},{"WIN": 1, "SECOND": 1, "ID":97,"HASH":"kubera","CELEJMENO":"Jaroslav Kubera","OBVOD":32,"OBHAJUJE":1,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"ID":98,"HASH":"zahradnicek","CELEJMENO":"Bc. Jan Zahradn\u00ed\u010dek","OBVOD":32,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":99,"HASH":"sedlbauer","CELEJMENO":"Ing. Pavel \u0160edlbauer","OBVOD":32,"OBHAJUJE":0,"STRANAJMENO":"TOP 09"},{"SECOND": 1, "ID":100,"HASH":"bergman","CELEJMENO":"RNDr. Zden\u011bk Bergman","OBVOD":32,"OBHAJUJE":0,"STRANAJMENO":"SEN\u00c1TOR 21"},{"ID":101,"HASH":"freimann","CELEJMENO":"PhDr. ThDr. Mgr. Eugen Sigismund Freimann, Ph.D., M.A.","OBVOD":32,"OBHAJUJE":0,"STRANAJMENO":"ROZUMN\u00cd"},{"ID":102,"HASH":"kalvova","CELEJMENO":"Mgr. \u0160\u00e1rka Kalvov\u00e1","OBVOD":35,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"SECOND": 1, "ID":103,"HASH":"tejmlova","CELEJMENO":"Mgr. Michaela Tejmlov\u00e1, LL.M.","OBVOD":35,"OBHAJUJE":0,"STRANAJMENO":"SEN\u00c1TOR 21"},{"ID":104,"HASH":"zeman","CELEJMENO":"Jaroslav Zeman","OBVOD":35,"OBHAJUJE":1,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"ID":105,"HASH":"svarc","CELEJMENO":"Mgr. Michal \u0160varc","OBVOD":35,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":106,"HASH":"zur","CELEJMENO":"Mgr. Pavel \u017dur","OBVOD":35,"OBHAJUJE":0,"STRANAJMENO":"Nov\u00e1 budoucnost pro Libereck\u00fd kraj"},{"ID":107,"HASH":"chuchlik","CELEJMENO":"Josef Chuchl\u00edk","OBVOD":35,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":108,"HASH":"berounsky","CELEJMENO":"Jind\u0159ich Berounsk\u00fd","OBVOD":35,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":109,"HASH":"weissova","CELEJMENO":"Daniela Weissov\u00e1","OBVOD":38,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 pir\u00e1tsk\u00e1 strana"},{"WIN": 1, "SECOND": 1, "ID":110,"HASH":"nwelati","CELEJMENO":"MUDr. Raduan Nwelati","OBVOD":38,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"ID":111,"HASH":"nos","CELEJMENO":"Josef Nos","OBVOD":38,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":112,"HASH":"horak","CELEJMENO":"doc. MUDr. Ladislav Hor\u00e1k, DrSc.","OBVOD":38,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"SECOND": 1, "ID":113,"HASH":"m\u00fcller","CELEJMENO":"Ji\u0159\u00ed M\u00fcller","OBVOD":38,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":114,"HASH":"jermar","CELEJMENO":"RSDr. Josef Jerm\u00e1\u0159","OBVOD":38,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":115,"HASH":"plch","CELEJMENO":"Miroslav Plch","OBVOD":38,"OBHAJUJE":0,"STRANAJMENO":"TOP 09"},{"ID":116,"HASH":"sveda","CELEJMENO":"Ing. Martin \u0160veda","OBVOD":41,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00fd kandid\u00e1t"},{"ID":117,"HASH":"svadlena","CELEJMENO":"Ing. Ji\u0159\u00ed \u0160vadlena","OBVOD":41,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":118,"HASH":"radomerska","CELEJMENO":"Mgr. Terezie Radom\u011b\u0159sk\u00e1","OBVOD":41,"OBHAJUJE":0,"STRANAJMENO":"TOP 09"},{"SECOND": 1, "ID":119,"HASH":"kozak","CELEJMENO":"Mgr. Ji\u0159\u00ed Koz\u00e1k","OBVOD":41,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"ID":120,"HASH":"borgula","CELEJMENO":"Ing. Jan Borgu\u013ea","OBVOD":41,"OBHAJUJE":0,"STRANAJMENO":"K\u0159es\u0165an.a demokrat.unie-\u010ceskosl.strana lidov\u00e1"},{"ID":121,"HASH":"krecek","CELEJMENO":"Miroslav K\u0159e\u010dek","OBVOD":41,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":122,"HASH":"cinka","CELEJMENO":"Mgr. Ivan Cinka","OBVOD":41,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":123,"HASH":"hemer","CELEJMENO":"Mgr. Ale\u0161 Hemer","OBVOD":41,"OBHAJUJE":0,"STRANAJMENO":"Strana soukromn\u00edk\u016f \u010cesk\u00e9 republiky"},{"WIN": 1, "SECOND": 1, "ID":124,"HASH":"hraba","CELEJMENO":"JUDr. Ing. Zden\u011bk Hraba, Ph.D.","OBVOD":41,"OBHAJUJE":0,"STRANAJMENO":"STAROSTOV\u00c9 A NEZ\u00c1VISL\u00cd"},{"ID":125,"HASH":"petrzilek","CELEJMENO":"JUDr. Ing.(ekon.) Petr Petr\u017e\u00edlek, Ph.D.","OBVOD":41,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":126,"HASH":"chalus","CELEJMENO":"Mgr. Petr Chalu\u0161","OBVOD":41,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 pir\u00e1tsk\u00e1 strana"},{"ID":127,"HASH":"semik","CELEJMENO":"Ing. Roman \u0160em\u00edk","OBVOD":44,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 pir\u00e1tsk\u00e1 strana"},{"ID":128,"HASH":"krcil","CELEJMENO":"Miroslav Kr\u010dil","OBVOD":44,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00fd kandid\u00e1t"},{"ID":129,"HASH":"svoboda","CELEJMENO":"MUDr. Pavel Svoboda","OBVOD":44,"OBHAJUJE":0,"STRANAJMENO":"PRO Zdrav\u00ed a Sport"},{"ID":130,"HASH":"dubsky","CELEJMENO":"Tom\u00e1\u0161 Dubsk\u00fd","OBVOD":44,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00fd kandid\u00e1t"},{"ID":131,"HASH":"petr-novak","CELEJMENO":"Petr Nov\u00e1k","OBVOD":44,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"SECOND": 1, "ID":132,"HASH":"herman","CELEJMENO":"Mgr. Daniel Herman","OBVOD":44,"OBHAJUJE":0,"STRANAJMENO":"K\u0159es\u0165an.a demokrat.unie-\u010ceskosl.strana lidov\u00e1"},{"ID":133,"HASH":"zdarsky","CELEJMENO":"Mgr. et RNDr. Emanuel \u017d\u010f\u00e1rsk\u00fd, CSc.","OBVOD":44,"OBHAJUJE":0,"STRANAJMENO":"OBY\u010cEJN\u00cd LID\u00c9"},{"ID":134,"HASH":"hynek","CELEJMENO":"RNDr. Ji\u0159\u00ed Hynek","OBVOD":44,"OBHAJUJE":0,"STRANAJMENO":"REALIST\u00c9"},{"ID":135,"HASH":"hajek","CELEJMENO":"Jaroslav H\u00e1jek, DiS.","OBVOD":44,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":136,"HASH":"blasko","CELEJMENO":"Ing. Hynek Bla\u0161ko","OBVOD":44,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":137,"HASH":"orgonikova","CELEJMENO":"Ing. Lucie Orgon\u00edkov\u00e1","OBVOD":44,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":138,"HASH":"martinec","CELEJMENO":"Vladim\u00edr Martinec","OBVOD":44,"OBHAJUJE":0,"STRANAJMENO":"Koalice SNK ED a Soukromn\u00edci"},{"WIN": 1, "SECOND": 1, "ID":139,"HASH":"tecl","CELEJMENO":"Mgr. Jan Tecl, MBA","OBVOD":44,"OBHAJUJE":0,"STRANAJMENO":"Koalice ODS, STAN a STO"},{"ID":140,"HASH":"andrle-sylor-augustin","CELEJMENO":"PaedDr. et Mgr. Augustin Karel Andrle Sylor","OBVOD":44,"OBHAJUJE":0,"STRANAJMENO":"Koruna \u010cesk\u00e1 (monarch.str.\u010cech, Moravy a Slezska)"},{"ID":141,"HASH":"markova","CELEJMENO":"Mgr. So\u0148a Markov\u00e1","OBVOD":47,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"SECOND": 1, "ID":142,"HASH":"belobradek","CELEJMENO":"MVDr. Pavel B\u011blobr\u00e1dek, Ph.D., MPA","OBVOD":47,"OBHAJUJE":0,"STRANAJMENO":"K\u0159es\u0165an.a demokrat.unie-\u010ceskosl.strana lidov\u00e1"},{"ID":143,"HASH":"pajgerova","CELEJMENO":"Andrea Pajgerov\u00e1","OBVOD":47,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":144,"HASH":"koleta","CELEJMENO":"Petr Koleta","OBVOD":47,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"WIN": 1, "SECOND": 1, "ID":145,"HASH":"cervicek","CELEJMENO":"brig. gen. v.v. Mgr. Martin \u010cerv\u00ed\u010dek","OBVOD":47,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"ID":146,"HASH":"brat","CELEJMENO":"Miroslav Br\u00e1t","OBVOD":47,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":147,"HASH":"jaroslav-novak","CELEJMENO":"Jaroslav Nov\u00e1k","OBVOD":50,"OBHAJUJE":0,"STRANAJMENO":"PATRIOTI"},{"ID":148,"HASH":"fliedr","CELEJMENO":"Ing. Bohuslav Fliedr","OBVOD":50,"OBHAJUJE":0,"STRANAJMENO":"Koalice KDU-\u010cSL, STAN"},{"ID":149,"HASH":"kratky","CELEJMENO":"Ji\u0159\u00ed Kr\u00e1tk\u00fd","OBVOD":50,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 pir\u00e1tsk\u00e1 strana"},{"SECOND": 1, "ID":150,"HASH":"havir","CELEJMENO":"MUDr. Pavel Hav\u00ed\u0159","OBVOD":50,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":151,"HASH":"andrle-sylor-richard","CELEJMENO":"Mgr. Richard Andrle Sylor, MBA","OBVOD":50,"OBHAJUJE":0,"STRANAJMENO":"Koruna \u010cesk\u00e1 (monarch.str.\u010cech, Moravy a Slezska)"},{"ID":152,"HASH":"safar","CELEJMENO":"MVDr. Miroslav \u0160af\u00e1\u0159","OBVOD":50,"OBHAJUJE":0,"STRANAJMENO":"ROZUMN\u00cd"},{"WIN": 1, "SECOND": 1, "ID":153,"HASH":"kortys","CELEJMENO":"Michal Korty\u0161","OBVOD":50,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"ID":154,"HASH":"mnuk","CELEJMENO":"Milan M\u0148uk","OBVOD":50,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":155,"HASH":"krpalek","CELEJMENO":"Ing. Josef Krp\u00e1lek","OBVOD":50,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":156,"HASH":"zima","CELEJMENO":"Ing. Stanislav Z\u00edma","OBVOD":53,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00fd kandid\u00e1t"},{"ID":157,"HASH":"kotek","CELEJMENO":"Prim. MUDr. Vladim\u00edr Kotek, Ph.D., MBA","OBVOD":53,"OBHAJUJE":0,"STRANAJMENO":"ROZUMN\u00cd"},{"ID":158,"HASH":"dobesova","CELEJMENO":"Nad\u011b\u017eda Dobe\u0161ov\u00e1","OBVOD":53,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"WIN": 1, "SECOND": 1, "ID":159,"HASH":"zakova","CELEJMENO":"Hana \u017d\u00e1kov\u00e1","OBVOD":53,"OBHAJUJE":0,"STRANAJMENO":"STAROSTOV\u00c9 A NEZ\u00c1VISL\u00cd"},{"ID":160,"HASH":"salomoun","CELEJMENO":"JUDr. MgA. Michal \u0160alomoun, Ph.D.","OBVOD":53,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 pir\u00e1tsk\u00e1 strana"},{"ID":161,"HASH":"dudikova","CELEJMENO":"Mgr. Marie Dud\u00edkov\u00e1","OBVOD":53,"OBHAJUJE":0,"STRANAJMENO":"K\u0159es\u0165an.a demokrat.unie-\u010ceskosl.strana lidov\u00e1"},{"SECOND": 1, "ID":162,"HASH":"miroslav-michalek","CELEJMENO":"JUDr. Miroslav Mich\u00e1lek, LL.M.","OBVOD":53,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":163,"HASH":"nevoral","CELEJMENO":"Marek Nevoral","OBVOD":53,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":164,"HASH":"paul","CELEJMENO":"JUDr. Petr Paul","OBVOD":53,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":165,"HASH":"richard-novak","CELEJMENO":"JUDr. Richard Nov\u00e1k","OBVOD":56,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":166,"HASH":"valka","CELEJMENO":"Ing. Jaroslav V\u00e1lka","OBVOD":56,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":167,"HASH":"stogl","CELEJMENO":"Mgr. Karel \u0160togl","OBVOD":56,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 pir\u00e1tsk\u00e1 strana"},{"WIN": 1, "SECOND": 1, "ID":168,"HASH":"zemanek","CELEJMENO":"Mgr. Richard Zem\u00e1nek","OBVOD":56,"OBHAJUJE":0,"STRANAJMENO":"K\u0159es\u0165an.a demokrat.unie-\u010ceskosl.strana lidov\u00e1"},{"ID":169,"HASH":"tesarik","CELEJMENO":"Ing. Zden\u011bk Tesa\u0159\u00edk","OBVOD":56,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"WIN": 1, "SECOND": 1, "ID":170,"HASH":"kostial","CELEJMENO":"Rostislav Ko\u0161tial","OBVOD":56,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"SECOND": 1, "ID":171,"HASH":"nazarcuk","CELEJMENO":"Libor Nazar\u010duk","OBVOD":56,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":172,"HASH":"schmeidler","CELEJMENO":"doc. Ing.arch. PhDr. Karel Schmeidler, CSc.","OBVOD":59,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"SECOND": 1, "ID":173,"HASH":"ostry","CELEJMENO":"Mgr. Jarom\u00edr Ostr\u00fd","OBVOD":59,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":174,"HASH":"duchon","CELEJMENO":"Old\u0159ich Ducho\u0148","OBVOD":59,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":175,"HASH":"trcala","CELEJMENO":"Pavel Tr\u010dala, MA","OBVOD":59,"OBHAJUJE":0,"STRANAJMENO":"Moravsk\u00e9 zemsk\u00e9 hnut\u00ed"},{"ID":176,"HASH":"balik","CELEJMENO":"mjr. v. v. PhDr. Stanislav Bal\u00edk","OBVOD":59,"OBHAJUJE":0,"STRANAJMENO":"Alternativa pro \u010ceskou republiku 2017"},{"ID":177,"HASH":"kovac","CELEJMENO":"Petr Kov\u00e1\u010d","OBVOD":59,"OBHAJUJE":0,"STRANAJMENO":"Romsk\u00e1 demokratick\u00e1 strana"},{"ID":178,"HASH":"spilar","CELEJMENO":"Mgr. Jan \u0160pilar","OBVOD":59,"OBHAJUJE":0,"STRANAJMENO":"K\u0159es\u0165an.a demokrat.unie-\u010ceskosl.strana lidov\u00e1"},{"WIN": 1, "ID":179,"HASH":"adamec","CELEJMENO":"MgA. Emil Adamec","OBVOD":59,"OBHAJUJE":0,"STRANAJMENO":"Koruna \u010cesk\u00e1 (monarch.str.\u010cech, Moravy a Slezska)"},{"ID":180,"HASH":"zajicova","CELEJMENO":"Lucie Zaj\u00edcov\u00e1","OBVOD":59,"OBHAJUJE":0,"STRANAJMENO":"ROZUMN\u00cd"},{"WIN": 1, "SECOND": 1, "ID":181,"HASH":"bek","CELEJMENO":"doc. PhDr. Mikul\u00e1\u0161 Bek, Ph.D.","OBVOD":59,"OBHAJUJE":0,"STRANAJMENO":"Mikul\u00e1\u0161 Bek, nez\u00e1visl\u00fd kandid\u00e1t za koalici ODS, ST"},{"ID":182,"HASH":"kosorin","CELEJMENO":"Bc. Pavel Kosorin","OBVOD":59,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"SECOND": 1, "ID":183,"HASH":"sekaninova","CELEJMENO":"Bo\u017eena Sekaninov\u00e1","OBVOD":62,"OBHAJUJE":1,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"WIN": 1, "SECOND": 1, "ID":184,"HASH":"chalankova","CELEJMENO":"MUDr. Jitka Chal\u00e1nkov\u00e1","OBVOD":62,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00fd kandid\u00e1t"},{"ID":185,"HASH":"blazkova","CELEJMENO":"Irena Bla\u017ekov\u00e1","OBVOD":62,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":186,"HASH":"michek","CELEJMENO":"Mgr. Petr Michek","OBVOD":62,"OBHAJUJE":0,"STRANAJMENO":"Moravan\u00e9"},{"ID":187,"HASH":"dopita","CELEJMENO":"Ing. Pavel Dopita, LL.M., MBA","OBVOD":62,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":188,"HASH":"krchnavy","CELEJMENO":"PaedDr. Jan Krch\u0148av\u00fd","OBVOD":62,"OBHAJUJE":0,"STRANAJMENO":"P\u00e9v\u00e9\u010dko"},{"ID":189,"HASH":"makovy","CELEJMENO":"Pavel Makov\u00fd","OBVOD":62,"OBHAJUJE":0,"STRANAJMENO":"Moravsk\u00e9 zemsk\u00e9 hnut\u00ed"},{"ID":190,"HASH":"halasova","CELEJMENO":"Mgr. Dagmar Hala\u0161ov\u00e1","OBVOD":62,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"ID":191,"HASH":"obrtel","CELEJMENO":"pplk. v.z. MUDr. Marek Obrtel","OBVOD":62,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana n\u00e1rodn\u011b soci\u00e1ln\u00ed"},{"ID":192,"HASH":"fidrmuc","CELEJMENO":"Mgr. Jaroslav Fidrmuc","OBVOD":62,"OBHAJUJE":0,"STRANAJMENO":"K\u0159es\u0165an.a demokrat.unie-\u010ceskosl.strana lidov\u00e1"},{"ID":193,"HASH":"bohmova","CELEJMENO":"Zuzana B\u00f6hmov\u00e1","OBVOD":62,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":194,"HASH":"hauzner","CELEJMENO":"Ing. Tom\u00e1\u0161 Hauzner","OBVOD":65,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":195,"HASH":"tulpik","CELEJMENO":"Ing. Josef \u0164ulp\u00edk","OBVOD":65,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"SECOND": 1, "ID":196,"HASH":"broz","CELEJMENO":"Mgr. Bc. Zden\u011bk Bro\u017e","OBVOD":65,"OBHAJUJE":1,"STRANAJMENO":"Koalice KDU-\u010cSL a NV"},{"SECOND": 1, "ID":198,"HASH":"adamek","CELEJMENO":"Mgr. Miroslav Ad\u00e1mek","OBVOD":65,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":199,"HASH":"rulisek","CELEJMENO":"Ing. Vladislav Rul\u00ed\u0161ek","OBVOD":65,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":200,"HASH":"galuszkova","CELEJMENO":"MUDr. Dana Galuszkov\u00e1, Ph.D., MBA","OBVOD":65,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"SECOND": 1, "ID":201,"HASH":"josef-vicha","CELEJMENO":"Josef V\u00edcha","OBVOD":68,"OBHAJUJE":0,"STRANAJMENO":"K\u0159es\u0165an.a demokrat.unie-\u010ceskosl.strana lidov\u00e1"},{"ID":202,"HASH":"pavlicek","CELEJMENO":"Petr Pavl\u00ed\u010dek","OBVOD":68,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 pir\u00e1tsk\u00e1 strana"},{"ID":203,"HASH":"bersky","CELEJMENO":"MUDr. Kamil B\u011brsk\u00fd","OBVOD":68,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":204,"HASH":"kupka","CELEJMENO":"Bc. Vlastimil Kupka","OBVOD":68,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":205,"HASH":"tancik","CELEJMENO":"Mgr. Vladim\u00edr Tanc\u00edk","OBVOD":68,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00fd kandid\u00e1t"},{"WIN": 1, "SECOND": 1, "ID":206,"HASH":"pavera","CELEJMENO":"Mgr. Herbert Pavera","OBVOD":68,"OBHAJUJE":0,"STRANAJMENO":"Spole\u010dn\u011b pro Opavsko: Koalice STAN, ODS a TOP 09"},{"SECOND": 1, "ID":207,"HASH":"horakova","CELEJMENO":"Mgr. Simona Hor\u00e1kov\u00e1","OBVOD":68,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":208,"HASH":"valsamisova","CELEJMENO":"Ing. Mgr. Pynelopi Valsamisov\u00e1","OBVOD":71,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":209,"HASH":"cip","CELEJMENO":"Ing. Ren\u00e9 \u010c\u00edp","OBVOD":71,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":210,"HASH":"nemeckova-crkvenjas","CELEJMENO":"MUDr. Zdenka N\u011bme\u010dkov\u00e1 Crkvenja\u0161","OBVOD":71,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00fd kandid\u00e1t"},{"ID":211,"HASH":"stedron","CELEJMENO":"RNDr. Radoslav \u0160t\u011bdro\u0148","OBVOD":71,"OBHAJUJE":0,"STRANAJMENO":"Strana st\u00e1tu p\u0159\u00edm\u00e9 demokracie - Strana pr\u00e1ce"},{"WIN": 1, "SECOND": 1, "ID":212,"HASH":"sulovsky","CELEJMENO":"Ing. Leopold Sulovsk\u00fd","OBVOD":71,"OBHAJUJE":1,"STRANAJMENO":"Ostravak"},{"ID":213,"HASH":"paroubek","CELEJMENO":"Ing. Ji\u0159\u00ed Paroubek","OBVOD":71,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00fd kandid\u00e1t"},{"SECOND": 1, "ID":214,"HASH":"gondek","CELEJMENO":"Ing. Ivo Gondek","OBVOD":71,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":215,"HASH":"konvicka","CELEJMENO":"doc. Mgr. Martin Konvi\u010dka, Ph.D.","OBVOD":71,"OBHAJUJE":0,"STRANAJMENO":"NEZ\u00c1VISL\u00cd"},{"ID":216,"HASH":"tomasek","CELEJMENO":"Mgr. Martin Tom\u00e1\u0161ek, Ph.D.","OBVOD":71,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 pir\u00e1tsk\u00e1 strana"},{"SECOND": 1, "ID":217,"HASH":"halikova","CELEJMENO":"PaedDr. Milada Hal\u00edkov\u00e1","OBVOD":74,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"WIN": 1, "ID":218,"HASH":"petr-vicha","CELEJMENO":"Ing. Petr V\u00edcha","OBVOD":74,"OBHAJUJE":1,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":219,"HASH":"svetnicka","CELEJMENO":"Mgr. et Bc. Karel Sv\u011btni\u010dka","OBVOD":74,"OBHAJUJE":0,"STRANAJMENO":"Moravsk\u00e1 a Slezsk\u00e1 pir\u00e1tsk\u00e1 strana"},{"ID":220,"HASH":"karch","CELEJMENO":"MUDr. Du\u0161an Karch","OBVOD":74,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00fd kandid\u00e1t"},{"ID":221,"HASH":"kabourkova","CELEJMENO":"Ing. Mark\u00e9ta Kabourkov\u00e1","OBVOD":74,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00e1 kandid\u00e1tka"},{"ID":222,"HASH":"matej","CELEJMENO":"Ing. et Ing. Bc. Ji\u0159\u00ed Mat\u011bj, MBAce","OBVOD":74,"OBHAJUJE":0,"STRANAJMENO":"ANO 2011"},{"ID":223,"HASH":"sitko","CELEJMENO":"Ing. Ladislav Sitko","OBVOD":74,"OBHAJUJE":0,"STRANAJMENO":"TOP 09"},{"ID":224,"HASH":"kufa","CELEJMENO":"MUDr. Bohdan Kufa","OBVOD":74,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"WIN": 1, "ID":225,"HASH":"cunek","CELEJMENO":"Ji\u0159\u00ed \u010cunek","OBVOD":77,"OBHAJUJE":1,"STRANAJMENO":"K\u0159es\u0165an.a demokrat.unie-\u010ceskosl.strana lidov\u00e1"},{"ID":226,"HASH":"konarik","CELEJMENO":"Miroslav Ko\u0148a\u0159\u00edk","OBVOD":77,"OBHAJUJE":0,"STRANAJMENO":"Nez\u00e1visl\u00fd kandid\u00e1t"},{"ID":227,"HASH":"fojticek","CELEJMENO":"Zbyn\u011bk Fojt\u00ed\u010dek","OBVOD":77,"OBHAJUJE":0,"STRANAJMENO":"Ob\u010dansk\u00e1 demokratick\u00e1 strana"},{"ID":228,"HASH":"korenek","CELEJMENO":"Mgr. Petr Ko\u0159enek","OBVOD":77,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":229,"HASH":"bazalkova","CELEJMENO":"D\u00e1\u0161a Bazalkov\u00e1","OBVOD":77,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":230,"HASH":"vraj","CELEJMENO":"Ing. Radek Vraj","OBVOD":77,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"ID":231,"HASH":"henner","CELEJMENO":"Ing. Radek Henner","OBVOD":80,"OBHAJUJE":0,"STRANAJMENO":"Svoboda a p\u0159\u00edm\u00e1 demokracie - Tomio Okamura (SPD)"},{"WIN": 1, "SECOND": 1, "ID":232,"HASH":"kuncar","CELEJMENO":"Ing. Bc. Patrik Kun\u010dar","OBVOD":80,"OBHAJUJE":1,"STRANAJMENO":"K\u0159es\u0165an.a demokrat.unie-\u010ceskosl.strana lidov\u00e1"},{"SECOND": 1, "ID":233,"HASH":"lukas","CELEJMENO":"Libor Luk\u00e1\u0161","OBVOD":80,"OBHAJUJE":0,"STRANAJMENO":"Strana soukromn\u00edk\u016f \u010cesk\u00e9 republiky"},{"ID":234,"HASH":"jurencakova","CELEJMENO":"Ing. Jana Ju\u0159en\u010d\u00e1kov\u00e1","OBVOD":80,"OBHAJUJE":0,"STRANAJMENO":"REALIST\u00c9"},{"ID":235,"HASH":"jordak","CELEJMENO":"Ing. Franti\u0161ek Jord\u00e1k","OBVOD":80,"OBHAJUJE":0,"STRANAJMENO":"Komunistick\u00e1 strana \u010cech a Moravy"},{"ID":236,"HASH":"kovarikova","CELEJMENO":"Mgr. Milena Kova\u0159\u00edkov\u00e1","OBVOD":80,"OBHAJUJE":0,"STRANAJMENO":"\u010cesk\u00e1 strana soci\u00e1ln\u011b demokratick\u00e1"},{"ID":237,"HASH":"popelka","CELEJMENO":"doc. RSDr. Jan Popelka, CSc.","OBVOD":80,"OBHAJUJE":0,"STRANAJMENO":"Strana Pr\u00e1v Ob\u010dan\u016f ZEMANOVCI"}]}';
const LIST_REGIONS = '{"data":[{"ID":1,"OBVOD":1,"OBVOD_NAZEV":"Karlovy Vary","PORADI":2,"HASH":"1-karlovy-vary"},{"ID":2,"OBVOD":2,"OBVOD_NAZEV":"Sokolov","PORADI":4,"HASH":"2-sokolov"},{"ID":3,"OBVOD":3,"OBVOD_NAZEV":"Cheb","PORADI":6,"HASH":"3-cheb"},{"ID":4,"OBVOD":4,"OBVOD_NAZEV":"Most","PORADI":2,"HASH":"4-most"},{"ID":5,"OBVOD":5,"OBVOD_NAZEV":"Chomutov","PORADI":4,"HASH":"5-chomutov"},{"ID":6,"OBVOD":6,"OBVOD_NAZEV":"Louny","PORADI":6,"HASH":"6-louny"},{"ID":7,"OBVOD":7,"OBVOD_NAZEV":"Plze\u0148-m\u011bsto","PORADI":2,"HASH":"7-plzen-mesto"},{"ID":8,"OBVOD":8,"OBVOD_NAZEV":"Rokycany","PORADI":4,"HASH":"8-rokycany"},{"ID":9,"OBVOD":9,"OBVOD_NAZEV":"Plze\u0148-m\u011bsto","PORADI":6,"HASH":"9-plzen-mesto"},{"ID":10,"OBVOD":10,"OBVOD_NAZEV":"\u010cesk\u00fd Krumlov","PORADI":2,"HASH":"10-cesky-krumlov"},{"ID":11,"OBVOD":11,"OBVOD_NAZEV":"Doma\u017elice","PORADI":4,"HASH":"11-domazlice"},{"ID":12,"OBVOD":12,"OBVOD_NAZEV":"Strakonice","PORADI":6,"HASH":"12-strakonice"},{"ID":13,"OBVOD":13,"OBVOD_NAZEV":"T\u00e1bor","PORADI":2,"HASH":"13-tabor"},{"ID":14,"OBVOD":14,"OBVOD_NAZEV":"\u010cesk\u00e9 Bud\u011bjovice","PORADI":4,"HASH":"14-ceske-budejovice"},{"ID":15,"OBVOD":15,"OBVOD_NAZEV":"Pelh\u0159imov","PORADI":6,"HASH":"15-pelhrimov"},{"ID":16,"OBVOD":16,"OBVOD_NAZEV":"Beroun","PORADI":2,"HASH":"16-beroun"},{"ID":17,"OBVOD":17,"OBVOD_NAZEV":"Praha 12","PORADI":4,"HASH":"17-praha-12"},{"ID":18,"OBVOD":18,"OBVOD_NAZEV":"P\u0159\u00edbram","PORADI":6,"HASH":"18-pribram"},{"ID":19,"OBVOD":19,"OBVOD_NAZEV":"Praha 11","PORADI":2,"HASH":"19-praha-11"},{"ID":20,"OBVOD":20,"OBVOD_NAZEV":"Praha 4","PORADI":4,"HASH":"20-praha-4"},{"ID":21,"OBVOD":21,"OBVOD_NAZEV":"Praha 5","PORADI":6,"HASH":"21-praha-5"},{"ID":22,"OBVOD":22,"OBVOD_NAZEV":"Praha 10","PORADI":2,"HASH":"22-praha-10"},{"ID":23,"OBVOD":23,"OBVOD_NAZEV":"Praha 8","PORADI":4,"HASH":"23-praha-8"},{"ID":24,"OBVOD":24,"OBVOD_NAZEV":"Praha 9","PORADI":6,"HASH":"24-praha-9"},{"ID":25,"OBVOD":25,"OBVOD_NAZEV":"Praha 6","PORADI":2,"HASH":"25-praha-6"},{"ID":26,"OBVOD":26,"OBVOD_NAZEV":"Praha 2","PORADI":4,"HASH":"26-praha-2"},{"ID":27,"OBVOD":27,"OBVOD_NAZEV":"Praha 1","PORADI":6,"HASH":"27-praha-1"},{"ID":28,"OBVOD":28,"OBVOD_NAZEV":"M\u011bln\u00edk","PORADI":2,"HASH":"28-melnik"},{"ID":29,"OBVOD":29,"OBVOD_NAZEV":"Litom\u011b\u0159ice","PORADI":4,"HASH":"29-litomerice"},{"ID":30,"OBVOD":30,"OBVOD_NAZEV":"Kladno","PORADI":6,"HASH":"30-kladno"},{"ID":31,"OBVOD":31,"OBVOD_NAZEV":"\u00dast\u00ed nad Labem","PORADI":2,"HASH":"31-usti-nad-labem"},{"ID":32,"OBVOD":32,"OBVOD_NAZEV":"Teplice","PORADI":4,"HASH":"32-teplice"},{"ID":33,"OBVOD":33,"OBVOD_NAZEV":"D\u011b\u010d\u00edn","PORADI":6,"HASH":"33-decin"},{"ID":34,"OBVOD":34,"OBVOD_NAZEV":"Liberec","PORADI":2,"HASH":"34-liberec"},{"ID":35,"OBVOD":35,"OBVOD_NAZEV":"Jablonec nad Nisou","PORADI":4,"HASH":"35-jablonec-nad-nisou"},{"ID":36,"OBVOD":36,"OBVOD_NAZEV":"\u010cesk\u00e1 L\u00edpa","PORADI":6,"HASH":"36-ceska-lipa"},{"ID":37,"OBVOD":37,"OBVOD_NAZEV":"Ji\u010d\u00edn","PORADI":2,"HASH":"37-jicin"},{"ID":38,"OBVOD":38,"OBVOD_NAZEV":"Mlad\u00e1 Boleslav","PORADI":4,"HASH":"38-mlada-boleslav"},{"ID":39,"OBVOD":39,"OBVOD_NAZEV":"Trutnov","PORADI":6,"HASH":"39-trutnov"},{"ID":40,"OBVOD":40,"OBVOD_NAZEV":"Kutn\u00e1 Hora","PORADI":2,"HASH":"40-kutna-hora"},{"ID":41,"OBVOD":41,"OBVOD_NAZEV":"Bene\u0161ov","PORADI":4,"HASH":"41-benesov"},{"ID":42,"OBVOD":42,"OBVOD_NAZEV":"Kol\u00edn","PORADI":6,"HASH":"42-kolin"},{"ID":43,"OBVOD":43,"OBVOD_NAZEV":"Pardubice","PORADI":2,"HASH":"43-pardubice"},{"ID":44,"OBVOD":44,"OBVOD_NAZEV":"Chrudim","PORADI":4,"HASH":"44-chrudim"},{"ID":45,"OBVOD":45,"OBVOD_NAZEV":"Hradec Kr\u00e1lov\u00e9","PORADI":6,"HASH":"45-hradec-kralove"},{"ID":46,"OBVOD":46,"OBVOD_NAZEV":"\u00dast\u00ed nad Orlic\u00ed","PORADI":2,"HASH":"46-usti-nad-orlici"},{"ID":47,"OBVOD":47,"OBVOD_NAZEV":"N\u00e1chod","PORADI":4,"HASH":"47-nachod"},{"ID":48,"OBVOD":48,"OBVOD_NAZEV":"Rychnov nad Kn\u011b\u017enou","PORADI":6,"HASH":"48-rychnov-nad-kneznou"},{"ID":49,"OBVOD":49,"OBVOD_NAZEV":"Blansko","PORADI":2,"HASH":"49-blansko"},{"ID":50,"OBVOD":50,"OBVOD_NAZEV":"Svitavy","PORADI":4,"HASH":"50-svitavy"},{"ID":51,"OBVOD":51,"OBVOD_NAZEV":"\u017d\u010f\u00e1r nad S\u00e1zavou","PORADI":6,"HASH":"51-zdar-nad-sazavou"},{"ID":52,"OBVOD":52,"OBVOD_NAZEV":"Jihlava","PORADI":2,"HASH":"52-jihlava"},{"ID":53,"OBVOD":53,"OBVOD_NAZEV":"T\u0159eb\u00ed\u010d","PORADI":4,"HASH":"53-trebic"},{"ID":54,"OBVOD":54,"OBVOD_NAZEV":"Znojmo","PORADI":6,"HASH":"54-znojmo"},{"ID":55,"OBVOD":55,"OBVOD_NAZEV":"Brno-m\u011bsto","PORADI":2,"HASH":"55-brno-mesto"},{"ID":56,"OBVOD":56,"OBVOD_NAZEV":"B\u0159eclav","PORADI":4,"HASH":"56-breclav"},{"ID":57,"OBVOD":57,"OBVOD_NAZEV":"Vy\u0161kov","PORADI":6,"HASH":"57-vyskov"},{"ID":58,"OBVOD":58,"OBVOD_NAZEV":"Brno-m\u011bsto","PORADI":2,"HASH":"58-brno-mesto"},{"ID":59,"OBVOD":59,"OBVOD_NAZEV":"Brno-m\u011bsto","PORADI":4,"HASH":"59-brno-mesto"},{"ID":60,"OBVOD":60,"OBVOD_NAZEV":"Brno-m\u011bsto","PORADI":6,"HASH":"60-brno-mesto"},{"ID":61,"OBVOD":61,"OBVOD_NAZEV":"Olomouc","PORADI":2,"HASH":"61-olomouc"},{"ID":62,"OBVOD":62,"OBVOD_NAZEV":"Prost\u011bjov","PORADI":4,"HASH":"62-prostejov"},{"ID":63,"OBVOD":63,"OBVOD_NAZEV":"P\u0159erov","PORADI":6,"HASH":"63-prerov"},{"ID":64,"OBVOD":64,"OBVOD_NAZEV":"Brunt\u00e1l","PORADI":2,"HASH":"64-bruntal"},{"ID":65,"OBVOD":65,"OBVOD_NAZEV":"\u0160umperk","PORADI":4,"HASH":"65-sumperk"},{"ID":66,"OBVOD":66,"OBVOD_NAZEV":"Olomouc","PORADI":6,"HASH":"66-olomouc"},{"ID":67,"OBVOD":67,"OBVOD_NAZEV":"Nov\u00fd Ji\u010d\u00edn","PORADI":2,"HASH":"67-novy-jicin"},{"ID":68,"OBVOD":68,"OBVOD_NAZEV":"Opava","PORADI":4,"HASH":"68-opava"},{"ID":69,"OBVOD":69,"OBVOD_NAZEV":"Fr\u00fddek-M\u00edstek","PORADI":6,"HASH":"69-frydek-mistek"},{"ID":70,"OBVOD":70,"OBVOD_NAZEV":"Ostrava-m\u011bsto","PORADI":2,"HASH":"70-ostrava-mesto"},{"ID":71,"OBVOD":71,"OBVOD_NAZEV":"Ostrava-m\u011bsto","PORADI":4,"HASH":"71-ostrava-mesto"},{"ID":72,"OBVOD":72,"OBVOD_NAZEV":"Ostrava-m\u011bsto","PORADI":6,"HASH":"72-ostrava-mesto"},{"ID":73,"OBVOD":73,"OBVOD_NAZEV":"Fr\u00fddek-M\u00edstek","PORADI":2,"HASH":"73-frydek-mistek"},{"ID":74,"OBVOD":74,"OBVOD_NAZEV":"Karvin\u00e1","PORADI":4,"HASH":"74-karvina"},{"ID":75,"OBVOD":75,"OBVOD_NAZEV":"Karvin\u00e1","PORADI":6,"HASH":"75-karvina"},{"ID":76,"OBVOD":76,"OBVOD_NAZEV":"Krom\u011b\u0159\u00ed\u017e","PORADI":2,"HASH":"76-kromeriz"},{"ID":77,"OBVOD":77,"OBVOD_NAZEV":"Vset\u00edn","PORADI":4,"HASH":"77-vsetin"},{"ID":78,"OBVOD":78,"OBVOD_NAZEV":"Zl\u00edn","PORADI":6,"HASH":"78-zlin"},{"ID":79,"OBVOD":79,"OBVOD_NAZEV":"Hodon\u00edn","PORADI":2,"HASH":"79-hodonin"},{"ID":80,"OBVOD":80,"OBVOD_NAZEV":"Zl\u00edn","PORADI":4,"HASH":"80-zlin"},{"ID":81,"OBVOD":81,"OBVOD_NAZEV":"Uhersk\u00e9 Hradi\u0161t\u011b","PORADI":6,"HASH":"81-uherske-hradiste"}]}';

function sort (list, by) {
  return list.sort((a, b) => a[by].localeCompare(b[by], 'cs', {sensitivity: 'base'}));
}

function setCookie (cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

const state = {
  enum: [],
  search: '',
  results: [],
  programs: [],
  meta: [],
  poradi: 4,
  listOfCandidates: [],
  images: {
    loaded: false,
    data: []
  },
  votes: {
    hash: '',
    view: '',
    hashLoading: false,
    hashAnonymous: true,
    dataLoaded: false,
    dataLoading: false,
    voteLoading: false,
    data: [],
    modal: {
      show: false,
      vote: false,
      type: '',
      generate: null,
      load: null,
      error: '',
      candidate: null
    }
  },
  votesPreview: {
    view: '',
    data: []
  },
  votingEnabled: false,
  votingDisplay: false,
  selectedRegion: {
    data: null,
    count: null,
    countTips: 0,
    countVotes: 0,
    countTotal: 0,
    limit: 0,
    results: [],
    votes: [],
    tips: [],
    guess: []
  }
};

const getters = {
  vuexState: state => state
};

const mutations = {
  checkTime (state, payload) {
    state.votingEnabled = Math.floor(new Date().getTime() / 1000) < 1538431200; // 1538431200;
    state.votingDisplay = Math.floor(new Date().getTime() / 1000) > 1538827200; // 1538827200;

    if (state.votingEnabled === false) console.warn('Hlasování bylo ukončeno');
  },
  modal (state, payload) {
    state.votes.modal.show = payload.show || false;
    state.votes.modal.vote = payload.vote || false;
    state.votes.modal.candidate = payload.candidate || false;
    state.votes.modal.type = payload.type || 'tip';
    state.votes.modal.load = payload.load || null;
    state.votes.modal.generate = payload.generate || null;
    state.votes.modal.error = payload.error || '';
  },
  prepareCandidates (state) {

    state.listOfCandidates = [];

    var json = JSON.parse(LIST_CANDIDATES);
    json.data.forEach(item => state.listOfCandidates.push(item));
    state.listOfCandidates = sort(state.listOfCandidates, 'HASH');
  },
  prepareRegions (state) {

    state.enum = [];

    var json = JSON.parse(LIST_REGIONS);
    json.data.forEach(item => state.enum.push(item));
  },
  storeResults (state, payload) {
    state.results = [];

    payload.forEach(item => {
      state.results.push(item)
    });
  },
  storeMeta (state, payload) {
    state.meta = [];

    payload.forEach(item => state.meta.push(item));
  },
  storePrograms (state, payload) {
    state.programs = [];

    payload.forEach(item => state.programs.push(item));
  },
  storeImages (state, payload) {
    payload.forEach(item => state.images.data.push(item));

    state.images.loaded = true;
  },
  clearSearch (state) {
    state.search = '';
    state.results = [];
  },
  clearPrograms (state) {
    state.programs = [];
  },
  clearImages (state) {
    state.images.data = [];
  },
  setVoteHash (state, payload) {
    state.votes.hash = payload.hash;
    state.votes.view = payload.view;
    state.votes.hashLoading = false;
    state.votes.hashAnonymous = payload.hash.charAt(0) === 'A';
  },
  setVotes (state, payload) {
    state.votes.data = [];
    payload.forEach(item => state.votes.data.push(item));
    state.votes.dataLoading = false;
    state.votes.voteLoading = false;
    state.votes.dataLoaded = true;
  },
  modalError (state, payload) {
    state.votes.modal.error = payload;
    state.votes.dataLoading = false;
  },
  storeVotesPreview (state, payload) {
    state.votesPreview.data = [];
    state.votesPreview.view = payload.view;
    payload.list.forEach(item => state.votesPreview.data.push(item));
  },
  updateRegion (state, payload) {
    var region = state.enum.find(item => item.OBVOD === payload[0].OBVOD);

    region.link = payload[0].OBLAST_ODKAZ;
    region.description = payload[0].OBLAST;
    region.counted1 = payload[0].SECTENO1;
    region.counted2 = payload[0].SECTENO2;
  },
  updateRegionVotes (state, payload) {
    var region = state.enum.find(item => item.OBVOD === payload.OBVOD);

    region.voteCount = payload.POCET;

    state.selectedRegion.votes = payload.VOTES;
    state.selectedRegion.tips = payload.TIPS;
    state.selectedRegion.countTips = 0;
    state.selectedRegion.countVotes = 0;

    payload.TIPS.forEach(tip => {
      state.selectedRegion.countTips += tip.COUNT;
    });
    payload.VOTES.forEach(vote => {
      state.selectedRegion.countVotes += vote.COUNT;
    });

    state.selectedRegion.countTotal = state.selectedRegion.countTips + state.selectedRegion.countVotes;
    state.selectedRegion.count = state.selectedRegion.countTotal;
  },
}

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const actions = {
  ga (context, payload) {

    context.commit('checkTime');

    document.title = payload.title;

    if (window.gtag) {
      window.gtag('config', 'UA-4347750-18', {'page_path': payload.path, 'page_title': payload.title});
    } else {
      console.log('GA:', '/' + payload.path, ' : ', payload.title);
    }
  },
  fetchVotesPreview (context, payload) {

    axios.get('/', {
      params: {
        action: 'vote.preview',
        search: payload
      }
    }).then(response => {
      context.commit('storeVotesPreview', {
        list: response.data.list,
        view: payload
      })
    });
  },
  setHash (context, payload) {
    context.dispatch('fetchVotes', {hash: payload});
  },
  getHash (context, payload) {
    if (context.state.votes.hashLoading === true) return;
    context.state.votes.hashLoading = true;

    var params = {action: 'hash.generate'};

    if (payload && payload.id) {
      params.id = payload.id * 2 + 2;
      params.sm = payload.sm;
    }

    axios.get('/', {
      params: params
    }).then(response => {
      context.commit('setVoteHash', {
        hash: response.data.hash,
        view: response.data.view
      });
      setCookie('vote_hash', response.data.hash, 100);
      if (payload && payload.onComplete) payload.onComplete(response.data.hash);
    });
  },
  fetchVotes (context, payload) {
    if (context.state.votes.dataLoaded === true) return;
    if (context.state.votes.dataLoading === true) return;

    context.state.votes.dataLoading = true;

    axios.get('/', {
      params: {
        action: 'vote.fetch',
        search: payload.hash || context.state.votes.hash
      }
    }).then(response => {
      if (response.data.code === 200) {
        context.commit('setVoteHash', {
          hash: payload.hash || context.state.votes.hash,
          view: response.data.list[0].VIEW
        });
        context.commit('setVotes', response.data.list);
        setCookie('vote_hash', context.state.votes.hash, 100);
        if (payload && payload.onComplete) payload.onComplete(response.data.hash);
      } else {
        context.commit('modalError', response.data.message);
      }
    });
  },
  vote (context, payload) {
    if (context.state.votes.voteLoading === true) return;
    context.state.votes.voteLoading = true;

    axios.post('/?action=vote.add', JSON.stringify({
      hash: payload.hash,
      region: payload.region,
      candidate: payload.candidate,
      type: payload.type
    })).then(response => {
      context.commit('setVotes', response.data.list);
      if (payload.onComplete) payload.onComplete();
    });
  },
  fetchEnum (context) {
    context.commit('prepareCandidates');
    context.commit('prepareRegions');
  },
  search (context, payload) {

    var result = context.state.listOfCandidates.filter(item => item.CELEJMENO.toLowerCase().indexOf(payload) > -1);

    context.commit('storeResults', result);
    /**
    axios.get('/', {
      params: {action: 'location.enum', search: payload}
    }).then(response => {
      context.commit('storeResults', response.data.list);
    });
    */
  },
  fetchImages (context, payload) {

    context.commit('clearImages');

    axios.get('/', {
      params: {action: 'images.fetch'}
    }).then(response => {
      context.commit('storeImages', response.data.list);
      if (payload.onComplete) payload.onComplete();
    });
  },
  fetchDetail (context, payload) {

    context.commit('clearPrograms');

    axios.get('/', {
      params: {action: 'program.fetch', search: payload.id}
    }).then(response => {
      context.commit('storePrograms', response.data.list);
      context.commit('updateRegion', response.data.meta);
      context.commit('updateRegionVotes', response.data.votes);
      if (payload.onComplete) payload.onComplete();
    });
  },
  fetchDetailPriority (context, payload) {

    context.commit('clearPrograms');

    axios.get('/', {
      params: {action: 'program.detail', search: payload.id}
    }).then(response => {
      context.commit('storePrograms', response.data.list);
      // context.commit('storeMeta', response.data.meta);
      if (payload.onComplete) payload.onComplete();
    });
  },
  suggest (context, payload) {
    axios.post('/?action=program.add', JSON.stringify(payload).split('.').join('(DOT)'), config).then(response => {
      // console.log(response);
    });
  }
};

mutations.prepareCandidates(state);
mutations.prepareRegions(state);

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;

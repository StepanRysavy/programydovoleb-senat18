import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const LIST_CANDIDATES = '{"data":[{"ID":1,"JMENO":"Valjentov\u00e1","CELEJMENO":"Ing. Eva Valjentov\u00e1","OBVOD":2,"OBHAJUJE":0},{"ID":2,"JMENO":"Tepl\u00edk","CELEJMENO":"Jan Tepl\u00edk","OBVOD":2,"OBHAJUJE":0},{"ID":3,"JMENO":"Pochman","CELEJMENO":"Stanislav Pochman","OBVOD":2,"OBHAJUJE":0},{"ID":4,"JMENO":"Balatka","CELEJMENO":"Ing. Miroslav Balatka","OBVOD":2,"OBHAJUJE":0},{"ID":5,"JMENO":"Nimrichter","CELEJMENO":"Petr Nimrichter","OBVOD":2,"OBHAJUJE":0},{"ID":6,"JMENO":"Oulehlov\u00e1","CELEJMENO":"Renata Oulehlov\u00e1","OBVOD":2,"OBHAJUJE":0},{"ID":7,"JMENO":"Zickler","CELEJMENO":"Josef Zickler","OBVOD":2,"OBHAJUJE":0},{"ID":8,"JMENO":"Picka","CELEJMENO":"Bc. Jan Picka","OBVOD":2,"OBHAJUJE":0},{"ID":9,"JMENO":"Korbel","CELEJMENO":"Ji\u0159\u00ed Korbel","OBVOD":2,"OBHAJUJE":0},{"ID":10,"JMENO":"Chodack\u00e1","CELEJMENO":"MUDr. Martina Chodack\u00e1","OBVOD":5,"OBHAJUJE":0},{"ID":11,"JMENO":"Jano","CELEJMENO":"Petr Jano","OBVOD":5,"OBHAJUJE":0},{"ID":12,"JMENO":"Rabas","CELEJMENO":"MVDr. P\u0159emysl Rabas","OBVOD":5,"OBHAJUJE":0},{"ID":13,"JMENO":"Brand","CELEJMENO":"Ing. Roman Brand, MBA","OBVOD":5,"OBHAJUJE":0},{"ID":14,"JMENO":"Zahr\u00e1dka","CELEJMENO":"Mgr. Jaroslav Zahr\u00e1dka","OBVOD":5,"OBHAJUJE":0},{"ID":15,"JMENO":"Hahnov\u00e1","CELEJMENO":"Bc. Elv\u00edra Hahnov\u00e1","OBVOD":5,"OBHAJUJE":0},{"ID":16,"JMENO":"Homolka","CELEJMENO":"PaeDr. V\u00e1clav Homolka","OBVOD":5,"OBHAJUJE":1},{"ID":17,"JMENO":"Kr\u00e1kora","CELEJMENO":"MUDr. Jaroslav Kr\u00e1kora","OBVOD":5,"OBHAJUJE":0},{"ID":18,"JMENO":"Sta\u0148o","CELEJMENO":"MUDr. Ota Sta\u0148o","OBVOD":5,"OBHAJUJE":0},{"ID":19,"JMENO":"Ch\u00fdnovsk\u00fd","CELEJMENO":"Zden\u011bk Ch\u00fdnovsk\u00fd","OBVOD":8,"OBHAJUJE":0},{"ID":20,"JMENO":"Karp\u00ed\u0161ek","CELEJMENO":"Ing. Mgr. Pavel Karp\u00ed\u0161ek","OBVOD":8,"OBHAJUJE":0},{"ID":21,"JMENO":"Emmerov\u00e1","CELEJMENO":"Doc. MUDr. Milada Emmerov\u00e1, CSc.","OBVOD":8,"OBHAJUJE":1},{"ID":22,"JMENO":"Groene","CELEJMENO":"Lucie Groene","OBVOD":8,"OBHAJUJE":0},{"ID":23,"JMENO":"Redl","CELEJMENO":"Mgr. David Redl","OBVOD":8,"OBHAJUJE":0},{"ID":24,"JMENO":"Hess","CELEJMENO":"MUDr. Zden\u011bk Hess, Ph.D.","OBVOD":8,"OBHAJUJE":0},{"ID":25,"JMENO":"Uhl\u00ed\u0159","CELEJMENO":"Ing. Martin Uhl\u00ed\u0159, MBA","OBVOD":8,"OBHAJUJE":0},{"ID":26,"JMENO":"Drab\u00edk","CELEJMENO":"Michal Drab\u00edk","OBVOD":8,"OBHAJUJE":0},{"ID":27,"JMENO":"Vil\u00edmec","CELEJMENO":"Ing. Vladislav Vil\u00edmec","OBVOD":11,"OBHAJUJE":0},{"ID":28,"JMENO":"Krutina","CELEJMENO":"Ing. Viktor Krutina","OBVOD":11,"OBHAJUJE":0},{"ID":29,"JMENO":"L\u00e1tka","CELEJMENO":"Jan L\u00e1tka","OBVOD":11,"OBHAJUJE":1},{"ID":30,"JMENO":"Timura","CELEJMENO":"Mgr. Miroslav Timura","OBVOD":11,"OBHAJUJE":0},{"ID":31,"JMENO":"Obdr\u017e\u00e1lek","CELEJMENO":"Ing. Milan Obdr\u017e\u00e1lek","OBVOD":11,"OBHAJUJE":0},{"ID":32,"JMENO":"Vok\u00e1\u010d","CELEJMENO":"JUDr. Miroslav Vok\u00e1\u010d","OBVOD":11,"OBHAJUJE":0},{"ID":33,"JMENO":"\u0160varcbek","CELEJMENO":"RSDr. Josef \u0160varcbek","OBVOD":11,"OBHAJUJE":0},{"ID":34,"JMENO":"Janek","CELEJMENO":"MUDr. Michal Janek","OBVOD":11,"OBHAJUJE":0},{"ID":35,"JMENO":"Tamp\u00edr","CELEJMENO":"Ing. \u0160t\u011bp\u00e1n Tamp\u00edr","OBVOD":14,"OBHAJUJE":0},{"ID":36,"JMENO":"Faktor","CELEJMENO":"JUDr. Ladislav Faktor","OBVOD":14,"OBHAJUJE":0},{"ID":37,"JMENO":"Jakubcov\u00e1 S\u00fdkorov\u00e1","CELEJMENO":"MUDr. Blanka Jakubcov\u00e1 S\u00fdkorov\u00e1","OBVOD":14,"OBHAJUJE":0},{"ID":38,"JMENO":"P\u00e1na","CELEJMENO":"PhDr. Lubom\u00edr P\u00e1na, Ph.D., dr. h. c.","OBVOD":14,"OBHAJUJE":0},{"ID":39,"JMENO":"Proch\u00e1zka","CELEJMENO":"Ing. Miloslav Proch\u00e1zka, CSc.","OBVOD":14,"OBHAJUJE":0},{"ID":40,"JMENO":"\u0160est\u00e1k","CELEJMENO":"Ji\u0159\u00ed \u0160est\u00e1k, Ph.D.","OBVOD":14,"OBHAJUJE":1},{"ID":41,"JMENO":"Sch\u00f6tz","CELEJMENO":"Richard Sch\u00f6tz","OBVOD":14,"OBHAJUJE":0},{"ID":42,"JMENO":"Paukejov\u00e1","CELEJMENO":"Ing. Marie Paukejov\u00e1","OBVOD":14,"OBHAJUJE":0},{"ID":43,"JMENO":"David","CELEJMENO":"MUDr. Ivan David, CSc.","OBVOD":17,"OBHAJUJE":0},{"ID":44,"JMENO":"Nouza","CELEJMENO":"Ji\u0159\u00ed Nouza","OBVOD":17,"OBHAJUJE":0},{"ID":45,"JMENO":"Gerloch","CELEJMENO":"prof. JUDr. Ale\u0161 Gerloch, CSc.","OBVOD":17,"OBHAJUJE":0},{"ID":46,"JMENO":"Tylov\u00e1","CELEJMENO":"Ing. Eva Tylov\u00e1","OBVOD":17,"OBHAJUJE":0},{"ID":47,"JMENO":"Fischer","CELEJMENO":"Pavel Fischer","OBVOD":17,"OBHAJUJE":0},{"ID":48,"JMENO":"Piln\u00fd","CELEJMENO":"Ing. Ivan Piln\u00fd","OBVOD":17,"OBHAJUJE":0},{"ID":49,"JMENO":"Dob\u0161\u00edk","CELEJMENO":"Mgr. Franti\u0161ek Dob\u0161\u00edk","OBVOD":17,"OBHAJUJE":0},{"ID":50,"JMENO":"Semelov\u00e1","CELEJMENO":"Mgr. Marta Semelov\u00e1","OBVOD":17,"OBHAJUJE":0},{"ID":51,"JMENO":"Dvo\u0159\u00e1k","CELEJMENO":"Ing. Martin Dvo\u0159\u00e1k","OBVOD":20,"OBHAJUJE":0},{"ID":52,"JMENO":"Draho\u0161","CELEJMENO":"prof. Ing. Ji\u0159\u00ed Draho\u0161, DrSc.","OBVOD":20,"OBHAJUJE":0},{"ID":53,"JMENO":"Kuras","CELEJMENO":"Benjamin Miloslav Kuras","OBVOD":20,"OBHAJUJE":0},{"ID":54,"JMENO":"Sykov\u00e1","CELEJMENO":"prof. MUDr. Eva Sykov\u00e1, DrSc.","OBVOD":20,"OBHAJUJE":1},{"ID":55,"JMENO":"Skovajsov\u00e1","CELEJMENO":"MUDr. Miroslava Skovajsov\u00e1, PhD.","OBVOD":20,"OBHAJUJE":0},{"ID":56,"JMENO":"Skoupil","CELEJMENO":"Karel Skoupil","OBVOD":20,"OBHAJUJE":0},{"ID":57,"JMENO":"Maz\u00e1\u010d","CELEJMENO":"Mgr. Rudolf Karel Maz\u00e1\u010d","OBVOD":20,"OBHAJUJE":0},{"ID":58,"JMENO":"Kocman","CELEJMENO":"Ing. Ji\u0159\u00ed Kocman","OBVOD":20,"OBHAJUJE":0},{"ID":59,"JMENO":"Okamura","CELEJMENO":"Mgr. Hayato Okamura","OBVOD":23,"OBHAJUJE":0},{"ID":60,"JMENO":"Chovancov\u00e1","CELEJMENO":"JUDr. Marta Chovancov\u00e1","OBVOD":23,"OBHAJUJE":0},{"ID":61,"JMENO":"Dolej\u0161\u00ed","CELEJMENO":"Hana Dolej\u0161\u00ed","OBVOD":23,"OBHAJUJE":0},{"ID":62,"JMENO":"Nosek","CELEJMENO":"Josef Nosek","OBVOD":23,"OBHAJUJE":0},{"ID":63,"JMENO":"Kopal","CELEJMENO":"Vladislav Kopal","OBVOD":23,"OBHAJUJE":0},{"ID":64,"JMENO":"Doubek","CELEJMENO":"JUDr. Ji\u0159\u00ed Doubek","OBVOD":23,"OBHAJUJE":0},{"ID":65,"JMENO":"Witzany","CELEJMENO":"prof. RNDr. Ji\u0159\u00ed Witzany, Ph.D.","OBVOD":23,"OBHAJUJE":0},{"ID":66,"JMENO":"V\u00edtov\u00e1","CELEJMENO":"PhDr. Vladim\u00edra V\u00edtov\u00e1, Ph.D.","OBVOD":23,"OBHAJUJE":0},{"ID":67,"JMENO":"Mal\u00fd","CELEJMENO":"Michal Mal\u00fd","OBVOD":23,"OBHAJUJE":0},{"ID":68,"JMENO":"Golas","CELEJMENO":"JUDr. Milan Golas","OBVOD":23,"OBHAJUJE":0},{"ID":69,"JMENO":"Haramul","CELEJMENO":"Ing. Ji\u0159\u00ed Haramul","OBVOD":23,"OBHAJUJE":0},{"ID":70,"JMENO":"Wagenknecht","CELEJMENO":"Ing. Luk\u00e1\u0161 Wagenknecht","OBVOD":23,"OBHAJUJE":0},{"ID":71,"JMENO":"Hannig","CELEJMENO":"Mgr. Petr Hannig","OBVOD":23,"OBHAJUJE":0},{"ID":72,"JMENO":"Dungl","CELEJMENO":"prof. MUDr. Pavel Dungl, DrSc.","OBVOD":23,"OBHAJUJE":0},{"ID":73,"JMENO":"Petrus","CELEJMENO":"Roman Petrus","OBVOD":23,"OBHAJUJE":0},{"ID":74,"JMENO":"Kula","CELEJMENO":"genmjr. PhDr. Lud\u011bk Kula","OBVOD":23,"OBHAJUJE":0},{"ID":75,"JMENO":"Mich\u00e1lek","CELEJMENO":"Mgr. Libor Mich\u00e1lek, MPA","OBVOD":26,"OBHAJUJE":1},{"ID":76,"JMENO":"Hil\u0161er","CELEJMENO":"MUDr. Bc. Marek Hil\u0161er, Ph.D.","OBVOD":26,"OBHAJUJE":0},{"ID":77,"JMENO":"Jakl","CELEJMENO":"Ladislav Jakl","OBVOD":26,"OBHAJUJE":0},{"ID":78,"JMENO":"Srb","CELEJMENO":"V\u00e1clav Srb","OBVOD":26,"OBHAJUJE":0},{"ID":79,"JMENO":"Gabal","CELEJMENO":"Ivan Gabal","OBVOD":26,"OBHAJUJE":0},{"ID":80,"JMENO":"Kereke\u0161","CELEJMENO":"MUDr. Roman Kereke\u0161","OBVOD":26,"OBHAJUJE":0},{"ID":81,"JMENO":"Kratina","CELEJMENO":"Vladim\u00edr Kratina","OBVOD":26,"OBHAJUJE":0},{"ID":82,"JMENO":"Hujov\u00e1","CELEJMENO":"Ing. Vladislava Hujov\u00e1","OBVOD":26,"OBHAJUJE":0},{"ID":83,"JMENO":"Ro\u0161kot","CELEJMENO":"Ing. Vladim\u00edr Ro\u0161kot","OBVOD":26,"OBHAJUJE":0},{"ID":84,"JMENO":"Vondrou\u0161","CELEJMENO":"Jan Vondrou\u0161","OBVOD":29,"OBHAJUJE":0},{"ID":85,"JMENO":"\u0160enfeld","CELEJMENO":"Ing. Josef \u0160enfeld","OBVOD":29,"OBHAJUJE":0},{"ID":86,"JMENO":"Rath","CELEJMENO":"MUDr. David Rath","OBVOD":29,"OBHAJUJE":0},{"ID":87,"JMENO":"Jir\u00e1nek","CELEJMENO":"MUDr. Miroslav Jir\u00e1nek","OBVOD":29,"OBHAJUJE":0},{"ID":88,"JMENO":"Chlup\u00e1\u010d","CELEJMENO":"Mgr. Ladislav Chlup\u00e1\u010d","OBVOD":29,"OBHAJUJE":0},{"ID":89,"JMENO":"Novotn\u00fd","CELEJMENO":"Franti\u0161ek Novotn\u00fd","OBVOD":29,"OBHAJUJE":0},{"ID":90,"JMENO":"Uhl\u00edk","CELEJMENO":"Libor Uhl\u00edk","OBVOD":29,"OBHAJUJE":0},{"ID":91,"JMENO":"Dobe\u0161","CELEJMENO":"Mgr. Josef Dobe\u0161","OBVOD":29,"OBHAJUJE":0},{"ID":92,"JMENO":"\u0160t\u011brba","CELEJMENO":"MUDr. Ond\u0159ej \u0160t\u011brba","OBVOD":29,"OBHAJUJE":0},{"ID":93,"JMENO":"Z\u00edka","CELEJMENO":"Tom\u00e1\u0161 Z\u00edka","OBVOD":32,"OBHAJUJE":0},{"ID":94,"JMENO":"Holovsk\u00e1","CELEJMENO":"PhDr. Terezie Holovsk\u00e1","OBVOD":32,"OBHAJUJE":0},{"ID":95,"JMENO":"Vinick\u00fd","CELEJMENO":"Ivan Vinick\u00fd","OBVOD":32,"OBHAJUJE":0},{"ID":96,"JMENO":"Barta","CELEJMENO":"Josef Barta","OBVOD":32,"OBHAJUJE":0},{"ID":97,"JMENO":"Kubera","CELEJMENO":"Jaroslav Kubera","OBVOD":32,"OBHAJUJE":1},{"ID":98,"JMENO":"Zahradn\u00ed\u010dek","CELEJMENO":"Bc. Jan Zahradn\u00ed\u010dek","OBVOD":32,"OBHAJUJE":0},{"ID":99,"JMENO":"\u0160edlbauer","CELEJMENO":"Ing. Pavel \u0160edlbauer","OBVOD":32,"OBHAJUJE":0},{"ID":100,"JMENO":"Bergman","CELEJMENO":"RNDr. Zden\u011bk Bergman","OBVOD":32,"OBHAJUJE":0},{"ID":101,"JMENO":"Freimann","CELEJMENO":"PhDr. ThDr. Mgr. Eugen Sigismund Freimann, Ph.D., M.A.","OBVOD":32,"OBHAJUJE":0},{"ID":102,"JMENO":"Kalvov\u00e1","CELEJMENO":"Mgr. \u0160\u00e1rka Kalvov\u00e1","OBVOD":35,"OBHAJUJE":0},{"ID":103,"JMENO":"Tejmlov\u00e1","CELEJMENO":"Mgr. Michaela Tejmlov\u00e1, LL.M.","OBVOD":35,"OBHAJUJE":0},{"ID":104,"JMENO":"Zeman","CELEJMENO":"Jaroslav Zeman","OBVOD":35,"OBHAJUJE":1},{"ID":105,"JMENO":"\u0160varc","CELEJMENO":"Mgr. Michal \u0160varc","OBVOD":35,"OBHAJUJE":0},{"ID":106,"JMENO":"\u017dur","CELEJMENO":"Mgr. Pavel \u017dur","OBVOD":35,"OBHAJUJE":0},{"ID":107,"JMENO":"Chuchl\u00edk","CELEJMENO":"Josef Chuchl\u00edk","OBVOD":35,"OBHAJUJE":0},{"ID":108,"JMENO":"Berounsk\u00fd","CELEJMENO":"Jind\u0159ich Berounsk\u00fd","OBVOD":35,"OBHAJUJE":0},{"ID":109,"JMENO":"Weissov\u00e1","CELEJMENO":"Daniela Weissov\u00e1","OBVOD":38,"OBHAJUJE":0},{"ID":110,"JMENO":"Nwelati","CELEJMENO":"MUDr. Raduan Nwelati","OBVOD":38,"OBHAJUJE":0},{"ID":111,"JMENO":"Nos","CELEJMENO":"Josef Nos","OBVOD":38,"OBHAJUJE":0},{"ID":112,"JMENO":"Hor\u00e1k","CELEJMENO":"doc. MUDr. Ladislav Hor\u00e1k, DrSc.","OBVOD":38,"OBHAJUJE":0},{"ID":113,"JMENO":"M\u00fcller","CELEJMENO":"Ji\u0159\u00ed M\u00fcller","OBVOD":38,"OBHAJUJE":0},{"ID":114,"JMENO":"Jerm\u00e1\u0159","CELEJMENO":"RSDr. Josef Jerm\u00e1\u0159","OBVOD":38,"OBHAJUJE":0},{"ID":115,"JMENO":"Plch","CELEJMENO":"Miroslav Plch","OBVOD":38,"OBHAJUJE":0},{"ID":116,"JMENO":"\u0160veda","CELEJMENO":"Ing. Martin \u0160veda","OBVOD":41,"OBHAJUJE":0},{"ID":117,"JMENO":"\u0160vadlena","CELEJMENO":"Ing. Ji\u0159\u00ed \u0160vadlena","OBVOD":41,"OBHAJUJE":0},{"ID":118,"JMENO":"Radom\u011b\u0159sk\u00e1","CELEJMENO":"Mgr. Terezie Radom\u011b\u0159sk\u00e1","OBVOD":41,"OBHAJUJE":0},{"ID":119,"JMENO":"Koz\u00e1k","CELEJMENO":"Mgr. Ji\u0159\u00ed Koz\u00e1k","OBVOD":41,"OBHAJUJE":0},{"ID":120,"JMENO":"Borgu\u013ea","CELEJMENO":"Ing. Jan Borgu\u013ea","OBVOD":41,"OBHAJUJE":0},{"ID":121,"JMENO":"K\u0159e\u010dek","CELEJMENO":"Miroslav K\u0159e\u010dek","OBVOD":41,"OBHAJUJE":0},{"ID":122,"JMENO":"Cinka","CELEJMENO":"Mgr. Ivan Cinka","OBVOD":41,"OBHAJUJE":0},{"ID":123,"JMENO":"Hemer","CELEJMENO":"Mgr. Ale\u0161 Hemer","OBVOD":41,"OBHAJUJE":0},{"ID":124,"JMENO":"Hraba","CELEJMENO":"JUDr. Ing. Zden\u011bk Hraba, Ph.D.","OBVOD":41,"OBHAJUJE":0},{"ID":125,"JMENO":"Petr\u017e\u00edlek","CELEJMENO":"JUDr. Ing.(ekon.) Petr Petr\u017e\u00edlek, Ph.D.","OBVOD":41,"OBHAJUJE":0},{"ID":126,"JMENO":"Chalu\u0161","CELEJMENO":"Mgr. Petr Chalu\u0161","OBVOD":41,"OBHAJUJE":0},{"ID":127,"JMENO":"\u0160em\u00edk","CELEJMENO":"Ing. Roman \u0160em\u00edk","OBVOD":44,"OBHAJUJE":0},{"ID":128,"JMENO":"Kr\u010dil","CELEJMENO":"Miroslav Kr\u010dil","OBVOD":44,"OBHAJUJE":0},{"ID":129,"JMENO":"Svoboda","CELEJMENO":"MUDr. Pavel Svoboda","OBVOD":44,"OBHAJUJE":0},{"ID":130,"JMENO":"Dubsk\u00fd","CELEJMENO":"Tom\u00e1\u0161 Dubsk\u00fd","OBVOD":44,"OBHAJUJE":0},{"ID":131,"JMENO":"Nov\u00e1k","CELEJMENO":"Petr Nov\u00e1k","OBVOD":44,"OBHAJUJE":0},{"ID":132,"JMENO":"Herman","CELEJMENO":"Mgr. Daniel Herman","OBVOD":44,"OBHAJUJE":0},{"ID":133,"JMENO":"\u017d\u010f\u00e1rsk\u00fd","CELEJMENO":"Mgr. et RNDr. Emanuel \u017d\u010f\u00e1rsk\u00fd, CSc.","OBVOD":44,"OBHAJUJE":0},{"ID":134,"JMENO":"Hynek","CELEJMENO":"RNDr. Ji\u0159\u00ed Hynek","OBVOD":44,"OBHAJUJE":0},{"ID":135,"JMENO":"H\u00e1jek","CELEJMENO":"Jaroslav H\u00e1jek, DiS.","OBVOD":44,"OBHAJUJE":0},{"ID":136,"JMENO":"Bla\u0161ko","CELEJMENO":"Ing. Hynek Bla\u0161ko","OBVOD":44,"OBHAJUJE":0},{"ID":137,"JMENO":"Orgon\u00edkov\u00e1","CELEJMENO":"Ing. Lucie Orgon\u00edkov\u00e1","OBVOD":44,"OBHAJUJE":0},{"ID":138,"JMENO":"Martinec","CELEJMENO":"Vladim\u00edr Martinec","OBVOD":44,"OBHAJUJE":0},{"ID":139,"JMENO":"Tecl","CELEJMENO":"Mgr. Jan Tecl, MBA","OBVOD":44,"OBHAJUJE":0},{"ID":140,"JMENO":"Andrle Sylor","CELEJMENO":"PaedDr. et Mgr. Augustin Karel Andrle Sylor","OBVOD":44,"OBHAJUJE":0},{"ID":141,"JMENO":"Markov\u00e1","CELEJMENO":"Mgr. So\u0148a Markov\u00e1","OBVOD":47,"OBHAJUJE":0},{"ID":142,"JMENO":"B\u011blobr\u00e1dek","CELEJMENO":"MVDr. Pavel B\u011blobr\u00e1dek, Ph.D., MPA","OBVOD":47,"OBHAJUJE":0},{"ID":143,"JMENO":"Pajgerov\u00e1","CELEJMENO":"Andrea Pajgerov\u00e1","OBVOD":47,"OBHAJUJE":0},{"ID":144,"JMENO":"Koleta","CELEJMENO":"Petr Koleta","OBVOD":47,"OBHAJUJE":0},{"ID":145,"JMENO":"\u010cerv\u00ed\u010dek","CELEJMENO":"brig. gen. v.v. Mgr. Martin \u010cerv\u00ed\u010dek","OBVOD":47,"OBHAJUJE":0},{"ID":146,"JMENO":"Br\u00e1t","CELEJMENO":"Miroslav Br\u00e1t","OBVOD":47,"OBHAJUJE":0},{"ID":147,"JMENO":"Nov\u00e1k","CELEJMENO":"Jaroslav Nov\u00e1k","OBVOD":50,"OBHAJUJE":0},{"ID":148,"JMENO":"Fliedr","CELEJMENO":"Ing. Bohuslav Fliedr","OBVOD":50,"OBHAJUJE":0},{"ID":149,"JMENO":"Kr\u00e1tk\u00fd","CELEJMENO":"Ji\u0159\u00ed Kr\u00e1tk\u00fd","OBVOD":50,"OBHAJUJE":0},{"ID":150,"JMENO":"Hav\u00ed\u0159","CELEJMENO":"MUDr. Pavel Hav\u00ed\u0159","OBVOD":50,"OBHAJUJE":0},{"ID":151,"JMENO":"Andrle Sylor","CELEJMENO":"Mgr. Richard Andrle Sylor, MBA","OBVOD":50,"OBHAJUJE":0},{"ID":152,"JMENO":"\u0160af\u00e1\u0159","CELEJMENO":"MVDr. Miroslav \u0160af\u00e1\u0159","OBVOD":50,"OBHAJUJE":0},{"ID":153,"JMENO":"Korty\u0161","CELEJMENO":"Michal Korty\u0161","OBVOD":50,"OBHAJUJE":0},{"ID":154,"JMENO":"M\u0148uk","CELEJMENO":"Milan M\u0148uk","OBVOD":50,"OBHAJUJE":0},{"ID":155,"JMENO":"Krp\u00e1lek","CELEJMENO":"Ing. Josef Krp\u00e1lek","OBVOD":50,"OBHAJUJE":0},{"ID":156,"JMENO":"Z\u00edma","CELEJMENO":"Ing. Stanislav Z\u00edma","OBVOD":53,"OBHAJUJE":0},{"ID":157,"JMENO":"Kotek","CELEJMENO":"Prim. MUDr. Vladim\u00edr Kotek, Ph.D., MBA","OBVOD":53,"OBHAJUJE":0},{"ID":158,"JMENO":"Dobe\u0161ov\u00e1","CELEJMENO":"Nad\u011b\u017eda Dobe\u0161ov\u00e1","OBVOD":53,"OBHAJUJE":0},{"ID":159,"JMENO":"\u017d\u00e1kov\u00e1","CELEJMENO":"Hana \u017d\u00e1kov\u00e1","OBVOD":53,"OBHAJUJE":0},{"ID":160,"JMENO":"\u0160alomoun","CELEJMENO":"JUDr. MgA. Michal \u0160alomoun, Ph.D.","OBVOD":53,"OBHAJUJE":0},{"ID":161,"JMENO":"Dud\u00edkov\u00e1","CELEJMENO":"Mgr. Marie Dud\u00edkov\u00e1","OBVOD":53,"OBHAJUJE":0},{"ID":162,"JMENO":"Mich\u00e1lek","CELEJMENO":"JUDr. Miroslav Mich\u00e1lek, LL.M.","OBVOD":53,"OBHAJUJE":0},{"ID":163,"JMENO":"Nevoral","CELEJMENO":"Marek Nevoral","OBVOD":53,"OBHAJUJE":0},{"ID":164,"JMENO":"Paul","CELEJMENO":"JUDr. Petr Paul","OBVOD":53,"OBHAJUJE":0},{"ID":165,"JMENO":"Nov\u00e1k","CELEJMENO":"JUDr. Richard Nov\u00e1k","OBVOD":56,"OBHAJUJE":0},{"ID":166,"JMENO":"V\u00e1lka","CELEJMENO":"Ing. Jaroslav V\u00e1lka","OBVOD":56,"OBHAJUJE":0},{"ID":167,"JMENO":"\u0160togl","CELEJMENO":"Mgr. Karel \u0160togl","OBVOD":56,"OBHAJUJE":0},{"ID":168,"JMENO":"Zem\u00e1nek","CELEJMENO":"Mgr. Richard Zem\u00e1nek","OBVOD":56,"OBHAJUJE":0},{"ID":169,"JMENO":"Tesa\u0159\u00edk","CELEJMENO":"Ing. Zden\u011bk Tesa\u0159\u00edk","OBVOD":56,"OBHAJUJE":0},{"ID":170,"JMENO":"Ko\u0161tial","CELEJMENO":"Rostislav Ko\u0161tial","OBVOD":56,"OBHAJUJE":0},{"ID":171,"JMENO":"Nazar\u010duk","CELEJMENO":"Libor Nazar\u010duk","OBVOD":56,"OBHAJUJE":0},{"ID":172,"JMENO":"Schmeidler","CELEJMENO":"doc. Ing.arch. PhDr. Karel Schmeidler, CSc.","OBVOD":59,"OBHAJUJE":0},{"ID":173,"JMENO":"Ostr\u00fd","CELEJMENO":"Mgr. Jarom\u00edr Ostr\u00fd","OBVOD":59,"OBHAJUJE":0},{"ID":174,"JMENO":"Ducho\u0148","CELEJMENO":"Old\u0159ich Ducho\u0148","OBVOD":59,"OBHAJUJE":0},{"ID":175,"JMENO":"Tr\u010dala","CELEJMENO":"Pavel Tr\u010dala, MA","OBVOD":59,"OBHAJUJE":0},{"ID":176,"JMENO":"Bal\u00edk","CELEJMENO":"mjr. v. v. PhDr. Stanislav Bal\u00edk","OBVOD":59,"OBHAJUJE":0},{"ID":177,"JMENO":"Kov\u00e1\u010d","CELEJMENO":"Petr Kov\u00e1\u010d","OBVOD":59,"OBHAJUJE":0},{"ID":178,"JMENO":"\u0160pilar","CELEJMENO":"Mgr. Jan \u0160pilar","OBVOD":59,"OBHAJUJE":0},{"ID":179,"JMENO":"Adamec","CELEJMENO":"MgA. Emil Adamec","OBVOD":59,"OBHAJUJE":0},{"ID":180,"JMENO":"Zaj\u00edcov\u00e1","CELEJMENO":"Lucie Zaj\u00edcov\u00e1","OBVOD":59,"OBHAJUJE":0},{"ID":181,"JMENO":"Bek","CELEJMENO":"doc. PhDr. Mikul\u00e1\u0161 Bek, Ph.D.","OBVOD":59,"OBHAJUJE":0},{"ID":182,"JMENO":"Kosorin","CELEJMENO":"Bc. Pavel Kosorin","OBVOD":59,"OBHAJUJE":0},{"ID":183,"JMENO":"Sekaninov\u00e1","CELEJMENO":"Bo\u017eena Sekaninov\u00e1","OBVOD":62,"OBHAJUJE":1},{"ID":184,"JMENO":"Chal\u00e1nkov\u00e1","CELEJMENO":"MUDr. Jitka Chal\u00e1nkov\u00e1","OBVOD":62,"OBHAJUJE":0},{"ID":185,"JMENO":"Bla\u017ekov\u00e1","CELEJMENO":"Irena Bla\u017ekov\u00e1","OBVOD":62,"OBHAJUJE":0},{"ID":186,"JMENO":"Michek","CELEJMENO":"Mgr. Petr Michek","OBVOD":62,"OBHAJUJE":0},{"ID":187,"JMENO":"Dopita","CELEJMENO":"Ing. Pavel Dopita, LL.M., MBA","OBVOD":62,"OBHAJUJE":0},{"ID":188,"JMENO":"Krch\u0148av\u00fd","CELEJMENO":"PaedDr. Jan Krch\u0148av\u00fd","OBVOD":62,"OBHAJUJE":0},{"ID":189,"JMENO":"Makov\u00fd","CELEJMENO":"Pavel Makov\u00fd","OBVOD":62,"OBHAJUJE":0},{"ID":190,"JMENO":"Hala\u0161ov\u00e1","CELEJMENO":"Mgr. Dagmar Hala\u0161ov\u00e1","OBVOD":62,"OBHAJUJE":0},{"ID":191,"JMENO":"Obrtel","CELEJMENO":"pplk. v.z. MUDr. Marek Obrtel","OBVOD":62,"OBHAJUJE":0},{"ID":192,"JMENO":"Fidrmuc","CELEJMENO":"Mgr. Jaroslav Fidrmuc","OBVOD":62,"OBHAJUJE":0},{"ID":193,"JMENO":"B\u00f6hmov\u00e1","CELEJMENO":"Zuzana B\u00f6hmov\u00e1","OBVOD":62,"OBHAJUJE":0},{"ID":194,"JMENO":"Hauzner","CELEJMENO":"Ing. Tom\u00e1\u0161 Hauzner","OBVOD":65,"OBHAJUJE":0},{"ID":195,"JMENO":"\u0164ulp\u00edk","CELEJMENO":"Ing. Josef \u0164ulp\u00edk","OBVOD":65,"OBHAJUJE":0},{"ID":196,"JMENO":"Bro\u017e","CELEJMENO":"Mgr. Bc. Zden\u011bk Bro\u017e","OBVOD":65,"OBHAJUJE":1},{"ID":197,"JMENO":"Gawlas","CELEJMENO":"Ing. Roman Gawlas","OBVOD":65,"OBHAJUJE":0},{"ID":198,"JMENO":"Ad\u00e1mek","CELEJMENO":"Mgr. Miroslav Ad\u00e1mek","OBVOD":65,"OBHAJUJE":0},{"ID":199,"JMENO":"Rul\u00ed\u0161ek","CELEJMENO":"Ing. Vladislav Rul\u00ed\u0161ek","OBVOD":65,"OBHAJUJE":0},{"ID":200,"JMENO":"Galuszkov\u00e1","CELEJMENO":"MUDr. Dana Galuszkov\u00e1, Ph.D., MBA","OBVOD":65,"OBHAJUJE":0},{"ID":201,"JMENO":"V\u00edcha","CELEJMENO":"Josef V\u00edcha","OBVOD":68,"OBHAJUJE":0},{"ID":202,"JMENO":"Pavl\u00ed\u010dek","CELEJMENO":"Petr Pavl\u00ed\u010dek","OBVOD":68,"OBHAJUJE":0},{"ID":203,"JMENO":"B\u011brsk\u00fd","CELEJMENO":"MUDr. Kamil B\u011brsk\u00fd","OBVOD":68,"OBHAJUJE":0},{"ID":204,"JMENO":"Kupka","CELEJMENO":"Bc. Vlastimil Kupka","OBVOD":68,"OBHAJUJE":0},{"ID":205,"JMENO":"Tanc\u00edk","CELEJMENO":"Mgr. Vladim\u00edr Tanc\u00edk","OBVOD":68,"OBHAJUJE":0},{"ID":206,"JMENO":"Pavera","CELEJMENO":"Mgr. Herbert Pavera","OBVOD":68,"OBHAJUJE":0},{"ID":207,"JMENO":"Hor\u00e1kov\u00e1","CELEJMENO":"Mgr. Simona Hor\u00e1kov\u00e1","OBVOD":68,"OBHAJUJE":0},{"ID":208,"JMENO":"Valsamisov\u00e1","CELEJMENO":"Ing. Mgr. Pynelopi Valsamisov\u00e1","OBVOD":71,"OBHAJUJE":0},{"ID":209,"JMENO":"\u010c\u00edp","CELEJMENO":"Ing. Ren\u00e9 \u010c\u00edp","OBVOD":71,"OBHAJUJE":0},{"ID":210,"JMENO":"N\u011bme\u010dkov\u00e1 Crkvenja\u0161","CELEJMENO":"MUDr. Zdenka N\u011bme\u010dkov\u00e1 Crkvenja\u0161","OBVOD":71,"OBHAJUJE":0},{"ID":211,"JMENO":"\u0160t\u011bdro\u0148","CELEJMENO":"RNDr. Radoslav \u0160t\u011bdro\u0148","OBVOD":71,"OBHAJUJE":0},{"ID":212,"JMENO":"Sulovsk\u00fd","CELEJMENO":"Ing. Leopold Sulovsk\u00fd","OBVOD":71,"OBHAJUJE":1},{"ID":213,"JMENO":"Paroubek","CELEJMENO":"Ing. Ji\u0159\u00ed Paroubek","OBVOD":71,"OBHAJUJE":0},{"ID":214,"JMENO":"Gondek","CELEJMENO":"Ing. Ivo Gondek","OBVOD":71,"OBHAJUJE":0},{"ID":215,"JMENO":"Konvi\u010dka","CELEJMENO":"doc. Mgr. Martin Konvi\u010dka, Ph.D.","OBVOD":71,"OBHAJUJE":0},{"ID":216,"JMENO":"Tom\u00e1\u0161ek","CELEJMENO":"Mgr. Martin Tom\u00e1\u0161ek, Ph.D.","OBVOD":71,"OBHAJUJE":0},{"ID":217,"JMENO":"Hal\u00edkov\u00e1","CELEJMENO":"PaedDr. Milada Hal\u00edkov\u00e1","OBVOD":74,"OBHAJUJE":0},{"ID":218,"JMENO":"V\u00edcha","CELEJMENO":"Ing. Petr V\u00edcha","OBVOD":74,"OBHAJUJE":1},{"ID":219,"JMENO":"Sv\u011btni\u010dka","CELEJMENO":"Mgr. et Bc. Karel Sv\u011btni\u010dka","OBVOD":74,"OBHAJUJE":0},{"ID":220,"JMENO":"Karch","CELEJMENO":"MUDr. Du\u0161an Karch","OBVOD":74,"OBHAJUJE":0},{"ID":221,"JMENO":"Kabourkov\u00e1","CELEJMENO":"Ing. Mark\u00e9ta Kabourkov\u00e1","OBVOD":74,"OBHAJUJE":0},{"ID":222,"JMENO":"Mat\u011bj","CELEJMENO":"Ing. et Ing. Bc. Ji\u0159\u00ed Mat\u011bj, MBAce","OBVOD":74,"OBHAJUJE":0},{"ID":223,"JMENO":"Sitko","CELEJMENO":"Ing. Ladislav Sitko","OBVOD":74,"OBHAJUJE":0},{"ID":224,"JMENO":"Kufa","CELEJMENO":"MUDr. Bohdan Kufa","OBVOD":74,"OBHAJUJE":0},{"ID":225,"JMENO":"\u010cunek","CELEJMENO":"Ji\u0159\u00ed \u010cunek","OBVOD":77,"OBHAJUJE":1},{"ID":226,"JMENO":"Ko\u0148a\u0159\u00edk","CELEJMENO":"Miroslav Ko\u0148a\u0159\u00edk","OBVOD":77,"OBHAJUJE":0},{"ID":227,"JMENO":"Fojt\u00ed\u010dek","CELEJMENO":"Zbyn\u011bk Fojt\u00ed\u010dek","OBVOD":77,"OBHAJUJE":0},{"ID":228,"JMENO":"Ko\u0159enek","CELEJMENO":"Mgr. Petr Ko\u0159enek","OBVOD":77,"OBHAJUJE":0},{"ID":229,"JMENO":"Bazalkov\u00e1","CELEJMENO":"D\u00e1\u0161a Bazalkov\u00e1","OBVOD":77,"OBHAJUJE":0},{"ID":230,"JMENO":"Vraj","CELEJMENO":"Ing. Radek Vraj","OBVOD":77,"OBHAJUJE":0},{"ID":231,"JMENO":"Henner","CELEJMENO":"Ing. Radek Henner","OBVOD":80,"OBHAJUJE":0},{"ID":232,"JMENO":"Kun\u010dar","CELEJMENO":"Ing. Bc. Patrik Kun\u010dar","OBVOD":80,"OBHAJUJE":1},{"ID":233,"JMENO":"Luk\u00e1\u0161","CELEJMENO":"Libor Luk\u00e1\u0161","OBVOD":80,"OBHAJUJE":0},{"ID":234,"JMENO":"Ju\u0159en\u010d\u00e1kov\u00e1","CELEJMENO":"Ing. Jana Ju\u0159en\u010d\u00e1kov\u00e1","OBVOD":80,"OBHAJUJE":0},{"ID":235,"JMENO":"Jord\u00e1k","CELEJMENO":"Ing. Franti\u0161ek Jord\u00e1k","OBVOD":80,"OBHAJUJE":0},{"ID":236,"JMENO":"Kova\u0159\u00edkov\u00e1","CELEJMENO":"Mgr. Milena Kova\u0159\u00edkov\u00e1","OBVOD":80,"OBHAJUJE":0},{"ID":237,"JMENO":"Popelka","CELEJMENO":"doc. RSDr. Jan Popelka, CSc.","OBVOD":80,"OBHAJUJE":0}]}';
const LIST_REGIONS = '{"data":[{"ID":1,"OBVOD":1,"OBVOD_NAZEV":"Karlovy Vary","OKRES":4102,"PORADI":2},{"ID":2,"OBVOD":2,"OBVOD_NAZEV":"Sokolov","OKRES":4103,"PORADI":4},{"ID":3,"OBVOD":3,"OBVOD_NAZEV":"Cheb","OKRES":4101,"PORADI":6},{"ID":4,"OBVOD":4,"OBVOD_NAZEV":"Most","OKRES":4205,"PORADI":2},{"ID":5,"OBVOD":5,"OBVOD_NAZEV":"Chomutov","OKRES":4202,"PORADI":4},{"ID":6,"OBVOD":6,"OBVOD_NAZEV":"Louny","OKRES":4204,"PORADI":6},{"ID":7,"OBVOD":7,"OBVOD_NAZEV":"Plze\u0148-m\u011bsto","OKRES":3203,"PORADI":2},{"ID":8,"OBVOD":8,"OBVOD_NAZEV":"Rokycany","OKRES":3206,"PORADI":4},{"ID":9,"OBVOD":9,"OBVOD_NAZEV":"Plze\u0148-m\u011bsto","OKRES":3203,"PORADI":6},{"ID":10,"OBVOD":10,"OBVOD_NAZEV":"\u010cesk\u00fd Krumlov","OKRES":3102,"PORADI":2},{"ID":11,"OBVOD":11,"OBVOD_NAZEV":"Doma\u017elice","OKRES":3201,"PORADI":4},{"ID":12,"OBVOD":12,"OBVOD_NAZEV":"Strakonice","OKRES":3106,"PORADI":6},{"ID":13,"OBVOD":13,"OBVOD_NAZEV":"T\u00e1bor","OKRES":3107,"PORADI":2},{"ID":14,"OBVOD":14,"OBVOD_NAZEV":"\u010cesk\u00e9 Bud\u011bjovice","OKRES":3101,"PORADI":4},{"ID":15,"OBVOD":15,"OBVOD_NAZEV":"Pelh\u0159imov","OKRES":6103,"PORADI":6},{"ID":16,"OBVOD":16,"OBVOD_NAZEV":"Beroun","OKRES":2102,"PORADI":2},{"ID":17,"OBVOD":17,"OBVOD_NAZEV":"Praha 12","OKRES":1112,"PORADI":4},{"ID":18,"OBVOD":18,"OBVOD_NAZEV":"P\u0159\u00edbram","OKRES":2111,"PORADI":6},{"ID":19,"OBVOD":19,"OBVOD_NAZEV":"Praha 11","OKRES":1100,"PORADI":2},{"ID":20,"OBVOD":20,"OBVOD_NAZEV":"Praha 4","OKRES":1104,"PORADI":4},{"ID":21,"OBVOD":21,"OBVOD_NAZEV":"Praha 5","OKRES":1100,"PORADI":6},{"ID":22,"OBVOD":22,"OBVOD_NAZEV":"Praha 10","OKRES":1100,"PORADI":2},{"ID":23,"OBVOD":23,"OBVOD_NAZEV":"Praha 8","OKRES":1108,"PORADI":4},{"ID":24,"OBVOD":24,"OBVOD_NAZEV":"Praha 9","OKRES":1100,"PORADI":6},{"ID":25,"OBVOD":25,"OBVOD_NAZEV":"Praha 6","OKRES":1100,"PORADI":2},{"ID":26,"OBVOD":26,"OBVOD_NAZEV":"Praha 2","OKRES":1102,"PORADI":4},{"ID":27,"OBVOD":27,"OBVOD_NAZEV":"Praha 1","OKRES":1100,"PORADI":6},{"ID":28,"OBVOD":28,"OBVOD_NAZEV":"M\u011bln\u00edk","OKRES":2106,"PORADI":2},{"ID":29,"OBVOD":29,"OBVOD_NAZEV":"Litom\u011b\u0159ice","OKRES":4203,"PORADI":4},{"ID":30,"OBVOD":30,"OBVOD_NAZEV":"Kladno","OKRES":2103,"PORADI":6},{"ID":31,"OBVOD":31,"OBVOD_NAZEV":"\u00dast\u00ed nad Labem","OKRES":4207,"PORADI":2},{"ID":32,"OBVOD":32,"OBVOD_NAZEV":"Teplice","OKRES":4206,"PORADI":4},{"ID":33,"OBVOD":33,"OBVOD_NAZEV":"D\u011b\u010d\u00edn","OKRES":4201,"PORADI":6},{"ID":34,"OBVOD":34,"OBVOD_NAZEV":"Liberec","OKRES":5103,"PORADI":2},{"ID":35,"OBVOD":35,"OBVOD_NAZEV":"Jablonec nad Nisou","OKRES":5102,"PORADI":4},{"ID":36,"OBVOD":36,"OBVOD_NAZEV":"\u010cesk\u00e1 L\u00edpa","OKRES":5101,"PORADI":6},{"ID":37,"OBVOD":37,"OBVOD_NAZEV":"Ji\u010d\u00edn","OKRES":5202,"PORADI":2},{"ID":38,"OBVOD":38,"OBVOD_NAZEV":"Mlad\u00e1 Boleslav","OKRES":2107,"PORADI":4},{"ID":39,"OBVOD":39,"OBVOD_NAZEV":"Trutnov","OKRES":5205,"PORADI":6},{"ID":40,"OBVOD":40,"OBVOD_NAZEV":"Kutn\u00e1 Hora","OKRES":2105,"PORADI":2},{"ID":41,"OBVOD":41,"OBVOD_NAZEV":"Bene\u0161ov","OKRES":2101,"PORADI":4},{"ID":42,"OBVOD":42,"OBVOD_NAZEV":"Kol\u00edn","OKRES":2104,"PORADI":6},{"ID":43,"OBVOD":43,"OBVOD_NAZEV":"Pardubice","OKRES":5302,"PORADI":2},{"ID":44,"OBVOD":44,"OBVOD_NAZEV":"Chrudim","OKRES":5301,"PORADI":4},{"ID":45,"OBVOD":45,"OBVOD_NAZEV":"Hradec Kr\u00e1lov\u00e9","OKRES":5201,"PORADI":6},{"ID":46,"OBVOD":46,"OBVOD_NAZEV":"\u00dast\u00ed nad Orlic\u00ed","OKRES":5304,"PORADI":2},{"ID":47,"OBVOD":47,"OBVOD_NAZEV":"N\u00e1chod","OKRES":5203,"PORADI":4},{"ID":48,"OBVOD":48,"OBVOD_NAZEV":"Rychnov nad Kn\u011b\u017enou","OKRES":5204,"PORADI":6},{"ID":49,"OBVOD":49,"OBVOD_NAZEV":"Blansko","OKRES":6201,"PORADI":2},{"ID":50,"OBVOD":50,"OBVOD_NAZEV":"Svitavy","OKRES":5303,"PORADI":4},{"ID":51,"OBVOD":51,"OBVOD_NAZEV":"\u017d\u010f\u00e1r nad S\u00e1zavou","OKRES":6105,"PORADI":6},{"ID":52,"OBVOD":52,"OBVOD_NAZEV":"Jihlava","OKRES":6102,"PORADI":2},{"ID":53,"OBVOD":53,"OBVOD_NAZEV":"T\u0159eb\u00ed\u010d","OKRES":6104,"PORADI":4},{"ID":54,"OBVOD":54,"OBVOD_NAZEV":"Znojmo","OKRES":6207,"PORADI":6},{"ID":55,"OBVOD":55,"OBVOD_NAZEV":"Brno-m\u011bsto","OKRES":6202,"PORADI":2},{"ID":56,"OBVOD":56,"OBVOD_NAZEV":"B\u0159eclav","OKRES":6204,"PORADI":4},{"ID":57,"OBVOD":57,"OBVOD_NAZEV":"Vy\u0161kov","OKRES":6206,"PORADI":6},{"ID":58,"OBVOD":58,"OBVOD_NAZEV":"Brno-m\u011bsto","OKRES":6202,"PORADI":2},{"ID":59,"OBVOD":59,"OBVOD_NAZEV":"Brno-m\u011bsto","OKRES":6202,"PORADI":4},{"ID":60,"OBVOD":60,"OBVOD_NAZEV":"Brno-m\u011bsto","OKRES":6202,"PORADI":6},{"ID":61,"OBVOD":61,"OBVOD_NAZEV":"Olomouc","OKRES":7102,"PORADI":2},{"ID":62,"OBVOD":62,"OBVOD_NAZEV":"Prost\u011bjov","OKRES":7103,"PORADI":4},{"ID":63,"OBVOD":63,"OBVOD_NAZEV":"P\u0159erov","OKRES":7104,"PORADI":6},{"ID":64,"OBVOD":64,"OBVOD_NAZEV":"Brunt\u00e1l","OKRES":8101,"PORADI":2},{"ID":65,"OBVOD":65,"OBVOD_NAZEV":"\u0160umperk","OKRES":7105,"PORADI":4},{"ID":66,"OBVOD":66,"OBVOD_NAZEV":"Olomouc","OKRES":7102,"PORADI":6},{"ID":67,"OBVOD":67,"OBVOD_NAZEV":"Nov\u00fd Ji\u010d\u00edn","OKRES":8104,"PORADI":2},{"ID":68,"OBVOD":68,"OBVOD_NAZEV":"Opava","OKRES":8105,"PORADI":4},{"ID":69,"OBVOD":69,"OBVOD_NAZEV":"Fr\u00fddek-M\u00edstek","OKRES":8102,"PORADI":6},{"ID":70,"OBVOD":70,"OBVOD_NAZEV":"Ostrava-m\u011bsto","OKRES":8106,"PORADI":2},{"ID":71,"OBVOD":71,"OBVOD_NAZEV":"Ostrava-m\u011bsto","OKRES":8106,"PORADI":4},{"ID":72,"OBVOD":72,"OBVOD_NAZEV":"Ostrava-m\u011bsto","OKRES":8106,"PORADI":6},{"ID":73,"OBVOD":73,"OBVOD_NAZEV":"Fr\u00fddek-M\u00edstek","OKRES":8102,"PORADI":2},{"ID":74,"OBVOD":74,"OBVOD_NAZEV":"Karvin\u00e1","OKRES":8103,"PORADI":4},{"ID":75,"OBVOD":75,"OBVOD_NAZEV":"Karvin\u00e1","OKRES":8103,"PORADI":6},{"ID":76,"OBVOD":76,"OBVOD_NAZEV":"Krom\u011b\u0159\u00ed\u017e","OKRES":7201,"PORADI":2},{"ID":77,"OBVOD":77,"OBVOD_NAZEV":"Vset\u00edn","OKRES":7203,"PORADI":4},{"ID":78,"OBVOD":78,"OBVOD_NAZEV":"Zl\u00edn","OKRES":7204,"PORADI":6},{"ID":79,"OBVOD":79,"OBVOD_NAZEV":"Hodon\u00edn","OKRES":6205,"PORADI":2},{"ID":80,"OBVOD":80,"OBVOD_NAZEV":"Zl\u00edn","OKRES":7204,"PORADI":4},{"ID":81,"OBVOD":81,"OBVOD_NAZEV":"Uhersk\u00e9 Hradi\u0161t\u011b","OKRES":7202,"PORADI":6}]}';

function sort (list, by) {
  return list.sort((a, b) => a[by].localeCompare(b[by], 'cs', {sensitivity: 'base'}));
}

const state = {
  enum: [],
  search: '',
  results: [],
  programs: [],
  meta: [],
  poradi: 4,
  listOfCandidates: []
};

const getters = {
  vuexState: state => state
};

const mutations = {
  prepareCandidates (state) {

    state.listOfCandidates = [];

    var json = JSON.parse(LIST_CANDIDATES);
    json.data.forEach(item => state.listOfCandidates.push(item));
    state.listOfCandidates = sort(state.listOfCandidates, 'JMENO');
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
  clearSearch (state) {
    state.search = '';
    state.results = [];
  },
  clearPrograms (state) {
    state.programs = [];
  }
}

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const actions = {
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
  fetchDetail (context, payload) {

    context.commit('clearPrograms');

    axios.get('/', {
      params: {action: 'program.fetch', search: payload.id}
    }).then(response => {
      context.commit('storePrograms', response.data.list);
      // context.commit('storeMeta', response.data.meta);
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

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
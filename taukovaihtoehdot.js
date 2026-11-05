// Uusien taukojen päävaiheet, ryhmiteltyinä tilanteen ja tavoitteen mukaan.
const lisatauot = {
  lapset: {
    liike: [
      "Piirrä polvilla pieniä ympyröitä istuen",
      "Matki pingviinin pieniä askelia tai heilu pingviininä istuen",
      "Nosta vuorotellen kädet kuin kurkottaisit tähtiä",
      "Keksi kolme tapaa tervehtiä avaruusolentoa pelkillä liikkeillä",
      "Liikuta sormia kuin soittaisit jättimäistä pianoa",
      "Kulje hitain askelin kuin olisit kuun pinnalla tai marssi istuen",
      "Kurkota vuorotellen eri suuntiin kuin poimisit mielikuvitusomenoita",
      "Pyöritä käsiä varovasti kuin vispaisit suurta taikinaa"
    ],
    rauha: [
      "Kuvittele lempipaikkasi ja mieti, mitä siellä näkyy ja kuuluu",
      "Laske rauhassa, montako pyöreää esinettä näet",
      "Valitse pieni esine ja tutki sen värejä ja muotoa",
      "Kuvittele, että katselet lumihiutaleita ikkunasta",
      "Tunnustele sormenpäillä, miltä oma hihasi tuntuu",
      "Keksi mielessäsi nimi kolmelle kuvitteelliselle tähdelle",
      "Kuvittele pieni vene ja seuraa sen matkaa mielessäsi",
      "Piirrä sormella omaan kämmeneesi hitaita kuvioita"
    ]
  },
  nuoret: {
    liike: [
      "Kokeile, saatko kädet ja jalat liikkumaan kahdessa eri rytmissä",
      "Keksi kolme liikettä, jotka sopisivat hahmollesi pelissä",
      "Kävele tai rullaa tilassa ja vaihda tahtia muutaman kerran",
      "Liikuta käsiäsi kuin johtaisit suosikkibiisisi orkesteria",
      "Tee rauhallisia sivuaskelia tai siirrä painoa istuen puolelta toiselle",
      "Keksi lyhyt liikesarja käyttäen vain kyynärpäitä ja hartioita",
      "Tee kuvitteellisia koripallosyöttöjä rauhallisesti eri suuntiin",
      "Nosta vuorotellen kantapäitä ja varpaita omassa rytmissäsi"
    ],
    rauha: [
      "Kuvittele rauhallinen maisema ja lisää siihen yksi yksityiskohta kerrallaan",
      "Valitse yksi esine ja tutki, miten valo osuu siihen",
      "Piirrä sormella hitaasti spiraalia paperille tai kämmeneen",
      "Huomaa kolme väriä ympärilläsi ja etsi niille mahdollisimman tarkat nimet",
      "Kuuntele ympäristöä ja erottele tasaiset äänet lyhyistä äänistä",
      "Keksi mielessäsi kuvitteellisen levyn kansikuva",
      "Anna katseen levätä ikkunan ulkopuolella ja seuraa, mikä liikkuu",
      "Kirjoita tai mieti kolme sanaa, jotka kuvaavat tätä hetkeä"
    ]
  },
  aikuiset: {
    liike: [
      "Ojenna vuorotellen polvia istuen ja laske jalat rauhallisesti takaisin",
      "Liikuta hartioita ylös ja alas, ja anna niiden levätä liikkeiden välissä",
      "Kävele tai rullaa tuttu reitti tavallista rauhallisemmin",
      "Nosta kantapäitä ja varpaita vuorotellen istuen tai seisten",
      "Liikuta ranteita ja avaa sormet rauhallisesti eri suuntiin",
      "Käännä ylävartaloa kevyesti puolelta toiselle omalla liikeradallasi",
      "Piirrä kyynärpäillä pieniä ympyröitä eteen ja taakse",
      "Vaihda asentoa ja askella tai marssi istuen rauhallisessa tahdissa"
    ],
    rauha: [
      "Pidä vesilasia käsissä ja huomaa lasin lämpö ja paino",
      "Kuvittele paikka, jossa olet viihtynyt, ja palauta mieleen sen äänet",
      "Valitse ympäristöstä pieni yksityiskohta ja katsele sen muotoa rauhassa",
      "Anna katseen kulkea hitaasti kolmessa eri etäisyydellä olevassa kohteessa",
      "Kuuntele, mitkä äänet toistuvat ja mitkä kuuluvat vain kerran",
      "Lepuuta käsiä tuettuina ja huomaa, miltä niiden paino tuntuu",
      "Kirjoita yksi mieleen jäänyt asia muistiin ja laske kynä hetkeksi",
      "Katso, miten valo ja varjot asettuvat ympärillesi"
    ]
  },
  tietokone: {
    liike: [
      "Tee sormilla kevyitä pianoliikkeitä kädet irti näppäimistöstä",
      "Käänny poispäin näytöstä ja ojenna kädet vuorotellen sivuille",
      "Piirrä ranteilla pieniä ympyröitä ja ravistele käsiä välillä",
      "Kävele tai rullaa ikkunan luo ja takaisin omaan tahtiisi",
      "Vaihda istuma-asentoa ja nosta kyynärpäitä kevyesti vuorotellen",
      "Laske hiiri sivuun ja kosketa peukalolla vuorotellen jokaista sormea",
      "Nosta ja laske kantapäitä vuorotellen näytöstä poispäin",
      "Askella rauhallisesti työpisteen vieressä tai marssi istuen"
    ],
    rauha: [
      "Siirrä katse näytöstä ja huomaa kolme kaukana olevaa yksityiskohtaa",
      "Sulje työikkunat hetkeksi ja kuuntele, mitä ääniä tilassa kuuluu",
      "Pidä kädet irti hiirestä ja tunnustele rauhassa tuolin tukea",
      "Kirjoita paperille, mihin palaat tauon jälkeen, ja laske kynä",
      "Seuraa ikkunasta pilviä tai katsele valon osumista seinään",
      "Lepuuta katsetta huoneen kauimmaisessa nurkassa ja anna hartioiden laskeutua",
      "Ota vesilasi ja huomaa rauhassa veden lämpö ja maku",
      "Käännä näyttö sivuun ja katsele hetki yhtä esinettä, jonka pinnassa on kiinnostava kuvio"
    ]
  },
  fyysinen: {
    liike: [
      "Laske työvälineet ja liikuttele sormia ilman puristusotetta",
      "Istu hetkeksi ja piirrä nilkoilla rauhallisia ympyröitä",
      "Nosta hartioita kevyesti ja anna niiden laskeutua liikkeiden välissä",
      "Istu tuettuna ja ojenna polvia vuorotellen",
      "Liikuta kyynärpäitä rauhallisesti eteen ja takaisin",
      "Avaa ja sulje kädet hitaasti ilman voimakasta puristusta",
      "Siirrä painoa rauhallisesti istuen tai seisten tuen lähellä",
      "Kävele rauhallinen lyhyt kierros tasaisella alustalla tai liikuttele jalkoja istuen"
    ],
    rauha: [
      "Lepuuta kyynärvarsia reisillä ja anna sormien rentoutua",
      "Istu tuettuna ja huomaa, miltä lattia tuntuu jalkojen alla",
      "Ota vettä ja juo muutama kulaus omaan tahtiisi",
      "Katsele ympäristöä rauhassa paikassa, jossa voit levätä",
      "Vaihda mukavaan asentoon ja kuuntele hetki tasaisinta ympäristön ääntä",
      "Anna käden levätä avoimena ja huomaa, miltä alusta tuntuu",
      "Lepuuta katsetta yhdessä kaukaisessa kohteessa samalla kun istut",
      "Istu hetkeksi ja anna hengityksen jatkua omaan tahtiinsa"
    ]
  },
  istuma: {
    liike: [
      "Nosta vuorotellen polvia istuen tai marssi paikallasi seisten",
      "Ojenna jalkoja vuorotellen ja palauta ne rauhallisesti lattialle",
      "Nouse halutessasi ja ota rauhallisia sivuaskelia tai siirrä painoa istuen",
      "Pyöritä hartioita rauhallisesti molempiin suuntiin",
      "Kurkota vuorotellen kohti eri huoneen nurkkia omalla liikeradallasi",
      "Naputa jalkapohjilla vuorotellen kevyttä rytmiä",
      "Käännä ylävartaloa rauhassa puolelta toiselle",
      "Kävele tai rullaa huoneen poikki ja pysähdy välillä vaihtamaan asentoa"
    ],
    rauha: [
      "Siirry halutessasi eri istumapaikalle ja huomaa, miltä uusi tuki tuntuu",
      "Valitse mukava asento ja katsele huoneen varjoja rauhassa",
      "Anna käsien levätä sylissä ja kuuntele yhtä tasaista ääntä",
      "Lepuuta katsetta ikkunassa tai kaukaisessa seinässä",
      "Huomaa, missä kohdissa tuoli tukee selkääsi ja jalkojasi",
      "Siirrä jalkoja hieman ja tunnustele, missä asennossa ne lepäävät mukavasti",
      "Istu tai seiso hetki rauhassa ja huomaa, miten valo muuttuu ympärilläsi",
      "Pidä vesilasia käsissä ja huomaa, miltä se tuntuu sormissa"
    ]
  },
  koti: {
    liike: [
      "Keksi lyhyt tanssi, jossa käytät vuorotellen hartioita ja käsiä",
      "Kävele tai rullaa rauhallisesti huoneen ympäri ja vaihda suuntaa kerran",
      "Tee käsillä hitaita kaaria kuin maalaisit seinälle sateenkaaren",
      "Keksi kevyt askelrytmi, jonka voit tehdä myös istuen",
      "Liikuta vuorotellen kyynärpäitä sivuille ja takaisin",
      "Kurkota hitaasti kuin poimisit jotain eri korkeuksilta",
      "Ravistele käsiä kevyesti ja avaa sormet leveiksi",
      "Keksi kaksi liikettä ja vaihda niiden välillä oman rytmisi mukaan"
    ],
    rauha: [
      "Katsele ikkunasta ja etsi kolme yksityiskohtaa, joita et tavallisesti huomaa",
      "Tunnustele mukavan tekstiilin pintaa sormenpäillä",
      "Valitse kodista mieluisa esine ja huomaa sen muodot ja värit",
      "Juo vettä rauhassa ja huomaa lasin lämpö ja paino",
      "Istahda mukavaan paikkaan ja kuuntele lähintä ja kaukaisinta ääntä",
      "Kuvittele mieluisa muisto tästä kodista ja palauta mieleen yksi yksityiskohta",
      "Lepuuta katsetta paikassa, jossa näkyy valoa ja varjoa",
      "Piirrä rauhassa paperille tai ilmaan toistuvaa aaltokuviota"
    ]
  },
  koulu: {
    liike: [
      "Taputa polviin vuorotellen ja keksi vähitellen uusi rytmi",
      "Piirrä käsillä ilmaan suuria kirjaimia tai numeroita",
      "Marssi istuen tai seisten ja muuta tahtia muutaman kerran",
      "Keksi hiljainen kolmen liikkeen sarja käsille ja hartioille",
      "Pyöräytä hartioita hitaasti ja ojenna kädet vuorotellen eteen",
      "Kävele tai rullaa lyhyt kierros, jos tilassa on siihen mahdollisuus",
      "Nosta ja laske kantapäitä vuorotellen ja keksi jaloille oma rytmi",
      "Matki käsillä hidastettua aallokkoa ja vaihda aallon suuntaa"
    ],
    rauha: [
      "Valitse huoneesta yksi muoto ja huomaa, missä kaikkialla se toistuu",
      "Kuuntele hetki ja erottele äänet, jotka kuuluvat luokasta tai sen ulkopuolelta",
      "Kuvittele rauhallinen paikka ja mieti, miltä sen ilma tuntuu",
      "Piirrä sormella pöytään hitaita ympyröitä",
      "Katso ikkunasta tai seinälle ja seuraa rauhassa valon suuntaa",
      "Kirjoita yksi keskeneräinen ajatus muistiin ja anna sen odottaa",
      "Lepuuta käsiä sylissä ja huomaa, miltä tuolin tuki tuntuu",
      "Valitse yksi väri ja katsele, miten sen sävy vaihtuu eri esineissä"
    ]
  }
};

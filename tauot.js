const tauot = {
  lapset: {
    liike: [
      "Heiluta käsiäsi kuin puu tuulessa. Aloita pienestä tuulesta ja kokeile sitten isompaa puuskaa.",
      "Taputa kahdesti ja keksi pieni liike taputusten perään. Toista omaa sarjaasi.",
      "Liiku paikallasi kuin uninen karhu. Voit käyttää jalkoja tai pelkkiä käsiä."
    ],
    rauha: [
      "Etsi katseellasi kolme samanväristä asiaa. Katso kutakin hetki rauhassa.",
      "Kuuntele hetki ja yritä huomata yksi läheinen ja yksi kaukainen ääni.",
      "Piirrä sormella ilmaan kolme hidasta pilveä. Tee jokaisesta vähän erilainen."
    ]
  },
  nuoret: {
    liike: [
      "Keksi kolmen liikkeen sarja lempibiisisi tahtiin. Toista se istuen tai seisten.",
      "Vaihda asentoa ja liiku hetki tilassa. Voit myös marssia paikallasi omassa tahdissasi.",
      "Rummuta käsilläsi kevyt rytmi polviin. Kokeile, miltä sama rytmi tuntuu hitaampana."
    ],
    rauha: [
      "Laske puhelin hetkeksi. Valitse näkymä ikkunasta tai yksityiskohta huoneesta ja huomaa siitä kolme asiaa.",
      "Kuuntele ympäristön ääniä. Valitse yksi ja huomaa, muuttuuko se hetken aikana.",
      "Lepuuta käsiä sylissä. Huomaa hetken ajan, miltä tuolin tuki tai jalkojen alusta tuntuu."
    ]
  },
  aikuiset: {
    liike: [
      "Vaihda työasentoa. Pyöräytä hartioita rauhallisesti muutaman kerran ja avaa ja sulje kädet kevyesti.",
      "Pidä lyhyt kierros työpisteen lähistöllä. Jos jäät istumaan, liikuttele nilkkoja ja käsiä omaan tahtiin.",
      "Laske kädet hetkeksi pois näppäimistöltä. Ravistele niitä kevyesti ja ojenna sormet muutaman kerran."
    ],
    rauha: [
      "Siirrä katse pois näytöstä ja katso hetki kauempana olevaa kohdetta. Anna katseen levätä siinä.",
      "Laske kädet syliin ja istu hetki rauhassa. Huomaa hengityksen tahti ja anna sen jatkua omalla rytmillään.",
      "Pysähdy kuuntelemaan ympäristön ääniä. Huomaa ensin lähin ääni ja sitten kaukaisin, jonka erotat."
    ]
  }
};

// Pidemmät tauot koostuvat kolmesta vaiheesta.
const pitkienTaukojenVaiheet = {
  lapset: {
    liike: [
      ["Liiku kuin uninen karhu", "Matki hitaasti kävelevää robottia", "Keksi oma eläinliike ja hidasta lopuksi"],
      ["Piirrä käsillä isoja kuvioita ilmaan", "Keksi pieni tanssi", "Toista suosikkiliikkeitäsi hitaasti"]
    ],
    rauha: [
      ["Etsi katseellasi lempivärejäsi", "Piirrä paperille tai ilmaan pilviä", "Katso yhtä pilveä ja kuvittele, minne se kulkee"],
      ["Kuuntele, mitä ääniä huomaat", "Katsele, millaisia varjoja tilassa näkyy", "Keksi mielessäsi tarina yhdestä varjosta"]
    ]
  },
  nuoret: {
    liike: [
      ["Kävele tai rullaa rauhassa", "Vaihtele tahtia omaan oloosi sopivasti", "Palaa rauhalliseen tahtiin"],
      ["Valitse kappale ja liiku sen rytmissä", "Keksi lyhyt liikesarja ja kokeile eri tempoja", "Jatka suosikkiliikkeilläsi ja hidasta lopuksi"]
    ],
    rauha: [
      ["Laita näyttö sivuun ja kuuntele ympäristöä", "Katsele ikkunasta tai huomaa tilan värejä", "Istu mukavasti ja anna huomion levätä valitsemassasi kohteessa"],
      ["Valitse paperi tai muistivihko", "Piirrä rauhassa toistuvaa kuviota", "Katso, millaisen kuvion sait aikaan, ja jatka halutessasi vapaasti"]
    ]
  },
  aikuiset: {
    liike: [
      ["Kävele tai rullaa rauhallisesti työpisteen lähistöllä", "Jatka hieman reippaammin omaan tahtiisi", "Hidasta ja palaa työpisteelle"],
      ["Vaihda asentoa ja liikuttele käsiä ja hartioita kevyesti", "Vuorottele rauhallista askeltamista ja nilkkojen liikuttelua", "Valitse mukavimmat liikkeet ja jatka niitä hitaammin"]
    ],
    rauha: [
      ["Siirrä katse pois näytöstä ja katsele kauemmas", "Kuuntele ympäristön ääniä rauhassa", "Istu mukavasti ja huomaa, miltä tuolin tai lattian tuki tuntuu"],
      ["Valitse rauhallinen paikka ja anna katseen levätä", "Kirjoita paperille mieleen tulevia asioita omaan tahtiisi", "Laske kynä ja vietä loppuhetki rauhassa"]
    ]
  }
};

const tekemisenTauot = {
  tietokone: {
    liike: [
      ["Irrota kädet näppäimistöltä ja pyöräytä hartioita","Kävele hetki pois näytön äärestä tai askella paikallasi","Palaa työpisteelle ja liikuttele sormia kevyesti"],
      ["Vaihda asentoa ja ravistele käsiä","Vuorottele rauhallisia askelia ja käsien heilautuksia","Hidasta ja anna käsien levätä"]
    ],
    rauha: [
      ["Sammuta näyttö tai käänny siitä poispäin","Anna katseen levätä kaukana olevassa kohteessa","Huomaa, miltä tauko näytöstä tuntuu"],
      ["Laita ilmoitukset hetkeksi äänettömälle","Katsele ikkunasta tai huoneen kauimmaiseen nurkkaan","Pidä vielä hetki kädet sylissä"]
    ]
  },
  fyysinen: {
    liike: [
      ["Laske työvälineet ja vaihda asentoa","Liikuttele nilkkoja ja ranteita kevyesti istuen","Anna käsien levätä"],
      ["Pysähdy ja anna hartioiden laskeutua","Ota muutama rauhallinen askel tai liikuttele jalkoja istuen","Palaa mukavaan lepoasentoon"]
    ],
    rauha: [
      ["Etsi rauhallinen paikka istahtaa","Anna käsien ja jalkojen levätä tuettuina","Kuuntele hetki, mitä ympärillä kuuluu"],
      ["Laske työvälineet sivuun","Istu mukavasti ja katsele ympäristöä rauhassa","Nouse omaan tahtiisi, kun olet valmis"]
    ]
  },
  istuma: {
    liike: [
      ["Ojenna jalkoja vuorotellen tai nouse ylös","Kävele, rullaa tai askella paikallasi omaan tahtiin","Hidasta ja valitse uusi mukava asento"],
      ["Siirrä painoa rauhallisesti puolelta toiselle","Tee pieni kierros tilassa tai vuorottele kantapään ja varpaiden nostoja","Liikuttele hartioita kevyesti"]
    ],
    rauha: [
      ["Vaihda istuma-asentoa tai nouse hetkeksi","Anna katseen levätä ja huomaa, miltä uusi asento tuntuu","Asetu mukavasti ennen kuin jatkat"],
      ["Siirry halutessasi toiseen tuoliin tai paikkaan","Anna jalkojen levätä alustalla ja kuuntele ympäristöä","Palaa tehtävääsi rauhassa"]
    ]
  },
  koti: {
    liike: [
      ["Jätä kotityö hetkeksi kesken","Liiku hetki lempikappaleen tahtiin istuen tai seisten","Hidasta liike kappaleen loppua kohti"],
      ["Laske siivousvälineet sivuun","Kulje rauhallisesti huoneesta toiseen tai liikuttele käsiä istuen","Pysähdy mukavaan asentoon"]
    ],
    rauha: [
      ["Laske askare käsistäsi ja istu alas","Valitse ympäriltäsi mukava yksityiskohta ja katsele sitä rauhassa","Mieti vasta lopuksi, mihin askareeseen palaat"],
      ["Siirry pois keskeneräisen askareen luota","Kuuntele rauhassa, millaisia ääniä kodissa kuuluu","Vietä loppuhetki mukavassa asennossa"]
    ]
  },
  koulu: {
    liike: [
      ["Sulje kirja ja laske kynä","Keksi kolmen liikkeen sarja ja toista sitä omaan tahtiisi","Hidasta ja ravistele käsiä kevyesti"],
      ["Vaihda asentoa ja ojenna kädet mukavasti eteen","Kävele tai liikuta käsiä hiljaa oman rytmisi mukaan","Palaa opiskelupaikalle rauhassa"]
    ],
    rauha: [
      ["Käännä vihko kiinni ja laita näyttö sivuun","Etsi katseellasi kolme samanväristä asiaa ja katsele niitä rauhassa","Kuuntele hetki ennen kuin jatkat opiskelua"],
      ["Merkitse kohta, johon jäit","Piirrä paperille tai sormella ilmaan rauhallisesti toistuvaa kuviota","Lepuuta käsiä ja palaa sitten merkitsemääsi kohtaan"]
    ]
  }
};

const lomake = document.querySelector("#taukokone");
const ika = document.querySelector("#ika");
const kesto = document.querySelector("#kesto");
const tekeminen = document.querySelector("#tekeminen");
const aika = document.querySelector("#aika");
const tehtava = document.querySelector("#tehtava");
const nappi = lomake.querySelector("button");
let edellinen;

lomake.addEventListener("submit", (tapahtuma) => {
  tapahtuma.preventDefault();
  const tavoite = lomake.elements.tavoite.value;
  const vuodet = ika.valueAsNumber;
  const minuutit = Number(kesto.value);
  const ryhma = vuodet < 13 ? "lapset" : vuodet < 18 ? "nuoret" : "aikuiset";
  const lahde = minuutit > 1 ? pitkienTaukojenVaiheet : tauot;
  const yleisetTauot = Number.isNaN(vuodet)
    ? Object.values(lahde).flatMap((tauotRyhmittain) => tauotRyhmittain[tavoite])
    : lahde[ryhma][tavoite];
  const omatTauot = tekemisenTauot[tekeminen.value]?.[tavoite];
  const uudetTauot = omatTauot
    ? lisatauot[tekeminen.value][tavoite]
    : Number.isNaN(vuodet)
      ? Object.keys(tauot).flatMap((ikaRyhma) => lisatauot[ikaRyhma][tavoite])
      : lisatauot[ryhma][tavoite];
  const lista = [...(omatTauot ?? yleisetTauot), ...uudetTauot];

  const vaihtoehdot = lista.length > 1 ? lista.filter((tauko) => tauko !== edellinen) : lista;
  edellinen = vaihtoehdot[Math.floor(Math.random() * vaihtoehdot.length)];
  if (minuutit > 1) {
    const vaiheet = Array.isArray(edellinen) ? edellinen : [
      tavoite === "liike" ? "Vaihda asentoa ja aloita liike rauhallisesti" : "Asetu mukavasti ja siirrä huomio pois siitä, mitä olit tekemässä",
      edellinen,
      tavoite === "liike" ? "Hidasta liikettä vähitellen ja lepää hetki" : "Anna katseen tai käsien levätä vielä hetki"
    ];
    const vaiheidenKestot = minuutit === 5 ? [1, 3, 1] : [5, 5, 5];
    tehtava.textContent = vaiheet.map((vaihe, i) => {
      const kesto = vaiheidenKestot[i];
      return `${vaihe} (${kesto} ${kesto === 1 ? "minuutti" : "minuuttia"}).`;
    }).join(" ");
  } else {
    const ohje = Array.isArray(edellinen) ? edellinen[1] : edellinen.replace(/\.$/, "");
    tehtava.textContent = `${ohje}. Jatka tai toista rauhassa, kunnes minuutti on kulunut.`;
  }
  aika.textContent = `${minuutit} ${minuutit === 1 ? "minuutti" : "minuuttia"}`;
  aika.hidden = false;
  tehtava.hidden = false;
  nappi.textContent = "Arvo uusi tauko";
});

lomake.addEventListener("change", () => {
  aika.hidden = true;
  tehtava.hidden = true;
  tehtava.textContent = "";
  nappi.textContent = "Arvo tauko";
});

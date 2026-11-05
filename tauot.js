// Kunkin tauon ensimmäinen arvo on kesto sekunteina.
const tauot = {
  lapset: {
    liike: [
      [30, "Heiluta käsiäsi kuin puu tuulessa. Aloita pienestä tuulesta ja kokeile sitten isompaa puuskaa."],
      [30, "Taputa kahdesti ja keksi pieni liike taputusten perään. Toista omaa sarjaasi."],
      [45, "Liiku paikallasi kuin uninen karhu. Voit käyttää jalkoja tai pelkkiä käsiä."]
    ],
    rauha: [
      [30, "Etsi katseellasi kolme samanväristä asiaa. Katso kutakin hetki rauhassa."],
      [30, "Kuuntele hetki ja yritä huomata yksi läheinen ja yksi kaukainen ääni."],
      [45, "Piirrä sormella ilmaan kolme hidasta pilveä. Tee jokaisesta vähän erilainen."]
    ]
  },
  nuoret: {
    liike: [
      [45, "Keksi kolmen liikkeen sarja lempibiisisi tahtiin. Toista se istuen tai seisten."],
      [60, "Vaihda asentoa ja liiku hetki tilassa. Voit myös marssia paikallasi omassa tahdissasi."],
      [45, "Rummuta käsilläsi kevyt rytmi polviin. Kokeile, miltä sama rytmi tuntuu hitaampana."]
    ],
    rauha: [
      [60, "Laske puhelin hetkeksi. Valitse näkymä ikkunasta tai yksityiskohta huoneesta ja huomaa siitä kolme asiaa."],
      [45, "Kuuntele ympäristön ääniä. Valitse yksi ja huomaa, muuttuuko se hetken aikana."],
      [60, "Lepuuta käsiä sylissä. Huomaa hetken ajan, miltä tuolin tuki tai jalkojen alusta tuntuu."]
    ]
  },
  aikuiset: {
    liike: [
      [60, "Vaihda työasentoa. Pyöräytä hartioita rauhallisesti muutaman kerran ja avaa ja sulje kädet kevyesti."],
      [90, "Pidä lyhyt kierros työpisteen lähistöllä. Jos jäät istumaan, liikuttele nilkkoja ja käsiä omaan tahtiin."],
      [60, "Laske kädet hetkeksi pois näppäimistöltä. Ravistele niitä kevyesti ja ojenna sormet muutaman kerran."]
    ],
    rauha: [
      [60, "Siirrä katse pois näytöstä ja katso hetki kauempana olevaa kohdetta. Anna katseen levätä siinä."],
      [90, "Laske kädet syliin ja istu hetki rauhassa. Huomaa hengityksen tahti ja anna sen jatkua omalla rytmillään."],
      [60, "Pysähdy kuuntelemaan ympäristön ääniä. Huomaa ensin lähin ääni ja sitten kaukaisin, jonka erotat."]
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

const lomake = document.querySelector("#taukokone");
const ika = document.querySelector("#ika");
const kesto = document.querySelector("#kesto");
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
  const lista = Number.isNaN(vuodet)
    ? Object.values(lahde).flatMap((tauotRyhmittain) => tauotRyhmittain[tavoite])
    : lahde[ryhma][tavoite];

  const vaihtoehdot = lista.length > 1 ? lista.filter((tauko) => tauko !== edellinen) : lista;
  edellinen = vaihtoehdot[Math.floor(Math.random() * vaihtoehdot.length)];
  const [sekunnit, ohje] = edellinen;
  if (minuutit > 1) {
    const [alku, keski, loppu] = edellinen;
    const vaiheidenKestot = minuutit === 5 ? [1, 3, 1] : [5, 5, 5];
    tehtava.textContent = [alku, keski, loppu].map((vaihe, i) => {
      const kesto = vaiheidenKestot[i];
      return `${vaihe} (${kesto} ${kesto === 1 ? "minuutti" : "minuuttia"}).`;
    }).join(" ");
  } else {
    tehtava.textContent = minuutit === 1
      ? `${ohje} Jatka tai toista rauhassa, kunnes minuutti on kulunut.`
      : ohje;
  }
  aika.textContent = minuutit ? `${minuutit} ${minuutit === 1 ? "minuutti" : "minuuttia"}` : `Noin ${sekunnit} sekuntia`;
  aika.hidden = false;
  nappi.textContent = "Arvo uusi tauko";
});

lomake.addEventListener("change", () => {
  aika.hidden = true;
  tehtava.textContent = "Arvo itsellesi pieni tauko.";
  nappi.textContent = "Arvo tauko";
});

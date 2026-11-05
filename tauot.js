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

const lomake = document.querySelector("#taukokone");
const ika = document.querySelector("#ika");
const aika = document.querySelector("#aika");
const tehtava = document.querySelector("#tehtava");
const nappi = lomake.querySelector("button");
let edellinen;

lomake.addEventListener("submit", (tapahtuma) => {
  tapahtuma.preventDefault();
  const tavoite = lomake.elements.tavoite.value;
  const vuodet = ika.valueAsNumber;
  let lista;
  if (Number.isNaN(vuodet)) {
    lista = Object.values(tauot).flatMap((ryhma) => ryhma[tavoite]);
  } else {
    const ryhma = vuodet < 13 ? "lapset" : vuodet < 18 ? "nuoret" : "aikuiset";
    lista = tauot[ryhma][tavoite];
  }

  const vaihtoehdot = lista.length > 1 ? lista.filter((tauko) => tauko !== edellinen) : lista;
  edellinen = vaihtoehdot[Math.floor(Math.random() * vaihtoehdot.length)];
  const [sekunnit, ohje] = edellinen;
  aika.textContent = `Noin ${sekunnit} sekuntia`;
  aika.hidden = false;
  tehtava.textContent = ohje;
  nappi.textContent = "Arvo uusi tauko";
});

lomake.addEventListener("change", () => {
  aika.hidden = true;
  tehtava.textContent = "Arvo itsellesi pieni tauko.";
  nappi.textContent = "Arvo tauko";
});

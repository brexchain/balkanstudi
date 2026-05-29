// Balkan & Novi Val 77 Song Progression Presets DB
// Optimized structure to conserve line/token count and provide maximum variety

interface ChordItem {
  s: number;
  q: "maj" | "min" | "dim";
  r: string;
}

interface CompactPreset {
  id: string;
  name: string;
  category: "classic" | "riff";
  chords: ChordItem[];
  songs: string[];
  desc: string;
  bpm: number;
  strumPattern: string;
  drumPattern: string;
  bassPattern: string;
  currentInst: string;
  fxPresetId: string;
}

// Reusable pedalboards matching app preset IDs
const PEDALBOARD_PRESETS: Record<string, any> = {
  surf_spring: {
    overdrive: { active: false, drive: 0.45, tone: 0.55, volume: 0.7 },
    chorus: { active: true, rate: 2.4, depth: 0.18, mix: 0.25 },
    delay: { active: true, time: 0.22, feedback: 0.32, mix: 0.4 },
    reverb: { active: true, decay: 2.8, mix: 0.52 }
  },
  cosmic_clouds: {
    overdrive: { active: false, drive: 0.4, tone: 0.5, volume: 0.7 },
    chorus: { active: true, rate: 0.8, depth: 0.5, mix: 0.45 },
    delay: { active: true, time: 0.72, feedback: 0.75, mix: 0.58 },
    reverb: { active: true, decay: 5.2, mix: 0.62 }
  },
  dream_space: {
    overdrive: { active: false, drive: 0.45, tone: 0.55, volume: 0.7 },
    chorus: { active: true, rate: 1.2, depth: 0.6, mix: 0.55 },
    delay: { active: true, time: 0.52, feedback: 0.55, mix: 0.5 },
    reverb: { active: true, decay: 3.5, mix: 0.48 }
  },
  cozy_lounge: {
    overdrive: { active: false, drive: 0.45, tone: 0.55, volume: 0.7 },
    chorus: { active: true, rate: 1.4, depth: 0.3, mix: 0.28 },
    delay: { active: false, time: 0.35, feedback: 0.3, mix: 0.25 },
    reverb: { active: true, decay: 1.4, mix: 0.26 }
  },
  crunchy: {
    overdrive: { active: true, drive: 0.52, tone: 0.6, volume: 0.8 },
    chorus: { active: false, rate: 1.5, depth: 0.35, mix: 0.4 },
    delay: { active: false, time: 0.38, feedback: 0.45, mix: 0.4 },
    reverb: { active: true, decay: 1.8, mix: 0.22 }
  },
  psychedelic: {
    overdrive: { active: true, drive: 0.35, tone: 0.5, volume: 0.75 },
    chorus: { active: true, rate: 4.2, depth: 0.75, mix: 0.65 },
    delay: { active: false, time: 0.3, feedback: 0.4, mix: 0.3 },
    reverb: { active: true, decay: 2.2, mix: 0.35 }
  },
  heavy_lead: {
    overdrive: { active: true, drive: 0.88, tone: 0.7, volume: 0.9 },
    chorus: { active: true, rate: 1.6, depth: 0.25, mix: 0.32 },
    delay: { active: true, time: 0.32, feedback: 0.42, mix: 0.38 },
    reverb: { active: true, decay: 2.6, mix: 0.44 }
  },
  bypass: {
    overdrive: { active: false, drive: 0.4, tone: 0.5, volume: 0.7 },
    chorus: { active: false, rate: 1.0, depth: 0.2, mix: 0.1 },
    delay: { active: false, time: 0.3, feedback: 0.2, mix: 0.1 },
    reverb: { active: false, decay: 1.5, mix: 0.1 }
  }
};

const COMPACT_PROG_DB: CompactPreset[] = [
  {
    id: "djurdjevdan",
    name: "Đurđevdan (Bijelo Dugme)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" },
      { s: 5, q: "maj", r: "IV" }, { s: 2, q: "min", r: "ii" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Đurđevdan — Bijelo Dugme (1988)", "Ederlezi — Tradicionalna"],
    desc: "Kultna balkan himna s trubama i ikonskim preokretom na dursku medijantu (III).",
    bpm: 92, strumPattern: "strum", drumPattern: "standard", bassPattern: "melodic", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  },
  {
    id: "lipe_cvatu",
    name: "Lipe Cvatu (Bijelo Dugme)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 0, q: "maj", r: "I" }, { s: 2, q: "min", r: "ii" },
      { s: 9, q: "min", r: "vi" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Lipe Cvatu — Bijelo Dugme (1984)"],
    desc: "Najveći pastirski rok hit u 7/8 ritmičkom pulsu s neponovljivim solo dionicama na svirali.",
    bpm: 118, strumPattern: "balkan_7_8", drumPattern: "latin", bassPattern: "syncopated", currentInst: "synth", fxPresetId: "cosmic_clouds"
  },
  {
    id: "parni_sve_jos",
    name: "Sve Još Miriše Na Nju",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }
    ],
    songs: ["Sve još miriše na nju — Parni Valjak (1993)"],
    desc: "Svevremenska pop-rok balada s ikonskim emocijama i prelijepim refrenom.",
    bpm: 82, strumPattern: "arpeggio", drumPattern: "standard", bassPattern: "root", currentInst: "guitar_acoustic", fxPresetId: "dream_space"
  },
  {
    id: "bacila_rijeku",
    name: "Bacila Je Sve Niz Rijeku",
    category: "classic",
    chords: [
      { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" }, { s: 9, q: "min", r: "vi" },
      { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Bacila je sve niz rijeku — Indexi (1974)", "Crvena Jabuka version"],
    desc: "Predivna, duboko melankolična balada sarajevskih Indexa s upečatljivim dursko-molovskim prijelazima.",
    bpm: 78, strumPattern: "arpeggio", drumPattern: "standard", bassPattern: "melodic", currentInst: "piano", fxPresetId: "cozy_lounge"
  },
  {
    id: "ena_haustor",
    name: "Ena (Haustor - Reggae)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 7, q: "maj", r: "V" }, { s: 2, q: "min", r: "ii" }, { s: 4, q: "maj", r: "III" }
    ],
    songs: ["Ena — Haustor (1985)"],
    desc: "Ultimativni novovalni ska-reggae dragulj s Rundekovim prepoznatljivim offbeatom.",
    bpm: 110, strumPattern: "reggae", drumPattern: "latin", bassPattern: "syncopated", currentInst: "guitar_electric_clean", fxPresetId: "psychedelic"
  },
  {
    id: "balkan_azra",
    name: "Balkan (Azra Anthem)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" },
      { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Balkan — Azra (1979)"],
    desc: "Pankersko-akustički bunt Branimira 'Džonija' Štulića u brzom i energičnom tempu.",
    bpm: 135, strumPattern: "strum", drumPattern: "rock", bassPattern: "octave", currentInst: "guitar_acoustic", fxPresetId: "crunchy"
  },
  {
    id: "atomsko_ljubav",
    name: "Za Ljubav Treba Imat Dušu",
    category: "riff",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }
    ],
    songs: ["Za ljubav treba imat dušu — Atomsko Sklonište (1981)"],
    desc: "Legendarni riff pulskog rock benda koji pjeva o vječnoj potrazi za ljubavlju.",
    bpm: 98, strumPattern: "strum", drumPattern: "rock", bassPattern: "walk", currentInst: "guitar_electric_clean", fxPresetId: "crunchy"
  },
  {
    id: "prljavo_marina",
    name: "Marina (Prljavo Kazalište)",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" },
      { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Marina — Prljavo Kazalište (1988)"],
    desc: "Jedan od najupečatljivijih refrena Yugo-rock scene iz zagrebačke Dubrave s prelijepim vokalima.",
    bpm: 116, strumPattern: "strum", drumPattern: "rock", bassPattern: "syncopated", currentInst: "guitar_electric_clean", fxPresetId: "dream_space"
  },
  {
    id: "crno_bijeli",
    name: "Crno Bijeli Svijet (Ska)",
    category: "riff",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Crno bijeli svijet — Prljavo Kazalište (1980)"],
    desc: "Brzi plesni ska ritam koji je definirao rani zvuk zagrebačkog Novog Vala.",
    bpm: 168, strumPattern: "block", drumPattern: "funk", bassPattern: "octave", currentInst: "guitar_electric_clean", fxPresetId: "crunchy"
  },
  {
    id: "ekv_sav_moj_bol",
    name: "Ti Si Sav Moj Bol (EKV)",
    category: "riff",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 7, q: "maj", r: "V" }, { s: 5, q: "maj", r: "IV" }, { s: 4, q: "maj", r: "III" }
    ],
    songs: ["Ti si sav moj bol — Ekatarina Velika (1986)"],
    desc: "Beogradski art-rock i novovalni misticizam predvođen Milanom Mladenovićem.",
    bpm: 114, strumPattern: "arpeggio", drumPattern: "rock", bassPattern: "melodic", currentInst: "synth", fxPresetId: "dream_space"
  },
  {
    id: "maljciki_idoli",
    name: "Maljčiki (VIS Idoli)",
    category: "riff",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }, { s: 4, q: "maj", r: "III" }
    ],
    songs: ["Maljčiki — VIS Idoli (1981)"],
    desc: "Ironični retro-sovjetski ska hit VIS Idola s legendarnog Paket Aranžmana.",
    bpm: 160, strumPattern: "block", drumPattern: "funk", bassPattern: "octave", currentInst: "guitar_electric_clean", fxPresetId: "crunchy"
  },
  {
    id: "pakleni_vozaci",
    name: "Pakleni Vozači (Atomsko)",
    category: "riff",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 0, q: "maj", r: "I" }, { s: 2, q: "maj", r: "II" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Pakleni vozači — Atomsko Sklonište (1980)"],
    desc: "Snažni hard-rock riff s grmljavinom motora, brzim tempom i žestokim bas linijama.",
    bpm: 132, strumPattern: "block", drumPattern: "rock", bassPattern: "octave", currentInst: "guitar_electric_dist", fxPresetId: "heavy_lead"
  },
  {
    id: "frida_psihomodo",
    name: "Frida (Psihomodo Pop)",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 5, q: "maj", r: "IV" }
    ],
    songs: ["Frida — Psihomodo Pop (1989)"],
    desc: "Nevjerojatno zarazni punk-rock ritam inspiriran Ramonesom s Gobčevim karizmatičnim vokalom.",
    bpm: 142, strumPattern: "strum", drumPattern: "rock", bassPattern: "root", currentInst: "guitar_electric_clean", fxPresetId: "crunchy"
  },
  {
    id: "ja_volim_sebe",
    name: "Ja Volim Samo Sebe (Psihomodo)",
    category: "riff",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }
    ],
    songs: ["Ja volim samo sebe — Psihomodo Pop (1988)"],
    desc: "Najpopularniji power pop klasik zagrebačkih pankera koji garantira podizanje atmosfere na svakom tulumu.",
    bpm: 126, strumPattern: "strum", drumPattern: "rock", bassPattern: "octave", currentInst: "guitar_electric_dist", fxPresetId: "crunchy"
  },
  {
    id: "pinokio_psihomodo",
    name: "Pinokio (Psihomodo Pop)",
    category: "riff",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 10, q: "maj", r: "bVII" }, { s: 5, q: "maj", r: "IV" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Pinokio — Psihomodo Pop (1993)"],
    desc: "Žestoki garage-rock s upečatljivim spuštanjem na sniženi sedmi stupanj (bVII).",
    bpm: 138, strumPattern: "block", drumPattern: "rock", bassPattern: "walk", currentInst: "guitar_electric_dist", fxPresetId: "heavy_lead"
  },
  {
    id: "bobi_psihomodo",
    name: "Ramona (Psihomodo Pop)",
    category: "riff",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Ramona — Psihomodo Pop (1988)"],
    desc: "Posveta legendarnim Ramonesima s brzim upstrokeom i punk stavom.",
    bpm: 172, strumPattern: "block", drumPattern: "rock", bassPattern: "octave", currentInst: "guitar_electric_dist", fxPresetId: "heavy_lead"
  },
  {
    id: "prvi_poljubac_halid",
    name: "Prvi Poljubac (Halid Bešlić)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" },
      { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Prvi poljubac — Halid Bešlić (2003)"],
    desc: "Svevremenska himna s prepoznatljivim melosom koja spaja folk dušu s pop senzibilitetom.",
    bpm: 94, strumPattern: "rumba", drumPattern: "latin", bassPattern: "melodic", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  },
  {
    id: "miljacka_halid",
    name: "Miljacka (Halid Bešlić)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" },
      { s: 9, q: "min", r: "vi" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Miljacka — Halid Bešlić (2007)"],
    desc: "Zlatni standard moderne sarajevske sevdalinke i pop-folka s harmonika melodijama u prvom planu.",
    bpm: 104, strumPattern: "rumba", drumPattern: "latin", bassPattern: "syncopated", currentInst: "piano", fxPresetId: "cozy_lounge"
  },
  {
    id: "romanija_halid",
    name: "Romanija (Halid Bešlić)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 7, q: "maj", r: "V" }, { s: 5, q: "maj", r: "IV" }, { s: 4, q: "maj", r: "III" }
    ],
    songs: ["Romanija — Halid Bešlić (2013)"],
    desc: "Moćna folk-balada epskog daha, prožeta nostalgijom i planinskim melosom kroz andaluzijsku kadencu.",
    bpm: 88, strumPattern: "strum", drumPattern: "standard", bassPattern: "root", currentInst: "strings", fxPresetId: "cosmic_clouds"
  },
  {
    id: "zlatne_strune_halid",
    name: "Zlatne Strune (Halid Bešlić)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 9, q: "min", r: "vi" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Zlatne strune — Halid Bešlić (1984)"],
    desc: "Jedan od ranih Halidovih hitova koji je zacementirao njegov status legende u bivšoj državi.",
    bpm: 96, strumPattern: "rumba", drumPattern: "latin", bassPattern: "melodic", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  },
  {
    id: "zenica_blues",
    name: "Zenica Blues (Zabranjeno Pušenje)",
    category: "riff",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Zenica blues — Zabranjeno Pušenje (1984)"],
    desc: "Kultni 'New Primitives' blues s humorističnim i buntovnim osvrtom na život u zatvoru u Zenici.",
    bpm: 148, strumPattern: "strum", drumPattern: "rock", bassPattern: "walk", currentInst: "guitar_acoustic", fxPresetId: "crunchy"
  },
  {
    id: "pisonja_zuga",
    name: "Balada o Pišonji i Žugi",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Balada o Pišonji i Žugi — Zabranjeno Pušenje (1987)"],
    desc: "Epska priča s asfalta o dječacima koji su oteli autobus prema more, s legendarnim punk-pop ugođajem.",
    bpm: 108, strumPattern: "strum", drumPattern: "rock", bassPattern: "root", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  },
  {
    id: "guzonjin_sin",
    name: "Guzonjin Sin (Zabranjeno Pušenje)",
    category: "riff",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Guzonjin sin — Zabranjeno Pušenje (1989)"],
    desc: "Oštra društvena satira zapakirana u moćni i skakutavi hard-punk instrumentarij.",
    bpm: 130, strumPattern: "block", drumPattern: "rock", bassPattern: "octave", currentInst: "guitar_electric_dist", fxPresetId: "heavy_lead"
  },
  {
    id: "tamo_gdje_ljubav",
    name: "Tamo Gdje Ljubav Počinje",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }
    ],
    songs: ["Tamo gdje ljubav počinje — Crvena Jabuka (1989)"],
    desc: "Jedna od najvećih ljubavnih power-balada u povijesti pop-roka s nezaboravnim solo dionicama gudača i gitare.",
    bpm: 76, strumPattern: "arpeggio", drumPattern: "standard", bassPattern: "root", currentInst: "guitar_acoustic", fxPresetId: "dream_space"
  },
  {
    id: "nekako_s_proljeca",
    name: "Nekako s Proljeća (Jabuka)",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }, { s: 5, q: "maj", r: "IV" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Nekako s proljeća — Crvena Jabuka & Kemal Monteno (1991)"],
    desc: "Topli akustično-pop duet koji miriše na rano sarajevsko proljeće i vječnu sevdah čežnju.",
    bpm: 102, strumPattern: "strum", drumPattern: "standard", bassPattern: "root", currentInst: "guitar_acoustic", fxPresetId: "cozy_lounge"
  },
  {
    id: "dirlija",
    name: "Dirlija (Crvena Jabuka)",
    category: "riff",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Dirlija — Crvena Jabuka (1986)"],
    desc: "Izrazito brzi, rasplesani rani pop-hit s dječjim synth dionicama i prepoznatljivim ritmom bas gitare.",
    bpm: 140, strumPattern: "block", drumPattern: "funk", bassPattern: "octave", currentInst: "synth", fxPresetId: "psychedelic"
  },
  {
    id: "suada_plavi",
    name: "Suada (Plavi Orkestar)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Suada — Plavi Orkestar (1985)"],
    desc: "Najpopularniji folk-pop-rock amalgam s kultnim uvodnim krikom 'Ti si meni sve'.",
    bpm: 112, strumPattern: "rumba", drumPattern: "latin", bassPattern: "syncopated", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  },
  {
    id: "pijan_nego_star",
    name: "Bolje Biti Pijan Nego Star",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }
    ],
    songs: ["Bolje biti pijan nego star — Plavi Orkestar (1985)"],
    desc: "Gorko-slatka himna propaloj srednjoškolskoj ljubavi i neponovljivoj sarajevskoj boemskoj nostalgiji.",
    bpm: 86, strumPattern: "strum", drumPattern: "standard", bassPattern: "root", currentInst: "piano", fxPresetId: "cozy_lounge"
  },
  {
    id: "sava_tiho_tece",
    name: "Sava Tiho Teče (Orkestar)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Sava tiho teče — Plavi Orkestar (1989)"],
    desc: "Kafanska balada s harmonikama i melankoničnim sjetnim tonom koji osvaja na prvu.",
    bpm: 90, strumPattern: "rumba", drumPattern: "latin", bassPattern: "melodic", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  },
  {
    id: "ti_si_mi_u_krvi",
    name: "Ti Si Mi U Krvi (Čolić)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" },
      { s: 5, q: "maj", r: "IV" }, { s: 11, q: "dim", r: "vii" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Ti si mi u krvi — Zdravko Čolić (1984)"],
    desc: "Najveličanstvenija grand-balada s orkestralnim aranžmanom Kornelija Kovača i iznimnim vokalnim rasponom.",
    bpm: 72, strumPattern: "arpeggio", drumPattern: "standard", bassPattern: "melodic", currentInst: "strings", fxPresetId: "cosmic_clouds"
  },
  {
    id: "pjevam_danju_pjevam",
    name: "Pjevam Danju Pjevam Noću",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Pjevam danju, pjevam noću — Zdravko Čolić (1977)"],
    desc: "Himnični bezvremenski pop aranžman na tekst Branka Radičevića.",
    bpm: 114, strumPattern: "strum", drumPattern: "rock", bassPattern: "root", currentInst: "guitar_acoustic", fxPresetId: "cozy_lounge"
  },
  {
    id: "glavo_luda",
    name: "Glavo Luda (Zdravko Čolić)",
    category: "riff",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 2, q: "min", r: "ii" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Glavo luda — Zdravko Čolić (1977)"],
    desc: "Disco-funk i pop eksplozija s dinamičnim brass puhačkim dionicama i bas bravurama.",
    bpm: 120, strumPattern: "block", drumPattern: "funk", bassPattern: "octave", currentInst: "synth", fxPresetId: "psychedelic"
  },
  {
    id: "jorgovani_merlin",
    name: "Kad Zamirišu Jorgovani",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Kad zamirišu jorgovani — Dino Merlin & Vesna Zmijanac (1988)"],
    desc: "Najlegendarniji balkanski etno-pop pop-folk duet sa zavodljivim mističnim tonom.",
    bpm: 112, strumPattern: "rumba", drumPattern: "latin", bassPattern: "syncopated", currentInst: "synth", fxPresetId: "cosmic_clouds"
  },
  {
    id: "je_l_sarajevo",
    name: "Je l' Sarajevo Gdje Je Bilo",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Je l' Sarajevo gdje je nekad bilo — Dino Merlin (1989)"],
    desc: "Nostalgični vapaj i nevjerojatno melodična posveta gradu pod Trebevićem.",
    bpm: 88, strumPattern: "strum", drumPattern: "standard", bassPattern: "root", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  },
  {
    id: "kokuzna_vremena",
    name: "Kokuzna Vremena (Merlin)",
    category: "riff",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Kokuzna vremena — Merlin (1985)"],
    desc: "Pokretački rani synth-pop i novovalni zvuk sarajevske skupine Merlin.",
    bpm: 114, strumPattern: "block", drumPattern: "funk", bassPattern: "octave", currentInst: "synth", fxPresetId: "psychedelic"
  },
  {
    id: "libar_gibonni",
    name: "Libar (Gibonni)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }
    ],
    songs: ["Libar — Gibonni (2001)"],
    desc: "Remek-djelo mediteranskog pop-rocka sa zvucima klapske tradicije i višeglasja.",
    bpm: 80, strumPattern: "arpeggio", drumPattern: "standard", bassPattern: "melodic", currentInst: "guitar_acoustic", fxPresetId: "dream_space"
  },
  {
    id: "cinim_pravu_stvar",
    name: "Činim Pravu Stvar (Gibonni)",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }
    ],
    songs: ["Činim pravu stvar — Gibonni (1999)"],
    desc: "Dirljiva ispovijest u modernom, bogatom mediteranskom aranžmanu s vrhunskom energijom.",
    bpm: 82, strumPattern: "strum", drumPattern: "standard", bassPattern: "root", currentInst: "piano", fxPresetId: "cozy_lounge"
  },
  {
    id: "tempera_gibonni",
    name: "Tempera (Gibonni)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 4, q: "maj", r: "III" }
    ],
    songs: ["Tempera — Gibonni (2001)"],
    desc: "Moćna, sjetna fuzija jazza i pop-rocka prekrasne ritmičnosti.",
    bpm: 74, strumPattern: "arpeggio", drumPattern: "standard", bassPattern: "melodic", currentInst: "guitar_electric_clean", fxPresetId: "dream_space"
  },
  {
    id: "cesarica_oliver",
    name: "Cesarica (Oliver Dragojević)",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" },
      { s: 0, q: "maj", r: "I" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Cesarica — Oliver Dragojević (1993)"],
    desc: "Runjićeva i Gibonnijeva himna ljubavi koja je redefinirala hrvatsku i regionalnu glazbenu scenu.",
    bpm: 74, strumPattern: "arpeggio", drumPattern: "standard", bassPattern: "melodic", currentInst: "piano", fxPresetId: "dream_space"
  },
  {
    id: "trag_u_beskraju",
    name: "Trag U Beskraju (Oliver)",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 4, q: "min", r: "iii" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }
    ],
    songs: ["Trag u beskraju — Oliver Dragojević (2002)"],
    desc: "Mediteranska čežnja i dalmatinski sentiment u čistom, baršunastom izdanju.",
    bpm: 78, strumPattern: "arpeggio", drumPattern: "standard", bassPattern: "root", currentInst: "piano", fxPresetId: "cozy_lounge"
  },
  {
    id: "galeb_i_ja",
    name: "Galeb I Ja (Oliver)",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" },
      { s: 2, q: "min", r: "ii" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Galeb i ja — Oliver Dragojević (1975)"],
    desc: "Spomenik dalmatinskoj šansoni, maestralan rad Zdenka Runjića.",
    bpm: 68, strumPattern: "arpeggio", drumPattern: "standard", bassPattern: "melodic", currentInst: "strings", fxPresetId: "cosmic_clouds"
  },
  {
    id: "ako_me_ostavis",
    name: "Ako Me Ostaviš (Mišo)",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }, { s: 5, q: "maj", r: "IV" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Ako me ostaviš — Mišo Kovač (1977)"],
    desc: "Stadion-pop fenomen, emotivni vrhunac i legendarno publika-pjeva-refren ozračje.",
    bpm: 84, strumPattern: "strum", drumPattern: "standard", bassPattern: "root", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  },
  {
    id: "drugi_rasplice_kosu",
    name: "Drugi Joj Raspliće Kosu",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Drugi joj raspliće kosu, noćas ja te gubim — Mišo Kovač (1976)"],
    desc: "Remek-djelo splitskog zabavnog melosa s kraljevskom patnjom u vokalima.",
    bpm: 88, strumPattern: "strum", drumPattern: "standard", bassPattern: "root", currentInst: "strings", fxPresetId: "cosmic_clouds"
  },
  {
    id: "prvog_poljupca_film",
    name: "Sjećam Se Prvog Poljupca",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }
    ],
    songs: ["Sjećam se prvog poljupca — Jura Stublić & Film (1987)"],
    desc: "Predivan, romantični i visoko nostalgični pop-rock klasik s optimističnih zagrebačkih ljeta.",
    bpm: 106, strumPattern: "strum", drumPattern: "rock", bassPattern: "root", currentInst: "guitar_acoustic", fxPresetId: "cozy_lounge"
  },
  {
    id: "zamisli_zivot_film",
    name: "Zamisli Život U Ritmu Plesa",
    category: "riff",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 5, q: "maj", r: "IV" }
    ],
    songs: ["Zamisli život u ritmu muzike za ples — Film (1981)"],
    desc: "Trijumf ranog ska-novog vala, instantna injekcija pozitivne energije i plesa.",
    bpm: 132, strumPattern: "block", drumPattern: "funk", bassPattern: "octave", currentInst: "guitar_electric_clean", fxPresetId: "crunchy"
  },
  {
    id: "moderna_djevojka_film",
    name: "Moderna Djevojka (Film)",
    category: "riff",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 5, q: "maj", r: "IV" }, { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }
    ],
    songs: ["Moderna devojka — Jura Stublić & Film (1981)"],
    desc: "Zabavan i ritmičan dragulj s oštrim orguljama i prepoznatljivo veselim bas dionicama.",
    bpm: 124, strumPattern: "block", drumPattern: "rock", bassPattern: "walk", currentInst: "synth", fxPresetId: "psychedelic"
  },
  {
    id: "jovano_jovanke_leb",
    name: "Jovano Jovanke (Leb I Sol)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 7, q: "maj", r: "V" }, { s: 5, q: "maj", r: "IV" }, { s: 4, q: "maj", r: "III" }
    ],
    songs: ["Jovano, Jovanke — Leb i Sol (1978)"],
    desc: "Genijalna makedonska narodna pjesma obrađena u 7/8 taktu s jazz-fusion dionicama Vlatka Stefanovskog.",
    bpm: 104, strumPattern: "balkan_7_8", drumPattern: "latin", bassPattern: "melodic", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  },
  {
    id: "cuvam_noc_leb",
    name: "Čuvam Noć Od Budnih",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Čuvam noć od budnih — Leb i Sol (1987)"],
    desc: "Sanjava i baršunasta jazz-pop dionica koja utjelovljuje vrhunsku sviračku eleganciju.",
    bpm: 80, strumPattern: "arpeggio", drumPattern: "latin", bassPattern: "melodic", currentInst: "guitar_electric_clean", fxPresetId: "dream_space"
  },
  {
    id: "moji_drugovi_bajaga",
    name: "Moji Drugovi (Bajaga)",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Moji drugovi — Bajaga i Instruktori (1996)"],
    desc: "Raspojasana kafanska i putnička himna za okupljanje stare ekipe iz egzila uz vesele ritmove truba.",
    bpm: 120, strumPattern: "strum", drumPattern: "standard", bassPattern: "walk", currentInst: "piano", fxPresetId: "crunchy"
  },
  {
    id: "plavi_safir_bajaga",
    name: "Plavi Safir (Bajaga)",
    category: "riff",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 10, q: "maj", r: "bVII" }, { s: 5, q: "maj", r: "IV" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Plavi safir — Bajaga i Instruktori (1988)"],
    desc: "Briljantni mixolydijski pop hit s upečatljivim orijentalnim prizvukom i plesnom ljetnom ritmikom.",
    bpm: 110, strumPattern: "block", drumPattern: "funk", bassPattern: "octave", currentInst: "synth", fxPresetId: "psychedelic"
  },
  {
    id: "voltima_bajaga",
    name: "220 U Voltima (Bajaga)",
    category: "riff",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 5, q: "maj", r: "IV" }
    ],
    songs: ["220 u voltima — Bajaga (1984)"],
    desc: "Trepereći elektrizirajući gitarski pop i optimistična himna rane beogradske scene.",
    bpm: 126, strumPattern: "block", drumPattern: "rock", bassPattern: "octave", currentInst: "guitar_electric_clean", fxPresetId: "crunchy"
  },
  {
    id: "naslovne_strane_corba",
    name: "Lutka Sa Naslovne Strane",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" },
      { s: 5, q: "maj", r: "IV" }, { s: 11, q: "dim", r: "vii" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Lutka sa naslovne strane — Riblja Čorba (1978)"],
    desc: "Veličanstveni, sirovi akustično-klavirski spomenik rock poetici Bore Đorđevića.",
    bpm: 72, strumPattern: "arpeggio", drumPattern: "standard", bassPattern: "melodic", currentInst: "piano", fxPresetId: "cozy_lounge"
  },
  {
    id: "pogledaj_dom_corba",
    name: "Pogledaj Dom Svoj Anđele",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Pogledaj dom svoj, anđele — Riblja Čorba (1985)"],
    desc: "Epska, monumentalno mračna i dramatična rock himna s dječjim zborom i simfonijskim prizvukom.",
    bpm: 78, strumPattern: "arpeggio", drumPattern: "standard", bassPattern: "root", currentInst: "strings", fxPresetId: "cosmic_clouds"
  },
  {
    id: "mlad_corba",
    name: "Kad Sam Bio Mlad (Čorba)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 7, q: "maj", r: "V" }, { s: 5, q: "maj", r: "IV" }, { s: 4, q: "maj", r: "III" }
    ],
    songs: ["Kad sam bio mlad — Riblja Čorba (1992)"],
    desc: "Kultna obrada Eric Burdona s ironičnim stihovima o starenju i prolaznosti.",
    bpm: 112, strumPattern: "strum", drumPattern: "rock", bassPattern: "root", currentInst: "guitar_electric_dist", fxPresetId: "crunchy"
  },
  {
    id: "kreni_prema_meni_breakers",
    name: "Kreni Prema Meni (Breakers)",
    category: "riff",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 5, q: "maj", r: "IV" }, { s: 0, q: "maj", r: "I" },
      { s: 7, q: "maj", r: "V" }, { s: 5, q: "maj", r: "IV" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Kreni prema meni — Partibrejkers (1989)"],
    desc: "Najpoznatiji balkan pank-blues riff svih vremena, čist adrenalin s potpisom Caneta i Antona.",
    bpm: 125, strumPattern: "block", drumPattern: "rock", bassPattern: "octave", currentInst: "guitar_electric_dist", fxPresetId: "heavy_lead"
  },
  {
    id: "gomila_breakers",
    name: "Hipnotisana Gomila (Breakers)",
    category: "riff",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 10, q: "maj", r: "bVII" }, { s: 0, q: "maj", r: "I" }, { s: 10, q: "maj", r: "bVII" }
    ],
    songs: ["Hipnotisana gomila — Partibrejkers (1989)"],
    desc: "Brz, prljav i visoko buntovnički punk-rock s legendarnom porukom 'mi nismo kao oni'.",
    bpm: 140, strumPattern: "block", drumPattern: "rock", bassPattern: "octave", currentInst: "guitar_electric_dist", fxPresetId: "heavy_lead"
  },
  {
    id: "yugo_rokenrol_orgazam",
    name: "Igra Rokenrol Cela Juga",
    category: "riff",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 5, q: "maj", r: "IV" }, { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }
    ],
    songs: ["Igra rokenrol cela Jugoslavija — Električni Orgazam (1988)"],
    desc: "Vesela plesna rock anthema sa sirovom energijom i najznačajnijom porukom predratnih godina.",
    bpm: 128, strumPattern: "block", drumPattern: "rock", bassPattern: "walk", currentInst: "guitar_electric_clean", fxPresetId: "crunchy"
  },
  {
    id: "papagaj_orgazam",
    name: "Zlatni Papagaj (Orgazam)",
    category: "riff",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Zlatni papagaj — Električni Orgazam (1981)"],
    desc: "Zabavan pankerski hit i oštri bunt protiv šminkerske omladine u starom Beogradu.",
    bpm: 148, strumPattern: "block", drumPattern: "rock", bassPattern: "octave", currentInst: "guitar_electric_dist", fxPresetId: "heavy_lead"
  },
  {
    id: "za_tebe_idijoti",
    name: "Za Tebe (KUD Idijoti)",
    category: "riff",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }
    ],
    songs: ["Za tebe — KUD Idijoti (1990)"],
    desc: "Pulsko-istarsko punk remek-djelo s iznimnim pop melodijama u refrenu.",
    bpm: 154, strumPattern: "block", drumPattern: "rock", bassPattern: "octave", currentInst: "guitar_electric_dist", fxPresetId: "heavy_lead"
  },
  {
    id: "bella_ciao_idijoti",
    name: "Bella Ciao (KUD Idijoti version)",
    category: "riff",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 9, q: "min", r: "vi" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Bella ciao — KUD Idijoti (1987)"],
    desc: "Punk obrada antifašističke himne sa žestokom istarskom energijom.",
    bpm: 160, strumPattern: "block", drumPattern: "rock", bassPattern: "octave", currentInst: "guitar_electric_dist", fxPresetId: "heavy_lead"
  },
  {
    id: "lijepa_li_si",
    name: "Lijepa Li Si (Thompson)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }
    ],
    songs: ["Lijepa li si — Thompson & Gosti (1998)"],
    desc: "Epska domoljubna i zavičajna himna s brzim i melodičnim folk-rock ugođajem.",
    bpm: 118, strumPattern: "strum", drumPattern: "rock", bassPattern: "root", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  },
  {
    id: "vjetar_s_dinare",
    name: "Vjetar S Dinare (Thompson)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Vjetar s Dinare — Thompson (1998)"],
    desc: "Teške gitare i tradicijski melos u hercegovačkom i dalmatinskom zaleđu.",
    bpm: 106, strumPattern: "strum", drumPattern: "rock", bassPattern: "octave", currentInst: "guitar_electric_dist", fxPresetId: "crunchy"
  },
  {
    id: "ona_se_budi_sarlo",
    name: "Ona Se Budi (Šarlo Akrobata)",
    category: "riff",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 10, q: "maj", r: "bVII" }, { s: 9, q: "min", r: "vi" }, { s: 10, q: "maj", r: "bVII" }
    ],
    songs: ["Ona se budi — Šarlo Akrobata (1981)"],
    desc: "Uvrnuto i genijalno art-wave remek-djelo Milana Mladenovića i Dušana Kojića Koje u minimalističkom ritmu.",
    bpm: 120, strumPattern: "block", drumPattern: "funk", bassPattern: "octave", currentInst: "guitar_electric_clean", fxPresetId: "psychedelic"
  },
  {
    id: "niko_niko_sarlo",
    name: "Niko Niko Kao Ja (Šarlo)",
    category: "riff",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 10, q: "maj", r: "bVII" }, { s: 5, q: "maj", r: "IV" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Niko niko kao ja — Šarlo Akrobata (1981)"],
    desc: "Buntovni, ironični hipnotički punk-bass groove koji je obilježio Paket Aranžman.",
    bpm: 144, strumPattern: "block", drumPattern: "funk", bassPattern: "octave", currentInst: "guitar_electric_dist", fxPresetId: "heavy_lead"
  },
  {
    id: "kafana_toma",
    name: "Kafana Je Moja Sudbina",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Kafana je moja sudbina — Toma Zdravković (1987)"],
    desc: "Ikonski spomenik bemskom kafanskom životu slavnog pjesnika i tragičara Tome Zdravkovića.",
    bpm: 92, strumPattern: "rumba", drumPattern: "latin", bassPattern: "melodic", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  },
  {
    id: "dotako_sam_dno_toma",
    name: "Dotak'o Sam Dno Života",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" },
      { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Dotak'o sam dno života — Toma Zdravković (1984)"],
    desc: "Čista elegija, pjesma o slomljenom srcu, propasti duše i patnji koja ostaje na dnu.",
    bpm: 88, strumPattern: "rumba", drumPattern: "latin", bassPattern: "melodic", currentInst: "piano", fxPresetId: "cozy_lounge"
  },
  {
    id: "mustuluk_haris",
    name: "Muštuluk (Haris Džinović)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" },
      { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Muštuluk — Haris Džinović (2009)"],
    desc: "Golemi moderni kafanski hit s bogatim rumba ritmovima i moćnim Harisovim vokalom.",
    bpm: 94, strumPattern: "rumba", drumPattern: "latin", bassPattern: "syncopated", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  },
  {
    id: "sit_kafano_haris",
    name: "I Tebe Sam Sit Kafano",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["I tebe sam sit kafano — Haris Džinović (1989)"],
    desc: "Bezvremenski vapaj za slobodom i smirajem nakon svih kafana i neprospavanih noći.",
    bpm: 96, strumPattern: "rumba", drumPattern: "latin", bassPattern: "melodic", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  },
  {
    id: "mladosti_josipa",
    name: "O Jednoj Mladosti (Josipa Lisac)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" },
      { s: 5, q: "maj", r: "IV" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["O jednoj mladosti — Josipa Lisac (1973)"],
    desc: "Monumentalna art-glem rock balada Karla Metikoša s Josipinim jedinstvenim, kozmičkim vokalom.",
    bpm: 66, strumPattern: "arpeggio", drumPattern: "standard", bassPattern: "melodic", currentInst: "strings", fxPresetId: "cosmic_clouds"
  },
  {
    id: "apokalipso_rundek",
    name: "Apokalipso (Darko Rundek)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Apokalipso — Darko Rundek (1997)"],
    desc: "Zavodljivi pop-chanson, latino ritmovi i karnevalski ugođaj post-novovalne zagrebačke inteligencije.",
    bpm: 98, strumPattern: "rumba", drumPattern: "latin", bassPattern: "melodic", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  },
  {
    id: "ruke_rundek",
    name: "Ruke (Darko Rundek)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Ruke — Darko Rundek (2002)"],
    desc: "Krasna, dirljiva i višeslojna šansona s predivnim prepletanjem francuskog šarma i balkanskog sevdaha.",
    bpm: 90, strumPattern: "arpeggio", drumPattern: "latin", bassPattern: "melodic", currentInst: "guitar_acoustic", fxPresetId: "dream_space"
  },
  {
    id: "teske_boje_bare",
    name: "Teške Boje (Goran Bare & Majke)",
    category: "riff",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }
    ],
    songs: ["Teške boje — Goran Bare & Majke (2011)"],
    desc: "Sirovi grunge-rock iskrene i duboke patnje iz Vinkovaca, s nezaboravnimBareovim karizmatičnim blues potpisom.",
    bpm: 104, strumPattern: "block", drumPattern: "rock", bassPattern: "root", currentInst: "guitar_electric_dist", fxPresetId: "heavy_lead"
  },
  {
    id: "budi_moja_voda_laufer",
    name: "Budi Moja Voda (Laufer)",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }
    ],
    songs: ["Budi moja voda — Laufer (1994)"],
    desc: "Riječka rock poezija Damira Urbana, remek-djelo devedesetih puno intimnosti.",
    bpm: 80, strumPattern: "arpeggio", drumPattern: "standard", bassPattern: "root", currentInst: "guitar_acoustic", fxPresetId: "dream_space"
  },
  {
    id: "ljubavno_hladno_pivo",
    name: "Pjevajte Nešto Ljubavno",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 5, q: "maj", r: "IV" }, { s: 7, q: "maj", r: "V" }, { s: 0, q: "maj", r: "I" }
    ],
    songs: ["Pjevajte nešto ljubavno — Hladno Pivo (1993)"],
    desc: "Kultni veseli zagrebački punk-folk hit o sviraču koji samo želi pjevati pjesme o ljubavi.",
    bpm: 144, strumPattern: "block", drumPattern: "rock", bassPattern: "octave", currentInst: "guitar_electric_dist", fxPresetId: "crunchy"
  },
  {
    id: "osjecaj_hladno_pivo",
    name: "Samo Za Taj Osjećaj (Pivo)",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }
    ],
    songs: ["Samo za taj osjećaj — Hladno Pivo (2003)"],
    desc: "Nostalgični rock marš s prelijepim gorko-slatkim tekstom i nezaboravnim vokalima.",
    bpm: 100, strumPattern: "strum", drumPattern: "rock", bassPattern: "root", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  },
  {
    id: "ero_svijeta_let3",
    name: "Ero S Onoga Svijeta (Let 3)",
    category: "classic",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 2, q: "min", r: "ii" }, { s: 4, q: "maj", r: "III" }, { s: 9, q: "min", r: "vi" }
    ],
    songs: ["Ero s onoga svijeta — Let 3 (2005)"],
    desc: "Genijalna avangardna, žestoko prljava rock obrada poznate Gotovčeve opere.",
    bpm: 116, strumPattern: "block", drumPattern: "rock", bassPattern: "octave", currentInst: "guitar_electric_dist", fxPresetId: "heavy_lead"
  },
  {
    id: "kazu_dubioza",
    name: "Kažu (Dubioza Kolektiv)",
    category: "riff",
    chords: [
      { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }, { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }
    ],
    songs: ["Kažu — Dubioza Kolektiv (2013)"],
    desc: "Kritički nastrojena ska-reggae-punk bomba s brzim poskakujućim bas linijama i prepoznatljivim synth trubama.",
    bpm: 135, strumPattern: "block", drumPattern: "funk", bassPattern: "octave", currentInst: "synth", fxPresetId: "crunchy"
  },
  {
    id: "lutka_sars",
    name: "Lutka (S.A.R.S.)",
    category: "classic",
    chords: [
      { s: 0, q: "maj", r: "I" }, { s: 7, q: "maj", r: "V" }, { s: 9, q: "min", r: "vi" }, { s: 5, q: "maj", r: "IV" }
    ],
    songs: ["Lutka — S.A.R.S. (2013)"],
    desc: "Bezvremenska, nježna i iznimno topla balada koja je postala najčešći prvi ples na vjenčanjima diljem regije.",
    bpm: 78, strumPattern: "strum", drumPattern: "standard", bassPattern: "root", currentInst: "guitar_acoustic", fxPresetId: "surf_spring"
  }
];

// Combine presets and expand them with their actual pedalboard configurations dynamically
export const PROG_DB = COMPACT_PROG_DB.map((preset) => {
  return {
    ...preset,
    pedalboard: PEDALBOARD_PRESETS[preset.fxPresetId] || PEDALBOARD_PRESETS.bypass
  };
});

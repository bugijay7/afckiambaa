import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaGlobe,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

// Assets
import heroImg from "../assets/hero3.jpeg";
import yourImportedImage from "../assets/mother.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
};

export default function Campuses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRegion, setActiveRegion] = useState("All");

  // Mocking the 400+ churches structure
  const allChurches = useMemo(() => [
   // 🔹 Nairobi Region
{ name: "Apostolic Faith Church Bahati Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Uthiru Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Njathaini Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Kangemi Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Mlolongo Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Githurai Kimbo Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Juja Town Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Gitambaya Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Ereri Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Longonot Town Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Dandora Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Kayole Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Ruai Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Kiamumbi Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Mwihoko Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Ruiru West Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Njiru Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Githurai 44 Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Marurui Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Kasarani Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Gachie Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Kagui Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Gitiha Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Githunguri Assembly", region: "Nairobi" },
{ name: "Apostolic Faith Church Juja Farm Assembly", region: "Nairobi" },


// 🔹 Naivasha Region
{ name: "Apostolic Faith Church Elementaita Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Gilgil Town Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Ol’Kalou Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Gema Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Langalanga Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Kamahia Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Eburru Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Chokereria Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Karura Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Captain Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Sogonoi Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Mihuti Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Wanjohi Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Kabati Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Gitare Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Karagita Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Ngondi Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Ebenezar Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Sero Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Moi Dabi Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Rehoboth Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Kayole Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Naivasha Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Nyondia Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Karati Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Gatamaiyo Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Kihoto Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Kwa Ben Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Gituru Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Koinange Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Kirima Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Matundura Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Muteithia Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Kinungi Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Kinamba Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Line Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Kangui Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Gatimu Assembly", region: "Naivasha" },
{ name: "Apostolic Faith Church Ol’jorolok Assembly", region: "Naivasha" },


// 🔹 Laikipia Region
{ name: "Apostolic Faith Church Muriru Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Nanyuki Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Ragati Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Kabaru Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Ngare-Ndere Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Chaka Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Munyu Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Nyahururu Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Mamboleo Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Kwa-Wanjiku Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Wiyumiririe Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Makutano Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Ngamini Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Nyonjoro Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Mbuyu Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Uruku Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Gathima Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Murichu Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Shauri Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Maina Assembly", region: "Laikipia" },
{ name: "Apostolic Faith Church Mairo-Inya Assembly", region: "Laikipia" },



// 🔹 Western Region
{ name: "Apostolic Faith Church Busia Assembly", region: "Western" },
{ name: "Apostolic Faith Church Airstrip Assembly", region: "Western" },
{ name: "Apostolic Faith Church Siroba Assembly", region: "Western" },
{ name: "Apostolic Faith Church Bwamani Assembly", region: "Western" },
{ name: "Apostolic Faith Church Boro Assembly", region: "Western" },
{ name: "Apostolic Faith Church Malaba Assembly", region: "Western" },
{ name: "Apostolic Faith Church Malakisi Assembly", region: "Western" },
{ name: "Apostolic Faith Church Adongosi Assembly", region: "Western" },
{ name: "Apostolic Faith Church Karisa Assembly", region: "Western" },
{ name: "Apostolic Faith Church Kimaeti Assembly", region: "Western" },
{ name: "Apostolic Faith Church Bungoma Assembly", region: "Western" },
{ name: "Apostolic Faith Church Kakamega Assembly", region: "Western" },
{ name: "Apostolic Faith Church Mumias Assembly", region: "Western" },
{ name: "Apostolic Faith Church Pangola Assembly", region: "Western" },
{ name: "Apostolic Faith Church Kabuchai Assembly", region: "Western" },
{ name: "Apostolic Faith Church Kiiziwa Assembly", region: "Western" },
{ name: "Apostolic Faith Church Lurenda Assembly", region: "Western" },
{ name: "Apostolic Faith Church G. Nkamiri Assembly", region: "Western" },
{ name: "Apostolic Faith Church Isibania Assembly", region: "Western" },
{ name: "Apostolic Faith Church Kisii Assembly", region: "Western" },
{ name: "Apostolic Faith Church Masembe Assembly", region: "Western" },


// 🔹 Eastern Region
{ name: "Apostolic Faith Church Sabasaba Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Iganjo Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Kenol Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Kamahuha Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Marura Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Makuyu Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Kiganjo Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Kiawaithanji Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Athara Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Kiunyu Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Embu Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Gaitegi Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Kirwara Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Kigio Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Kiriaini Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Giatutu Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Gatete Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Karangi Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Kathenge Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Gathigiriri Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Kiriko Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Githimu Assembly", region: "Eastern" },
{ name: "Apostolic Faith Church Nguka Assembly", region: "Eastern" },


// 🔹 Nyandarua Region
{ name: "Apostolic Faith Church Engineer Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Mumui Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Kitogu Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Ndunyu Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Bahati Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Nandarasi Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Kitiri Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Bush Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Kirarwa Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Kinja Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Githabai Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Heni Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Haraka Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Kanamba Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Kiandege Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Mbaruku Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Ruanyambo Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Karangatha Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Landmark Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Kambata Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Memo Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Murungaru Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Turasha Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Ndoroto Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Weru Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Kangutu Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Judea Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Thindi Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Centre Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Kinari Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Magumu Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Kamae Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Mwendandu Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Magina Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Muharati Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Magomano Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Njabini Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Kinamba Assembly", region: "Nyandarua" },
{ name: "Apostolic Faith Church Kiamweri Assembly", region: "Nyandarua" },


    // 🔹 Central Region (full names)
{ name: "Apostolic Faith Church Kiambaa Assembly", region: "Central" },
{ name: "Apostolic Faith Church Nduma Assembly", region: "Central" },
{ name: "Apostolic Faith Church Thamanda Assembly", region: "Central" },
{ name: "Apostolic Faith Church Gitaru Assembly", region: "Central" },
{ name: "Apostolic Faith Church Nderi Assembly", region: "Central" },
{ name: "Apostolic Faith Church Tehillah Assembly", region: "Central" },
{ name: "Apostolic Faith Church Lodwar Assembly", region: "Central" },
{ name: "Apostolic Faith Church Ngong Assembly", region: "Central" },
{ name: "Apostolic Faith Church Rongai Assembly", region: "Central" },
{ name: "Apostolic Faith Church Kajiado Assembly", region: "Central" },
{ name: "Apostolic Faith Church Lenana Assembly", region: "Central" },
{ name: "Apostolic Faith Church Highlands Assembly", region: "Central" },
{ name: "Apostolic Faith Church Kitengela Assembly", region: "Central" },
{ name: "Apostolic Faith Church Isinya Assembly", region: "Central" },
{ name: "Apostolic Faith Church Philadelphia Assembly", region: "Central" },
{ name: "Apostolic Faith Church Sunrise Assembly", region: "Central" },
{ name: "Apostolic Faith Church Thogoto Assembly", region: "Central" },
{ name: "Apostolic Faith Church Gikambura Assembly", region: "Central" },
{ name: "Apostolic Faith Church Dagoretti Assembly", region: "Central" },
{ name: "Apostolic Faith Church Kikuyu Assembly", region: "Central" },
{ name: "Apostolic Faith Church Riu-Nderi Assembly", region: "Central" },
{ name: "Apostolic Faith Church Riruta Assembly", region: "Central" },
{ name: "Apostolic Faith Church Matasia Assembly", region: "Central" },
{ name: "Apostolic Faith Church Kiserian Assembly", region: "Central" },
{ name: "Apostolic Faith Church Bulbul Assembly", region: "Central" },
{ name: "Apostolic Faith Church Rankau Assembly", region: "Central" },
{ name: "Apostolic Faith Church Oleilien Assembly", region: "Central" },
{ name: "Apostolic Faith Church Naserian Assembly", region: "Central" },
{ name: "Apostolic Faith Church Central Assembly", region: "Central" },
{ name: "Apostolic Faith Church Hindi Assembly", region: "Central" },
{ name: "Apostolic Faith Church Hongwe Assembly", region: "Central" },
{ name: "Apostolic Faith Church Moa Assembly", region: "Central" },
{ name: "Apostolic Faith Church Illasit Assembly", region: "Central" },
{ name: "Apostolic Faith Church Beersheba Assembly", region: "Central" },
{ name: "Apostolic Faith Church Maroroi Assembly", region: "Central" },

// 🔹 Aberdare Region
{ name: "Apostolic Faith Church Kinyona Assembly", region: "Aberdare" },
{ name: "Apostolic Faith Church Mununga Assembly", region: "Aberdare" },
{ name: "Apostolic Faith Church Ichichi Assembly", region: "Aberdare" },
{ name: "Apostolic Faith Church Ichichi Central Assembly", region: "Aberdare" },
{ name: "Apostolic Faith Church Mairi Assembly", region: "Aberdare" },
{ name: "Apostolic Faith Church Kangari Assembly", region: "Aberdare" },
{ name: "Apostolic Faith Church Kairitu Assembly", region: "Aberdare" },
{ name: "Apostolic Faith Church Karinga Assembly", region: "Aberdare" },
{ name: "Apostolic Faith Church Gatia-ini Assembly", region: "Aberdare" },
{ name: "Apostolic Faith Church Makomboki Assembly", region: "Aberdare" },
{ name: "Apostolic Faith Church Gatuura Assembly", region: "Aberdare" },
{ name: "Apostolic Faith Church Kanderedu Assembly", region: "Aberdare" },
{ name: "Apostolic Faith Church Kirwara Assembly", region: "Aberdare" },
{ name: "Apostolic Faith Church Gatiiguru Assembly", region: "Aberdare" },
// 🔹 Nakuru Region
{ name: "Apostolic Faith Church Bagaria Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Naishi Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Muthiga Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Naishi Game Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Elburgon Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Molo Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Matuiku Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Mukinyai Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Nyakiambi Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Mau Narok Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Mwisho Lami Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Tipis Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Mathungauta Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Store Mbili Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Kahuruko Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Tangi Tano Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Kiambogo Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Munanda Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Makongo Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Kiptangwanyi Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Meli Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Kanorero Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Kikapu Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Piave Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Pwani Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Gichobo Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Muriricua Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Senedeti Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Kihingo Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Bethany Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Bethsaida Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Njoro Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Bible College Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Free Area Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Chesirikwa Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Teta Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Mwangati Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Kimalang Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Mautor Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Miti Moja Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Arorwet Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Timbwalo Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Daranja Mungu Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Tinet Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Cheram Assembly", region: "Nakuru" },
{ name: "Apostolic Faith Church Kiromwek Assembly", region: "Nakuru" },

// 🔹 Uasin Gishu Region
{ name: "Apostolic Faith Church Maili Nne Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Kamumbi Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Langas Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Kipkalen Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Huruma Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Munyaka Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Ilula Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Malel Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Burnt Forest Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Rukuini Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Matharu Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Timboroa Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Kamuyu Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Rurigi Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Cherondo Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Kapsumbeiwa Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Kapchorwa Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Uson Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Sirwa Assembly", region: "Uasin Gishu" },
{ name: "Apostolic Faith Church Nandi Hills Assembly", region: "Uasin Gishu" },

// 🔹 Trans Nzoia Region
{ name: "Apostolic Faith Church Mois Bridge Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Karara Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Nabiswa Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Mukunga Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Kiminini Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Kiungani Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Maili Tatu Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Mucharage Juu Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Mucharage Chini Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Kibomet Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Lessos Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Kobos Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Gatua Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Amuka Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Matisi Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Trans-Nzoia Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Mitume Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Tuwani Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Chepchoina Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Bondeni Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Kirita Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Cheparus Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Chepkoiyo Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Aruba Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Makoi Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Muruguiywa Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Mokoyet Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Mapera Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Wamuini Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Tongareni Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Milimani Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Ndalu Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Machine Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Matunda Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Headquarters Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Soi Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Mito Mbili Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Mwaita Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Sibonga Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Leitagai Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Kamoi Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Kapterit Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Makutano Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Kipsambach Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Kiptoi Assembly", region: "Trans Nzoia" },
{ name: "Apostolic Faith Church Kahuho Assembly", region: "Trans Nzoia" },


// 🔹 Nyanza Region
{ name: "Apostolic Faith Church Mwamba Assembly", region: "Nyanza" },
{ name: "Apostolic Faith Church Amalemba Assembly", region: "Nyanza" },
{ name: "Apostolic Faith Church Kilimani Assembly", region: "Nyanza" },
{ name: "Apostolic Faith Church Kipkaren River Assembly", region: "Nyanza" },
{ name: "Apostolic Faith Church Webuye Assembly", region: "Nyanza" },
{ name: "Apostolic Faith Church Turbo Assembly", region: "Nyanza" },
{ name: "Apostolic Faith Church Kapsabet Assembly", region: "Nyanza" },

// 🔹 Narok Region
{ name: "Apostolic Faith Church Nairekia Enkare Assembly", region: "Narok" },
{ name: "Apostolic Faith Church Duka Moja Assembly", region: "Narok" },
{ name: "Apostolic Faith Church Maai Mahiu A Assembly", region: "Narok" },
{ name: "Apostolic Faith Church Maai Mahiu B Assembly", region: "Narok" },
{ name: "Apostolic Faith Church Suswa Assembly", region: "Narok" },
{ name: "Apostolic Faith Church Governor Assembly", region: "Narok" },
{ name: "Apostolic Faith Church Lelongo Assembly", region: "Narok" },
{ name: "Apostolic Faith Church Ntulele Assembly", region: "Narok" },
{ name: "Apostolic Faith Church Narok Town Assembly", region: "Narok" },
{ name: "Apostolic Faith Church EOR-Ekule Assembly", region: "Narok" },
{ name: "Apostolic Faith Church Enooseiya Assembly", region: "Narok" },
{ name: "Apostolic Faith Church Kojong’a Assembly", region: "Narok" },
{ name: "Apostolic Faith Church Sokutiek Assembly", region: "Narok" },
{ name: "Apostolic Faith Church Olenkumei Assembly", region: "Narok" },
{ name: "Apostolic Faith Church Majengo Assembly", region: "Narok" },

// 🔹 North Rift East Region
{ name: "Apostolic Faith Church Kapkatet Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Kaibos Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Siyoi Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Kapkech Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Kipkarinya Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Chorok Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Murkwijit Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Kapkai Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Ngasian Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Too-Sikiro Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Kapara Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Twayoi Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Riripko Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Murian Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Sekutyon Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Chemoril Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Marichor Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Mwotot Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Poito Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Kipsoen Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Kapolet Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Manyaka Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Mwamba Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Kachemokwer Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Chemakwez Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Mlimani Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Manian Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Lomuke Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Simotwo Assembly", region: "North Rift East" },
{ name: "Apostolic Faith Church Kanyoltin Assembly", region: "North Rift East" },


// 🔹 North Rift West Region
{ name: "Apostolic Faith Church Pser Assembly", region: "North Rift West" },
{ name: "Apostolic Faith Church Keringet Assembly", region: "North Rift West" },
{ name: "Apostolic Faith Church Kopoluk Assembly", region: "North Rift West" },
{ name: "Apostolic Faith Church Cheptapesha Assembly", region: "North Rift West" },
{ name: "Apostolic Faith Church Cheleper Assembly", region: "North Rift West" },
{ name: "Apostolic Faith Church Ywalateke Assembly", region: "North Rift West" },
{ name: "Apostolic Faith Church Chepreria Assembly", region: "North Rift West" },
{ name: "Apostolic Faith Church Kesogon Assembly", region: "North Rift West" },
{ name: "Apostolic Faith Church Bendera Assembly", region: "North Rift West" },
{ name: "Apostolic Faith Church Chewoyet Assembly", region: "North Rift West" },
{ name: "Apostolic Faith Church Kapyemut Assembly", region: "North Rift West" },
{ name: "Apostolic Faith Church Kamatira Assembly", region: "North Rift West" },


// 🔹 Southern Region
{ name: "Apostolic Faith Church Kwa Reuben Assembly", region: "Southern" },
{ name: "Apostolic Faith Church Embakasi Assembly", region: "Southern" },
{ name: "Apostolic Faith Church Utawala Assembly", region: "Southern" },
{ name: "Apostolic Faith Church Kawagware Assembly", region: "Southern" },
{ name: "Apostolic Faith Church Kware Assembly", region: "Southern" },
{ name: "Apostolic Faith Church Kitui Assembly", region: "Southern" },
{ name: "Apostolic Faith Church Makueni Assembly", region: "Southern" },

  ], []);

  const regions = [
    "All", "Central", "Nairobi", "Naivasha", "Laikipia", "Western",
    "Eastern", "Nyandarua", "Aberdare", "Nakuru", "Uasin Gishu", "Trans Nzoia", 
    "Nyanza", "Narok", "North Rift East", "North Rift West", "Southern"
  ];

  // Optimized Filter Logic
  const filteredChurches = allChurches.filter((church) => {
    const matchesRegion = activeRegion === "All" || church.region === activeRegion;
    const matchesSearch = church.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          church.town.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="bg-gray-200 text-black selection:bg-blue-100 min-h-screen font-sans">
  
  {/* HERO SECTION */}
  <section className="relative pt-48 pb-24 px-6 overflow-hidden bg-zinc-900">
    <img 
      src={heroImg} 
      alt="National Presence" 
      className="absolute inset-0 w-full   object-cover opacity-30 grayscale"
    />
    <div className="relative z-10 max-w-7xl mx-auto">
      <span className="text-amber-500 uppercase tracking-[0.4em] text-xs font-black block mb-6">
        National Directory
      </span>
      <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase leading-[0.8] mb-4">
        FIND A <span className="text-blue-600 italic">CAMPUS.</span>
      </h1>
    </div>
  </section>

  {/* NATIONAL HEADQUARTERS */}
  <section className="py-32 px-6 bg-gray-200">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
        <span className="inline-block px-4 py-1 bg-blue-900 text-white text-[10px] font-black uppercase tracking-widest">
          National Headquarters
        </span>
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          BAHATI <span className="text-blue-600 block">NAIROBI</span>
        </h2>
        <p className="text-2xl text-zinc-600 leading-tight font-bold max-w-xl">
          The central hub for all Apostolic Faith Church operations in Kenya, providing spiritual oversight to our {allChurches.length}+ campuses.
        </p>
        <a 
          href="https://apostolicfaithkenya.com" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest border-b-2 border-red-600 pb-2 hover:text-red-600 transition-colors group"
        >
          Visit Official Website <FaExternalLinkAlt className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
      <div className="lg:col-span-5 order-1 lg:order-2">
        <div className="relative p-4 border border-zinc-200">
          <img src={yourImportedImage} alt="Headquarters" className="w-full  hover:grayscale-0 transition-all duration-700 object-cover aspect-square md:aspect-auto" />
          <div className="absolute -bottom-8 -left-8 bg-amber-500 p-8 hidden md:block shadow-xl">
             <div className="h-2 w-12 bg-white mb-2"></div>
             <p className="text-white font-black uppercase text-xs tracking-tighter">Established Authority</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* REGION FILTER */}
  <nav className="sticky top-0 z-40 bg-amber-600 py-6 px-6 shadow-2xl">
    <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
      {regions.map((r) => (
        <button
          key={r}
          onClick={() => setActiveRegion(r)}
          className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all border ${
            activeRegion === r 
            ? "bg-blue-600 border-blue-600 text-white" 
            : "bg-transparent border-white/10 text-zinc-100 hover:border-white/40 hover:text-white"
          }`}
        >
          {r}
        </button>
      ))}
    </div>
  </nav>

  {/* DIRECTORY */}
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-black pb-8 gap-4">
      <div>
        <h3 className="text-4xl font-black uppercase tracking-tighter">
          Directory Results <span className="text-blue-600">({filteredChurches.length})</span>
        </h3>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
          Sorted alphabetically
        </span>
      </div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-300 border border-zinc-300 shadow-2xl">
      {filteredChurches.map((church) => (
        <div 
          key={church.name} 
          className="bg-white p-10 hover:bg-zinc-900 group transition-all duration-500 relative overflow-hidden"
        >
          <div className="flex gap-6 items-start relative z-10">
            <FaMapMarkerAlt className="text-2xl text-red-600 group-hover:text-blue-500 transition-colors" />
            <div className="space-y-2">
              <h5 className="text-xl font-black uppercase tracking-tight group-hover:text-white transition-colors">
                {church.name}
              </h5>
              <p className="text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-amber-500 transition-colors">
                {church.region} • {church.town}
              </p>
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 text-6xl text-zinc-50 group-hover:text-white/5 font-black italic transition-colors">
             AFC
          </div>
        </div>
      ))}
    </div>

    {/* EMPTY STATE */}
    {filteredChurches.length === 0 && (
      <div className="py-24 text-center space-y-8 bg-white border-4 border-dashed border-zinc-200">
        <p className="text-2xl font-bold text-zinc-400 italic">No campuses match your current search or filter.</p>
        <button 
          onClick={() => { setActiveRegion("All"); setSearchTerm(""); }}
          className="bg-black text-white px-10 py-4 font-black uppercase tracking-widest text-xs hover:bg-red-600 transition-all shadow-xl"
        >
          Reset All Filters
        </button>
      </div>
    )}
  </section>

  {/* FOOTER CALLOUT */}
  <section className="bg-blue-950 py-32 px-6 text-center text-white">
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
        MANY PARTS, <span className="italic text-amber-400">ONE BODY.</span>
      </h2>
      <div className="h-1 w-24 bg-white mx-auto"></div>
      <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto opacity-90 italic">
        "From the bustling streets of Nairobi to the quiet hills of the Rift, our mission remains the same: <span className="font-black not-italic border-b-4 border-red-600">Holiness unto the Lord.</span>"
      </p>
    </div>
  </section>

</div>

  
  );
}
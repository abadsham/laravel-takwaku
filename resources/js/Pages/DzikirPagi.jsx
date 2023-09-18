import React from "react";
import { Link, Head } from "@inertiajs/react";

export default function DzikirPagi() {
    return (
        <>
            <Head title="Dzikir Pagi" />

            <div className="font-inter antialiased bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-100 tracking-tight">
                <div className="flex flex-col min-h-screen overflow-hidden">
                    <main className="grow">
                        <section className="relative">
                            <div className="absolute inset-0 h-128 pt-16 box-content">
                                <img
                                    className="absolute inset-0 w-full h-full object-cover opacity-25"
                                    src="https://images.unsplash.com/photo-1603127047787-f7919173149c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                    width="1440"
                                    height="577"
                                    alt="About"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
                                    aria-hidden="true"
                                ></div>
                            </div>

                            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                                    <div className="max-w-3xl mx-auto">
                                        <article>
                                            <header className="mb-8">
                                                <div className="text-center text-3xl md:text-left">
                                                    <h1
                                                        className="h1 font-red-hat-display mb-4"
                                                        data-aos="fade-down"
                                                    >
                                                        Dzikir yang Dibaca di
                                                        Waktu Pagi
                                                    </h1>
                                                </div>
                                                <div className="md:flex md:items-center md:justify-between mt-5">
                                                    <div className="">
                                                        <div>
                                                            <span className="text-gray-600 dark:text-gray-400">
                                                                Oleh :{" "}
                                                            </span>
                                                            <a
                                                                className="font-medium text-gray-800 dark:text-gray-300 hover:underline"
                                                                href="#0"
                                                            >
                                                                Muhammad Abduh
                                                                Tuasikal, MSc
                                                            </a>
                                                            <span className="text-gray-600 dark:text-gray-400">
                                                                {" "}
                                                                · March 31, 2015
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </header>
                                            <hr className="w-5 h-px pt-px bg-gray-400 dark:bg-gray-500 border-0 mb-8" />

                                            <p className="mb-8">
                                                Dari Anas bin Malik رضي الله عنه
                                                ia berkata: "Rasulullah صلي الله
                                                عليه وسلم bersabda: <br />
                                                <br />
                                                'Aku duduk bersama orang-orang
                                                yang berdzikir kepada Allah dari
                                                mulai shalat Shubuh sampai
                                                terbit matahari lebih aku sukai
                                                dari memerdekakan empat orang
                                                budak dari anak Isma'il. Dan aku
                                                duduk bersama orang-orang yang
                                                berdzikir kepada Allah dari
                                                mulai shalat 'Ashar sampai
                                                terbenam matahari lebih aku
                                                cintai dari memerdekakan empat
                                                orang budak.'" (HR. Abu Dawud
                                                no. 3667, hasan).
                                                <br />
                                                <br /> Imam Ibnu Qayyim رحمه
                                                الله berkata: "Waktunya antara
                                                Shubuh hingga terbit matahari,
                                                dan antara 'Ashar hingga
                                                terbenam matahari."
                                            </p>
                                            <div className="text-lg text-gray-600 dark:text-gray-400 mb-32">
                                                <figure className="mb-8">
                                                    <img
                                                        className="w-full"
                                                        src="https://cdn.pixabay.com/photo/2019/10/24/10/51/morning-4573991_1280.jpg"
                                                        width="768"
                                                        height="432"
                                                        alt="News inner"
                                                    />
                                                    <figcaption className="text-sm text-center text-gray-500 mt-3">
                                                        gambar ilustrasi pagi
                                                        hari
                                                    </figcaption>
                                                </figure>
                                                <p className="mb-8">
                                                    <strong className="font-medium text-gray-900 dark:text-gray-100">
                                                        Bacaan Dzikir Pagi Hari
                                                    </strong>
                                                </p>
                                                <p className="mb-8">
                                                    Dalil dari al-Qur-an tentang
                                                    Dzikir Pagi dan Petang.
                                                    <br />
                                                    <br />
                                                    يَا أَيُّهَا الَّذِينَ
                                                    آمَنُوا اذْكُرُوا اللَّهَ
                                                    ذِكْراً كَثِيراً.
                                                    وَسَبِّحُوهُ بُكْرَةً
                                                    وَأَصِيلاً <br />
                                                    <br />
                                                    "Hai orang-orang yang
                                                    beriman, berdzikirlah
                                                    (dengan menyebut Nama) Allah
                                                    dzikir yang
                                                    se­banyak-banyaknya. Dan
                                                    bertasbihlah kepada-Nya di
                                                    waktu pagi dan petang." (QS.
                                                    Al-Ahzab: 41-42).
                                                    <br />
                                                    <br /> Al-Jauhari (seorang
                                                    ahli bahasa Arab) ber­kata:
                                                    (أَصِيلاً) artinya, waktu
                                                    antara 'Ashar sampai
                                                    Maghrib." فَاصْبِرْ إِنَّ
                                                    وَعْدَ اللَّهِ حَقٌّ
                                                    وَاسْتَغْفِرْ لِذَنبِكَ
                                                    وَسَبِّحْ بِحَمْدِ رَبِّكَ
                                                    بِالْعَشِيِّ وَالْإِبْكَارِ
                                                    "Maka bersabarlah kamu,
                                                    karena sesungguhnya janji
                                                    Allah itu benar, dan
                                                    mohonlah ampunan untuk
                                                    dosamu dan bertasbihlah
                                                    seraya memuji Rabb-mu pada
                                                    waktu petang dan pagi." (QS.
                                                    Al-Mu'min: 55)
                                                    <br />
                                                    <br />
                                                    ======================={" "}
                                                    <br />
                                                    <br />
                                                    Membaca Ayat Kursi <br />
                                                    <br />
                                                    أَعُوذُ بِاللَّهِ مِنْ
                                                    الشَّيْطَانِ الرَّجِيمِ{" "}
                                                    <br />
                                                    <br />
                                                    "Aku berlindung kepada Allah
                                                    dari godaan syaitan yang
                                                    terkutuk." <br />
                                                    <br />
                                                    اللَّهُ لاَ إِلَهَ إِلاَّ
                                                    هُوَ الْحَيُّ الْقَيُّومُ،
                                                    لاَ تَأْخُذُهُ سِنَةٌ وَلاَ
                                                    نَوْمٌ، لَهُ مَا فِي
                                                    السَّمَاوَاتِ وَمَا فِي
                                                    الْأَرْضِ، مَنْ ذَا الَّذِي
                                                    يَشْفَعُ عِنْدَهُ إِلاَّ
                                                    بِإِذْنِهِ، يَعْلَمُ مَا
                                                    بَيْنَ أَيْدِيهِمْ وَمَا
                                                    خَلْفَهُمْ، وَلَا يُحِيطُونَ
                                                    بِشَيْءٍ مِنْ عِلْمِهِ
                                                    إِلاَّ بِمَا شَاءَ، وَسِعَ
                                                    كُرْسِيُّهُ السَّمَاوَاتِ
                                                    وَالْأَرْضَ، وَلَا يَئُودُهُ
                                                    حِفْظُهُمَا، وَهُوَ
                                                    الْعَلِيُّ الْعَظِيمُ <br />
                                                    <br />
                                                    "Allah tidak ada Ilah (yang
                                                    berhak diibadahi) me­lainkan
                                                    Dia Yang Hidup Kekal lagi
                                                    terus menerus mengurus
                                                    (makhluk-Nya); tidak
                                                    mengantuk dan tidak tidur.
                                                    Kepunyaan-Nya apa yang ada
                                                    di langit dan di bumi. Tidak
                                                    ada yang dapat memberi
                                                    syafa'at di sisi Allah tanpa
                                                    izin-Nya. Allah mengetahui
                                                    apa-apa yang (berada)
                                                    dihadapan mereka, dan
                                                    dibelakang mereka dan mereka
                                                    tidak mengetahui apa-apa
                                                    dari Ilmu Allah melainkan
                                                    apa yang dikehendaki-Nya.
                                                    Kursi Allah meliputi langit
                                                    dan bumi. Dan Allah tidak
                                                    merasa berat memelihara
                                                    keduanya, Allah Mahatinggi
                                                    lagi Mahabesar." Al-Baqarah:
                                                    255).(Dibaca 1x).
                                                    <br />
                                                    <small className="font-bold">
                                                        *Faedah: Siapa yang
                                                        membacanya ketika
                                                        petang, maka ia akan
                                                        dilindungi (oleh Allah
                                                        dari berbagai gangguan)
                                                        hingga pagi. Siapa yang
                                                        membacanya ketika pagi,
                                                        maka ia akan dilindungi
                                                        hingga petang.
                                                    </small>
                                                    . [1] <br /> <br /> Membaca
                                                    Surat Al-Ikhlas
                                                    <br />
                                                    <br />
                                                    بِسْمِ اللَّهِ الرَّحْمَنِ
                                                    الرَّحِيمِ قُلْ هُوَ اللَّهُ
                                                    أَحَدٌ اللَّهُ الصَّمَدُ
                                                    لَمْ يَلِدْ وَلَمْ يُولَدْ
                                                    وَلَمْ يَكُن لَّهُ كُفُوًا
                                                    أَحَدٌ <br />
                                                    <br />
                                                    "Katakanlah, Dia-lah Allah
                                                    Yang Maha Esa. Allah adalah
                                                    (Rabb) yang segala sesuatu
                                                    bergantung kepada-Nya. Dia
                                                    tidak beranak dan tidak pula
                                                    diper­anakkan. Dan tidak ada
                                                    seorang pun yang setara
                                                    dengan-Nya.'" (QS.
                                                    Al-Ikhlash: 1-4).
                                                    <small>(Dibaca 3x).</small>
                                                    . [2] <br /> <br /> Membaca
                                                    Surat Al-Falaq
                                                    <br />
                                                    <br />
                                                    بِسْمِ اللَّهِ الرَّحْمَنِ
                                                    الرَّحِيمِ قُلْ أَعُوذُ
                                                    بِرَبِّ الْفَلَقِ مِن شَرِّ
                                                    مَا خَلَقَ وَمِن شَرِّ
                                                    غَاسِقٍ إِذَا وَقَبَ وَمِن
                                                    شَرِّ النَّفَّاثَاتِ فِي
                                                    الْعُقَدِ وَمِن شَرِّ
                                                    حَاسِدٍ إِذَا حَسَدَ
                                                    <br />
                                                    <br />
                                                    "Katakanlah: 'Aku berlindung
                                                    kepada Rabb Yang menguasai
                                                    (waktu) Shubuh dari
                                                    kejahatan makhluk-Nya. Dan
                                                    dari kejahatan malam apabila
                                                    telah gelap gulita. Dan dari
                                                    kejahatan wanita-wanita
                                                    tukang sihir yang menghembus
                                                    pada buhul-buhul. Serta dari
                                                    kejahatan orang yang dengki
                                                    apabila dia dengki."' (QS.
                                                    Al-Falaq: 1-5). (Dibaca 3x).
                                                    <br />
                                                    <small className="font-bold">
                                                        *Faedah: Siapa yang
                                                        mengucapkannya
                                                        masing-masing tiga kali
                                                        ketika pagi dan petang,
                                                        maka segala sesuatu akan
                                                        dicukupkan untuknya.
                                                    </small>
                                                    . [3] <br /> <br /> Membaca
                                                    Surat An-Naas
                                                    <br />
                                                    <br />
                                                    بِسْمِ اللَّهِ الرَّحْمَنِ
                                                    الرَّحِيمِ قُلْ أَعُوذُ
                                                    بِرَبِّ النَّاسِ مَلِكِ
                                                    النَّاسِ إِلَهِ النَّاسِ مِن
                                                    شَرِّ الْوَسْوَاسِ
                                                    الْخَنَّاسِ الَّذِي
                                                    يُوَسْوِسُ فِي صُدُورِ
                                                    النَّاسِ مِنَ الْجِنَّةِ وَ
                                                    النَّاسِ <br />
                                                    <br />
                                                    "Katakanlah, 'Aku berlindung
                                                    kepada Rabb (yang memelihara
                                                    dan menguasai) manusia. Raja
                                                    manusia. Sembahan (Ilah)
                                                    manusia. Dari kejahatan
                                                    (bisikan) syaitan yang biasa
                                                    bersembunyi. Yang
                                                    membisik­kan (kejahatan) ke
                                                    dalam dada-dada manusia.
                                                    Dari golongan jin dan
                                                    manusia.'" (QS. An-Naas:
                                                    1-6) (Dibaca pagi dan sore
                                                    3x) <br />
                                                    <small className="font-bold">
                                                        *Faedah: Meminta pada
                                                        Allah kebaikan di hari
                                                        ini dan kebaikan
                                                        sesudahnya, juga agar
                                                        terhindar dari kejelekan
                                                        di hari ini dan
                                                        kejelekan sesudahnya. Di
                                                        dalamnya berisi pula
                                                        permintaan agar
                                                        terhindar dari rasa
                                                        malas padahal mampu
                                                        untuk beramal, juga agar
                                                        terhindar dari kejelekan
                                                        di masa tua. Di dalamnya
                                                        juga berisi permintaan
                                                        agar terselamatkan dari
                                                        siksa kubur dan siksa
                                                        neraka yang merupakan
                                                        siksa terberat di hari
                                                        kiamat kelak.
                                                    </small>
                                                    . [4] <br /> <br />
                                                    Ketika pagi hari, <br />
                                                    Rasulullah صلي الله عليه
                                                    وسلم membaca:
                                                    <br />
                                                    <br /> أَصْبَحْنَا
                                                    وَأَصْبَحَ الْمُلْكُ
                                                    لِلَّهِ، وَالْحَمْدُ
                                                    لِلَّهِ، لاَ إِلَـهَ إِلاَّ
                                                    اللهُ وَحْدَهُ لاَ شَرِيْكَ
                                                    لَهُ، لَهُ الْمُلْكُ وَلَهُ
                                                    الْحَمْدُ وَهُوَ عَلَى كُلِّ
                                                    شَيْءٍ قَدِيْرُ. رَبِّ
                                                    أَسْأَلُكَ خَيْرَ مَا فِيْ
                                                    هَذَا الْيَوْمِ وَخَيْرَ مَا
                                                    بَعْدَهُ، وَأَعُوْذُ بِكَ
                                                    مِنْ شَرِّ مَا فِيْ هَذَا
                                                    الْيَوْمِ وَشَرِّ مَا
                                                    بَعْدَهُ، رَبِّ أَعُوْذُ
                                                    بِكَ مِنَ الْكَسَلِ وَسُوْءِ
                                                    الْكِبَرِ، رَبِّ أَعُوْذُ
                                                    بِكَ مِنْ عَذَابٍ فِي
                                                    النَّارِ وَعَذَابٍ فِي
                                                    الْقَبْرِ. <br />
                                                    <br />
                                                    "Kami telah memasuki waktu
                                                    pagi dan kerajaan hanya
                                                    milik Allah, segala puji
                                                    hanya milik Allah. Tidak ada
                                                    Ilah (yang berhak diibadahi
                                                    dengan benar) kecuali Allah
                                                    Yang Maha Esa, tiada sekutu
                                                    bagi-Nya. Bagi-Nya kerajaan
                                                    dan bagi-Nya pujian. Dia-lah
                                                    Yang Mahakuasa atas segala
                                                    sesuatu. Wahai Rabb, aku
                                                    mohon kepada-Mu kebaikan di
                                                    hari ini dan kebaikan
                                                    sesudahnya. Aku berlindung
                                                    kepada-Mu dari kejahatan
                                                    hari ini dan kejahatan
                                                    sesudahnya. Wahai Rabb, aku
                                                    berlindung kepada-Mu dari
                                                    kemalasan dan kejelekan di
                                                    hari tua. Wahai Rabb, aku
                                                    berlindung kepada-Mu dari
                                                    siksaan di Neraka dan
                                                    siksaan di kubur." (Dibaca
                                                    pagi 1x)
                                                    <br />
                                                    <small className="font-bold">
                                                        Faedah: Meminta pada
                                                        Allah kebaikan di hari
                                                        ini dan kebaikan
                                                        sesudahnya, juga agar
                                                        terhindar dari kejelekan
                                                        di hari ini dan
                                                        kejelekan sesudahnya. Di
                                                        dalamnya berisi pula
                                                        permintaan agar
                                                        terhindar dari rasa
                                                        malas padahal mampu
                                                        untuk beramal, juga agar
                                                        terhindar dari kejelekan
                                                        di masa tua. Di dalamnya
                                                        juga berisi permintaan
                                                        agar terselamatkan dari
                                                        siksa kubur dan siksa
                                                        neraka yang merupakan
                                                        siksa terberat di hari
                                                        kiamat kelak.
                                                    </small>
                                                    . [5] <br /> <br />
                                                    Membaca
                                                    <br />
                                                    Ketika pagi, <br />
                                                    Rasulullah صلي الله عليه
                                                    وسلم membaca:
                                                    <br />
                                                    <br />
                                                    اَللَّهُمَّ بِكَ
                                                    أَصْبَحْنَا، وَبِكَ
                                                    أَمْسَيْنَا، وَبِكَ نَحْيَا،
                                                    وَبِكَ نَمُوْتُ وَإِلَيْكَ
                                                    النُّشُوْرُ. <br />
                                                    <br />
                                                    "Ya Allah, dengan rahmat dan
                                                    pertolongan-Mu kami memasuki
                                                    waktu pagi, dan dengan
                                                    rahmat dan pertolongan-Mu
                                                    kami memasuki waktu sore.
                                                    Dengan rahmat dan
                                                    kehendak-Mu kami hidup dan
                                                    dengan rahmat dan
                                                    kehendak-Mu kami mati. Dan
                                                    kepada-Mu kebangkitan (bagi
                                                    semua makhluk)." (Dibaca
                                                    pagi 1x)[6]. <br />
                                                    <br /> Membaca Sayyidul
                                                    Istighfar <br />
                                                    <br />
                                                    اَللَّهُمَّ أَنْتَ رَبِّيْ
                                                    لاَ إِلَـهَ إِلاَّ أَنْتَ،
                                                    خَلَقْتَنِيْ وَأَنَا
                                                    عَبْدُكَ، وَأَنَا عَلَى
                                                    عَهْدِكَ وَوَعْدِكَ مَا
                                                    اسْتَطَعْتُ، أَعُوْذُ بِكَ
                                                    مِنْ شَرِّ مَا صَنَعْتُ،
                                                    أَبُوْءُ لَكَ بِنِعْمَتِكَ
                                                    عَلَيَّ، وَأَبُوْءُ
                                                    بِذَنْبِيْ فَاغْفِرْ لِيْ
                                                    فَإِنَّهُ لاَ يَغْفِرُ
                                                    الذُّنُوْبَ إِلاَّ أَنْتَ.
                                                    <br />
                                                    <br />
                                                    "Ya Allah, Engkau adalah
                                                    Rabb-ku, tidak ada Ilah
                                                    (yang berhak diibadahi
                                                    dengan benar) kecuali
                                                    Engkau, Engkau-lah yang
                                                    menciptakanku. Aku adalah
                                                    hamba-Mu. Aku akan setia
                                                    pada perjanjian­ku dengan-Mu
                                                    semampuku. Aku berlindung
                                                    ke­pada-Mu dari kejelekan
                                                    (apa) yang kuperbuat. Aku
                                                    mengakui nikmat-Mu (yang
                                                    diberikan) kepadaku dan aku
                                                    mengakui dosaku, oleh karena
                                                    itu, ampuni­lah aku.
                                                    Sesungguhnya tidak ada yang
                                                    dapat me­ngampuni dosa
                                                    kecuali Engkau." (Dibaca
                                                    diwaktu pagi 1x) . [7]
                                                    <br />
                                                    <small className="font-bold">
                                                        *Faedah: Barangsiapa
                                                        mengucapkan dzikir ini
                                                        di siang hari dalam
                                                        keadaan penuh keyakinan,
                                                        lalu ia mati pada hari
                                                        tersebut sebelum petang
                                                        hari, maka ia termasuk
                                                        penghuni surga.
                                                        Barangsiapa yang
                                                        mengucapkannya di malam
                                                        hari dalam keadaan penuh
                                                        keyakinan, lalu ia mati
                                                        sebelum pagi, maka ia
                                                        termasuk penghuni surga.
                                                    </small>
                                                    <br />
                                                    <br />
                                                    Membaca, <br />
                                                    <br />
                                                    اَللَّهُمَّ إِنِّيْ
                                                    أَصْبَحْتُ أُشْهِدُكَ
                                                    وَأُشْهِدُ حَمَلَةَ
                                                    عَرْشِكَ، وَمَلاَئِكَتَكَ
                                                    وَجَمِيْعَ خَلْقِكَ، أَنَّكَ
                                                    أَنْتَ اللهُ لاَ إِلَـهَ
                                                    إِلاَّ أَنْتَ وَحْدَكَ لاَ
                                                    شَرِيْكَ لَكَ، وَأَنَّ
                                                    مُحَمَّدًا عَبْدُكَ
                                                    وَرَسُوْلُكَ <br />
                                                    <br /> “Ya Allah,
                                                    sesungguhnya aku di waktu
                                                    pagi ini mempersaksikan
                                                    Engkau, malaikat yang
                                                    memikul ‘Arys-Mu,
                                                    malaikat-malaikat dan
                                                    seluruh makhluk-Mu, bahwa
                                                    sesungguhnya Engkau adalah
                                                    Allah, tiada ilah yang
                                                    berhak disembah kecuali
                                                    Engkau semata, tiada sekutu
                                                    bagi-Mu dan sesungguhnya
                                                    Muhammad adalah hamba dan
                                                    utusan-Mu.” (Dibaca 4 x)
                                                    <br />
                                                    <small className="font-bold">
                                                        *Faedah: Barangsiapa
                                                        yang mengucapkan dzikir
                                                        ini ketika pagi dan
                                                        petang hari sebanyak
                                                        empat kali, maka Allah
                                                        akan membebaskan dirinya
                                                        dari siksa neraka.
                                                    </small>
                                                    . [6] <br /> <br />
                                                    Membaca, <br />
                                                    <br /> اَللَّهُمَّ عَافِنِيْ
                                                    فِيْ بَدَنِيْ، اَللَّهُمَّ
                                                    عَافِنِيْ فِيْ سَمْعِيْ،
                                                    اَللَّهُمَّ عَافِنِيْ فِيْ
                                                    بَصَرِيْ، لاَ إِلَـهَ إِلاَّ
                                                    أَنْتَ. اَللَّهُمَّ إِنِّي
                                                    أَعُوْذُ بِكَ مِنَ الْكُفْرِ
                                                    وَالْفَقْرِ، وَأَعُوْذُ بِكَ
                                                    مِنْ عَذَابِ الْقَبْرِ، لاَ
                                                    إِلَـهَ إِلاَّ أَنْتَ "Ya
                                                    Allah, selamatkanlah tubuhku
                                                    (dari penyakit dan dari apa
                                                    yang tidak aku inginkan). Ya
                                                    Allah, selamatkanlah
                                                    pendengaranku (dari penyakit
                                                    dan maksiat atau dari apa
                                                    yang tidak aku inginkan). Ya
                                                    Allah, selamatkanlah
                                                    penglihatanku, tidak ada
                                                    Ilah (yang berhak diibadahi)
                                                    kecuali Engkau. Ya Allah,
                                                    sesungguhnya aku berlindung
                                                    kepada-Mu dari kekufuran dan
                                                    kefakiran. Aku berlindung
                                                    kepada-Mu dari siksa kubur,
                                                    tidak ada Ilah (yang berhak
                                                    diibadahi) kecuali Engkau."
                                                    (Dibaca 3x) . [8] <br />{" "}
                                                    <br /> Membaca <br />
                                                    <br /> اَللَّهُمَّ إِنِّيْ
                                                    أَسْأَلُكَ الْعَفْوَ
                                                    وَالْعَافِيَةَ فِي
                                                    الدُّنْيَا وَاْلآخِرَةِ،
                                                    اَللَّهُمَّ إِنِّيْ
                                                    أَسْأَلُكَ الْعَفْوَ
                                                    وَالْعَافِيَةَ فِي دِيْنِيْ
                                                    وَدُنْيَايَ وَأَهْلِيْ
                                                    وَمَالِيْ اللَّهُمَّ اسْتُرْ
                                                    عَوْرَاتِى وَآمِنْ
                                                    رَوْعَاتِى. اَللَّهُمَّ
                                                    احْفَظْنِيْ مِنْ بَيْنِ
                                                    يَدَيَّ، وَمِنْ خَلْفِيْ،
                                                    وَعَنْ يَمِيْنِيْ وَعَنْ
                                                    شِمَالِيْ، وَمِنْ فَوْقِيْ،
                                                    وَأَعُوْذُ بِعَظَمَتِكَ أَنْ
                                                    أُغْتَالَ مِنْ تَحْتِيْ.{" "}
                                                    <br />
                                                    <br />
                                                    "Ya Allah, sesungguhnya aku
                                                    memohon kebajikan dan
                                                    keselamatan di dunia dan
                                                    akhirat. Ya Allah,
                                                    sesungguhnya aku memohon
                                                    kebajikan dan ke­selamatan
                                                    dalam agama, dunia, keluarga
                                                    dan harta­ku. Ya Allah,
                                                    tutupilah auratku (aib dan
                                                    sesuatu yang tidak layak
                                                    dilihat orang) dan
                                                    tentramkan-lah aku dari rasa
                                                    takut. Ya Allah, peliharalah
                                                    aku dari depan, belakang,
                                                    kanan, kiri dan dari atasku.
                                                    Aku berlindung dengan
                                                    kebesaran-Mu, agar aku tidak
                                                    disambar dari bawahku (aku
                                                    berlindung dari dibenamkan
                                                    ke dalam bumi)." (Dibaca 1x)
                                                    <br />
                                                    <small className="font-bold">
                                                        *Faedah: Rasulullah
                                                        shallallahu ‘alaihi wa
                                                        sallam tidaklah pernah
                                                        meninggalkan do’a ini di
                                                        pagi dan petang hari. Di
                                                        dalamnya berisi
                                                        perlindungan dan
                                                        keselamatan pada agama,
                                                        dunia, keluarga dan
                                                        harta dari berbagai
                                                        macam gangguan yang
                                                        datang dari berbagai
                                                        arah.
                                                    </small>
                                                    . [9] <br /> <br /> Membaca
                                                    <br />
                                                    <br /> اَللَّهُمَّ عَالِمَ
                                                    الْغَيْبِ وَالشَّهَادَةِ
                                                    فَاطِرَ السَّمَاوَاتِ
                                                    وَاْلأَرْضِ، رَبَّ كُلِّ
                                                    شَيْءٍ وَمَلِيْكَهُ،
                                                    أَشْهَدُ أَنْ لاَ إِلَـهَ
                                                    إِلاَّ أَنْتَ، أَعُوْذُ بِكَ
                                                    مِنْ شَرِّ نَفْسِيْ، وَمِنْ
                                                    شَرِّ الشَّيْطَانِ
                                                    وَشِرْكِهِ، وَأَنْ
                                                    أَقْتَرِفَ عَلَى نَفْسِيْ
                                                    سُوْءًا أَوْ أَجُرُّهُ إِلَى
                                                    مُسْلِمٍ. <br />
                                                    <br />
                                                    "Ya Allah Yang
                                                    Mahamengetahui yang ghaib
                                                    dan yang nyata, wahai Rabb
                                                    Pencipta langit dan bumi,
                                                    Rabb atas segala sesuatu dan
                                                    Yang Merajainya. Aku
                                                    bersaksi bahwa tidak ada
                                                    Ilah (yang berhak diibadahi)
                                                    kecuali Engkau. Aku
                                                    berlindung ke­pada-Mu dari
                                                    kejahatan diriku, syaitan
                                                    dan sekutu­nya, (aku
                                                    berlindung kepada-Mu) dari
                                                    berbuat kejelekan atas
                                                    diriku atau mendorong
                                                    seorang muslim kepadanya."
                                                    (Dibaca pagi dan sore 1x)
                                                    <small className="font-bold">
                                                        *Faedah: Do’a ini
                                                        diajarkan oleh
                                                        Rasulullah shallallahu
                                                        ‘alaihi wa sallam pada
                                                        Abu Bakr Ash Shiddiq
                                                        radhiyallahu ‘anhu untuk
                                                        dibaca pada pagi, petang
                                                        dan saat beranjak tidur.
                                                    </small>
                                                    . [10] <br /> <br /> Membaca{" "}
                                                    <br />
                                                    <br /> بِسْمِ اللهِ لاَ
                                                    يَضُرُّ مَعَ اسْمِهِ شَيْءٌ
                                                    فِي اْلأَرْضِ وَلاَ فِي
                                                    السَّمَاءِ وَهُوَ
                                                    السَّمِيْعُ الْعَلِيْمُ
                                                    <br />
                                                    <br />
                                                    "Dengan Nama Allah yang
                                                    tidak ada bahaya atas
                                                    Nama-Nya sesuatu di bumi dan
                                                    tidak pula dilangit. Dia-lah
                                                    Yang Mahamendengar dan
                                                    Mahamengetahui." (Dibaca
                                                    pagi dan sore 3x)
                                                    <small className="font-bold">
                                                        *Faedah: Barangsiapa
                                                        yang mengucapkan dzikir
                                                        tersebut sebanyak tiga
                                                        kali di pagi hari dan
                                                        tiga kali di petang
                                                        hari, maka tidak akan
                                                        ada bahaya yang
                                                        tiba-tiba
                                                        memudaratkannya.
                                                    </small>{" "}
                                                    . [11] <br /> <br />
                                                    Membaca
                                                    <br />
                                                    <br /> رَضِيْتُ بِاللهِ
                                                    رَبًّا، وَبِاْلإِسْلاَمِ
                                                    دِيْنًا، وَبِمُحَمَّدٍ
                                                    صَلَّى اللهُ عَلَيْهِ
                                                    وَسَلَّمَ نَبِيًّا <br />
                                                    <br />
                                                    "Aku rela (ridha) Allah
                                                    sebagai Rabb-ku (untuk­ku
                                                    dan orang lain), Islam
                                                    sebagai agamaku dan Muhammad
                                                    صلي الله عليه وسلم sebagai
                                                    Nabiku (yang diutus oleh
                                                    Allah)." (Dibaca 3x)
                                                    <small className="font-bold">
                                                        *Faedah: Barangsiapa
                                                        yang mengucapkan dzikir
                                                        ini sebanyak tiga kali
                                                        di pagi hari dan tiga
                                                        kali di petang hari,
                                                        maka pantas baginya
                                                        mendapatkan ridha Allah.
                                                    </small>{" "}
                                                    . [12] <br /> <br /> Membaca
                                                    <br />
                                                    <br />
                                                    يَا حَيُّ يَا قَيُّوْمُ
                                                    بِرَحْمَتِكَ أَسْتَغِيْثُ،
                                                    أَصْلِحْ لِيْ شَأْنِيْ
                                                    كُلَّهُ وَلاَ تَكِلْنِيْ
                                                    إِلَى نَفْسِيْ طَرْفَةَ
                                                    عَيْنٍ. <br />
                                                    <br />
                                                    "Wahai Rabb Yang Mahahidup,
                                                    Wahai Rabb Yang berdiri
                                                    sendiri (tidak butuh segala
                                                    sesuatu) dengan rahmat-Mu
                                                    aku meminta pertolongan,
                                                    perbaikilah segala urusanku
                                                    dan jangan diserahkan
                                                    kepadaku meski sekejap mata
                                                    sekali pun (tanpa mendapat
                                                    pertolongan dari-Mu)."
                                                    (Dibaca pagi dan sore 1x)
                                                    <small className="font-bold">
                                                        *Faedah: Dzikir ini
                                                        diajarkan oleh Nabi
                                                        shallallahu ‘alaihi wa
                                                        sallam pada Fathimah
                                                        supaya diamalkan pagi
                                                        dan petang.
                                                    </small>
                                                    . [13] <br /> <br /> Membaca{" "}
                                                    <br />
                                                    <br /> أَصْبَحْنَا عَلَى
                                                    فِطْرَةِ اْلإِسْلاَمِ
                                                    وَعَلَى كَلِمَةِ
                                                    اْلإِخْلاَصِ، وَعَلَى دِيْنِ
                                                    نَبِيِّنَا مُحَمَّدٍ صَلَّى
                                                    اللهُ عَلَيْهِ وَسَلَّمَ،
                                                    وَعَلَى مِلَّةِ أَبِيْنَا
                                                    إِبْرَاهِيْمَ، حَنِيْفًا
                                                    مُسْلِمًا وَمَا كَانَ مِنَ
                                                    الْمُشْرِكِيْنَ.. <br />
                                                    <br />
                                                    "Di waktu pagi kami berada
                                                    diatas fitrah agama Islam,
                                                    kalimat ikhlas, agama Nabi
                                                    kami Muham­mad صلي الله عليه
                                                    وسلم dan agama ayah kami,
                                                    Ibrahim, yang ber­diri di
                                                    atas jalan yang lurus,
                                                    muslim dan tidak ter­golong
                                                    orang-orang musyrik."
                                                    (Dibaca pagi 1x)
                                                    <br />
                                                    <br />
                                                    Membaca
                                                    <br />
                                                    <br /> لاَ إِلَـهَ إِلاَّ
                                                    اللهُ وَحْدَهُ لاَ شَرِيْكَ
                                                    لَهُ، لَهُ الْمُلْكُ وَلَهُ
                                                    الْحَمْدُ وَهُوَ عَلَى كُلِّ
                                                    شَيْءٍ قَدِيْرُ. <br />
                                                    <br />
                                                    "Tidak ada Ilah (yang berhak
                                                    diibadahi dengan benar)
                                                    selain Allah Yang Maha Esa,
                                                    tidak ada sekutu bagi-Nya.
                                                    Bagi-Nya kerajaan dan
                                                    bagi-Nya segala puji. Dan
                                                    Dia Mahakuasa atas segala
                                                    sesuatu." (Di­baca 10x .
                                                    atau dibaca 1x)
                                                    <small className="font-bold">
                                                        *Faedah: Barangsiapa
                                                        yang membaca dzikir
                                                        tersebut di pagi hari
                                                        sebanyak sepuluh kali,
                                                        Allah akan mencatatkan
                                                        baginya 10 kebaikan,
                                                        menghapuskan baginya 10
                                                        kesalahan, ia juga
                                                        mendapatkan kebaikan
                                                        semisal memerdekakan 10
                                                        budak, Allah akan
                                                        melindunginya dari
                                                        gangguan setan hingg
                                                        petang hari. Siapa yang
                                                        mengucapkannya di petang
                                                        hari, ia akan
                                                        mendapatkan keutamaan
                                                        semisal itu pula
                                                    </small>{" "}
                                                    [15] . [16] <br /> <br />{" "}
                                                    Membaca <br />
                                                    <br />
                                                    لاَ إِلَـهَ إِلاَّ اللهُ
                                                    وَحْدَهُ لاَ شَرِيْكَ لَهُ،
                                                    لَهُ الْمُلْكُ وَلَهُ
                                                    الْحَمْدُ وَهُوَ عَلَى كُلِّ
                                                    شَيْءٍ قَدِيْرُ. "Tidak ada
                                                    Ilah (yang berhak diibadahi
                                                    dengan benar) selain Allah
                                                    Yang Maha Esa, tidak ada
                                                    sekutu bagi-Nya. Bagi-Nya
                                                    kerajaan dan bagi-Nya segala
                                                    puji. Dan Dia Maha kuasa
                                                    atas segala sesuatu."
                                                    <br />
                                                    (Di­baca setiap hari 100x)
                                                    <small className="font-bold">
                                                        *Faedah: Barangsiapa
                                                        yang mengucapkan dzikir
                                                        tersebut dalam sehari
                                                        sebanyak 100 x, maka itu
                                                        seperti membebaskan 10
                                                        orang budak, dicatat
                                                        baginya 100 kebaikan,
                                                        dihapus baginya 100
                                                        kesalahan, dirinya akan
                                                        terjaga dari gangguan
                                                        setan dari pagi hingga
                                                        petang hari, dan tidak
                                                        ada seorang pun yang
                                                        lebih baik dari yang ia
                                                        lakukan kecuali oleh
                                                        orang yang mengamalkan
                                                        lebih dari itu.
                                                    </small>
                                                    . [17] <br /> <br /> Membaca
                                                    (<br />
                                                    <br /> سُبْحَانَ اللهِ
                                                    وَبِحَمْدِهِ: عَدَدَ
                                                    خَلْقِهِ، وَرِضَا نَفْسِهِ،
                                                    وَزِنَةَ عَرْشِهِ وَمِدَادَ
                                                    كَلِمَاتِهِ <br />
                                                    <br />
                                                    "Mahasuci Allah, aku
                                                    memuji-Nya sebanyak
                                                    bi­langan makhluk-Nya,
                                                    Mahasuci Allah sesuai
                                                    ke-ridhaan-Nya, Mahasuci
                                                    seberat timbangan 'Arsy-Nya,
                                                    dan Mahasuci sebanyak tinta
                                                    (yang menulis) kalimat-Nya."
                                                    (Dibaca pagi 3x)
                                                    <small className="font-bold">
                                                        *Faedah: Nabi
                                                        shallallahu ‘alaihi wa
                                                        sallam mengatakan pada
                                                        Juwairiyah bahwa dzikir
                                                        di atas telah
                                                        mengalahkan dzikir yang
                                                        dibaca oleh Juwairiyah
                                                        dari selepas Shubuh
                                                        sampai waktu Dhuha.
                                                    </small>{" "}
                                                    . [18] <br /> <br />
                                                    Membaca
                                                    <br />
                                                    <br />
                                                    <br />
                                                    اَللَّهُمَّ إِنِّيْ
                                                    أَسْأَلُكَ عِلْمًا نَافِعًا،
                                                    وَرِزْقًا طَيِّبًا،
                                                    وَعَمَلاً مُتَقَبَّلاً{" "}
                                                    <br />
                                                    <br />
                                                    "Ya Allah, sesungguhnya aku
                                                    meminta kepada-Mu ilmu yang
                                                    bermanfaat, rizki yang
                                                    halal, dan amalan yang
                                                    diterima." (Dibaca 1 x
                                                    setelah salam dari shalat
                                                    Shubuh) . [19] <br /> <br />{" "}
                                                    Membaca <br />
                                                    <br /> أَسْتَغْفِرُ اللهَ
                                                    وَأَتُوْبُ إِلَيْهِ <br />
                                                    <br />
                                                    "Aku memohon ampunan kepada
                                                    Allah dan ber­taubat
                                                    kepada-Nya." (Dibaca setiap
                                                    kepada-Nya." (Dibaca setiap
                                                    hari 100x) . [21] <br />
                                                    <br /> Membaca Shalawat
                                                    <br />
                                                    <br />
                                                    اَللَّهُمَّ صَلِّ وَسَلِّمْ
                                                    عَلَى نَبِيِّنَا مُحَمَّدٍ
                                                    <br />
                                                    <br />
                                                    “Ya Allah, limpahkanlah
                                                    shalawat dan salam kepada
                                                    Nabi kami Muhammad.”{" "}
                                                    <small>
                                                        (Dibaca pagi dan sore 10
                                                        x)
                                                    </small>
                                                    . [23] <br /> <br />
                                                </p>
                                            </div>
                                        </article>
                                        <footer>
                                            <p className="mb-8">
                                                <hr className="mb-8" />
                                                [1] HR. Al Hakim (1: 562).
                                                Syaikh Al Albani menshahihkan
                                                hadits tersebut dalam Shahih At
                                                Targhib wa At Tarhib no. 655.).{" "}
                                                <br />
                                                <br />
                                                [2] HR. Abu Daud no. 5082,
                                                Tirmidzi no. 3575. Al Hafizh Abu
                                                Thohir mengatakan bahwa sanad
                                                hadits ini hasan.
                                                <br />
                                                <br />
                                                [3] HR. Muslim no. 2723. Lihat
                                                keterangan Syarh Hisnul Muslim,
                                                hal. 161. <br /> <br />
                                                [4] HR. Tirmidzi no. 3391 dan
                                                Abu Daud no. 5068. Al Hafizh Abu
                                                Thohir mengatakan bahwa sanad
                                                hadits ini shahih.
                                                <br />
                                                <br />
                                                [5] HR. Bukhari no. 6306. <br />
                                                <br />
                                                [6] HR. Abu Daud no. 5069. Al
                                                Hafizh Abu Thohir mengatakan
                                                bahwa hadits ini hasan. <br />{" "}
                                                <br />
                                                [7] HR. Abu Daud no. 5074 dan
                                                Ibnu Majah no. 3871. Al Hafizh
                                                Abu Thohir mengatakan bahwa
                                                sanad hadits ini shahih.
                                                <br />
                                                <br />
                                                [8] HR. Tirmidzi no. 3392 dan
                                                Abu Daud no. 5067. Al Hafizh Abu
                                                Thohir mengatakan bahawa sanad
                                                hadits ini shahih. Adapun
                                                kalimat terakhir (وَأَنْ
                                                أَقْتَرِفَ عَلَى نَفْسِيْ
                                                سُوْءًا أَوْ أَجُرُّهُ إِلَى
                                                مُسْلِمٍ) adalah tambahan dari
                                                riwayat Ahmad 2: 196.
                                                Dikomentari oleh Syaikh Syu’aib
                                                Al Arnauth bahwa hadits tersebut
                                                shahih dilihat dari jalur
                                                lainnya (shahih lighoirihi).{" "}
                                                <br />
                                                <br />
                                                [9] HR. Abu Daud no. 5088, 5089,
                                                Tirmidzi no. 3388, dan Ibnu
                                                Majah no. 3869. Al Hafizh Abu
                                                Thohir mengatakan bahwa sanad
                                                hadits ini hasan. <br />
                                                <br />
                                                [10] HR. Abu Daud no. 5072,
                                                Tirmidzi no. 3389. Al Hafizh Abu
                                                Thohir mengatakan bahwa hadits
                                                ini hasan. <br />
                                                <br />
                                                [11] HR. Ibnu As Sunni dalam
                                                ‘Amalul Yaum wal Lailah no. 46,
                                                An Nasai dalam Al Kubro (381/
                                                570), Al Bazzar dalam musnadnya
                                                (4/ 25/ 3107), Al Hakim (1:
                                                545). Sanad hadits ini hasan
                                                sebagaimana dikatakan oleh
                                                Syaikh Al Albani dalam As
                                                Silsilah Ash Shahihah no. 227.
                                                <br />
                                                <br />
                                                [12] HR. Ahmad (3: 406). Syaikh
                                                Syu’aib Al Arnauth mengatakan
                                                bahwa sanad hadits ini shahih
                                                sesuai syarat Bukhari Muslim.
                                                Lihat pula As Silsilah Ash
                                                Shahihah no. 2989.
                                                <br />
                                                <br />
                                                [13] HR. Muslim no. 2692. <br />
                                                <br />
                                                [14] HR. An Nasai Al Kubra 6:
                                                10. <br />
                                                <br />
                                                [15] HR. Bukhari no. 3293 dan
                                                Muslim no. 2691.
                                                <br />
                                                <br />
                                                [16] HR. Muslim no. 2726. <br />
                                                <br />
                                                [17] HR. Ibnu Majah no. 925 dan
                                                Ahmad 6: 305, 322. Al Hafizh Abu
                                                Thohir mengatakan bahwa hadits
                                                ini shahih. <br />
                                                <br />
                                                [18] HR. Bukhari no. 6307 dan
                                                Muslim no. 2702.  <br /> <br />
                                                
                                            </p>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            {/* <div className="">
                <section className="">
                        
                </section>
            </div> */}
        </>
    );
}
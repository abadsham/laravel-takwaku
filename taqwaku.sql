-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 21 Jun 2023 pada 11.32
-- Versi server: 10.4.25-MariaDB
-- Versi PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `taqwaku`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `asmaul_husnas`
--

CREATE TABLE `asmaul_husnas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `latin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `arab` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `arti` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `asmaul_husnas`
--

INSERT INTO `asmaul_husnas` (`id`, `latin`, `arab`, `arti`, `created_at`, `updated_at`) VALUES
(1, 'Ar-Rahman', 'الرَّحْمَنُ', 'Yang Maha Pengasih', NULL, NULL),
(2, 'Ar Rahiim', 'الرَّحِيمُ', 'Yang Maha Penyayang', NULL, NULL),
(3, 'Al Malik', 'الْمَلِكُ', 'Yang Maha Merajai', NULL, NULL),
(4, 'Al Quddus', 'الْقُدُّوسُ', 'Yang Maha Suci', NULL, NULL),
(5, 'As Salaam', 'السَّلاَمُ', 'Yang Maha Memberi Kesejahteraan', NULL, NULL),
(6, 'Al Mu’min', 'الْمُؤْمِنُ', 'Yang Maha Pemberi Keamanan', NULL, NULL),
(7, 'Al Muhaimin', 'الْمُهَيْمِنُ', 'Yang Maha Mengatur', NULL, NULL),
(8, 'Al \'Aziz', 'الْعَزِيزُ', 'Yang Maha Gagah', NULL, NULL),
(9, 'Al Jabbar', 'الْجَبَّارُ', 'Yang Maha Perkasa', NULL, NULL),
(10, 'Al Mutakabbir', 'الْمُتَكَبِّرُ', 'Yang Memiliki Kebesaran', NULL, NULL),
(11, 'Al Khaliq', 'الْخَالِقُ', 'Yang Maha Pencipta', NULL, NULL),
(12, 'Al Baari’', 'الْبَارِئُ', 'Yang Maha Melepaskan', NULL, NULL),
(13, 'Al Mushawwir', 'الْمُصَوِّرُ', 'Yang Maha Membentuk Rupa', NULL, NULL),
(14, 'Al Ghaffaar', 'الْغَفَّارُ', 'Yang Maha Pengampun', NULL, NULL),
(15, 'Al Qahhaar', 'الْقَهَّارُ', 'Yang Maha Menundukkan', NULL, NULL),
(16, 'Al Wahhaab', 'الْوَهَّابُ', 'Yang Maha Memberi Karunia', NULL, NULL),
(17, 'Ar Razzaaq', 'الرَّزَّاقُ', 'Yang MAha Memberi Rizki', NULL, NULL),
(18, 'Al Fattaah', 'الْفَتَّاحُ', 'Yang Maha Membuka Rahmat', NULL, NULL),
(19, 'Al \'Aliim', 'اَلْعَلِيْمُ', 'Yang Maha Mengtahui', NULL, NULL),
(20, 'Al Qabidh', 'الْقَابِضُ', 'yang Maha Menyempitkan', NULL, NULL),
(21, 'Al Baasith', 'الْبَاسِطُ', 'Yang Maha Melapangkan', NULL, NULL),
(22, 'Al Khaafidh', 'الْخَافِضُ', 'Yang Maha Merendahkan', NULL, NULL),
(23, 'Ar Raafi’', 'الرَّافِعُ', 'Yang Maha Meninggikan', NULL, NULL),
(24, 'Al Mu’izz', 'الْمُعِزُّ', 'Yang Maha Memuliakan', NULL, NULL),
(25, 'Al Mudzil', 'المُذِلُّ', 'Yang Maha Menghinakan', NULL, NULL),
(26, 'Al Samii’', 'السَّمِيعُ', 'Yang Maha Mendengar\r\n', NULL, NULL),
(27, 'Al Bashiir', 'الْبَصِيرُ', 'Yang Maha Melihat', NULL, NULL),
(28, 'Al Hakam', 'الْحَكَمُ', 'Yang Maha MEnetapkan', NULL, NULL),
(29, 'Al \'Adl', 'الْعَدْلُ', 'Yang Maha Adil', NULL, NULL),
(30, 'Al Lathiif', 'اللَّطِيفُ', 'Yang Maha Lembut', NULL, NULL),
(31, 'Al Khabiir', 'الْخَبِيرُ', 'Yang Maha Mengetahui Rahasia', NULL, NULL),
(32, 'Al Haliim', 'الْحَلِيمُ', 'Yang Maha Penyantun', NULL, NULL),
(33, 'Al \'Azhiim', 'الْعَظِيمُ', 'Yang Maha Agung', NULL, NULL),
(34, 'Al Gahafuur', 'الْغَفُورُ', 'Yang Maha Pengampun', NULL, NULL),
(35, 'As Syakuur', 'الشَّكُورُ', 'Yang Maha Menghargai', NULL, NULL),
(36, 'Al \'Aliy', 'الْعَلِيُّ', 'Yang Maha Tinggi', NULL, NULL),
(37, 'Al Kabiir', 'الْكَبِيرُ', 'Yang Maha Besar', NULL, NULL),
(38, 'Al Hafiidz', 'الْحَفِيظُ', 'Yang Maha Menjaga', NULL, NULL),
(39, 'Al Muqiit', 'المُقيِت', 'Yang Maha Pemberi', NULL, NULL),
(40, 'Al Hasiib', 'الْحسِيبُ', 'Yang Maha Membuat Perhitungan', NULL, NULL),
(41, 'Al Jaliil', 'الْجَلِيلُ', 'Yang Maha Mulia', NULL, NULL),
(42, 'Al Kariim', 'الْكَرِيمُ', 'Yang Maha Pemurah', NULL, NULL),
(43, 'Ar Raqiib', 'الرَّقِيبُ', 'Yang Maha Mengawasi', NULL, NULL),
(44, 'Al Mujiib', 'الْمُجِيبُ', 'Yang maha Mengabulkan', NULL, NULL),
(45, 'al Waasi\'', 'الْوَاسِعُ', 'Yang Maha Luas', NULL, NULL),
(46, 'Al Hakiim', 'الْحَكِيمُ', 'Yang Maha Bijaksana', NULL, NULL),
(47, 'Al Waduud', 'الْوَدُودُ', 'Yang Maha Mencipta', NULL, NULL),
(48, 'Al Majiid', 'الْمَجِيدُ', 'Yang Maha Mulia', NULL, NULL),
(49, 'Al Baa\'its', 'الْبَاعِثُ', 'Yang Maha Membangkitkan', NULL, NULL),
(50, 'As Syahiid', 'الشَّهِيدُ', 'Yang Maha Menyaksikan', NULL, NULL),
(51, 'Al Haqq', 'الْحَقُّ', 'Yang Maha benar', NULL, NULL),
(52, 'Al Wakiil', 'الْوَكِيلُ', 'YAng Maha Memeliahara', NULL, NULL),
(53, 'Al Qawiyyu', 'الْقَوِيُّ', 'Yang Maha Kuat', NULL, NULL),
(54, 'Al Matiin', 'الْمَتِينُ', 'Yang Maha Kokoh', NULL, NULL),
(55, 'Al Waliyy', 'الْوَلِيُّ', 'YAng Maha Melindungi', NULL, NULL),
(56, 'Al Hamiid', 'الْحَمِيدُ', 'Yang maha Terpuji', NULL, NULL),
(57, 'Al Muhshii\'', 'الْمُحْصِي', 'Yang Maha Memperhitungkan', NULL, NULL),
(58, 'Al Mubdi\'', 'الْمُبْدِئُ', 'Yang Maha Memulai', NULL, NULL),
(59, 'Al Mu\'iid', 'الْمُعِيدُ', 'Yang Maha Mengembalikan', NULL, NULL),
(60, 'Al Muhyi', 'الْمُحْيِي', 'Yang Maha Menghidupkan', NULL, NULL),
(61, 'Al Mumiitu', 'اَلْمُمِيتُ', 'Yang Maha Mematikan', NULL, NULL),
(62, 'Al Hayyu', 'الْحَيُّ', 'Yang Maha Hidup', NULL, NULL),
(63, 'Al Qayyuum', 'الْقَيُّومُ', 'Yang Maha Berdiri Sendiri', NULL, NULL),
(64, 'Al Waajid', 'الْوَاجِدُ', 'Yang Maha Penemu', NULL, NULL),
(65, 'Al Maajid', 'الْمَاجِدُ', 'Yang Maha Mulia', NULL, NULL),
(66, 'Al Wahiid', 'الْواحِدُ', 'Yang Maha Tunggal', NULL, NULL),
(67, 'Al Ahad', 'اَلاَحَدُ', 'Yang Maha Esa', NULL, NULL),
(68, 'As Shamad', 'الصَّمَدُ', 'Yang Maha Dibutuhkan', NULL, NULL),
(69, 'Al Qaadir', 'الْقَادِرُ', 'Yang Maha Menentukan', NULL, NULL),
(70, 'Al Muqtadir', 'الْمُقْتَدِرُ', 'Yang Maha Berkuasa', NULL, NULL),
(71, 'Al Muqaddim', 'الْمُقَدِّمُ', 'Yang Maha Mendahulukan', NULL, NULL),
(72, 'Al Mu’akkhir', 'الْمُؤَخِّرُ', 'Yang Maha Mengakhirkan', NULL, NULL),
(73, 'Al Awwal', 'الأوَّلُ', 'Yang Maha Awal', NULL, NULL),
(74, 'Al Aakhir', 'الآخِرُ', 'Yang Maha Akhir', NULL, NULL),
(75, 'Az Zhaahir', 'الظَّاهِرُ', 'Yang Maha Nyata', NULL, NULL),
(76, 'Al Baathin', 'الْبَاطِنُ', 'Yang Maha Ghaib', NULL, NULL),
(77, 'Al Waali', 'الْوَالِي', 'Yang Maha Memerintah', NULL, NULL),
(78, 'Al Muta’aalii', 'الْمُتَعَالِي', 'Yang Maha Tinggi', NULL, NULL),
(79, 'Al Barri', 'الْبَرُّ', 'Yang Maha Penderma', NULL, NULL),
(80, 'At Tawwaab', 'التَّوَابُ', 'Yang Maha Penerima Tobat', NULL, NULL),
(81, 'Al Muntaqim', 'الْمُنْتَقِمُ', 'Yang Maha Penuntut Balas', NULL, NULL),
(82, 'Al Afuww', 'العَفُوُّ', 'Yang Maha Pemaaf', NULL, NULL),
(83, 'Ar Ra`uuf', 'الرَّؤُوفُ', 'Yang Maha Pengasih', NULL, NULL),
(84, 'Malikul Mulk', 'َمَالِكُ الْمُلْكِ', 'Yang Penguasa Kerajaan', NULL, NULL),
(85, 'Dzul JalaaliWal Ikraam', 'ذُوالْجَلاَلِوَالإكْرَامِ', 'Yang Memiliki Kebesaran dan Kemuliaan', NULL, NULL),
(86, 'Al Muqsith', 'الْمُقْسِطُ', 'Yang Maha Adil', NULL, NULL),
(87, 'Al Jamii’', 'الْجَامِعُ', 'Yang Maha Mengumpulkan', NULL, NULL),
(88, 'Al Ghaniyy', 'الْغَنِيُّ', 'Yang Maha Berkecukupan', NULL, NULL),
(89, 'Al Mughnii', 'الْمُغْنِي', 'Yang Maha Memberi Kekayaan', NULL, NULL),
(90, 'Al Maani', 'اَلْمَانِعُ', 'Yang Maha Mencegah', NULL, NULL),
(91, 'Ad Dhaar', 'الضَّارَّ', 'Yang Maha Memberi Derita', NULL, NULL),
(92, 'An Nafii’', 'النَّافِعُ', 'Yang Maha Memberi Manfaat', NULL, NULL),
(93, 'An Nuur', 'النُّورُ', 'Yang Maha Bercahaya', NULL, NULL),
(94, 'Al Haadii', 'الْهَادِي', 'Yang Maha Pemberi Petunjuk', NULL, NULL),
(95, 'Al Baadii', 'الْبَدِيعُ', 'Yang Maha Pencipta', NULL, NULL),
(96, 'Al Baaqii', 'اَلْبَاقِي', 'Yang Maha Kekal', NULL, NULL),
(97, 'Al Waarits', 'الْوَارِثُ', 'Yang Maha Pewaris', NULL, NULL),
(98, 'Ar Rasyiid', 'الرَّشِيدُ', 'Yang Maha Pandai', NULL, NULL),
(99, 'As Shabuur', 'الصَّبُورُ', 'Yang Maha Sabar', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `doa_harians`
--

CREATE TABLE `doa_harians` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `judul` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `arab` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `latin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `arti` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `footnote` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `doa_harians`
--

INSERT INTO `doa_harians` (`id`, `judul`, `arab`, `latin`, `arti`, `footnote`, `created_at`, `updated_at`) VALUES
(2, 'Do\'a Bangun Tidur', 'الْحَمْدُ لِلّٰهِ الّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُوْرِ', 'Alhamdulillahilladzi ahyaana ba\'da maa amaatanaa wa ilaihinnusyuur', 'Segala puji bagi Allah Yang membangunkan kami setelah ditidurkan-Nya dan kepada-Nya kami dibangkitkan', 'HR. Bukhari dalam Fathul Bari: 11/113 dan Muslim: 4/2083', '2023-06-15 18:26:08', '2023-06-15 18:26:08'),
(4, 'Do\'a Mengenakan Pakaian', 'اَلْحَمْدُ لِلّٰهِ الَّذِي كَسَانِيْ هَذَا (الثَّوْبَ) وَرَزَقَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِنِّيْ وَلَا قُوَّةٍ', 'Alhamdulillahilladzi kasaanii hadzaatssauba warozaqoniihi min ghairi khaulin minnii walaa quwwatin', 'Segala puji bagi Allah Yang telah memberikan pakaian ini kepadaku sebagai rezeki dari-pada-Nya tanpa daya dan kekuatan dari-ku', 'HR.Bukhari\r\n', NULL, NULL),
(5, 'Do\'a Mengenakan Pakaian Baru', 'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيْهِ، أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا صُنعَ لَهُ، وَأَعُوْذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنعَ لَهُ', 'Allohumma lakalhamdu anta kasautaniihi as\'aluka min khoirihi wa khoiri maa shun\'a lahu wa a\'uudzubika min syarrihi wasyarrima shun\'a lahu', 'arti:Ya Allah hanya miliki-Mu segala puji Engkaulah yang memberi pakaian ini kepadaku. Aku mohon kepada-Mu untuk memperoleh kebaikannya dan kebaikan yang ia diciptakan karenanya. Aku berlindung kepada-Mu dari kejahatannya dan kejahatan yang ia diciptakan ', 'HR. Abu Dawud', NULL, NULL),
(6, 'Mendoakan Orang yang Mengenakan Pakaian Baru', 'تُبْلِي وَيُخْلِفُ اللّٰهُ تَعَلَى', 'Tub\'li wayukhlifullou ta\'ala', 'Kenakanlah sampai lusuh semoga Allah ta\'ala memberikan gantinya kepadamu', 'HR. Abu Dawud', NULL, NULL),
(7, 'Doa Meletakkan Pakaian', 'بِسْمِ اللّٰهِ', 'Bismillah', 'Dengan nama Allah (aku meletakkan baju)', 'HR. At-Tirmidzi: 2/505', NULL, NULL),
(8, 'Doa Masuk Toilet', '(بِسْمِ اللّٰهِ) اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْخُبُثِ وَالْخَبائِثْ', '(Bismillahi) Allohumma inni a\'udzubika minal khubutsi wal khobaits', 'Dengan nama Allah. Ya Allah sesungguhnya aku berlindung kepada-Mu dari godaan setan laki-laki dan perempuan', 'HR. Al-Bukhari: 1/45', NULL, NULL),
(9, 'Doa Keluar dari Toilet', 'غُفْرَانَكَ', 'Ghufronaka', 'Aku minta ampun kepada-Mu', 'HR. Muslim', NULL, NULL),
(10, 'Bacaan Sebelum Wudhu', 'ِسْمِ اللّٰهِ', 'Bismillah', 'Dengan nama Allah (aku berwudhu)', 'HR. Abu Dawud', NULL, NULL),
(11, 'Bacaan Setelah Wudhu', 'َشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيْكَ لَهُ وَأَشْهَدُ أَنَّ مُهَمَّدًا عَبْدُهُ وَرَسُوْلُهُ', 'Asyhadu allailaha illalloh wa asyhadu anna muhammadan abduhu warosuluhu', 'Aku bersaksi bahwa tiada Tuhan yang haq kecuali Allah Yang Maha Esa dan tiada sekutu bagi-Nya. Aku bersaksi bahwa Muhammad adalah hamba dan utusan-Nya', 'HR. Muslim: 1/209', NULL, NULL),
(12, 'Bacaan Setelah Wudhu', 'اَللَّهُمَّ اجْعَلْنِيْ مِنَ التَّوَّابِيْنَ وَاجْعَلْنِيْ مِنَ الُمُتَطَهِّرِيْنَ', 'Allohummaj\'alni minattauwabina waj\'alni minal mutatohhirin', 'arti:Ya Allah jadikanlah aku termasuk orang-orang yang bertaubat dan jadikanlah aku termasuk orang-orang (yang senang) bersuci', 'HR. Tirmidzi: 1/78', NULL, NULL),
(13, 'Do\'a Keluar Rumah', 'بِسْمِ اللَّهِ، تَوَكَّلتُ عَلَى اللّٰهِ،  وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ', 'Bismillahi tawakkaltu \'alalloh wala haula wala quwata illa billah', 'Dengan nama Allah (aku keluar). Aku bertawakkal kepada-Nya dan tiada daya dan kekuatan kecuali karena pertolongan Allah', 'HR. Abu Dawud: 4/325', NULL, NULL),
(14, 'Do\'a Masuk Rumah', 'ِسْمِ اللّٰهِ وَلَجْنَا، وَبِسْمِ اللّٰهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا', 'Bismillahi walaj\'na wabismillahi khoroj\'na wa\'ala robbina tawakkalna', 'Dengan nama Allah kami masuk (ke rumah) dengan nama Allah kami keluar (darinya) dan kepada Tuhan kami kami bertawakkal\'. Kemudian mengucapkan salam kepada keluarganya', 'HR. Abu Dawud: 4/325', NULL, NULL),
(15, 'Doa Ketika Bercermin', 'اَلْحَمْدُ ِللهِ كَمَا حَسَّنْتَ خَلْقِىْ  فَحَسِّـنْ خُلُقِىْ', 'Alhamdulillaahi kamaa hassanta kholqii fahassin khuluqii', 'Segala puji bagi Allah baguskanlah budi pekertiku sebagaimana Engkau telah membaguskan rupa wajahku', 'HR. ', NULL, NULL),
(16, 'Doa Sebelum Tidur', 'بِسْمِكَ اللّٰهُمَّ اَحْيَا وَاَمُوْتُ', 'Bismikallohumma ahya wa amuutu', 'Dengan menyebut nama-Mu ya Allah aku hidup dan aku mati', 'HR.', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `kisah_sejarahs`
--

CREATE TABLE `kisah_sejarahs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `judul` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'hamba Allah',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `konten` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kisah_sejarahs`
--

INSERT INTO `kisah_sejarahs` (`id`, `judul`, `nama`, `image`, `konten`, `created_at`, `updated_at`) VALUES
(1, 'Kisah Tiga Orang yang Tertutup Batu dalam Goa', 'Muhammad Abduh Tuasikal, MSc', NULL, 'Dari Abu ‘Abdir Rahman, yaitu Abdullah bin Umar bin al-Khaththab radhiyallahu ‘anhuma, katanya: Aku mendengar Rasulullah shallallahu ‘alaihi wa sallam bersabda,\n\nانْطَلَقَ ثَلاَثَةُ رَهْطٍ مِمَّنْ كَانَ قَبْلَكُمْ حَتَّى أَوَوُا الْمَبِيتَ إِلَى غَارٍ فَدَخَلُوهُ ، فَانْحَدَرَتْ صَخْرَةٌ مِنَ الْجَبَلِ فَسَدَّتْ عَلَيْهِمُ الْغَارَ فَقَالُوا إِنَّهُ لاَ يُنْجِيكُمْ مِنْ هَذِهِ الصَّخْرَةِ إِلاَّ أَنْ تَدْعُوا اللَّهَ بِصَالِحِ أَعْمَالِكُمْ\n\n“Ada tiga orang dari orang-orang sebelum kalian berangkat bepergian. Suatu saat mereka terpaksa mereka mampir bermalam di suatu goa kemudian mereka pun memasukinya. Tiba-tiba jatuhlah sebuah batu besar dari gunung lalu menutup gua itu dan mereka di dalamnya. Mereka berkata bahwasanya tidak ada yang dapat menyelamatkan mereka semua dari batu besar tersebut kecuali jika mereka semua berdoa kepada Allah Ta’ala dengan menyebutkan amalan baik mereka.”\n\nفَقَالَ رَجُلٌ مِنْهُمُ اللَّهُمَّ كَانَ لِى أَبَوَانِ شَيْخَانِ كَبِيرَانِ ، وَكُنْتُ لاَ أَغْبِقُ قَبْلَهُمَا أَهْلاً وَلاَ مَالاً ، فَنَأَى بِى فِى طَلَبِ شَىْءٍ يَوْمًا ، فَلَمْ أُرِحْ عَلَيْهِمَا حَتَّى نَامَا ، فَحَلَبْتُ لَهُمَا غَبُوقَهُمَا فَوَجَدْتُهُمَا نَائِمَيْنِ وَكَرِهْتُ أَنْ أَغْبِقَ قَبْلَهُمَا أَهْلاً أَوْ مَالاً ، فَلَبِثْتُ وَالْقَدَحُ عَلَى يَدَىَّ أَنْتَظِرُ اسْتِيقَاظَهُمَا حَتَّى بَرَقَ الْفَجْرُ ، فَاسْتَيْقَظَا فَشَرِبَا غَبُوقَهُمَا ، اللَّهُمَّ إِنْ كُنْتُ فَعَلْتُ ذَلِكَ ابْتِغَاءَ وَجْهِكَ فَفَرِّجْ عَنَّا مَا نَحْنُ فِيهِ مِنْ هَذِهِ الصَّخْرَةِ ، فَانْفَرَجَتْ شَيْئًا لاَ يَسْتَطِيعُونَ الْخُرُوجَ\n\nSalah seorang dari mereka berkata, “Ya Allah, aku mempunyai dua orang tua yang sudah sepuh dan lanjut usia. Dan aku tidak pernah memberi minum susu (di malam hari) kepada siapa pun sebelum memberi minum kepada keduanya. Aku lebih mendahulukan mereka berdua daripada keluarga dan budakku (hartaku). Kemudian pada suatu hari, aku mencari kayu di tempat yang jauh. Ketika aku pulang ternyata mereka berdua telah terlelap tidur. Aku pun memerah susu dan aku dapati mereka sudah tertidur pulas. Aku pun enggan memberikan minuman tersebut kepada keluarga atau pun budakku. Seterusnya aku menunggu hingga mereka bangun dan ternyata mereka barulah bangun ketika Shubuh, dan gelas minuman itu masih terus di tanganku. Selanjutnya setelah keduanya bangun lalu mereka meminum minuman tersebut. Ya Allah, jikalau aku mengerjakan sedemikian itu dengan niat benar-benar  mengharapkan wajah-Mu, maka lepaskanlah kesukaran yang sedang kami hadapi dari batu besar yang menutupi kami ini.” Batu besar itu tiba-tiba terbuka sedikit, namun mereka masih belum dapat keluar dari goa.\n\nقَالَ النَّبِىُّ – صلى الله عليه وسلم – « وَقَالَ الآخَرُ اللَّهُمَّ كَانَتْ لِى بِنْتُ عَمٍّ كَانَتْ أَحَبَّ النَّاسِ إِلَىَّ ، فَأَرَدْتُهَا عَنْ نَفْسِهَا ، فَامْتَنَعَتْ مِنِّى حَتَّى أَلَمَّتْ بِهَا سَنَةٌ مِنَ السِّنِينَ ، فَجَاءَتْنِى فَأَعْطَيْتُهَا عِشْرِينَ وَمِائَةَ دِينَارٍ عَلَى أَنْ تُخَلِّىَ بَيْنِى وَبَيْنَ نَفْسِهَا ، فَفَعَلَتْ حَتَّى إِذَا قَدَرْتُ عَلَيْهَا قَالَتْ لاَ أُحِلُّ لَكَ أَنْ تَفُضَّ الْخَاتَمَ إِلاَّ بِحَقِّهِ . فَتَحَرَّجْتُ مِنَ الْوُقُوعِ عَلَيْهَا ، فَانْصَرَفْتُ عَنْهَا وَهْىَ أَحَبُّ النَّاسِ إِلَىَّ وَتَرَكْتُ الذَّهَبَ الَّذِى أَعْطَيْتُهَا ، اللَّهُمَّ إِنْ كُنْتُ فَعَلْتُ ذَلِكَ ابْتِغَاءَ وَجْهِكَ فَافْرُجْ عَنَّا مَا نَحْنُ فِيهِ . فَانْفَرَجَتِ الصَّخْرَةُ ، غَيْرَ أَنَّهُمْ لاَ يَسْتَطِيعُونَ الْخُرُوجَ مِنْهَا\n\n“Nabi shallallahu ‘alaihi wa sallam bersabda, lantas orang yang lain pun berdo’a, “Ya Allah, dahulu ada puteri pamanku yang aku sangat menyukainya. Aku pun sangat menginginkannya. Namun ia menolak cintaku. Hingga berlalu beberapa tahun, ia mendatangiku (karena sedang butuh uang). Aku pun memberinya 120 dinar. Namun pemberian itu dengan syarat ia mau tidur denganku (alias: berzina). Ia pun mau. Sampai ketika aku ingin menyetubuhinya, keluarlah dari lisannya, “Tidak halal bagimu membuka cincin kecuali dengan cara yang benar (maksudnya: barulah halal dengan nikah, bukan zina).” Aku pun langsung tercengang kaget dan pergi meninggalkannya padahal dialah yang paling kucintai. Aku pun meninggalkan emas (dinar) yang telah kuberikan untuknya. Ya Allah, jikalau aku mengerjakan sedemikian itu dengan niat benar-benar mengharapkan wajah-Mu, maka lepaskanlah kesukaran yang sedang kami hadapi dari batu besar yang menutupi kami ini.” Batu besar itu tiba-tiba terbuka lagi, namun mereka masih belum dapat keluar dari goa.\n\nقَالَ النَّبِىُّ – صلى الله عليه وسلم – وَقَالَ الثَّالِثُ اللَّهُمَّ إِنِّى اسْتَأْجَرْتُ أُجَرَاءَ فَأَعْطَيْتُهُمْ أَجْرَهُمْ ، غَيْرَ رَجُلٍ وَاحِدٍ تَرَكَ الَّذِى لَهُ وَذَهَبَ فَثَمَّرْتُ أَجْرَهُ حَتَّى كَثُرَتْ مِنْهُ الأَمْوَالُ ، فَجَاءَنِى بَعْدَ حِينٍ فَقَالَ يَا عَبْدَ اللَّهِ أَدِّ إِلَىَّ أَجْرِى . فَقُلْتُ لَهُ كُلُّ مَا تَرَى مِنْ أَجْرِكَ مِنَ الإِبِلِ وَالْبَقَرِ وَالْغَنَمِ وَالرَّقِيقِ . فَقَالَ يَا عَبْدَ اللَّهِ لاَ تَسْتَهْزِئْ بِى . فَقُلْتُ إِنِّى لاَ أَسْتَهْزِئُ بِكَ . فَأَخَذَهُ كُلَّهُ فَاسْتَاقَهُ فَلَمْ يَتْرُكْ مِنْهُ شَيْئًا ، اللَّهُمَّ فَإِنْ كُنْتُ فَعَلْتُ ذَلِكَ ابْتِغَاءَ وَجْهِكَ فَافْرُجْ عَنَّا مَا نَحْنُ فِيهِ . فَانْفَرَجَتِ الصَّخْرَةُ فَخَرَجُوا يَمْشُونَ »\n\n“Nabi shallallahu ‘alaihi wa sallam bersabda, lantas orang ketiga berdo’a, “Ya Allah, aku dahulu pernah mempekerjakan beberapa pegawai lantas aku memberikan gaji pada mereka. Namun ada satu yang tertinggal yang tidak aku beri. Malah uangnya aku kembangkan hingga menjadi harta melimpah. Suatu saat ia pun mendatangiku. Ia pun berkata padaku, “Wahai hamba Allah, bagaimana dengan upahku yang dulu?” Aku pun berkata padanya bahwa setiap yang ia lihat itulah hasil upahnya dahulu (yang telah dikembangkan), yaitu ada unta, sapi, kambing dan budak. Ia pun berkata, “Wahai hamba Allah, janganlah engkau bercanda.” Aku pun menjawab bahwa aku tidak sedang bercanda padanya. Aku lantas mengambil semua harta tersebut dan menyerahkan padanya tanpa tersisa sedikit pun. Ya Allah, jikalau aku mengerjakan sedemikian itu dengan niat benar-benar mengharapkan wajah-Mu, maka lepaskanlah kesukaran yang sedang kami hadapi dari batu besar yang menutupi kami ini”. Lantas goa yang tertutup sebelumnya pun terbuka, mereka keluar dan berjalan. (Muttafaqun ‘alaih. HR. Bukhari no. 2272 dan Muslim no. 2743)\n\n\n\nSumber https://rumaysho.com/3390-kisah-tiga-orang-yang-tertutup-batu-dalam-goa.html', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_06_15_000606_create_doa_harians_table', 1),
(6, '2023_06_17_054554_create_asmaul_husnas_table', 2),
(7, '2023_06_17_072335_create_kisah_sejarahs_table', 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `asmaul_husnas`
--
ALTER TABLE `asmaul_husnas`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `doa_harians`
--
ALTER TABLE `doa_harians`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `kisah_sejarahs`
--
ALTER TABLE `kisah_sejarahs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `asmaul_husnas`
--
ALTER TABLE `asmaul_husnas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT untuk tabel `doa_harians`
--
ALTER TABLE `doa_harians`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `kisah_sejarahs`
--
ALTER TABLE `kisah_sejarahs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

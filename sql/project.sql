-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 16 Kwi 2023, 17:31
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `project`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `candidates`
--

CREATE TABLE `candidates` (
  `ID` int(11) NOT NULL,
  `Name` varchar(40) NOT NULL,
  `Surname` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `candidates`
--

INSERT INTO `candidates` (`ID`, `Name`, `Surname`) VALUES
(1, 'Jan', 'Nowak'),
(2, 'Jan', 'Kowalski'),
(3, 'asd', 'asd'),
(4, 'test', 'test'),
(5, 'dowolne', 'dane');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `voters`
--

CREATE TABLE `voters` (
  `ID` int(11) NOT NULL,
  `PESEL` varchar(11) NOT NULL,
  `Candidate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `voters`
--

INSERT INTO `voters` (`ID`, `PESEL`, `Candidate`) VALUES
(1, '12345678901', 1),
(3, '12345678902', 1),
(5, '12345678903', 1),
(6, '12345678904', 1),
(12, '22222222222', 1),
(13, '11111111111', 1),
(14, '44444444444', 1),
(15, '77777777777', 1),
(16, '88888888888', 1),
(21, '99999999999', 1),
(23, '12311111111', 1),
(25, '12321111111', 1),
(26, '12122112121', 1),
(27, '12121212212', 1),
(29, '24211414124', 2),
(30, '22143253463', 3),
(31, '12421442141', 2),
(32, '45342322243', 3),
(33, '97676876677', 5),
(34, '89866543223', 2),
(35, '89866543214', 2),
(36, '89866542132', 2),
(37, '89866542135', 2),
(38, '89863253532', 2),
(39, '89863255474', 2),
(40, '89863257657', 2),
(41, '89863123213', 2),
(42, '89767877697', 2),
(43, '33322222222', 2),
(44, '33322225555', 2),
(45, '33322225777', 2);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `candidates`
--
ALTER TABLE `candidates`
  ADD PRIMARY KEY (`ID`);

--
-- Indeksy dla tabeli `voters`
--
ALTER TABLE `voters`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `PESEL` (`PESEL`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `candidates`
--
ALTER TABLE `candidates`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `voters`
--
ALTER TABLE `voters`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

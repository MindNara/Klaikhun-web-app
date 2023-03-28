-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2023 at 06:50 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `all_tables`
--

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `Mem_ID` int(11) NOT NULL,
  `Mem_Fname` varchar(100) NOT NULL,
  `Mem_Lname` varchar(100) NOT NULL,
  `Mem_Username` varchar(100) NOT NULL,
  `Mem_Password` varchar(100) NOT NULL,
  `Mem_Email` varchar(100) NOT NULL,
  `Mem_Phone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`Mem_ID`, `Mem_Fname`, `Mem_Lname`, `Mem_Username`, `Mem_Password`, `Mem_Email`, `Mem_Phone`) VALUES
(1, 'vitchayut', 'suebwong', 'best', '1234', 'best@gmail.com', '0853441555'),
(2, 'OHM', 'xDDDDDDDDDDDD', 'ohm', '12345', 'ohm@gmail.com', '0813497618'),
(3, 'MILD', 'asdasdasdasdasdasdasd', 'mild', '12345', 'dasdasdasdasd@xDDDDDD.com', '0812345667'),
(4, 'FRESH', 'xDDDDD123', 'fresh', '12345', 'xDDDDDDD@asdasdasd.com', '0612345623'),
(5, 'YOUNG ADULT', '007', 'young adult', '12345', 'num007@xDDDDDD.com', '0923413242');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`Mem_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `Mem_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2023 at 03:10 PM
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
-- Table structure for table `flight`
--

CREATE TABLE `flight` (
  `Flight_id` int(11) NOT NULL,
  `Flight_beginning` varchar(10) NOT NULL,
  `Flight_destination` varchar(10) NOT NULL,
  `Time_departure` time NOT NULL,
  `Time_arriving` time NOT NULL,
  `Airline_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `flight`
--

INSERT INTO `flight` (`Flight_id`, `Flight_beginning`, `Flight_destination`, `Time_departure`, `Time_arriving`, `Airline_id`) VALUES
(3357, 'กรุงเทพฯ', 'เชียงใหม่', '00:00:17', '00:00:19', 1),
(3376, 'กรุงเทพฯ', 'กระบี่', '00:00:15', '00:00:17', 2),
(3440, 'กรุงเทพฯ', 'พังงา', '00:00:14', '00:00:15', 3),
(3451, 'พังงา', 'กรุงเทพฯ', '00:00:12', '00:00:13', 4),
(3465, 'กรุงเทพฯ', 'เชียงราย', '00:00:09', '00:00:11', 5),
(3579, 'กรุงเทพฯ', 'ภูเก็ต', '00:00:11', '00:00:12', 6),
(3675, 'กรุงเทพฯ', 'หาดใหญ่', '00:00:12', '00:00:14', 7),
(3789, 'กรุงเทพฯ', 'น่าน', '00:00:13', '00:00:15', 8),
(4899, 'ขอนแก่น', 'กรุงเทพฯ', '00:00:19', '00:00:20', 9),
(4946, 'อุดรธานี', 'กรุงเทพฯ', '00:00:14', '00:00:16', 10),
(4956, 'เชียงใหม่', 'กรุงเทพฯ', '00:00:10', '00:00:11', 11),
(6520, 'กรุงเทพฯ', 'จาร์กาตาร์', '00:00:09', '00:00:11', 12),
(6540, 'จาร์กาตาร์', 'กรุงเทพฯ', '00:00:14', '00:00:18', 13),
(6570, 'กรุงเทพฯ', 'ญี่ปุ่น', '00:00:09', '00:00:13', 14),
(6578, 'ญี่ปุ่น', 'กรุงเทพฯ', '00:00:12', '00:00:16', 15);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `flight`
--
ALTER TABLE `flight`
  ADD PRIMARY KEY (`Flight_id`),
  ADD KEY `Airline_id` (`Airline_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `flight`
--
ALTER TABLE `flight`
  MODIFY `Flight_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6579;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `flight`
--
ALTER TABLE `flight`
  ADD CONSTRAINT `flight_ibfk_1` FOREIGN KEY (`Airline_id`) REFERENCES `airline` (`Airline_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

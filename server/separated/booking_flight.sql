-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2023 at 03:09 PM
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
-- Table structure for table `booking_flight`
--

CREATE TABLE `booking_flight` (
  `booking_flight_id` int(11) NOT NULL,
  `booking_flight_date` date NOT NULL,
  `booking_flight_time` time NOT NULL,
  `ticket_id` int(11) NOT NULL,
  `Mem_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking_flight`
--
ALTER TABLE `booking_flight`
  ADD PRIMARY KEY (`booking_flight_id`),
  ADD KEY `ticket_id` (`ticket_id`),
  ADD KEY `Mem_id` (`Mem_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking_flight`
--
ALTER TABLE `booking_flight`
  ADD CONSTRAINT `booking_flight_ibfk_1` FOREIGN KEY (`ticket_id`) REFERENCES `ticket` (`Ticket_id`),
  ADD CONSTRAINT `booking_flight_ibfk_2` FOREIGN KEY (`Mem_id`) REFERENCES `member` (`mem_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

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
-- Table structure for table `booking_hotel`
--

CREATE TABLE `booking_hotel` (
  `Booking_Hotel_ID` int(11) NOT NULL,
  `Booking_Hotel_Date` date NOT NULL,
  `Booking_Hotel_Time` time NOT NULL,
  `Booking_Guest_Amount` int(11) NOT NULL,
  `Booking_Room_Amount` int(11) NOT NULL,
  `Booking_Check_In_Date` date NOT NULL,
  `Booking_Check_Out_Date` date NOT NULL,
  `Hotel_ID` int(11) NOT NULL,
  `Mem_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `booking_hotel`
--

INSERT INTO `booking_hotel` (`Booking_Hotel_ID`, `Booking_Hotel_Date`, `Booking_Hotel_Time`, `Booking_Guest_Amount`, `Booking_Room_Amount`, `Booking_Check_In_Date`, `Booking_Check_Out_Date`, `Hotel_ID`, `Mem_ID`) VALUES
(1, '2023-03-15', '14:23:00', 2, 1, '2023-03-17', '2023-03-20', 60, 2),
(2, '2023-03-20', '10:10:00', 5, 4, '2023-03-21', '2023-03-22', 42, 5),
(3, '2023-03-23', '07:45:02', 3, 2, '2023-03-23', '2023-03-24', 54, 4),
(4, '2023-03-24', '10:46:11', 2, 1, '2023-03-24', '2023-03-25', 46, 3),
(5, '2023-03-26', '11:30:56', 10, 7, '2023-03-27', '2023-03-29', 48, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking_hotel`
--
ALTER TABLE `booking_hotel`
  ADD PRIMARY KEY (`Booking_Hotel_ID`),
  ADD KEY `Hotel_ID` (`Hotel_ID`),
  ADD KEY `Mem_ID` (`Mem_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking_hotel`
--
ALTER TABLE `booking_hotel`
  MODIFY `Booking_Hotel_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking_hotel`
--
ALTER TABLE `booking_hotel`
  ADD CONSTRAINT `booking_hotel_ibfk_1` FOREIGN KEY (`Hotel_ID`) REFERENCES `hotel` (`hotel_id`),
  ADD CONSTRAINT `booking_hotel_ibfk_2` FOREIGN KEY (`Mem_ID`) REFERENCES `member` (`mem_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

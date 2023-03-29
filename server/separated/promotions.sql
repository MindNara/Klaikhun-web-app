-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2023 at 03:11 PM
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
-- Table structure for table `promotions`
--

CREATE TABLE `promotions` (
  `promotion_id` int(11) NOT NULL,
  `promotion_name` varchar(50) NOT NULL,
  `details` varchar(255) NOT NULL,
  `discount` float NOT NULL,
  `img_location` varchar(255) NOT NULL,
  `code` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `promotions`
--

INSERT INTO `promotions` (`promotion_id`, `promotion_name`, `details`, `discount`, `img_location`, `code`) VALUES
(101, 'New Account', 'Sign Up NOW! discount 50% for first time booked hotel in Bangkok. 1 time/1 user', 0.5, 'https://cdn.discordapp.com/attachments/962280584418304030/1076391135515246612/50-Off-Discount-Vector-Transparent-PNG.png', 'WELCOME50'),
(102, 'Mid Month Sale! [Apr]', 'Mid Month Sale!\nลดราคาโรงแรม และตั๋วเครื่องบิน 30% สำหรับการจองภายในวันที่ 15-17 เมษายนนี้เท่านั้น ', 0.3, 'https://cdn.discordapp.com/attachments/962280584418304030/1090185026160840714/20220415_Listpage_MC_Midmonth_03.jpeg', 'AprMidMonth'),
(103, 'Black Friday', 'ลด 7% สำหรับการจองเที่ยวบิน และโรงแรม เฉพาะวันศุกร์เท่านั้น', 0.07, 'https://cdn.discordapp.com/attachments/962280584418304030/1090589611643895818/tamanna-rumee-KzidBAES-uE-unsplash.jpg', 'BLACKFRI'),
(104, 'SALE', 'ลดราคาสำหรับการจองโรงแรม และเที่ยวบิน 3% ของขวัญเล็กๆน้อยๆสำหรับสมาชิกของเว็บเรา', 0.03, 'https://cdn.discordapp.com/attachments/962280584418304030/1090589586427744256/tamanna-rumee-Wt33T42JNCM-unsplash.jpg', 'LITTLE'),
(105, 'FLIGHT SALE', 'เที่ยวกันอย่างจุใจ แถมได้ราคาดี เพียงใส่โค้ด FLIGHT20 รับไปเลย ส่วนลด 20% สำหรับการจองเที่ยวบิน', 0.2, 'https://cdn.discordapp.com/attachments/962280584418304030/1090589562818011136/natali-quijano-N79MYsd2Ce4-unsplash.jpg', 'FLIGHT20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `promotions`
--
ALTER TABLE `promotions`
  ADD PRIMARY KEY (`promotion_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

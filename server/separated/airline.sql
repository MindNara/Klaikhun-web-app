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
-- Table structure for table `airline`
--

CREATE TABLE `airline` (
  `Airline_id` int(11) NOT NULL,
  `Airline_name` varchar(100) NOT NULL,
  `Airline_logo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `airline`
--

INSERT INTO `airline` (`Airline_id`, `Airline_name`, `Airline_logo`) VALUES
(1, 'การบินไทย', 'https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.18169-9/1001252_10151641448107293_1692015366_n.png?_nc_cat=101&ccb=1-7&_nc_sid=973b4a&_nc_ohc=hsn_V2eWif8AX8FTSYG&_nc_oc=AQl09JvP39In1CZBPFiGG_mFzh35gdxaKhAYTPAw23DZo4kfEfgnbA4F5shxKWnp-hssmbArW-57s_O-tc7BpOIC&_nc_ht=scontent.fbkk12-1.fna&oh=00_AfBeljO7qgu4mjhhPR1QH7nQSgzlGtCdGjekmPT2IvVmZg&oe=644A76E6'),
(2, 'การบินไทย', 'https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.18169-9/1001252_10151641448107293_1692015366_n.png?_nc_cat=101&ccb=1-7&_nc_sid=973b4a&_nc_ohc=hsn_V2eWif8AX8FTSYG&_nc_oc=AQl09JvP39In1CZBPFiGG_mFzh35gdxaKhAYTPAw23DZo4kfEfgnbA4F5shxKWnp-hssmbArW-57s_O-tc7BpOIC&_nc_ht=scontent.fbkk12-1.fna&oh=00_AfBeljO7qgu4mjhhPR1QH7nQSgzlGtCdGjekmPT2IvVmZg&oe=644A76E6'),
(3, 'การบินไทย', 'https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.18169-9/1001252_10151641448107293_1692015366_n.png?_nc_cat=101&ccb=1-7&_nc_sid=973b4a&_nc_ohc=hsn_V2eWif8AX8FTSYG&_nc_oc=AQl09JvP39In1CZBPFiGG_mFzh35gdxaKhAYTPAw23DZo4kfEfgnbA4F5shxKWnp-hssmbArW-57s_O-tc7BpOIC&_nc_ht=scontent.fbkk12-1.fna&oh=00_AfBeljO7qgu4mjhhPR1QH7nQSgzlGtCdGjekmPT2IvVmZg&oe=644A76E6'),
(4, 'การบินไทย', 'https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.18169-9/1001252_10151641448107293_1692015366_n.png?_nc_cat=101&ccb=1-7&_nc_sid=973b4a&_nc_ohc=hsn_V2eWif8AX8FTSYG&_nc_oc=AQl09JvP39In1CZBPFiGG_mFzh35gdxaKhAYTPAw23DZo4kfEfgnbA4F5shxKWnp-hssmbArW-57s_O-tc7BpOIC&_nc_ht=scontent.fbkk12-1.fna&oh=00_AfBeljO7qgu4mjhhPR1QH7nQSgzlGtCdGjekmPT2IvVmZg&oe=644A76E6'),
(5, 'การบินไทย', 'https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.18169-9/1001252_10151641448107293_1692015366_n.png?_nc_cat=101&ccb=1-7&_nc_sid=973b4a&_nc_ohc=hsn_V2eWif8AX8FTSYG&_nc_oc=AQl09JvP39In1CZBPFiGG_mFzh35gdxaKhAYTPAw23DZo4kfEfgnbA4F5shxKWnp-hssmbArW-57s_O-tc7BpOIC&_nc_ht=scontent.fbkk12-1.fna&oh=00_AfBeljO7qgu4mjhhPR1QH7nQSgzlGtCdGjekmPT2IvVmZg&oe=644A76E6'),
(6, 'แอร์เอเชีย', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/768px-AirAsia_New_Logo.svg.png'),
(7, 'แอร์เอเชีย', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/768px-AirAsia_New_Logo.svg.png'),
(8, 'แอร์เอเชีย', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/768px-AirAsia_New_Logo.svg.png'),
(9, 'แอร์เอเชีย', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/768px-AirAsia_New_Logo.svg.png'),
(10, 'นกแอร์', 'https://asiaairticket.com/wp-content/uploads/2017/08/Logo-Nokair.png'),
(11, 'นกแอร์', 'https://asiaairticket.com/wp-content/uploads/2017/08/Logo-Nokair.png'),
(12, 'นกแอร์', 'https://asiaairticket.com/wp-content/uploads/2017/08/Logo-Nokair.png'),
(13, 'นกแอร์', 'https://asiaairticket.com/wp-content/uploads/2017/08/Logo-Nokair.png'),
(14, 'บางกอกแอร์เวย์ส', 'https://www.techtalkthai.com/wp-content/uploads/2016/08/oracle-bangkok-airways-logo.jpg'),
(15, 'บางกอกแอร์เวย์ส', 'https://www.techtalkthai.com/wp-content/uploads/2016/08/oracle-bangkok-airways-logo.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `airline`
--
ALTER TABLE `airline`
  ADD PRIMARY KEY (`Airline_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

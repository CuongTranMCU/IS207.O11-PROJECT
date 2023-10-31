-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2023 at 04:17 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cayxinh`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `Admin_id` bigint(20) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone` varchar(50) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NULL DEFAULT current_timestamp(),
  `Password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`Admin_id`, `Name`, `Email`, `Phone`, `Address`, `Created_at`, `Updated_at`, `Password`) VALUES
(1, 'Trần Văn Cường', 'tranvancuong@gmail.com', '0912345678', 'Huế', '2023-10-28 08:42:00', '2023-10-28 08:42:00', 'admin'),
(2, 'Trần Anh Tuấn', 'trananhtuan@gmail.com', '0987654321', 'Bình Thuận', '2023-10-28 08:47:10', '2023-10-28 08:47:10', 'admin'),
(3, 'Nguyễn Xuân Tùng', 'nguyenxuantung@gmail.com', '0712345678', 'Bình Thuận', '2023-10-28 08:47:37', '2023-10-28 08:47:37', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `Category_id` int(20) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Slug` varchar(50) NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`Category_id`, `Name`, `Slug`, `Created_at`, `Updated_at`) VALUES
(1, 'Cây trồng trong nhà', 'Cay-trong-trong-nha', '2023-10-28 09:26:51', '2023-10-28 09:26:51'),
(2, 'Cây cảnh văn phòng', 'cay-canh-van-phong', '2023-10-28 09:26:51', '2023-10-28 09:26:51'),
(3, 'Tiểu cảnh Terrarium', 'tieu-canh-terrarium', '2023-10-28 09:26:51', '2023-10-28 09:26:51'),
(4, 'Chậu cây cảnh', 'chau-cay-canh', '2023-10-28 09:26:51', '2023-10-28 09:26:51'),
(5, 'Sen đá', 'sen-da', '2023-10-28 09:26:51', '2023-10-28 09:26:51'),
(6, 'Xương rồng', 'xuong-rong', '2023-10-28 09:26:51', '2023-10-28 09:26:51'),
(7, 'Phụ kiện Terrarium', 'phu-kien-terrarium', '2023-10-28 09:26:51', '2023-10-28 09:26:51');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `Order_ID` bigint(20) NOT NULL,
  `Product_ID` int(20) NOT NULL,
  `Product_name` varchar(50) NOT NULL,
  `Product_price` int(20) NOT NULL,
  `Quantity` int(20) NOT NULL,
  `Transaction_ID` bigint(20) NOT NULL,
  `Created_at` timestamp NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`Order_ID`, `Product_ID`, `Product_name`, `Product_price`, `Quantity`, `Transaction_ID`, `Created_at`, `Updated_at`) VALUES
(3, 9, 'Chậu Gốm Nhật Vát Trắng Nhỏ', 35000, 2, 1, '2023-10-28 09:58:11', '2023-10-28 09:58:11'),
(4, 10, 'Chậu Gốm Tròn Vát Đáy Đỏ', 50000, 1, 1, '2023-10-28 09:58:11', '2023-10-28 09:58:11'),
(5, 5, 'Tiểu cảnh Thủy Tinh 18', 200000, 10, 2, '2023-10-28 10:01:33', '2023-10-28 10:01:33'),
(6, 7, 'Tiểu cảnh gốm sứ 35', 350000, 2, 2, '2023-10-28 10:01:33', '2023-10-28 10:01:33'),
(7, 8, 'Tranh Sen Đá 04', 350000, 2, 2, '2023-10-28 10:01:33', '2023-10-28 10:01:33'),
(8, 1, 'Cây Ngọc Bích', 170000, 2, 3, '2023-10-28 10:03:50', '2023-10-28 10:03:50'),
(9, 2, 'Cây Trầu Bà Đế Vương Đỏ', 220000, 2, 3, '2023-10-28 10:03:50', '2023-10-28 10:03:50'),
(10, 3, 'Cây Vạn Lộc Thủy Sinh', 220000, 1, 4, '2023-10-28 10:06:01', '2023-10-28 10:06:01'),
(11, 3, 'Cây Vạn Lộc Thủy Sinh', 220000, 10, 5, '2023-10-28 10:08:06', '2023-10-28 10:08:06');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `Product_ID` int(20) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Price` int(20) NOT NULL,
  `Img_path` varchar(200) NOT NULL,
  `Content` text NOT NULL,
  `Quantity` int(20) NOT NULL,
  `Sold` int(20) NOT NULL,
  `View` int(20) NOT NULL,
  `Discount` int(20) NOT NULL DEFAULT 0,
  `Created_at` timestamp NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Category_ID` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`Product_ID`, `Name`, `Price`, `Img_path`, `Content`, `Quantity`, `Sold`, `View`, `Discount`, `Created_at`, `Updated_at`, `Category_ID`) VALUES
(1, 'Cây Ngọc Bích', 170000, 'https://cayxinh.vn/wp-content/uploads/2018/01/cay-ngoc-bich-1208192-400x400.jpg', '', 10, 10, 10, 0, '2023-10-28 09:32:15', '2023-10-28 09:32:15', 2),
(2, 'Cây Trầu Bà Đế Vương Đỏ', 220000, 'https://cayxinh.vn/wp-content/uploads/2018/06/cay-trau-ba-1608193-400x400.jpg', '', 10, 10, 10, 0, '2023-10-28 09:35:21', '2023-10-28 09:35:21', 2),
(3, 'Cây Vạn Lộc Thủy Sinh', 220000, 'https://cayxinh.vn/wp-content/uploads/2017/11/van-loc-thuy-sinh-280820-400x400.jpg', '', 10, 10, 10, 0, '2023-10-28 09:35:21', '2023-10-28 09:35:21', 2),
(4, 'Cây Đuôi Công Tím', 170000, 'https://cayxinh.vn/wp-content/uploads/2017/11/duoi-cong-tim-0908195-400x400.jpg', '', 10, 10, 10, 0, '2023-10-28 09:35:21', '2023-10-28 09:35:21', 2),
(5, 'Tiểu cảnh Thuỷ Tinh 18', 200000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-thuy-tinh-18-400x400.jpg', '', 10, 10, 10, 0, '2023-10-28 09:39:52', '2023-10-28 09:39:52', 3),
(6, 'Tiểu cảnh Thuỷ Tinh 51', 100000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tieu-canh-terrarium-thuy-tinh-06-400x400.jpg', '', 10, 10, 10, 30, '2023-10-28 09:39:52', '2023-10-28 09:39:52', 3),
(7, 'Tiểu cảnh gốm sứ 35', 350000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-gom-su-35-400x400.jpg', '', 10, 10, 10, 0, '2023-10-28 09:39:52', '2023-10-28 09:39:52', 3),
(8, 'Tranh Sen Đá 04', 350000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tranh-sen-da-04-400x400.jpg', '', 10, 10, 10, 0, '2023-10-28 09:39:52', '2023-10-28 09:39:52', 3),
(9, 'Chậu Gốm Nhật Vát Trắng Nhỏ', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-nhat-tron-vat-35k-min-400x400.jpg', '', 10, 10, 10, 0, '2023-10-28 09:44:32', '2023-10-28 09:44:32', 4),
(10, 'Chậu Gốm Tròn Vát Đáy Đỏ', 50000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-tron-vat-day-do-50k-min-400x400.jpg', '', 10, 10, 10, 0, '2023-10-28 09:44:32', '2023-10-28 09:44:32', 4),
(11, 'Chậu Gốm Sứ Mắt Na S2', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-su-mat-na-s2-min-400x400.jpg', '', 10, 10, 10, 0, '2023-10-28 09:44:32', '2023-10-28 09:44:32', 4),
(12, 'Chậu Gốm Sứ Kẻ Miệng', 70000, 'https://cayxinh.vn/wp-content/uploads/2018/01/chau-gom-su-ke-mieng-01-400x400.jpg', '', 10, 10, 10, 0, '2023-10-28 09:44:32', '2023-10-28 09:44:32', 4),
(13, 'Cây Tùng Xương Cá', 1200000, 'https://cayxinh.vn/wp-content/uploads/2020/12/cay-tung-xuong-ca-121220-01-280x280.jpg', '', 10, 10, 10, 40, '2023-10-31 01:46:50', '2023-10-31 01:46:50', 1),
(14, 'Cây Phát Tài', 270000, 'https://cayxinh.vn/wp-content/uploads/2020/08/cay-phat-tai-050820-06-280x280.jpg', '', 10, 10, 10, 5, '2023-10-31 01:46:50', '2023-10-31 01:46:50', 1),
(15, 'Cây Vạn Niên Thanh Leo Cột', 1400000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-van-nien-thanh-cot-300x300.jpg', '', 10, 10, 10, 14, '2023-10-31 01:46:50', '2023-10-31 01:46:50', 1),
(16, 'Cây Hạnh Phúc', 220000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-hanh-phuc-1108198-280x280.jpg', '', 10, 10, 10, 15, '2023-10-31 01:46:50', '2023-10-31 01:46:50', 1),
(17, 'Cây Ngũ Gia Bì', 250000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-ngu-gia-bi-12081911-280x280.jpg', '', 10, 10, 10, 13, '2023-10-31 01:46:50', '2023-10-31 01:46:50', 1),
(18, 'Cây Cau Cảnh', 850000, 'https://cayxinh.vn/wp-content/uploads/2020/07/cay-cau-canh-14102020-1-280x280.jpg', '', 10, 10, 10, 10, '2023-10-31 01:51:53', '2023-10-31 01:51:53', 1),
(19, 'Cây Trầu Bà Leo Cột', 900000, 'https://cayxinh.vn/wp-content/uploads/2019/11/cay-trau-ba-leo-cot-2811-2019-280x280.jpg', '', 10, 10, 10, 6, '2023-10-31 01:51:53', '2023-10-31 01:51:53', 1),
(20, 'Cây Trầu Bà', 220000, 'https://cayxinh.vn/wp-content/uploads/2018/06/cay-trau-ba-1608197-280x280.jpg', '', 10, 10, 10, 2, '2023-10-31 01:51:53', '2023-10-31 01:51:53', 1),
(21, 'Cây Thiết Mộc Lan', 250000, 'https://cayxinh.vn/wp-content/uploads/2018/05/cay-thiet-moc-lan-01-300x300.jpg', '', 10, 10, 10, 17, '2023-10-31 01:51:53', '2023-10-31 01:51:53', 1),
(22, 'Cây Trầu Bà Đế Vương Đỏ', 220000, 'https://cayxinh.vn/wp-content/uploads/2018/06/cay-trau-ba-1608193-400x400.jpg', '', 10, 10, 10, 11, '2023-10-31 01:51:53', '2023-10-31 01:51:53', 1),
(23, 'Cây Trường Sinh', 170000, 'https://cayxinh.vn/wp-content/uploads/2017/12/cay-truong-sinh-1008192-280x280.jpg', '', 10, 10, 10, 17, '2023-10-31 01:53:48', '2023-10-31 01:53:48', 1),
(24, 'Cây Bàng Singapore', 170000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-bang-singgapore-1108195-280x280.jpg', '', 10, 10, 10, 23, '2023-10-31 01:53:48', '2023-10-31 01:53:48', 1),
(25, 'Cây Ngũ Gia Bì', 250000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-ngu-gia-bi-12081911-280x280.jpg', '', 10, 10, 10, 13, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(26, 'Cây Cau Cảnh', 850000, 'https://cayxinh.vn/wp-content/uploads/2020/07/cay-cau-canh-14102020-1-280x280.jpg', '', 10, 10, 10, 1, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(27, 'Cây Mộc Hương', 850000, 'https://cayxinh.vn/wp-content/uploads/2020/06/moc-huong-8-280x280.jpg', '', 10, 10, 10, 5, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(28, 'Cây Kim Ngân', 220000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-kim-ngan-1108195-280x280.jpg', '', 10, 10, 10, 14, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(29, 'Cây Đa Búp Đỏ', 170000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-da-bup-do-1108191-280x280.jpg', '', 10, 10, 10, 1, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(30, 'Cây Cau Tiểu Trâm', 170000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-cau-tieu-tram-1108199-280x280.jpg', '', 10, 10, 10, 23, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(31, 'Cây Tùng La Hán', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tung-la-han-1708198-280x280.jpg', '', 10, 10, 10, 17, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(32, 'Tiểu cảnh Composite 09', 500000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-terrarium-composite-09-300x300.jpg', '', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(33, 'Tiểu cảnh Composite 08', 500000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-terrarium-composite-08-300x300.jpg', '', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(34, 'Tiểu cảnh Composite 07', 500000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-terrarium-composite-07-300x300.jpg', '', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(35, 'Tiểu cảnh Composite 06', 500000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-terrarium-composite-06-300x300.jpg', '', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(36, 'Tiểu cảnh Thuỷ Tinh 37', 500000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tieu-canh-terrarium-thuy-tinh-02-300x300.jpg', '', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(37, 'Tiểu cảnh Composite 05', 500000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tieu-canh-terrarium-composite-05-300x300.jpg', '', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(38, 'Tiểu cảnh Composite 04', 500000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tieu-canh-terrarium-composite-04-300x300.jpg', '', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(39, 'Tiểu cảnh Composite 03', 500000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tieu-canh-terrarium-composite-03-300x300.jpg', '', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(40, 'Chậu Thủy Tinh Tròn Vát', 120000, 'https://cayxinh.vn/wp-content/uploads/2018/01/chau-thuy-tinh-tron-vat-300x300.jpg', '', 10, 10, 10, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(41, 'Chậu Gốm Vân Đá Trụ Tròn', 150000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-van-da-tru-tron-01-300x300.jpg', '', 10, 10, 10, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(42, 'Chậu Gốm Sứ Hạt Dẻ S1', 120000, 'https://cayxinh.vn/wp-content/uploads/2018/01/chau-gom-su-hat-de-s1-01-300x300.jpg', '', 10, 10, 10, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(43, 'Chậu Gốm Sứ Vuông Vát S2', 90000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-su-vuong-vat-s2-300x300.jpg', '', 10, 10, 10, 0, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(44, 'Chậu Gốm Sứ Nhật Tròn Cao', 100000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-nhat-binh-cao-trang-2-70k-min-280x280.jpg', '', 10, 10, 10, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(45, 'Chậu Gốm Sứ Nhật Ang To', 70000, 'https://cayxinh.vn/wp-content/uploads/2018/01/chau-gom-nhat-dia-to-hong-70k-300x300.jpg', '', 10, 10, 10, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(46, 'Chậu gốm chữ nhật khóm hoa', 90000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-dat-nung-013-300x300.jpg', '', 10, 10, 10, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(47, 'Chậu Gốm Nhật Bộ 3 Men Chảy', 40000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-nhat-bo-3-men-chay-01-min-280x280.jpg', '', 10, 10, 10, 0, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(48, 'Sen Đá Hoa Hồng Xanh', 150000, 'https://cayxinh.vn/wp-content/uploads/2020/06/sen-da-hoa-hong-xanh-280x280.jpg', '', 10, 10, 10, 33, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(49, 'Sen Đá Da Rắn', 90000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-da-ran-280x280.jpg', '', 10, 10, 10, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(50, 'Sen Đá Phật Bà Trắng', 90000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-phat-ba-trang-280x280.jpg', '', 10, 10, 10, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(51, 'Sen Đá Viền Tím Cánh Nhọn', 70000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-vien-tim-canh-nhon-300x300.jpg', '', 10, 10, 10, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(52, 'Sen Đá Kim Cương', 70000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-kim-cuong-300x300.jpg', '', 10, 10, 10, 0, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(53, 'Sen Đá Sỏi Viền Đỏ', 70000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-soi-vien-do-280x280.jpg', '', 10, 10, 10, 0, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(54, 'Sen Đá Kim Tuyến', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/12/sen-da-kim-tuyen-2-270221-1-280x280.jpg', '', 10, 10, 10, 0, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(55, 'Sen Đá 3D', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-3d-280x280.jpg', '', 10, 10, 10, 0, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(56, 'Sen Đá Pha Lê', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-pha-le-120820-9-280x280.jpg', '', 10, 10, 10, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(57, 'Sen Đá Cỏ Tím', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-co-tim-300x300.jpg', '', 10, 10, 10, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(58, 'Sen Đá Chuỗi Ngọc Bi', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-chuoi-ngoc-bi-300x300.jpg', '', 10, 10, 10, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(59, 'Sen Đá Sedum Hoa Hồng', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-sedum-bong-hong-phap-080820-5-280x280.jpg', '', 10, 10, 10, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(60, 'Xương Rồng Khế Bụi Vàng', 300000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-khe-vang-bui-280x280.jpg', '', 10, 10, 10, 33, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(61, 'Xương Rồng Khế Xanh Bụi', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-khe-xanh-280x280.jpg', '', 10, 10, 10, 2, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(62, 'Xương Rồng Lông Thiên Nga Bụi', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-long-thien-nga-bui-280x280.jpg', '', 10, 10, 10, 1, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(63, 'Xương Rồng Bóng Vàng Bụi', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-bong-vang-bui-280x280.jpg', '', 10, 10, 10, 2, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(64, 'Xương Rồng Hồng Tử Đinh', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-hong-tu-dinh-280x280.jpg', '', 10, 10, 10, 1, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(65, 'Xương Rồng Tai Thỏ Xanh', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/04/xuong-rong-tai-tho-xanh-300x300.jpg', '', 10, 10, 10, 20, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(66, 'Xương Rồng Bát Tiên', 150000, 'https://cayxinh.vn/wp-content/uploads/2020/03/xuong_rong_bat_tien_290320_03-280x280.jpg', '', 10, 10, 10, 40, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(67, 'Xương Rồng Tai Thỏ Vàng', 90000, 'https://cayxinh.vn/wp-content/uploads/2018/04/xuong-rong-tai-tho-vang-2-300x300.jpg', '', 10, 10, 10, 1, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(68, 'Xương Rồng Lông Thiên Nga', 90000, 'https://cayxinh.vn/wp-content/uploads/2018/02/xuong-rong-long-thien-nga-300x300.jpg', '', 10, 10, 10, 0, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(69, 'Xương Rồng Gymno', 70000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-gymno-gai-trang-280x280.jpg', '', 10, 10, 10, 2, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(70, 'Xương Rồng Thần Long', 70000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-than-long-270221-280x280.jpg', '', 10, 10, 10, 1, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(71, 'Xương Rồng Astro', 70000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-astro-280x280.jpg', '', 10, 10, 10, 0, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(72, 'Biệt thự lớn', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/03/biet-thu-lon-04-300x300.jpg', '', 10, 10, 10, 33, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(73, 'Móc treo thủy tinh', 100000, 'https://cayxinh.vn/wp-content/uploads/2018/03/moc-treo-thuy-tinh-02-300x300.jpg', '', 10, 10, 10, 50, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(74, 'Biệt Thự Nhỏ', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/biet-thu-nho-01-min-280x280.jpg', '', 10, 10, 10, 1, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(75, 'Nhà nấm 2', 35000, 'https://cayxinh.vn/wp-content/uploads/2018/03/nha-nam-2-01-300x300.jpg', '', 10, 10, 10, 29, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(76, 'Nhà nấm', 35000, 'https://cayxinh.vn/wp-content/uploads/2018/03/nha-nam-1-05-300x300.jpg', '', 10, 10, 10, 29, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(77, 'Totoro lái xe', 25000, 'https://cayxinh.vn/wp-content/uploads/2017/11/totoro-lai-xe-01-280x280.jpg', '', 10, 10, 10, 0, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(78, 'Totoro cầm ô', 25000, 'https://cayxinh.vn/wp-content/uploads/2017/11/Totoro-cam-o-01-280x280.jpg', '', 10, 10, 10, 0, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(79, 'Thỏ con 2', 25000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tho-con-2-01-280x280.jpg', '', 10, 10, 10, 0, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(80, 'Nhà cổ Hội An', 25000, 'https://cayxinh.vn/wp-content/uploads/2017/11/nha-co-hoi-an-01-280x280.jpg', '', 10, 10, 10, 1, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(81, 'Ngôi nhà nhỏ 2', 25000, 'https://cayxinh.vn/wp-content/uploads/2017/11/ngoi-nha-nho-2-01-280x280.jpg', '', 10, 10, 10, 0, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(82, 'Khỉ con xinh xắn', 25000, 'https://cayxinh.vn/wp-content/uploads/2017/11/khi-con-xinh-xan-01-280x280.jpg', '', 10, 10, 10, 2, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `Transaction_ID` bigint(20) NOT NULL,
  `User_ID` bigint(20) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Phone` varchar(50) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Status` tinyint(1) NOT NULL DEFAULT 0,
  `Total_money` int(20) NOT NULL DEFAULT 0,
  `Payment_Method` tinyint(1) NOT NULL DEFAULT 0,
  `Note` text NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`Transaction_ID`, `User_ID`, `Name`, `Phone`, `Address`, `Status`, `Total_money`, `Payment_Method`, `Note`, `Created_at`, `Updated_at`) VALUES
(1, 6, 'Lê Vy Thùy Uyên', '09125632187', 'Bình Thuận', 0, 120000, 0, 'Giao hàng sau 18h ', '2023-10-28 09:55:12', '2023-10-28 09:55:12'),
(2, 5, 'Dan Hauer', '0512345678', 'Hà Nội', 0, 3400000, 0, 'Giao tới công ty vào giờ hành chính', '2023-10-28 09:56:29', '2023-10-28 09:56:29'),
(3, 8, 'Đỗ Hùng Dũng', '0412356487', 'Hà Nội', 0, 780000, 0, '', '2023-10-28 09:57:02', '2023-10-28 09:57:02'),
(4, 10, 'Trần Hưng Đạo', '0412345678', 'Cần Thơ', 0, 220000, 0, '', '2023-10-28 10:05:17', '2023-10-28 10:05:17'),
(5, 9, 'Nguyễn Anh Thư', '081542367', 'Ninh Bình', 0, 2200000, 0, '', '2023-10-28 10:07:33', '2023-10-28 10:07:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `User_ID` bigint(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`User_ID`, `Email`, `Password`, `Created_at`, `Updated_at`) VALUES
(5, 'kaxaka1547@undewp.com', 'user', '2023-10-28 09:17:57', '2023-10-28 09:17:57'),
(6, 'levythuyuyen@gmail.com', 'user', '2023-10-28 09:19:35', '2023-10-28 09:19:35'),
(7, 'trananhkiet@gmail.com', 'user', '2023-10-28 09:20:20', '2023-10-28 09:20:20'),
(8, 'dohungdung@gmail.com', 'user', '2023-10-28 09:20:20', '2023-10-28 09:20:20'),
(9, 'nguyenanhthu@gmail.com', 'user', '2023-10-28 09:21:24', '2023-10-28 09:21:24'),
(10, 'tranhungdao@gmail.com', 'user', '2023-10-28 09:21:24', '2023-10-28 09:21:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`Admin_id`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Phone` (`Phone`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`Category_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`Order_ID`),
  ADD KEY `Order-Products` (`Product_ID`),
  ADD KEY `Order-Transactions` (`Transaction_ID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`Product_ID`),
  ADD KEY `Categories-Products` (`Category_ID`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`Transaction_ID`),
  ADD KEY `Users-Transactions` (`User_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`User_ID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `Admin_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `Category_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `Order_ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `Product_ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `Transaction_ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `User_ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `Order-Products` FOREIGN KEY (`Product_ID`) REFERENCES `products` (`Product_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Order-Transactions` FOREIGN KEY (`Transaction_ID`) REFERENCES `transactions` (`Transaction_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `Categories-Products` FOREIGN KEY (`Category_ID`) REFERENCES `categories` (`Category_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `Users-Transactions` FOREIGN KEY (`User_ID`) REFERENCES `users` (`User_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 14, 2023 lúc 06:28 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `cayxinh`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admins`
--

CREATE TABLE `admins` (
  `Admin_ID` bigint(20) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone` varchar(50) DEFAULT NULL,
  `Address` varchar(50) DEFAULT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `admins`
--

INSERT INTO `admins` (`Admin_ID`, `Name`, `Email`, `Phone`, `Address`, `Created_at`, `Updated_at`, `Password`) VALUES
(12, 'Tùng', 'tung@gmail.com', 'empty', 'empty', '2023-11-11 07:14:51', '2023-11-11 07:14:51', '$2y$12$rPPvgs1ncTMBHEINO8URReV3gWowxeGBuZS801JkvrpRImAMLd4ZC'),
(16, 'Cường', 'cuong@gmail.com', '', '', '2023-11-11 07:17:02', '2023-11-11 07:17:02', '$2y$12$BO7BUTnm8z0sjqJNb3/c.enAgtyvR5/AZ/TU3rQ2Dym.Tbwtoel3.'),
(18, 'Tuấn', 'tuan@gmail.com', 'NULL', 'NULL', '2023-11-11 07:18:11', '2023-11-11 07:18:11', '$2y$12$R9HkDfb3D1DW8tkwuQFFpejtIBrqx1XZMq/dZ/xNb/RRz855svzYK'),
(20, 'Kiệt1', 'kiet1@gmail.com', NULL, NULL, '2023-11-11 07:19:15', '2023-11-11 07:19:15', '$2y$12$5rVacJs8C0gGyjNgFlTMN.R4a7T.fcvLQX/PXu.bSOknNjqyxL9UW'),
(21, 'Kiệt2', 'kiet2@gmail.com', NULL, NULL, '2023-11-11 07:19:28', '2023-11-11 07:19:28', '$2y$12$pgcGAXp1t3.q9WaL5GmHRuxyD/XRZmEGMC9I.EvUpDMetZNaxhsDe');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Product_name` varchar(255) NOT NULL,
  `Product_price` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `User_ID` bigint(20) NOT NULL,
  `Product_ID` int(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `Status` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `Category_ID` int(20) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Slug` varchar(100) NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`Category_ID`, `Name`, `Slug`, `Created_at`, `Updated_at`) VALUES
(1, 'Cây trồng trong nhà', 'Cay-trong-trong-nha', '2023-10-28 09:26:51', '2023-10-28 09:26:51'),
(2, 'Cây cảnh văn phòng', 'cay-canh-van-phong', '2023-10-28 09:26:51', '2023-10-28 09:26:51'),
(3, 'Tiểu cảnh Terrarium', 'tieu-canh-terrarium', '2023-10-28 09:26:51', '2023-10-28 09:26:51'),
(4, 'Chậu cây cảnh', 'chau-cay-canh', '2023-10-28 09:26:51', '2023-10-28 09:26:51'),
(5, 'Sen đá', 'sen-da', '2023-10-28 09:26:51', '2023-10-28 09:26:51'),
(6, 'Xương rồng', 'xuong-rong', '2023-10-28 09:26:51', '2023-10-28 09:26:51'),
(7, 'Phụ kiện Terrarium', 'phu-kien-terrarium', '2023-10-28 09:26:51', '2023-10-28 09:26:51'),
(22, 'Cây', 'Cay-trong', '2023-11-12 03:16:44', '2023-11-12 03:18:11');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(2, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(3, '2023_11_14_012955_create_carts_table', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `Product_ID` int(20) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Price` int(20) NOT NULL,
  `Img_path` varchar(200) NOT NULL,
  `Content` text NOT NULL,
  `Slug` varchar(50) NOT NULL,
  `Quantity` int(20) NOT NULL DEFAULT 0,
  `Sold` int(20) NOT NULL DEFAULT 0,
  `View` int(20) NOT NULL DEFAULT 0,
  `Discount` int(20) NOT NULL DEFAULT 0,
  `Created_at` timestamp NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Category_ID` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`Product_ID`, `Name`, `Price`, `Img_path`, `Content`, `Slug`, `Quantity`, `Sold`, `View`, `Discount`, `Created_at`, `Updated_at`, `Category_ID`) VALUES
(1, 'Cây Ngọc Bích', 170000, 'https://cayxinh.vn/wp-content/uploads/2018/01/cay-ngoc-bich-1208192-400x400.jpg', '', 'cay-ngoc-bich', 10, 0, 0, 0, '2023-10-28 09:32:15', '2023-11-11 06:41:50', 2),
(2, 'Cây Trầu Bà Đế Vương Đỏ', 220000, 'https://cayxinh.vn/wp-content/uploads/2018/06/cay-trau-ba-1608193-400x400.jpg', '', 'cay-trau-ba-de-vuong-do', 10, 0, 0, 0, '2023-10-28 09:35:21', '2023-11-11 06:39:41', 2),
(3, 'Cây Vạn Lộc Thủy Sinh', 220000, 'https://cayxinh.vn/wp-content/uploads/2017/11/van-loc-thuy-sinh-280820-400x400.jpg', '', 'cay-van-loc-thuy-sinh', 10, 0, 0, 0, '2023-10-28 09:35:21', '2023-11-11 06:39:41', 2),
(4, 'Cây Đuôi Công Tím', 170000, 'https://cayxinh.vn/wp-content/uploads/2017/11/duoi-cong-tim-0908195-400x400.jpg', '', 'cay-duoi-cong-tim', 10, 0, 0, 0, '2023-10-28 09:35:21', '2023-10-28 09:35:21', 2),
(5, 'Tiểu cảnh Thuỷ Tinh 18', 200000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-thuy-tinh-18-400x400.jpg', '', 'tieu-canh-thuy-tinh-18', 10, 0, 0, 0, '2023-10-28 09:39:52', '2023-10-28 09:39:52', 3),
(6, 'Tiểu cảnh Thuỷ Tinh 51', 100000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tieu-canh-terrarium-thuy-tinh-06-400x400.jpg', '', 'tieu-canh-thuy-tinh-51', 10, 0, 0, 30, '2023-10-28 09:39:52', '2023-10-28 09:39:52', 3),
(7, 'Tiểu cảnh gốm sứ 35', 350000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-gom-su-35-400x400.jpg', '', 'tieu-canh-gom-su-35', 10, 0, 0, 0, '2023-10-28 09:39:52', '2023-10-28 09:39:52', 3),
(8, 'Tranh Sen Đá 04', 350000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tranh-sen-da-04-400x400.jpg', '', 'tranh-sen-da-04', 10, 0, 0, 0, '2023-10-28 09:39:52', '2023-11-11 06:39:41', 3),
(9, 'Chậu Gốm Nhật Vát Trắng Nhỏ', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-nhat-tron-vat-35k-min-400x400.jpg', '', 'chau-gom-nhat-vat-trang-nho', 10, 0, 0, 0, '2023-10-28 09:44:32', '2023-10-28 09:44:32', 4),
(10, 'Chậu Gốm Tròn Vát Đáy Đỏ', 50000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-tron-vat-day-do-50k-min-400x400.jpg', '', 'chau-gom-tron-vat-day-do', 10, 0, 0, 0, '2023-10-28 09:44:32', '2023-10-28 09:44:32', 4),
(11, 'Chậu Gốm Sứ Mắt Na S2', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-su-mat-na-s2-min-400x400.jpg', '', 'chau-gom-su-mat-na-s2', 10, 0, 0, 0, '2023-10-28 09:44:32', '2023-10-28 09:44:32', 4),
(12, 'Chậu Gốm Sứ Kẻ Miệng', 70000, 'https://cayxinh.vn/wp-content/uploads/2018/01/chau-gom-su-ke-mieng-01-400x400.jpg', '', 'chau-gom-su-ke-mieng', 10, 0, 0, 0, '2023-10-28 09:44:32', '2023-10-28 09:44:32', 4),
(13, 'Cây Tùng Xương Cá', 1200000, 'https://cayxinh.vn/wp-content/uploads/2020/12/cay-tung-xuong-ca-121220-01-280x280.jpg', '', 'cay-tung-xuong-ca', 10, 0, 0, 40, '2023-10-31 01:46:50', '2023-10-31 01:46:50', 1),
(14, 'Cây Phát Tài', 270000, 'https://cayxinh.vn/wp-content/uploads/2020/08/cay-phat-tai-050820-06-280x280.jpg', '', 'cay-phat-tai', 10, 0, 0, 5, '2023-10-31 01:46:50', '2023-10-31 01:46:50', 1),
(15, 'Cây Vạn Niên Thanh Leo Cột', 1400000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-van-nien-thanh-cot-300x300.jpg', '', 'cay-van-nien-thanh-leo-cot', 10, 0, 0, 14, '2023-10-31 01:46:50', '2023-10-31 01:46:50', 1),
(16, 'Cây Hạnh Phúc', 220000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-hanh-phuc-1108198-280x280.jpg', '', 'cay-hanh-phuc', 10, 0, 0, 15, '2023-10-31 01:46:50', '2023-10-31 01:46:50', 1),
(17, 'Cây Ngũ Gia Bì', 250000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-ngu-gia-bi-12081911-280x280.jpg', '', 'cay-ngu-gia-bi', 10, 0, 0, 13, '2023-10-31 01:46:50', '2023-10-31 01:46:50', 1),
(18, 'Cây Cau Cảnh', 850000, 'https://cayxinh.vn/wp-content/uploads/2020/07/cay-cau-canh-14102020-1-280x280.jpg', '', 'cay-cau-canh', 10, 0, 0, 10, '2023-10-31 01:51:53', '2023-10-31 01:51:53', 1),
(19, 'Cây Trầu Bà Leo Cột', 900000, 'https://cayxinh.vn/wp-content/uploads/2019/11/cay-trau-ba-leo-cot-2811-2019-280x280.jpg', '', 'cay-trau-ba-leo-cot', 10, 0, 0, 6, '2023-10-31 01:51:53', '2023-10-31 01:51:53', 1),
(20, 'Cây Trầu Bà', 220000, 'https://cayxinh.vn/wp-content/uploads/2018/06/cay-trau-ba-1608197-280x280.jpg', '', 'cay-trau-ba', 10, 0, 0, 2, '2023-10-31 01:51:53', '2023-10-31 01:51:53', 1),
(21, 'Cây Thiết Mộc Lan', 250000, 'https://cayxinh.vn/wp-content/uploads/2018/05/cay-thiet-moc-lan-01-300x300.jpg', '', 'cay-thiet-moc-lan', 10, 0, 0, 17, '2023-10-31 01:51:53', '2023-10-31 01:51:53', 1),
(22, 'Cây Trầu Bà Đế Vương Đỏ', 220000, 'https://cayxinh.vn/wp-content/uploads/2018/06/cay-trau-ba-1608193-400x400.jpg', '', 'cay-trau-ba-de-vuong-do', 10, 0, 0, 11, '2023-10-31 01:51:53', '2023-10-31 01:51:53', 1),
(23, 'Cây Trường Sinh', 170000, 'https://cayxinh.vn/wp-content/uploads/2017/12/cay-truong-sinh-1008192-280x280.jpg', '', 'cay-truong-sinh', 10, 0, 0, 17, '2023-10-31 01:53:48', '2023-10-31 01:53:48', 1),
(24, 'Cây Bàng Singapore', 170000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-bang-singgapore-1108195-280x280.jpg', '', 'cay-bang-singapore', 10, 0, 0, 23, '2023-10-31 01:53:48', '2023-10-31 01:53:48', 1),
(25, 'Cây Ngũ Gia Bì', 250000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-ngu-gia-bi-12081911-280x280.jpg', '', 'cay-ngu-gia-bi', 10, 0, 0, 13, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(26, 'Cây Cau Cảnh', 850000, 'https://cayxinh.vn/wp-content/uploads/2020/07/cay-cau-canh-14102020-1-280x280.jpg', '', 'cay-cau-canh', 10, 0, 0, 1, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(27, 'Cây Mộc Hương', 850000, 'https://cayxinh.vn/wp-content/uploads/2020/06/moc-huong-8-280x280.jpg', '', 'cay-moc-huong', 10, 0, 0, 5, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(28, 'Cây Kim Ngân', 220000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-kim-ngan-1108195-280x280.jpg', '', 'cay-kim-ngan', 10, 0, 0, 14, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(29, 'Cây Đa Búp Đỏ', 170000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-da-bup-do-1108191-280x280.jpg', '', 'cay-da-bup-do', 10, 0, 0, 1, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(30, 'Cây Cau Tiểu Trâm', 170000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-cau-tieu-tram-1108199-280x280.jpg', '', 'cay-cau-tieu-tram', 10, 0, 0, 23, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(31, 'Cây Tùng La Hán', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tung-la-han-1708198-280x280.jpg', '', 'cay-tung-la-han', 10, 0, 0, 17, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(32, 'Tiểu cảnh Composite 09', 500000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-terrarium-composite-09-300x300.jpg', '', 'tieu-canh-composite-09', 10, 0, 0, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(33, 'Tiểu cảnh Composite 08', 500000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-terrarium-composite-08-300x300.jpg', '', 'tieu-canh-composite-08', 10, 0, 0, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(34, 'Tiểu cảnh Composite 07', 500000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-terrarium-composite-07-300x300.jpg', '', 'tieu-canh-composite-07', 10, 0, 0, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(35, 'Tiểu cảnh Composite 06', 500000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-terrarium-composite-06-300x300.jpg', '', 'tieu-canh-composite-06', 10, 0, 0, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(36, 'Tiểu cảnh Thuỷ Tinh 37', 500000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tieu-canh-terrarium-thuy-tinh-02-300x300.jpg', '', 'tieu-canh-thuy-tinh-37', 10, 0, 0, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(37, 'Tiểu cảnh Composite 05', 500000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tieu-canh-terrarium-composite-05-300x300.jpg', '', 'tieu-canh-composite-05', 10, 0, 0, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(38, 'Tiểu cảnh Composite 04', 500000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tieu-canh-terrarium-composite-04-300x300.jpg', '', 'tieu-canh-composite-04', 10, 0, 0, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(39, 'Tiểu cảnh Composite 03', 500000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tieu-canh-terrarium-composite-03-300x300.jpg', '', 'tieu-canh-composite-03', 10, 0, 0, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(40, 'Chậu Thủy Tinh Tròn Vát', 120000, 'https://cayxinh.vn/wp-content/uploads/2018/01/chau-thuy-tinh-tron-vat-300x300.jpg', '', 'chau-thuy-tinh-tron-vat', 10, 0, 0, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(41, 'Chậu Gốm Vân Đá Trụ Tròn', 150000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-van-da-tru-tron-01-300x300.jpg', '', 'chau-gom-van-da-tru-tron', 10, 0, 0, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(42, 'Chậu Gốm Sứ Hạt Dẻ S1', 120000, 'https://cayxinh.vn/wp-content/uploads/2018/01/chau-gom-su-hat-de-s1-01-300x300.jpg', '', 'chau-gom-su-hat-de-s1', 10, 0, 0, 1, '2023-10-31 02:13:10', '2023-11-11 06:39:41', 4),
(43, 'Chậu Gốm Sứ Vuông Vát S2', 90000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-su-vuong-vat-s2-300x300.jpg', '', 'chau-gom-su-vuong-vat-s2', 10, 0, 0, 0, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(44, 'Chậu Gốm Sứ Nhật Tròn Cao', 100000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-nhat-binh-cao-trang-2-70k-min-280x280.jpg', '', 'chau-gom-su-nhat-tron-cao', 10, 0, 0, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(45, 'Chậu Gốm Sứ Nhật Ang To', 70000, 'https://cayxinh.vn/wp-content/uploads/2018/01/chau-gom-nhat-dia-to-hong-70k-300x300.jpg', '', 'chau-gom-su-nhat-ang-to', 10, 0, 0, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(46, 'Chậu gốm chữ nhật khóm hoa', 90000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-dat-nung-013-300x300.jpg', '', 'chau-gom-chu-nhat-khom-hoa', 10, 0, 0, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(47, 'Chậu Gốm Nhật Bộ 3 Men Chảy', 40000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-nhat-bo-3-men-chay-01-min-280x280.jpg', '', 'chau-gom-nhat-bo-3-men-chay', 10, 0, 0, 0, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(48, 'Sen Đá Hoa Hồng Xanh', 150000, 'https://cayxinh.vn/wp-content/uploads/2020/06/sen-da-hoa-hong-xanh-280x280.jpg', '', 'sen-da-hoa-hong-xanh', 10, 0, 0, 33, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(49, 'Sen Đá Da Rắn', 90000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-da-ran-280x280.jpg', '', 'sen-da-da-ran', 10, 0, 0, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(50, 'Sen Đá Phật Bà Trắng', 90000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-phat-ba-trang-280x280.jpg', '', 'sen-da-phat-ba-trang', 10, 0, 0, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(51, 'Sen Đá Viền Tím Cánh Nhọn', 70000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-vien-tim-canh-nhon-300x300.jpg', '', 'sen-da-vien-tim-canh-nhon', 10, 0, 0, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(52, 'Sen Đá Kim Cương', 70000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-kim-cuong-300x300.jpg', '', 'sen-da-kim-cuong', 10, 0, 0, 0, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(53, 'Sen Đá Sỏi Viền Đỏ', 70000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-soi-vien-do-280x280.jpg', '', 'sen-da-soi-vien-do', 10, 0, 0, 0, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(54, 'Sen Đá Kim Tuyến', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/12/sen-da-kim-tuyen-2-270221-1-280x280.jpg', '', 'sen-da-kim-tuyen', 10, 0, 0, 0, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(55, 'Sen Đá 3D', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-3d-280x280.jpg', '', 'sen-da-3d', 10, 0, 0, 0, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(56, 'Sen Đá Pha Lê', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-pha-le-120820-9-280x280.jpg', '', 'sen-da-pha-le', 10, 0, 0, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(57, 'Sen Đá Cỏ Tím', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-co-tim-300x300.jpg', '', 'sen-da-co-tim', 10, 0, 0, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(58, 'Sen Đá Chuỗi Ngọc Bi', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-chuoi-ngoc-bi-300x300.jpg', '', 'sen-da-chuoi-ngoc-bi', 10, 0, 0, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(59, 'Sen Đá Sedum Hoa Hồng', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-sedum-bong-hong-phap-080820-5-280x280.jpg', '', 'sen-da-sedum-hoa-hong', 10, 0, 0, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(60, 'Xương Rồng Khế Bụi Vàng', 300000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-khe-vang-bui-280x280.jpg', '', 'xuong-rong-khe-bui-vang', 10, 0, 0, 33, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(61, 'Xương Rồng Khế Xanh Bụi', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-khe-xanh-280x280.jpg', '', 'xuong-rong-khe-xanh-bui', 10, 0, 0, 2, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(62, 'Xương Rồng Lông Thiên Nga Bụi', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-long-thien-nga-bui-280x280.jpg', '', 'xuong-rong-long-thien-nga-bui', 10, 0, 0, 1, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(63, 'Xương Rồng Bóng Vàng Bụi', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-bong-vang-bui-280x280.jpg', '', 'xuong-rong-bong-vang-bui', 10, 0, 0, 2, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(64, 'Xương Rồng Hồng Tử Đinh', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-hong-tu-dinh-280x280.jpg', '', 'xuong-rong-hong-tu-dinh', 10, 0, 0, 1, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(65, 'Xương Rồng Tai Thỏ Xanh', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/04/xuong-rong-tai-tho-xanh-300x300.jpg', '', 'xuong-rong-tai-tho-xanh', 10, 0, 0, 20, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(66, 'Xương Rồng Bát Tiên', 150000, 'https://cayxinh.vn/wp-content/uploads/2020/03/xuong_rong_bat_tien_290320_03-280x280.jpg', '', 'xuong-rong-bat-tien', 10, 0, 0, 40, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(67, 'Xương Rồng Tai Thỏ Vàng', 90000, 'https://cayxinh.vn/wp-content/uploads/2018/04/xuong-rong-tai-tho-vang-2-300x300.jpg', '', 'xuong-rong-tai-tho-vang', 10, 0, 0, 1, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(68, 'Xương Rồng Lông Thiên Nga', 90000, 'https://cayxinh.vn/wp-content/uploads/2018/02/xuong-rong-long-thien-nga-300x300.jpg', '', 'xuong-rong-long-thien-nga', 10, 0, 0, 0, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(69, 'Xương Rồng Gymno', 70000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-gymno-gai-trang-280x280.jpg', '', 'xuong-rong-gymno', 10, 0, 0, 2, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(70, 'Xương Rồng Thần Long', 70000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-than-long-270221-280x280.jpg', '', 'xuong-rong-than-long', 10, 0, 0, 1, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(71, 'Xương Rồng Astro', 70000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-astro-280x280.jpg', '', 'xuong-rong-astro', 10, 0, 0, 0, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(72, 'Biệt thự lớn', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/03/biet-thu-lon-04-300x300.jpg', '', 'biet-thu-lon', 10, 0, 0, 33, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(73, 'Móc treo thủy tinh', 100000, 'https://cayxinh.vn/wp-content/uploads/2018/03/moc-treo-thuy-tinh-02-300x300.jpg', '', 'moc-treo-thuy-tinh', 10, 0, 0, 50, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(74, 'Biệt Thự Nhỏ', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/biet-thu-nho-01-min-280x280.jpg', '', 'biet-thu-nho', 10, 0, 0, 1, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(75, 'Nhà nấm 2', 35000, 'https://cayxinh.vn/wp-content/uploads/2018/03/nha-nam-2-01-300x300.jpg', '', 'nha-nam-2', 10, 0, 0, 29, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(76, 'Nhà nấm', 35000, 'https://cayxinh.vn/wp-content/uploads/2018/03/nha-nam-1-05-300x300.jpg', '', 'nha-nam', 10, 0, 0, 29, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(77, 'Totoro lái xe', 25000, 'https://cayxinh.vn/wp-content/uploads/2017/11/totoro-lai-xe-01-280x280.jpg', '', 'totoro-lai-xe', 10, 0, 0, 0, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(78, 'Totoro cầm ô', 25000, 'https://cayxinh.vn/wp-content/uploads/2017/11/Totoro-cam-o-01-280x280.jpg', '', 'totoro-cam-o', 10, 0, 0, 0, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(79, 'Thỏ con 2', 25000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tho-con-2-01-280x280.jpg', '', 'tho-con-2', 10, 0, 0, 0, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(80, 'Nhà cổ Hội An', 25000, 'https://cayxinh.vn/wp-content/uploads/2017/11/nha-co-hoi-an-01-280x280.jpg', '', 'nha-co-hoi-an', 10, 0, 0, 1, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(81, 'Ngôi nhà nhỏ 2', 25000, 'https://cayxinh.vn/wp-content/uploads/2017/11/ngoi-nha-nho-2-01-280x280.jpg', '', 'ngoi-nha-nho-2', 10, 0, 0, 0, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(82, 'Khỉ con xinh xắn', 25000, 'https://cayxinh.vn/wp-content/uploads/2017/11/khi-con-xinh-xan-01-280x280.jpg', '', 'khi-con-xinh-xan', 10, 0, 0, 2, '2023-10-31 02:41:43', '2023-10-31 02:41:43', 7),
(83, 'Cây Ngọc Bích', 170000, 'https://cayxinh.vn/wp-content/uploads/2018/01/cay-ngoc-bich-1208192-400x400.jpg', 'asd', 'cay-ngoc-bich', 10, 0, 1, 0, '2023-11-12 07:46:05', '2023-11-12 07:47:53', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `transactions`
--

CREATE TABLE `transactions` (
  `Transaction_ID` bigint(20) NOT NULL,
  `User_ID` bigint(20) NOT NULL,
  `Name` varchar(50) NOT NULL DEFAULT 'empty',
  `Phone` varchar(50) NOT NULL DEFAULT 'empty',
  `Address` varchar(50) NOT NULL DEFAULT 'empty',
  `Status` tinyint(1) NOT NULL DEFAULT 0,
  `Total_money` int(20) NOT NULL DEFAULT 0,
  `Payment_method` tinyint(1) NOT NULL DEFAULT 0,
  `Note` text DEFAULT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `transactions`
--

INSERT INTO `transactions` (`Transaction_ID`, `User_ID`, `Name`, `Phone`, `Address`, `Status`, `Total_money`, `Payment_method`, `Note`, `Created_at`, `Updated_at`) VALUES
(1, 31, 'empty', 'empty', 'empty', 5, 100000, 0, '', '2023-11-12 15:00:29', '2023-11-12 15:00:29');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `User_ID` bigint(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Address` varchar(100) DEFAULT NULL,
  `Phone` varchar(50) DEFAULT NULL,
  `Name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`User_ID`, `Email`, `Password`, `Created_at`, `Updated_at`, `Address`, `Phone`, `Name`) VALUES
(31, 'abcd@gmail.com', '$2y$12$Im4dr9XUgi6tCmC3zPUPu.cOwPVugEwGLrWCE7OiM4jwBjj6sdmzC', '2023-11-12 14:59:14', '2023-11-12 07:59:14', 'KTX A', '0335664121', 'Tùng'),
(33, 'abc@gmail.com', '$2y$12$8stLWcGDtx.OySlEyrhN7.TbfxW.9zS44UDFVc3JNMvy6mbDXx39O', '2023-11-13 19:42:44', '2023-11-13 19:42:44', NULL, NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`Admin_ID`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Phone` (`Phone`);

--
-- Chỉ mục cho bảng `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `User_ID` (`User_ID`),
  ADD KEY `Product_ID` (`Product_ID`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`Category_ID`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`Order_ID`),
  ADD KEY `Order-Products` (`Product_ID`),
  ADD KEY `Order-Transactions` (`Transaction_ID`);

--
-- Chỉ mục cho bảng `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`Product_ID`),
  ADD KEY `Categories-Products` (`Category_ID`);

--
-- Chỉ mục cho bảng `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`Transaction_ID`),
  ADD KEY `Users-Transactions` (`User_ID`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`User_ID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admins`
--
ALTER TABLE `admins`
  MODIFY `Admin_ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `Category_ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `Order_ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `Product_ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT cho bảng `transactions`
--
ALTER TABLE `transactions`
  MODIFY `Transaction_ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `User_ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_3` FOREIGN KEY (`User_ID`) REFERENCES `users` (`User_ID`),
  ADD CONSTRAINT `carts_ibfk_4` FOREIGN KEY (`Product_ID`) REFERENCES `products` (`Product_ID`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `Order-Transactions` FOREIGN KEY (`Transaction_ID`) REFERENCES `transactions` (`Transaction_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Orders-Products` FOREIGN KEY (`Product_ID`) REFERENCES `products` (`Product_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `Categories-Products` FOREIGN KEY (`Category_ID`) REFERENCES `categories` (`Category_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `Users-Transactions` FOREIGN KEY (`User_ID`) REFERENCES `users` (`User_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

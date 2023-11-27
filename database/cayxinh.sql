-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 27, 2023 lúc 12:47 PM
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
  `Slug` varchar(50) NOT NULL,
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
(7, 'Phụ kiện Terrarium', 'phu-kien-terrarium', '2023-10-28 09:26:51', '2023-10-28 09:26:51');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `email_verify_tokens`
--

CREATE TABLE `email_verify_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '2023-11-25 22:13:53'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(3, '2023_11_14_012955_create_carts_table', 2),
(4, '2023_11_26_043744_create_email_verify_tokens_table', 3),
(5, '2023_11_26_044535_add_email_verified_at_to_users', 4),
(6, '2023_11_26_051317_create_email_verify_tokens_table', 5);

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

--
-- Đang đổ dữ liệu cho bảng `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(76, 'App\\Models\\User', 34, 'userToken', 'f32ff7ee30092f0b19bd00170c84f7898d0d8769377b16a95fbee198f54efdf9', '[\"user\"]', '2023-11-14 07:37:31', NULL, '2023-11-14 07:16:07', '2023-11-14 07:37:31');

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
  `Quantity` int(20) NOT NULL,
  `Sold` int(20) NOT NULL,
  `View` int(20) NOT NULL,
  `Discount` int(20) NOT NULL DEFAULT 0,
  `Created_at` timestamp NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Category_ID` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`Product_ID`, `Name`, `Price`, `Img_path`, `Content`, `Quantity`, `Sold`, `View`, `Discount`, `Created_at`, `Updated_at`, `Category_ID`) VALUES
(1, 'Cây Ngọc Bích', 170000, 'https://cayxinh.vn/wp-content/uploads/2018/01/cay-ngoc-bich-1208192-400x400.jpg', 'Cây ngọc bích hay còn được gọi là cây sen đá ngọc bích, cây phỉ thúy, có tên khoa học là Crassula ovata. Là loại cây có nguồn gốc từ Nam Phi, cây ngọc bích tượng trưng cho tiền tài, sự may mắn và tài lộc.', 10, 10, 10, 0, '2023-10-28 09:32:15', '2023-10-28 09:32:15', 2),
(2, 'Cây Trầu Bà Đế Vương Đỏ', 220000, 'https://cayxinh.vn/wp-content/uploads/2018/06/cay-trau-ba-1608193-400x400.jpg', 'Cây Trầu Bà Đế Vương Đỏ (tên khoa học: Philodendron Imperial Red) thường được dùng để trang trí nội thất, văn phòng với nhiều ý nghĩa phong thủy tốt lành…\r\n\r\n', 10, 10, 10, 0, '2023-10-28 09:35:21', '2023-10-28 09:35:21', 2),
(3, 'Cây Vạn Lộc Thủy Sinh', 220000, 'https://cayxinh.vn/wp-content/uploads/2017/11/van-loc-thuy-sinh-280820-400x400.jpg', 'Cây Vạn Lộc Thủy Sinh (tên khoa học: Aglaonema Rotundum Pink) có tốc độ sinh trưởng nhanh, dễ chăm sóc, phù hợp trang trí nội thất, phòng làm việc, tượng trưng cho sự may mắn, năng lượng tràn đầy và mang sự thịnh vượng, no đủ cho gia chủ…', 10, 10, 10, 0, '2023-10-28 09:35:21', '2023-10-28 09:35:21', 2),
(4, 'Cây Đuôi Công Tím', 170000, 'https://cayxinh.vn/wp-content/uploads/2017/11/duoi-cong-tim-0908195-400x400.jpg', 'Cây Đuôi Công Tím (tên khoa học: Calathea medallion/Calathea makoyana) với vẻ ngoài nổ bật, thu hút đã trở thành loại cây để bàn, cây văn phòng được ưa chuộng nhất hiện nay. Cây biểu trưng cho sự thịnh vượng và may mắn cho gia chủ.', 10, 10, 10, 0, '2023-10-28 09:35:21', '2023-10-28 09:35:21', 2),
(5, 'Tiểu cảnh Thuỷ Tinh 18', 200000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-thuy-tinh-18-400x400.jpg', 'Tiểu cảnh Terrarium cẩm nhung (fittonia) phù hợp để bàn làm việc, trang trí văn phòng, nội thất. Sức sống bền bỉ, mạnh mẽ, dễ chăm sóc.', 10, 10, 10, 0, '2023-10-28 09:39:52', '2023-10-28 09:39:52', 3),
(6, 'Tiểu cảnh Thuỷ Tinh 51', 100000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tieu-canh-terrarium-thuy-tinh-06-400x400.jpg', 'Tiểu cảnh Terrarium Sen Đá phù hợp làm quà tặng để bàn làm việc, trang trí văn phòng, nội thất. Sức sống bền bỉ, mạnh mẽ, dễ chăm sóc.', 10, 10, 10, 30, '2023-10-28 09:39:52', '2023-10-28 09:39:52', 3),
(7, 'Tiểu cảnh gốm sứ 35', 350000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-gom-su-35-400x400.jpg', 'Tiểu cảnh Terrarium Sen đá – Xương Rồng trong chậu gốm sứ phù hợp làm quà tặng để bàn làm việc, trang trí văn phòng, nội thất. Sức sống bền bỉ, mạnh mẽ, dễ chăm sóc.', 10, 10, 10, 0, '2023-10-28 09:39:52', '2023-10-28 09:39:52', 3),
(8, 'Tranh Sen Đá 04', 350000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tranh-sen-da-04-400x400.jpg', 'Tiểu cảnh Terrarium Sen Đá trong mẫu Tranh để bàn làm bằng Composite phù hợp làm quà tặng để bàn làm việc, trang trí văn phòng, nội thất. Sức sống bền bỉ, mạnh mẽ, dễ chăm sóc.', 10, 10, 10, 0, '2023-10-28 09:39:52', '2023-10-28 09:39:52', 3),
(9, 'Chậu Gốm Nhật Vát Trắng Nhỏ', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-nhat-tron-vat-35k-min-400x400.jpg', 'Được làm từ vật liệu Composite cao cấp, tổng hợp từ nhiều vật liệu khác nhau như Unsaturated Polyresin, Gelcoat, Fiberglass, Talc powder…và được phủ loại sơn 2K cao cấp nhất hiện tại với chứng chỉ an toàn cho người sản xuất cũng như người sử dụng.', 10, 10, 10, 0, '2023-10-28 09:44:32', '2023-10-28 09:44:32', 4),
(10, 'Chậu Gốm Tròn Vát Đáy Đỏ', 50000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-tron-vat-day-do-50k-min-400x400.jpg', 'Được làm từ vật liệu Composite cao cấp, tổng hợp từ nhiều vật liệu khác nhau như Unsaturated Polyresin, Gelcoat, Fiberglass, Talc powder…và được phủ loại sơn 2K cao cấp nhất hiện tại với chứng chỉ an toàn cho người sản xuất cũng như người sử dụng.\r\n\r\n', 10, 10, 10, 0, '2023-10-28 09:44:32', '2023-10-28 09:44:32', 4),
(11, 'Chậu Gốm Sứ Mắt Na S2', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-su-mat-na-s2-min-400x400.jpg', 'Chậu cây cảnh có chức năng chứa đất để đảm bảo cây sinh trưởng và phát triển tốt. Ngoài ra chậu cảnh còn góp phần mang lại vẻ đẹp cho các loại cây cảnh nói chung và cây kiểng bonsai nghệ thuật nói riêng. Một không gian tràn ngập cây xanh, thoáng đãng và vô cùng gần gũi là những gì cảm nhận khi tới cửa hàng Cây Xinh. Chúng tôi cung cấp hơn 1000 mẫu chậu Cây Cảnh chất lượng cao, bền, đẹp với đủ mọi loại chất liệu: nhựa Composite cao cấp, gốm đất nung, gốm sứ, thuỷ tinh… và một số dòng chậu nhập khẩu…', 10, 10, 10, 0, '2023-10-28 09:44:32', '2023-10-28 09:44:32', 4),
(12, 'Chậu Gốm Sứ Kẻ Miệng', 70000, 'https://cayxinh.vn/wp-content/uploads/2018/01/chau-gom-su-ke-mieng-01-400x400.jpg', 'Chậu cây cảnh có chức năng chứa đất để đảm bảo cây sinh trưởng và phát triển tốt. Ngoài ra chậu cảnh còn góp phần mang lại vẻ đẹp cho các loại cây cảnh nói chung và cây kiểng bonsai nghệ thuật nói riêng. Một không gian tràn ngập cây xanh, thoáng đãng và vô cùng gần gũi là những gì cảm nhận khi tới cửa hàng Cây Xinh. Chúng tôi cung cấp hơn 1000 mẫu chậu Cây Cảnh chất lượng cao, bền, đẹp với đủ mọi loại chất liệu: nhựa Composite cao cấp, gốm đất nung, gốm sứ, thuỷ tinh… và một số dòng chậu nhập khẩu…', 10, 10, 10, 0, '2023-10-28 09:44:32', '2023-10-28 09:44:32', 4),
(13, 'Cây Tùng Xương Cá', 1200000, 'https://cayxinh.vn/wp-content/uploads/2020/12/cay-tung-xuong-ca-121220-01-280x280.jpg', 'Là một cây được liệt kê vào hàng cây xa xỉ và có hình dáng bắt mắt, Tùng Xương Cá nhiều người yêu thích ngay từ ánh nhìn đầu tiên và ngày càng phổ biến trên thị trường cây cảnh.', 10, 10, 10, 40, '2023-10-31 01:46:50', '2023-10-31 01:46:50', 1),
(14, 'Cây Phát Tài', 270000, 'https://cayxinh.vn/wp-content/uploads/2020/08/cay-phat-tai-050820-06-280x280.jpg', 'Cây Phát Tài được tìm thấy ở Zambia, Tanzania và Tây Phi. Loại cây này có lá màu xanh sẫm, tán lá xòe rộng và có đường gân vàng nổi bật, thường được trồng trong nhà giúp thanh lọc không khí hiệu quả…', 10, 10, 10, 5, '2023-10-31 01:46:50', '2023-10-31 01:46:50', 1),
(15, 'Cây Vạn Niên Thanh Leo Cột', 1400000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-van-nien-thanh-cot-300x300.jpg', 'Cây Vạn Niên Thanh Leo Cột (tên khoa học: Epipremnum aureum) thuộc họ thực vật Araceae (họ Ráy) có hoa, cây có nguồn gốc xuất xứ từ: Colombia, Brazil. Người ta quan niệm, cây Vạn Niên Thanh Leo Cột hợp với tuổi Thìn mang đến sự sung túc, tài lộc…', 10, 10, 10, 14, '2023-10-31 01:46:50', '2023-10-31 01:46:50', 1),
(16, 'Cây Hạnh Phúc', 220000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-hanh-phuc-1108198-280x280.jpg', 'Cây Hạnh Phúc (tên khoa học: Radermachera sinica) thuộc chi Heteropanax được phát hiện đầu tiên ở các khu rừng mưa nhiệt đới ở Đông Nam Á và Trung Quốc. Không chỉ giúp làm đẹp không gian sống, cây còn mang nhiều ý nghĩa phong thủy tốt lành…', 10, 10, 10, 15, '2023-10-31 01:46:50', '2023-10-31 01:46:50', 1),
(17, 'Cây Ngũ Gia Bì', 250000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-ngu-gia-bi-12081911-280x280.jpg', 'Cây Ngũ Gia Bì (tên khoa học: Scheffera Octophylla) là cây cảnh có khả năng đuổi muỗi, côn trùng nên được trồng nhiều trong văn phòng, nhà ở…', 10, 10, 10, 13, '2023-10-31 01:46:50', '2023-10-31 01:46:50', 1),
(18, 'Cây Cau Cảnh', 850000, 'https://cayxinh.vn/wp-content/uploads/2020/07/cay-cau-canh-14102020-1-280x280.jpg', 'Cây Cau Cảnh là loài cây có sức sống mãnh liệt, mang nhiều ý nghĩa về may mắn và tài lộc. Hiện nay loại cây này được trồng nhiều trong không gian nhà ở, môi trường làm việc hay các quán cafe,…', 10, 10, 10, 10, '2023-10-31 01:51:53', '2023-10-31 01:51:53', 1),
(19, 'Cây Trầu Bà Leo Cột', 900000, 'https://cayxinh.vn/wp-content/uploads/2019/11/cay-trau-ba-leo-cot-2811-2019-280x280.jpg', 'Cây Trầu Bà Leo Cột (tên khoa học: Epipremnum aureum) không chỉ là loài cây có khả năng thanh lọc không khí trong nhà tốt mà còn được yêu thích bởi những ý nghĩa phong thủy tốt lành của nó…', 10, 10, 10, 6, '2023-10-31 01:51:53', '2023-10-31 01:51:53', 1),
(20, 'Cây Trầu Bà', 220000, 'https://cayxinh.vn/wp-content/uploads/2018/06/cay-trau-ba-1608197-280x280.jpg', 'Cây Trầu Bà (tên khoa học: Philodendron Imperial) là một loài thực vật có hoa họ Ráy (Araceae), tượng trưng cho sự may mắn, thành đạt và bình an cho gia chủ…', 10, 10, 10, 2, '2023-10-31 01:51:53', '2023-10-31 01:51:53', 1),
(21, 'Cây Thiết Mộc Lan', 250000, 'https://cayxinh.vn/wp-content/uploads/2018/05/cay-thiet-moc-lan-01-300x300.jpg', 'Thiết Mộc Lan (tên khoa học: Mass Cane  hay Dracaena Fragrans) là loại cây trồng trong nhà dễ chăm sóc, có ý nghĩa mang lại tài lộc, vận may đến với gia chủ…', 10, 10, 10, 17, '2023-10-31 01:51:53', '2023-10-31 01:51:53', 1),
(22, 'Cây Trầu Bà Đế Vương Đỏ', 220000, 'https://cayxinh.vn/wp-content/uploads/2018/06/cay-trau-ba-1608193-400x400.jpg', 'Cây Trầu Bà Đế Vương Đỏ (tên khoa học: Philodendron Imperial Red) thường được dùng để trang trí nội thất, văn phòng với nhiều ý nghĩa phong thủy tốt lành…', 10, 10, 10, 11, '2023-10-31 01:51:53', '2023-10-31 01:51:53', 1),
(23, 'Cây Trường Sinh', 170000, 'https://cayxinh.vn/wp-content/uploads/2017/12/cay-truong-sinh-1008192-280x280.jpg', 'Cây Trường Sinh (tên khoa học: Peperomia Obtusifolia) là loại thực vật xanh tốt quanh năm, có khả năng sinh tồn mạnh mẽ, sức chống chịu cao. Trong phong thủy cây tượng trưng cho sức khỏe, sự trường tồn, ý chí mạnh mẽ và quyết liệt,.…', 10, 10, 10, 17, '2023-10-31 01:53:48', '2023-10-31 01:53:48', 1),
(24, 'Cây Bàng Singapore', 170000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-bang-singgapore-1108195-280x280.jpg', 'Cây Bàng Singapore (tên khoa học: Ficus Lyrata) là loại cây trồng trong nhà đẹp và rất được ưa chuộng để trang trí nội thất trong những năm gần đây…', 10, 10, 10, 23, '2023-10-31 01:53:48', '2023-10-31 01:53:48', 1),
(25, 'Cây Ngũ Gia Bì', 250000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-ngu-gia-bi-12081911-280x280.jpg', 'Cây Ngũ Gia Bì (tên khoa học: Scheffera Octophylla) là cây cảnh có khả năng đuổi muỗi, côn trùng nên được trồng nhiều trong văn phòng, nhà ở…', 10, 10, 10, 13, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(26, 'Cây Cau Cảnh', 850000, 'https://cayxinh.vn/wp-content/uploads/2020/07/cay-cau-canh-14102020-1-280x280.jpg', 'Cây Cau Cảnh là loài cây có sức sống mãnh liệt, mang nhiều ý nghĩa về may mắn và tài lộc. Hiện nay loại cây này được trồng nhiều trong không gian nhà ở, môi trường làm việc hay các quán cafe,…', 10, 10, 10, 1, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(27, 'Cây Mộc Hương', 850000, 'https://cayxinh.vn/wp-content/uploads/2020/06/moc-huong-8-280x280.jpg', 'Cây Mộc Hương sở hữu những bông hoa với mùi hương ngọt ngào, là một trong những loài cây được đặc biệt nhiều người Việt Nam yêu thích. Đặc biệt, đây chính là sự lựa chọn không thể thiếu trong sân nhà.', 10, 10, 10, 5, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(28, 'Cây Kim Ngân', 220000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-kim-ngan-1108195-280x280.jpg', 'Cây Kim Ngân (tên khoa học: Pachira Aquatica) còn được gọi là Money Tree, đối với người Tây phương có nghĩa là cây tiền. Cây thường được dùng để làm cây cảnh văn phòng, trang trí nhà ở với ý nghĩa mang lại nhiều tiền bạc, sự may mắn và thịnh vượng cho gia chủ…', 10, 10, 10, 14, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(29, 'Cây Đa Búp Đỏ', 170000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-da-bup-do-1108191-280x280.jpg', 'Cây Đa Búp Đỏ (tên khoa học: Ficus elastica) có khả năng hút bụi và khí độc tốt nên thường được trồng làm cây nội thất trang trí trong văn phòng làm việc, nhà hàng. Trong phong thủy cây mang lại sự bình an, hạnh phúc cho gia đình…', 10, 10, 10, 1, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(30, 'Cây Cau Tiểu Trâm', 170000, 'https://cayxinh.vn/wp-content/uploads/2017/11/cay-cau-tieu-tram-1108199-280x280.jpg', 'Cây Cau Tiểu Trâm (Tên khoa học: Chamaedorea elegans) có chức năng thanh lọc không khí cực tốt. Cây được trồng trong nhà, trang trí không gian văn phòng, nhà ở…', 10, 10, 10, 23, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(31, 'Cây Tùng La Hán', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tung-la-han-1708198-280x280.jpg', 'Cây Tùng La Hán (tên khoa học: Podocarpus brevifolius) còn gọi là Vạn Niên Tùng. Trồng cây mang lại sức khỏe, xua đuổi những điều xui xẻo đến với gia đình…', 10, 10, 10, 17, '2023-10-31 02:00:50', '2023-10-31 02:00:50', 2),
(32, 'Tiểu cảnh Composite 09', 500000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-terrarium-composite-09-300x300.jpg', 'Tiểu cảnh Terrarium Sen Đá trong chậu Composite phù hợp làm quà tặng để bàn làm việc, trang trí văn phòng, nội thất. Sức sống bền bỉ, mạnh mẽ, dễ chăm sóc.', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(33, 'Tiểu cảnh Composite 08', 500000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-terrarium-composite-08-300x300.jpg', 'Tiểu cảnh Terrarium Sen Đá trong chậu Composite phù hợp làm quà tặng để bàn làm việc, trang trí văn phòng, nội thất. Sức sống bền bỉ, mạnh mẽ, dễ chăm sóc.', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(34, 'Tiểu cảnh Composite 07', 500000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-terrarium-composite-07-300x300.jpg', 'Tiểu cảnh Terrarium Sen Đá trong chậu Composite phù hợp làm quà tặng để bàn làm việc, trang trí văn phòng, nội thất. Sức sống bền bỉ, mạnh mẽ, dễ chăm sóc.', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(35, 'Tiểu cảnh Composite 06', 500000, 'https://cayxinh.vn/wp-content/uploads/2018/01/tieu-canh-terrarium-composite-06-300x300.jpg', 'Tiểu cảnh Terrarium Sen Đá trong chậu Composite phù hợp làm quà tặng để bàn làm việc, trang trí văn phòng, nội thất. Sức sống bền bỉ, mạnh mẽ, dễ chăm sóc.', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(36, 'Tiểu cảnh Thuỷ Tinh 37', 500000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tieu-canh-terrarium-thuy-tinh-02-300x300.jpg', 'Tiểu cảnh Terrarium Sen Đá phù hợp làm quà tặng để bàn làm việc, trang trí văn phòng, nội thất. Sức sống bền bỉ, mạnh mẽ, dễ chăm sóc.\r\n\r\nMẫu chậu Terrarium Sen Đá 02 bao gồm các loại cây:\r\n\r\n- Sen Đá: Cánh Bướm, Sedum Xanh, Đá Đỏ, Xanh, Ruby giống mới…\r\n- Các loại phụ kiện đi kèm theo', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(37, 'Tiểu cảnh Composite 05', 500000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tieu-canh-terrarium-composite-05-300x300.jpg', 'Tiểu cảnh Terrarium Sen Đá trong chậu Composite phù hợp làm quà tặng để bàn làm việc, trang trí văn phòng, nội thất. Sức sống bền bỉ, mạnh mẽ, dễ chăm sóc.', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(38, 'Tiểu cảnh Composite 04', 500000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tieu-canh-terrarium-composite-04-300x300.jpg', 'Tiểu cảnh Terrarium Sen Đá trong chậu Composite phù hợp làm quà tặng để bàn làm việc, trang trí văn phòng, nội thất. Sức sống bền bỉ, mạnh mẽ, dễ chăm sóc.\r\n', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(39, 'Tiểu cảnh Composite 03', 500000, 'https://cayxinh.vn/wp-content/uploads/2017/11/tieu-canh-terrarium-composite-03-300x300.jpg', 'Tiểu cảnh Terrarium Sen Đá trong chậu Composite phù hợp làm quà tặng để bàn làm việc, trang trí văn phòng, nội thất. Sức sống bền bỉ, mạnh mẽ, dễ chăm sóc.', 10, 10, 10, 5, '2023-10-31 02:07:19', '2023-10-31 02:07:19', 3),
(40, 'Chậu Thủy Tinh Tròn Vát', 120000, 'https://cayxinh.vn/wp-content/uploads/2018/01/chau-thuy-tinh-tron-vat-300x300.jpg', 'Chậu cây cảnh có chức năng chứa đất để đảm bảo cây sinh trưởng và phát triển tốt. Ngoài ra chậu cảnh còn góp phần mang lại vẻ đẹp cho các loại cây cảnh nói chung và cây kiểng bonsai nghệ thuật nói riêng. Một không gian tràn ngập cây xanh, thoáng đãng và vô cùng gần gũi là những gì cảm nhận khi tới cửa hàng Cây Xinh. Chúng tôi cung cấp hơn 1000 mẫu chậu Cây Cảnh chất lượng cao, bền, đẹp với đủ mọi loại chất liệu: nhựa Composite cao cấp, gốm đất nung, gốm sứ, thuỷ tinh… và một số dòng chậu nhập khẩu…', 10, 10, 10, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(41, 'Chậu Gốm Vân Đá Trụ Tròn', 150000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-van-da-tru-tron-01-300x300.jpg', 'Chậu cây cảnh có chức năng chứa đất để đảm bảo cây sinh trưởng và phát triển tốt. Ngoài ra chậu cảnh còn góp phần mang lại vẻ đẹp cho các loại cây cảnh nói chung và cây kiểng bonsai nghệ thuật nói riêng. Một không gian tràn ngập cây xanh, thoáng đãng và vô cùng gần gũi là những gì cảm nhận khi tới cửa hàng Cây Xinh. Chúng tôi cung cấp hơn 1000 mẫu chậu Cây Cảnh chất lượng cao, bền, đẹp với đủ mọi loại chất liệu: nhựa Composite cao cấp, gốm đất nung, gốm sứ, thuỷ tinh… và một số dòng chậu nhập khẩu…', 10, 10, 10, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(42, 'Chậu Gốm Sứ Hạt Dẻ S1', 120000, 'https://cayxinh.vn/wp-content/uploads/2018/01/chau-gom-su-hat-de-s1-01-300x300.jpg', 'Chậu cây cảnh có chức năng chứa đất để đảm bảo cây sinh trưởng và phát triển tốt. Ngoài ra chậu cảnh còn góp phần mang lại vẻ đẹp cho các loại cây cảnh nói chung và cây kiểng bonsai nghệ thuật nói riêng. Một không gian tràn ngập cây xanh, thoáng đãng và vô cùng gần gũi là những gì cảm nhận khi tới cửa hàng Cây Xinh. Chúng tôi cung cấp hơn 1000 mẫu chậu Cây Cảnh chất lượng cao, bền, đẹp với đủ mọi loại chất liệu: nhựa Composite cao cấp, gốm đất nung, gốm sứ, thuỷ tinh… và một số dòng chậu nhập khẩu…', 10, 10, 10, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(43, 'Chậu Gốm Sứ Vuông Vát S2', 90000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-su-vuong-vat-s2-300x300.jpg', 'Chậu cây cảnh có chức năng chứa đất để đảm bảo cây sinh trưởng và phát triển tốt. Ngoài ra chậu cảnh còn góp phần mang lại vẻ đẹp cho các loại cây cảnh nói chung và cây kiểng bonsai nghệ thuật nói riêng. Một không gian tràn ngập cây xanh, thoáng đãng và vô cùng gần gũi là những gì cảm nhận khi tới cửa hàng Cây Xinh. Chúng tôi cung cấp hơn 1000 mẫu chậu Cây Cảnh chất lượng cao, bền, đẹp với đủ mọi loại chất liệu: nhựa Composite cao cấp, gốm đất nung, gốm sứ, thuỷ tinh… và một số dòng chậu nhập khẩu…', 10, 10, 10, 0, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(44, 'Chậu Gốm Sứ Nhật Tròn Cao', 100000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-nhat-binh-cao-trang-2-70k-min-280x280.jpg', 'Chậu cây cảnh có chức năng chứa đất để đảm bảo cây sinh trưởng và phát triển tốt. Ngoài ra chậu cảnh còn góp phần mang lại vẻ đẹp cho các loại cây cảnh nói chung và cây kiểng bonsai nghệ thuật nói riêng. Một không gian tràn ngập cây xanh, thoáng đãng và vô cùng gần gũi là những gì cảm nhận khi tới cửa hàng Cây Xinh. Chúng tôi cung cấp hơn 1000 mẫu chậu Cây Cảnh chất lượng cao, bền, đẹp với đủ mọi loại chất liệu: nhựa Composite cao cấp, gốm đất nung, gốm sứ, thuỷ tinh… và một số dòng chậu nhập khẩu…', 10, 10, 10, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(45, 'Chậu Gốm Sứ Nhật Ang To', 70000, 'https://cayxinh.vn/wp-content/uploads/2018/01/chau-gom-nhat-dia-to-hong-70k-300x300.jpg', 'Chậu cây cảnh có chức năng chứa đất để đảm bảo cây sinh trưởng và phát triển tốt. Ngoài ra chậu cảnh còn góp phần mang lại vẻ đẹp cho các loại cây cảnh nói chung và cây kiểng bonsai nghệ thuật nói riêng. Một không gian tràn ngập cây xanh, thoáng đãng và vô cùng gần gũi là những gì cảm nhận khi tới cửa hàng Cây Xinh. Chúng tôi cung cấp hơn 1000 mẫu chậu Cây Cảnh chất lượng cao, bền, đẹp với đủ mọi loại chất liệu: nhựa Composite cao cấp, gốm đất nung, gốm sứ, thuỷ tinh… và một số dòng chậu nhập khẩu…', 10, 10, 10, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(46, 'Chậu gốm chữ nhật khóm hoa', 90000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-dat-nung-013-300x300.jpg', 'Chậu gốm đất nung được làm từ chất liệu gốm sứ Bát Tràng, được tráng lớp men bóng và nung qua nhiệt độ cao, đảm bảo độ bền đẹp, dày dặn, đáp ứng nhu cầu trồng các loại cây cảnh cho mọi người. Chậu cây cảnh trang trí trong nhà giúp chúng ta thêm gần gũi với thiên nhiên, tạo không gian xanh giúp môi trường sống thư thái tạo cảm giác thoải mái hơn.', 10, 10, 10, 1, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(47, 'Chậu Gốm Nhật Bộ 3 Men Chảy', 40000, 'https://cayxinh.vn/wp-content/uploads/2017/12/chau-gom-nhat-bo-3-men-chay-01-min-280x280.jpg', 'Chậu gốm đất nung được làm từ chất liệu gốm sứ Bát Tràng, được tráng lớp men bóng và nung qua nhiệt độ cao, đảm bảo độ bền đẹp, dày dặn, đáp ứng nhu cầu trồng các loại cây cảnh cho mọi người. Chậu cây cảnh trang trí trong nhà giúp chúng ta thêm gần gũi với thiên nhiên, tạo không gian xanh giúp môi trường sống thư thái tạo cảm giác thoải mái hơn.', 10, 10, 10, 0, '2023-10-31 02:13:10', '2023-10-31 02:13:10', 4),
(48, 'Sen Đá Hoa Hồng Xanh', 150000, 'https://cayxinh.vn/wp-content/uploads/2020/06/sen-da-hoa-hong-xanh-280x280.jpg', 'Sen Đá Hoa Hồng Xanh (tên khoa học: Aeonium dodrantale hoặc Greenovia dodrantalis) là một trong những loại sen đá quý hiếm mà nhiều người mong muốn sở hữu.', 10, 10, 10, 33, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(49, 'Sen Đá Da Rắn', 90000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-da-ran-280x280.jpg', 'Sen Đá Da Rắn (tên khoa học: Senecio Scaposus Silver Coral) có những đặc điểm hình dáng rất đặc biệt, độc đáo. Cây cũng có tác dụng thanh lọc không khí, bảo vệ sức khỏe con người hiệu quả…', 10, 10, 10, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(50, 'Sen Đá Phật Bà Trắng', 90000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-phat-ba-trang-280x280.jpg', 'Sen Đá Phật Bà Trắng (tên khoa học: Sempervivum calcareum ‘Fire Dragon’) có nguồn gốc từ phía nam dãy núi Alps ở Châu Âu và một số hòn đảo ở Địa Trung Hải. Loài sen đá này gây ấn tượng bởi hình dáng độc đáo, thu hút…', 10, 10, 10, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(51, 'Sen Đá Viền Tím Cánh Nhọn', 70000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-vien-tim-canh-nhon-300x300.jpg', 'Sen Đá Viền Tím Cánh Nhọn là loại sen đá có hình dáng bên ngoài lạ mắt và rất cuốn hút. Ngoài ra, cây cũng có ý nghĩa phong thủy rất tốt và thường được dùng để tặng người thân, bạn bè…', 10, 10, 10, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(52, 'Sen Đá Kim Cương', 70000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-kim-cuong-300x300.jpg', 'Sen Đá Kim Cương (tên khoa học: Pachyphytum compactum) nổi bật bởi có màu xanh nhẹ nhàng và hình dáng nhỏ nhắn. Cây mang ý nghĩa của tình yêu vĩnh cửu, vẹn nguyên và dài lâu…', 10, 10, 10, 0, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(53, 'Sen Đá Sỏi Viền Đỏ', 70000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-soi-vien-do-280x280.jpg', 'Sen Đá Sỏi Viền Đỏ (tên khoa học: Cotyledon orbiculata ‘Huisrivier Pass’) có lá màu xanh ngọc bích, ở viền ngoài phiến lá có màu đỏ rất nổi bật. Đây chính là điểm riêng khác biệt của loại sen đá này với các cây sen đá sỏi khác…', 10, 10, 10, 0, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(54, 'Sen Đá Kim Tuyến', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/12/sen-da-kim-tuyen-2-270221-1-280x280.jpg', 'Sen Đá Kim Tuyến (tên khoa học: Graptopetalum mendozae) mọc thành bụi, các nhánh cây có thể cao đến 15cm phát triển tốt quanh năm, đặc biệt là vào mùa đông.', 10, 10, 10, 0, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(55, 'Sen Đá 3D', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-3d-280x280.jpg', 'Sen đá 3D (tên khoa học: Echeveria Nodulosa) có nguồn gốc từ Mexico. Cây có tốc độ sinh trưởng vừa phải. Thân cây trưởng thành cao tới 60cm với lá mọng nước mọc tập trung ở ngọn cây tạo thành hình bông hoa rất đẹp.', 10, 10, 10, 0, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(56, 'Sen Đá Pha Lê', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-pha-le-120820-9-280x280.jpg', 'Sen Đá Pha Lê (tên khoa học: Graptosedum Francesco Baldi) có nguồn gốc từ Mexico và Arizona. Cây mang vẻ đẹp nhẹ nhàng tinh tế và rất bắt mắt được trồng nhiều tại ban công, cửa sổ…', 10, 10, 10, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(57, 'Sen Đá Cỏ Tím', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-co-tim-300x300.jpg', 'Sen Đá Cỏ Tím (tên khoa học: Crassula picturata Tiger Jade) là loài cây mọng nước có nguồn gốc từ Nam Phi. Cây mọc tập trung thành bụi nhỏ, tươi tốt mang lại cảm giác của một sức sống mãnh liệt…', 10, 10, 10, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(58, 'Sen Đá Chuỗi Ngọc Bi', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-chuoi-ngoc-bi-300x300.jpg', 'Sen Đá Chuỗi Ngọc Bi (tên khoa học: Sedum Donkey’s Tail Succulent) là loài sen đá dễ sống, không đòi chăm sóc thường xuyên. Thân cây được phủ dày với những chiếc lá tròn nhỏ, có màu xanh lục, đầy đặn, xếp chồng lên nhau…', 10, 10, 10, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(59, 'Sen Đá Sedum Hoa Hồng', 35000, 'https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-sedum-bong-hong-phap-080820-5-280x280.jpg', 'Sen Đá Sedum Hoa Hồng (tên khoa học: Sedum Dasyphyllum) là cây mọng nước có nguồn gốc từ vùng Địa Trung Hải. Cây có hình dáng nhỏ nhắn, đáng yêu như những bông hoa hồng nhỏ xíu…', 10, 10, 10, 1, '2023-10-31 02:20:26', '2023-10-31 02:20:26', 5),
(60, 'Xương Rồng Khế Bụi Vàng', 300000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-khe-vang-bui-280x280.jpg', 'Xương Rồng Khế Bụi Vàng là loại cây cảnh đẹp, thuộc nhóm cây mọng nước. Loại cây này có nguồn gốc từ vùng Nam Mỹ. Trong phong thủy Xương Rồng Khế Bụi Vàng được nhiều người biết đến với ý nghĩa mang đến sức mạnh giúp bảo vệ bạn tránh khỏi những nguồn năng lượng xấu,…', 10, 10, 10, 33, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(61, 'Xương Rồng Khế Xanh Bụi', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-khe-xanh-280x280.jpg', 'Xương Rồng Khế Bụi Xanh có nguồn gốc từ Nam Mỹ. Cây có hình dáng bên ngoài thu hút, độc đáo. Đặc biệt, chúng còn mang ý nghĩa đem lại may mắn, tránh những điều không tốt trong cuộc sống…', 10, 10, 10, 2, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(62, 'Xương Rồng Lông Thiên Nga Bụi', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-long-thien-nga-bui-280x280.jpg', 'Xương Rồng Lông Thiên Nga có nguồn gốc từ đất nước Mexico. Cây có đặc điểm hình dáng nhỏ nhắn, đáng yêu rất thu hút ánh nhìn, thân hình tròn màu xanh rất nhỏ nhắn và được bao phủ bởi một lớp gai mềm màu trắng rất đẹp mắt.', 10, 10, 10, 1, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(63, 'Xương Rồng Bóng Vàng Bụi', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-bong-vang-bui-280x280.jpg', 'Xương Rồng Bóng Vàng Bụi (tên khoa học: Eriocactus Leninghausii) có nguồn gốc từ đất nước Brazil. Cây thu hút bởi vẻ ngoài rất lạ mắt có màu vàng tươi nổi bật. Ngoài ra, cây còn mang ý nghĩa phong thủy rất tốt cho gia chủ sở hữu cây…', 10, 10, 10, 2, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(64, 'Xương Rồng Hồng Tử Đinh', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-hong-tu-dinh-280x280.jpg', 'Xương Rồng Hồng Tử Đinh có nguồn gốc ở thành phố Guanajuato của Mexico. Thân cây có hình cầu màu xanh lục và có đường kính trung bình tới 6cm và thường mọc thành bụi thấp…', 10, 10, 10, 1, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(65, 'Xương Rồng Tai Thỏ Xanh', 150000, 'https://cayxinh.vn/wp-content/uploads/2018/04/xuong-rong-tai-tho-xanh-300x300.jpg', '- Tên thường gọi: xương rồng tai thỏ, xương rồng nopal...\r\n- Tên tiếng Anh: Bunny ear cactus, polka-dot cactus\r\n- Tên khoa học: Opuntia pulvinata\r\n- Họ: Cactaceae. \r\n- Chi: Opuntia. \r\n- Nguồn gốc: hoang mạc và bán hoang mạc miền Tây Nam của nước Mỹ và phía Bắc Mexico', 10, 10, 10, 20, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(66, 'Xương Rồng Bát Tiên', 150000, 'https://cayxinh.vn/wp-content/uploads/2020/03/xuong_rong_bat_tien_290320_03-280x280.jpg', 'Xương Rồng Bát Tiên là một trong loài xương rồng cho hoa đẹp, đa dạng về màu sắc được nhiều người ưa thích. Chính nhờ vẻ đẹp dịu dàng của những bông hoa mà cây được trồng và trang trí nhiều trong nhà. Hãy cùng Cây Xinh tìm hiểu chi tiết về loại xương rồng này thông qua bài viết dưới đây nhé…', 10, 10, 10, 40, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(67, 'Xương Rồng Tai Thỏ Vàng', 90000, 'https://cayxinh.vn/wp-content/uploads/2018/04/xuong-rong-tai-tho-vang-2-300x300.jpg', 'Xương Rồng Tai Thỏ là một trong những giống xương rồng đẹp, độc và lạ mắt. Những năm gần đây, các nhà khoa học đã chỉ ra rằng: Xương Rồng Tai Thỏ không đơn giản chỉ là một loại cây cảnh để bàn đơn thuần, giống cây này còn là món ăn đặc sản và là nguyên liệu thuốc trị nhiều bệnh hiệu quả.\r\n\r\nVậy, Xương Rồng Tai Thỏ có thực sự thần kỳ? Cây Xinh sẽ cùng bạn khám phá những thông tin xoay quay loại cây này qua những thông tin dưới đây…', 10, 10, 10, 1, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(68, 'Xương Rồng Lông Thiên Nga', 90000, 'https://cayxinh.vn/wp-content/uploads/2018/02/xuong-rong-long-thien-nga-300x300.jpg', 'Xương Rồng Lông Thiên Nga có nguồn gốc từ đất nước Mexico. Cây có đặc điểm hình dáng nhỏ nhắn, đáng yêu rất thu hút ánh nhìn. Ngoài ra, cây còn mang ý nghĩa tốt cho gia chủ…', 10, 10, 10, 0, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(69, 'Xương Rồng Gymno', 70000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-gymno-gai-trang-280x280.jpg', 'Xương Rồng Gymno đang là một trong những loại cây cảnh mini được yêu thích cho góc trang trí nhỏ trong nhà. Cây sở hữu hình dáng bắt mắt, độc đáo…', 10, 10, 10, 2, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(70, 'Xương Rồng Thần Long', 70000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-than-long-270221-280x280.jpg', 'Xương Rồng Thần Long ( tên khoa học: Gymnocalycium baldianum) mang ý nghĩa tránh những điều không tốt đẹp trong cuộc sống, bảo vệ gia chủ khỏi những điều xấu…', 10, 10, 10, 1, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
(71, 'Xương Rồng Astro', 70000, 'https://cayxinh.vn/wp-content/uploads/2018/07/xuong-rong-astro-280x280.jpg', 'Xương Rồng Astro (tên khoa học: Astrophytum myriostigma) là loại cây có ý nghĩa mang lại may mắn cho gia chủ. Ngoài ra, cây còn thu hút bởi vẻ ngoài đáng yêu, đặc biệt…', 10, 10, 10, 0, '2023-10-31 02:28:40', '2023-10-31 02:28:40', 6),
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
-- Cấu trúc bảng cho bảng `transactions`
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
-- Đang đổ dữ liệu cho bảng `transactions`
--

INSERT INTO `transactions` (`Transaction_ID`, `User_ID`, `Name`, `Phone`, `Address`, `Status`, `Total_money`, `Payment_Method`, `Note`, `Created_at`, `Updated_at`) VALUES
(1, 45, 'tung', '0336551596', 'KTX A', 9, 12000, 1, '', '2023-11-27 08:27:45', '2023-11-27 02:43:32');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `User_ID` bigint(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Name` varchar(100) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`User_ID`, `Email`, `Password`, `email_verified_at`, `Created_at`, `Updated_at`, `Name`, `Address`, `Phone`) VALUES
(45, 'tung@gmail.com', '$2y$12$tvAZtwkKfmyB.cK7MwA8geejBQjEmyx699qk/ObfdIj6ghiF2nZTq', '2023-11-27 01:26:54', '2023-11-27 08:26:54', '2023-11-27 01:26:54', NULL, NULL, NULL),
(47, 'tung123@gmail.com', '$2y$12$eMl36oTzQ2t2U132KouefeGUkpav/kl7g57mYiz6d/82EcgSIxNp2', '2023-11-27 02:06:22', '2023-11-27 09:06:22', '2023-11-27 02:06:22', NULL, NULL, NULL);

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
-- Chỉ mục cho bảng `email_verify_tokens`
--
ALTER TABLE `email_verify_tokens`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT cho bảng `email_verify_tokens`
--
ALTER TABLE `email_verify_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `Order_ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

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
  MODIFY `User_ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

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
  ADD CONSTRAINT `Order-Products` FOREIGN KEY (`Product_ID`) REFERENCES `products` (`Product_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Order-Transactions` FOREIGN KEY (`Transaction_ID`) REFERENCES `transactions` (`Transaction_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

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

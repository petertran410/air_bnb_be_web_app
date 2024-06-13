/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room_id` int NOT NULL,
  `created_by_id` int NOT NULL,
  `date` datetime NOT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rated` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `created_by_id` (`created_by_id`),
  KEY `room_id` (`room_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`created_by_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `locations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3134 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reserved_by_id` int NOT NULL,
  `room_id` int NOT NULL,
  `guests` int NOT NULL,
  `arrival` datetime NOT NULL,
  `departure` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reserved_by_id` (`reserved_by_id`),
  KEY `room_id` (`room_id`),
  CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`reserved_by_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `rooms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `location_id` int DEFAULT NULL,
  `price` int NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `beds` int NOT NULL,
  `bathrooms` int NOT NULL,
  `guests` int NOT NULL,
  `bedrooms` int NOT NULL,
  `washing_machine` enum('true','false') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `electric_iron` enum('true','false') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `television` enum('true','false') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `air_conditioner` enum('true','false') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `wifi` enum('true','false') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `stove` enum('true','false') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `parking` enum('true','false') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `swimming_pool` enum('true','false') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `location_id` (`location_id`),
  CONSTRAINT `rooms_ibfk_2` FOREIGN KEY (`location_id`) REFERENCES `locations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `gender` enum('Male','Female','Undefined') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('Guest','Admin') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `comments` (`id`, `room_id`, `created_by_id`, `date`, `content`, `rated`) VALUES
(1, 2, 3, '2023-06-24 14:16:55', 'This is another comment.', 4);
INSERT INTO `comments` (`id`, `room_id`, `created_by_id`, `date`, `content`, `rated`) VALUES
(2, 1, 2, '2023-06-24 14:16:55', 'Wonderful', 5);


INSERT INTO `locations` (`id`, `address`, `city`, `country`, `photo`) VALUES
(1, 'Quận 1', 'Hồ Chí Minh', 'Việt Nam', 'https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg');
INSERT INTO `locations` (`id`, `address`, `city`, `country`, `photo`) VALUES
(2, 'Cái Răng', 'Cần Thơ', 'Việt Nam', 'https://airbnbnew.cybersoft.edu.vn/images/vt2.jpg');
INSERT INTO `locations` (`id`, `address`, `city`, `country`, `photo`) VALUES
(3, 'Hòn Rùa', 'Nha Trang', 'Việt Nam', 'https://airbnbnew.cybersoft.edu.vn/images/vt3.jpg');
INSERT INTO `locations` (`id`, `address`, `city`, `country`, `photo`) VALUES
(4, 'Hoàn Kiếm', 'Hà Nội', 'Việt Nam', 'https://airbnbnew.cybersoft.edu.vn/images/vt4.jpg'),
(5, 'Hòn Tằm', 'Phú Quốc', 'Việt Nam', 'https://airbnbnew.cybersoft.edu.vn/images/vt5.jpg'),
(6, 'Hải Châu', 'Đà Nẵng', 'Việt Nam', 'https://airbnbnew.cybersoft.edu.vn/images/vt6.jpg'),
(7, 'Langbiang', 'Đà Lạt', 'Việt Nam', 'https://airbnbnew.cybersoft.edu.vn/images/vt7.jpg'),
(8, 'Mũi Né', 'Phan Thiết', 'Việt Nam', 'https://airbnbnew.cybersoft.edu.vn/images/vt8.jpg'),
(98, '1643 Florence Street', 'Tyler, Texas', 'U.S', NULL),
(99, '4489 Kincheloe Road', 'Irvine, Oregon', 'U.S', NULL),
(3133, 'Núi Bà Đen2', 'Tây Ninh', 'Việt Nam', 'https://sacotravel.com/wp-content/uploads/2023/11/Nui-Ba-Den.jpg');

INSERT INTO `reservations` (`id`, `reserved_by_id`, `room_id`, `guests`, `arrival`, `departure`) VALUES
(1, 2, 2, 1, '2023-06-24 14:56:58', '2023-06-30 14:56:58');
INSERT INTO `reservations` (`id`, `reserved_by_id`, `room_id`, `guests`, `arrival`, `departure`) VALUES
(2, 3, 1, 4, '2023-07-26 14:56:58', '2023-07-30 14:56:58');


INSERT INTO `rooms` (`id`, `name`, `location_id`, `price`, `description`, `photo`, `beds`, `bathrooms`, `guests`, `bedrooms`, `washing_machine`, `electric_iron`, `television`, `air_conditioner`, `wifi`, `stove`, `parking`, `swimming_pool`) VALUES
(1, 'Enjoy historic Valencia and close to the beach.', 99, 150, NULL, NULL, 4, 1, 4, 2, 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true');
INSERT INTO `rooms` (`id`, `name`, `location_id`, `price`, `description`, `photo`, `beds`, `bathrooms`, `guests`, `bedrooms`, `washing_machine`, `electric_iron`, `television`, `air_conditioner`, `wifi`, `stove`, `parking`, `swimming_pool`) VALUES
(2, 'Near the street', 98, 100, NULL, NULL, 2, 1, 2, 1, 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'false');
INSERT INTO `rooms` (`id`, `name`, `location_id`, `price`, `description`, `photo`, `beds`, `bathrooms`, `guests`, `bedrooms`, `washing_machine`, `electric_iron`, `television`, `air_conditioner`, `wifi`, `stove`, `parking`, `swimming_pool`) VALUES
(3, 'NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!', 1, 28, 'Tự nhận phòng. Tự nhận phòng bằng khóa thông minh. Dinh Long là Chủ nhà siêu cấp. Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.', 'https://airbnbnew.cybersoft.edu.vn/images/phong1.jpg', 1, 1, 3, 1, 'true', 'true', 'true', 'false', 'true', 'false', 'true', 'true');
INSERT INTO `rooms` (`id`, `name`, `location_id`, `price`, `description`, `photo`, `beds`, `bathrooms`, `guests`, `bedrooms`, `washing_machine`, `electric_iron`, `television`, `air_conditioner`, `wifi`, `stove`, `parking`, `swimming_pool`) VALUES
(4, 'STUDIO MỚI NETFLIX MIỄN PHÍ/ĐỖ XE MIỄN PHÍ', 1, 21, 'Không gian riêng để làm việc. Một khu vực chung có Wi-fi, phù hợp để làm việc. Tự nhận phòng. Tự nhận phòng bằng khóa thông minh. Kim Nam là Chủ nhà siêu cấp. Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết ma', 'https://airbnbnew.cybersoft.edu.vn/images/phong2.png', 1, 1, 2, 1, 'true', 'false', 'true', 'true', 'true', 'true', 'false', 'false'),
(5, 'Phòng sang trọng với ban công tại D.1 - 200m đến Bitexco', 1, 17, 'Emmy là Chủ nhà siêu cấpChủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.Trải nghiệm nhận phòng tuyệt vời100% khách gần đây đã xếp hạng 5 sao cho quy trình nhận ph', 'https://airbnbnew.cybersoft.edu.vn/images/phong3.png', 1, 1, 2, 1, 'true', 'true', 'true', 'false', 'false', 'false', 'true', 'true'),
(6, 'Closer home!!!!', 2, 28, 'Hieu là Chủ nhà siêu cấpChủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.Địa điểm tuyệt vời100% khách gần đây đã xếp hạng 5 sao cho vị trí này.Trải nghiệm nhận phò', 'https://airbnbnew.cybersoft.edu.vn/images/phong4.png', 2, 2, 4, 2, 'true', 'false', 'true', 'true', 'true', 'false', 'false', 'false'),
(7, 'Toàn bộ quê hương phải của Gi ngay trung tâm Cần Thơ', 2, 25, 'Giang là Chủ nhà siêu cấpChủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.Địa điểm tuyệt vời94% khách gần đây đã xếp hạng 5 sao cho vị trí này.Trải nghiệm nhận phò', 'https://airbnbnew.cybersoft.edu.vn/images/phong5.png', 2, 2, 4, 2, 'true', 'true', 'true', 'true', 'false', 'false', 'true', 'false'),
(8, 'Ngôi nhà có hoa, nắng đẹp, trung tâm Cần Thơ', 2, 21, 'Tự nhận phòngTự nhận phòng với hộp khóa an toàn.Dang là Chủ nhà siêu cấpChủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.', 'https://airbnbnew.cybersoft.edu.vn/images/phong6.png', 2, 2, 4, 1, 'true', 'false', 'true', 'true', 'true', 'true', 'false', 'false'),
(9, 'Near Hon Chong-Quiet Seaview Studio to beach', 3, 10, 'là nơi ẩn náu mới đưa khách tham quan một hành trình kỳ thú vào bãi biển Nha Trang. Chỉ 2 phút đi bộ ra bãi biển!Câu chuyện về Trăng tròn được diễn giải lại một cách nghệ thuật theo lối trang trí sang trọng, cổ điển của ngôi nhà – một phiên bản đương đại ', 'https://airbnbnew.cybersoft.edu.vn/images/phong7.png', 1, 1, 2, 1, 'true', 'true', 'true', 'false', 'false', 'false', 'true', 'true'),
(10, 'Tầng 25 Căn hộ 1 phòng ngủ ấm cúng và hiện đại', 3, 15, 'Phòng ngủ ấm cúng và Morden 1 ở tầng 25. Cảm giác như ở nhà khi qua đêm ở đây! Mọi chi tiết trong căn hộ đều đi kèm với tinh thần nghệ thuật.Chỗ ởToàn bộ căn hộ sẽ là của bạn! Sử dụng miễn phí tiện nghi và đồ dùng nhà bếp của chúng tôi', 'https://airbnbnew.cybersoft.edu.vn/images/phong8.png', 2, 1, 4, 1, 'false', 'true', 'true', 'true', 'true', 'true', 'true', 'true'),
(11, 'Căn hộ mặt tiền Economy Beach với chế độ ngắm bình minh', 3, 18, 'Căn hộ của tôi là căn hộ mặt tiền bãi biển, hướng ra bãi biển. Bạn có thể tận hưởng bình minh từ cửa sổ.Căn hộ có thể cho thuê tối đa 4 người với 2 giường đôi. Tọa lạc tại trung tâm thành phố với nhiều nhà hàng và siêu thị xung quanh.', 'https://airbnbnew.cybersoft.edu.vn/images/phong9.png', 2, 1, 4, 1, 'true', 'true', 'true', 'false', 'true', 'true', 'false', 'false'),
(12, 'Hanoi Old Quarter Homestay - Unique Railway View', 4, 23, 'Welcome to our house - a newly renovated apartment & just a step to Old Quarter, Dong Xuan Market, Hoan Kiem Lake. You will get a chance to truly live a Hanoian life with local neighbor, local food & an one-of-a-kind experience of living right beside an u', 'https://airbnbnew.cybersoft.edu.vn/images/phong10.png', 1, 1, 2, 1, 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'false');

INSERT INTO `users` (`id`, `avatar`, `name`, `email`, `password`, `phone`, `birthday`, `gender`, `role`) VALUES
(1, NULL, 'Administrator', 'admin@gmail.com', '$2b$10$MjA/s7/AGN9on3qzeHvPCOvbvLd0hMUF9aK1pmemrk8g9oHDLcvR6', '0987654321', '2000-01-01', 'Undefined', 'Guest');
INSERT INTO `users` (`id`, `avatar`, `name`, `email`, `password`, `phone`, `birthday`, `gender`, `role`) VALUES
(2, NULL, 'Janice Jones', 'jones2503@gmail.com', '$2b$10$dVolXVxKnpUEcGbV2vdqUOe/Lo0nYzgYua8KATaQvYkXcdpi2sxJ6', '9039856639', '1979-03-25', 'Female', 'Admin');
INSERT INTO `users` (`id`, `avatar`, `name`, `email`, `password`, `phone`, `birthday`, `gender`, `role`) VALUES
(3, NULL, 'Jonathan Donato', 'donato2503@gmail.com', '$2b$10$jh0giCsIFHkMqfVs9/0Bg.pQKz.5tqD0fokbj4Bjoh/f6n44hDky6', '5025873715', '1938-11-27', 'Male', 'Guest');
INSERT INTO `users` (`id`, `avatar`, `name`, `email`, `password`, `phone`, `birthday`, `gender`, `role`) VALUES
(4, NULL, 'Nhan Nguyen', 'Nhan@gmail.com', '$2b$10$FAo9vIorBczuhWcv.Fq7y.xoPhsDtiYpGueP4QSZC9i4dlkXd4poq', '0978324132', '1994-10-30', 'Male', 'Guest'),
(23, NULL, 'Dat Pham', 'dat@gmail.com', '$2b$10$liEDuoWeiSYmIpDQptjfOOG5svHe8saoEyAil4Mw7OoMcEYPcJVj6', '0902850103', '2002-10-15', 'Male', 'Guest'),
(25, NULL, 'Tran Ngoc Nhan', 'nhantran4102002@gmail.com', '$2b$10$/KhXDbst.AwBmALB3QM6L.eqb0SljuHvVZ5DCm62yufa7OQPcpRLq', '0901391300', '2002-10-04', 'Male', 'Guest');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
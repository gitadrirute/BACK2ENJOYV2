-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: back2enjoyv2
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\User',11,'auth_token','f91369b79f38e13054826b5a154f59f5612ecec3176173863255881db006025b','[\"*\"]',NULL,NULL,'2024-05-24 11:23:07','2024-05-24 11:23:07'),(2,'App\\Models\\User',11,'auth_token','964e1cc8eddf5739d1d6a4e8459857c32f121e85d615de505dcb94bfb50623f1','[\"*\"]','2024-05-24 11:55:47',NULL,'2024-05-24 11:55:07','2024-05-24 11:55:47'),(3,'App\\Models\\User',12,'auth_token','c7934aca0d4ca0fd68d3409958706f1526f8ec90bbf7f982e0bfd9dc65d93a04','[\"*\"]','2024-05-24 20:01:38',NULL,'2024-05-24 12:09:50','2024-05-24 20:01:38'),(4,'App\\Models\\User',12,'auth_token','3ded3b59194f3d37d1a63122803dbe56cb30538855bfef8118c9d5b01f4345f3','[\"*\"]','2024-05-25 07:51:48',NULL,'2024-05-25 07:51:23','2024-05-25 07:51:48'),(5,'App\\Models\\User',13,'auth_token','12defac37c6b2c457fcca28b224f2f4976f4f39dbc714f8ca80e223acb41ffbf','[\"*\"]','2024-05-25 14:23:24',NULL,'2024-05-25 14:16:39','2024-05-25 14:23:24'),(6,'App\\Models\\User',13,'auth_token','22e3fa1cf903cf79615120d2239d8dfc942bc7f45372a6c2b2bc9784590d4f05','[\"*\"]','2024-05-26 10:08:30',NULL,'2024-05-26 10:08:16','2024-05-26 10:08:30'),(7,'App\\Models\\User',13,'auth_token','2d57c5e2422b060b4cc424dea16000bef6ffb453306e14437e2043ca9ec5e402','[\"*\"]','2024-05-26 10:47:07',NULL,'2024-05-26 10:12:35','2024-05-26 10:47:07'),(8,'App\\Models\\User',13,'auth_token','d61ad96a02cb4b7b318ae079f888cba1c90f442a809750c10cff44534857d8d7','[\"*\"]','2024-05-26 13:05:49',NULL,'2024-05-26 13:05:08','2024-05-26 13:05:49'),(9,'App\\Models\\User',12,'auth_token','9b8209336993fbf9e91cfa7e069806df2ab0545ace5b29a9f2543ac14f55e234','[\"*\"]','2024-05-28 08:20:14',NULL,'2024-05-26 13:44:23','2024-05-28 08:20:14'),(10,'App\\Models\\User',12,'auth_token','4db38812bb087872383a1fadabbd46343a0f37a4c4635981a7bea465a5a758d8','[\"*\"]','2024-05-27 09:12:32',NULL,'2024-05-27 09:09:28','2024-05-27 09:12:32'),(11,'App\\Models\\User',12,'auth_token','5837822909c6adefc191d2a7bd6372f4381d7e3b27e9d3bc05bbaf674fd59d4c','[\"*\"]',NULL,NULL,'2024-05-27 12:27:52','2024-05-27 12:27:52'),(12,'App\\Models\\User',14,'auth_token','78b068d2815d12737d777bdd45ce5c4ab7cd91113df0dc1cf5bc86dd6d1e9620','[\"*\"]','2024-05-27 15:11:24',NULL,'2024-05-27 15:04:42','2024-05-27 15:11:24'),(13,'App\\Models\\User',12,'auth_token','b228aacedcaf9511850045695cdbfd60ce397a1e937885c1a55c39ce5c2aef9a','[\"*\"]','2024-05-29 06:35:49',NULL,'2024-05-27 18:02:11','2024-05-29 06:35:49'),(14,'App\\Models\\User',15,'auth_token','2eec9b7d8f3bc99410eb140e32cb467ceabfeca85a7dd90aa4d85ba115facf80','[\"*\"]',NULL,NULL,'2024-05-27 19:42:47','2024-05-27 19:42:47'),(15,'App\\Models\\User',15,'auth_token','54bd2ff0b17cb451599491e44069061fa0d57a3f0ca38c7faf08545a791a4947','[\"*\"]','2024-05-27 19:46:42',NULL,'2024-05-27 19:43:00','2024-05-27 19:46:42');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-29 12:25:42

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
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\User',5,'auth_token','e0b44abde715eb6bc5ddfda5eba80eb72fb387d992fcf0c6cfe874f399e09402','[\"*\"]','2024-05-29 21:30:58',NULL,'2024-05-29 21:29:41','2024-05-29 21:30:58'),(2,'App\\Models\\User',6,'auth_token','e86f615772eee137f772cc19f205c56080f83996f72f3318cb80290ebf5ae0bb','[\"*\"]','2024-05-29 21:37:10',NULL,'2024-05-29 21:36:31','2024-05-29 21:37:10'),(3,'App\\Models\\User',7,'auth_token','66e648feb564ac4c22d32e1da70990154876e54259e7e940350fb6200bcf725a','[\"*\"]','2024-05-29 21:39:15',NULL,'2024-05-29 21:38:26','2024-05-29 21:39:15'),(4,'App\\Models\\User',8,'auth_token','bc1b5be9464f1fbb64e30d519ecc4080d8aca6d7438001d623a886b15aea7c7a','[\"*\"]','2024-05-29 21:42:55',NULL,'2024-05-29 21:42:17','2024-05-29 21:42:55'),(5,'App\\Models\\User',9,'auth_token','871f8f97e796acc61c73cc172f199fa80568b00b3ed2d223d5aae911ec629438','[\"*\"]','2024-05-29 21:46:00',NULL,'2024-05-29 21:45:35','2024-05-29 21:46:00'),(6,'App\\Models\\User',10,'auth_token','222854095e1cf61d791cd08c20bb6f34d00dbb317ba5a402e719e20fdf3fa35d','[\"*\"]','2024-05-29 21:46:49',NULL,'2024-05-29 21:46:28','2024-05-29 21:46:49'),(7,'App\\Models\\User',11,'auth_token','eab34ff61a7904ed49c81d144d16dbe7089b1583877a20a20c40c533ce5e2f72','[\"*\"]','2024-05-29 21:47:47',NULL,'2024-05-29 21:47:28','2024-05-29 21:47:47'),(8,'App\\Models\\User',12,'auth_token','83ea067b69ebc3ad2b0dfa4eb826b93039b5bc4a4fb379612370d7ed08627f77','[\"*\"]','2024-05-29 21:49:23',NULL,'2024-05-29 21:48:24','2024-05-29 21:49:23'),(9,'App\\Models\\User',13,'auth_token','8ed00b800e4751110a6da5a2573ca72419a16f6c4fd3cd777cba9a7b366cac83','[\"*\"]','2024-05-29 21:50:10',NULL,'2024-05-29 21:49:52','2024-05-29 21:50:10'),(10,'App\\Models\\User',4,'auth_token','b492f69d6e0af432e8c36a1b54f989c8e02ff8db33e57e293a04c7c01335b29a','[\"*\"]','2024-05-29 21:59:06',NULL,'2024-05-29 21:53:42','2024-05-29 21:59:06'),(11,'App\\Models\\User',2,'auth_token','8f58f3dae00e038230e2916eb07462fa96f225bf540687a6d6b185fc93d71128','[\"*\"]','2024-05-29 22:03:32',NULL,'2024-05-29 21:59:36','2024-05-29 22:03:32'),(12,'App\\Models\\User',3,'auth_token','98796eb61b5b9b3fc2608a0f8eb45b2297e155d7f68560a52dcc2c359c8a0d54','[\"*\"]','2024-05-29 22:06:08',NULL,'2024-05-29 22:04:48','2024-05-29 22:06:08'),(13,'App\\Models\\User',1,'auth_token','77c68632fd8cdf0ce00dee6a116005b0e709e4112e4f869496001392c39def08','[\"*\"]','2024-05-29 22:20:21',NULL,'2024-05-29 22:06:30','2024-05-29 22:20:21'),(14,'App\\Models\\User',13,'auth_token','d7a3e1a5269f661d9ad603f4cff5e25cfb51755a4aeeb2788743d50b2f7b2df7','[\"*\"]','2024-05-29 22:23:21',NULL,'2024-05-29 22:21:20','2024-05-29 22:23:21'),(15,'App\\Models\\User',12,'auth_token','b7c13c39a6b933c9b11a091eb8a513ec06a9cd608d01c36cb5d71fb38259fdba','[\"*\"]',NULL,NULL,'2024-05-29 22:25:22','2024-05-29 22:25:22'),(16,'App\\Models\\User',12,'auth_token','7d9942530faf9fe063d7b8201190d5d846997f6fe40a2abcc41b4dc3480378f7','[\"*\"]','2024-05-29 22:27:45',NULL,'2024-05-29 22:27:00','2024-05-29 22:27:45'),(17,'App\\Models\\User',5,'auth_token','e4e57aa682fa09dc2a665fe8ff7e7593a897329094e0ba69ca4908eb57bc16be','[\"*\"]','2024-05-29 22:29:22',NULL,'2024-05-29 22:28:39','2024-05-29 22:29:22'),(18,'App\\Models\\User',6,'auth_token','955faa08593a09de8d84f51f2305b9b6b2345c120578322faa1c5883944ebe34','[\"*\"]','2024-05-29 22:31:43',NULL,'2024-05-29 22:31:01','2024-05-29 22:31:43'),(19,'App\\Models\\User',9,'auth_token','2ffed3371af341d60efeb152189346459ac9851ea1a3f308d04599dcb31e700b','[\"*\"]','2024-05-29 22:37:26',NULL,'2024-05-29 22:32:37','2024-05-29 22:37:26'),(20,'App\\Models\\User',12,'auth_token','b9bef0cfb6cee3d39424661f7f285ba33344b25d9f5aba1880548b9391fd1d22','[\"*\"]','2024-05-29 22:55:34',NULL,'2024-05-29 22:54:51','2024-05-29 22:55:34'),(21,'App\\Models\\User',12,'auth_token','f4ae6c0bf883972818a0ddfee9b1a677ee34e87cabca8f3ae51e3d77df618eae','[\"*\"]','2024-05-31 19:40:31',NULL,'2024-05-30 07:09:17','2024-05-31 19:40:31'),(22,'App\\Models\\User',12,'auth_token','39e41520dc198e2d98c5ef13907569229c585e8f7397bf1ea201d3f7c7053995','[\"*\"]','2024-05-30 08:17:43',NULL,'2024-05-30 08:16:37','2024-05-30 08:17:43'),(23,'App\\Models\\User',12,'auth_token','bb740807fcbb7db9b4f6b1e0b03dd636b2df36b62ad8ef70c8ab192178573825','[\"*\"]','2024-05-30 12:05:33',NULL,'2024-05-30 08:55:12','2024-05-30 12:05:33'),(24,'App\\Models\\User',12,'auth_token','4160c3bea8fa744bd11839bfe8cfdb914917757f66970201614f2feafb3b982e','[\"*\"]','2024-05-30 10:00:34',NULL,'2024-05-30 10:00:21','2024-05-30 10:00:34'),(25,'App\\Models\\User',12,'auth_token','d39868e9936bed5b3c15ddaf98c4acff59fa73d878d92577e87a63b99af3bfcd','[\"*\"]',NULL,NULL,'2024-05-30 11:59:08','2024-05-30 11:59:08'),(26,'App\\Models\\User',12,'auth_token','e62f301bad8f3f1736028fe3852633fb8ac29c0f594dc0c333244958e293e73a','[\"*\"]',NULL,NULL,'2024-05-30 11:59:09','2024-05-30 11:59:09'),(27,'App\\Models\\User',12,'auth_token','17f6ee252dabb48c1faa4e42d760807b60fa804c02453898384716845206594b','[\"*\"]',NULL,NULL,'2024-05-30 11:59:10','2024-05-30 11:59:10'),(28,'App\\Models\\User',12,'auth_token','9ca1fc9c5474dff6b27c39f6d41bce37ca988bc5db5c9d755aa23f0a4c62ecc0','[\"*\"]','2024-05-30 11:59:13',NULL,'2024-05-30 11:59:11','2024-05-30 11:59:13'),(29,'App\\Models\\User',12,'auth_token','84892a6d41abf6677192f69be7ec31725e5eec93efdb35846025f4bcdab0e3b1','[\"*\"]',NULL,NULL,'2024-05-30 12:00:35','2024-05-30 12:00:35'),(30,'App\\Models\\User',12,'auth_token','1e3040d652563879fbf2a63fd2f1c65d9fc87b4d261abbc5a169aef563c92683','[\"*\"]',NULL,NULL,'2024-05-30 12:00:49','2024-05-30 12:00:49'),(31,'App\\Models\\User',12,'auth_token','ded25266e6e52d71b09a8b2e3f876ab8e43e9906230bb48de752ca45069e725f','[\"*\"]',NULL,NULL,'2024-05-30 12:00:56','2024-05-30 12:00:56'),(32,'App\\Models\\User',12,'auth_token','dc1ca486bbab944f8936f7201f402cebce8b5679e9b5c9594b6cce8ef399d7a7','[\"*\"]',NULL,NULL,'2024-05-30 12:00:57','2024-05-30 12:00:57'),(33,'App\\Models\\User',12,'auth_token','0a28fa6dd840f1deceb4a69a55d60c37ec0bc84ba4b8926ea06ca93db0f8d018','[\"*\"]','2024-05-30 12:02:10',NULL,'2024-05-30 12:00:58','2024-05-30 12:02:10'),(34,'App\\Models\\User',16,'auth_token','ec86a7fafea1e5ee9e0cad7ddce826ab5582a26a1707781698654a8038367224','[\"*\"]',NULL,NULL,'2024-05-31 19:58:53','2024-05-31 19:58:53'),(35,'App\\Models\\User',16,'auth_token','243a23c1e069d1a01b1b60b457370c6aa5e45f7ef089765d618b76c5a274f692','[\"*\"]','2024-06-03 15:24:40',NULL,'2024-05-31 20:01:47','2024-06-03 15:24:40'),(36,'App\\Models\\User',16,'auth_token','a02971f9d6a3b94df957c4babeaa11b59aba095ed262c151c3450627aeb00021','[\"*\"]','2024-06-02 19:45:00',NULL,'2024-06-02 19:31:35','2024-06-02 19:45:00'),(37,'App\\Models\\User',17,'auth_token','d36f80627995861dcc2cc1adb53370788d1d1eda43af47218c461a15a7201c01','[\"*\"]','2024-06-02 20:21:25',NULL,'2024-06-02 20:15:18','2024-06-02 20:21:25');
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

-- Dump completed on 2024-06-03 22:59:20

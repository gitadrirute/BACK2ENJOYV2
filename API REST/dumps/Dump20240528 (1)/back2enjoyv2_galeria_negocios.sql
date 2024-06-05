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
-- Table structure for table `galeria_negocios`
--

DROP TABLE IF EXISTS `galeria_negocios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `galeria_negocios` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `rutaImagen` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `negocio_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `galeria_negocios_negocio_id_foreign` (`negocio_id`),
  CONSTRAINT `galeria_negocios_negocio_id_foreign` FOREIGN KEY (`negocio_id`) REFERENCES `negocios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `galeria_negocios`
--

LOCK TABLES `galeria_negocios` WRITE;
/*!40000 ALTER TABLE `galeria_negocios` DISABLE KEYS */;
INSERT INTO `galeria_negocios` VALUES (1,'public/ImagenesNegocios/kLT4NccRLQ1t7MaMsI8vk0mubeLMWpBqN8ueQtX4.png','2024-05-23 12:42:46','2024-05-23 12:42:46',1),(2,'public/ImagenesNegocios/35knYGoK6Xt7h6k3guMw1e7oUK1NkWAodxxyRc7n.png','2024-05-25 18:57:47','2024-05-25 18:57:47',1),(3,'public/ImagenesNegocios/ER8tSBUZp11mgCAczW2GApfAh6FEjgqPK3QvYQo1.png','2024-05-25 19:17:22','2024-05-25 19:17:22',1),(4,'public/ImagenesNegocios/eNPQgp9cxpPErxvFEsJrY1qaZdgAK1t9Y0TXWe58.png','2024-05-25 19:20:09','2024-05-25 19:20:09',1),(5,'public/ImagenesNegocios/aCdv8jNWxaT9JCYmK5BdjT18GcBUFVnuAbNzfJQN.png','2024-05-25 19:20:51','2024-05-25 19:20:51',1),(6,'public/ImagenesNegocios/6vp4AwhrvQAzfH9PygW4nJt47oe43Ybxr7Sv1J61.png','2024-05-25 19:21:29','2024-05-25 19:21:29',2),(7,'public/ImagenesNegocios/C9X9Izy5hEhMFWZhqBtbTbpUYIc0LPbSHSiC0tAL.png','2024-05-25 19:22:02','2024-05-25 19:22:02',2),(8,'public/ImagenesNegocios/pWPxXAeCsykPnLgCAHkJn34evMNT3vKPBkC0fUrF.png','2024-05-27 18:18:51','2024-05-27 18:18:51',13),(9,'public/ImagenesNegocios/MvC8ttjFSbgBo3dMw3ofdBTZkSXyYvfeTzagM31T.png','2024-05-27 18:23:31','2024-05-27 18:23:31',13),(10,'public/ImagenesNegocios/OvgivKU2S7K6j4iqcrT2zdxglnQRV1yr0Cju2MOC.png','2024-05-27 18:28:06','2024-05-27 18:28:06',10),(11,'public/ImagenesNegocios/l4nqOv2yeofPbalx2U4JViCkKdg0FA1Qw53kzH6J.png','2024-05-27 18:30:20','2024-05-27 18:30:20',10),(12,'public/ImagenesNegocios/F79m8oxwhBERwQLEvRIwCWD4JvZuqHLzOEEPgLkc.png','2024-05-27 18:38:58','2024-05-27 18:38:58',13),(13,'public/ImagenesNegocios/KoMGNTlJegWEerS6kEkTp4zwTQfuJJP1FkYdUSCg.png','2024-05-27 18:40:33','2024-05-27 18:40:33',13),(14,'public/ImagenesNegocios/gxWiPzAt5STfSmxUu2LFVjlB4JsbMCPvzKar8uHG.png','2024-05-28 15:24:12','2024-05-28 15:24:12',13),(15,'public/ImagenesNegocios/mQ1ueVRt0OjNn4jLvh2lovCUuFau9CoL2QhANNot.png','2024-05-28 15:26:09','2024-05-28 15:26:09',13),(16,'storage/ImagenesNegocios/iHSWLCfM1sulrjkAvO7brtkMgUo5ynhbNBv1tU3s.png','2024-05-28 15:52:45','2024-05-28 15:52:45',13),(17,'public/ImagenesNegocios/uNL1wDJKmVvTFEKf9GBA67ZPlkvJHSL13ncBuKlt.png','2024-05-28 15:53:51','2024-05-28 15:53:51',13),(18,'public/ImagenesNegocios/uxbbG3dRcxfURhQZ9lbeQweyY1BLifGMoMXTEY9y.png','2024-05-28 19:26:32','2024-05-28 19:26:32',13),(19,'/storage/ImagenesNegocios/RIXnuz0xESUNw3KaqZMRXKpY6mCQ5SXA06L985zj.png','2024-05-28 19:32:45','2024-05-28 19:32:45',13),(20,'/storage/ImagenesNegocios/hr03uN6c2H06SdMiFIBF6c3CdhQzdoOPJQWcWdRk.png','2024-05-28 19:38:31','2024-05-28 19:38:31',13),(21,'/storage/ImagenesNegocios/VghxBRadKeAAceG7r7yCi2dJOkpl6vrCtNabmSti.png','2024-05-28 20:05:21','2024-05-28 20:05:21',13),(22,'/storage/ImagenesNegocios/wqj9ip7UajU3KehAZmkebi4HvKtBq5VGTMAEbcf6.png','2024-05-28 20:21:52','2024-05-28 20:21:52',13),(23,'/storage/ImagenesNegocios/XCyvohyKVtYkizp2dGK5nxg392Xvtg074jh6Mpmy.jpg','2024-05-28 21:41:12','2024-05-28 21:41:12',13),(24,'/storage/ImagenesNegocios/gZCNQzVaOE36BfW82vZB0eKVufEvDqyLaHRQWgue.jpg','2024-05-28 21:45:28','2024-05-28 21:45:28',13),(25,'/storage/ImagenesNegocios/pkfYC25kLVUD9GRgY3XeEbeRI0y5qKz26l4bPO04.png','2024-05-28 21:49:54','2024-05-28 21:49:54',13),(26,'/storage/ImagenesNegocios/Ssf3OS3g95OPLZPXPxNll5CliD1Z8pQqGsGdVfvG.png','2024-05-29 05:19:44','2024-05-29 05:19:44',13),(27,'/storage/ImagenesNegocios/JyNAlmF8dh1qxjnUFWMfZG1T91XSUoN3sGEfmTQ1.png','2024-05-29 05:20:30','2024-05-29 05:20:30',13),(28,'/storage/ImagenesNegocios/iHTctL8UnjkSkX09oyVlTc4iSEyyrucFm2XyhIBD.png','2024-05-29 05:24:27','2024-05-29 05:24:27',13),(29,'/storage/ImagenesNegocios/ie4Bs4UbHjTBbE9MjEmglsCGAYIJ2hTxhhn97bev.png','2024-05-29 05:33:59','2024-05-29 05:33:59',13),(30,'/storage/ImagenesNegocios/7NxudMlCS04KX8GJEJ8NTnNvmM5ZbGW4floJI33i.png','2024-05-29 05:34:22','2024-05-29 05:34:22',13),(31,'/storage/ImagenesNegocios/5ZoRRHkhR4Jfq6tQMXiAQnvjCzl8N8BBwX2qRNCX.png','2024-05-29 05:34:22','2024-05-29 05:34:22',13),(32,'/storage/ImagenesNegocios/xnZfxwosmk6TnO8p2Zg4gb003h9iK0X0y5xVPwVg.png','2024-05-29 06:35:49','2024-05-29 06:35:49',13),(33,'/storage/ImagenesNegocios/aV2pjC6XAE3N1hlas0wCSj6S6JsrDCaWRzqzkTA2.png','2024-05-29 06:35:49','2024-05-29 06:35:49',13);
/*!40000 ALTER TABLE `galeria_negocios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-29 12:25:41

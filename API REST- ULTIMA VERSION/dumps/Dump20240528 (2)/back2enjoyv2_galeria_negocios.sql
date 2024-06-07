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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `galeria_negocios`
--

LOCK TABLES `galeria_negocios` WRITE;
/*!40000 ALTER TABLE `galeria_negocios` DISABLE KEYS */;
INSERT INTO `galeria_negocios` VALUES (1,'/storage/ImagenesNegocios/VG0uRDojFBD6r7r4XdgFDl1exbF88vG5S7ZPwj7Y.jpg','2024-05-29 21:30:58','2024-05-29 21:30:58',6),(2,'/storage/ImagenesNegocios/opPrr7AiPzx2nWyhn39YekvixS5UzNyAYoKaTM9W.jpg','2024-05-29 21:37:10','2024-05-29 21:37:10',7),(3,'/storage/ImagenesNegocios/2OxTvuhiuE9QyuAYliDChqizkGlLHGIMhNok62dS.jpg','2024-05-29 21:39:15','2024-05-29 21:39:15',8),(4,'/storage/ImagenesNegocios/sKmbW1SsskAYDtzyN65RjSFthRdAYw3gjL3NqfPu.png','2024-05-29 21:42:56','2024-05-29 21:42:56',9),(5,'/storage/ImagenesNegocios/kyXR3dBeKlTjs0z2roQuOq6pAGkVqprXGHDrEcNs.jpg','2024-05-29 21:46:01','2024-05-29 21:46:01',10),(6,'/storage/ImagenesNegocios/AYMmbE5yUrAY4EYM0YxbQ0wzxPn3fIkEP0e0N7vy.jpg','2024-05-29 21:46:49','2024-05-29 21:46:49',11),(7,'/storage/ImagenesNegocios/enam33TuMJweWlXHdDrSJFRvGUVv97nEBbakbpZK.jpg','2024-05-29 21:47:47','2024-05-29 21:47:47',12),(8,'/storage/ImagenesNegocios/9tBIWdFobjGAnZpSES3bGFpC50BcisFEL6UXNf0J.jpg','2024-05-29 21:49:23','2024-05-29 21:49:23',13),(9,'/storage/ImagenesNegocios/I26gjxx5mSMMEqq31GknCyFj7VxwgFSyb2sAd2to.jpg','2024-05-29 21:50:10','2024-05-29 21:50:10',14),(10,'/storage/ImagenesNegocios/3vyqnoOclyhiyEBAnk4YawH2hC6xKVBHrgelE4e6.png','2024-05-29 21:59:06','2024-05-29 21:59:06',1),(11,'/storage/ImagenesNegocios/C40ETlxk7WZFfRJfYb0n8QEhAC6GkOFBjjCix2YV.jpg','2024-05-29 22:03:32','2024-05-29 22:03:32',2),(12,'/storage/ImagenesNegocios/EtTVTezQcPafVmmyjOoeLDmyYPjftR2CAYcUosIY.jpg','2024-05-29 22:06:08','2024-05-29 22:06:08',3),(13,'/storage/ImagenesNegocios/6lNjqbx4FZ6DeawInXTnjYfRBZrID8KuJCD4Avqc.jpg','2024-05-29 22:07:25','2024-05-29 22:07:25',5);
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

-- Dump completed on 2024-06-03 22:59:17

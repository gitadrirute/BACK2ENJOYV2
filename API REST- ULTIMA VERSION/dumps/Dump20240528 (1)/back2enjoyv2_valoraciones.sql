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
-- Table structure for table `valoraciones`
--

DROP TABLE IF EXISTS `valoraciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `valoraciones` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `valoracion` int NOT NULL,
  `comentario` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `usuario_id` bigint unsigned NOT NULL,
  `negocio_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `valoraciones_usuario_id_foreign` (`usuario_id`),
  KEY `valoraciones_negocio_id_foreign` (`negocio_id`),
  CONSTRAINT `valoraciones_negocio_id_foreign` FOREIGN KEY (`negocio_id`) REFERENCES `negocios` (`id`),
  CONSTRAINT `valoraciones_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valoraciones`
--

LOCK TABLES `valoraciones` WRITE;
/*!40000 ALTER TABLE `valoraciones` DISABLE KEYS */;
INSERT INTO `valoraciones` VALUES (1,1,'Comida de exuisita de mierda','2024-05-23 12:42:18','2024-05-23 12:42:18',1,1),(2,2,'Comida de exuisita de mierda','2024-05-23 12:44:16','2024-05-23 12:44:16',2,2),(4,4,'Comida de exuisita de mierda','2024-05-23 13:21:01','2024-05-23 13:21:01',1,11),(5,3,'Comida de exuisita de mierda','2024-05-23 13:22:10','2024-05-23 13:22:10',1,1),(6,4,'Comida buena','2024-05-24 08:15:07','2024-05-24 08:15:07',1,1),(7,4,'Comida buenarda, buen servicio','2024-05-25 14:17:50','2024-05-25 14:17:50',13,7),(8,2,'Comida regulera','2024-05-25 14:23:24','2024-05-25 14:23:24',13,8),(9,5,'Comida buena, buen servicio','2024-05-26 13:05:49','2024-05-26 13:05:49',13,1),(10,2,'Comida buena, buen servicio','2024-05-26 13:45:39','2024-05-26 13:45:39',12,1),(11,2,'Comida buena, buen servicio','2024-05-26 14:05:02','2024-05-26 14:05:02',12,6),(12,5,'Comida buena, buen servicio','2024-05-28 08:20:14','2024-05-28 08:20:14',12,13);
/*!40000 ALTER TABLE `valoraciones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-29 12:25:39

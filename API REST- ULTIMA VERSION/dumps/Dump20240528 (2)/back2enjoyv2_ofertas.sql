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
-- Table structure for table `ofertas`
--

DROP TABLE IF EXISTS `ofertas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ofertas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descuento` int NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFin` date NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `tipoOferta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `negocio_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ofertas_negocio_id_foreign` (`negocio_id`),
  CONSTRAINT `ofertas_negocio_id_foreign` FOREIGN KEY (`negocio_id`) REFERENCES `negocios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ofertas`
--

LOCK TABLES `ofertas` WRITE;
/*!40000 ALTER TABLE `ofertas` DISABLE KEYS */;
INSERT INTO `ofertas` VALUES (1,'oferton','oferton',20,'2024-05-22','2024-06-12',1,'descuento',1,'2024-05-29 22:09:39','2024-05-29 22:09:39'),(2,'oferton','oferton',30,'2024-05-22','2024-06-12',1,'descuento',2,'2024-05-29 22:09:54','2024-05-29 22:09:54'),(3,'oferton','oferton',25,'2024-05-22','2024-06-12',1,'descuento',3,'2024-05-29 22:10:05','2024-05-29 22:10:05'),(5,'oferton','oferton',20,'2024-05-22','2024-06-12',1,'descuento',5,'2024-05-29 22:10:29','2024-05-29 22:10:29'),(6,'oferton','oferton',15,'2024-05-22','2024-06-12',1,'descuento',6,'2024-05-29 22:10:43','2024-05-29 22:10:43'),(7,'oferton','oferton',25,'2024-05-22','2024-06-12',1,'descuento',7,'2024-05-29 22:11:01','2024-05-29 22:11:01'),(8,'oferton','oferton',35,'2024-05-22','2024-06-12',1,'descuento',8,'2024-05-29 22:11:10','2024-05-29 22:11:10'),(9,'oferton','oferton',10,'2024-05-22','2024-06-12',1,'descuento',9,'2024-05-29 22:11:22','2024-05-29 22:11:22'),(10,'oferton','oferton',33,'2024-05-22','2024-06-12',1,'descuento',10,'2024-05-29 22:11:35','2024-05-29 22:11:35'),(11,'oferton','oferton',20,'2024-05-22','2024-06-12',1,'descuento',11,'2024-05-29 22:11:47','2024-05-29 22:11:47'),(12,'oferton','oferton',10,'2024-05-22','2024-06-12',1,'descuento',12,'2024-05-29 22:11:53','2024-05-29 22:11:53'),(13,'oferton','oferton',30,'2024-05-22','2024-06-12',1,'descuento',13,'2024-05-29 22:12:02','2024-05-29 22:12:02');
/*!40000 ALTER TABLE `ofertas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-03 22:59:13

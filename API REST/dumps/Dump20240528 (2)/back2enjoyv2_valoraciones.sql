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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valoraciones`
--

LOCK TABLES `valoraciones` WRITE;
/*!40000 ALTER TABLE `valoraciones` DISABLE KEYS */;
INSERT INTO `valoraciones` VALUES (1,5,'Comida buena, buen servicio','2024-05-29 22:18:39','2024-05-29 22:18:39',1,1),(2,3,'Venirse a la venta el Tunel que es mejor','2024-05-29 22:20:21','2024-05-29 22:20:21',1,1),(3,5,'@LucasG98  Que dices tuuu, mentira!!','2024-05-29 22:23:22','2024-05-29 22:23:22',13,1),(4,5,'Venirse Perrossss!!!','2024-05-29 22:27:45','2024-05-29 22:27:45',12,6),(5,4,'Comida muy rica, aunque el camarero esta más','2024-05-29 22:29:22','2024-05-29 22:29:22',5,6),(6,4,'Buen servicio y buen trato','2024-05-29 22:31:43','2024-05-29 22:31:43',6,6),(7,3,'Podria estar mejor, pero aceptable...','2024-05-29 22:33:21','2024-05-29 22:33:21',9,11),(8,1,'Comida horrible','2024-05-29 22:35:15','2024-05-29 22:35:15',9,12),(9,5,'Buena comida','2024-05-29 22:37:16','2024-05-29 22:37:16',9,2),(10,3,'Buena comida','2024-05-29 22:37:26','2024-05-29 22:37:26',9,3),(11,2,'Pruebecita linda de comentario.','2024-05-30 07:10:17','2024-05-30 07:10:17',12,12),(12,5,'Me encanta','2024-05-30 08:56:42','2024-05-30 08:56:42',12,6),(14,4,'hola Carlos','2024-05-30 12:03:52','2024-05-30 12:03:52',12,14),(15,5,'Buena comida','2024-06-02 19:33:02','2024-06-02 19:33:02',16,5),(16,4,'Buena comida','2024-06-02 19:33:08','2024-06-02 19:33:08',16,5),(17,4,'Buena comida','2024-06-02 19:35:27','2024-06-02 19:35:27',16,3),(18,4,'Buena comida','2024-06-02 19:39:27','2024-06-02 19:39:27',16,3),(19,5,'Buena comida','2024-06-02 19:39:32','2024-06-02 19:39:32',16,3),(20,5,'Buena comida','2024-06-02 19:40:05','2024-06-02 19:40:05',16,3),(21,5,'Buena comida','2024-06-02 19:41:03','2024-06-02 19:41:03',16,3),(22,1,'Buena comida','2024-06-02 19:45:00','2024-06-02 19:45:00',16,1),(23,5,'Comida muy rica!!! Muy buen servicio','2024-06-02 20:10:29','2024-06-02 20:10:29',16,9),(25,4,'Comida muy buena, buen servicio , pero el ambiente nos agobió un poco','2024-06-02 20:20:51','2024-06-02 20:20:51',17,9);
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

-- Dump completed on 2024-06-03 22:59:14

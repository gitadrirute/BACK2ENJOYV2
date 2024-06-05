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
-- Table structure for table `negocios`
--

DROP TABLE IF EXISTS `negocios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `negocios` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NIF` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` int NOT NULL,
  `sitioWeb` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `horario` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `informacion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ubicacion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `validado` tinyint(1) NOT NULL,
  `categoria_negocio_id` bigint unsigned NOT NULL,
  `usuario_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `negocios_nombre_unique` (`nombre`),
  UNIQUE KEY `negocios_nif_unique` (`NIF`),
  UNIQUE KEY `negocios_telefono_unique` (`telefono`),
  UNIQUE KEY `negocios_sitioweb_unique` (`sitioWeb`),
  KEY `negocios_categoria_negocio_id_foreign` (`categoria_negocio_id`),
  KEY `negocios_usuario_id_foreign` (`usuario_id`),
  CONSTRAINT `negocios_categoria_negocio_id_foreign` FOREIGN KEY (`categoria_negocio_id`) REFERENCES `categorias_negocios` (`id`),
  CONSTRAINT `negocios_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `negocios`
--

LOCK TABLES `negocios` WRITE;
/*!40000 ALTER TABLE `negocios` DISABLE KEYS */;
INSERT INTO `negocios` VALUES (1,'Restaurante Sabor','B78901231','Plaza Sol 20',915678123,'https://restaurantesabor.es','L-D: 13:00-23:30','Disfruta de la auténtica cocina mediterránea en el corazón de la ciudad.','97.000000000000000000000000000,            999.0',1,2,1,'2024-05-15 09:00:00','2024-05-24 08:25:39'),(2,'Bar La Esquina','B23456789','Calle Luna 45',913456789,'https://bareaquina.es','L-D: 18:00-2:00','El mejor ambiente para disfrutar de cócteles y tapas.','97.000000000000000000000000000,            999.0',1,1,2,'2024-05-15 09:00:00','2024-05-24 08:28:29'),(3,'Hotel Vista Real','B34567890','Avenida Gran Vía 100',912345678,'https://hotelvistareal.es','24 horas','Experiencia de lujo y confort con las mejores vistas de la ciudad.','97.000000000000000000000000000,            999.0',1,3,3,'2024-05-15 09:00:00','2024-05-24 08:25:48'),(4,'Café de la Luz','B45678901','Calle Mayor 30',914567890,'https://cafedelaluz.es','L-D: 8:00-20:00','Café acogedor con una amplia variedad de cafés artesanales y postres.','97.000000000000000000000000000,            999.0',0,1,4,'2024-05-15 09:00:00','2024-05-15 09:00:00'),(5,'Hotel Gran Avenida','B67890123','Paseo de la Castellana 200',917890123,'https://hotelgranavenida.es','24 horas','Confort y elegancia en el centro financiero de la ciudad.','97.000000000000000000000000000,            999.0',1,3,5,'2024-05-15 09:00:00','2024-05-24 08:31:31'),(6,'Bar del Parque','B78901234','Paseo del Prado 40',918901234,'https://bardelparque.es','L-D: 12:00-2:00','Relájate con una bebida fresca en el corazón del parque.','97.000000000000000000000000000,            999.0',1,1,6,'2024-05-15 09:00:00','2024-05-24 08:31:36'),(7,'Restaurante Las Olivas','B89012345','Calle de Alcalá 100',919012345,'https://lasolivas.es','L-D: 13:00-23:00','Cocina mediterránea con un toque moderno.','97.000000000000000000000000000,            999.0',0,2,7,'2024-05-15 09:00:00','2024-05-15 09:00:00'),(8,'Hotel Mirador','B90123456','Calle de Serrano 50',920123456,'https://hotelmirador.es','24 horas','Disfruta de vistas panorámicas en un ambiente exclusivo.','97.000000000000000000000000000,            999.0',0,3,8,'2024-05-15 09:00:00','2024-05-15 09:00:00'),(9,'Bar Copas Nocturnas','B01234567','Calle de Segovia 75',921234567,'https://copasnocturnas.es','L-D: 20:00-4:00','Noches inolvidables con la mejor música y cocteles.','97.000000000000000000000000000,            999.0',0,1,9,'2024-05-15 09:00:00','2024-05-15 09:00:00'),(10,'Restaurante Mar y Tierra','B10234568','Avenida del Mar 45',922345678,'https://marytierra.es','L-D: 12:00-23:00','Descubre la fusión perfecta entre los sabores del mar y de la tierra en un ambiente único.','97.000000000000000000000000000,            999.0',0,2,10,'2024-05-15 09:00:00','2024-05-15 09:00:00'),(11,'baree julio','11103147U','qquwwut6e6ñ8j',997890013,'https://ponwElisgddeño.es',NULL,'sddddddddd','97.000000000000000000000000000,            999.0',0,1,9,'2024-05-23 13:20:03','2024-05-23 13:20:03'),(12,'baree juljtio','11105147U','q6e6ñ8j',991890013,'https://ponwwwElisgddeño.es',NULL,'sddddddddd','97.000000000000000000000000000,            999.0',0,1,11,'2024-05-24 11:55:47','2024-05-24 11:55:47'),(13,'baree fran','11102147U','q6esddaez6ñ8j',971810013,'https://ponnnwww4Elisño.es',NULL,'sddddddddd','97.000000000000000000000000000,            999.0',0,1,12,'2024-05-24 12:11:01','2024-05-24 12:11:01'),(14,'bar Ignacio','11102143U','Avenida 2',971810613,'https://barIgnacio.es','12:00 - 18:00','El mejor bar del pueblo','97.000000000000000000000000000,            999.0',0,1,13,'2024-05-26 10:30:40','2024-05-26 10:30:40'),(15,'bar Fran','11102123U','Avenida 6',970810613,'https://barFran.es','12:00 - 18:00','El mejor bar del pueblo','97.000000000000000000000000000,            999.0',0,1,12,'2024-05-27 09:12:32','2024-05-27 09:12:32'),(16,'bar Manolo','11502123U','Avenida 8',970813613,'https://barManolo.es','12:00 - 18:00','El mejor bar del pueblo','97.000000000000000000000000000,            999.0',0,1,14,'2024-05-27 15:11:24','2024-05-27 15:11:24'),(17,'bar Rute','U11502123','Avenida 84',970813653,'https://barRute.es','12:00 - 18:00','El mejor bar del pueblo','Malaga',0,1,15,'2024-05-27 19:46:42','2024-05-27 19:46:42');
/*!40000 ALTER TABLE `negocios` ENABLE KEYS */;
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

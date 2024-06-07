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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `negocios`
--

LOCK TABLES `negocios` WRITE;
/*!40000 ALTER TABLE `negocios` DISABLE KEYS */;
INSERT INTO `negocios` VALUES (1,'Hotel Mar','B99887766','Calle Mar, 4',998877665,'www.hotelmar.com','24/7','Hotel frente a la playa con actividades acuáticas','Sevilla',1,2,4,'2024-05-29 22:58:35','2024-05-29 22:58:35'),(2,'Hotel Luna','B87654321','Avenida Luna, 2',987654321,'www.hotelluna.com','24/7','Hotel acogedor en el centro de la ciudad','Barcelona',1,2,2,'2024-05-29 22:59:42','2024-05-29 22:59:42'),(3,'Hotel Estrella','B11223344','Plaza Estrella, 3',112233445,'www.hotelestrella.com','24/7','Hotel boutique con restaurante gourmet','Valencia',1,2,3,'2024-05-29 22:59:48','2024-05-29 22:59:48'),(5,'Hotel Sol','B12345678','Calle Sol, 1',123456789,'www.hotelsol.com','24/7','Hotel de lujo con vista al mar','Madrid',1,2,1,'2024-05-29 23:00:31','2024-05-29 23:00:31'),(6,'Venta el Tunel','A12345670','Calle Ejemplo 5',123456705,'https://ventaeltunel.com/',NULL,'Restaurante tradicional con especialidad en comida casera','Ciudad A',1,1,5,'2024-05-29 23:15:45','2024-05-29 23:15:45'),(7,'Puerto Leon','A12345671','Calle Ejemplo 6',123456706,'https://www.facebook.com/Puertodelleon/?locale=es_ES',NULL,'Restaurante con mariscos y vistas al puerto','Ciudad B',1,1,6,'2024-05-29 23:15:52','2024-05-29 23:15:52'),(8,'Boca Llena','A12345672','Calle Ejemplo 7',123456707,'http://bocallena.es/',NULL,'Restaurante con platos internacionales y ambiente acogedor','Ciudad C',1,1,7,'2024-05-29 23:15:56','2024-05-29 23:15:56'),(9,'Pizzería Spuntino','A12345673','Calle Ejemplo 8',123456708,'https://lospuntino.es/es/inicio/',NULL,'Pizzería con auténtica pizza italiana','Ciudad D',1,1,8,'2024-05-29 23:16:00','2024-05-29 23:16:00'),(10,'Hamburguesería El Parque','A12345674','Calle Ejemplo 9',123456709,'https://www.instagram.com/el_parque_burger_bar/?hl=es',NULL,'Hamburguesas gourmet en un ambiente relajado','Ciudad E',1,1,9,'2024-05-29 23:16:08','2024-05-29 23:16:08'),(11,'Burger Food Porn Malaga','A12345675','Calle Ejemplo 10',123456710,'https://burgerfoodporn.com/',NULL,'Hamburguesas con ingredientes premium y originales','Ciudad F',1,1,10,'2024-05-29 23:16:13','2024-05-29 23:16:13'),(12,'Mexicano Tulum','A12345676','Calle Ejemplo 11',123456711,'https://www.instagram.com/mexicanotulum/?hl=es',NULL,'Auténtica comida mexicana en un ambiente vibrante','Ciudad G',1,1,11,'2024-05-29 23:16:18','2024-05-29 23:16:18'),(13,'Tiki Restaurante','A12345677','Calle Ejemplo 12',123456712,'https://www.tikirestaurant.es/',NULL,'Restaurante temático con comida exótica','Ciudad H',1,1,12,'2024-05-29 23:16:22','2024-05-29 23:16:22'),(14,'Las Navas','A12345678','Calle Ejemplo 13',123456713,'https://www.restauranteventalasnavas.com/',NULL,'Restaurante familiar con especialidades locales','Ciudad I',1,1,13,'2024-05-29 23:16:27','2024-05-29 23:16:27');
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

-- Dump completed on 2024-06-03 22:59:13

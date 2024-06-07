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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombreUsuario` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DNI` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contraseña` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `validado` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `rol_usuario_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuarios_nombreusuario_unique` (`nombreUsuario`),
  UNIQUE KEY `usuarios_dni_unique` (`DNI`),
  UNIQUE KEY `usuarios_correo_unique` (`correo`),
  KEY `usuarios_rol_usuario_id_foreign` (`rol_usuario_id`),
  CONSTRAINT `usuarios_rol_usuario_id_foreign` FOREIGN KEY (`rol_usuario_id`) REFERENCES `roles_usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Lucas','Garcia','LucasG98','45896225X','lucasg98@example.com','$2y$12$zR8LveBcFGNjrH9rFt9fZ.6Ih3n/.QVB29njqVE/pbt8XtCJRfZfm',1,'2024-05-29 20:37:16','2024-05-29 21:20:51',NULL,2),(2,'Sofia','Martinez','SofiaM2024','49217654L','sofiam2024@gmail.com','$2y$12$sqCF4BlLcGEyx71OAP5ZSOJkt0UNyv2qeYn5Bnq80jdv4ATLsKuf2',1,'2024-05-29 20:38:50','2024-05-29 21:20:57',NULL,2),(3,'Carlos','Hernandez','CarlosH88','47793518M','carlosh88@gmail.com','$2y$12$8mRfA97O7E2lrTN2srqQM.89PckeGh6bduOdV9peGokJyouDA0osu',1,'2024-05-29 20:40:06','2024-05-29 21:21:02',NULL,2),(4,'Maria','Lopez','MariaL2024','50367129P','maria2024@gmail.com','$2y$12$o7TmXjnFZeVQm0yRl/.2Yu10PqAA0BrJlGro/5FgGX9xjKX/GZo32',1,'2024-05-29 20:41:27','2024-05-29 21:21:07',NULL,2),(5,'Juan','Alonso','JuanA94','51938476D','juan94@gmail.com','$2y$12$AOrrhPZrGeDBTKUQarRoXurXYAWdvhEQlZeB4wT.C2ELtqFBLszJW',1,'2024-05-29 20:42:45','2024-05-29 21:21:12',NULL,2),(6,'Elena','Perez','ElenaP92','53647821Q','elenap92@gmail.com','$2y$12$X9UH8u8hCyFaZGYKHfrPfuirelnJmIgQaMWrWlVI3kKapCK9QUbuK',1,'2024-05-29 20:43:30','2024-05-29 21:21:20',NULL,2),(7,'Antonio','Navarro','AntonioN84','55483965S','antonion84@gmail.com','$2y$12$KuXvBUVuVcIABGRivyUYHusUgEIsD5JFx7dZkGtFj8V8ta9qIYALW',1,'2024-05-29 20:44:08','2024-05-29 21:21:25',NULL,2),(8,'Isabel','Moreno','IsabelM89','57319204J','\'isabelm89@gmail.com','$2y$12$E6U/i0uoeUKPtLc9tjx73uUhcUOWUd4FD95z2m0tnUj0CPh069/TO',1,'2024-05-29 20:46:16','2024-05-29 21:21:31',NULL,2),(9,'David','Jimenez','DavidJ93','59145637V','\'davidj93@gmail.com','$2y$12$IlH.di7lJ1FSlXHmZSM4OOy5DtRdUAxklPnhnq9qa/ham3lEQHD9G',1,'2024-05-29 20:47:22','2024-05-29 21:21:36',NULL,2),(10,'Ana','Ruiz','AnaR97','60852941K','anar97@gmail.com','$2y$12$I03e9v/bOJHzxvPY5bhRIe5revl4y.FoMRMZRxkb1jLvWoT/Yx8eO',1,'2024-05-29 20:48:16','2024-05-29 21:21:41',NULL,2),(11,'Raul','Ramirez','Raul44','60852941X','raul23@gmail.com','$2y$12$sPsNGXiVvtK53KjUnbzkg.TGRLBqW./tteJBRZnEzyltNjv8xgmOG',1,'2024-05-29 20:49:03','2024-05-29 21:21:46',NULL,2),(12,'Adrian','Rute','Rute69','60852944D','Rute69@gmail.com','$2y$12$1QwxbHROP/qkuwxKnr1Ii.4Y0/um4DW/.2NphYd1WQh8tQT4fxY6u',1,'2024-05-29 20:50:04','2024-05-29 21:21:52',NULL,2),(13,'Javier','Barrios','Javi69','60852914D','Javi69@gmail.com','$2y$12$DmamWfikyFjWcuP4/D5OzeJNX17jERjdh0Q/iy4rqWZp5fLGfDXNO',1,'2024-05-29 20:50:38','2024-05-29 21:21:58',NULL,2),(15,'Falete','Barrios','Falete69','60152914D','JaviFalete69@gmail.com','$2y$12$TTo7QMg2URW.3EM4rjSaP.F1gSFdAMikG4PFBTzCDA354y2H1Bwm.',0,'2024-05-31 19:33:08','2024-05-31 19:33:08',NULL,2),(16,'Ignacio','Florido','igna77','77774345X','ignacio@gmail.com','$2y$12$cZUfRk.mOiSz78LShLjDvO2XvlYnj3h5tUrL66nP/e.le7FErqiIS',1,'2024-05-31 19:41:49','2024-05-31 20:01:35','2024-05-31 20:01:35',2),(17,'Juan','Barrios','Juan2000','60151914D','Juan@gmail.com','$2y$12$j5Mp8Z0JPmvejNdtr/HDSObeiTfdhcyfpD.wvypQMgMK1KTxdUgbC',1,'2024-06-02 20:14:51','2024-06-02 20:15:03',NULL,2);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-03 22:59:19

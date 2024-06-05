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
  `rol_usuario_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuarios_nombreusuario_unique` (`nombreUsuario`),
  UNIQUE KEY `usuarios_dni_unique` (`DNI`),
  UNIQUE KEY `usuarios_correo_unique` (`correo`),
  KEY `usuarios_rol_usuario_id_foreign` (`rol_usuario_id`),
  CONSTRAINT `usuarios_rol_usuario_id_foreign` FOREIGN KEY (`rol_usuario_id`) REFERENCES `roles_usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Lucas','García','LucasG98','45896225X','lucasg98@example.com','contraseña_encriptada1',0,'2024-05-15 08:00:00','2024-05-15 08:00:00',2),(2,'Sofía','Martinez','SofiaM2024','49217654L','sofiam2024@example.net','contraseña_encriptada2',0,'2024-05-15 08:00:00','2024-05-15 08:00:00',2),(3,'Carlos','Hernández','CarlosH88','47793518M','carlosh88@example.com','contraseña_encriptada3',0,'2024-05-15 08:00:00','2024-05-15 08:00:00',2),(4,'María','López','MariaL2024','50367129P','marial2024@example.org','contraseña_encriptada4',0,'2024-05-15 08:00:00','2024-05-15 08:00:00',2),(5,'Juan','Alonso','JuanA94','51938476D','juana94@example.com','contraseña_encriptada5',0,'2024-05-15 08:00:00','2024-05-15 08:00:00',2),(6,'Elena','Pérez','ElenaP92','53647821Q','elenap92@example.net','contraseña_encriptada6',0,'2024-05-15 08:00:00','2024-05-15 08:00:00',2),(7,'Antonio','Navarro','AntonioN84','55483965S','antonion84@example.com','contraseña_encriptada7',0,'2024-05-15 08:00:00','2024-05-15 08:00:00',2),(8,'Isabel','Moreno','IsabelM89','57319204J','isabelm89@example.org','contraseña_encriptada8',0,'2024-05-15 08:00:00','2024-05-15 08:00:00',2),(9,'David','Jiménez','DavidJ93','59145637V','davidj93@example.com','contraseña_encriptada9',0,'2024-05-15 08:00:00','2024-05-15 08:00:00',2),(10,'Ana','Ruiz','AnaR97','60852941K','anar97@example.net','contraseña_encriptada10',0,'2024-05-15 08:00:00','2024-05-15 08:00:00',2),(11,'pop poppo','Pop','Pop1234','00250330X','Popo@gmail.com','$2y$12$U55oupOuFyCAPeLGESJ7ZeNj.tizsRqKd/1sE1NesA.1tG4HIuFD.',1,'2024-05-24 11:22:18','2024-05-24 11:22:48',2),(12,'fran','Pop','fran1234','00210330X','fran@gmail.com','$2y$12$ZUVTNmwHSauh98aIJWnLeup3pDmwKujn8fxVpfS3Ip1FUCoNdpPZq',1,'2024-05-24 12:07:52','2024-05-24 12:08:49',2),(13,'igna','Pop','igna77','00210310X','igna@gmail.com','$2y$12$r/HHpV45F1GsqvawUxkXouSSYMvs8H94vtwzDglgdKm3l9oaHkoIO',1,'2024-05-24 14:46:33','2024-05-25 14:16:22',2),(14,'Manolo','Florido','manolito','00210300X','manolo@gmail.com','$2y$12$BSBkGWpVlT3nvCysL/GnkuUPi.SaKcN85hvKfutmdYKSxXlLzYXsm',1,'2024-05-27 15:03:50','2024-05-27 15:04:32',2),(15,'Rute','Tobar','rute1234','00200300X','rute@gmail.com','$2y$12$X3A5hldlMOVHwp58JLq7/OzTzdtYoLryF.Dh88q.2fA0FQW4gpOTe',1,'2024-05-27 19:42:16','2024-05-27 19:42:31',2),(16,'pruebaEmail','Tobar','prueba1234','00000300X','prueba@gmail.com','$2y$12$3rDptjf1WL2Bgd6Fzr4mO.VCrgWu1A4u8oWHdh6XTnhS0PzOY4c7a',0,'2024-05-29 07:38:44','2024-05-29 07:38:44',2),(17,'pruebaEmailll','Tobar','prueba12345','00000100X','prueba2@gmail.com','$2y$12$VFhW3S/52/cahKqAnfQt.OLoPoCYY1xW15d54jJ1bb5iGCtlVml.K',0,'2024-05-29 07:43:32','2024-05-29 07:43:32',2),(18,'pruebaEmaillrl','Tobar','prueba12349','00000700X','prueba5@gmail.com','$2y$12$9rucGoe01DtqthWE/mjwpOi/S/pZAPqnRBG7l69CCfXQiHVyUAT2e',0,'2024-05-29 07:51:49','2024-05-29 07:51:49',2),(19,'pruebaEmaidfl','Tobar','prueba12347','00004700X','prueba99@gmail.com','$2y$12$Y9/3izcE3JpkM04P.TnfeO1fI33qBwLqsnnyNA4oWvX2ZK7t8sFCi',0,'2024-05-29 08:06:58','2024-05-29 08:06:58',2),(20,'pruebaEmaidfql','Tobar','prueba12342','10004700X','prueba999@gmail.com','$2y$12$SIVquHN7/fQPQRAkSGTGwOg7/5Pp4mX1LfzwnRyB7..DC/1X2GyjK',0,'2024-05-29 08:08:09','2024-05-29 08:08:09',2),(21,'pruebacorreo','Tobar','prueba123472','10004709X','prueba9996@gmail.com','$2y$12$XGenMNQ/rBHYErmEcMjKtuprDwS5kRpw2Wv07Gtzcg5a0nO2Mf7Bq',0,'2024-05-29 08:09:35','2024-05-29 08:09:35',2),(22,'pruebitaxorreo','Tobar','prueba183472','10004509X','prueba9596@gmail.com','$2y$12$aolpheDjTJbqX8a3S.RYce2KnldZkKE1udYuchucN1BDXOYBfPnTm',0,'2024-05-29 08:12:04','2024-05-29 08:12:04',2),(23,'pruebitraxorreo','Tobar','prueba1833472','10001509X','prueba95496@gmail.com','$2y$12$3UB963uyDs5JALxKReMo.uU6/xISiK1mOXNDDYiCqO/aOHlbbMwxi',0,'2024-05-29 08:14:01','2024-05-29 08:14:01',2);
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

-- Dump completed on 2024-05-29 12:25:42

-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dbadeec
-- ------------------------------------------------------
-- Server version	8.1.0

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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `ds_email` varchar(255) DEFAULT NULL,
  `senha` varchar(200) NOT NULL,
  `cd_usuario` int DEFAULT NULL,
  `cd_tp_usuario` int DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `fk_user_cd_usuario` (`cd_usuario`),
  KEY `fk_user_cd_tp_usuario` (`cd_tp_usuario`),
  CONSTRAINT `fk_user_cd_tp_usuario` FOREIGN KEY (`cd_tp_usuario`) REFERENCES `tipo_usuario` (`cd_tp_usuario`),
  CONSTRAINT `fk_user_cd_usuario` FOREIGN KEY (`cd_usuario`) REFERENCES `usuarios` (`cd_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('julio@email.com','$2b$10$hJivyJfhAjXxvlSpdX3s0.Vimm/5woXjzdXt3Mzi2vqg3PR25dtGq',NULL,NULL,'2023-10-20 00:48:38','2023-10-20 00:48:38'),('julio@unochapeco.edu.br','$2b$10$JwmcEyVj8.Bumr95LwybQO83Q1ug/qwOnGG7VDHW/FgvA6LUpddHu',NULL,NULL,'2023-10-20 00:58:33','2023-10-20 00:58:33'),('lucas@email.com','$2b$10$ub5R/.qMWcGIEwpXwn7hTurOhGBIPwosqdy3i7veA14tb4HWD2.Ze',5,2,'2023-10-26 22:30:04','2023-10-26 22:30:04'),('teste@email.com','$2b$10$7r3VhzAbZcXDTboVyKTEO.tbSx3qe2sUMmHjUxhROHVtOjIn8FZ8y',6,2,'2023-10-26 22:38:29','2023-10-26 22:38:29'),('jaoisdjoasdjoa','$2b$10$pEKoGLKM.F0e3umgkweEiOLJRQXTXYzX/29I/y.w1UxeYKEGRb7WC',7,2,'2023-11-07 00:55:43','2023-11-07 00:55:43'),('juliocmp@unochapeco.edu.br','$2b$10$bzMfDoXju4yGlWHDarfiFO2Y8qTTZqA2NsSQtev25KS6AFYGls7Ly',8,1,'2023-11-23 14:30:50','2023-12-07 19:22:10'),('professor@email.com','$2b$10$jrONWaMIzifH5qZ1wKNAW.QDGoSfZimWaGw0y9JhI.3cZBBV4Qtoq',9,3,'2023-11-28 14:25:54','2023-12-07 19:21:56');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-07 19:52:10

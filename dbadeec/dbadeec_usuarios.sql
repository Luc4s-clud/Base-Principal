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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `cd_usuario` int NOT NULL AUTO_INCREMENT,
  `nm_usuario` varchar(200) DEFAULT NULL,
  `nr_cpf` varchar(200) DEFAULT NULL,
  `ds_email` varchar(200) DEFAULT NULL,
  `nr_ddd` varchar(200) DEFAULT NULL,
  `nr_telefone` varchar(200) DEFAULT NULL,
  `cd_tp_usuario` int DEFAULT NULL,
  `sn_ativo` varchar(200) DEFAULT NULL,
  `dt_cadastro` date DEFAULT NULL,
  `hr_cadastro` time DEFAULT NULL,
  PRIMARY KEY (`cd_usuario`),
  KEY `fk_usuarios_cd_tp_usuario` (`cd_tp_usuario`),
  CONSTRAINT `fk_usuarios_cd_tp_usuario` FOREIGN KEY (`cd_tp_usuario`) REFERENCES `tipo_usuario` (`cd_tp_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (5,'Lucas Rodrigues','10928946916','lucas@email.com','49','999451874',2,'S','2023-10-26','22:30:04'),(6,'Teste','12341234123','teste@email.com','49','999999999',2,'S','2023-10-26','22:38:29'),(7,'julio','0102120','jaoisdjoasdjoa','0390=19','i9i2394i2309',2,'S','2023-11-07','00:55:43'),(8,'Julio','03165904014','juliocmp@unochapeco.edu.br','49','991841301',1,'S','2023-11-23','14:30:50'),(9,'Professor','03100000010','professor@email.com','49','991841305',3,'S','2023-11-28','14:25:55');
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

-- Dump completed on 2023-12-07 19:52:11

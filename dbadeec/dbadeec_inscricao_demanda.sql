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
-- Table structure for table `inscricao_demanda`
--

DROP TABLE IF EXISTS `inscricao_demanda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inscricao_demanda` (
  `cd_demanda` int NOT NULL,
  `cd_inscricao_demanda` int NOT NULL,
  `cd_usuario` int DEFAULT NULL,
  `dt_cadastro` date DEFAULT NULL,
  `hr_cadastro` time DEFAULT NULL,
  PRIMARY KEY (`cd_demanda`,`cd_inscricao_demanda`),
  UNIQUE KEY `uk_inscricao_demanda_cd_inscricao` (`cd_inscricao_demanda`),
  UNIQUE KEY `uk_inscricao_demanda_cd_usuario` (`cd_usuario`),
  CONSTRAINT `fk_inscricao_demanda_cd_usuario` FOREIGN KEY (`cd_usuario`) REFERENCES `usuarios` (`cd_usuario`),
  CONSTRAINT `fk_inscricao_demanda_demanda` FOREIGN KEY (`cd_demanda`) REFERENCES `demanda` (`cd_demanda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inscricao_demanda`
--

LOCK TABLES `inscricao_demanda` WRITE;
/*!40000 ALTER TABLE `inscricao_demanda` DISABLE KEYS */;
/*!40000 ALTER TABLE `inscricao_demanda` ENABLE KEYS */;
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

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
-- Table structure for table `demanda`
--

DROP TABLE IF EXISTS `demanda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `demanda` (
  `cd_demanda` int NOT NULL AUTO_INCREMENT,
  `nm_demanda` varchar(200) DEFAULT NULL,
  `ds_descricao` varchar(200) DEFAULT NULL,
  `qt_horas` int DEFAULT NULL,
  `qt_vagas` int DEFAULT NULL,
  `dt_inicio` date DEFAULT NULL,
  `dt_fim` date DEFAULT NULL,
  `sn_finalizada` varchar(2) DEFAULT NULL,
  `dt_cadastro` date DEFAULT NULL,
  `hr_cadastro` time DEFAULT NULL,
  `dt_fim_inscricao` date DEFAULT NULL,
  `cd_usuario` int DEFAULT NULL,
  `cd_imagem` longblob,
  `cd_localizacao` int DEFAULT NULL,
  PRIMARY KEY (`cd_demanda`),
  KEY `fk_demanda_cd_usuario` (`cd_usuario`),
  KEY `fk_demanda_cd_localizacao` (`cd_localizacao`),
  CONSTRAINT `fk_demanda_cd_localizacao` FOREIGN KEY (`cd_localizacao`) REFERENCES `localizacao` (`cd_localizacao`),
  CONSTRAINT `fk_demanda_cd_usuario` FOREIGN KEY (`cd_usuario`) REFERENCES `usuarios` (`cd_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `demanda`
--

LOCK TABLES `demanda` WRITE;
/*!40000 ALTER TABLE `demanda` DISABLE KEYS */;
INSERT INTO `demanda` VALUES (1,'Pesquisa de Mercado','Descrição da pesquisa de mercado',20,8,'2023-11-15','2023-12-05',NULL,NULL,NULL,'2023-11-25',NULL,NULL,NULL),(9,'Projeto de Desenvolvimento Web','Descrição do projeto de desenvolvimento web',20,5,'2023-07-01','2023-12-28',NULL,NULL,NULL,NULL,NULL,'',2);
/*!40000 ALTER TABLE `demanda` ENABLE KEYS */;
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

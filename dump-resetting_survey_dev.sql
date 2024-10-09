-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: resetting_survey_dev
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `resetting_survey_dev`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `resetting_survey_dev` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `resetting_survey_dev`;

--
-- Table structure for table `Login`
--

DROP TABLE IF EXISTS `Login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Login` (
  `LoginID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Description` text DEFAULT NULL,
  PRIMARY KEY (`LoginID`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Login`
--

--LOCK TABLES `Login` WRITE;
--/*!40000 ALTER TABLE `Login` DISABLE KEYS */;
--INSERT INTO `Login` VALUES (1,'Empresa1','empresa1@gmail.com','$2y$10$TBlcDdG303G4EcN6htpHT.TPXeVJV03kXGoTXYcDfBanCdE..KQx2','Empresa de sapatos'),(2,'empresa2','empresa2@gmail.com','$2y$10$iyv00SwmG2s4jxem3OtKSetUOtbGtxpyWCVbMvGW7ArasmplEnOle','1'),(3,'Teste999','123@gmail.com','$2y$10$ma4oQXP0YDShHervwM6IGOuLP77ClVpFnMKReaaOxev/px6HNx8au','Teste 23232'),(7,'Fábrica de Argilas','argilas@gmail.com','$2y$10$3WNUwSyVIduoG3Cvn0Jc2.83/VYz9ZdLrUVvGYfO8z2Oi.PZRNXSG','Argilas Lda.'),(8,'company0515_1','company0515_1@a.pt','$2y$10$9Ctn6THofrJUbK23.nsSgutWJ2R4SYkgwtg.RYKD.pC7GAK5r8j0S','company0515_1'),(10,'company0515_2','company0515_2@a.pt','$2y$10$.3MiE3a7vypQaKM94bgiSuYRB0aTg/S0mpxhaVOiGE9yVLtye57nm','company0515_2'),(11,'Empresa3@gmaill.com','empresa3@gmail.com','$2y$10$cxOacpFJMdt0btdS1lF21Om9NnAd.cNLC56HsFQy0vxqjF9vLKEVq','Empresa3Teste'),(18,'Carlos Coutinho','carlos@a.pt','$2y$10$U51aUpsi5zdd4wBzFwEgd.A9bDi6bvkrlkzaEnEUJq8JYjZnxSjCe','Developers'),(19,'Guilherme Morais@gmail.com','uigu455@gmail.com','$2y$10$3hJGdmYjHocaJe/zat29Ge9Z0sx.7ekaPYhTW0jBJU7KtzZ8.Ib4W','teste'),(22,'Joao Piedade','jppiedade@gmail.com','$2y$10$0cbDFiMG6Sizekpm.jtqouXKQtcLarWfZNfeZ6EYfzsJyewEoaLyS','DEV'),(24,'CC-20240522','CC-20240522@a.pt','$2y$10$Vnphzd9mSQdvUi7RWy4kNORFuZZFv.pM1tlgkiNEikaY5HFEGOiLS','CC-20240522'),(27,'Joao Piedade','jpp@gmail.com','$2y$10$YLZUNkbvo/0DLZDUMJyJR.tb5KZPHPt3Mgb4j8wBTROLT0IlMWC.a',''),(28,'Manel Fonseca','fonseca.ae@gmail.com','$2y$10$Smx9A46NuS9pdWNCWx6wUeGuQuQxLFrDHrzYsRtTGEipivCnE3CJu',''),(29,'Joao Martins','jm@gmail.com','$2y$10$Hqrb5alxWkZtvmkxRoQ60OH4PhtM.M.x2sbilYGcS5/YG8ERk8uge',''),(32,'Andre Joao','andre.jjp@gmail.com','$2y$10$9tbz5oMZcqskPiBY3Jfp5uOOtxbdpQxohHJ4n5pg5jv6oDEUdwNRe',''),(34,'devResetting','dev.resetting@gmail.com','$2y$10$dW0QRfqYzX2q3N.C2.9IiuU112ghF0Mzi4STFJoY.k0oOeNtxfa92','DEV'),(35,'Dev-Empresa','dev.empresa@gmail.com','$2y$10$jYobRrXBvKVlfjB8QOi4pOlEq4LJuEzMo4oifw5B03kREBkq.CCMW','Dev'),(36,'CC-20240524','CC-20240524@a.pt','$2y$10$Jxje8tolLc54.FzOEz/e6e84sofiVHzEG2StWOms5n8jZRNNHXQ5O','CC-20240524'),(39,'cedc-20240524-1','cedc-20240524-1@a.pt','$2y$10$USDG7RG1GOxZNOP9zMzmGu7ZGqbOcGtT3UFrXLWRKQBQIRw./UVri','Comments on cedc-20240524-1'),(40,'cedc-20240524-2','cedc-20240524-2@a.pt','$2y$10$nrRkX.ROSVli.zTxPF3gPu7s.o13joRnQndShrwRcK7Im0Cwt8/vC','Comm cedc-20240524-2@a.pt');
--/*!40000 ALTER TABLE `Login` ENABLE KEYS */;
--UNLOCK TABLES;

--
-- Table structure for table `CompanyLogin`
--

DROP TABLE IF EXISTS `CompanyLogin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CompanyLogin` (
  `CompanyID` int NOT NULL,
  `LoginID` int NOT NULL,
  PRIMARY KEY (`CompanyID`,`LoginID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CompanyLogin`
--

--LOCK TABLES `CompanyLogin` WRITE;
--/*!40000 ALTER TABLE `CompanyLogin` DISABLE KEYS */;
--INSERT INTO `CompanyLogin` VALUES (2,40),(1,40);
--/*!40000 ALTER TABLE `CompanyLogin` ENABLE KEYS */;
--UNLOCK TABLES;

--
-- Table structure for table `Company`
--

DROP TABLE IF EXISTS `Company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Company` (
  `CompanyID` int NOT NULL AUTO_INCREMENT,
  `CompanyName` varchar(255) NOT NULL,
  `CompanyDescription` text DEFAULT NULL,
  `ReferenceYear` int DEFAULT NULL,
  `EmployeesNumber` int DEFAULT NULL,
  `FemaleEmployeesPercentage` int DEFAULT NULL,
  `FemaleAverageSalary` float DEFAULT NULL,
  `MaleAverageSalary` float DEFAULT NULL,
  `FemaleHighestSalary` float DEFAULT NULL,
  `MaleHighestSalary` float DEFAULT NULL,
  `FemaleHighestSalaryDuties` text DEFAULT NULL,
  `MaleHighestSalaryDuties` text DEFAULT NULL,
  `FemaleLowestSalary` float DEFAULT NULL,
  `MaleLowestSalary` float DEFAULT NULL,
  `FemaleLowestSalaryDuties` text DEFAULT NULL,
  `MaleLowestSalaryDuties` text DEFAULT NULL,
  `ForeignEmployeesPercentage` int DEFAULT NULL,
  `ForeignAverageSalary` float DEFAULT NULL,
  `NationalAverageSalary` float DEFAULT NULL,
  `ForeignHighestSalary` float DEFAULT NULL,
  `NationalHighestSalary` float DEFAULT NULL,
  `ForeignHighestSalaryDuties` text DEFAULT NULL,
  `NationalHighestSalaryDuties` text DEFAULT NULL,
  `ForeignLowestSalary` float DEFAULT NULL,
  `NationalLowestSalary` float DEFAULT NULL,
  `ForeignLowestSalaryDuties` text DEFAULT NULL,
  `NationalLowestSalaryDuties` text DEFAULT NULL,
  `EmployeeWeeklyWorkHoursAverage` int DEFAULT NULL,
  `FemaleWeeklyWorkHoursAverage` int DEFAULT NULL,
  `MaleWeeklyWorkHoursAverage` int DEFAULT NULL,
  `ForeignWeeklyWorkHoursAverage` int DEFAULT NULL,
  `NationalWeeklyWorkHoursAverage` int DEFAULT NULL,
  `HealthcareSystemEmployeesPercentage` int DEFAULT NULL,
  `HealthcareSystemName` varchar(255) DEFAULT NULL,
  `HealthcareSystemProvider` varchar(255) DEFAULT NULL,
  `HealthcareSystemDescription` text DEFAULT NULL,
  `EducationNonePercentage` int DEFAULT NULL,
  `EducationPrimaryPercentage` int DEFAULT NULL,
  `EducationSecondaryPercentage` int DEFAULT NULL,
  `EducationVocationalPercentage` int DEFAULT NULL,
  `EducationBScPercentage` int DEFAULT NULL,
  `EducationMScPercentage` int DEFAULT NULL,
  `EducationPhDPercentage` int DEFAULT NULL,
  `EducationPostDocPercentage` int DEFAULT NULL,
  `SocialSecurityEmployeesPercentage` int DEFAULT NULL,
  `EnvironmentalSystem` int DEFAULT NULL,
  `EnvironmentalSystemStandards` text DEFAULT NULL,
  `EnvironmentalSupplierSelectionCriteria` varchar(255) DEFAULT NULL,
  `EnvironmentalSupplierSelectionWeight` int DEFAULT NULL,
  `EnvironmentalOtherComments` text DEFAULT NULL,
  PRIMARY KEY (`CompanyID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Company`
--

--LOCK TABLES `Company` WRITE;
--/*!40000 ALTER TABLE `Company` DISABLE KEYS */;
--INSERT INTO `Company` VALUES (1,'Empresa1','Empresa de sapatos',2020,'Sapatos/24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','',NULL,NULL,'','',NULL,NULL,NULL,NULL,NULL,NULL,'','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,'',NULL,NULL,0,'',NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'Empresa2','Empresa de sapatos',2022,'Sapatos/24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','',NULL,NULL,'','',NULL,NULL,NULL,NULL,NULL,NULL,'','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,'',NULL,NULL,0,'',NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'Amem','Teste',2020,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','',NULL,NULL,'','',NULL,NULL,NULL,NULL,NULL,NULL,'','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'Yes',NULL,NULL,0,'',NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'Teste20/05','20/05',2019,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','',NULL,NULL,'','',NULL,NULL,NULL,NULL,NULL,NULL,'','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'Yes',NULL,NULL,0,'',NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'teste',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,'NovaCompanhia',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
--/*!40000 ALTER TABLE `Company` ENABLE KEYS */;
--UNLOCK TABLES;

--
-- Table structure for table `Experience`
--

DROP TABLE IF EXISTS `Experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Experience` (
  `ExperienceID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Description` text DEFAULT NULL,
  PRIMARY KEY (`ExperienceID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Experience`
--

--LOCK TABLES `Experience` WRITE;
--/*!40000 ALTER TABLE `Experience` DISABLE KEYS */;
--/*!40000 ALTER TABLE `Experience` ENABLE KEYS */;
--UNLOCK TABLES;

--
-- Table structure for table `CompanyExperience`
--

DROP TABLE IF EXISTS `CompanyExperience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CompanyExperience` (
  `CompanyID` int NOT NULL,
  `ExperienceID` int NOT NULL,
  `CompanyBusinessVolumePercentage` float DEFAULT NULL,
  PRIMARY KEY (`CompanyID`,`ExperienceID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CompanyExperience`
--

--LOCK TABLES `CompanyExperience` WRITE;
--/*!40000 ALTER TABLE `CompanyExperience` DISABLE KEYS */;
--/*!40000 ALTER TABLE `CompanyExperience` ENABLE KEYS */;
--UNLOCK TABLES;

--
-- Table structure for table `ElectricityGenerationType`
--

DROP TABLE IF EXISTS `ElectricityGenerationType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ElectricityGenerationType` (
  `ElctricityGenerationTypeID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`ElctricityGenerationTypeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ElectricityGenerationType`
--

-- LOCK TABLES `ElectricityGenerationType` WRITE;
-- /*!40000 ALTER TABLE `ElectricityGenerationType` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `ElectricityGenerationType` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `ElectricityGeneration`
--

DROP TABLE IF EXISTS `ElectricityGeneration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ElectricityGeneration` (
  `CompanyID` int NOT NULL,
  `ElectricityGenerationTypeID` int NOT NULL,
  `AmountProduced` float DEFAULT NULL,
  `AmountSelfConsumed` int NOT NULL,
  `DestinationRemaining` int NOT NULL,
  PRIMARY KEY (`CompanyID`,`ElectricityGenerationTypeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ElectricityGeneration`
--

--LOCK TABLES `ElectricityGeneration` WRITE;
--/*!40000 ALTER TABLE `ElectricityGeneration` DISABLE KEYS */;
--/*!40000 ALTER TABLE `ElectricityGeneration` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `ElectricityService`
--

DROP TABLE IF EXISTS `ElectricityService`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ElectricityService` (
  `ElectricityServiceID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`ElectricityServiceID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ElectricityService`
--

-- LOCK TABLES `ElectricityService` WRITE;
-- /*!40000 ALTER TABLE `ElectricityService` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `ElectricityService` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `ElectricityMeterService`
--

DROP TABLE IF EXISTS `ElectricityMeterService`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ElectricityMeterService` (
  `ElectricityMeterID` int NOT NULL AUTO_INCREMENT,
  `ElectricityServiceID` int NOT NULL,
  PRIMARY KEY (`ElectricityMeterID`,`ElectricityServiceID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ElectricityMeterService`
--

-- LOCK TABLES `ElectricityMeterService` WRITE;
-- /*!40000 ALTER TABLE `ElectricityMeterService` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `ElectricityMeterService` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `ElectricityMeterType`
--

DROP TABLE IF EXISTS `ElectricityMeterType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ElectricityMeterType` (
  `ElectricityMeterTypeID` int NOT NULL,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`ElectricityMeterTypeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ElectricityMeterType`
--

-- LOCK TABLES `ElectricityMeterType` WRITE;
-- /*!40000 ALTER TABLE `ElectricityMeterType` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `ElectricityMeterType` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `ElectricityMeter`
--

DROP TABLE IF EXISTS `ElectricityMeter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ElectricityMeter` (
  `ElectricityMeterID` int NOT NULL AUTO_INCREMENT,
  `CompanyID` int NOT NULL,
  `ElectricityMeterTypeID` int NOT NULL,
  `Amount` int NOT NULL,
  PRIMARY KEY (`ElectricityMeterID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ElectricityMeter`
--

-- LOCK TABLES `ElectricityMeter` WRITE;
-- /*!40000 ALTER TABLE `ElectricityMeter` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `ElectricityMeter` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `EnergyGeneration`
--

DROP TABLE IF EXISTS `EnergyGeneration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EnergyGeneration` (
  `CompanyID` int NOT NULL,
  `EnergyGenerationTypeID` int NOT NULL,
  `AmountProduced` float DEFAULT NULL,
  `AmountSelfConsumed` float DEFAULT NULL,
  `DestinationRemaining` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`CompanyID`,`EnergyGenerationTypeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EnergyGeneration`
--

-- LOCK TABLES `EnergyGeneration` WRITE;
-- /*!40000 ALTER TABLE `EnergyGeneration` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `EnergyGeneration` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `EnergyGenerationType`
--

DROP TABLE IF EXISTS `EnergyGenerationType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EnergyGenerationType` (
  `EnergyGenerationTypeID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`EnergyGenerationTypeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EnergyGenerationType`
--

-- LOCK TABLES `EnergyGenerationType` WRITE;
-- /*!40000 ALTER TABLE `EnergyGenerationType` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `EnergyGenerationType` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `EnvironmentalSystemEvidence`
--

-- DROP TABLE IF EXISTS `EnvironmentalSystemEvidence`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `EnvironmentalSystemEvidence` (
--   `CompanyID` int NOT NULL,
--   `EvidenceFile` varchar(255) NOT NULL,
--   PRIMARY KEY (`CompanyID`,`EvidenceFile`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EnvironmentalSystemEvidence`
--

-- LOCK TABLES `EnvironmentalSystemEvidence` WRITE;
-- /*!40000 ALTER TABLE `EnvironmentalSystemEvidence` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `EnvironmentalSystemEvidence` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `FossilFuel`
--

DROP TABLE IF EXISTS `FossilFuel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FossilFuel` (
  `FossilFuelID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Unit` varchar(50) NOT NULL,
  PRIMARY KEY (`FossilFuelID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FossilFuel`
--

-- LOCK TABLES `FossilFuel` WRITE;
-- /*!40000 ALTER TABLE `FossilFuel` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `FossilFuel` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `FossilFuelConsumption`
--

DROP TABLE IF EXISTS `FossilFuelConsumption`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FossilFuelConsumption` (
  `CompanyID` int NOT NULL,
  `FossilFuelID` int NOT NULL,
  `Amount` float DEFAULT NULL,
  PRIMARY KEY (`CompanyID`,`FossilFuelID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FossilFuelConsumption`
--

-- LOCK TABLES `FossilFuelConsumption` WRITE;
-- /*!40000 ALTER TABLE `FossilFuelConsumption` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `FossilFuelConsumption` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `InstallationsTemperature`
--

DROP TABLE IF EXISTS `InstallationsTemperature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `InstallationsTemperature` (
  `InstallationsTemperatureID` int NOT NULL AUTO_INCREMENT,
  `CompanyID` int NOT NULL,
  `TemperatureTypeID` int NOT NULL,
  `Amount` float DEFAULT NULL,
  `TemperatureUsageID` int NOT NULL,
  PRIMARY KEY (`InstallationsTemperatureID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `InstallationsTemperature`
--

-- LOCK TABLES `InstallationsTemperature` WRITE;
-- /*!40000 ALTER TABLE `InstallationsTemperature` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `InstallationsTemperature` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `TemperatureType`
--

DROP TABLE IF EXISTS `TemperatureType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TemperatureType` (
  `TemperatureTypeID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`TemperatureTypeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TemperatureType`
--

-- LOCK TABLES `TemperatureType` WRITE;
-- /*!40000 ALTER TABLE `TemperatureType` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `TemperatureType` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `TemperatureUsage`
--

DROP TABLE IF EXISTS `TemperatureUsage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TemperatureUsage` (
  `TemperatureUsageID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`TemperatureUsageID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TemperatureUsage`
--

-- LOCK TABLES `TemperatureUsage` WRITE;
-- /*!40000 ALTER TABLE `TemperatureUsage` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `TemperatureUsage` ENABLE KEYS */;
-- UNLOCK TABLES;
-- /*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-02 21:03:38

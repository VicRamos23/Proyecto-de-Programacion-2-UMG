-- Script compatible con MySQL 8.0 para el proyecto de Física II
DROP DATABASE IF EXISTS `levitador_magnetico`;
CREATE DATABASE `levitador_magnetico`;
USE `levitador_magnetico`;


CREATE TABLE `resultados` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL,
  `posicion_mm` FLOAT NOT NULL,
  `estabilidad` FLOAT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-01 09:00:00', 10.237, 0.097);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-01 21:00:00', 10.156, 0.019);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-02 09:00:00', 10.326, 0.132);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-02 21:00:00', 9.494, 0.049);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-03 09:00:00', 10.383, 0.191);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-03 21:00:00', 9.333, 0.072);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-04 09:00:00', 10.852, 0.119);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-04 21:00:00', 10.121, 0.108);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-05 09:00:00', 9.045, 0.171);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-05 21:00:00', 10.763, 0.15);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-06 09:00:00', 9.777, 0.186);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-06 21:00:00', 10.546, 0.127);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-07 09:00:00', 10.35, 0.122);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-07 21:00:00', 9.772, 0.196);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-08 09:00:00', 9.279, 0.116);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-08 21:00:00', 9.192, 0.148);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-09 09:00:00', 10.421, 0.149);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-09 21:00:00', 9.793, 0.061);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-10 09:00:00', 10.335, 0.113);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-10 21:00:00', 9.625, 0.052);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-11 09:00:00', 10.133, 0.053);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-11 21:00:00', 10.156, 0.112);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-12 09:00:00', 9.499, 0.123);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-12 21:00:00', 9.639, 0.127);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-13 09:00:00', 9.701, 0.121);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-13 21:00:00', 10.243, 0.105);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-14 09:00:00', 9.775, 0.146);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-14 21:00:00', 11.234, 0.172);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-15 09:00:00', 10.302, 0.037);
INSERT INTO `resultados` (`fecha`, `posicion_mm`, `estabilidad`) VALUES ('2025-10-15 21:00:00', 10.116, 0.052);

-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 02-Nov-2020 às 01:54
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--
CREATE DATABASE IF NOT EXISTS `fseletro` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `fseletro`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE IF NOT EXISTS `comentarios` (
  `idcomentarios` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `comentario` varchar(300) NOT NULL,
  `data` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idcomentarios`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`idcomentarios`, `nome`, `comentario`, `data`) VALUES
(2, 'Enzo', 'Esta é uma mensagem de teste', '2020-11-01 01:56:52'),
(3, 'João', 'Este é outro teste', '2020-11-01 01:57:42'),
(4, 'Zé', 'Outro teste', '2020-11-01 01:57:52'),
(5, 'Pedro', 'Mais um teste', '2020-11-01 01:58:44'),
(6, 'Pedro', 'Mais um teste', '2020-11-01 01:58:56'),
(7, 'Oristes', 'Teste', '2020-11-01 01:59:07'),
(22, '', '', '2020-11-01 20:10:28'),
(21, 'Elias', 'Testando', '2020-11-01 02:20:21');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id_pedido` int(11) NOT NULL AUTO_INCREMENT,
  `nome_cliente` varchar(45) CHARACTER SET latin1 NOT NULL,
  `endereco_cliente` varchar(100) CHARACTER SET latin1 NOT NULL,
  `telefone_cliente` varchar(20) CHARACTER SET latin1 NOT NULL,
  `nome_produto` varchar(200) CHARACTER SET latin1 NOT NULL,
  `valor_unitario` decimal(8,2) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `valor_total` decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (`id_pedido`),
  KEY `pk_pedido_produto_idx` (`nome_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `nome_cliente`, `endereco_cliente`, `telefone_cliente`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`) VALUES
(1, 'Enzo', 'Rua João Sem Braço, 281', '11911111111', 'Geladeira Frost-Free', '2599.00', 1, '2599.00'),
(2, 'João', 'Rua Pio IX,855', '16922222222', 'Microondas Samsung', '1000.00', 3, '3000.00'),
(9, 'Pedro', 'Rua Flor De Lis, 333', '21933333333', 'Fogão Dako', '1500.00', 2, '3000.00'),
(10, 'Rafael', 'Rua do Beco, 519', '61944444444', 'Lava-louças Brastemp', '2000.00', 1, '2000.00'),
(11, 'Antônio', 'Rua das Flores, 668', '19955555555', 'Fogão Continental', '2500.00', 1, '2500.00'),
(12, 'Enzo', 'Rua do Teste,211', '111111111111', 'Geladeira Samsung Inverter Frost Free Duplex Inverse BAROSA com Smart Sensor e Rack para Vinho', '5019.00', 2, '10038.00'),
(13, 'Enzo', 'Rua do Teste,211', '111111111111', 'Geladeira Samsung Inverter Frost Free Duplex Inverse BAROSA com Smart Sensor e Rack para Vinho', '5019.00', 2, '10038.00'),
(14, 'Enzo', 'Rua do Teste,211', '111111111111', 'Geladeira Samsung Inverter Frost Free Duplex Inverse BAROSA com Smart Sensor e Rack para Vinho', '5019.00', 2, '10038.00'),
(15, 'Enzo', 'Outra rua,744', '22222222222', 'Fogão de Piso Electrolux de 05 Bocas com Mesa de Vidro e Queimadores Tripla Chama Preto - 76GS ', '1699.00', 5, '8495.00'),
(16, 'Enzo', 'Outra rua,744', '22222222222', 'Fogão de Piso Electrolux de 05 Bocas com Mesa de Vidro e Queimadores Tripla Chama Preto - 76GS ', '1699.00', 5, '8495.00'),
(17, 'Enzo', 'Mais uma rua,744', '22222222222', 'Fogão de Piso Electrolux de 05 Bocas com Mesa de Vidro e Queimadores Tripla Chama Preto - 76GS ', '1699.00', 5, '8495.00'),
(18, 'Zé', 'Alguma rua', '111111111111', 'Lavadora de Roupas Electrolux 16kg Branca com 12 Programas de', '1699.00', 5, '8495.00'),
(19, 'Vikk', 'Rua qualquer', '55555555555', 'Fogão 5 Bocas Electrolux Prata Automático com Mesa de Vidro e 2 Fornos', '3799.00', 2, '7598.00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `idproduto` int(11) NOT NULL AUTO_INCREMENT,
  `nome_produto` varchar(200) CHARACTER SET latin1 NOT NULL,
  `descricao` varchar(300) CHARACTER SET latin1 DEFAULT NULL,
  `preco` decimal(8,2) NOT NULL,
  `imagem` varchar(250) CHARACTER SET latin1 NOT NULL,
  `categoria` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `preco_original` decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (`idproduto`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`idproduto`, `nome_produto`, `descricao`, `preco`, `imagem`, `categoria`, `preco_original`) VALUES
(4, 'Refrigerador LG Frost Free Side by Side InstaView Door-in-Door – 601L ', NULL, '16999.00', './imagens/LGeladeira.webp', 'geladeira', '20199.00'),
(5, 'Geladeira Samsung Inverter Frost Free Duplex Inverse BAROSA com Smart Sensor e Rack para Vinho', NULL, '5019.00', './imagens/Samsung Digital inverter.webp', 'geladeira', '6389.00'),
(6, 'Fogão de Piso Electrolux de 05 Bocas com Mesa de Vidro e Queimadores Tripla Chama Preto - 76GS ', NULL, '1699.00', './imagens/Fogão2.jpg', 'fogao', '2419.00'),
(7, 'Micro-ondas LG 30L Solo com Grill MH7097AR - Preto', NULL, '699.00', './imagens/microondas1.jpg', 'microondas', '799.00'),
(8, 'Lava Louças 14 Serviços Brastemp com Ciclo Pesado - BLF14AR ', NULL, '3599.00', './imagens/louça1.webp', 'lavaloucas', '5199.00'),
(9, 'Geladeira Samsung Inverter Frost Free Duplex Inverse BAROSA com Smart Sensor', NULL, '4999.00', './imagens/samsung inverse barosa.webp', 'geladeira', '6299.00'),
(10, 'Fogão 5 Bocas Electrolux Prata Automático com Mesa de Vidro e 2 Fornos', NULL, '3799.00', './imagens/FogãoElectrolux.webp', 'fogao', '3899.00'),
(11, 'Micro-ondas Brastemp Espelhado 32 Litros - BMS45 220v', NULL, '699.00', './imagens/microondas2.jpg', 'microondas', '899.00'),
(12, 'Micro-Ondas de Embutir com Função Grill e Painel Blue Touch', NULL, '2699.00', './imagens/microondas3.png', 'microondas', '3999.00'),
(13, 'Lavadora de Roupas Electrolux 16kg Branca com 12 Programas de', NULL, '1699.00', './imagens/lavadora1.jpg', 'lavadora', '2199.00'),
(14, 'Lava e Seca Samsung 11kg WD11M4453J - 12 Programas de Lavagem', NULL, '3699.00', './imagens/lavadora2.jpg', 'lavadora', '4099.00'),
(15, 'Lava Louças Inox 10 Serviços (LV10X) - 220V', NULL, '3499.00', './imagens/Dishwasher_LV10X_Front.webp', 'lavaloucas', '4199.00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

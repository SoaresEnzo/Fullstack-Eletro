-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 04-Dez-2020 às 23:27
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
-- Estrutura da tabela `estados`
--

DROP TABLE IF EXISTS `estados`;
CREATE TABLE IF NOT EXISTS `estados` (
  `idestado` int(11) NOT NULL AUTO_INCREMENT,
  `nome_estado` varchar(45) NOT NULL,
  PRIMARY KEY (`idestado`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `estados`
--

INSERT INTO `estados` (`idestado`, `nome_estado`) VALUES
(1, 'Acre'),
(2, 'Alagoas'),
(3, 'Amapá'),
(4, 'Amazonas'),
(5, 'Bahia'),
(6, 'Ceará'),
(7, 'Distrito Federal'),
(8, 'Espírito Santo'),
(9, 'Goiás'),
(10, 'Maranhão'),
(11, 'Mato Grosso'),
(12, 'Mato Grosso do Sul'),
(13, 'Minas Gerais'),
(14, 'Pará'),
(15, 'Paraíba'),
(16, 'Paraná'),
(17, 'Pernambuco'),
(18, 'Piauí'),
(19, 'Rio de Janeiro'),
(20, 'Rio Grande do Sul'),
(21, 'Rondônia'),
(22, 'Roraima'),
(23, 'Santa Catarina'),
(24, 'São Paulo'),
(25, 'Sergipe'),
(26, 'Tocantins'),
(27, 'Rio Grande do Norte');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id_pedido` int(11) NOT NULL AUTO_INCREMENT,
  `nome_cliente` varchar(45) CHARACTER SET latin1 NOT NULL,
  `estado_endereco` int(11) DEFAULT NULL,
  `bairro_endereco` varchar(45) DEFAULT NULL,
  `logradouro_endereco` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `numero_endereco` varchar(45) DEFAULT NULL,
  `cidade_endereco` varchar(45) DEFAULT NULL,
  `telefone_cliente` varchar(20) CHARACTER SET latin1 NOT NULL,
  `quantidade` int(11) NOT NULL,
  `data_pedido` datetime DEFAULT CURRENT_TIMESTAMP,
  `fk_produto` int(11) NOT NULL,
  `cpf_cliente` bigint(12) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_pedido`),
  KEY `fk_pedido_produto_idx` (`fk_produto`),
  KEY `fk_pedido_estado_idx` (`estado_endereco`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `nome_cliente`, `estado_endereco`, `bairro_endereco`, `logradouro_endereco`, `numero_endereco`, `cidade_endereco`, `telefone_cliente`, `quantidade`, `data_pedido`, `fk_produto`, `cpf_cliente`) VALUES
(1, 'Enzo', 2, 'Jardim X', 'Rua João Sem Braço', '01', 'Cidade Teste', '11911111111', 1, '1000-01-01 00:00:00', 6, 11111111111),
(2, 'João', 7, 'Jardim Y', 'Rua Pio IX', '02', 'Cidade Teste', '16922222222', 3, '1000-01-01 00:00:00', 9, 22222222222),
(9, 'Pedro', 7, 'Jardim Z', 'Rua Flor De Lis', '01', 'Cidade Teste', '21933333333', 2, '1000-01-01 00:00:00', 5, 33333333333),
(10, 'Rafael', 5, 'Boa Vista', 'Rua do Beco', '03', 'Cidade Teste', '61944444444', 1, '1000-01-01 00:00:00', 5, 44444444444),
(11, 'Antônio', 7, 'Campo Limpo', 'Rua das Flores', '252', 'Cidade Teste', '19955555555', 1, '1000-01-01 00:00:00', 4, 55555555555),
(12, 'Enzo', 8, 'Campos Elíseos', 'Rua do Teste', '2678', 'Cidade Teste', '111111111111', 2, '1000-01-01 00:00:00', 11, 66666666666),
(13, 'Enzo', 8, 'Campo de Teste', 'Rua do Teste', '155', 'Cidade Placeholder', '111111111111', 2, '1000-01-01 00:00:00', 6, 77777777777),
(14, 'Enzo', 6, 'Jardim dos Erros', 'Rua do Teste', '214', 'Cidade Placeholder', '111111111111', 2, '1000-01-01 00:00:00', 14, 88888888888),
(15, 'Enzo', 8, 'Praça dos Bugs', 'Outra rua', '404', 'Cidade Placeholder', '22222222222', 5, '1000-01-01 00:00:00', 5, 99999999999),
(16, 'Enzo', 7, 'Bosque dos Perdidos', 'Outra rua', '502', 'Cidade Placeholder', '22222222222', 5, '1000-01-01 00:00:00', 13, 10101010101),
(17, 'Enzo', 2, 'Rio Escuro', 'Mais uma rua', '111', 'Cidade Placeholder', '22222222222', 5, '1000-01-01 00:00:00', 9, 11101010101),
(18, 'Zé', 5, 'Rio X', 'Alguma rua', '235', 'Cidade Placeholder', '111111111111', 5, '1000-01-01 00:00:00', 8, 11011010101),
(19, 'Vikk', 1, 'Rio Z', 'Rua qualquer', '212', 'Cidade Placeholder', '55555555555', 2, '1000-01-01 00:00:00', 10, 11110101001);

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
(4, 'Refrigerador LG Frost Free Side by Side InstaView Door-in-Door – 601L ', NULL, '16999.00', 'LGeladeira.webp', 'geladeira', '20199.00'),
(5, 'Geladeira Samsung Inverter Frost Free Duplex Inverse BAROSA com Smart Sensor e Rack para Vinho', NULL, '5019.00', 'Samsung Digital inverter.webp', 'geladeira', '6389.00'),
(6, 'Fogão de Piso Electrolux de 05 Bocas com Mesa de Vidro e Queimadores Tripla Chama Preto - 76GS ', NULL, '1699.00', 'Fogão2.jpg', 'fogao', '2419.00'),
(7, 'Micro-ondas LG 30L Solo com Grill MH7097AR - Preto', NULL, '699.00', 'microondas1.jpg', 'microondas', '799.00'),
(8, 'Lava Louças 14 Serviços Brastemp com Ciclo Pesado - BLF14AR ', NULL, '3599.00', 'louça1.webp', 'lavaloucas', '5199.00'),
(9, 'Geladeira Samsung Inverter Frost Free Duplex Inverse BAROSA com Smart Sensor', NULL, '4999.00', 'samsung inverse barosa.webp', 'geladeira', '6299.00'),
(10, 'Fogão 5 Bocas Electrolux Prata Automático com Mesa de Vidro e 2 Fornos', NULL, '3799.00', 'FogãoElectrolux.webp', 'fogao', '3899.00'),
(11, 'Micro-ondas Brastemp Espelhado 32 Litros - BMS45 220v', NULL, '699.00', 'microondas2.jpg', 'microondas', '899.00'),
(12, 'Micro-Ondas de Embutir com Função Grill e Painel Blue Touch', NULL, '2699.00', 'microondas3.png', 'microondas', '3999.00'),
(13, 'Lavadora de Roupas Electrolux 16kg Branca com 12 Programas de', NULL, '1699.00', 'lavadora1.jpg', 'lavadora', '2199.00'),
(14, 'Lava e Seca Samsung 11kg WD11M4453J - 12 Programas de Lavagem', NULL, '3699.00', 'lavadora2.jpg', 'lavadora', '4099.00'),
(15, 'Lava Louças Inox 10 Serviços (LV10X) - 220V', NULL, '3499.00', 'Dishwasher_LV10X_Front.webp', 'lavaloucas', '4199.00');

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `fk_pedido_produto` FOREIGN KEY (`fk_produto`) REFERENCES `produtos` (`idproduto`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Mar 05 Décembre 2023 à 15:14
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `bibliotheque`
--

-- --------------------------------------------------------

--
-- Structure de la table `adherents`
--

CREATE TABLE IF NOT EXISTS `adherents` (
  `Id_Adherent` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(50) NOT NULL,
  `Prenom` varchar(50) NOT NULL,
  `Date_naissance` date NOT NULL,
  `Date_adhesion` date NOT NULL,
  `Adresse` varchar(50) NOT NULL,
  `Num_tel` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  PRIMARY KEY (`Id_Adherent`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `adherents`
--

INSERT INTO `adherents` (`Id_Adherent`, `Nom`, `Prenom`, `Date_naissance`, `Date_adhesion`, `Adresse`, `Num_tel`, `mail`) VALUES
(1, 'yami', 'Isami', '2000-09-18', '2011-09-10', '*********', '*********', '*********'),
(2, 'yami', 'sukehiro', '2004-05-04', '2007-06-01', '********', '********', '********'),
(3, 'silva', 'noelle', '2000-09-18', '2011-09-10', '*********', '*********', '*********');

-- --------------------------------------------------------

--
-- Structure de la table `auteur`
--

CREATE TABLE IF NOT EXISTS `auteur` (
  `Id_Auteur` varchar(50) NOT NULL,
  `Nom` varchar(50) NOT NULL,
  `Prenom` varchar(50) NOT NULL,
  `Date_naissance` date NOT NULL,
  PRIMARY KEY (`Id_Auteur`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `auteur`
--

INSERT INTO `auteur` (`Id_Auteur`, `Nom`, `Prenom`, `Date_naissance`) VALUES
('1', 'Light', 'Yagami', '1986-02-28'),
('2', 'Roan', 'Kishibe', '1978-11-20'),
('3', 'Dasai', 'Osamu', '1978-06-20');

-- --------------------------------------------------------

--
-- Structure de la table `emprunt`
--

CREATE TABLE IF NOT EXISTS `emprunt` (
  `#Id_Adherent` int(11) NOT NULL,
  `#Reference_livre` varchar(50) NOT NULL,
  `Duree` int(11) NOT NULL,
  `Date_emprunt` date NOT NULL,
  `Id_emprunt` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`Id_emprunt`),
  KEY `#Id_Adherent` (`#Id_Adherent`),
  KEY `#Reference_livre` (`#Reference_livre`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `emprunt`
--

INSERT INTO `emprunt` (`#Id_Adherent`, `#Reference_livre`, `Duree`, `Date_emprunt`, `Id_emprunt`) VALUES
(3, 'grimoire d''eau ', 0, '2017-12-06', 1),
(2, 'Grimoire des Tenebre ', 0, '2017-12-06', 2),
(3, 'Death note ', 0, '2017-12-06', 3);

-- --------------------------------------------------------

--
-- Structure de la table `livres`
--

CREATE TABLE IF NOT EXISTS `livres` (
  `Reference_livre` varchar(50) NOT NULL,
  `Nbre_pages` int(11) NOT NULL,
  `Nbre_emprunts` int(11) NOT NULL,
  `Nbre_exemplaire` int(11) NOT NULL,
  `# ID_Auteur` varchar(50) NOT NULL,
  `Date_publication` date NOT NULL,
  `Genre` varchar(50) NOT NULL,
  `Disponibilité` tinyint(1) NOT NULL,
  `Etat` varchar(50) NOT NULL,
  PRIMARY KEY (`Reference_livre`),
  KEY `# ID_Auteur` (`# ID_Auteur`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `livres`
--

INSERT INTO `livres` (`Reference_livre`, `Nbre_pages`, `Nbre_emprunts`, `Nbre_exemplaire`, `# ID_Auteur`, `Date_publication`, `Genre`, `Disponibilité`, `Etat`) VALUES
('Death note ', 100, 0, 1, '1', '1932-03-04', 'horreur', 1, 'mauvais etat '),
('grimoire d''eau ', 50, 0, 1, '3', '1932-03-04', 'horreur', 1, 'mauvais etat '),
('Grimoire des Tenebre ', 50, 0, 1, '2', '2023-12-03', 'mystere', 1, 'bon etat ');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `emprunt`
--
ALTER TABLE `emprunt`
  ADD CONSTRAINT `emprunt_ibfk_2` FOREIGN KEY (`#Reference_livre`) REFERENCES `livres` (`Reference_livre`),
  ADD CONSTRAINT `emprunt_ibfk_1` FOREIGN KEY (`#Id_Adherent`) REFERENCES `adherents` (`Id_Adherent`);

--
-- Contraintes pour la table `livres`
--
ALTER TABLE `livres`
  ADD CONSTRAINT `livres_ibfk_1` FOREIGN KEY (`# ID_Auteur`) REFERENCES `auteur` (`Id_Auteur`);

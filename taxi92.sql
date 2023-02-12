-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 08 fév. 2023 à 13:18
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `taxi92`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `image`) VALUES
(11, 'Langue Anglais', '<div>Anglais</div>', NULL),
(12, 'Langue Espagnole', '<div>Espagnole</div>', NULL),
(13, 'Electrique', '<div>Électrique</div>', NULL),
(14, 'Break', '<div>Break</div>', NULL),
(15, 'Siége Bébé', '<div>Siége Bébé</div>', NULL),
(16, 'Hybride', '<div>hybride</div>', NULL),
(17, 'Van', '<div>Van</div>', NULL),
(18, 'VIP', '<div>VIP</div>', NULL),
(19, 'Rehausseur', '<div>Rehausseur</div>', NULL),
(20, 'Porte Vélo', '<div>Porte Vélo</div>', NULL),
(21, 'Langue Arabe', '<div>Langue Arabe</div>', NULL),
(22, 'CPAM', '<div>CPAM</div>', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `is_read` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `phone`, `subject`, `content`, `created_at`, `is_read`) VALUES
(1, 'SARRA Zemni épouse KASSAS', 'sarraraouf@hotmail.com', '0652790339', 'kjkjnkjbk', 'gfcgjcncvcncnv', '2023-02-02 01:37:56', NULL),
(2, 'SARRA Zemni épouse KASSAS', 'sarraraouf@hotmail.com', '0652790339', 'kjkjnkjbk', 'gfcgjcncvcncnv', '2023-02-02 01:39:34', NULL),
(3, 'SARRA Zemni épouse KASSAS', 'sarraraouf@hotmail.com', '0652790339', 'kjkjnkjbk', 'gfcgjcncvcncnv', '2023-02-02 01:39:54', NULL),
(4, 'SARRA Zemni épouse KASSAS', 'sarraraouf@hotmail.com', '0652790339', 'kjkjnkjbk', 'gfcgjcncvcncnv', '2023-02-02 01:40:11', NULL),
(5, 'SARRA Zemni épouse KASSAS', 'sarraraouf@hotmail.com', '652790339', 'kjkjnkjbk', 'gfcgjcncvcncnv', '2023-02-02 02:00:15', 0),
(6, 'SARRA Zemni épouse KASSAS', 'sarraraouf@hotmail.com', '652790339', 'bv bv ;jvb', 'v n, vh, vh h', '2023-02-02 02:01:17', NULL),
(7, 'SARRA  KASSAS', 'sarraraouf2@gmail.com', '652790339', 'ghqsvhgsvehes', 'sdj;vfjse;rvfhjvzejref', '2023-02-05 22:13:23', NULL),
(8, 'SARRA  KASSAS', 'sarraraouf2@gmail.com', '652790339', 'srgergthth', 'dhwehwerhrh', '2023-02-05 22:27:39', NULL),
(9, 'SARRA  KASSAS', 'sarraraouf2@gmail.com', '652790339', 'srgergthth', 'dhwehwerhrh', '2023-02-05 22:28:25', NULL),
(10, 'SARRA  KASSAS', 'sarraraouf2@gmail.com', '652790339', 'srgergthth', 'dhwehwerhrh', '2023-02-05 23:47:22', NULL),
(11, 'SARRA  KASSAS', 'sarraraouf2@gmail.com', '652790339', 'srgergthth', 'dhwehwerhrh', '2023-02-05 23:50:27', NULL),
(12, 'SARRA  KASSAS', 'sarraraouf2@gmail.com', '652790339', 'dgsdthrshtrsthrs', 'trhssethserthrthryjnhrynryn', '2023-02-06 00:17:26', NULL),
(13, 'SARRA  KASSAS', 'sarraraouf2@gmail.com', '652790339', 'dgsdthrshtrsthrs', 'trhssethserthrthryjnhrynryn', '2023-02-06 00:48:11', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20221216113617', '2022-12-16 12:36:29', 930),
('DoctrineMigrations\\Version20221216204049', '2022-12-16 21:40:58', 306),
('DoctrineMigrations\\Version20221217211202', '2022-12-17 22:12:09', 144),
('DoctrineMigrations\\Version20230114015051', '2023-01-14 02:51:52', 250),
('DoctrineMigrations\\Version20230116005951', '2023-01-16 02:00:00', 125),
('DoctrineMigrations\\Version20230117013548', '2023-01-17 02:35:58', 139),
('DoctrineMigrations\\Version20230202011433', '2023-02-02 02:15:03', 157);

-- --------------------------------------------------------

--
-- Structure de la table `home_slider`
--

CREATE TABLE `home_slider` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `button_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_displayed` tinyint(1) DEFAULT NULL,
  `button_message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `home_slider`
--

INSERT INTO `home_slider` (`id`, `title`, `description`, `button_url`, `image`, `is_displayed`, `button_message`) VALUES
(1, 'CPAM', 'Offre', 'https://127.0.0.1:8000/taxis17', '054c8b79c4ebfbfd643ce6c18a46e152c73d6f1e.jpg', 1, 'Offre CPAM'),
(2, 'Région', 'Offre de déplacement', 'https://127.0.0.1:8000/taxis10', 'a595bb2e1ac9f75839df491135ee5df87e9bb07f.png', 1, 'Zone de déplacement'),
(3, 'Offre Aéroport', 'Offre Aéroport', 'https://127.0.0.1:8000/taxis12', 'c475d8d25240149b568f67a72e8f7a87b798d384.jpg', 1, 'Offre Aéroport');

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint(20) NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `messenger_messages`
--

INSERT INTO `messenger_messages` (`id`, `body`, `headers`, `queue_name`, `created_at`, `available_at`, `delivered_at`) VALUES
(1, 'O:36:\\\"Symfony\\\\Component\\\\Messenger\\\\Envelope\\\":2:{s:44:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0stamps\\\";a:1:{s:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\";a:1:{i:0;O:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\":1:{s:55:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\0busName\\\";s:21:\\\"messenger.bus.default\\\";}}}s:45:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0message\\\";O:51:\\\"Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\\":2:{s:60:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0message\\\";O:39:\\\"Symfony\\\\Bridge\\\\Twig\\\\Mime\\\\TemplatedEmail\\\":4:{i:0;s:41:\\\"registration/confirmation_email.html.twig\\\";i:1;N;i:2;a:3:{s:9:\\\"signedUrl\\\";s:173:\\\"https://127.0.0.1:8000/verify/email?expires=1671225715&id=1&signature=ZOTm6Ns%2Fi6M384pzz6pYDAgo0uWD4ZO5vv%2BldMbtkzI%3D&token=bSPdgqYZONIkYa4KIfJtkyy9nL8YnngEpohhdME5Qlo%3D\\\";s:19:\\\"expiresAtMessageKey\\\";s:26:\\\"%count% hour|%count% hours\\\";s:20:\\\"expiresAtMessageData\\\";a:1:{s:7:\\\"%count%\\\";i:1;}}i:3;a:6:{i:0;N;i:1;N;i:2;N;i:3;N;i:4;a:0:{}i:5;a:2:{i:0;O:37:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\\":2:{s:46:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0headers\\\";a:3:{s:4:\\\"from\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:4:\\\"From\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:24:\\\"contact@taxikassas92.com\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:14:\\\"Kassas Taxi 92\\\";}}}}s:2:\\\"to\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:2:\\\"To\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:22:\\\"sarraraouf@hotmail.com\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:0:\\\"\\\";}}}}s:7:\\\"subject\\\";a:1:{i:0;O:48:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:7:\\\"Subject\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:55:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\0value\\\";s:25:\\\"Please Confirm your Email\\\";}}}s:49:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0lineLength\\\";i:76;}i:1;N;}}}s:61:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0envelope\\\";N;}}', '[]', 'default', '2022-12-16 21:21:55', '2022-12-16 21:21:55', NULL),
(2, 'O:36:\\\"Symfony\\\\Component\\\\Messenger\\\\Envelope\\\":2:{s:44:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0stamps\\\";a:1:{s:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\";a:1:{i:0;O:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\":1:{s:55:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\0busName\\\";s:21:\\\"messenger.bus.default\\\";}}}s:45:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0message\\\";O:51:\\\"Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\\":2:{s:60:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0message\\\";O:39:\\\"Symfony\\\\Bridge\\\\Twig\\\\Mime\\\\TemplatedEmail\\\":4:{i:0;s:41:\\\"registration/confirmation_email.html.twig\\\";i:1;N;i:2;a:3:{s:9:\\\"signedUrl\\\";s:173:\\\"https://127.0.0.1:8000/verify/email?expires=1671384924&id=2&signature=F9cTva5D87bbgcgHtu5raS8vwpNqzVFcmHVesg6DvzI%3D&token=WJ%2Fd9jDT7u3C9yCXJRqiHGJWXL%2BN3fzJTNRH8AFQQ2Q%3D\\\";s:19:\\\"expiresAtMessageKey\\\";s:26:\\\"%count% hour|%count% hours\\\";s:20:\\\"expiresAtMessageData\\\";a:1:{s:7:\\\"%count%\\\";i:1;}}i:3;a:6:{i:0;N;i:1;N;i:2;N;i:3;N;i:4;a:0:{}i:5;a:2:{i:0;O:37:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\\":2:{s:46:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0headers\\\";a:3:{s:4:\\\"from\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:4:\\\"From\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:24:\\\"contact@taxikassas92.com\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:14:\\\"Kassas Taxi 92\\\";}}}}s:2:\\\"to\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:2:\\\"To\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:22:\\\"sarraraouf@hotmail.com\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:0:\\\"\\\";}}}}s:7:\\\"subject\\\";a:1:{i:0;O:48:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:7:\\\"Subject\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:55:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\0value\\\";s:25:\\\"Please Confirm your Email\\\";}}}s:49:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0lineLength\\\";i:76;}i:1;N;}}}s:61:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0envelope\\\";N;}}', '[]', 'default', '2022-12-18 17:35:24', '2022-12-18 17:35:24', NULL),
(3, 'O:36:\\\"Symfony\\\\Component\\\\Messenger\\\\Envelope\\\":2:{s:44:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0stamps\\\";a:1:{s:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\";a:1:{i:0;O:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\":1:{s:55:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\0busName\\\";s:21:\\\"messenger.bus.default\\\";}}}s:45:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0message\\\";O:51:\\\"Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\\":2:{s:60:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0message\\\";O:39:\\\"Symfony\\\\Bridge\\\\Twig\\\\Mime\\\\TemplatedEmail\\\":4:{i:0;s:41:\\\"registration/confirmation_email.html.twig\\\";i:1;N;i:2;a:3:{s:9:\\\"signedUrl\\\";s:173:\\\"https://127.0.0.1:8000/verify/email?expires=1671494679&id=3&signature=oK3eAwuq82HXXqEP7J5aiNkhq2p5Mm2vrb4%2BIiKZtR4%3D&token=UhD0w0YhgbFLzAKsIpUo%2BKlcHyBzYPucFSIEfxQdZF8%3D\\\";s:19:\\\"expiresAtMessageKey\\\";s:26:\\\"%count% hour|%count% hours\\\";s:20:\\\"expiresAtMessageData\\\";a:1:{s:7:\\\"%count%\\\";i:1;}}i:3;a:6:{i:0;N;i:1;N;i:2;N;i:3;N;i:4;a:0:{}i:5;a:2:{i:0;O:37:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\\":2:{s:46:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0headers\\\";a:3:{s:4:\\\"from\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:4:\\\"From\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:24:\\\"contact@taxikassas92.com\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:14:\\\"Kassas Taxi 92\\\";}}}}s:2:\\\"to\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:2:\\\"To\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:16:\\\"hinda@hotmail.fr\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:0:\\\"\\\";}}}}s:7:\\\"subject\\\";a:1:{i:0;O:48:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:7:\\\"Subject\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:55:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\0value\\\";s:25:\\\"Please Confirm your Email\\\";}}}s:49:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0lineLength\\\";i:76;}i:1;N;}}}s:61:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0envelope\\\";N;}}', '[]', 'default', '2022-12-20 00:04:39', '2022-12-20 00:04:39', NULL),
(4, 'O:36:\\\"Symfony\\\\Component\\\\Messenger\\\\Envelope\\\":2:{s:44:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0stamps\\\";a:1:{s:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\";a:1:{i:0;O:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\":1:{s:55:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\0busName\\\";s:21:\\\"messenger.bus.default\\\";}}}s:45:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0message\\\";O:51:\\\"Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\\":2:{s:60:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0message\\\";O:39:\\\"Symfony\\\\Bridge\\\\Twig\\\\Mime\\\\TemplatedEmail\\\":4:{i:0;s:41:\\\"registration/confirmation_email.html.twig\\\";i:1;N;i:2;a:3:{s:9:\\\"signedUrl\\\";s:179:\\\"https://127.0.0.1:8000/verify/email?expires=1675119678&id=4&signature=ZoF5Keng7PxpJZjCz%2B45VAaQaf4ytk6MjHyKp8pR%2B4A%3D&token=lV6Vw1MhfXBIPVcu%2BSMZlBF48D%2Fx1PxMvGS%2FOnew0z8%3D\\\";s:19:\\\"expiresAtMessageKey\\\";s:26:\\\"%count% hour|%count% hours\\\";s:20:\\\"expiresAtMessageData\\\";a:1:{s:7:\\\"%count%\\\";i:1;}}i:3;a:6:{i:0;N;i:1;N;i:2;N;i:3;N;i:4;a:0:{}i:5;a:2:{i:0;O:37:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\\":2:{s:46:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0headers\\\";a:3:{s:4:\\\"from\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:4:\\\"From\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:24:\\\"contact@taxikassas92.com\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:14:\\\"Kassas Taxi 92\\\";}}}}s:2:\\\"to\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:2:\\\"To\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:18:\\\"chihab@hotmail.com\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:0:\\\"\\\";}}}}s:7:\\\"subject\\\";a:1:{i:0;O:48:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:7:\\\"Subject\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:55:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\0value\\\";s:25:\\\"Please Confirm your Email\\\";}}}s:49:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0lineLength\\\";i:76;}i:1;N;}}}s:61:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0envelope\\\";N;}}', '[]', 'default', '2023-01-30 23:01:18', '2023-01-30 23:01:18', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `related_taxi`
--

CREATE TABLE `related_taxi` (
  `id` int(11) NOT NULL,
  `taxi_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `taxi_id` int(11) DEFAULT NULL,
  `adresse1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adresse2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `heure_depart` time NOT NULL,
  `nombre_place` int(11) DEFAULT NULL,
  `nombre_baguage` int(11) DEFAULT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_accept` tinyint(1) DEFAULT NULL,
  `is_payed` tinyint(1) DEFAULT NULL,
  `prix` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `reservation`
--

INSERT INTO `reservation` (`id`, `user_id`, `taxi_id`, `adresse1`, `adresse2`, `date`, `heure_depart`, `nombre_place`, `nombre_baguage`, `file`, `is_accept`, `is_payed`, `prix`) VALUES
(3, 3, 10, '5 rue de bretagne 92140 clamart', '43 rue normandie Paris', '2017-01-01', '15:00:00', 2, 0, '', NULL, 0, NULL),
(4, 3, 10, '5 rue de bretagne 92140 clamart', '43 rue normandie Paris', '2017-01-01', '15:00:00', 2, 0, '', NULL, 0, NULL),
(5, 3, 10, '5 rue de bretagne 92140 clamart', '43 rue normandie Paris', '2023-01-01', '14:00:00', 2, 0, '', NULL, 0, NULL),
(6, 3, 10, '5 rue de bretagne 92140 clamart', '43 rue normandie Paris', '2023-01-01', '12:00:00', 2, 0, '', NULL, 0, NULL),
(7, 3, 10, '5 rue de bretagne 92140 clamart', '43 rue normandie Paris', '2023-01-01', '13:00:00', 2, 0, '', NULL, 0, NULL),
(8, 3, 10, 'jsdbvjhsbv', 'qkfbk<qege', '2022-04-17', '16:20:00', 2, 5, '', NULL, 0, NULL),
(9, 3, 10, 'jsdbvjhsbv', 'qkfbk<qege', '2022-04-17', '16:20:00', 2, 5, '', NULL, 0, NULL),
(10, 3, 10, 'jhsbdjhvs', '<nqbd <qbn<gv', '2022-01-01', '09:15:00', 3, 0, '', NULL, 0, NULL),
(11, 3, 25, '7 rue de Normandie Clamart 92140', '6 rue de Georges vallée  paris 75015', '2023-01-11', '06:12:00', 2, 4, '', NULL, 0, NULL),
(12, 3, 25, '7 rue de Normandie Clamart 92140', '6 rue de Georges vallée  paris 75015', '2023-01-11', '06:12:00', 2, 4, '', NULL, 0, NULL),
(13, 4, NULL, '5 rue de bretagne', '43 rue normandie Paris', '2018-01-01', '19:17:00', 4, 2, NULL, NULL, 0, NULL),
(14, 4, 12, '8 Rue Lecourbe 75015 Paris', 'Le Bout 70220 Fougerolles-Saint-Valbert', '2023-05-01', '15:16:00', 5, 2, NULL, NULL, 0, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `reset_password_request`
--

CREATE TABLE `reset_password_request` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `selector` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hashed_token` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `requested_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `expires_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `reviews_taxi`
--

CREATE TABLE `reviews_taxi` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `taxi_id` int(11) NOT NULL,
  `note` int(11) NOT NULL,
  `comment` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `taxi`
--

CREATE TABLE `taxi` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `more_information` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_cpam` tinyint(1) DEFAULT NULL,
  `is_luxe` tinyint(1) DEFAULT NULL,
  `is_van` tinyint(1) DEFAULT NULL,
  `is_fete` tinyint(1) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creat_at` datetime DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_free` tinyint(1) DEFAULT NULL,
  `placemax` int(11) DEFAULT NULL,
  `bagagemax` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `taxi`
--

INSERT INTO `taxi` (`id`, `name`, `description`, `more_information`, `is_cpam`, `is_luxe`, `is_van`, `is_fete`, `image`, `creat_at`, `slug`, `is_free`, `placemax`, `bagagemax`) VALUES
(8, 'Ledoux Auguste', 'Et delectus quae quisquam ullam. Est omnis saepe voluptatum laudantium. Optio assumenda aut illum beatae enim minima doloribus et. Deserunt iusto optio sint dolores enim. Eos similique ea aut hic.\n\nIncidunt blanditiis qui minus delectus tenetur consectetur. Accusamus dignissimos et in. Omnis officiis sit vero inventore quos velit officia.\n\nDolore at eos qui explicabo doloremque. Quia ipsum possimus accusamus asperiores natus fuga deserunt. Eum autem aliquam facilis corporis eos.', 'Dolorem omnis exercitationem cumque sit. Itaque doloremque enim molestias veniam laborum libero molestias sed. Vel odit sit dolorem doloremque.\n\nFuga et fugit iure corporis doloribus quam quo. Itaque voluptatibus autem ratione qui libero nostrum. Dolorem tenetur minima necessitatibus maxime necessitatibus incidunt distinctio.\n\nIn voluptatem perspiciatis ullam rem ut. Iure atque consequatur provident. Voluptate officiis et ea laboriosam aliquam commodi sed.', 0, 1, 1, 1, 'car1.jpg', '1990-12-31 00:00:00', 'Ledoux-Auguste', 0, 6, 9),
(9, 'Chauvin Paul', 'Ut commodi et voluptatibus facilis quis porro iusto. Est et quibusdam similique officia voluptas et. Sit nam rem similique animi. Ut quam nesciunt quo quisquam et facere.\n\nIllum quia reprehenderit et tenetur. Necessitatibus ut in minus a molestiae voluptatem nulla. Necessitatibus enim quod ab eligendi reiciendis exercitationem quae.\n\nVoluptas rerum ut et sit placeat labore consequatur. Laudantium et ab eligendi enim at consequuntur cum nesciunt. Tenetur repudiandae non eveniet sed aliquid sit.', 'Praesentium molestiae iusto cum ut deserunt est non. Temporibus eum quia quo quae tempore. Porro est sit nesciunt possimus nulla.\n\nEst a repudiandae ipsam culpa. A enim cumque possimus in voluptatem. Ea voluptatem iusto quos voluptas.\n\nQui dicta et assumenda qui deserunt aliquam. Ut voluptatem sequi tempore. Numquam aspernatur voluptatum quis quia. Voluptatem error perspiciatis consequatur quo. Quae explicabo dolor qui molestias dolor architecto.', 0, 0, 1, 0, 'car2.jpg\r\n', '1997-06-23 00:00:00', 'Chauvin-Paul', 0, 7, 6),
(10, 'Meunier Nath', 'Ea et magnam aut fugiat. Sint labore nobis rerum ducimus. Reiciendis atque aut sapiente iste ducimus vel. Dolore tempore quidem saepe ut quidem sit.\n\nQuisquam earum et asperiores itaque. Qui harum sit nam necessitatibus quas fugit et. Quibusdam natus officiis voluptatem tempora voluptatibus. Omnis quam quis veritatis maiores.\n\nSint nostrum aliquam autem ea atque debitis. Eveniet itaque dolores dolores ullam. Dicta necessitatibus est quia voluptates architecto quibusdam. Porro officia sint sequi at et qui.', 'Est enim voluptas recusandae corporis veniam libero. Dicta quia eligendi ipsam. Libero saepe voluptatibus cupiditate. Sint aperiam repudiandae quasi a qui.\n\nUt qui explicabo est consequuntur. Ut repudiandae repellat natus qui ut. Ex accusamus aut minima sit tempora ea. Aspernatur tenetur explicabo debitis suscipit sunt iure vitae.\n\nEa illum exercitationem itaque aliquid alias ipsum. Laborum voluptatem vel inventore molestiae. Omnis officia quis corrupti consequuntur et quas. Aspernatur dolorem nihil expedita consequatur voluptas dolorem molestiae ex.', 0, 1, 0, 0, 'car3.jpg', '2001-01-12 00:00:00', 'Meunier-Nath', 0, 5, 8),
(11, 'Blanchard Dorothée', 'Optio enim sit accusantium. Et eos sed maxime et. Fugit in ut ipsum voluptatem facere est autem esse.\n\nCum est pariatur voluptatem libero vel eius. Quia quisquam consequuntur suscipit reiciendis veritatis temporibus. Eligendi dolor voluptatum quo tempora sed nemo cumque cum.\n\nSunt est hic sint et illo laborum vero exercitationem. Omnis voluptas error et dicta. Molestiae dolorem aut natus eum cum aut corrupti.', 'Dignissimos sit consequatur deserunt perferendis nostrum. Quia illo animi et et. Sequi quod alias animi placeat. Accusantium assumenda quo eligendi asperiores officiis esse itaque.\n\nQui eos quisquam qui sed cumque consequatur soluta. Facilis aut soluta dolores nisi est corrupti. Tempora aut sint nulla occaecati perferendis accusantium.\n\nMolestiae similique qui consequatur quo et. Laborum rerum porro similique eaque sunt quae. Iure consequatur excepturi est corporis asperiores quidem sapiente.', 1, 0, 0, 1, 'car4.jpg', '2004-08-23 00:00:00', 'Blanchard-Dorothée', 0, 4, 4),
(12, 'Didier Antoinette', 'Aspernatur et voluptatum omnis qui dolorum rerum. Nemo ut et suscipit non. Nobis sequi enim est recusandae.\n\nQuos molestiae in exercitationem consequuntur. Libero qui ut labore autem ratione.\n\nOmnis est praesentium tempora qui. Delectus in ratione repudiandae excepturi. Amet sit libero cum. Veritatis id labore laborum et dolorem beatae.', 'Vitae ut voluptates distinctio esse alias. Omnis necessitatibus ea repellat ad illo esse. Dolorem expedita numquam blanditiis consectetur.\n\nEx et est ratione non. Quibusdam qui asperiores sed recusandae distinctio soluta. Nihil vero aliquam enim. Sit quis consequuntur et saepe cupiditate rerum.\n\nConsequuntur rerum perferendis magnam. Laborum consequatur consectetur autem voluptatem praesentium quaerat quia.', 0, 1, 0, 0, 'car5.jpg', '2003-09-16 00:00:00', 'Didier-Antoinette', 0, 3, 6),
(13, 'Coste Camille', 'Cumque ipsum omnis rerum. Aut natus qui blanditiis consequatur nobis. Repellat eveniet et ab voluptas excepturi labore.\n\nAmet sed iusto earum voluptas illo sequi. Totam soluta earum ea. Delectus quod corporis asperiores veritatis voluptatum distinctio dolores. Quas amet explicabo quo voluptatem quos est magnam. Porro ut nam esse debitis sit rerum qui.\n\nQuia ratione qui iste reiciendis odio commodi iusto. Dolorum animi aut in labore ut. Quaerat sit provident voluptatibus harum a repellendus.', 'Et quo mollitia itaque saepe quo id enim. Id quae quae quasi ut explicabo qui. Sed vel et ut nemo deserunt incidunt deserunt repellendus.\n\nOmnis distinctio sapiente laudantium eum ab. Aut quibusdam velit autem commodi qui sapiente accusamus. Ducimus ut quo ut. Minus labore in quia odio.\n\nDolore delectus iusto impedit reprehenderit et eum ipsa dolorem. Aut sint rerum id suscipit vitae sint numquam dolores. Est nihil sed perspiciatis nihil cumque.', 1, 0, 0, 1, 'car6.jpg', '2015-06-05 00:00:00', 'Coste-Camille', 0, 6, 3),
(14, 'Rodrigues Renée', 'Dolorum iusto soluta et possimus tempora. Aut sit et et non. Voluptatum maiores quam omnis architecto pariatur iste voluptates.\n\nTempora in aperiam ex ea harum est. Natus a omnis ea sit sed molestias voluptas. Sed sunt mollitia hic saepe architecto. Facere voluptas placeat dolorum.\n\nEt saepe in tempore quis et consequuntur quidem non. Adipisci et temporibus culpa ea est qui magnam. Aut accusamus nihil est autem quibusdam et similique.', 'Itaque laudantium quasi veniam itaque iure perferendis. Sit magni sunt sapiente non sint. Voluptates et ipsa molestias pariatur iure non. Officiis ab nisi saepe aut totam.\n\nEt voluptatum soluta harum dicta. Commodi natus corporis autem earum quia aliquam ut. Est voluptatem quibusdam et sunt.\n\nNihil aspernatur et quod ut accusamus distinctio. Eveniet magni molestias quaerat accusantium aliquam.', 1, 0, 0, 0, 'car7.jpg', '2000-04-21 00:00:00', 'Rodrigues-Renée', 0, 7, 3),
(15, 'Pascal Valérie', 'Est eveniet pariatur blanditiis architecto doloremque. Ut fugit quos adipisci est. Et eum suscipit fugit eum. Illo molestiae voluptatem earum atque cumque voluptatum reiciendis.\n\nIpsam omnis debitis in ratione eveniet. Non quae excepturi provident sequi perferendis debitis delectus. Et sunt blanditiis omnis tenetur exercitationem consectetur. Ducimus qui ipsum reprehenderit sequi et est.\n\nUnde nostrum consequuntur quo ab. Facilis hic porro voluptate sed saepe nobis a aut. Debitis quia vel soluta delectus iusto id quas nobis.', 'Doloremque distinctio unde facilis voluptas sint dignissimos molestiae suscipit. Inventore modi qui delectus aut explicabo blanditiis. Placeat autem expedita aspernatur placeat ratione. Vel quis et qui ex.\n\nBlanditiis minus nisi deleniti occaecati quo amet. Consequatur est error quas voluptatem. Non voluptatibus quisquam inventore sit inventore sit placeat ratione.\n\nExpedita eligendi quibusdam sit voluptas autem et deleniti. Dicta laudantium doloribus fugit sint. Quia aut et ea quos. Similique quo placeat qui sint.', 0, 1, 0, 0, 'car8.jpg', '1982-05-15 00:00:00', 'Pascal-Valérie', 1, 5, 4),
(16, 'Goncalves Raymond', 'Ducimus consequatur occaecati repellendus illo voluptatum. Rerum sequi nulla blanditiis qui qui vel aspernatur. Quae est praesentium consequatur ex corrupti. Nostrum voluptatem vero ut et.\n\nOmnis consequatur et animi sed accusamus nihil. Voluptas qui et ipsam beatae. Eos error facilis dolorem et quae dolorem qui officia. Doloremque qui est asperiores culpa repudiandae tenetur ut.\n\nEx facilis reprehenderit id at voluptatem. Voluptas sunt maiores incidunt amet ut fuga. Quibusdam excepturi porro adipisci neque in rerum architecto. Velit fugiat inventore officiis.', 'Saepe est distinctio magnam. Qui culpa error provident quaerat. Laudantium minima voluptatem eligendi sint nobis. Voluptatem enim consectetur ullam voluptates fuga.\n\nEt possimus ut et voluptatum eaque nobis non. Distinctio velit sint numquam esse. Perspiciatis atque non hic maxime necessitatibus unde culpa.\n\nQuam enim iste tempore est sequi similique qui nobis. Id reiciendis temporibus quis sunt totam. Fugiat earum iure dolores tempora enim quos autem sit.', 0, 0, 0, 1, 'car9.jpg', '1975-02-04 00:00:00', 'Goncalves-Raymond', 1, 3, 5),
(17, 'Dupont Gérard', 'Eum earum itaque est et aut nemo sunt. Dolorum maiores neque sunt modi commodi dicta natus dolore. Omnis praesentium et dolorem rerum.\n\nEum expedita qui ea qui velit. Dolorum expedita nam voluptas autem molestias. Ipsum a doloremque et quam fugit.\n\nQuia ipsum quia blanditiis occaecati voluptas. Natus alias itaque numquam vel cumque. Exercitationem a ut aut neque similique id. Vel iste quasi ea atque id enim laborum.', 'Optio ducimus est neque atque consequuntur doloremque qui. Officiis recusandae officiis in necessitatibus iste et occaecati nihil. Qui aut corporis impedit nam qui magnam ipsam.\n\nDebitis architecto perferendis quis numquam laborum illum. Necessitatibus qui nihil fugit. Odit aut quas rem.\n\nInventore aut harum vero autem. Minus neque id qui non aut. Nisi omnis asperiores dolores distinctio nemo quae cumque.', 1, 1, 1, 1, 'car10.jpg', '1991-05-04 00:00:00', 'Dupont-Gérard', 1, 7, 3),
(18, 'Le Roux Christophe', 'Debitis reiciendis eum sed dolor sapiente voluptatem dolores. Maxime nam autem neque expedita dolore qui. Et qui recusandae beatae voluptatem nesciunt ratione sequi ut. Facere aut et veritatis aut.\n\nNecessitatibus earum et qui iure porro. Fugit ut quasi ut sint magni minus. Mollitia modi aliquid quos saepe. Enim sit minima soluta et quos accusamus vitae.\n\nMinima veniam debitis enim numquam id eos. Vitae ut neque vel sapiente ut distinctio facere. Temporibus quia et quia aut neque.', 'Molestiae sit est veniam error aut beatae. Praesentium eligendi atque eos quod. Animi et porro dignissimos quod. Eveniet consequatur praesentium vel quidem earum.\n\nIn ad quibusdam alias repudiandae cupiditate. Adipisci nisi optio et ea et odit saepe.\n\nQuia et ratione quod impedit iure. Qui laboriosam et ut quo quas. Fugiat consequuntur qui dolores doloremque fugit animi.', 1, 0, 1, 1, 'car11.jpg', '2011-12-12 00:00:00', 'Le-Roux-Christophe', 0, 4, 5),
(19, 'Laurent Gabrielle', 'Sunt eveniet quos molestiae voluptatum enim nobis et. Et reprehenderit soluta exercitationem sit. Laudantium et voluptatem sit reprehenderit fugiat.\n\nOdio ut accusantium enim. Dignissimos cum esse sed deleniti doloribus voluptas quidem. Autem fugit soluta rem reiciendis.\n\nVoluptatem accusamus tempore eum ipsa dolor. Non ad qui deserunt harum veniam voluptas rerum. Non qui quia repellendus id incidunt illo. Voluptates et amet sunt.', 'Cupiditate doloremque et unde enim laboriosam. Ratione saepe ea illo assumenda. Magni aut officiis voluptatem sint neque.\n\nEt magnam perferendis rerum et ea omnis. Laboriosam dolor alias impedit repudiandae numquam praesentium saepe. Et ullam voluptas amet. Architecto aut in ex consequatur.\n\nSuscipit qui libero hic. Ea rerum ullam dolorum voluptatem. Quia est amet veniam provident hic omnis. Iure non magnam voluptatem maiores et vel.', 0, 0, 0, 0, 'car12.jpg', '2012-08-31 00:00:00', 'Laurent-Gabrielle', 0, 7, 7),
(20, 'Roy Roland', 'Nam reiciendis iure iure placeat et ipsam. Quasi sed quisquam placeat minus sint quae. Laudantium recusandae sed occaecati repellat sunt nemo dolor. Architecto ipsum odio ratione corrupti.\n\nRerum quisquam quisquam maxime. Doloremque omnis labore modi sint ullam consectetur magni vel. Voluptas iure dolor rerum officiis eum reiciendis.\n\nSit nemo reprehenderit dolorum nulla voluptatem voluptatem. Similique temporibus neque vel rerum. Illum aut voluptatem sit sunt assumenda earum ad.', 'Et qui vitae reprehenderit illum eum. Molestiae aperiam ut cumque repellendus rerum similique voluptatum. Velit dicta officiis est dolor. Et corporis earum earum deserunt quasi.\n\nAut necessitatibus accusantium vel corrupti eum eum. Modi aut perspiciatis pariatur quaerat. Illo ullam est impedit amet. Hic iure nulla accusantium asperiores exercitationem.\n\nMinima non quasi totam quam ut mollitia et modi. Fugiat iure harum est quisquam laudantium sunt facilis. Quibusdam tempore earum placeat consequatur et a culpa. Ut et minima sint voluptas omnis commodi quisquam.', 0, 1, 1, 1, 'car13.jpg', '2003-05-20 00:00:00', 'Roy-Roland', 1, 6, 3),
(21, 'Jacob Jean', 'Minus est enim qui et alias laudantium. Ad cupiditate ab praesentium mollitia modi qui. Non maxime magni et consequatur aut unde.\n\nAliquam tempora sequi fugit error praesentium sequi est. Voluptas quas quia placeat officia doloribus quis qui. Laudantium praesentium magnam voluptatem molestias.\n\nNihil voluptas iure et eaque commodi sed hic saepe. Eaque cupiditate sed sint placeat et. Laudantium accusamus quas non voluptatem animi.', 'Quam sit et ipsam labore sapiente cumque. Sunt optio ut ut ut qui quam. Adipisci ex id quo.\n\nNecessitatibus aut temporibus asperiores distinctio praesentium. Optio rerum placeat a.\n\nTemporibus officiis dolores similique nihil. Ut iusto accusamus omnis eveniet. Asperiores dolores id autem id impedit aut fugit. Iusto aut voluptatibus iure eveniet quasi praesentium dolorem.', 0, 0, 1, 0, 'car14.jpg', '2010-09-03 00:00:00', 'Jacob-Jean', 0, 6, 7),
(22, 'Martin Anouk', 'Incidunt voluptas harum harum voluptatibus veniam tempora. Corporis ratione quas adipisci qui. Ipsum temporibus vel qui sunt quidem quo.\n\nEaque expedita ducimus alias maxime rem recusandae. Tempora rerum quam ad autem sunt sunt. Sunt voluptas ab et aut. Eos quibusdam sit distinctio ratione ea et assumenda. Consequatur iste consequuntur cupiditate natus quod.\n\nRatione hic saepe earum quas qui aliquid ipsa. Eaque dolores laboriosam tempora magnam molestias id amet. Nemo quia distinctio earum aut sed qui. Repellendus maiores qui in excepturi.', 'Tempore dolores laborum quam excepturi. Et ut sed non ipsa blanditiis veritatis incidunt in.\n\nPariatur voluptas autem doloremque sed et. Neque sint placeat nisi beatae eius et. Veritatis animi quasi soluta dolor ut exercitationem doloremque.\n\nOfficia enim aperiam perspiciatis id quos. Aut iusto reiciendis non laborum est. Quidem qui aut voluptatibus corrupti omnis. Veniam non minus asperiores aut.', 0, 1, 0, 1, 'car15.jpg', '2020-10-24 00:00:00', 'Martin-Anouk', 0, 6, 8),
(23, 'Clerc Virginie', '<div>Facere et exercitationem aut maiores. Fuga est iure nisi quos. Sed magni atque quo accusamus non culpa dolor. Mollitia quia omnis omnis aut voluptates sunt fuga. Doloribus dolores est error odit quis veritatis. Debitis accusamus tempora natus illo aut aut. Suscipit molestiae et illum et nisi. Et eveniet deleniti laborum non culpa reprehenderit.</div>', '<div>Modi hic corporis quia odit deserunt sed. Et sed voluptates voluptatem sed magni cum. Qui minima consequatur provident id repellendus aut excepturi provident. Consequuntur unde accusantium distinctio et unde. Optio aperiam dolores consequatur voluptates quasi. Dolor neque magnam voluptatibus voluptatem aut ut. Fuga modi aliquid officia iusto dolorem perferendis in. Aspernatur quis enim nisi ratione aut aliquam qui. Exercitationem repellat labore laudantium qui hic sunt. Similique repellat facilis fugiat qui aut. Pariatur quas aspernatur quia maiores minus adipisci.</div>', 0, 0, 1, 0, 'car16.jpg', '1976-04-06 00:00:00', 'Clerc-Virginie', 0, 5, 8),
(24, 'Humbert Juliette', 'Cumque voluptas dolores in est impedit vitae. Architecto unde culpa non provident et quo aut. Totam perferendis et animi voluptas aut et.\n\nQui et hic vel ut eos quisquam sit. Enim labore ut officia natus. Provident laborum totam sapiente consequatur. Aut possimus velit id reprehenderit dolore eaque assumenda. Cupiditate inventore eos ex sequi voluptas eveniet.\n\nDolorem aut odit possimus ullam voluptatem dolorem. Enim nobis possimus provident sed non. Ad libero corporis dignissimos repellat. Cumque voluptates quam et velit modi in.', 'Mollitia at ut ut non molestiae omnis asperiores. Ipsum eveniet voluptas et consequatur. Eius fugit mollitia eaque quam vero est repellat omnis.\n\nNisi eaque dolores voluptatem aliquid amet. Sunt cum quis dolores quaerat. Laudantium labore sequi qui corporis est tempora voluptatem rem.\n\nEos autem maiores cumque commodi est soluta. Dolorem quod esse eaque qui et ipsam. Est qui ea quam voluptas autem. Nisi a voluptatem officiis voluptatem.', 0, 0, 0, 0, 'car17.jpg', '2011-11-05 00:00:00', 'Humbert-Juliette', 0, 3, 3),
(25, 'Moreau Jules', 'Labore et sit totam quo minus. Ut sed repellat voluptas ea. Id nihil exercitationem qui sequi.\n\nReiciendis ullam corporis molestiae vel numquam. Deserunt necessitatibus voluptate aliquam vel. Tempora sequi sed et culpa.\n\nSoluta vel vel voluptas delectus itaque dolorem nam. Quo rerum nesciunt veritatis aut libero provident.', 'Voluptas assumenda et totam. Quidem laudantium quae beatae dolorem nihil dolorem nesciunt. Incidunt sapiente earum aut impedit qui ea recusandae. Inventore quia commodi sed.\n\nDucimus exercitationem unde eius quisquam et. Reprehenderit enim dolorem voluptatem voluptates eaque consectetur ullam sint. Corrupti eos voluptas dolor ipsa.\n\nSapiente corporis est a non aperiam magni consequatur. Sint in et est voluptas. Qui et eum provident repudiandae et dolore tenetur.', 1, 1, 0, 0, 'car18.jpg', '1988-01-25 00:00:00', 'Moreau-Jules', 0, 4, 3),
(26, 'Foucher Paul', 'Qui dolor voluptatem iste qui qui. Debitis soluta nam sequi. Non et rem beatae. Similique qui cum id porro consequatur numquam.\n\nPossimus autem numquam ut pariatur. Inventore suscipit voluptatem sit amet dolorem dolorem nemo. In et officiis distinctio dolor sed ut qui quidem.\n\nCorporis perspiciatis dolorum iste voluptate consequatur et. Tempora maiores quo nesciunt molestias aut sunt. Cum saepe provident facilis accusantium quis. Ut qui quibusdam id dolorum.', 'Omnis saepe quia veritatis eos dignissimos unde. In harum quia repudiandae voluptas. Nam a necessitatibus iusto quia velit.\n\nRepellat non debitis aut provident nam. Qui inventore similique ipsum est qui sit. Quia nulla molestiae fugit veniam in quos doloremque. Aut sed voluptas distinctio illum.\n\nConsequatur dolor et exercitationem. Officiis nesciunt dolor pariatur ipsum unde quia. Corporis sit quas commodi labore molestiae. Nihil dicta sapiente aut libero sed cum.', 1, 0, 1, 1, 'car19.jpg', '1977-08-24 00:00:00', 'Foucher-Paul', 1, 5, 8),
(27, 'Renaud Joseph', 'Quam amet porro illum corporis. Doloribus hic harum est quidem quas. Facilis itaque commodi voluptatem sunt sit sint. Est aut recusandae at ullam vel.\n\nDolor aut quam architecto doloremque consequatur quo incidunt sint. Tempore accusamus sint earum dolor. Error ab velit cupiditate quas eos doloribus similique repellat. Dolores provident non sunt minima. Esse atque accusantium nam et omnis consequuntur molestiae.\n\nQui eligendi porro dolore ex aperiam amet. Quidem mollitia unde ducimus tenetur sunt rerum. Inventore qui distinctio iusto dignissimos ad omnis.', 'Sunt facilis praesentium quos deserunt mollitia. Aliquam omnis explicabo ea veniam eos quia distinctio. Possimus sunt ad totam sit. Quae distinctio sapiente sed eaque sed iusto eum.\n\nDolores dolorum perspiciatis sapiente qui asperiores est. Quia doloremque qui aut rerum qui quod ipsa. In aut dignissimos aliquam. Quia quis amet fugiat consequuntur commodi earum aspernatur.\n\nTempora distinctio fugit natus. Officia facere voluptate et expedita at blanditiis quia. Iusto et ut sint ratione iste placeat.', 0, 1, 0, 0, 'car20.jpg', '2001-05-27 00:00:00', 'Renaud-Joseph', 0, 3, 5),
(28, 'Julien Dominique', 'Itaque distinctio nemo rerum doloremque. Labore at numquam unde exercitationem neque ipsum. Occaecati exercitationem ut fugit expedita et reprehenderit similique aut. Est et vel accusamus eum fuga saepe.\n\nEnim velit eius est recusandae fugit. Necessitatibus dolorem excepturi sed deleniti aut ipsa. Et nisi tenetur aut quis quasi.\n\nQuis sapiente porro necessitatibus consectetur quo in sapiente corrupti. Nihil tempore optio sint sit ex consequatur modi laudantium. Quis qui architecto sit.', 'Maiores dolores quasi quia aliquam. Vel et non labore ut mollitia rem accusamus. Aut accusantium cupiditate et.\n\nNostrum laudantium asperiores eos repellat sed. Ea et aut ut autem. Distinctio voluptatem nobis provident. Non harum aut esse id quos dolor. Similique rerum est distinctio ut a.\n\nUt laboriosam ullam ipsum aliquam quos eum excepturi. Quis unde non velit debitis qui. Velit alias quaerat ea sit voluptatem at illo.', 1, 0, 0, 0, 'car21.jpg', '1986-01-18 00:00:00', 'Julien-Dominique', 0, 6, 5),
(29, 'Moulin Luc', 'Ut sint aut a. Nihil tenetur provident eaque nostrum laborum sit aut. Culpa enim culpa atque possimus. Quis voluptas deleniti laboriosam autem.\n\nAliquid molestiae quasi repellendus voluptatem. Ut repudiandae quae laboriosam ea dolorem eius expedita. Dicta ipsum eum voluptatibus.\n\nExplicabo minus qui ea illum. Dignissimos soluta temporibus itaque dolorem. Eveniet velit at adipisci occaecati eum nisi voluptatem autem.', 'Saepe non itaque soluta ipsa. Eligendi omnis mollitia quia ut. Pariatur quo minima sequi odit. Veritatis voluptatem ea optio veniam voluptas.\n\nSuscipit ut non nulla aliquid. Perferendis sunt aliquid facilis blanditiis. Et provident et qui occaecati velit vel.\n\nOmnis numquam explicabo sit autem ratione et. Totam nihil nesciunt explicabo recusandae rerum aut sed. Qui voluptatem et iste nemo laudantium occaecati. Nihil voluptates dolorem laudantium voluptas molestiae libero.', 0, 0, 1, 1, 'car22.jpg', '2002-03-05 00:00:00', 'Moulin-Luc', 1, 5, 4),
(30, 'Moulin Franck', '<div>Quo ea et molestiae ullam asperiores qui quas. Quo ex vel molestiae in harum. Id distinctio aliquid sit nihil molestiae corrupti. Itaque animi consequuntur voluptatum eum dolore. Ut voluptates animi quidem officia voluptate corporis commodi. Quas voluptatem suscipit hic numquam sequi quia. Repellat in vel rem atque consequatur velit hic. Ea fuga ut doloremque et qui officiis. Tempore consectetur eligendi illum nemo iste sint. Animi repellat sapiente voluptatem totam molestiae. Ipsum hic eum voluptas hic tempore id et.</div>', '<div>Laborum est ratione laborum. Ut qui cum sapiente accusantium. Ut molestias placeat rerum aut quia maxime. Sunt sed et provident similique sit et. Illo animi magnam sit ducimus adipisci dolore et. Rem ut et facere aut quis. Illo impedit perferendis ducimus sed. Deleniti dignissimos et libero explicabo aspernatur odio. Dicta sed porro et ut reprehenderit vero. Quam tempora molestias occaecati sit aut. Adipisci odit amet voluptates suscipit. Rerum ut rerum consequuntur nihil.</div>', 0, 1, 0, 0, 'car23.jpg', '2020-08-18 00:00:00', 'Moulin-Franck', 0, 3, 6),
(31, 'Petitjean Nathalie', 'Enim rerum vitae soluta nostrum iusto velit porro voluptatibus. Officia nemo vero et est aut. Laborum autem molestias eius molestiae fugiat ut. Voluptas est rerum maiores aut in excepturi.\n\nSunt rerum ad eum velit excepturi. Soluta voluptas dolore rerum eius perferendis. Ducimus laboriosam nobis qui aut rem minus libero. Quod perspiciatis et et fugit odio.\n\nAdipisci quam esse praesentium non provident. Velit harum provident ipsa eos voluptatem dolorum quas voluptatem. Ea possimus deserunt quas voluptatem omnis. Ipsum quis qui quis quo.', 'Iste iste veritatis neque eligendi similique doloremque. Enim commodi nihil laborum velit commodi eum dolorum quibusdam. Nobis soluta dolor rerum quod. Ut sequi quo blanditiis rerum dicta neque.\n\nDebitis maxime alias omnis quia impedit ut consequuntur. Dolore tempore est error doloribus enim qui. Rerum voluptate ut accusantium. Molestiae modi nihil quam earum esse rerum.\n\nVel consequatur libero magnam aspernatur voluptatem esse. Quibusdam tenetur magni voluptatem sed dolores a saepe. Ratione labore incidunt fuga culpa unde.', 0, 1, 0, 0, 'car24.jpg', '2015-03-18 00:00:00', 'Petitjean-Nathalie', 1, 3, 7),
(32, 'Marechal Hugues', 'Voluptatum magni aut modi assumenda doloribus ex eum. Nesciunt et dolor soluta omnis minus.\n\nVoluptas sit natus sunt in est est. Accusantium fugit id doloremque est blanditiis unde officiis dolorem. Doloremque accusamus vero ut quis repudiandae est.\n\nIn quibusdam aut aliquid repudiandae. Assumenda voluptatum et illo quo. Rerum eum omnis suscipit repellat autem eligendi eius. Corrupti cum consectetur et quod non nesciunt minima reiciendis.', 'Quia perspiciatis illum voluptates aliquid. Porro beatae natus temporibus ratione voluptate ipsum rerum. Cum ut quia totam saepe veritatis numquam. Aliquid et quisquam et saepe voluptatibus et.\n\nReprehenderit nobis et consectetur mollitia. Numquam accusantium illo eos. Rerum maiores et eum ut dolore. Quae dolorem delectus similique velit.\n\nQuisquam et nihil eum assumenda iure voluptatem odio. Quidem accusamus dolore asperiores voluptatibus et. Neque omnis nesciunt sint et. Vel architecto incidunt quibusdam aut dolorem.', 0, 1, 1, 1, 'car25.jpg', '1976-07-04 00:00:00', 'Marechal-Hugues', 0, 5, 4),
(33, 'Morvan Michelle', 'Quia aut et omnis deleniti. Sunt ea possimus cupiditate voluptatem minima commodi. Aut sit reprehenderit fugit cupiditate pariatur velit ipsam.\n\nDolore adipisci excepturi consectetur est ut. Velit culpa qui quia fugit. Et id id adipisci est. Cum ut dolor quas et voluptatem libero eius. Velit est voluptatem voluptates tempora est ea cupiditate.\n\nEt dicta itaque eum et voluptatum numquam qui vel. Voluptatem voluptas quod odit labore mollitia. Qui praesentium et dolore sed vel laborum autem. Rerum libero laboriosam ut aut est laudantium commodi.', 'Et qui accusantium quos commodi unde optio. Laborum omnis qui cum rerum similique sunt. Saepe deserunt voluptas consequuntur eum aut non molestiae.\n\nVoluptas pariatur dignissimos in omnis error culpa. Odio dolore officiis ex. Eos nihil nihil at rerum dolores id enim. Quibusdam quod explicabo excepturi porro veniam rerum id quia.\n\nPorro perspiciatis eos beatae vel. Blanditiis eum doloremque saepe non. Sequi id exercitationem et assumenda rerum. Voluptas minima voluptates molestiae quia consequuntur.', 0, 0, 0, 1, 'car26.jpg', '1985-07-05 00:00:00', 'Morvan-Michelle', 0, 4, 4),
(34, 'Guerin Gilles', 'Delectus ullam voluptatibus consequuntur qui. Aliquid enim est aliquam architecto quod. Dicta saepe non laboriosam perferendis et sed qui aut.\n\nQuo nemo necessitatibus est consequuntur libero iste. Recusandae quo similique dolorum laudantium. Deserunt rem aspernatur iure qui recusandae hic.\n\nQuo natus voluptatem nemo et consectetur impedit. Omnis odio temporibus eaque dignissimos nesciunt nesciunt maiores. Inventore eum quaerat perspiciatis voluptatum error voluptatum tempore.', 'Nam fugiat ut saepe nam accusantium. Ea saepe qui voluptate.\n\nNon quasi perferendis tempora magnam aliquid. Neque neque odit autem. Consequatur rem quaerat et quia sequi deserunt. Aperiam corporis ipsam illo cupiditate sit laboriosam non.\n\nPariatur aut sed excepturi autem. Iste fugit sunt eligendi nobis. Autem quis numquam et aut sequi. At autem ut ex dolore cupiditate.', 1, 1, 0, 1, 'car27.jpg', '1985-11-16 00:00:00', 'Guerin-Gilles', 1, 4, 9),
(35, 'Dos Santos Richard', 'Aperiam placeat aut sint dolores. Corporis voluptatibus similique iste dignissimos debitis eos. Consectetur sapiente explicabo deserunt qui magnam. Officiis ea voluptates consequuntur facilis pariatur non quo.\n\nRem illo asperiores itaque omnis. Accusamus adipisci a adipisci dolore. Omnis ea doloribus ipsum id ad soluta quia.\n\nUt non doloribus adipisci nihil. Nulla similique dolorum qui repellat repudiandae optio. Dolorem dignissimos vero tenetur aut impedit delectus. Quis sunt voluptas corporis necessitatibus nobis et id laboriosam. Molestiae rem aut odio.', 'Voluptatem quia reprehenderit tempore dolor perferendis illum itaque. Quasi et beatae quo aut. Quia non sequi nesciunt sed veritatis ratione.\n\nQuaerat molestias itaque ab cupiditate autem architecto consequatur. Eos quam quos harum consequuntur voluptas ut. Perferendis neque consequatur qui quidem voluptate. Magni voluptatem sit temporibus veritatis magnam cumque.\n\nDeserunt debitis dolor deleniti. Sed dicta nesciunt facere nihil nemo numquam numquam. Dolorem at harum qui consequatur omnis nulla a ut. Voluptatem earum dolore rem non voluptatem.', 1, 1, 1, 1, 'car28.jpg', '2020-05-31 00:00:00', 'Dos-Santos-Richard', 0, 4, 3),
(36, 'Neveu Alexandria', 'Consequatur incidunt qui enim fugiat beatae. Iure totam nihil aperiam est. Aut voluptatem dicta non ea voluptatem. A ut ea possimus quaerat.\n\nEst ut itaque explicabo tenetur qui nihil dolorum. Tempora fugiat tempore sed officia et officia. Qui explicabo voluptatibus sed.\n\nEt quia fugit dolor facere. Commodi ab qui qui ad sequi qui dolorem. Cupiditate reprehenderit aut neque. Commodi ut dolorum sed corrupti quis. Officia dolores dolores quam eos qui.', 'Tempora quia nihil animi molestias iure qui distinctio qui. Commodi assumenda consequatur autem minima. Vel vel et ratione ipsa. Quo labore consequatur assumenda vel enim ipsum voluptates.\n\nVoluptas ducimus aut voluptates recusandae. Deleniti nulla sint nemo molestiae. Minus voluptates et autem excepturi non impedit consequatur.\n\nTemporibus reprehenderit et velit mollitia. Voluptatem et et numquam. Aut repellendus nemo aut.', 1, 1, 1, 0, 'car29.jpg', '1980-05-29 00:00:00', 'Neveu-Alexandria', 1, 3, 8),
(37, 'Didier Honoré', 'Mollitia nostrum in est inventore quia ipsum quia. Praesentium asperiores omnis et ut.\n\nAutem veritatis omnis rem saepe. Autem qui eos laborum est fuga molestiae. Ex commodi culpa at.\n\nFacere est porro vitae expedita. Pariatur quas velit occaecati et excepturi blanditiis quas. Consequuntur optio porro alias ut accusamus qui. Natus sapiente dolor enim hic. Corporis quibusdam aut sit est delectus debitis.', 'Quod voluptas esse a est pariatur. Repellat ipsa a vero voluptatem. Deserunt amet eaque voluptatem occaecati omnis quod. Sapiente doloremque quam eveniet vero non non numquam.\n\nUt beatae nemo eveniet nihil molestiae ut odio. Et similique totam cumque tempore dolores. Quia cupiditate quo et accusamus ducimus aut quia.\n\nDistinctio velit quasi non accusamus. Accusamus eos nesciunt vel rem. Officia ut iure illo harum omnis provident est ex. Quia commodi et aut praesentium ad excepturi eum.', 0, 0, 1, 0, 'car30.jpg', '1971-03-06 00:00:00', 'Didier-Honoré', 0, 3, 5);

-- --------------------------------------------------------

--
-- Structure de la table `taxi_categories`
--

CREATE TABLE `taxi_categories` (
  `taxi_id` int(11) NOT NULL,
  `categories_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `taxi_categories`
--

INSERT INTO `taxi_categories` (`taxi_id`, `categories_id`) VALUES
(23, 12),
(23, 17),
(23, 21),
(30, 14),
(30, 16);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` int(11) NOT NULL,
  `is_verified` tinyint(1) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `firstname`, `lastname`, `phone`, `is_verified`, `username`) VALUES
(2, 'sarraraouf@hotmail.com', '[\"ROLE_ADMIN\"]', '$2y$13$7iUjnBZO87I8NzPuDArfbuwSm2uDNcCj/uBUrepPcCAvvYZego8Oq', 'SARRA', 'Zemni kassas', 652790339, 0, 'sarrakassas'),
(3, 'hinda@hotmail.fr', '[]', '$2y$13$yk1vP4Rf7vQAuVUkrMlKPeECGozkCzB6JrY2zZZpcpJPcnITHf8SC', 'hinda', 'baboura', 752077804, 0, 'Hindabaaboura'),
(4, 'chihab@hotmail.com', '[]', '$2y$13$vFGIrOBogfOptAm7aoFJZuyMEVQButlhoUwQ3bpncrq/XIlauTHsq', 'Chihab', 'Kassas', 752077804, 0, 'chihabkassas');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `home_slider`
--
ALTER TABLE `home_slider`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Index pour la table `related_taxi`
--
ALTER TABLE `related_taxi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B496C7C7506FF81C` (`taxi_id`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_42C84955A76ED395` (`user_id`),
  ADD KEY `IDX_42C84955506FF81C` (`taxi_id`);

--
-- Index pour la table `reset_password_request`
--
ALTER TABLE `reset_password_request`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_7CE748AA76ED395` (`user_id`);

--
-- Index pour la table `reviews_taxi`
--
ALTER TABLE `reviews_taxi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_6141FA8FA76ED395` (`user_id`),
  ADD KEY `IDX_6141FA8F506FF81C` (`taxi_id`);

--
-- Index pour la table `taxi`
--
ALTER TABLE `taxi`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `taxi_categories`
--
ALTER TABLE `taxi_categories`
  ADD PRIMARY KEY (`taxi_id`,`categories_id`),
  ADD KEY `IDX_2D122CFB506FF81C` (`taxi_id`),
  ADD KEY `IDX_2D122CFBA21214B7` (`categories_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `home_slider`
--
ALTER TABLE `home_slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `related_taxi`
--
ALTER TABLE `related_taxi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `reset_password_request`
--
ALTER TABLE `reset_password_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `reviews_taxi`
--
ALTER TABLE `reviews_taxi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `taxi`
--
ALTER TABLE `taxi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `related_taxi`
--
ALTER TABLE `related_taxi`
  ADD CONSTRAINT `FK_B496C7C7506FF81C` FOREIGN KEY (`taxi_id`) REFERENCES `taxi` (`id`);

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `FK_42C84955506FF81C` FOREIGN KEY (`taxi_id`) REFERENCES `taxi` (`id`),
  ADD CONSTRAINT `FK_42C84955A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `reset_password_request`
--
ALTER TABLE `reset_password_request`
  ADD CONSTRAINT `FK_7CE748AA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `reviews_taxi`
--
ALTER TABLE `reviews_taxi`
  ADD CONSTRAINT `FK_6141FA8F506FF81C` FOREIGN KEY (`taxi_id`) REFERENCES `taxi` (`id`),
  ADD CONSTRAINT `FK_6141FA8FA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `taxi_categories`
--
ALTER TABLE `taxi_categories`
  ADD CONSTRAINT `FK_2D122CFB506FF81C` FOREIGN KEY (`taxi_id`) REFERENCES `taxi` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_2D122CFBA21214B7` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

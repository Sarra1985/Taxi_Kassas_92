<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221216113617 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categories (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, image VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE related_taxi (id INT AUTO_INCREMENT NOT NULL, taxi_id INT NOT NULL, INDEX IDX_B496C7C7506FF81C (taxi_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reservation (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, taxi_id INT DEFAULT NULL, adresse1 VARCHAR(255) NOT NULL, adresse2 VARCHAR(255) NOT NULL, nombre_place INT DEFAULT NULL, nombre_baguage INT DEFAULT NULL, file VARCHAR(255) NOT NULL, is_accept TINYINT(1) DEFAULT NULL, is_payed TINYINT(1) DEFAULT NULL, prix DOUBLE PRECISION DEFAULT NULL, INDEX IDX_42C84955A76ED395 (user_id), INDEX IDX_42C84955506FF81C (taxi_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reset_password_request (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, selector VARCHAR(20) NOT NULL, hashed_token VARCHAR(100) NOT NULL, requested_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', expires_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_7CE748AA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reviews_taxi (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, taxi_id INT NOT NULL, note INT NOT NULL, comment LONGTEXT DEFAULT NULL, INDEX IDX_6141FA8FA76ED395 (user_id), INDEX IDX_6141FA8F506FF81C (taxi_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tags_taxi (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tags_taxi_taxi (tags_taxi_id INT NOT NULL, taxi_id INT NOT NULL, INDEX IDX_7F93C1476D3130D (tags_taxi_id), INDEX IDX_7F93C14506FF81C (taxi_id), PRIMARY KEY(tags_taxi_id, taxi_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE taxi (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, more_information LONGTEXT DEFAULT NULL, is_cpam TINYINT(1) DEFAULT NULL, is_luxe TINYINT(1) DEFAULT NULL, is_van TINYINT(1) DEFAULT NULL, is_fete TINYINT(1) DEFAULT NULL, image VARCHAR(255) NOT NULL, creat_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', tags LONGTEXT NOT NULL, slug VARCHAR(255) NOT NULL, is_free TINYINT(1) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE taxi_categories (taxi_id INT NOT NULL, categories_id INT NOT NULL, INDEX IDX_2D122CFB506FF81C (taxi_id), INDEX IDX_2D122CFBA21214B7 (categories_id), PRIMARY KEY(taxi_id, categories_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, fistname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, phone INT NOT NULL, is_verified TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE related_taxi ADD CONSTRAINT FK_B496C7C7506FF81C FOREIGN KEY (taxi_id) REFERENCES taxi (id)');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955506FF81C FOREIGN KEY (taxi_id) REFERENCES taxi (id)');
        $this->addSql('ALTER TABLE reset_password_request ADD CONSTRAINT FK_7CE748AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE reviews_taxi ADD CONSTRAINT FK_6141FA8FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE reviews_taxi ADD CONSTRAINT FK_6141FA8F506FF81C FOREIGN KEY (taxi_id) REFERENCES taxi (id)');
        $this->addSql('ALTER TABLE tags_taxi_taxi ADD CONSTRAINT FK_7F93C1476D3130D FOREIGN KEY (tags_taxi_id) REFERENCES tags_taxi (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE tags_taxi_taxi ADD CONSTRAINT FK_7F93C14506FF81C FOREIGN KEY (taxi_id) REFERENCES taxi (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE taxi_categories ADD CONSTRAINT FK_2D122CFB506FF81C FOREIGN KEY (taxi_id) REFERENCES taxi (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE taxi_categories ADD CONSTRAINT FK_2D122CFBA21214B7 FOREIGN KEY (categories_id) REFERENCES categories (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE related_taxi DROP FOREIGN KEY FK_B496C7C7506FF81C');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C84955A76ED395');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C84955506FF81C');
        $this->addSql('ALTER TABLE reset_password_request DROP FOREIGN KEY FK_7CE748AA76ED395');
        $this->addSql('ALTER TABLE reviews_taxi DROP FOREIGN KEY FK_6141FA8FA76ED395');
        $this->addSql('ALTER TABLE reviews_taxi DROP FOREIGN KEY FK_6141FA8F506FF81C');
        $this->addSql('ALTER TABLE tags_taxi_taxi DROP FOREIGN KEY FK_7F93C1476D3130D');
        $this->addSql('ALTER TABLE tags_taxi_taxi DROP FOREIGN KEY FK_7F93C14506FF81C');
        $this->addSql('ALTER TABLE taxi_categories DROP FOREIGN KEY FK_2D122CFB506FF81C');
        $this->addSql('ALTER TABLE taxi_categories DROP FOREIGN KEY FK_2D122CFBA21214B7');
        $this->addSql('DROP TABLE categories');
        $this->addSql('DROP TABLE related_taxi');
        $this->addSql('DROP TABLE reservation');
        $this->addSql('DROP TABLE reset_password_request');
        $this->addSql('DROP TABLE reviews_taxi');
        $this->addSql('DROP TABLE tags_taxi');
        $this->addSql('DROP TABLE tags_taxi_taxi');
        $this->addSql('DROP TABLE taxi');
        $this->addSql('DROP TABLE taxi_categories');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE messenger_messages');
    }
}

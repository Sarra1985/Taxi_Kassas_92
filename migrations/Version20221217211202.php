<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221217211202 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reservation CHANGE adresse1 adresse1 VARCHAR(255) NOT NULL, CHANGE adresse2 adresse2 VARCHAR(255) NOT NULL, CHANGE date date DATE NOT NULL, CHANGE heure_depart heure_depart TIME NOT NULL, CHANGE file file VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE taxi ADD placemax INT DEFAULT NULL, ADD bagagemax INT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reservation CHANGE adresse1 adresse1 VARCHAR(255) DEFAULT NULL, CHANGE adresse2 adresse2 VARCHAR(255) DEFAULT NULL, CHANGE date date DATE DEFAULT NULL, CHANGE heure_depart heure_depart TIME DEFAULT NULL, CHANGE file file VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE taxi DROP placemax, DROP bagagemax');
    }
}

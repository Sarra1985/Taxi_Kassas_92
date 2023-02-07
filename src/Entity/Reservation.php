<?php

namespace App\Entity;

use App\Entity\Taxi;
use App\Entity\User;
use App\Repository\ReservationRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReservationRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Reservation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $adresse1 = null;

    #[ORM\Column(length: 255)]
    private ?string $adresse2 = null;

    
    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $heureDepart = null;


    #[ORM\Column(nullable: true)]
    private ?int $nombrePlace = null;

    #[ORM\Column(nullable: true)]
    private ?int $nombreBaguage = null;

    #[ORM\Column(length: 255)]
    private ?string $file = null;

    #[ORM\Column(nullable: true)]
    private ?bool $isAccept = null;

    #[ORM\Column(nullable: true)]
    private ?bool $isPayed = null;

    #[ORM\Column(nullable: true)]
    private ?float $prix = null;

    #[ORM\ManyToOne(inversedBy: 'reservations')]
    private ?User $user = null;

    #[ORM\ManyToOne(inversedBy: 'reservations')]
    private ?Taxi $taxi = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAdresse1(): ?string
    {
        return $this->adresse1;
    }

    public function setAdresse1(string $adresse1): self
    {
        $this->adresse1 = $adresse1;

        return $this;
    }

    public function getAdresse2(): ?string
    {
        return $this->adresse2;
    }

    public function setAdresse2(string $adresse2): self
    {
        $this->adresse2 = $adresse2;

        return $this;
    }

    

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getHeureDepart(): ?\DateTimeInterface
    {
        return $this->heureDepart;
    }

    public function setHeureDepart(\DateTimeInterface $heureDepart): self
    {
        $this->heureDepart = $heureDepart;

        return $this;
    }

    public function getNombrePlace(): ?int
    {
        return $this->nombrePlace;
    }

    public function setNombrePlace(?int $nombrePlace): self
    {
        $this->nombrePlace = $nombrePlace;

        return $this;
    }

    public function getNombreBaguage(): ?int
    {
        return $this->nombreBaguage;
    }

    public function setNombreBaguage(?int $nombreBaguage): self
    {
        $this->nombreBaguage = $nombreBaguage;

        return $this;
    }

    public function getFile(): ?string
    {
        return $this->file;
    }

    public function setFile(string $file): self
    {
        $this->file = $file;

        return $this;
    }

    public function isIsAccept(): ?bool
    {
        return $this->isAccept;
    }

    public function setIsAccept(?bool $isAccept): self
    {
        $this->isAccept = $isAccept;

        return $this;
    }

    public function isIsPayed(): ?bool
    {
        return $this->isPayed;
    }

    public function setIsPayed(?bool $isPayed): self
    {
        $this->isPayed = $isPayed;

        return $this;
    }

    public function getPrix(): ?float
    {
        return $this->prix;
    }

    public function setPrix(?float $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getTaxi(): ?Taxi
    {
        return $this->taxi;
    }

    public function setTaxi(?Taxi $taxi): self
    {
        $this->taxi = $taxi;

        return $this;
    }

    #[ORM\PostRemove]
    public function deletefile(): void
    {
        if (file_exists(__DIR__ . "/../../public/assets/uploads/files/" . $this->file)) {
            unlink(__DIR__ . "/../../public/assets/uploads/files/" . $this->file);
        }
    }

   /* public function __toString()
    {
        return $this->date;
    }*/

    public function __toString()
    {
        return $this->taxi;
    }
}

<?php

namespace App\Entity;

use App\Repository\RelatedTaxiRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RelatedTaxiRepository::class)]
class RelatedTaxi
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'relatedTaxis')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Taxi $taxi = null;

    public function getId(): ?int
    {
        return $this->id;
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
}

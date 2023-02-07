<?php

namespace App\Entity;

//use App\Repository\SearchRepository;
use Doctrine\DBAL\Types\Types;
//use Doctrine\ORM\Mapping as ORM;

//#[ORM\Entity(repositoryClass: SearchRepository::class)]
class Search
{
   // #[ORM\Id]
   // #[ORM\GeneratedValue]
   // #[ORM\Column]
   // private ?int $id = null;


   // #[ORM\Column(nullable: true)]
    private/* ?int*/ $minplace = null;

   // #[ORM\Column(nullable: true)]
    private /*?int*/ $maxplace = null;

   // #[ORM\Column(nullable: true)]
    private /*?int*/ $minbagage = null;

   // #[ORM\Column(nullable: true)]
    private /*?int*/ $maxbagage = null;

   // #[ORM\Column(type: Types::ARRAY, nullable: true)]
   /**
    *
    * @var Categories[]
    */
    private /*array*/ $categories = [];
    

  /* public function getId(): ?int
    {
        return $this->id;
    }*/

    public function getMinplace(): ?int
    {
        return $this->minplace;
    }

    public function setMinplace(?int $minplace): self
    {
        $this->minplace = $minplace;

        return $this;
    }

    public function getMaxplace(): ?int
    {
        return $this->maxplace;
    }

    public function setMaxplace(?int $maxplace): self
    {
        $this->maxplace = $maxplace;

        return $this;
    }

    public function getMinbagage(): ?int
    {
        return $this->minbagage;
    }

    public function setMinbagage(?int $minbagage): self
    {
        $this->minbagage = $minbagage;

        return $this;
    }

    public function getMaxbagage(): ?int
    {
        return $this->maxbagage;
    }

    public function setMaxbagage(?int $maxbagage): self
    {
        $this->maxbagage = $maxbagage;

        return $this;
    }

    public function getCategories(): array
    {
        return $this->categories;
    }

    public function setCategories(?array $categories): self
    {
        $this->categories = $categories;

        return $this;
    }
}

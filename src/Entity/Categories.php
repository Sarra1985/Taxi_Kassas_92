<?php

namespace App\Entity;

use App\Repository\CategoriesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoriesRepository::class)]
class Categories
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $image = null;

    #[ORM\ManyToMany(targetEntity: Taxi::class, mappedBy: 'category')]
    private Collection $taxis;

    public function __construct()
    {
        $this->taxis = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    /**
     * @return Collection<int, Taxi>
     */
    public function getTaxis(): Collection
    {
        return $this->taxis;
    }

    public function addTaxi(Taxi $taxi): self
    {
        if (!$this->taxis->contains($taxi)) {
            $this->taxis->add($taxi);
            $taxi->addCategory($this);
        }

        return $this;
    }

    public function removeTaxi(Taxi $taxi): self
    {
        if ($this->taxis->removeElement($taxi)) {
            $taxi->removeCategory($this);
        }

        return $this;
    }
}

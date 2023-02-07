<?php

namespace App\Entity;

use App\Repository\TaxiRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TaxiRepository::class)]
class Taxi
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $moreInformation = null;

    #[ORM\Column(nullable: true)]
    private ?bool $isCpam = null;

    #[ORM\Column(nullable: true)]
    private ?bool $isLuxe = null;

    #[ORM\Column(nullable: true)]
    private ?bool $isVan = null;

    #[ORM\Column(nullable: true)]
    private ?bool $isFete = null;

    #[ORM\Column(length: 255)]
    private ?string $image = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $creatAt = null;

  /*  #[ORM\Column(type: Types::TEXT)]
    private ?string $tags = null;*/

    #[ORM\Column(length: 255)]
    private ?string $slug = null;


    #[ORM\Column(nullable: true)]
    private ?bool $isFree = null;

    #[ORM\ManyToMany(targetEntity: Categories::class, inversedBy: 'taxis')]
    private Collection $category;

    #[ORM\OneToMany(mappedBy: 'taxi', targetEntity: RelatedTaxi::class)]
    private Collection $relatedTaxis;

    #[ORM\OneToMany(mappedBy: 'taxi', targetEntity: ReviewsTaxi::class)]
    private Collection $reviewsTaxis;

    #[ORM\OneToMany(mappedBy: 'taxi', targetEntity: Reservation::class)]
    private Collection $reservations;

    #[ORM\Column(nullable: true)]
    private ?int $placemax = null;

    #[ORM\Column(nullable: true)]
    private ?int $bagagemax = null;

    public function __construct()
    {
        $this->category = new ArrayCollection();
        $this->relatedTaxis = new ArrayCollection();
        $this->reviewsTaxis = new ArrayCollection();
        $this->reservations = new ArrayCollection();
        $this->creatAt=new \DateTimeImmutable();
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

    public function isIsCpam(): ?bool
    {
        return $this->isCpam;
    }

    public function setIsCpam(?bool $isCpam): self
    {
        $this->isCpam = $isCpam;

        return $this;
    }

    public function isIsLuxe(): ?bool
    {
        return $this->isLuxe;
    }

    public function setIsLuxe(?bool $isLuxe): self
    {
        $this->isLuxe = $isLuxe;

        return $this;
    }

    public function isIsVan(): ?bool
    {
        return $this->isVan;
    }

    public function setIsVan(?bool $isVan): self
    {
        $this->isVan = $isVan;

        return $this;
    }

    public function isIsFete(): ?bool
    {
        return $this->isFete;
    }

    public function setIsFete(?bool $isFete): self
    {
        $this->isFete = $isFete;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getCreatAt(): ?\DateTimeImmutable
    {
        return $this->creatAt;
    }

    public function setCreatAt(\DateTimeImmutable $creatAt): self
    {
        $this->creatAt = $creatAt;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getMoreInformation(): ?string
    {
        return $this->moreInformation;
    }

    public function setMoreInformation(?string $moreInformation): self
    {
        $this->moreInformation = $moreInformation;

        return $this;
    }

    public function isIsFree(): ?bool
    {
        return $this->isFree;
    }

    public function setIsFree(?bool $isFree): self
    {
        $this->isFree = $isFree;

        return $this;
    }
    
   /* public function __toString()
    {
        return $this->name;
    }*/

    /**
     * @return Collection<int, Categories>
     */
    public function getCategory(): Collection
    {
        return $this->category;
    }

    public function addCategory(Categories $category): self
    {
        if (!$this->category->contains($category)) {
            $this->category->add($category);
        }

        return $this;
    }

    public function removeCategory(Categories $category): self
    {
        $this->category->removeElement($category);

        return $this;
    }

 


    /**
     * @return Collection<int, RelatedTaxi>
     */
    public function getRelatedTaxis(): Collection
    {
        return $this->relatedTaxis;
    }

    public function addRelatedTaxi(RelatedTaxi $relatedTaxi): self
    {
        if (!$this->relatedTaxis->contains($relatedTaxi)) {
            $this->relatedTaxis->add($relatedTaxi);
            $relatedTaxi->setTaxi($this);
        }

        return $this;
    }

    public function removeRelatedTaxi(RelatedTaxi $relatedTaxi): self
    {
        if ($this->relatedTaxis->removeElement($relatedTaxi)) {
            // set the owning side to null (unless already changed)
            if ($relatedTaxi->getTaxi() === $this) {
                $relatedTaxi->setTaxi(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ReviewsTaxi>
     */
    public function getReviewsTaxis(): Collection
    {
        return $this->reviewsTaxis;
    }

    public function addReviewsTaxi(ReviewsTaxi $reviewsTaxi): self
    {
        if (!$this->reviewsTaxis->contains($reviewsTaxi)) {
            $this->reviewsTaxis->add($reviewsTaxi);
            $reviewsTaxi->setTaxi($this);
        }

        return $this;
    }

    public function removeReviewsTaxi(ReviewsTaxi $reviewsTaxi): self
    {
        if ($this->reviewsTaxis->removeElement($reviewsTaxi)) {
            // set the owning side to null (unless already changed)
            if ($reviewsTaxi->getTaxi() === $this) {
                $reviewsTaxi->setTaxi(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Reservation>
     */
    public function getReservations(): Collection
    {
        return $this->reservations;
    }

    public function addReservation(Reservation $reservation): self
    {
        if (!$this->reservations->contains($reservation)) {
            $this->reservations->add($reservation);
            $reservation->setTaxi($this);
        }

        return $this;
    }

    public function removeReservation(Reservation $reservation): self
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getTaxi() === $this) {
                $reservation->setTaxi(null);
            }
        }

        return $this;
    }

    public function getPlacemax(): ?int
    {
        return $this->placemax;
    }

    public function setPlacemax(?int $placemax): self
    {
        $this->placemax = $placemax;

        return $this;
    }

    public function getBagagemax(): ?int
    {
        return $this->bagagemax;
    }

    public function setBagagemax(?int $bagagemax): self
    {
        $this->bagagemax = $bagagemax;

        return $this;
    }
}

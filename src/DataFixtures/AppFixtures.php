<?php

namespace App\DataFixtures;


use DateTime;
use Faker\Factory;
use App\Entity\Taxi;
use DateTimeImmutable;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {

        $faker = Factory::create('fr_FR');
        for ($i=1; $i <= 30; $i++) { 


           $name=$faker->lastName().' '.$faker->firstName();
            $placemax = $faker->numberBetween(3,7);
            $baguagemax = $faker->numberBetween(3, 9);
          
           
            $taxi= (new Taxi)
                ->setName($name)
                ->setDescription($faker->paragraphs(3, true))
                ->setIsCpam($faker->boolean())
                ->setIsLuxe($faker->boolean())
                ->setIsVan($faker->boolean())
                ->setIsFete($faker->boolean())
                ->setIsFree($faker->boolean())
                ->setImage('car'.$i.'.jpg')
                ->setCreatAt(new DateTimeImmutable($faker->date()))
                ->setSlug(str_replace(" ", "-", $name))
                ->setMoreInformation($faker->paragraphs(3, true))
                ->setPlacemax($placemax)
                ->setBagagemax($baguagemax);
            $manager->persist($taxi);
        }
        $manager->flush();
    }
}

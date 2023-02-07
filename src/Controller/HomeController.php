<?php

namespace App\Controller;

use App\Entity\Taxi;
use App\Entity\User;
use App\Entity\Search;
use App\Form\SearchType;
use App\Entity\HomeSlider;
use App\Entity\Reservation;
use App\Repository\TaxiRepository;
use App\Repository\HomeSliderRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(TaxiRepository $taxiRepository,HomeSliderRepository $repoHomeSlider, Request $request): Response
    {
        $taxis=$taxiRepository->findAll();
        $taxiCpam=$taxiRepository->findByIsCpam(1);
        $taxiFete=$taxiRepository->findByIsFete(1);
        $taxiLuxe=$taxiRepository->findByIsLuxe(1);
        $taxiVan=$taxiRepository->findByIsVan(1);
        $homeSlider=$repoHomeSlider->findBy(['isDisplayed'=>true]);
       // dd($taxis,$taxiBest,$taxiSpecialOffer,$taxiNew,$taxiFeatured);
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'homeSlider'=> $homeSlider,
            'taxis'=> $taxis,
            'taxiCpam' => $taxiCpam,
            'taxiFete' => $taxiFete,
            'taxiLuxe' => $taxiLuxe,
            'taxiVan' => $taxiVan, ]);

    }



}

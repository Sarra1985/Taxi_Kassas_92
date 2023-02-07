<?php

namespace App\Controller;

use App\Entity\Taxi;
use App\Entity\User;
use App\Entity\Search;
use App\Form\SearchType;
use App\Entity\Reservation;
use App\Repository\TaxiRepository;
use App\Repository\HomeSliderRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Component\HttpFoundation\RequestStack;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TaxiController extends AbstractController
{
 // private TaxiRepository $repository;

 /* public function __construct(ManagerRegistry $manager)
  {
    $this->repository=$manager->getRepository(Taxi::class);
  }*/
    #[Route('/taxi', name: 'taxi',methods:["GET","POST"])]
    public function index(TaxiRepository $taxiRepository, Request $request,PaginatorInterface $paginator): Response
    {
      //$taxis=$taxiRepository->findAll();
      $search=new Search();
      $form=$this->createForm(SearchType::class,$search);
      $form->handleRequest($request);
     
   if($form->isSubmitted() && $form->isValid())
   {
      //$data=$form->getData();
      $taxis=$taxiRepository->findWithSearch($search);
   
  } else {
    $taxis = $taxiRepository->findBy([]);
}

$pagination = $paginator->paginate(
  $taxis,
  $request->query->getInt('page', 1),
  8
);

  
   return $this->render('taxi/index.html.twig', [
    'controller_name' => 'HomeController',
    //'taxis'=> $taxis,
    'pagination'=> $pagination,
    'search'=>$form->createView()]);
       
    }

    #[Route('/taxis{id}', name: 'taxi_detail', methods:["GET", "POST"], requirements:['id' => "\d+"])]
    public function show(?Taxi $taxi ): Response
    {
      //$reservation=new Reservation();
      //$taxi->addReservation($reservation);
      if(!$taxi)
      {
        return $this->redirectToRoute("taxi");
      }
      return $this->render("taxi/single_taxi.html.twig",[
        'taxi'=>$taxi,
        //'reservation'=>$reservation,

      ]);
    }


}


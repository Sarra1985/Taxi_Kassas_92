<?php

namespace App\Controller\Account;

use App\Entity\Taxi;
use App\Entity\Reservation;
use App\Form\ReservationType;
use App\Repository\TaxiRepository;
use App\Repository\ReservationRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ReservationController extends AbstractController
{


    #[Route('/taxi{id}_reservation_new', name: 'app_reservation_new', methods: ['GET', 'POST'])]
    public function new(Taxi $taxi,Request $request, ReservationRepository $reservationRepository,ManagerRegistry $manager): Response
    {
        $user=$this->getUser();
        $reservation = new Reservation();
        if($user)
        {       
        $form = $this->createForm(ReservationType::class, $reservation);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
           
            $reservation ->setTaxi($taxi);
            $reservation ->setUser($user);
            $file = $form->get('file')->getData();
               if($file)
                {
                 $fileName = md5(uniqid()). '.' . $file->guessExtension();
                 $file->move(
                 $this->getParameter(self::PARAMETER),
                   $fileName);
                   $reservation ->setFile($fileName);
                 }
                    $om =$manager->getManager(); 
                    $om->persist($reservation);
                    $om->flush();
            return $this->redirectToRoute('success', [], Response::HTTP_SEE_OTHER);
            
          }

        return $this->renderForm('reservation/new.html.twig', [
            'reservation' => $reservation,
            'form' => $form,
           
        ]);
      }
    else
    {
      return $this->redirectToRoute('account', [], Response::HTTP_SEE_OTHER);
     } 
}



#[Route('/reservation_new', name: 'reservation_new', methods: ['GET', 'POST'])]
    public function newBis(Request $request,TaxiRepository $taxiRepository, ReservationRepository $reservationRepository,ManagerRegistry $manager): Response
    {
        $user=$this->getUser();
        $reservation = new Reservation();
        if($user)
        {       
        $form = $this->createForm(ReservationType::class, $reservation);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
          
            $reservation ->setUser($user);
            $file = $form->get('file')->getData();
               if($file)
                {
                 $fileName = md5(uniqid()). '.' . $file->guessExtension();
                 $file->move(
                 $this->getParameter(self::PARAMETER),
                   $fileName);
                   $reservation ->setFile($fileName);
                 }
                    $om =$manager->getManager(); 
                    $om->persist($reservation);
                    $om->flush();
            return $this->redirectToRoute('success', [], Response::HTTP_SEE_OTHER);
            
          }

        return $this->renderForm('reservation/newBis.html.twig', [
            'reservation' => $reservation,
            'form' => $form,
           
        ]);
      }
    else
    {
      return $this->redirectToRoute('account', [], Response::HTTP_SEE_OTHER);
     } 
}

#[Route('/reservationsuccess', name: 'success', methods: ['GET'])]
public function success(): Response
{
    return $this->render('reservation/success.html.twig');
}   


#[Route('/reservation{id}_edit', name: 'app_reservation_edit', methods: ['GET', 'POST'])]
public function edit(Request $request, int $id/*Reservation $reservation*/, ReservationRepository $reservationRepository,ManagerRegistry $manager): Response
{
        $reservation = $manager->getRepository(Reservation::class)->find($id);
        $form = $this->createForm(ReservationType::class, $reservation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //$reservationRepository->save($reservation, true);
            $om =$manager->getManager(); /*$this->getDoctrine()->getManager();*/
            $om->persist($reservation);
            $om->flush();
            return $this->redirectToRoute('app_reservation_show', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('reservation/edit.html.twig', [
            'reservation' => $reservation,
            'form' => $form,
        ]);
}

#[Route('/reservation{id}', name: 'app_reservation_delete', methods: ['POST'])]
public function delete(Request $request, Reservation $reservation, ReservationRepository $reservationRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$reservation->getId(), $request->request->get('_token'))) {
            $reservationRepository->remove($reservation, true);
        }

        return $this->redirectToRoute('app_reservation_index', [], Response::HTTP_SEE_OTHER);
    }
}

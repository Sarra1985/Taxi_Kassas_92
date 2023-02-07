<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Contact;
use App\Form\ContactType;
use App\Services\EmailSender;
use App\Repository\ContactRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ContactController extends AbstractController
{
    #[Route('/contact', name: 'contact_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ContactRepository $contactRepository,ManagerRegistry $manager,EmailSender $emailSender): Response
    {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //$contactRepository->save($contact, true);
            $om =$manager->getManager(); 
            $om->persist($contact);
            $om->flush();

            $user=(new User())
                  ->setEmail('sarraraouf@hotmail.com')
                  ->setFirstname('Taxi Kassas 92')
                  ->setLastname('Réservation Taxi');
            $emailSender->sendEmailByMailJet($user);      

            $contact=new Contact();
            $form=$this->createForm(ContactType::class,$contact);

           $this->addFlash("contact_success",'Votre message a été envoyé. Un conseiller vous répondra très rapidement ! ');
        }

        if($form->isSubmitted() && !$form->isValid())
        {
            $this->addFlash("contact_error",'le formulaire contient des erreurs . Veuillez corriger et essayer à nouveau  ! ');
        }

        return $this->renderForm('contact/new.html.twig', [
            'contact' => $contact,
            'form' => $form,
        ]);
    }

    
}

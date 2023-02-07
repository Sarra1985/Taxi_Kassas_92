<?php

namespace App\Form;

use App\Entity\Reservation;
//use Doctrine\DBAL\Types\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class ReservationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
          ->add('adresse1',TextType::class ,[
            'label' => 'adresse de départ  ',
            'attr'=>[
                'class' => 'adresse1',
                'name'=>'adresse1'
                ]
            ] )
           ->add('adresse2',TextType::class ,[
            'label' => "adresse d'arrivée ",
            'attr'=>[
                'class' => 'adresse2',
                'name'=>'adresse2'
                ]
            ] )
           ->add('date', DateType::class)
            ->add('heureDepart')
            ->add('nombrePlace')
            ->add('nombreBaguage')
            ->add('file',FileType::class, [
                'label' => 'Telecharger Votre CPAM (PDF)',
                'mapped' => false,
                'required' => false,
                
            ])
           // ->add('isAccept')
            ->add('isPayed')
           // ->add('prix')
           // ->add('user')
           // ->add('taxi')
           ->add('submit',SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Reservation::class,
        ]);
    }
}

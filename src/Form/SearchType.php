<?php

namespace App\Form;
use App\Entity\Categories;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\NumberType;


class SearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('categories',EntityType::class , [
                'class'=> Categories::class,
                'choice_label'=>'name',
                'label'=> false,
                'required' => true,
                'expanded' => true,
                 'multiple'=> true,
                
                'attr'=>[
                'class' => 'categoriesmultiple',
                 ] 
                ]
           )
            ->add('minplace',NumberType::class,[
                'required'=>false,
                'label'=>false,  
                'attr'=>[ 'placeholder'=>'min ...']
            ])
            ->add('maxplace',NumberType::class,[
                'required'=>false,
                'label'=>false,  
                'attr'=>[ 'placeholder'=>'max ...']
            ])
            ->add('minbagage',NumberType::class,[
                'required'=>false,
                'label'=>false,  
                'attr'=>[ 'placeholder'=>'min ...']
            ])
            ->add('maxbagage',NumberType::class,[
                'required'=>false,
                'label'=>false,  
                'attr'=>[ 'placeholder'=>'max ...']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            //'data_class' => SearchData::class,
            //'method' => 'GET',
            'csrf_protection' => false
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}

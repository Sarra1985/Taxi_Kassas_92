<?php

namespace App\Controller\Admin;

use App\Entity\Taxi;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;

class TaxiCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Taxi::class;
    }

   
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('name'),
            SlugField::new('slug')->setTargetFieldName('name'),
            TextEditorField::new('description')->hideOnIndex(),
            TextEditorField::new('moreInformation')->hideOnIndex(),
            //DateField::new('createdAt')->setFormat('dd-MM-yyyy'),
            BooleanField::new('isCpam','Taxi CPAM'),
            BooleanField::new('isLuxe','Taxi Luxe'),
            BooleanField::new('isVan', 'Taxi Van'),
            BooleanField::new('isFete','Taxi Fete'),
            BooleanField::new('isFree','Taxi est Libre'),
            AssociationField::new('category')->autocomplete(),
            ImageField::new('image')->setBasePath('/assets/uploads/taxis/')
            ->setUploadDir('/public/assets/uploads/taxis/')
            ->setUploadedFileNamePattern('[randomhash].[extension]')
            ->setRequired(false),
        ];
    }
  
}

/*namespace App\Controller\Admin;

use App\Entity\Taxi;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class TaxiCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Taxi::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    
}*/

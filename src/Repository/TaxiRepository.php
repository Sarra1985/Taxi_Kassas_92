<?php

namespace App\Repository;

use App\Entity\Taxi;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Taxi>
 *
 * @method Taxi|null find($id, $lockMode = null, $lockVersion = null)
 * @method Taxi|null findOneBy(array $criteria, array $orderBy = null)
 * @method Taxi[]    findAll()
 * @method Taxi[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TaxiRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Taxi::class);
    }

    public function save(Taxi $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Taxi $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
    public function findWithSearch($search)
    {
        //return 
        $query=$this->createQueryBuilder('p');

        if($search->getMinplace())
        {
            $query=$query->andWhere('p.placemax >'.$search->getMinplace());
        }
        if($search->getMaxplace())
        {
            $query=$query->andWhere('p.placemax <'.$search->getMaxplace());
        }
        if($search->getMinbagage())
        {
            $query=$query->andWhere('p.bagagemax >'.$search->getMinbagage());
        }
        if($search->getMaxbagage())
        {
            $query=$query->andWhere('p.bagagemax <'.$search->getMaxbagage());
        }
        if($search->getCategories())
        {
            $query=$query->join('p.category','c')
                        ->andWhere('c.id IN (:categories)')
                        ->setParameter('categories', $search->getCategories());
        }

        return $query->getQuery()->getResult();
    }

//    /**
//     * @return Taxi[] Returns an array of Taxi objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('t.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Taxi
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}

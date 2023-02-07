<?php

namespace App\Repository;

use App\Entity\RelatedTaxi;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<RelatedTaxi>
 *
 * @method RelatedTaxi|null find($id, $lockMode = null, $lockVersion = null)
 * @method RelatedTaxi|null findOneBy(array $criteria, array $orderBy = null)
 * @method RelatedTaxi[]    findAll()
 * @method RelatedTaxi[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RelatedTaxiRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RelatedTaxi::class);
    }

    public function save(RelatedTaxi $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(RelatedTaxi $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return RelatedTaxi[] Returns an array of RelatedTaxi objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('r.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?RelatedTaxi
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}

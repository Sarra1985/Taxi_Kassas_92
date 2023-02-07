<?php

namespace App\Repository;

use App\Entity\ReviewsTaxi;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ReviewsTaxi>
 *
 * @method ReviewsTaxi|null find($id, $lockMode = null, $lockVersion = null)
 * @method ReviewsTaxi|null findOneBy(array $criteria, array $orderBy = null)
 * @method ReviewsTaxi[]    findAll()
 * @method ReviewsTaxi[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReviewsTaxiRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ReviewsTaxi::class);
    }

    public function save(ReviewsTaxi $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ReviewsTaxi $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ReviewsTaxi[] Returns an array of ReviewsTaxi objects
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

//    public function findOneBySomeField($value): ?ReviewsTaxi
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}

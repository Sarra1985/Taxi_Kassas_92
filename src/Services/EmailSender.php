<?php 
namespace App\Services; 

use App\Entity\User;
//use App\Entity\EmailModel;
//use GuzzleHttp\Client;
//use Mailjet\Client;
use Mailjet\Resources;


class EmailSender{
public function sendEmailByMailJet(User $user){

    $mj = new \Mailjet\Client('d6f49d6fbb2340b08a96f893c754f774','372db442c198d57e11d511d63ecd0874',true,['version' => 'v3.1']);
  $body = [
    'Messages' => [
      [
        'From' => [
          'Email' => "sarraraouf@hotmail.com",
          'Name' => "SARRA"
        ],
        'To' => [
          [
            'Email' => $user->getEmail(),
            'Name' => $user->getFullName()
          ]
        ],
        'Subject' => " Nouveau Message De Taxi Kassas 92",
        'TextPart' => "My first Mailjet email",
        'HTMLPart' => "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
        'CustomID' => "AppGettingStartedTest",
        'TemplateID'=> 10669210 ,
      ]
    ]
  ];
  $response = $mj->post(Resources::$Email, ['body' => $body]);
 // $response->success() && var_dump($response->getData());
}}
?>

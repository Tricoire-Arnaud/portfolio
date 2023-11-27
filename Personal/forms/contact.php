<?php
  // Remplacez 'VOTRE_CLE_API' par votre clé API Sendinblue
  $api_key = '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';

  $adresse_email_de_reception = 'Arnaud.tricoire@hotmail.com';

  // Récupérez les données du formulaire
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Créez le tableau de données pour l'API Sendinblue
  $data = array(
    'to' => array(array('email' => $adresse_email_de_reception)),
    'cc' => array(),
    'bcc' => array(),
    'replyTo' => array('email' => $email),
    'subject' => $subject,
    'text' => $message,
    'html' => "<p>$message</p>",
    'attachment' => array()
  );

  // Convertissez le tableau de données en JSON
  $json_data = json_encode($data);

  // Utilisez cURL pour envoyer l'e-mail via l'API Sendinblue
  $ch = curl_init('https://api.sendinblue.com/v3/smtp/email');
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'api-key: ' . $api_key));
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

  // Exécutez la requête cURL
  $result = curl_exec($ch);

  // Fermez la session cURL
  curl_close($ch);

  // Affichez la réponse de l'API (pour le débogage)
  echo $result;
?>

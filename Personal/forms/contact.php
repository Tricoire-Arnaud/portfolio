<?php
  /**
   * Nécessite la bibliothèque "PHP Email Form"
   * La bibliothèque "PHP Email Form" est disponible uniquement dans la version professionnelle du modèle.
   * La bibliothèque doit être téléchargée à l'emplacement suivant : vendor/php-email-form/php-email-form.php
   * Pour plus d'informations et d'aide : https://bootstrapmade.com/php-email-form/
   */

  // Remplacez contact@example.com par votre véritable adresse e-mail de réception
  $adresse_email_de_reception = 'Arnaud.tricoire@hotmail.com';

  if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
    include($php_email_form);
  } else {
    die('Impossible de charger la bibliothèque "PHP Email Form" !');
  }

  $contact = new $php_email_form;
  $contact->ajax = true;
  
  $contact->to = $adresse_email_de_reception;
  $contact->from_name = $_POST['name'];
  $contact->from_email = $_POST['email'];
  $contact->subject = $_POST['subject'];

  // Décommentez le code ci-dessous si vous souhaitez utiliser SMTP pour envoyer des e-mails. Vous devez entrer vos informations SMTP correctes.
  /*
  $contact->smtp = array(
    'host' => 'exemple.com',
    'username' => 'exemple',
    'password' => 'mot_de_passe',
    'port' => '587'
  );
  */

  $contact->add_message($_POST['name'], 'De');
  $contact->add_message($_POST['email'], 'Email');
  $contact->add_message($_POST['message'], 'Message', 10);

  echo $contact->send();
?>

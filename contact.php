<?php
  if($_POST["submit"]){
    $recipient = "duellrdh@gmail.com";
    $subject = "Portfolio Contact Form";
    $sender = $_POST["firstName"];
    $senderEmail = $POST["email"];
    $message= $_POST["comment"];

    $mailBody = "Name: $sender\nEmail: $email\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$email>");

    $thankYou = "<p> Thank you! Your message has been sent. </p>";
  }
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Contact Jessica</title>
    <link rel="stylesheet" href="contactStyle.css">
  </head>
  <body>
    <div class="body-wrapper">
      <div class="center">
        <div class="header">
          <h1>Contact Jessica Duell</h1>
        </div>
        <div class="links">
          <div class="link">
            <img src="./img/home.png" alt="home"><a href="index.html">Home</a>
          </div>
          <div class="link">
            <img src="./img/portfolio.png" alt="portfolio"> <a href="portfolio.html">Portfolio</a>
          </div>
          <div class="link">
            <img src="./img/resume.png" alt="resume">  <a href="resume.html">Resume</a>
          </div>
          <div class="link">
            <img src="./img/contact.png" alt="contact">  <a href="contact.php">Contact Me</a>
          </div>
        </div>
        <p>If you are interested in reaching out to me please fill out and submit the form below.</p>
        <div class="form">
          <form id="contactForm" action = "contact.php" method="post">
            <label for="firstName">First Name:</label><br>
            <input type="text" class="type" name="firstName"><br>
            <label for="lastName">Last Name:</label> <br>
            <input type="text" class="type" name="lastName"><br>
            <label for="email">Email:</label> <br>
            <input type="text" class="type" name="email"><br>
            <label for="comment">Questions or Comments:</label> <br>
            <textarea name="comment" class="type" form = "contactForm" rows="8" cols="80"></textarea><br>
            <div id="submitContainer">
              <input type="submit" value="Submit">
            </div>
          </form>
          <br>

        </div>
          <div class="footer">
            <a target="_blank" href="https://github.com/jduell12"> <img id = "github" src="./img/github32.png" alt="Github logo"></a>
            <a target="_blank" href="https://www.linkedin.com/in/jessicaduell/"><img id = "linkedin" src="./img/linkedin.png" alt="Linkedin logo"></a>
          </div>
      </div>
    </div>
  </body>
</html>

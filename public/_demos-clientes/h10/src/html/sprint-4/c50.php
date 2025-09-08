<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c50</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

  <section class="c50__container border">
    <div id="mapa" class="mapa"></div>
  </section>

<?php if($include_no == false){ ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNAkZFUwm1V7Jcd4d0B5sw570K1SrSWXc&callback=initMap"></script>-->
    <script src="../../../js/_c50.js"></script>
  </body>
</html>
<?php } ?>

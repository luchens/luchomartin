<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c62</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

  <div class="c62__container">
    <section class="banner-hero js-banner-hero js-carousel">
      <div class="slick-slider-holder">
        <div class="slick-slider">
          <div class="banner-hero__item">
            <img src="../../../src/images/image-123.png" alt="" />
          </div>
          <div class="banner-hero__item">
            <img src="../../../src/images/image-123.png" alt="" />
          </div>
          <div class="banner-hero__item">
            <img src="../../../src/images/image-123.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="c62__container buscador-avanzado">
    <div class="container-fix">
      <?php include("../modules/c7-ficha-hotel.php"); ?>
    </div>
  </div>
  <section class="c62__container inpage">
    <div class="tabs-holder">
      <div class="container-fix">
        <ul class="tabs">
            <li><a href="/src/html/pages/ficha-hotel.php" class="activo">El hotel</a></li>
            <li><a href="/src/html/pages/ficha-habitaciones.php">Habitaciones</a></li>
            <li><a href="/src/html/pages/ficha-galeria.php">Galería</a></li>
            <li><a href="/src/html/pages/ficha-restaurantes.php">Restaurantes</a></li>
            <li><a href="/src/html/pages/ficha-spa.php">Spa</a></li>
            <li><a href="/src/html/pages/ficha-ofertas.php">Ofertas</a></li>
            <li><a href="/src/html/pages/ficha-privilege.php">Privilege</a></li>
            <li><a href="/src/html/pages/ficha-reuniones.php">Reuniones y eventos</a></li>
            <li><a href="/src/html/pages/ficha-familias.php">Daisy Club</a></li>
            <li><a href="/src/html/pages/ficha-blue-team.php">Deportes y Animación</a></li>
            <li><a href="/src/html/pages/ficha-perfect-day.php">Perfect Day</a></li>
            <li class="btn-mas"><a href="#">Más</a></li>
        </ul>
      </div>
    </div>
  </section>

<?php if($include_no == false){ ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="../../../js/moment.min.js"></script>
    <script type="text/javascript" src="../../../js/daterangepicker.min.js"></script>
    <script type="text/javascript" src="../../../js/_c1.js"></script>
    <script type="text/javascript" src="../../../js/_c7.js"></script>
    <script type="text/javascript" src="../../../js/_c62.js"></script>
    <script type="text/javascript" src="../../../js/general.js"></script>
  </body>
</html>
<?php } ?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <title>Hotel - Restaurantes</title>
    <link rel="shortcut icon" href="../../../src/icons/favicon.ico" type="image/vnd.microsoft.icon" />
    <link rel="stylesheet" href="../../../css/style-ficha-restaurantes.css">
  </head>
  <body class="ficha-hotel">
    <?php $include_no = true; include("../sprint-2/c1-topbar-main.php"); ?>
    <div class="c2-c3__container ficha-galeria">
      <?php $include_no = true; include("../modules/c2-c3-ficha-restaurantes.php"); ?>
    </div>
    <div class="c62__container buscador-avanzado is-hidden">
      <div class="container-fix">
      <?php include("../modules/c7-ficha-tabs.php"); ?>
      </div>
    </div>

    <?php $include_no = true; include("../modules/c6-ficha-restaurantes.php"); ?>
    <?php $include_no = true; include("../sprint-4/c58.php"); ?>
    <?php $include_no = true; include("../sprint-4/c29.php"); ?>
    <?php $include_no = true; include("../sprint-4/c55.php"); ?>
    <?php $include_no = true; include("../sprint-1/footer.php"); ?>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="../../../js/SmoothScroll.min.js"></script>
    <script type="text/javascript" src="../../../js/aos.js"></script>
    <script type="text/javascript" src="../../../js/slick.min.js"></script>
    <script type="text/javascript" src="../../../js/moment.min.js"></script>
    <script type="text/javascript" src="../../../js/daterangepicker.min.js"></script>
    <script type="text/javascript" src="../../../js/acordeontoggler.js"></script>
    <script type="text/javascript" src="../../../js/jquery.countdown.min.js"></script>
    <script type="text/javascript" src="../../../js/_c2-c3.js"></script>
    <script type="text/javascript" src="../../../js/_c1.js"></script>
    <script type="text/javascript" src="../../../js/_c7.js"></script>
    <script type="text/javascript" src="../../../js/_c29.js"></script>
    <script type="text/javascript" src="../../../js/_c62.js"></script>
    <script type="text/javascript" src="../../../js/_c5-carousel.js"></script>
    <script type="text/javascript" src="../../../js/general.js"></script>
    <script type="text/javascript" src="../../../js/_general-carousel.js"></script>
    <script type="text/javascript" src="../../../js/modals.js"></script>

  </body>
</html>

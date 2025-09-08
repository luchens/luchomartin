<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <title>Listado de Hoteles</title>
    <link rel="shortcut icon" href="../../../src/icons/favicon.ico" type="image/vnd.microsoft.icon" />
    <link rel="stylesheet" href="../../../css/style-listado-hoteles.css">
  </head>
  <body>
    <div class="interior_header">
      <?php $include_no = true; include("../sprint-2/c1-topbar-main.php"); ?>
    </div>

    <?php $include_no = true; include("../modules/c6-listado-hoteles.php"); ?>

    <div class="interior_header margin-0">
      <?php $include_no = true; include("../sprint-4/c7.php"); ?>
    </div>

    <div class="grid_left_lateral container-fix">
      <div class="left_lateral">
      <?php $include_no = true; include("../sprint-4/c53.php"); ?>
      </div>
      <div class="central_body">
      <?php $include_no = true; include("../modules/c25-listado-hoteles-skeleton.php"); ?>
      </div>
    </div>

    <?php $include_no = true; include("../sprint-4/c78.php"); ?>


    <?php $include_no = true; include("../sprint-4/c55.php"); ?>
    <?php $include_no = true; include("../sprint-1/footer.php"); ?>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="../../../js/SmoothScroll.min.js"></script>
    <script type="text/javascript" src="../../../js/aos.js"></script>
    <script type="text/javascript" src="../../../js/slick.min.js"></script>
    <script type="text/javascript" src="../../../js/moment.min.js"></script>
    <script type="text/javascript" src="../../../js/daterangepicker.min.js"></script>
    <script type="text/javascript" src="../../../js/acordeontoggler.js"></script>
    <script type="text/javascript" src="../../../js/_c1.js"></script>
    <script type="text/javascript" src="../../../js/_c7.js"></script>
    <script type="text/javascript" src="../../../js/_c50.js"></script>
    <script type="text/javascript" src="../../../js/_c53.js"></script>
    <script type="text/javascript" src="../../../js/_c71.js"></script>
    <script type="text/javascript" src="../../../js/_c25.js"></script>
    <script src="../../../js/ion.rangeSlider.min.js"></script>
    <script type="text/javascript" src="../../../js/_c5-carousel.js"></script>
    <script type="text/javascript" src="../../../js/general.js"></script>
  </body>
</html>

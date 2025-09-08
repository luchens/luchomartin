<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c30 - B</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

<?php if($include_no == false){ ?><a href="#" class="btn-modal-reservar-habitacion">MODAL</a><?php } ?>

<div class="c30-b__container modal-reservar-habitacion">
  <div class="container-holder">
    <div class="top">
      <div class="titulo">Calendario de precios</div>
      <a href="#" class="btn-close"></a>
    </div>
    <div class="col">
      <div class="col-left">
        <img src="../../images/image-141.png" class="image" alt="" />
      </div>
      <div class="col-right">
        <div class="titulo">HABITACIÓN DOBLE vista mar lateral</div>
        <div class="caracteristicas desktop">
          <div class="personas">
          <span class="texto tit">Ocupación máxima:</span>
            <div class="imgs">
              <img src="../../icons/person_.svg" class="icon" alt="" />
              <img src="../../icons/person_.svg" class="icon" alt="" />
              <img src="../../icons/person_.svg" class="icon" alt="" />
              <img src="../../icons/person_.svg" class="icon" alt="" />
              <span class="texto">4 personas</span>
            </div>
          </div>
          <div class="camas">
            <span class="texto tit">Tipo de cama:</span>
            <span class="texto"> Cama doble / Dos Camas + Sofa Cama</span>
          </div>
        </div>
        <div class="caracteristicas mobile">
          <div class="text">
            22 sep - 26 sep 2022 (4 noches)<br>
            2 personas, cama doble
            </div>
        </div>
      </div>
    </div>
    <div class="col-selects">
      <div class="select">
        <select id="standard-select">
          <option value="Option 1">1 cambio gratis (paga ahora)</option>
          <option value="Option 2">1 cambio gratis (paga ahora) 2</option>
          <option value="Option 3">1 cambio gratis (paga ahora) 3</option>
        </select>
      </div>
      <div class="select">
        <select id="standard-select">
          <option value="Option 1">Solo alojamiento</option>
          <option value="Option 2">Solo alojamiento 2</option>
          <option value="Option 3">Solo alojamiento 3</option>
        </select>
      </div>
      <div class="text">Estas tarifas no incluyen descuentos ni promociones</div>
    </div>
    <div class="datepicker-holder">
      <div class="daterangepicker-holder-input">
        <input id="datepicker_habitaciones" name="datepicker_habitaciones" value="" placeholder="" />
      </div>
    </div>
    <div class="texto-pie">Los días no asociados a un precio no tienen disponibilidad para reserva</div>
  </div>
</div>

<?php if($include_no == false){ ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../../../js/slick.min.js"></script>
    <script src="../../../js/moment.min.js"></script>
    <script src="../../../js/daterangepicker.min.js"></script>
    <script src="../../../js/_c30-b.js"></script>
  </body>
</html>
<?php } ?>

<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c32</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

<section class="c32__container">
  <div class="container-fix">

    <div class="title">Selecciona la opción de ayuda que encaje mejor con tus necesidades:</div>

    <div class="icons">
      <div class="icon">
        <div class="ico"><img src="../../../src/icons/i.svg" /></div>
        <div class="text">Información sobre tu reserva</div>
      </div>
      <div class="icon">
        <div class="ico"><img src="../../../src/icons/calendar-2.svg" /></div>
        <div class="text">Consultar disponibilidad</div>
      </div>
      <div class="icon">
        <div class="ico"><img src="../../../src/icons/filtro-servicios.svg" /></div>
        <div class="text">Contactar con el hotel</div>
      </div>
      <div class="icon">
        <div class="ico"><img src="../../../src/icons/mail_blue.svg" /></div>
        <div class="text">Sugerencias y quejas</div>
      </div>
      <div class="icon">
        <div class="ico"><img src="../../../src/icons/new_releases.svg" /></div>
        <div class="text">Dar opinión sobre tu estancia</div>
      </div>
    </div>

    <div class="select">
      <select id="standard-select" name="standard-select" required>
        <option value="" disabled selected hidden >Seleccionar</option>
        <option value="1">Información sobre tu reserva</option>
        <option value="2">Consultar disponibilidad</option>
        <option value="3">Contactar con el hotel</option>
        <option value="4">Sugerencias y quejas</option>
        <option value="5">Dar opinión sobre tu estancia</option>
      </select>
    </div>

    <div class="col">

      <div class="holder-mapa">
        <div id="c32_mapa" class="mapa"></div>
        <div class="holder">
          <div class="titulo">CONTACTA CON H10 HOTELS</div>
          <div class="texto">
            Carrer de Numància 185, 1º planta</br>
            08034. Barcelona, España</br>
            <a href="#">(+34) 900 000 000</a></br>
            <a href="#">info@h10hotels.com</a>
          </div>
          <a href="#" class="btn-ver">Ver en google maps</a>
        </div>
      </div>

      <div class="holder-contacto">
        <!--<div class="text">
          <img class="icon" src="../../icons/call_.svg" alt="">
          <p class="text">
            Horario Atención al Cliente</br>
            (GMT+1)</br>
            Lunes a viernes de 9 a 20h
            </br>
            Sábados de 10 a 15h
          </p>
        </div>-->
        <ul class="items">
          <li class="item"> FRANCIA <br><a href="#"><b>+33 (0) 176 54 24 86 </b></a></li>
          <li class="item"> ITALIA <br><a href="#"><b>+33 (0) 176 54 24 86 </b></a></li>
          <li class="item"> ALEMANIA <br><a href="#"><b>+33 (0) 176 54 24 86 </b></a></li>
          <li class="item"> REINO UNIDO <br><a href="#"><b>+33 (0) 176 54 24 86 </b></a></li>
          <li class="item"> ESTADOS UNIDOS <br><a href="#"><b>+33 (0) 176 54 24 86 </b></a></li>
          <li class="item"> RUSIA <br><a href="#"><b>+33 (0) 176 54 24 86 </b></a></li>
          <li class="item"> PORTUGAL <br><a href="#"><b>+33 (0) 176 54 24 86 </b></a></li>
          <li class="item"> BRAZIL <br><a href="#"><b>+33 (0) 176 54 24 86 </b></a></li>
        </ul>
      </div>
    </div>

  </div>
</section>

<?php if($include_no == false){ ?>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="../../../js/_c32.js"></script>

  </body>
</html>
<?php } ?>

<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cMotivos no Diponibilidad</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

<?php if($include_no == false){ ?><a href="#" class="btn-modal-motivos-no-disponibilidad">MODAL</a><?php } ?>

<div class="modal-motivos-no-disponibilidad">
  <div class="container-holder">
    <div class="title-top">
      <div>Sin disponibilidad</div>
      <a href="#" class="btn-close"></a>
    </div>

    <div class="holder">
      <div class="mensaje-top">
        <div><img src="../../../src/icons/info-blue.svg" alt="" /></div>
        <div>
          La ocupación que has seleccionado para una o varias de las habitaciones no es posible. Por favor, revisa tu solicitud con una nueva distribución
          <div><a href="#">Realizar nueva búsqueda</a></div>
        </div>
      </div>

      <div class="subtitle">Otros hoteles disponibles</div>
      <div class="items-holder">
        <div class="item">
          <div class="col-left">
            <div class="data">
              <div class="titulo">H10 Itaca</div>
              <ul class="ratings">
                <li class="star active selected"></li>
                <li class="star"></li>
                <li class="star"></li>
                <li class="star"></li>
                <li class="star"></li>
              </ul>
            </div>
            <div class="labels">
              <div class="label">Hotel Boutique</div>
              <div class="label">Adults only</div>
              <div class="label">Hotel Boutique</div>
              <div class="label">Adults only</div>
              <div class="label">Hotel Boutique</div>
              <div class="label">Adults only</div>
              <div class="label">Hotel Boutique</div>
              <div class="label">Adults only</div>

            </div>
          </div>
          <div class="col-right">
            <a href="#" class="btn-mas">Ver ficha del hotel</a>
            <a href="#" class="btn-seleccionar">Reservar DESDE 167€/noche</a>
          </div>
        </div>
        <div class="item">
          <div class="col-left">
            <div class="data">
              <div class="titulo">H10 Art Gallery</div>
              <ul class="ratings">
                <li class="star active selected"></li>
                <li class="star"></li>
                <li class="star"></li>
                <li class="star"></li>
                <li class="star"></li>
              </ul>
              <span class="titulo titulo-gl">GL</span>
            </div>
            <div class="labels">
              <div class="label">Adults only</div>
            </div>
          </div>
          <div class="col-right">
            <a href="#" class="btn-mas">Ver ficha del hotel</a>
            <a href="#" class="btn-seleccionar">Reservar DESDE 167€/noche</a>
          </div>
        </div>
        <div class="item">
          <div class="col-left">
            <div class="data">
              <div class="titulo">H10 Racó del Pi</div>
              <ul class="ratings">
                <li class="star active selected"></li>
                <li class="star"></li>
                <li class="star"></li>
                <li class="star"></li>
                <li class="star"></li>
              </ul>
            </div>
            <div class="labels">
              <div class="label">Hotel Boutique</div>
              <div class="label">Adults only</div>
            </div>
          </div>
          <div class="col-right">
            <a href="#" class="btn-mas">Ver ficha del hotel</a>
            <a href="#" class="btn-seleccionar">Reservar DESDE 167€/noche</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<?php if($include_no == false){ ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../../../js/_cMotivos-no-disponibilidad.js"></script>
  </body>
</html>
<?php } ?>

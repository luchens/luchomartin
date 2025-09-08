<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>_cSuscripcion-newsletter</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

<?php if($include_no == false){ ?><a href="#" class="btn-modal-suscripcion-newsletter">MODAL</a><?php } ?>

<div class="cSuscripcion-newsletter__container modal-suscripcion-newsletter">
  <div class="container-holder">
    <a href="#" class="btn-close"></a>

    <div class="layer-confirmacion">
      <div class="holder">
        <img src="../../icons/check_circle.svg" class="icon" alt="" />
        <div class="title">GRACIAS POR CONFIAR EN H10 HOTELS</div>
        <div class="text">En breves recibirás un correo confirmando la operación, y ya estarás preparado para recibir las últimas novedades y ofertas de H10 Hotels directamente en tu buzón.</div>
      </div>
    </div>

    <section class="c75__container">
      <div class="title">Mantente al día de nuestras promociones y descuentos</div>
      <div class="text">Suscríbete a nuestro boletín y recibe directamente en tu buzón nuestras mejores ofertas.</div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">Nombre*</label>
            <input class="input" value="" placeholder="" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">Apellido 1*</label>
            <input class="input" value="" placeholder="" />
          </div>
        </div>
        <div class="col">
          <div class="form-input">
            <label class="label">Apellido 2</label>
            <input class="input" value="" placeholder="" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">Correo electrónico*</label>
            <input class="input" value="" placeholder="" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">País*</label>
            <div class="select">
              <select id="standard-select" name="standard-select" required="">
                <option value="" disabled="" selected="" hidden="">Selecciona tu hotel</option>
                <option value="Option 1">Opción 1</option>
                <option value="Option 2">Opción 2</option>
                <option value="Option 3">Opción 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="checkbox-holder">
            <label class="checkbox">
              <input type="checkbox">
              <span class="checkmark"></span> <span>He leído y acepto la cláusula de Información sobre Protección de Datos</span>
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="checkbox-holder">
            <label class="checkbox">
              <input type="checkbox">
              <span class="checkmark"></span> <span>Deseo recibir las comunicaciones sobre ofertas y promociones de H10 Hotels.</span>
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <a href="#" class="btn-enviar">SUSCRÍBETE</a>
        </div>
      </div>
    </sectionm>

  </div>

</div>

<?php if($include_no == false){ ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../../../js/slick.min.js"></script>
    <script src="../../../js/_cSuscripcion-newsletter.js"></script>
  </body>
</html>
<?php } ?>

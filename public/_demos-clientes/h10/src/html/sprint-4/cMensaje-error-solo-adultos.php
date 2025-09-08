<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>_cMensaje_error_solo_adultos</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

<?php if($include_no == false){ ?><a href="#" class="btn-modal-mensaje-error-solo-adultos">MODAL</a><?php } ?>

<div class="cMensaje-error-solo-adultos__container modal-mensaje-error-solo-adultos">
  <div class="container-holder">
    <a href="#" class="btn-close"></a>

    <section class="container">
      <div class="title">Hotel Solo Adultos</div>
      <div class="text">El hotel seleccionado solo admite reserva para adultos. En tus opciones de búsqueda tienes configurada una reserva con niños, si aceptas se eliminarán las ocupaciones con niños teniendo en cuenta sólo la ocupación para adultos.</div>
      <div class="align-center"><a href="#" class="btn-aceptar">Aceptar</a></div>
      <div class="align-center"><a href="#" class="btn-cancelar">cancelar</a></div>
    </sectionm>

  </div>
</div>

<?php if($include_no == false){ ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../../../js/_cMensaje-error-solo-adultos.js"></script>
  </body>
</html>
<?php } ?>

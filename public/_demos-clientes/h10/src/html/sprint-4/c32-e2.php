<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c32-e2</title>
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
      <div class="icon activo">
        <div class="ico"><img src="../../../src/icons/new_releases.svg" /></div>
        <div class="text">Dar opinión sobre tu estancia</div>
      </div>
    </div>

    <section class="c75__container">
      <div class="select icon">
        <select id="standard-select" name="standard-select" required>
          <option value="" disabled selected hidden >Seleccionar</option>
          <option value="1">Información sobre tu reserva</option>
          <option value="2">Consultar disponibilidad</option>
          <option value="3">Contactar con el hotel</option>
          <option value="4">Sugerencias y quejas</option>
          <option value="5">Dar opinión sobre tu estancia</option>
        </select>
      </div>
      <div class="titulo">SELECCIONA TU HOTEL</div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">HOTEL*</label>
            <div class="select">
              <select id="standard-select" name="standard-select" required>
                <option value="" disabled selected hidden >Selecciona tu hotel</option>
                <option value="Option 1">Opción 1</option>
                <option value="Option 2">Opción 2</option>
                <option value="Option 3">Opción 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="titulo mt">DATOS PERSONALES</div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">HOTEL*</label>
            <div class="select">
              <select id="standard-select" name="standard-select" required>
                <option value="" disabled selected hidden >Selecciona tu hotel</option>
                <option value="Option 1">H10 Porto Poniente</option>
                <option value="Option 2">Opción 2</option>
                <option value="Option 3">Opción 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>

<!--      <div class="hotel">
        <div class="image">
          <img src="../../images/image-110.png" class="img">
        </div>
        <div class="data">
          <div class="titulo">H10 Porto Poniente</div>
          <ul class="ratings">
            <li class="star"></li>
            <li class="star"></li>
            <li class="star active selected"></li>
            <li class="star"></li>
            <li class="star"></li>
          </ul>
          <div class="labels">
            <div class="label">Hotel Familiar</div>
            <div class="label">Adults Only</div>
          </div>
          <div class="direccion">C/ San Pedro, 24. E-03501-Benidorm</div>
          <div class="telefono">(+34) 91 000 00 00</div>
          <ul class="views">
            <li class="view"></li>
            <li class="view active selected"></li>
            <li class="view"></li>
            <li class="view"></li>
            <li class="view"></li>
          </ul>
          <div class="reviews">345 reviews</div>
        </div>
      </div>-->

      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">NOMBRE*</label>
            <input class="input" value="" placeholder="" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">APELLIDOS*</label>
            <input class="input" value="" placeholder="" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">CORREO ELECTRÓNICO*</label>
            <input class="input" value="" placeholder="" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">NACIONALIDAD*</label>
            <div class="select">
              <select id="standard-select" name="standard-select" required>
                <option value="" disabled selected hidden >Selecciona</option>
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
          <div class="form-input">
            <label class="label">FECHA DE SALIDA DEL HOTEL*</label>
            <div class="datepicker-holder from"><input class="input ico-date" name="datepicker-from" value="" placeholder="" /></div>
          </div>
        </div>
      </div>

      <div class="titulo mt">DATOS PERSONALES</div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">PERFIL DE CLIENTE*</label>
            <input class="input" value="" placeholder="" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">TÍTULO DEL COMENTARIO (RESÚMELO EN UNA FRASE)</label>
            <input class="input" value="" placeholder="" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">COMENTARIO*</label>
            <textarea class="input" value="" placeholder="Inserta tu comentario aquí"></textarea>
          </div>
        </div>
      </div>

      <div class="row mb inline-only">
        <div class="col">
          <div class="ratings-circle-holder">
            <div class="label">COMENTARIO</div>
            <ul class="ratings-circle" id="rc-1">
              <li class="circle"></li>
              <li class="circle"></li>
              <li class="circle selected"></li>
              <li class="circle"></li>
              <li class="circle"></li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="ratings-circle-holder">
            <div class="label">HABITACIÓN</div>
            <ul class="ratings-circle" id="rc-2">
              <li class="circle"></li>
              <li class="circle"></li>
              <li class="circle"></li>
              <li class="circle"></li>
              <li class="circle"></li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="ratings-circle-holder">
            <div class="label">GASTRONOMÍA</div>
            <ul class="ratings-circle" id="rc-3">
              <li class="circle"></li>
              <li class="circle"></li>
              <li class="circle"></li>
              <li class="circle"></li>
              <li class="circle"></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row mb inline-only">
        <div class="col">
          <div class="ratings-circle-holder">
            <div class="label">CALIDAD/PRECIO</div>
            <ul class="ratings-circle" id="rc-4">
              <li class="circle"></li>
              <li class="circle"></li>
              <li class="circle"></li>
              <li class="circle"></li>
              <li class="circle"></li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="ratings-circle-holder">
            <div class="label">LIMPIEZA</div>
            <ul class="ratings-circle" id="rc-5">
              <li class="circle"></li>
              <li class="circle"></li>
              <li class="circle"></li>
              <li class="circle"></li>
              <li class="circle"></li>
            </ul>
          </div>
        </div>
        <div class="col"></div>
      </div>

      <div class="row">
        <div class="col">
          <div class="checkbox-holder">
            <label class="checkbox">
              <input type="checkbox" checked>
              <span class="checkmark"></span> <span>He leído y acepto la cláusula de <a href=#>Información sobre Protección de Datos</a></span>
            </label>
          </div>
          <div class="checkbox-holder">
            <label class="checkbox">
              <input type="checkbox" checked>
              <span class="checkmark"></span> <span>Deseo recibir las comunicaciones sobre ofertas y promociones de H10 Hotels.</span>
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <a href="#" class="btn-enviar">ENVIAR</a>
        </div>
      </div>
    </sectionm>

  </div>
</section>

<?php if($include_no == false){ ?>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="../../../js/SmoothScroll.min.js"></script>
  <script type="text/javascript" src="../../../js/moment.min.js"></script>
  <script type="text/javascript" src="../../../js/daterangepicker.min.js"></script>
  <script type="text/javascript" src="../../../js/_c32.js"></script>
  <script type="text/javascript" src="../../../js/general.js"></script>
  </body>
</html>
<?php } ?>

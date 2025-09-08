<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c32-b</title>
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
      <div class="icon activo">
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
      <div class="titulo">DATOS DEL HOTEL</div>
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
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">FECHA DE LLEGADA*</label>
            <div class="datepicker-holder from"><input class="input ico-date" name="datepicker-from" value="" placeholder="" /></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">FECHA DE SALIDA*</label>
            <div class="datepicker-holder to"><input class="input ico-date" name="datepicker-to" value="" placeholder="" /></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">HABITACIONES*</label>
            <div class="select">
              <select id="standard-select" name="standard-select" required>
                <option value="" disabled selected hidden >Selecciona</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">ADULTOS EN HABITACIÓN 1*</label>
            <input class="input ico-down" value="1" placeholder="" />
          </div>
        </div>
        <div class="col">
          <div class="form-input">
            <label class="label">NIÑOS (0-12) EN HABITACIÓN 1*</label>
            <input class="input ico-down" value="0" placeholder="" />
            <div class="contador-box">
              <div class="row">
                <div class="label">NÚMERO DE NIÑOS*</div>
                <div class="contador-holder">
                  <div class="contador">
                    <a href="#" class="btn-restar-sumar left"></a>
                    <input   class="input-numero input-adultos" value="1" min="1" max="99">
                    <a href="#" class="btn-restar-sumar right"></a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="label">EDAD NIÑOS*</div>
                <div class="contador-holder">
                  <div class="contador">
                    <a href="#" class="btn-restar-sumar left"></a>
                    <input   class="input-numero input-ninos" value="0" min="0" max="99">
                    <a href="#" class="btn-restar-sumar right"></a>
                  </div>
                  <div class="contador">
                    <a href="#" class="btn-restar-sumar left"></a>
                    <input   class="input-numero input-ninos" value="0" min="0" max="99">
                    <a href="#" class="btn-restar-sumar right"></a>
                  </div>
                  <div class="contador">
                    <a href="#" class="btn-restar-sumar left"></a>
                    <input   class="input-numero input-ninos" value="0" min="0" max="99">
                    <a href="#" class="btn-restar-sumar right"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">ADULTOS EN HABITACIÓN 2*</label>
            <input class="input ico-down" value="1" placeholder="" />
          </div>
        </div>
        <div class="col">
          <div class="form-input">
            <label class="label">ADULTOS EN HABITACIÓN 3*</label>
            <input class="input ico-down" value="" placeholder="" />
          </div>
        </div>
      </div>

      <div class="titulo mt">DATOS PERSONALES</div>


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
      <div class="row inline telefono">
        <div class="col">
          <div class="form-input">
            <label class="label">Prefijo*</label>
            <div class="select">
              <select id="standard-select" name="standard-select" required>
                <option value="" disabled selected hidden >Selecciona</option>
                <option value="Option 1">+34</option>
                <option value="Option 2">+35</option>
                <option value="Option 3">+36</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="form-input">
            <label class="label">TELÉFONO*</label>
            <input class="input" value="" placeholder="" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">PAÍS*</label>
            <div class="select">
              <select id="standard-select" name="standard-select" required>
                <option value="" disabled selected hidden >Seleccion</option>
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
            <label class="label">código postal</label>
            <input class="input" value="" placeholder="" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-input">
            <label class="label">COMENTARIO</label>
            <textarea class="input" value="" placeholder="Inserta tu comentario aquí"></textarea>
          </div>
        </div>
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

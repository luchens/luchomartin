<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c32-c2</title>
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
      <div class="icon activo">
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
      <div class="titulo">DATOS DEL HOTEL CON EL QUE DESEA CONTACTAR</div>
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
            <label class="label">COMENTARIO</label>
            <textarea class="input" value="" placeholder="Inserta tu comentario aquí"></textarea>
          </div>
        </div>
      </div>

      <div class="titulo mt-alt">DATOS PERSONALES</div>
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
            <label class="label">código postal</label>
            <input class="input" value="" placeholder="" />
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

    </section>

  </div>
</section>

<?php if($include_no == false){ ?>

  </body>
</html>
<?php } ?>

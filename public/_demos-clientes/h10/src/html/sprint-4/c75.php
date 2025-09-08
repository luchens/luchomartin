<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c75</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

<section class="c75__container">
  <div class="container-fix">

    <div class="row group">
      <div class="col">
        <div class="form-input">
          <label class="label">Nombre*</label>
          <input class="input" value="" placeholder="Introduce tu nombre" />
        </div>
      </div>
      <div class="col">
        <div class="form-input">
          <label class="label">Apellido 1*</label>
          <input class="input" value="" placeholder="Introduce tu primer apellido" />
        </div>
      </div>
      <div class="col">
        <div class="form-input">
          <label class="label">Apellido 2*</label>
          <input class="input" value="" placeholder="Introduce tu segundo apellido" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="form-input">
          <label class="label">Género*</label>
          <div class="select">
            <select id="standard-select" name="standard-select">
              <option hidden selected >Selecciona</option>
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
        <div class="group-input">
          <label class="label">Fecha de nacimiento*</label>
          <div class="group">
            <div class="form-input">
              <div class="select">
                <select id="standard-select" name="standard-select">
                  <option hidden selected >Día</option>
                  <option value="Option 1">Opción 1</option>
                  <option value="Option 2">Opción 2</option>
                  <option value="Option 3">Opción 3</option>
                </select>
              </div>
            </div>
            <div class="form-input">
              <div class="select">
                <select id="standard-select" name="standard-select">
                  <option hidden selected >Mes</option>
                  <option value="Option 1">Opción 1</option>
                  <option value="Option 2">Opción 2</option>
                  <option value="Option 3">Opción 3</option>
                </select>
              </div>
            </div>
            <div class="form-input">
              <div class="select">
                <select id="standard-select" name="standard-select">
                  <option hidden selected >Año</option>
                  <option value="Option 1">Opción 1</option>
                  <option value="Option 2">Opción 2</option>
                  <option value="Option 3">Opción 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>

    <div class="row">
      <div class="col">
        <div class="group-input">
          <div class="group">
            <div class="form-input">
              <label class="label">Tipo de documento</label>
              <div class="select">
                <select id="standard-select" name="standard-select">
                  <option hidden selected >Día</option>
                  <option value="Option 1">Opción 1</option>
                  <option value="Option 2">Opción 2</option>
                  <option value="Option 3">Opción 3</option>
                </select>
              </div>
            </div>
            <div class="form-input">
              <label class="label">Número de documento*</label>
              <input class="input" value="" placeholder="Introduce tu número de DNI" />
            </div>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>

    <div class="row">
      <div class="col">
        <div class="form-input">
          <label class="label">Correo electrónico*</label>
          <input class="input" value="" placeholder="Introduce tu correo electrónico" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="form-input">
          <label class="label">Contraseña*</label>
          <input class="input" value="" placeholder="Introduce tu contraseña" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="form-input">
          <label class="label">Confirma contraseña*</label>
          <input class="input" value="" placeholder="Confirma tu contraseña" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="form-input">
          <label class="label">Dirección*</label>
          <input class="input" value="" placeholder="Selecciona" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="form-input">
          <label class="label">País de residencia*</label>
          <div class="select">
            <select id="standard-select" name="standard-select">
              <option hidden selected >Selecciona</option>
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
          <label class="label">Nacionalidad*</label>
          <div class="select">
            <select id="standard-select" name="standard-select">
              <option hidden selected >Selecciona</option>
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
          <label class="label">Población</label>
          <input class="input" value="" placeholder="Selecciona" />
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
            <input type="checkbox">
            <span class="checkmark"></span> <span>Al realizar el alta en el Club H10 estás aceptando las condiciones legales del Club H10 y recibir información y promociones de H10 Hotels.</span>
          </label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <a href="#" class="btn-enviar">ENVIAR Y GANAR 100 PUNTOS</a>
      </div>
    </div>


  </div>
</sectionm>

<?php if($include_no == false){ ?>
</body>
</html>
<?php } ?>

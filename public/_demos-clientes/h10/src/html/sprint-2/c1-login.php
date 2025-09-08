<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c1-login</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

    <div class="topbar-desplegable__mobile-header">LOG IN<img class="x__mobile" src="../../icons/x.svg" alt="check in icon"></div>
    <div class="dropdown-onclick__content topbar-desplegable__login-container">
      <div class="topbar-desplegable__login-titles"><span class="topbar-desplegable__activeitem">LOGIN CLUB H10</span><span>ACCESO AGENCIAS</span></div>
      <div class="topbar-desplegable__login-content">
        <form class="topbar-desplegable__login-form">
          <div class="topbar-desplegable__login-item">
            <label for="hotel">Nº TARJETA/EMAIL</label>
            <input class="input-main" placeholder="521..." id="hotel">
          </div>
          <div class="topbar-desplegable__login-item">
            <label for="hotel">CONTRASEÑA</label>
            <input class="input-main" placeholder="Introduce tu contraseña" id="hotel">
            <div class="topbar-desplegable__login-checkbox">
              <input type="checkbox" id="checkbox-recuerdame">
              <label for="checkbox-recuerdame">Recuérdame</label>
            </div>
          </div>
        </form>
        <div class="topbar-desplegable__container2"><a>¿Has olvidado tu contraseña?</a>
          <button class="main-button">ACCEDER</button>
        </div>
        <div class="topbar-desplegable__container3"><b>¿Aún no tienes acceso online?</b>
          <p>Regístrate o activa tu cuenta (solo necesitas el número de tarjeta del Club H10 para activar tu cuenta online).</p>
          <div class="topbar-desplegable__bottom-buttons">
            <button class="second-button">REGISTRATE</button>
            <button class="second-button">ACTIVA TU CUENTA</button>
          </div>
        </div>
      </div>
    </div>

<?php if($include_no == false){ ?>
  </body>
</html>
<?php } ?>

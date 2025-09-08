<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c1-login-agencias</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

    <div class="topbar-desplegable__mobile-header">LOG IN<img class="x__mobile" src="../../icons/x.svg" alt="check in icon"></div>
    <div class="topbar-desplegable__login-container">
      <div class="topbar-desplegable__login-titles"><span>LOGIN CLUB H10</span><span class="topbar-desplegable__activeitem">ACCESO AGENCIAS</span></div>
      <div class="topbar-desplegable__login-content">
        <form class="topbar-desplegable__login-form">
          <div class="topbar-desplegable__login-item">
            <label for="hotel">CÓDIGO DE EMPRESA</label>
            <input class="input-main" placeholder="521..." id="hotel">
          </div>
          <div class="topbar-desplegable__login-item">
            <label for="hotel">USUARIO</label>
            <input class="footer-info__suscripcion--input" placeholder="Introduce tu usuario" id="hotel">
          </div>
          <div class="topbar-desplegable__login-item">
            <label for="hotel">CONTRASEÑA</label>
            <input class="footer-info__suscripcion--input" placeholder="Introduce tu contraseña" id="hotel">
            <div class="topbar-desplegable__login-checkbox">
              <input type="checkbox" id="checkbox-recuerdame">
              <label for="checkbox-recuerdame">Recuérdame</label>
            </div>
          </div>
        </form>
        <div class="topbar-desplegable__container2"><a>¿Has olvidado tu contraseña?</a>
          <button class="main-button">ACCEDER</button>
        </div>
        <div class="topbar-desplegable__container4"><b>¿Aún no tienes acceso online?</b>
          <p class="topbar-desplegable__registrate">Regístrate</p>
        </div>
      </div>
    </div>

<?php if($include_no == false){ ?>
  </body>
</html>
<?php } ?>

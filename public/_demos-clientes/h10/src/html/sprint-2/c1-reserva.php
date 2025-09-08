<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c1-reserva</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

    <div class="topbar-desplegable__mobile-header">MIS RESERVAS<img class="x__mobile" src="../../icons/x.svg" alt="check in icon"></div>
    <div class="dropdown-onclick__content topbar-desplegable__reservas-container"><span class="topbar-desplegable__title"> GESTIONA TU RESERVA</span>
      <div class="topbar-desplegable__content">
        <div class="topbar-desplegable__form-container">
          <form class="topbar-desplegable__form">
            <label for="hotel">HOTEL</label>
            <input class="input-main" placeholder="H10 Athlantic Sunset" id="hotel">
            <label class="localizador-label" for="localizador">LOCALIZADOR</label>
            <div class="topbar-desplegable__localizador">
              <input class="footer-info__suscripcion--input" placeholder="H5201" id="localizador"><span>-</span>
              <input class="footer-info__suscripcion--input" placeholder="Completa tu código localizador" id="codigo-localizador">
            </div>
          </form>
          <div class="topbar-desplegable__reserva"><a class="topbar-desplegable__link">¿No tienes número de reserva?</a>
            <button class="main-button">BUSCAR RESERVA</button>
          </div>
        </div>
        <hr class="topbar-desplegable__hr">
        <div class="topbar-desplegable__right">
          <div class="topbar-desplegable__check-container">
            <button class="main-button">CHECK-IN ONLINE<img class="topbar-desplegable__reserva-button" src="../../icons/check-in.svg" alt="check in icon"></button><span>Desde las 15h, dos días antes de tu llegada al hotel.</span>
          </div>
          <div class="topbar-desplegable__check-container">
            <button class="main-button">CHECK-OUT ONLINE<img class="topbar-desplegable__reserva-button" src="../../icons/check-out.svg" alt="check out icon"></button><span>Desde las 22h del día anterior a tu salida del hotel.</span>
          </div>
        </div>
      </div>
    </div>

<?php if($include_no == false){ ?>
  </body>
</html>
<?php } ?>

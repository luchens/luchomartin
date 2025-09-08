<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c2 - c3</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

    <section class="c2-c3__container">
      <nav class="menu-top">
        <div class="container-fix">
          <div class="breadcrumb-holder">
            <ul class="breadcrumb">
            <li><a href="/src/html/pages/home.php">Inicio</a></li>
              <li><a href="/src/html/pages/listado-hoteles.php">Hoteles</a></li>
              <li>Tenerife</li>
            </ul>
          </div>
          <div class="btns-right">
            <ul class="links-top">
              <li class="js-dropdown dropdown-onclick dropdown-idioma">
                <span>ES</span>
                <div class="topbar-desplegable__mobile-header">IDIOMA<img class="x__mobile" src="../../icons/x.svg" alt="check in icon"></div>
                <ul class="dropdown-onclick__content topbar-desplegable__idioma-list">
                  <li><a href="#">Català</a></li>
                  <li><a href="#">English</a></li>
                  <li><a href="#">Deutsch</a></li>
                  <li><a href="#">Français</a></li>
                  <li><a href="#">Italiano</a></li>
                  <li><a href="#">Portugués</a></li>
                  <li><a href="#">Ruso</a></li>
                </ul>
              </li>
              <li class="js-dropdown dropdown-onclick dropdown-reservas">
                <span class="link_reservas">MIS RESERVAS</span>
                <div class="topbar-desplegable__mobile-header">MIS RESERVAS<img class="x__mobile" src="../../icons/x.svg" alt="check in icon"></div>
                <div class="dropdown-onclick__content topbar-desplegable__reservas-container">
                  <div class="topbar-desplegable__title">GESTIONA TU RESERVA</div>
                  <div class="topbar-desplegable__content">
                    <div class="topbar-desplegable__form-container">
                      <form class="topbar-desplegable__form">
                        <label for="hotel">HOTEL</label>
                        <input class="input-main" placeholder="H10 Atlantic Sunset" id="hotel">
                        <label class="localizador-label" for="localizador">LOCALIZADOR</label>
                        <div class="topbar-desplegable__localizador">
                          <input class="footer-info__suscripcion--input _localizador" placeholder="H5201"><span>-</span>
                          <input class="footer-info__suscripcion--input _codigo-localizador" placeholder="Completa tu código localizador">
                        </div>
                        <label for="email">EMAIL</label>
                        <input class="input-main" placeholder="Escribe tu email" id="email">
                      </form>
                      <div class="topbar-desplegable__reserva">
                        <button class="main-button">BUSCAR RESERVA</button>
                      </div>
                    </div>
                    <hr class="topbar-desplegable__hr">
                    <div class="topbar-desplegable__right">
                      <div class="topbar-desplegable__check-container">
                        <button class="main-button">CHECK-IN ONLINE<img class="topbar-desplegable__reserva-button" src="../../icons/check-in.svg" alt="check in icon"></button>
                        <p class="text">Desde las 15h, dos días antes de tu llegada al hotel.</p>
                      </div>
                      <div class="topbar-desplegable__check-container">
                        <button class="main-button">CHECK-OUT ONLINE<img class="topbar-desplegable__reserva-button" src="../../icons/check-out.svg" alt="check out icon"></button>
                        <p class="text">Desde las 22h del día anterior a tu salida del hotel.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="js-dropdown dropdown-onclick dropdown-telefono">
                <span>(+34) 900 000 000</span>
                <div class="topbar-desplegable__mobile-header">CONTÁCTANOS<img class="x__mobile" src="../../icons/x.svg" alt="check in icon"></div>
                <div class="topbar-desplegable__mobile-tlf"><span>ESPAÑA <br> +34 900 000 000</span>
                  <button class="main-button">LLAMAR</button>
                  <hr class="topbar-desplegable__mobile-hr">
                </div>
                <div class="dropdown-onclick__content topbar-desplegable__tlf-container">
                  <div class="topbar-desplegable__tlf-text"><img class="topbar-tlf__icon" src="../../icons/call_.svg" alt="call icon">
                    <p class="text">Horario Atención al Cliente <br> (GMT+1) <br> Lunes a viernes de 9 a 20h <br> Sábados de 10 a 15h</p>
                  </div>
                  <ul class="topbar-desplegable__tlf-list">
                    <li class="topbar-desplegable__tlf__list-item"> FRANCIA <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
                    <li class="topbar-desplegable__tlf__list-item"> ITALIA <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
                    <li class="topbar-desplegable__tlf__list-item"> ALEMANIA <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
                    <li class="topbar-desplegable__tlf__list-item"> REINO UNIDO <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
                    <li class="topbar-desplegable__tlf__list-item"> ESTADOS UNIDOS <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
                    <li class="topbar-desplegable__tlf__list-item"> RUSIA <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
                    <li class="topbar-desplegable__tlf__list-item"> PORTUGAL <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
                    <li class="topbar-desplegable__tlf__list-item"> BRAZIL <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
                  </ul>
                </div>
              </li>
              <!--<li class="js-dropdown dropdown-onclick dropdown-telefono">
                <span>loremipsum@h10.com</span>
              </li>-->
              <li class="js-dropdown dropdown-onclick dropdown-inicio-sesion">
                <span class="topbar__links--inicio-sesion">
                  <img src="../../icons/person_white.svg" class="personsvg" />
                  <span class="link_session">INICIAR SESION</span>
                </span>
                <div class="topbar-desplegable__mobile-header">LOG IN<img class="x__mobile" src="../../icons/x.svg" alt="check in icon"></div>
                <div class="dropdown-onclick__content topbar-desplegable__login-container">
                  <div class="topbar-desplegable__login-titles">
                    <span class="form-login-club-h10 topbar-desplegable__activeitem">LOGIN CLUB H10</span>
                    <span class="form-acceso-agencias">ACCESO AGENCIAS</span>
                  </div>
                  <div class="topbar-desplegable__login-content form-login-club-h10 active">
                    <form class="topbar-desplegable__login-form">
                      <div class="topbar-desplegable__login-item">
                        <label for="nro">Nº TARJETA/EMAIL</label>
                        <input class="input-main i-usuario" placeholder="521..." id="nro">
                      </div>
                      <div class="topbar-desplegable__login-item">
                        <label for="contrasena">CONTRASEÑA</label>
                        <input class="input-main i-contrasena" placeholder="Introduce tu contraseña" id="contrasena">
                        <div class="topbar-desplegable__login-checkbox">
                          <label class="checkbox-recuerdame">
                            Recuérdame
                            <input type="checkbox" checked="checked">
                            <span class="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </form>
                    <div class="topbar-desplegable__container2"><a href="#">¿Has olvidado tu contraseña?</a>
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
                  <div class="topbar-desplegable__login-content form-acceso-agencias">
                    <form class="topbar-desplegable__login-form">
                      <div class="topbar-desplegable__login-item">
                        <label for="codigo">CÓDIGO DE EMPRESA</label>
                        <input class="input-main" placeholder="521..." id="codigo">
                      </div>
                      <div class="topbar-desplegable__login-item">
                        <label for="usuario">USUARIO</label>
                        <input class="input-main i-usuario" placeholder="Introduce tu usuario" id="usuario">
                      </div>
                      <div class="topbar-desplegable__login-item">
                        <label for="contrasena2">CONTRASEÑA</label>
                        <input class="input-main i-contrasena" placeholder="Introduce tu contraseña" id="contrasena2">
                        <div class="topbar-desplegable__login-checkbox">
                          <label class="checkbox-recuerdame">
                            Recuérdame
                            <input type="checkbox" checked="checked">
                            <span class="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </form>
                    <div class="topbar-desplegable__container2"><a href="#">¿Has olvidado tu contraseña?</a>
                      <button class="main-button">ACCEDER</button>
                    </div>
                    <div class="topbar-desplegable__container4">
                      <p>¿Aún no tienes acceso online?</p> <a href="#">Regístrate</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="hotel-top">
        <div class="container-fix">
          <div class="logo-holder">
            <a href="/src/html/pages/home.php"><img src="../../logos/logo-blue.svg" class="logo" /></a>
          </div>
          <div class="data-holder">
            <div class="data">
              <div class="titulo">H10 Atlantic Sunset, Tenerife</div>
              <ul class="ratings">
                <li class="star active selected"></li>
                <li class="star"></li>
                <li class="star"></li>
                <li class="star"></li>
                <li class="star"></li>
              </ul>
              <div class="labels">
                <div class="label">Hotel Familiar</div>
                <div class="label">BOUTIQUE HOTEL</div>
                <div class="label">SOLO ADULTOS</div>
              </div>
            </div>
            <div class="direccion">Av. Adeje 300, s/n, E-38678. Playa Paraíso, Tenerife, España</div>
            <div class="tel-holder">
              <div class="telefono"><a href="#">(+34) 900 444 466</a></div>
              <div class="views-holder">
                <div class="icons-mobile">
                  <a href="#"><img src="../../icons/pin_drop_gray.svg" class="ico-ubicacion" /></a>
                  <a href="#"><img src="../../icons/call_gray.svg" class="ico-telefono" /></a>
                </div>
                <img src="../../logos/trip-advisor.svg" class="logo" />
                <div class="numero">5/5</div>
                <div class="views-holder_">
                  <ul class="views">
                    <li class="view"></li>
                    <li class="view"></li>
                    <li class="view"></li>
                    <li class="view activo"></li>
                    <li class="view"></li>
                  </ul>
                  <div class="reviews">329 reseñas</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-right">
            <!--<a href="#" class="btn-buscar">RESERVAR</a>
            <a href="#" class="btn-buscar">RESERVAR DESDE 123 €/NOCHE</a>-->
          </div>
        </div>
      </div>
    </section>

    <section class="c2-c3__container bottom is-hidden">
      <div class="tabs-holder">
        <div class="container-fix">
          <ul class="tabs">
            <li><a href="/src/html/pages/ficha-hotel.php">El hotel</a></li>
            <li><a href="/src/html/pages/ficha-habitaciones.php">Habitaciones</a></li>
            <li><a href="/src/html/pages/ficha-galeria.php">Galería</a></li>
            <li><a href="/src/html/pages/ficha-restaurantes.php" class="activo">Restaurantes</a></li>
            <li><a href="/src/html/pages/ficha-spa.php">Spa</a></li>
            <li><a href="/src/html/pages/ficha-ofertas.php">Ofertas</a></li>
            <li><a href="/src/html/pages/ficha-privilege.php">Privilege</a></li>
            <li><a href="/src/html/pages/ficha-reuniones.php">Reuniones y eventos</a></li>
            <li><a href="/src/html/pages/ficha-familias.php">Daisy Club</a></li>
            <li><a href="/src/html/pages/ficha-blue-team.php">Deportes y Animación</a></li>
            <li><a href="/src/html/pages/ficha-perfect-day.php">Perfect Day</a></li>
            <li class="btn-mas"><a href="#">Más</a></li>
          </ul>
        </div>
      </div>
    </section>

<?php if($include_no == false){ ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!--<script type="text/javascript" src="../../../js/SmoothScroll.min.js"></script>-->
    <script type="text/javascript" src="../../../js/moment.min.js"></script>
    <script type="text/javascript" src="../../../js/daterangepicker.min.js"></script>
    <script type="text/javascript" src="../../../js/_c1.js"></script>
    <script type="text/javascript" src="../../../js/_c7.js"></script>
    <script type="text/javascript" src="../../../js/_c2-c3.js"></script>
    <script type="text/javascript" src="../../../js/general.js"></script>
  </body>
</html>
<?php } ?>

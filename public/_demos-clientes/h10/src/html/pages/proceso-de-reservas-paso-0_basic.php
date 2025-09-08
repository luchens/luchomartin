<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <title>Proceso de Reservas - Paso 0</title>
    <link rel="shortcut icon" href="../../../src/icons/favicon.ico" type="image/vnd.microsoft.icon" />
    <link rel="stylesheet" href="../../../css/style-proceso-reservas.css">
  </head>
  <body class="proceso-de-reservas paso-0">

    <section class="container_">
      <nav class="menu-top">
        <div class="container-fix">
          <div class="container-left">
            <a href="/src/html/pages/home.php"><img alt='a' src="../../logos/logo-blue.svg" class="logo__mobile"></a>
            <div class="data">
              <div class="inline">
                <div class="titulo">H10 Atlantic Sunset, Tenerife</div>
                <ul class="ratings">
                  <li class="star active selected"></li>
                  <li class="star"></li>
                  <li class="star"></li>
                  <li class="star"></li>
                  <li class="star"></li>
                </ul>
              </div>
              <a href="#" class="btn-link">IR A LA FICHA DEL HOTEL<img alt='a' class="arrow-right" src="../../icons/arrow-right.svg" alt="hotel image"></a>
            </div>
          </div>
          <div class="container-right">
            <div class="btns-right">
              <ul class="links-top">
                <li class="js-dropdown dropdown-onclick dropdown-idioma">
                  <span>ES</span>
                  <div class="topbar-desplegable__mobile-header">IDIOMA<img alt='a' class="x__mobile" src="../../icons/x.svg" alt="check in icon"></div>
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
                <li class="js-dropdown dropdown-onclick dropdown-telefono">
                  <span>(+34) 900 000 000</span>
                  <div class="topbar-desplegable__mobile-header">CONTÁCTANOS<img alt='a' class="x__mobile" src="../../icons/x.svg" alt="check in icon"></div>
                  <div class="topbar-desplegable__mobile-tlf"><span>ESPAÑA <br> +34 900 000 000</span>
                    <button class="main-button">LLAMAR</button>
                    <hr class="topbar-desplegable__mobile-hr">
                  </div>
                  <div class="dropdown-onclick__content topbar-desplegable__tlf-container">
                    <div class="topbar-desplegable__tlf-text"><img alt='a' class="topbar-tlf__icon" src="../../icons/call_.svg" alt="call icon">
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
                <li class="js-dropdown dropdown-onclick dropdown-inicio-sesion">
                  <span class="topbar__links--inicio-sesion">
                    <span class="link_session">INICIAR SESION</span>
                  </span>
                  <div class="topbar-desplegable__mobile-header">LOG IN<img alt='a' class="x__mobile" src="../../icons/x.svg" alt="check in icon"></div>
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
        </div>
      </nav>

    </section>

    <section class="pasos">
      <div class="container">
        <ul class="menu">
          <li>
            <a href="/src/html/pages/proceso-de-reservas-paso-1.php" class="activo">
              <span class="numero">1</span>
              <div class="nombre">Seleccionar habitaciones</div>
            </a>
          </li>
          <li>
            <a href="/src/html/pages/proceso-de-reservas-paso-2.php">
              <span class="numero">2</span>
              <div class="nombre">EXTRAS</div>
            </a>
          </li>
          <li>
            <a href="/src/html/pages/proceso-de-reservas-paso-3.php">
              <span class="numero">3</span>
              <div class="nombre">Detalles y pago</div>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="numero">4</span>
              <div class="nombre">Confirmación</div>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!--<section class="hotel-top">
      <div class="container">
        <div class="container-fix">
          <div class="image">
            <img alt='a' src="../../images/image-110.png" class="img" />
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
            <div class="contacto"><div class="direccion">Av. Adeje 300, s/n, E-38678. Playa Paraíso, Tenerife, España</div><span class="line"></span><div class="telefono"><a href="#">(+34) 900 444 466</a></div></div>
            <div class="views-holder">
              <div class="icons-mobile">
                <a href="#"><img alt='a' src="../../icons/pin_drop_gray.svg" class="ico-ubicacion" /></a>
                <a href="#"><img alt='a' src="../../icons/call_gray.svg" class="ico-telefono" /></a>
              </div>
              <img alt='a' src="../../logos/trip-advisor.svg" class="logo" />
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
            <a href="#" class="btn-link">IR A LA FICHA DEL HOTEL<img alt='a' class="arrow-right" src="../../icons/arrow-right.svg" alt="hotel image"></a>
          </div>
        </div>
      </div>
    </section>-->

    <div class="menu-bottom-mobile">
      <a href="#" class="btn-link-top up"><img alt='a' src="../../icons/arrow_big_up.svg" alt="" class="animated bounce"/></a>
      <a href="#" class="btn-link-top down"><img alt='a' src="../../icons/arrow_big_down.svg" alt="" class="animated bounce"/></a>
      <a href="#" class="btn-back-top"><img alt='a' src="../../icons/arrow-down-white.svg" alt="" /></a>

      <div class="detalle">
        <div class="holder fix-h">
          <div class="title-top">
            <div class="holder-top">
              <div class="title">Detalle reserva</div>
              <div class="btns">
                <a href="#" class="btn-call"><img alt='a' src="../../icons/call_.svg" alt="" /></a>
                <a href="#" class="btn-close"><img alt='a' src="../../icons/menu-close.svg" alt="" /></a>
              </div>
            </div>
          </div>
          <div class="acordeon">
            <div class="item">
              <div class="item-title show">
                Conversor de divisas
              </div>
              <div class="item-title-2">
                Conversor de divisas
              </div>
              <div class="item-content conversor-divisas">
                <a href="#" class="activo"><b>EUR</b> Euro</a>
                <a href="#"><b>USD</b> Dolar USA</a>
                <a href="#"><b>RUB</b> Dolar Canadiense</a>
                <a href="#"><b>ISK</b> Corona Islandesa</a>
                <a href="#"><b>ILS</b> Shéquel Israelí</a>
                <a href="#"><b>ARS</b> Peso Argentino</a>
                <a href="#"><b>MAD</b> Dirham Marroquí</a>
                <a href="#"><b>CNY</b> Yuan</a>
                <a href="#"><b>JMD</b> Dolar Jamaiquino</a>
                <a href="#"><b>GBP</b> Libra Esterlina</a>
                <a href="#"><b>CHF</b> Franco Suizo</a>
                <a href="#"><b>SEK</b> Corona Sueca</a>
                <a href="#"><b>NOK</b> Corona Noruega</a>
                <a href="#"><b>DKK</b> Corona Danesa</a>
                <a href="#"><b>AUD</b> Dolar Australiano</a>
                <a href="#"><b>MXN</b> Peso Mexicano</a>
                <a href="#"><b>DOP</b> Peso Dominicano</a>
                <a href="#"><b>JPY</b> Yen</a>
              </div>
            </div>
            <div class="item">
              <div class="item-title">Mi reserva</div>
              <div class="item-title-2 show">Mi reserva</div>

              <div class="item-content holder-top">
                <div class="texto">
                  Del 23/07/2022 al 28/07/2022 - 4 noches<br>
                  4 habitaciones - 8 personas
                </div>
                <a href="#" class="btn-ver-detalles">Ver detalles</a>
                <div class="holder-detalles">
                  <div class="detalle">
                    <div class="row">
                      <div class="col-left">
                        <div class="titulo">Habitación doble vista mar lateral</div>
                      </div>
                      <div class="col-right">
                        <a href="#" class="btn-eliminar"><img alt='a' src="../../icons/trash.svg" alt="" /></a>
                      </div>
                    </div>
                    <div class="row bottom">
                      <div class="col-left">
                        <div class="texto">2 adultos, 2 niños Cancelación gratuita Media pensión</div>
                      </div>
                      <div class="col-right">
                        <div class="precio">364 €</div>
                      </div>
                    </div>
                  </div>
                  <div class="detalle">
                    <div class="row">
                      <div class="col-left">
                        <div class="titulo">Habitación doble vista mar lateral</div>
                      </div>
                      <div class="col-right">
                        <a href="#" class="btn-eliminar"><img alt='a' src="../../icons/trash.svg" alt="" /></a>
                      </div>
                    </div>
                    <div class="row bottom">
                      <div class="col-left">
                        <div class="texto">2 adultos, 2 niños Cancelación gratuita Media pensión</div>
                      </div>
                      <div class="col-right">
                        <div class="precio">364 €</div>
                      </div>
                    </div>
                  </div>
                  <div class="detalle">
                    <div class="row">
                      <div class="col-left">
                        <div class="titulo">Habitación doble vista mar lateral</div>
                      </div>
                      <div class="col-right">
                        <a href="#" class="btn-eliminar"><img alt='a' src="../../icons/trash.svg" alt="" /></a>
                      </div>
                    </div>
                    <div class="row bottom">
                      <div class="col-left">
                        <div class="texto">2 adultos, 2 niños Cancelación gratuita Media pensión</div>
                      </div>
                      <div class="col-right">
                        <div class="precio">364 €</div>
                      </div>
                    </div>
                  </div>
                  <div class="detalle">
                    <div class="row">
                      <div class="col-left">
                        <div class="titulo">Desayuno gratis Club H10</div>
                      </div>
                      <div class="col-right">
                        <a href="#" class="btn-eliminar"><img alt='a' src="../../icons/trash.svg" alt="" /></a>
                      </div>
                    </div>
                    <div class="row bottom">
                      <div class="col-left">
                        <div class="texto">10/04/2023 al 15/04/2023 - 1 x 10,0€</div>
                      </div>
                      <div class="col-right">
                        <div class="precio">0 €</div>
                      </div>
                    </div>
                  </div>
                  <div class="detalle">
                    <div class="row">
                      <div class="col-left">
                        <div class="titulo">Parking</div>
                      </div>
                      <div class="col-right">
                        <a href="#" class="btn-eliminar"><img alt='a' src="../../icons/trash.svg" alt="" /></a>
                      </div>
                    </div>
                    <div class="row bottom">
                      <div class="col-left">
                        <div class="texto">10/04/2023 al 15/04/2023 - 1 x 10,0€</div>
                      </div>
                      <div class="col-right">
                        <div class="precio">450 €</div>
                      </div>
                    </div>
                  </div>
                  <div class="detalle">
                    <div class="row">
                      <div class="col-left">
                        <div class="titulo">Tratamientos en nuestro despacio Spa</div>
                      </div>
                      <div class="col-right">
                        <a href="#" class="btn-eliminar"><img alt='a' src="../../icons/trash.svg" alt="" /></a>
                      </div>
                    </div>
                    <div class="row bottom">
                      <div class="col-left">
                        <div class="texto">10/04/2023 al 15/04/2023 - 1 x 10,0€</div>
                      </div>
                      <div class="col-right">
                        <div class="precio">1.450 €</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="importe">
                  <div class="row">
                    <div class="col-left">
                      <div class="titulo">IMPORTE</div>
                    </div>
                    <div class="col-right">
                      <div class="precio"><b>2.464 €</b></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-left">
                      <div class="texto">Descuento SPRINGH10 (15%)</div>
                    </div>
                    <div class="col-right">
                      <div class="precio negativo">-100 €</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-left">
                      <div class="texto">Descuento CLUB H10 (5%)</div>
                    </div>
                    <div class="col-right">
                      <div class="precio negativo">-50 €</div>
                    </div>
                  </div>
                </div>
                <div class="total">
                  <div class="row">
                    <div class="col-left">
                      <div class="titulo">TOTAL RESERVA</div>
                      <a href="#" class="btn-moneda">(moneda del hotel)</a>
                    </div>
                    <div class="col-right">
                      <div class="precio">2.314 €</div>
                    </div>
                  </div>
                  <div class="texto"><a href="#" class="btn-impuestos">*Impuestos incluidos excepto impuestos pernoctación</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="contactanos">
        <div class="holder fix-h">
          <div class="title-top">
            <div class="holder-top">
              <div class="title">CONTÁCTANOS</div>
              <div class="btns">
                <a href="#" class="btn-close"><img alt='a' src="../../icons/menu-close.svg" alt="" /></a>
              </div>
            </div>
          </div>
          <div class="datos">
            <div class="dato-top">
              ESPAÑA<br>
              +34 900 000 000
            </div>
            <div class="btn-holder">
              <button type="button" class="btn-llamar">LLAMAR</button>
            </div>
            <ul class="tlf-list">
              <li class="tlf__list-item"> FRANCIA <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
              <li class="tlf__list-item"> ITALIA <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
              <li class="tlf__list-item"> ALEMANIA <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
              <li class="tlf__list-item"> REINO UNIDO <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
              <li class="tlf__list-item"> ESTADOS UNIDOS <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
              <li class="tlf__list-item"> RUSIA <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
              <li class="tlf__list-item"> PORTUGAL <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
              <li class="tlf__list-item"> BRAZIL <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-left">
          <div class="tit">TOTAL RESERVA*</div>
          <div class="precio">1235,2 €</div>
          <a href="#" class="btn-link">(moneda del hotel)</a>
        </div>
        <div class="col-right">
          <button type="button" class="btn-continuar estado-no-continuar" disabled>CONTINUAR</button>
          <button type="button" class="btn-continuar estado-continuar">CONTINUAR</button>
          <a href="#" class="btn-link">Falta añadir habitaciones para continuar</a>
        </div>
      </div>

    </div>

    <div class="menu-mobile">
      <div class="row">
        <a href="#" class="btn-volver"><img alt='a' src="../../icons/arrow_small_left.svg" alt="" /></a>
        <div class="holder">
          <div class="title">Seleccionar habitación</div>
          <div class="text">Reserva. Paso 1/4</div>
        </div>
        <a href="#" class="btn-cerrar"><img alt='a' src="../../icons/menu-close.svg" alt="" /></a>
      </div>
      <div class="row">
        <div class="holder">
          <div class="title">H10 Atlantic Sunset, Tenerife</div>
          <div class="text alt">
            09 sep - 11 sep 2022<br>
            4 hab., 8 personas
          </div>
        </div>
        <a href="#" class="btn-editar"><img alt='a' src="../../icons/menu-editar.svg" alt="" /></a>
      </div>
    </div>

    <div class="daterangepicker-mobile">
      <div class="holder">
        <div class="title">ELIGE TU HOTEL O DESTINO <a href="#" class="close"></a></div>
        <div class="content">
          <div class="daterangepicker-mobile-holder"></div>
        </div>
      </div>
    </div>

    <div class="show-open-buscador-avanzado-mobile">
      <div class="holder">
        <div class="title">ELIGE TU HOTEL O DESTINO <a href="#" class="close"></a></div>
        <div class="content">
          <form class="form">
            <div class="form-item inputs">
              <input class="input hotel-destino" value="" placeholder="H10 Atlantic Sunset, Tenerife" hotelDestinoFilter />
              <div class="mensaje-alerta">
                <img src="../../../src/icons/i.svg" class="icon" alt="" />
                <div class="texto">Lo sentimos, no reconocemos el hotel o destino que nos indicas. Puedes conocer el listado de hoteles y destinos clicando sobre el icono de la derecha.</div>
              </div>
              <div class="mensaje-alerta">
                <img src="../../../src/icons/i.svg" class="icon" alt="" />
                <div class="texto">Es necesario seleccionar al menos un destino u hotel.</div>
              </div>
              <input class="input fecha-entrada-salida" value="" placeholder="Fecha entrada - salida" name="dateFilter-mobile" id="dateFilter-mobile" />
              <input class="input habitacion" value="" placeholder="4 habitaciones, 8 personas" habitacionFilter />
              <div class="mensaje-alerta">
                <img src="../../../src/icons/i.svg" class="icon" alt="" />
                <div class="texto">Debido a un problema interno no nos es posible aceptar reservas nuevas en este momento </div>
              </div>
              <input class="input codigo-promocional" value="" placeholder="Código promocional" codigoPromocionalFiler >
            </div>
            <div class="form-item">
              <a href="/src/html/pages/listado-hoteles.php" class="btn-buscar">BUSCAR</a>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="show-open-hotel-destino-mobile">
      <div class="holder">
        <div class="title">ELIGE TU HOTEL O DESTINO <a href="#" class="close"></a></div>
        <div class="content">
          <div class="show-open-hotel-destino-holder_">
            <input class="input hotel-destino" value="" placeholder="H10 Atlantic Sunset, Tenerife" />
            <div class="hotel-destino-content no-predictivo">
              <div class="listado">
                <div class="titulo">Últimas  búsquedas</div>
                <div class="items">
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Madrid</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Barcelona</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 Marina Barcelona</span></a></div>
                </div>
                <div class="titulo mt">Últimas visitas</div>
                <div class="items">
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Madrid</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Barcelona</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 Marina Barcelona</span></a></div>
                </div>
              </div>
              <div class="listado">
                <div class="titulo">España</div>
                <div class="items">
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Barcelona</span><span class="numb"><b>(8)</b></span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Benidorm</span><span class="numb"><b>(8)</b></span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Córdoba</span><span class="numb"><b>(8)</b></span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Costa del Sol</span><span class="numb"><b>(8)</b></span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Fuerteventura</span><span class="numb"><b>(8)</b></span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Gran Canaria</span><span class="numb"><b>(8)</b></span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">La Palma</span><span class="numb"><b>(8)</b></span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Lanzarote</span><span class="numb"><b>(8)</b></span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Madrid</span><span class="numb"><b>(8)</b></span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Málaga</span><span class="numb"><b>(8)</b></span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Mallorca</span><span class="numb"><b>(8)</b></span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Salou - Cambrils</span><span class="numb"><b>(8)</b></span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Sevilla</span><span class="numb"><b>(8)</b></span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Tarragona</span><span class="numb"><b>(8)</b></span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto">Tenerife</span><span class="numb"><b>(8)</b></span></a></div>
                </div>
              </div>
            </div>
            <div class="hotel-destino-content predictivo">
              <div class="ubicacion">
                <div class="items">
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto"><b>Te</b>nerife</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto"><b>Te</b>nerife</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto"><b>Te</b>nerife</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto"><b>Te</b>nerife</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto"><b>Te</b>nerife</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/ubicacion.svg" class="icon" /> <span class="texto"><b>Te</b>nerife</span></a></div>
                </div>
              </div>
              <div class="hoteles">
                <div class="items">
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 Croma <b>Má</b>laga</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 <b>Ma</b>dison Barcelona</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 <b>Ma</b>rina Barcelona</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">Ocean <b>Ma</b>ya Norte</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 Croma <b>Má</b>laga</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 <b>Ma</b>dison Barcelona</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 <b>Ma</b>rina Barcelona</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">Ocean <b>Ma</b>ya Norte</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 Croma <b>Má</b>laga</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 <b>Ma</b>dison Barcelona</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 <b>Ma</b>rina Barcelona</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">Ocean <b>Ma</b>ya Norte</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 Croma <b>Má</b>laga</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 <b>Ma</b>dison Barcelona</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 <b>Ma</b>rina Barcelona</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">Ocean <b>Ma</b>ya Norte</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 Croma <b>Má</b>laga</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 <b>Ma</b>dison Barcelona</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 <b>Ma</b>rina Barcelona</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">Ocean <b>Ma</b>ya Norte</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 Croma <b>Má</b>laga</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 <b>Ma</b>dison Barcelona</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">H10 <b>Ma</b>rina Barcelona</span></a></div>
                  <div class="item"><a href="#"><img src="../../../src/icons/hotel.svg" class="icon" /> <span class="texto">Ocean <b>Ma</b>ya Norte</span></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="show-open-opciones-mobile">
      <div class="holder">
        <div class="title">ELIGE TU HOTEL O DESTINO <a href="#" class="close"></a></div>
        <div class="content">
          <div class="show-open-opciones-holder_">
            <div class="habitaciones">
              <div class="habitacion">
                <a href="#" class="btn-eliminar"></a>
                <div class="habitacion-titulo"><span>HABITACIÓN 1</span></div>
                <div class="contador-holder">
                  <div class="edad">ADULTOS</div>
                  <div class="contador">
                    <a href="#" class="btn-restar-sumar left"></a>
                    <input   class="input-numero input-adultos" value="1" min="1" max="99" />
                    <a href="#" class="btn-restar-sumar right"></a>
                  </div>
                </div>
                <div class="contador-holder">
                  <div class="edad">NIÑOS</div>
                  <div class="contador">
                    <a href="#" class="btn-restar-sumar left"></a>
                    <input   class="input-numero input-ninos" value="0" min="0" max="99" />
                    <a href="#" class="btn-restar-sumar right"></a>
                  </div>
                </div>
                <div class="row">
                  <div class="contador-holder">
                    <div class="edad">EDAD NIÑOS</div>
                    <div class="contador">
                      <a href="#" class="btn-restar-sumar left"></a>
                      <input   class="input-numero input-edad" value="1" min="1" max="99" />
                      <a href="#" class="btn-restar-sumar right"></a>
                    </div>
                  </div>
                  <div class="contador-holder alineacion-movil">
                    <div class="edad"></div>
                    <div class="contador">
                      <a href="#" class="btn-restar-sumar left"></a>
                      <input   class="input-numero input-edad" value="1" min="1" max="99" />
                      <a href="#" class="btn-restar-sumar right"></a>
                    </div>
                  </div>
                  <div class="contador-holder">
                    <div class="edad"></div>
                    <div class="contador">
                      <a href="#" class="btn-restar-sumar left"></a>
                      <input   class="input-numero input-edad" value="1" min="1" max="99" />
                      <a href="#" class="btn-restar-sumar right"></a>
                    </div>
                  </div>
                  <div class="contador-holder">
                    <div class="edad"></div>
                    <div class="contador">
                      <a href="#" class="btn-restar-sumar left"></a>
                      <input   class="input-numero input-edad" value="1" min="1" max="99" />
                      <a href="#" class="btn-restar-sumar right"></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="habitacion">
                <a href="#" class="btn-eliminar"></a>
                <div class="habitacion-titulo"><span>HABITACIÓN 2</span></div>
                <div class="contador-holder">
                  <div class="edad">ADULTOS</div>
                  <div class="contador">
                    <a href="#" class="btn-restar-sumar left"></a>
                    <input   class="input-numero input-adultos" value="1" min="1" max="99" />
                    <a href="#" class="btn-restar-sumar right"></a>
                  </div>
                </div>
                <div class="contador-holder">
                  <div class="edad">NIÑOS</div>
                  <div class="contador">
                    <a href="#" class="btn-restar-sumar left"></a>
                    <input   class="input-numero input-ninos" value="0" min="0" max="99" />
                    <a href="#" class="btn-restar-sumar right"></a>
                  </div>
                </div>
              </div>
              <div class="habitacion">
                <a href="#" class="btn-eliminar"></a>
                <div class="habitacion-titulo"><span>HABITACIÓN 3</span></div>
                <div class="contador-holder">
                  <div class="edad">ADULTOS</div>
                  <div class="contador">
                    <a href="#" class="btn-restar-sumar left"></a>
                    <input   class="input-numero input-adultos" value="1" min="1" max="99" />
                    <a href="#" class="btn-restar-sumar right"></a>
                  </div>
                </div>
                <div class="contador-holder">
                  <div class="edad">NIÑOS</div>
                  <div class="contador">
                    <a href="#" class="btn-restar-sumar left"></a>
                    <input   class="input-numero input-ninos" value="0" min="0" max="99" />
                    <a href="#" class="btn-restar-sumar right"></a>
                  </div>
                </div>
              </div>
              <div class="habitacion">
                <a href="#" class="btn-eliminar"></a>
                <div class="habitacion-titulo"><span>HABITACIÓN 4</span></div>
                <div class="contador-holder">
                  <div class="edad">ADULTOS</div>
                  <div class="contador">
                    <a href="#" class="btn-restar-sumar left"></a>
                    <input   class="input-numero input-adultos" value="1" min="1" max="99" />
                    <a href="#" class="btn-restar-sumar right"></a>
                  </div>
                </div>
                <div class="contador-holder">
                  <div class="edad">NIÑOS</div>
                  <div class="contador">
                    <a href="#" class="btn-restar-sumar left"></a>
                    <input   class="input-numero input-ninos" value="0" min="0" max="99" />
                    <a href="#" class="btn-restar-sumar right"></a>
                  </div>
                </div>
              </div>
              <div class="habitacion">
                <a href="#" class="btn-eliminar"></a>
                <div class="habitacion-titulo"><span>HABITACIÓN 5</span></div>
                <div class="contador-holder">
                  <div class="edad">ADULTOS</div>
                  <div class="contador">
                    <a href="#" class="btn-restar-sumar left"></a>
                    <input   class="input-numero input-adultos" value="1" min="1" max="99" />
                    <a href="#" class="btn-restar-sumar right"></a>
                  </div>
                </div>
                <div class="contador-holder">
                  <div class="edad">NIÑOS</div>
                  <div class="contador">
                    <a href="#" class="btn-restar-sumar left"></a>
                    <input   class="input-numero input-ninos" value="0" min="0" max="99" />
                    <a href="#" class="btn-restar-sumar right"></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="btns-top">
              <a href="#" class="btn-anadir">AÑADIR HABITACIÓN</a>
            </div>
            <div class="btns">
              <a href="#" class="btn-actualizar">CONFIRMAR</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="container-fix">
      <div class="row-ir">
        <a href="#" class="btn-ir">Ir a la ficha del hotel <img alt='a' src="../../icons/arrow-right.svg" alt="" /></a>
      </div>

      <div class="col-left">
        <div class="mensaje-ahorro">
          <div class="switch-holder">
            <div class="btn-switch activo">
              <div class="dot"></div>
            </div>
          </div>
          <div class="texto"><b>Ahorro del 5% activado</b>, al reservar con el Club H10 (se muestran precios con descuentos aplicados)</div>
        </div>

        <div class="h-extras fix-width">
          <div class="h-extra">
            <div class="data">
              <div class="titulo">1- Habitación doble vista mar lateral</div>
              <div class="icons">
                <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
                <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
                <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
                <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
              </div>
              <div class="texto">
                2 adultos, 2 niños<br>
                1 Cambio gratis, Sólo Alojamiento<br>
                <b>Desayuno gratis incluido</b>
              </div>
              <div class="row-bottom">
                <div class="btns">
                  <a href="#" class="btn-link">Ver equipamiento</a>
                </div>
                <div class="precio"><u>412€</u> 386€</div>
              </div>
              <button type="button" class="btn-continuar">Eliminar</button>
            </div>
          </div>

          <div class="h-extra-ext">
            <div class="data">
              <div class="titulo-holder">
                <div class="titulo"><img alt='a' src="../../icons/bedroom_child.svg" class="ico" alt=""> HABITACIÓN 2</div>
                <div class="icons">
                  <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
                  <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
                  <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
                  <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
                </div>
              </div>
              <div class="texto">1 Adulto, 3 Niños</div>
              <button type="button" class="btn-seleccionar">Seleccionar habitación</button>
            </div>
          </div>

          <div class="h-extra-ext">
            <div class="data">
              <div class="titulo-holder">
                <div class="titulo"><img alt='a' src="../../icons/bedroom_child.svg" class="ico" alt=""> HABITACIÓN 3</div>
                <div class="icons">
                  <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
                  <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
                  <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
                  <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
                </div>
              </div>
              <div class="texto">1 Adulto, 3 Niños</div>
              <button type="button" class="btn-seleccionar">Seleccionar habitación</button>
            </div>
          </div>

          <div class="h-extra-ext">
            <div class="data">
              <div class="titulo-holder">
                <div class="titulo"><img alt='a' src="../../icons/bedroom_child.svg" class="ico" alt=""> HABITACIÓN 4</div>
                <div class="icons">
                  <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
                  <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
                  <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
                  <img alt='a' src="../../icons/habitacion.svg" class="icon" alt="">
                </div>
              </div>
              <div class="texto">1 Adulto, 3 Niños</div>
              <button type="button" class="btn-seleccionar">Seleccionar habitación</button>
            </div>
          </div>



        </div>

      </div>
      <div class="col-right" id="col-right">
        <div class="sticky">
          <div class="conversor-divisas">
            <div class="titulo">CONVERSOR DE DIVISAS</div>
            <div class="holder">
              <a href="#" class="activo"><b>EUR</b> Euro</a>
              <a href="#"><b>USD</b> Dolar USA</a>
              <a href="#"><b>RUB</b> Dolar Canadiense</a>
              <a href="#"><b>ISK</b> Corona Islandesa</a>
              <a href="#"><b>ILS</b> Shéquel Israelí</a>
              <a href="#"><b>ARS</b> Peso Argentino</a>
              <a href="#"><b>MAD</b> Dirham Marroquí</a>
              <a href="#"><b>CNY</b> Yuan</a>
              <a href="#"><b>JMD</b> Dolar Jamaiquino</a>
              <a href="#"><b>GBP</b> Libra Esterlina</a>
              <a href="#"><b>CHF</b> Franco Suizo</a>
              <a href="#"><b>SEK</b> Corona Sueca</a>
              <a href="#"><b>NOK</b> Corona Noruega</a>
              <a href="#"><b>DKK</b> Corona Danesa</a>
              <a href="#"><b>AUD</b> Dolar Australiano</a>
              <a href="#"><b>MXN</b> Peso Mexicano</a>
              <a href="#"><b>DOP</b> Peso Dominicano</a>
              <a href="#"><b>JPY</b> Yen</a>
            </div>
          </div>

          <div class="mi-reserva">
            <div class="holder-top">
              <div class="titulo">MI RESERVA</div>
              <div class="texto">
                Del 23/07/2022 al 28/07/2022 - 4 noches<br>
                4 habitaciones - 8 personas
              </div>
              <a href="#" class="btn-ver-detalles">Ver detalles</a>
              <div class="holder-detalles">
                <div class="detalle">
                  <div class="row">
                    <div class="col-left">
                      <div class="titulo">Habitación doble vista mar lateral</div>
                    </div>
                    <div class="col-right">
                      <a href="#" class="btn-eliminar"><img alt='a' src="../../icons/trash.svg" alt="" /></a>
                    </div>
                  </div>
                  <div class="row bottom">
                    <div class="col-left">
                      <div class="texto">2 adultos, 2 niños Cancelación gratuita Media pensión</div>
                    </div>
                    <div class="col-right">
                      <div class="precio">364 €</div>
                    </div>
                  </div>
                </div>
                <div class="detalle">
                  <div class="row">
                    <div class="col-left">
                      <div class="titulo">Habitación doble vista mar lateral</div>
                    </div>
                    <div class="col-right">
                      <a href="#" class="btn-eliminar"><img alt='a' src="../../icons/trash.svg" alt="" /></a>
                    </div>
                  </div>
                  <div class="row bottom">
                    <div class="col-left">
                      <div class="texto">2 adultos, 2 niños Cancelación gratuita Media pensión</div>
                    </div>
                    <div class="col-right">
                      <div class="precio">364 €</div>
                    </div>
                  </div>
                </div>
                <div class="detalle">
                  <div class="row">
                    <div class="col-left">
                      <div class="titulo">Habitación doble vista mar lateral</div>
                    </div>
                    <div class="col-right">
                      <a href="#" class="btn-eliminar"><img alt='a' src="../../icons/trash.svg" alt="" /></a>
                    </div>
                  </div>
                  <div class="row bottom">
                    <div class="col-left">
                      <div class="texto">2 adultos, 2 niños Cancelación gratuita Media pensión</div>
                    </div>
                    <div class="col-right">
                      <div class="precio">364 €</div>
                    </div>
                  </div>
                </div>
                <div class="detalle">
                  <div class="row">
                    <div class="col-left">
                      <div class="titulo">Desayuno gratis Club H10</div>
                    </div>
                    <div class="col-right">
                      <a href="#" class="btn-eliminar"><img alt='a' src="../../icons/trash.svg" alt="" /></a>
                    </div>
                  </div>
                  <div class="row bottom">
                    <div class="col-left">
                      <div class="texto">10/04/2023 al 15/04/2023 - 1 x 10,0€</div>
                    </div>
                    <div class="col-right">
                      <div class="precio">0 €</div>
                    </div>
                  </div>
                </div>
                <div class="detalle">
                  <div class="row">
                    <div class="col-left">
                      <div class="titulo">Parking</div>
                    </div>
                    <div class="col-right">
                      <a href="#" class="btn-eliminar"><img alt='a' src="../../icons/trash.svg" alt="" /></a>
                    </div>
                  </div>
                  <div class="row bottom">
                    <div class="col-left">
                      <div class="texto">10/04/2023 al 15/04/2023 - 1 x 10,0€</div>
                    </div>
                    <div class="col-right">
                      <div class="precio">450 €</div>
                    </div>
                  </div>
                </div>
                <div class="detalle">
                  <div class="row">
                    <div class="col-left">
                      <div class="titulo">Tratamientos en nuestro despacio Spa</div>
                    </div>
                    <div class="col-right">
                      <a href="#" class="btn-eliminar"><img alt='a' src="../../icons/trash.svg" alt="" /></a>
                    </div>
                  </div>
                  <div class="row bottom">
                    <div class="col-left">
                      <div class="texto">10/04/2023 al 15/04/2023 - 1 x 10,0€</div>
                    </div>
                    <div class="col-right">
                      <div class="precio">1.450 €</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="importe">
              <div class="row">
                <div class="col-left">
                  <div class="titulo">IMPORTE</div>
                </div>
                <div class="col-right">
                  <div class="precio"><b>412 €</b></div>
                </div>
              </div>
              <div class="row">
                <div class="col-left">
                  <div class="texto">Descuento SPRINGH10 (15%)</div>
                </div>
                <div class="col-right">
                  <div class="precio">-100 €</div>
                </div>
              </div>
              <div class="row">
                <div class="col-left">
                  <div class="texto">Descuento CLUB H10 (5%)</div>
                </div>
                <div class="col-right">
                  <div class="precio">-50 €</div>
                </div>
              </div>
            </div>
            <div class="total">
              <div class="row">
                <div class="col-left">
                  <div class="titulo">TOTAL RESERVA APROXIMADO</div>
                  <span class="div-sel">(Divisa seleccionada)</span>
                </div>
                <div class="col-right">
                  <div class="precio">381.947,64 JPY</div>
                </div>
              </div>
            </div>
            <div class="total">
              <div class="row">
                <div class="col-left">
                  <div class="titulo">TOTAL RESERVA</div>
                  <a href="#" class="btn-moneda">(moneda del hotel)</a>
                </div>
                <div class="col-right">
                  <div class="precio">386 €</div>
                </div>
              </div>
              <div class="texto"><a href="#" class="btn-impuestos">*Impuestos incluidos excepto impuestos pernoctación</a></div>
            </div>
            <a href="#" class="btn-continuar">CONTINUAR</a>
            <button type="button" class="btn-continuar" disabled>CONTINUAR</button>
            <div class="texto-msj">Falta añadir habitaciones para continuar</div>
          </div>

          <div class="ayuda">
            <div class="holder-top">
              <div class="titulo">¿NECESITAS AYUDA?</div>
              <div class="texto">
                <a href="mailto:hola@h10.com">reservas@h10hotels.com</a><br>
                <a href="tel:+34900444466">+ (34) 900 444 466</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer tall">
      <div class="container-fix">
        <ul class="separator-line-list footer-info__extra">
          <li class="separator-line-list__item"><a class="footer-info__extra--text" href="#">LA COMPAÑÍA</a></li>
          <li class="separator-line-list__item"><a class="footer-info__extra--text" href="#">CONTACTO</a></li>
          <li class="separator-line-list__item"><a class="footer-info__extra--text" href="#">SALA DE PRENSA</a></li>
          <li class="separator-line-list__item"><a class="footer-info__extra--text" href="#">MAPA WEB</a></li>
          <li class="separator-line-list__item"><a class="footer-info__extra--text" href="#">COOKIES</a></li>
          <li class="separator-line-list__item"><a class="footer-info__extra--text" href="#">POLÍTICA DE PRIVACIDAD</a></li>
          <li class="separator-line-list__item"><a class="footer-info__extra--text" href="#">NOTA LEGAL</a></li>
        </ul>
      </div>
    </footer>

    <?php include("../pages/proceso-de-reservas-paso-modals_basic.php"); ?>
    <?php $include_no = true; include("../sprint-4/c30-a.php"); ?>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="../../../js/SmoothScroll.min.js"></script>
    <script type="text/javascript" src="../../../js/aos.js"></script>
    <script type="text/javascript" src="../../../js/moment.min.js"></script>
    <script type="text/javascript" src="../../../js/daterangepicker.min.js"></script>
    <script type="text/javascript" src="../../../js/acordeontoggler.js"></script>
    <script type="text/javascript" src="../../../js/_c1.js"></script>
    <script type="text/javascript" src="../../../js/_c7.js"></script>

    <script type="text/javascript" src="../../../js/rAF.js"></script>
  	<script type="text/javascript" src="../../../js/ResizeSensor.js"></script>
  	<script type="text/javascript" src="../../../js/sticky-sidebar.js"></script>

    <script type="text/javascript" src="../../../js/_c30-a.js"></script>
    <script type="text/javascript" src="../../../js/_c30-b.js"></script>

    <script type="text/javascript" src="../../../js/proceso-de-reservas_basic.js"></script>
    <script type="text/javascript" src="../../../js/general.js"></script>
  </body>
</html>

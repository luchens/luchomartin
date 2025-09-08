<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c1-topbar-main</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

<nav class="topbar-main landings">
  <div class="topbar-main__container-left">
    <a href="#" class="menu-icon__mobile-click">
      <img src="../../icons/menu-white.svg" class="menu-icon__mobile" />
      <img src="../../icons/menu-close-white.svg" class="menu-icon__mobile" />
    </a>
    <a href="/src/html/pages/home.php"><img src="../../logos/logo-blue.svg" class="logo__mobile" /></a>
  </div>
  <div class="topbar-main__container-right">
    <div class="container-right__mobile">
      <img src="../../icons/call_-white.svg" class="header__icon-mobile contactanos" />
      <img src="../../icons/person_-white.svg" class="header__icon-mobile login" />
    </div>
    <div class="container-right__desktop">
      <ul class="topbar__links-top">
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
<!--                  <label for="hotel">HOTEL</label>
                  <input class="input-main" placeholder="H10 Atlantic Sunset" id="hotel">-->
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
      <ul class="topbar__links-bottom js-topbar__links-bottom">
        <li class="dropdown"><span class="dropdown__toggler">HOTELES</span>
          <div class="dropdown__content dropdown__content--centered2">
            <div class="c4-01__container c4-01__container2">
              <section class="c4-01__destinos c4-01__destinos-fixed">
                <div class="c4-01__destinos-content c4-01__destinos-content-fixed">
                  <div class="div c4-01__main-cabecera js-acordeon acordeon-onclick"><span class="c4-01__title">DESTINOS DE HOTELES</span><img class="c4-01__cabecera-arrow" src="../../icons/arrow_big_up.svg" alt="flecha mirando hacia arriba">
                  </div>
                  <hr class="hr__main-cabecera">
                  <div class="c4-01__lists-container acordeon-onclick__submenu">
                    <div class="c4-01__list">
                      <div class="c4-01__list_cabecera js-sub-acordeon sub-acordeon-onclick"><span>ESPAÑA</span><img class="c4-01__cabecera-arrow" src="../../icons/arrow_big_up.svg" alt="flecha mirando hacia arriba"></div>
                      <hr class="c4-01-hr_tablet">
                      <ul class="c4-01__mobile-ul sub-acordeon-onclick__submenu">
                        <li class="c4-01__desktop-ul"><a href="">Barcelona <b>(15)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Benidorm <b>(1)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Córdoba <b>(1)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Costa del Sol <b>(1)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Fuerteventura <b>(5)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Gran Canaria <b>(1)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">La Palma <b>(1)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Lanzarote <b>(5)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Madrid <b>(3)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Málaga <b>(1)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Mallorca <b>(3)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Salou - Cambrils <b>(6)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Sevilla <b>(2)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Tarragona <b>(1)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="/src/html/pages/listado-hoteles.php">Tenerife <b>(7)</b></a></li>
                      </ul>
                    </div>
                    <div class="c4-01__list">
                      <div class="c4-01__list_cabecera js-sub-acordeon sub-acordeon-onclick"><span>EUROPA</span><img class="c4-01__cabecera-arrow" src="../../icons/arrow_big_up.svg" alt="flecha mirando hacia arriba"></div>
                      <hr class="c4-01-hr_tablet">
                      <ul class="c4-01__mobile-ul sub-acordeon-onclick__submenu">
                        <li class="c4-01__desktop-ul"><a href="">Berlín <b>(2)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Lisboa <b>(2)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Londres <b>(1)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Roma <b>(2)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Venecia <b>(1)</b></a></li>
                      </ul>
                    </div>
                    <div class="c4-01__list">
                      <div class="c4-01__list_cabecera js-sub-acordeon sub-acordeon-onclick"><span>CARIBE</span><img class="c4-01__cabecera-arrow" src="../../icons/arrow_big_up.svg" alt="flecha mirando hacia arriba"></div>
                      <hr class="c4-01-hr_tablet">
                      <ul class="c4-01__mobile-ul sub-acordeon-onclick__submenu">
                        <li class="c4-01__desktop-ul"><a href="">Jamaica <b>(2)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Punta Cana, R. Dominicana <b>(2)</b></a></li>
                        <li class="c4-01__desktop-ul"><a href="">Riviera Maya, México <b>(3)</b></a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="c4-01__vermas c4-01__vermas-fixed">
                    <hr class="c4-01__hr"><a href="/src/html/pages/listado-hoteles-2.php" class="c4-01__bottom-link">VER TODOS LOS DESTINOS</a>
                  </div>
                </div>
              </section>
              <section class="c4-01__experiencias c4-01__experiencias-fixed">
                <div class="c4-01__experiencias-content">
                  <div class="div c4-01__main-cabecera js-acordeon acordeon-onclick"><span class="c4-01__title">EXPERIENCIAS EN NUESTROS HOTELES</span><img class="c4-01__cabecera-arrow" src="../../icons/arrow_big_up.svg"
                      alt="flecha mirando hacia arriba"></div>
                  <hr class="hr__main-cabecera">
                  <div class="c4-01__articles-list acordeon-onclick__submenu">
                    <div>
                      <div class="articulo-resume04"><img class="articulo-resume04__image" src="../../images/image--10.png" alt="hotel image">
                        <div class="articulo-resume04__text"><span class="articulo-resume04__title">Familias</span>
                          <p class="articulo-resume04__p">
                            Te hacemos sentir único y especial en nuestros hoteles exclusivos y singulares.
                          </p>
                          <a href="#" class="articulo-resume__ver04">VER MÁS<img class="arrow-right" src="../../icons/arrow-right.svg" alt="hotel image"></a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="articulo-resume04"><img class="articulo-resume04__image" src="../../images/image--11.png" alt="hotel image">
                        <div class="articulo-resume04__text"><span class="articulo-resume04__title">Familias</span>
                          <p class="articulo-resume04__p">
                            Te hacemos sentir único y especial en nuestros hoteles exclusivos y singulares.
                          </p>
                          <a href="#" class="articulo-resume__ver04">VER MÁS<img class="arrow-right" src="../../icons/arrow-right.svg" alt="hotel image"></a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="articulo-resume04"><img class="articulo-resume04__image" src="../../images/image--12.png" alt="hotel image">
                        <div class="articulo-resume04__text"><span class="articulo-resume04__title">Familias</span>
                          <p class="articulo-resume04__p">
                            Te hacemos sentir único y especial en nuestros hoteles exclusivos y singulares.
                          </p>
                          <a href="#" class="articulo-resume__ver04">VER MÁS<img class="arrow-right" src="../../icons/arrow-right.svg" alt="hotel image"></a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="articulo-resume04"><img class="articulo-resume04__image" src="../../images/image--13.png" alt="hotel image">
                        <div class="articulo-resume04__text"><span class="articulo-resume04__title">Familias</span>
                          <p class="articulo-resume04__p">
                            Te hacemos sentir único y especial en nuestros hoteles exclusivos y singulares.
                          </p>
                          <a href="#" class="articulo-resume__ver04">VER MÁS<img class="arrow-right" src="../../icons/arrow-right.svg" alt="hotel image"></a>
                        </div>
                      </div>
                    </div>
                    <div class="c4-01__vermas c4-01__vermas-experiencias">
                      <hr class="c4-01__hr"><a href="#" class="c4-01__bottom-link">VER TODAS LAS EXPERIENCIAS</a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </li>
        <li class="dropdown"><span class="dropdown__toggler">OFERTAS</span>
          <div class="dropdown__content dropdown__content--centered2">
            <div class="c4-01__container c4-01__container2">
              <section class="c4-01__destinos">
                <div class="c4-01__destinos-content">
                  <div class="c4-01__main-cabecera"><span class="c4-01__title">OFERTAS H10 HOTELS</span><span class="c4-01__title-arrow">^</span></div>
                  <hr class="hr__main-cabecera">
                  <div class="scroll-y ofr">
                    <div class="c4-01__articles-list c4-02__articles-ofertas">
                      <div>
                        <div class="articulo-resume04"><img class="articulo-resume04__image" src="../../images/image__10.png" alt="hotel image">
                          <div class="articulo-resume04__text"><span class="articulo-resume04__title">30% Descuento</span>
                            <p class="articulo-resume04__p">Codigo SPRINGH10</p><a href="#" class="articulo-resume__ver04">VER MÁS<img class="arrow-right" src="../../icons/arrow-right.svg" alt="hotel image"></a>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="articulo-resume04"><img class="articulo-resume04__image" src="../../images/image__11.png" alt="hotel image">
                          <div class="articulo-resume04__text"><span class="articulo-resume04__title">Desayuno gratis</span>
                            <p class="articulo-resume04__p">En todos los hoteles H10</p><a href="#" class="articulo-resume__ver04">VER MÁS<img class="arrow-right" src="../../icons/arrow-right.svg" alt="hotel image"></a>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="articulo-resume04"><img class="articulo-resume04__image" src="../../images/image__12.png" alt="hotel image">
                          <div class="articulo-resume04__text"><span class="articulo-resume04__title">Transfer gratis</span>
                            <p class="articulo-resume04__p">En los hoteles Ocean</p><a href="#" class="articulo-resume__ver04">VER MÁS<img class="arrow-right" src="../../icons/arrow-right.svg" alt="hotel image"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="c4-01__destinos">
                <div class="c4-01__destinos-content">
                  <div class="c4-01__main-cabecera"><span class="c4-01__title">EXPLORA NUESTROS HOTELES</span><span class="c4-01__title-arrow">^</span></div>
                  <hr class="hr__main-cabecera">
                  <div class="scroll-y ofr">
                    <div class="c4-01__articles-list">
                      <div>
                        <div class="articulo-resume04"><img class="articulo-resume04__image" src="../../images/image__13.png" alt="hotel image">
                          <div class="articulo-resume04__text"><span class="articulo-resume04__title">H10 Timanfaya Palace</span>
                            <p class="articulo-resume04__p">Desde 138€/noche</p><a href="#" class="articulo-resume__ver04">VER MÁS<img class="arrow-right" src="../../icons/arrow-right.svg" alt="hotel image"></a>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="articulo-resume04"><img class="articulo-resume04__image" src="../../images/image__14.png" alt="hotel image">
                          <div class="articulo-resume04__text"><span class="articulo-resume04__title">H10 Urquinanoa Plaza</span>
                            <p class="articulo-resume04__p">Desde 180€/noche</p><a href="#" class="articulo-resume__ver04">VER MÁS<img class="arrow-right" src="../../icons/arrow-right.svg" alt="hotel image"></a>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="articulo-resume04"><img class="articulo-resume04__image" src="../../images/image__15.png" alt="hotel image">
                          <div class="articulo-resume04__text"><span class="articulo-resume04__title">Ocean Coral & Turquesa</span>
                            <p class="articulo-resume04__p">Desde 138€/noche</p><a href="#" class="articulo-resume__ver04">VER MÁS<img class="arrow-right" src="../../icons/arrow-right.svg" alt="hotel image"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="c4-01__vermas c4-01__vermas-ofertas-mobile">
                  <hr class="c4-01__hr"><a href="#" class="c4-01__bottom-link">VER TODAS LAS OFERTAS</a>
                </div>
              </section>
              <div class="c4-01__vermas c4-01__vermas-ofertas_desktop">
                <hr class="c4-01__hr"><a href="#" class="c4-01__bottom-link">VER TODAS LAS OFERTAS</a>
              </div>
            </div>
          </div>
        </li>
        <li><a href="#">EVENTOS</a></li>
        <li><a href="#">#STAYGREEN</a></li>
        <li><a href="#">VUELO + HOTEL</a></li>
        <li><a href="#">CLUB H10</a></li>
        <li class="dropdown">
          <span class="dropdown__toggler">MÁS...</span>
          <div class="dropdown__content">
            <div class="c4-01__container c4-01__container-mas">
              <section class="c4-01__destinos">
                <div class="c4-01__destinos-content">
                  <div class="c4-01__lists-container-mas">
                    <div class="c4-01__list-mas">
                      <ul class="c4-01__mobile-ul acordeon-onclick__submenu">
                        <li><a href="">FAMILIAS</a></li>
                        <li><a href="">SOLO ADULTOS</a></li>
                        <li><a href="">PRIVILEGE</a></li>
                        <li><a href="">TODO INCLUIDO</a></li>
                        <li><a href="">DESPACIO SPA CENTRES</a></li>
                        <li><a href="">DEPORTES</a></li>
                        <li><a href="">BODAS Y CELEBRACIONES</a></li>
                        <li><a href="">PACKS EXPERIENCIAS</a></li>
                      </ul>
                    </div>
                    <hr class="c4-01_mas-hr">
                    <div class="c4-01__list-mas">
                      <ul class="c4-01__mobile-ul acordeon-onclick__submenu">
                        <li><a href="">HOTELES DE CIUDAD</a></li>
                        <li><a href="">HOTELES DE PLAYA</a></li>
                        <li><a href="">ESPACIOS SINGULARES</a></li>
                        <li><a href="">BONO REGALO</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </li>
        <li><a href="#" class="btn-reservar">Buscar</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="topbar-main-mobile-holder">
  <div class="topbar-main-mobile">
    <ul>
      <li>
        <a href="#h10-hotels" class="btn dropdown h10-hotels">HOTELES</a>
      </li>
      <li><a href="#h10-ofertas" class="btn dropdown h10-ofertas">OFERTAS</a></li>
      <li><a href="#" class="btn">EVENTOS</a></li>
      <li><a href="#" class="btn">#STAYGREEN</a></li>
      <li><a href="#" class="btn">VUELO + HOTEL</a></li>
      <li><a href="#" class="btn">CLUB H10</a></li>
      <li>
        <a href="#" class="btn dropdown mas">MÁS...</a>
      </li>
    </ul>
    <div class="topbar-main-btns-bottom">
      <a href="#" class="btn idioma">IDIOMA: <i>ES</i></a><span></span><a href="#" class="btn reservas">MIS RESERVAS</a>
    </div>
  </div>

  <div class="topbar-main-accordion h10-hotels">
    <div>
      <a href="#" class="btn-close"><img src="../../icons/menu-close.svg" /><img src="../../icons/arrow-left-.svg" /></a>
      <a href="#" class="topbar-main-accordion-title dropdown first-title open active">DESTINOS DE HOTELES</a>
      <div class="topbar-main-accordion-content open">
        <div class="topbar-main-accordion-sub">
          <a href="#" class="topbar-main-accordion-sub-sub-title dropdown">ESPAÑA</a>
          <div class="topbar-main-accordion-sub-sub-content">
            <div>
              <a href="#" class="btn">Barcelona <b>(15)</b></a>
              <a href="#" class="btn">Benidorm <b>(1)</b></a>
              <a href="#" class="btn">Córdoba <b>(1)</b></a>
              <a href="#" class="btn">Costa del Sol <b>(1)</b></a>
              <a href="#" class="btn">Fuerteventura <b>(5)</b></a>
              <a href="#" class="btn">Gran Canaria <b>(1)</b></a>
              <a href="#" class="btn">La Palma <b>(1)</b></a>
              <a href="#" class="btn">Lanzarote <b>(5)</b></a>
              <a href="#" class="btn">Madrid <b>(3)</b></a>
              <a href="#" class="btn">Málaga <b>(1)</b></a>
              <a href="#" class="btn">Mallorca <b>(3)</b></a>
              <a href="#" class="btn">Salou - Cambrils <b>(3)</b></a>
              <a href="#" class="btn">Sevilla <b>(3)</b></a>
              <a href="#" class="btn">Tarrragona <b>(1)</b></a>
              <a href="/src/html/pages/listado-hoteles.php" class="btn">Tenerife <b>(7)</b></a>
            </div>
          </div>
          <a href="#" class="topbar-main-accordion-sub-sub-title dropdown">EUROPA</a>
          <div class="topbar-main-accordion-sub-sub-content">
            <div>
              <a href="#" class="btn">Berlín <b>(2)</b></a>
              <a href="#" class="btn">Lisboa <b>(2)</b></a>
              <a href="#" class="btn">Londres <b>(1)</b></a>
              <a href="#" class="btn">Roma <b>(2)</b></a>
              <a href="#" class="btn">Venecia <b>(1)</b></a>
            </div>
          </div>
          <a href="#" class="topbar-main-accordion-sub-sub-title dropdown">CARIBE</a>
          <div class="topbar-main-accordion-sub-sub-content">
            <div>
              <a href="#" class="btn">Jamaica <b>(2)</b></a>
              <a href="#" class="btn">Punta Cana, R. Dominicana <b>(2)</b></a>
              <a href="#" class="btn">Riviera Maya, México <b>(3)</b></a>
            </div>
          </div>
          <a href="#" class="topbar-main-accordion-sub-title-alt">VER TODOS LOS DESTINOS</a>
        </div>
      </div>
      <a href="#" class="topbar-main-accordion-title dropdown open active">EXPERIENCIAS EN NUESTROS HOTELES</a>
      <div class="topbar-main-accordion-content open">
        <a href="#" class="btn">Familias</a>
        <a href="#" class="btn">Adults Only</a>
        <a href="#" class="btn">Privilege</a>
        <a href="#" class="btn">All inclusive</a>
        <a href="#" class="btn-alt">VER TODAS LAS EXPERIENCIAS</a>
      </div>
    </div>
  </div>

  <div class="topbar-main-accordion h10-ofertas">
    <div>
      <a href="#" class="btn-close"><img src="../../icons/menu-close.svg" /><img src="../../icons/arrow-left-.svg" /></a>
      <a href="#" class="topbar-main-accordion-title dropdown first-title open active">OFERTAS</a>
      <a href="#" class="topbar-main-accordion-title dropdown open active">OFERTAS H10 HOTELS</a>
      <div class="topbar-main-accordion-content open">
        <a href="#" class="btn">30% Descuento</a>
        <a href="#" class="btn">Desayuno gratis</a>
        <a href="#" class="btn">Transfer gratis</a>
      </div>
      <a href="#" class="topbar-main-accordion-title dropdown open active">EXPLORA NUESTROS HOTELES</a>
      <div class="topbar-main-accordion-content open">
        <a href="#" class="btn">H10 Timanfaya Palace<br><b>Desde 350€/noche</b></a>
        <a href="#" class="btn">H10 Urquinaona Plaza<br><b>Desde 138€/noche</b></a>
        <a href="#" class="btn">Ocean Coral & Turquesa<br><b>Desde 350€/noche</b></a>
        <a href="#" class="btn-alt">VER TODAS LAS OFERTAS</a>
      </div>
    </div>
  </div>

  <div class="topbar-main-accordion mas">
    <div>
      <a href="#" class="btn-close"><img src="../../icons/menu-close.svg" /><img src="../../icons/arrow-left-.svg" /></a>
      <div class="_title-mas">MAS...</div>
      <div class="_container-mas">
        <div class="_list-mas">
          <ul class="_mobile-ul">
            <li><a href="#">Familias</a></li>
            <li><a href="#">Solo Adultos</a></li>
            <li><a href="#">Privilege</a></li>
            <li><a href="#">Todo Incluido</a></li>
            <li><a href="#">Despacio Spa Centres</a></li>
            <li><a href="#">Deportes</a></li>
            <li><a href="#">Bodas y Celebraciones</a></li>
            <li><a href="#">Packs Experiencias</a></li>
          </ul>
        </div>
        <div class="_list-mas">
          <ul class="_mobile-ul">
            <li><a href="#">Hoteles de Ciudad</a></li>
            <li><a href="#">Hoteles de Playa</a></li>
            <li><a href="#">Espacios Singulares</a></li>
            <li><a href="#">Bono Regalo</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="topbar-main-mobile-cerrar-sesion">
  <div class="holder">
    <div class="title">HOLA, NOMBRE <a href="#" class="close"></a></div>
    <div class="content">
      <div class="titulo">¿Quieres cerrar tu sesión?</div>
      <div class="texto">Recuerda que si cierras sesión puedes identificarte de nuevo en cualquier momento.</div>
      <button class="btn-cerrar-sesion">Cerrar sesión<img class="ico" src="../../icons/check-out.svg" alt="check out icon"></button>
    </div>
  </div>
</div>

<div class="topbar-main-mobile-idioma">
  <div class="holder">
    <div class="title">IDIOMA <a href="#" class="close"></a></div>
    <div class="content">
      <ul class="btns">
        <li><a href="#" class="btn">Català</a></li>
        <li><a href="#" class="btn">English</a></li>
        <li><a href="#" class="btn">Deutsch</a></li>
        <li><a href="#" class="btn">Français</a></li>
        <li><a href="#" class="btn">Italiano</a></li>
        <li><a href="#" class="btn">Portugués</a></li>
        <li><a href="#" class="btn">Ruso</a></li>
      </ul>
    </div>
  </div>
</div>

<div class="topbar-main-mobile-reservas">
  <div class="holder">
    <div class="title">MIS RESERVAS <a href="#" class="close"></a></div>
    <div class="content">
      <div class="_title">GESTIONA TU RESERVA</div>
      <div class="_content">
        <div>
          <div class="_form-container">
            <form class="_form">
<!--              <label class="_label" for="hotel">HOTEL</label>
              <input class="_input" placeholder="H10 Atlantic Sunset" id="hotel">-->
              <label class="_label" for="localizador">LOCALIZADOR</label>
              <div class="_localizador">
                <input class="_input _localizador" placeholder="H5201"><span>-</span>
                <input class="_input _codigo-localizador" placeholder="Completa tu código localizador">
              </div>
              <label class="_label" for="email">EMAIL</label>
              <input class="_input" placeholder="Escribe tu email" id="email">
            </form>
            <div class="_reserva">
              <button class="_btn-buscar">BUSCAR RESERVA</button>
            </div>
            <div class="_check-container-holder">
              <div class="_check-container">
                <button class="_btn-check">CHECK-IN ONLINE<img class="_ico" src="../../icons/check-in.svg" alt="check in icon"></button>
                <p class="_text">Desde las 15h, dos días antes de tu llegada al hotel.</p>
              </div>
              <div class="_check-container">
                <button class="_btn-check">CHECK-OUT ONLINE<img class="_ico" src="../../icons/check-out.svg" alt="check out icon"></button>
                <p class="_text">Desde las 22h del día anterior a tu salida del hotel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="topbar-main-mobile-contactanos">
  <div class="holder">
    <div class="title">CONTÁCTANOS <a href="#" class="close"></a></div>
    <div class="content">
      <div class="_mobile-tlf"><span>ESPAÑA <br> +34 900 000 000</span>
        <button class="main-button">LLAMAR</button>
        <hr class="_mobile-hr">
      </div>
      <div class="_tlf-container">
        <div class="_tlf-text"><img class="_tlf__icon" src="../../icons/call_.svg" alt="call icon">
          <p class="text">Horario Atención al Cliente (GMT+1) <br> Lunes a viernes de 9 a 20h <br> Sábados de 10 a 15h</p>
        </div>
        <div>
          <ul class="_tlf-list">
            <div class="_tlf-list-left">
              <li class="_tlf__list-item"> FRANCIA <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
              <li class="_tlf__list-item"> ITALIA <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
              <li class="_tlf__list-item"> ALEMANIA <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
              <li class="_tlf__list-item"> REINO UNIDO <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
            </div>
            <div class="_tlf-list-right">
              <li class="_tlf__list-item"> ESTADOS UNIDOS <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
              <li class="_tlf__list-item"> RUSIA <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
              <li class="_tlf__list-item"> PORTUGAL <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
              <li class="_tlf__list-item"> BRAZIL <br><a href="tel"> <b> +33 (0) 176 54 24 86 </b></a></li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="topbar-main-mobile-login">
  <div class="holder">
    <div class="title">LOG IN <a href="#" class="close"></a></div>
    <div class="content">
      <div class="_login-container">
        <div class="_login-titles">
          <span class="form-login-club-h10 _activeitem">LOGIN CLUB H10</span>
          <span class="form-acceso-agencias">ACCESO AGENCIAS</span>
        </div>
        <div>
          <div class="_login-content form-login-club-h10 active">
            <form class="_login-form">
              <div class="_login-item">
                <label for="nro">Nº TARJETA/EMAIL</label>
                <input class="input-main i-usuario" placeholder="521..." id="nro">
              </div>
              <div class="_login-item">
                <label for="contrasena">CONTRASEÑA</label>
                <input class="input-main i-contrasena" placeholder="Introduce tu contraseña" id="contrasena">
                <div class="_login-checkbox">
                  <label class="checkbox-recuerdame">
                    Recuérdame
                    <input type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </form>
            <div class="_container2"><a href="#">¿Has olvidado tu contraseña?</a>
              <button class="main-button">ACCEDER</button>
            </div>
            <div class="_container3"><b>¿Aún no tienes acceso online?</b>
              <p>Regístrate o activa tu cuenta (solo necesitas el número de tarjeta del Club H10 para activar tu cuenta online).</p>
              <div class="_bottom-buttons">
                <button class="second-button">REGISTRATE</button>
                <button class="second-button">ACTIVA TU CUENTA</button>
              </div>
            </div>
          </div>
          <div class="_login-content form-acceso-agencias">
            <form class="_login-form">
              <div class="_login-item">
                <label for="codigo">CÓDIGO DE EMPRESA</label>
                <input class="input-main" placeholder="521..." id="codigo">
              </div>
              <div class="_login-item">
                <label for="usuario">USUARIO</label>
                <input class="input-main i-usuario" placeholder="Introduce tu usuario" id="usuario">
              </div>
              <div class="_login-item">
                <label for="contrasena2">CONTRASEÑA</label>
                <input class="input-main i-contrasena" placeholder="Introduce tu contraseña" id="contrasena2">
                <div class="_login-checkbox">
                  <label class="checkbox-recuerdame">
                    Recuérdame
                    <input type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </form>
            <div class="_container2"><a href="#">¿Has olvidado tu contraseña?</a>
              <button class="main-button">ACCEDER</button>
            </div>
            <div class="_container4">
              <p>¿Aún no tienes acceso online?</p> <a href="#">Regístrate</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<?php if($include_no == false){ ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../../../js/_c1.js"></script>
  </body>
</html>
<?php } ?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <title>Gestiona tus Reservas</title>
    <link rel="shortcut icon" href="../../../src/icons/favicon.ico" type="image/vnd.microsoft.icon" />
    <link rel="stylesheet" href="../../../css/style-gestiona-tus-reservas.css">
  </head>
  <body>
    <div class="interior_header">
      <?php $include_no = true; include("../sprint-2/c1-topbar-main.php"); ?>
    </div>

    <?php $include_no = true; include("../modules/c6-gestiona-tus-reservas.php"); ?>

    <div class="interior_header">
      <?php $include_no = true; include("../sprint-4/c7.php"); ?>
    </div>

    <div class="container">
      <div class="form-container">
        <div class="title">AQUI PODRÁS GESTIONAR TUS RESERVAS</div>
        <div class="text">Para consultar o cancelar tu reserva, introduce los siguientes datos:</div>
        <section class="c75__container">
          <div class="row">
            <div class="col">
              <div class="form-input">
                <label class="label">Hotel*</label>
                <div class="select">
                  <select id="standard-select" name="standard-select" required="">
                    <option value="" disabled="" selected="" hidden="">Seleccionar hotel</option>
                    <option value="Option 1">Opción 1</option>
                    <option value="Option 2">Opción 2</option>
                    <option value="Option 3">Opción 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="row inline telefono">
            <div class="col">
              <div class="form-input">
                <label class="label">Localizador*</label>
                <input class="input" value="" placeholder="">
              </div>
            </div>
            <div class="col">
              <div class="form-input">
                <label class="label">&nbsp;</label>
                <input class="input" value="" placeholder="">
              </div>
            </div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-input">
                <label class="label">CORREO ELECTRÓNICO*</label>
                <input class="input" value="" placeholder="">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <submit class="btn-enviar fix-btn-width">Buscar Reserva</submit>
            </div>
          </div>
        </section>
      </div>
      <div class="reservas-realizadas">
        <div class="title">Reservas realizadas</div>
        <div class="text">Desde esta sección podrás <b>descargar o imprimir tu confirmación de reserva, re-enviarla</b> o cancelarla</div>
        <div class="row-2cols">
          <div class="col">
            <div class="holder">
              <img src="../../../src/icons/filtro-servicios.svg" alt="" />
              <div class="text">Si deseas realizar un cambio de fechas o de habitación, puedes ponerte en contacto con nuestro Departamento de reservas: <a href="mailto: reservas@h10hotels.com">reservas@h10hotels.com</a></div>
            </div>
          </div>
          <div class="col">
            <div class="holder">
              <img src="../../../src/icons/bedroom_parent.svg" alt="" />
              <div class="text">Recuerda que no es posible la cancelación de <b>habitaciones no reembolsables</b> y solo podrás cancelar tu reserva hasta las 12:00 horas del día anterior a tu llegada al hotel</div>
            </div>
          </div>
        </div>
        <div class="btns">
          <a href="#" class="btn-link"><span>Descargar confirmación</span><img alt="a" src="../../icons/file_download.svg" class="icon"></a>
          <span class="line"></span>
          <a href="#" class="btn-link"><span>Enviar confirmación por e-mail</span><img alt="a" src="../../icons/mail.svg" class="icon"></a>
          <span class="line"></span>
          <a href="#" class="btn-link"><span>Imprimir confirmación</span><img alt="a" src="../../icons/print.svg" class="icon"></a>
          <span class="line"></span>
          <a href="#" class="btn-link btn-cancelar"><span>CANCELAR RESERVA</span><img alt="a" src="../../icons/menu-close.svg" class="icon"></a>
        </div>
      </div>
    </div>

    <section class="container-fix">
      <div class="datos-holder">
        <div class="holder">
          <div class="col-left_">
            <div class="title">DATOS DEL HOTEL</div>
            <div class="hotel-top">
              <div class="image">
                <img alt="a" src="../../images/image-110.png" class="img">
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
                </div>
                <div class="contacto inline">
                  <div class="direccion">Av. Adeje 300, s/n, E-38678. Playa Paraíso, Tenerife, España</div>
                  <div class="telefono"><a href="#">(+34) 900 444 466</a></div>
                  <div class="email"><a href="#">atlanticsunset@h10hotels.com</a></div>
                </div>
                <a href="#" class="btn-link">IR A LA FICHA DEL HOTEL<img alt="a" class="arrow-right" src="../../icons/arrow-right.svg"></a>
              </div>
            </div>
          </div>
          <div class="col-right_">
            <div class="title">DATOS DEL CLIENTE</div>
            <div class="rows">
              <div class="row"><div class="col-left"><b>Localizador<u>: </u></b><span>H10MME-34554345</span></div></div>
              <div class="row"><div class="col-left"><b>Entrada<u>: </u></b><span>22/03/2022</span></div></div>
              <div class="row"><div class="col-left"><b>Salida<u>: </u></b><span>22/03/2022</span></div></div>
              <div class="row"><div class="col-left"><b>Noches<u>: </u></b><span>7</span></div></div>
              <div class="row"><div class="col-left"><b>Ocupación<u>: </u></b><span>2 habitaciones, 7 adultos, 2 niños</span></div></div>
              <div class="row"><div class="col-left"><b>Hora de llegada<u>: </u></b><span>15:00</span></div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="datos-holder">
        <div class="title">DATOS DE RESERVA</div>
        <div class="holder">
          <div class="col-left_">
            <div class="rows">
              <div class="row"><div class="col-left"><b>Cliente<u>: </u></b><span>Jose Antonio Martínez López </span></div></div>
              <div class="row"><div class="col-left"><b>Teléfono<u>: </u></b><span>(+34) 91 234 45 67</span></div></div>
              <div class="row"><div class="col-left"><b>Email<u>: </u></b><span>jamartinez@gmail.com </span></div></div>
              <div class="row"><div class="col-left"><b>Tarjeta Club H10<u>: </u></b><span>900000005170</span></div></div>
              <div class="row"><div class="col-left"><b>Origen<u>: </u></b><span>H10 HOTELS</span></div></div>
            </div>
          </div>
          <div class="col-right_ no-border">
            <div class="rows">
              <div class="row"><div class="col-left"><b>Información y reservas<u>: </u></b><span>(+34) 900 444 466</br>atlanticsunset@h10hotels.com</span></div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="extra-top mt">
        <div class="extra-bottom">
          <div class="data">
            <div class="importe">
              <div class="title">IMPORTE TOTAL</div>
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
              <div class="row">
                <div class="col-left">
                  <div class="titulo">IMPORTE TOTAL RESERVA</div>
                </div>
                <div class="col-right">
                  <div class="total">386 €</div>
                </div>
                <div class="texto-pie">*Impuestos incluidos excepto impuestos pernoctación</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="modal-mantente">
      <div class="container-holder">
        <a href="#" class="btn-close"></a>

        <div class="holder">
          <div class="title">¿Estás seguro que quieres cancelar?</div>
          <div class="text">Recuerda que si cancelas tu reserva no podrás recuperarla y tendrás que realizar una nueva reserva.</div>
          <div><a href="#" class="btn-enviar">Sí, quiero cancelar la reserva</a></div>
          <div><a href="#" class="btn-cancel">No, mantener la reserva</a></div>
        </div>
      </div>
    </div>


    <div class="modal-confirmacion">
      <div class="container-holder">
        <a href="#" class="btn-close"></a>

        <div class="holder">
          <div class="title">Tu reserva ha sido cancelada correctamente</div>
        </div>
      </div>
    </div>



    <?php $include_no = true; include("../sprint-4/c55.php"); ?>
    <?php $include_no = true; include("../sprint-1/footer.php"); ?>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="../../../js/SmoothScroll.min.js"></script>
    <script type="text/javascript" src="../../../js/aos.js"></script>
    <script type="text/javascript" src="../../../js/slick.min.js"></script>
    <script type="text/javascript" src="../../../js/moment.min.js"></script>
    <script type="text/javascript" src="../../../js/daterangepicker.min.js"></script>
    <script type="text/javascript" src="../../../js/acordeontoggler.js"></script>
    <script type="text/javascript" src="../../../js/_c1.js"></script>
    <script type="text/javascript" src="../../../js/_c7.js"></script>
    <script type="text/javascript" src="../../../js/_c32.js"></script>
    <script type="text/javascript" src="../../../js/_c5-carousel.js"></script>
    <script type="text/javascript" src="../../../js/_c61.js"></script>
    <script type="text/javascript" src="../../../js/gestiona-tus-reservas.js"></script>
    <script type="text/javascript" src="../../../js/general.js"></script>
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <title>Bono Regalo</title>
    <link rel="shortcut icon" href="../../../src/icons/favicon.ico" type="image/vnd.microsoft.icon" />
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
    <div class="interior_header no-margin">
      <?php $include_no = true; include("../sprint-2/c1-topbar-main.php"); ?>
    </div>

    <?php $include_no = true; include("../modules/c6-bono-regalo.php"); ?>

    <div class="interior_header">
      <?php $include_no = true; include("../sprint-4/c7.php"); ?>
    </div>

    <div class="container-fix">
      <section class="cBonoRegalo__container">
        <div class="col">
          <div class="col-left">
            <div class="image-holder">
              <img src="../../images/image-161.png" class="image" alt="">
            </div>
          </div>
          <div class="col-right">
            <h2 class="title">Un regalo para vivirlo</h2>
            <div class="texto">
              <p class="texto-1">
                <span class="text-desktop">
                  Con nuestro bono regalo podrás obsequiar a alguien con una increíble estancia en alguno de nuestros más de 20 destinos.
                  </br></br>
                  Sea cual sea la ocasión, nuestro bono regalo es la sorpresa perfecta.
                  </br></br>
                  Actualmente disponemos de más de 65 hoteles en España, ciudades de Europa y El Caribe<span class="dots">...</span>
                </span>
              </p>
              <a href="#" class="btn-leer mas">Leer más</a>
              <p class="texto-2">
                </br>
                Ofrecemos ubicaciones privilegiadas, hoteles exclusivos en las mejores ciudades o en primera línea de playa, una gastronomía exquisita y un ambiente privilegiado.
              </p>
              <a href="#" class="btn-leer menos">Leer menos</a>
            </div>
            <a href="#" class="btn-link">Regalar bono</a>
          </div>
        </div>
        </section>
        
        <section class="cBonoRegalo__container">
        <div class="bono-regalo">
          <h2 class="title">Bono regalo</h2>
          <p class="text">¿Cómo funciona?</p>

          <div class="cols">
            <div class="col_">
              <img src="../../icons/ordenador.svg" class="icon" alt="">
              <p class="text"><b>Visita cualquiera de nuestras webs</b>www.h10hotels.com o www.oceanhotels.net al realizar tu reserva selecciona la opción <b>"Quiero regalar esta estancia"</b>.</p>
            </div>
            <div class="col_">
              <img src="../../icons/file_description.svg" class="icon" alt="">
              <p class="text"><b>Completa el formulario</b>Elige uno de nuestros hotels, rellena los campos del formulario y paga por adelantado la reserva.</p>
            </div>
            <div class="col_">
              <img src="../../icons/redeem.svg" class="icon" alt="">
              <p class="text"><b>Recibe tu bono regalo</b>Recibirás el bono regalo en tu email y podrás imprimirlo, descargarlo en pdf o compartirlo.</p>
            </div>
          </div>
        </div>

<!--        <div class="comprar-bono-regalo">
          <h2 class="title">Una experiencia para cada momento</h2>
          <p class="text">Con el bono regalo podrás obsequiar a alguien con una increíble estancia en alguno de nuestros hoteles</p>

          <div class="cols">
            <div class="col_">
              <div class="logo"><img src="../../logos/logo-ocean-azul-y-gris.png"  alt="" /></div>
              <p class="texto">Bono regalo ocean Hotels</p>
            </div>
            <div class="col_">
              <a href="#" class="btn-link">Comprar bono</a>
            </div>
          </div>

        </div>-->

      </section>
    </div>

    <section class="c57__container cBonoRegalo__container">
      <div class="container-fix col-10-fix">
        <h2 class="titulo-top">Preguntas frecuentes</h2>
        <div class="faqs">
          <div class="faq">
            <h3 class="titulo">¿Cuál es la validez del bono regalo?</h3>
            <div class="texto">El bono regalo es válido hasta la fecha de entrada especificada en la reserva.</div>
          </div>
          <div class="faq">
            <h3 class="titulo">¿Cómo puedo canjear mi bono?</h3>
            <div class="texto">En la recepción del hotel deberás presentar tu bono regalo junto con tu DNI / Pasaporte.</div>
          </div>
          <div class="faq">
            <h3 class="titulo">¿Cuántos bonos regalo puedo hacer? ¿Puedo hacer modificaciones?</h3>
            <div class="texto">Solo es posible generar 1 bono regalo por reserva. Para modificaciones de este bono regalo deberás contactar con el email del hotel que aparece en el bono.</div>
          </div>
          <div class="faq">
            <h3 class="titulo">¿Qué hago si ya tengo una reserva y quiero hacer uso del bono regalo?</h3>
            <div class="texto">
              Si en el proceso de reserva marcaste la opción “QUIERO REGALAR ESTA ESTANCIA” puedes ponerte en contacto con nuestro Departamento de Reservas: reservas@h10hotels.com o +34 900 444 466, indicando:
              </br>
              Localizador de la reserva
              </br>
              Nombre del destinatario del regalo
              </br>
              Nombre de la persona/grupo que realiza el regalo
              </br></br>
              De esta forma poddremos enviarte personalizado el bono regalo por email.
              </br></br>
              Si en el proceso de reserva no marcaste la opción de “QUIERO REGALAR ESTA ESTANCIA” no podrás generar el bono.
            </div>
          </div>
          <div class="faq">
            <h3 class="titulo">¿Es la compra segura?</h3>
            <div class="texto">Los detalles de su tarjeta se envían a través de una conexión cifrada al banco o PayPal con el mismo nivel de seguridad que se usa un banco online.</div>
          </div>
          <div class="faq">
            <h3 class="titulo">¿Puedo cancelar la reserva hecha con un bono regalo?</h3>
            <div class="texto">Si tu reserva está realizada con una tarifa de cancelación gratuita, podrás cancelarla sin problemas.  Si por el contrario es no reembolsable o con restricciones estará sujeta a las condiciones de esa reserva.</div>
          </div>
        </div>
      </div>
    </section>

    <?php $include_no = true; include("../sprint-4/c55.php"); ?>
    <?php $include_no = true; include("../sprint-1/footer.php"); ?>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="../../../js/SmoothScroll.min.js"></script>
    <script type="text/javascript" src="../../../js/aos.js"></script>
    <script type="text/javascript" src="../../../js/slick.min.js"></script>
    <script type="text/javascript" src="../../../js/moment.min.js"></script>
    <script type="text/javascript" src="../../../js/daterangepicker.min.js"></script>
    <script type="text/javascript" src="../../../js/acordeontoggler.js"></script>
    <script type="text/javascript" src="../../../js/jquery.countdown.min.js"></script>
    <script type="text/javascript" src="../../../js/_c1.js"></script>
    <script type="text/javascript" src="../../../js/_c7.js"></script>
    <script type="text/javascript" src="../../../js/_c57.js"></script>
    <script type="text/javascript" src="../../../js/_cBonoRegalo.js"></script>
    <script type="text/javascript" src="../../../js/general.js"></script>
    <script type="text/javascript" src="../../../js/_general-carousel.js"></script>

  </body>
</html>

<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c17 - 02</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

    <section class="c17__container narrow">
      <div class="container-fix section-modal">
        <div class="restaurantes-destacados">
          <div class="slick-slider-holder">
            <div class="slick-slider">
              <div class="elems_3">
                <div class="restaurante-destacado">
                  <div class="image js-open-modal" id="modal-1">
                    <div lang="" class="titulo-img">Espacios</div>
                    <img src="../../images/perfect-day-1.jpg" class="img" alt=""/>
                    <div class="zoom-holder"><img src="../../images/zoom_out.png" class="zoom" alt=""></div>
                  </div>
                  <div class="texto_leer_mas no-desktop no-padding-left height-minima no-margin-bottom">
                    <p class="texto-1">
                    El H10 Atlantic Sunset cuenta con espacios tanto al aire libre como interiores, con una cuidada <i class="dots">...</i><span class="text-no-mobile">decoración.<br><br> 
                    El Restaurante La Boîte y sus terrazas con vistas al mar son espacios ideales para la celebración de banquetes de hasta 150 invitados. </span>
                    </p>
                    <a href="#" class="btn-leer mas ">Leer más</a>
                    <a href="#" class="btn-leer menos">Leer menos</a>
                  </div>
                  <a href="#" class="btn-reservar">Más información</a>
                </div>
              </div>

              <div class="elems_3 last_one">
                <div class="restaurante-destacado">
                  <div class="image js-open-modal" id="modal-2">
                    <div lang="" class="titulo-img">Servicios incluidos</div>
                    <img src="../../images/perfect-day-2.jpg" class="img" alt=""/>
                    <div class="zoom-holder"><img src="../../images/zoom_out.png" class="zoom" alt=""></div>
                  </div>
                  <div class="texto_leer_mas no-padding-left height-minima no-margin-bottom">
                    <ul class="texto-1">
                      <li>Noche de bodas para los novios con atenciones especiales y desayuno en la habitación (para bodas de mínimo de 50 personas).</li>
                      <li>Circuito Despacio Spa Centre para los novios.</li>
                      <li class="text-no-mobile">Degustación del menú para los novios.</li>
                    </ul>
                    <a href="#" class="btn-leer mas">Leer más</a>
                    <ul class="texto-2">
                      <li>Minutas personalizadas.</li>
                      <li>Decoración floral básica en el banquete.</li>
                      <li>Cena del primer aniversario.</li>
                      <li>Precios especiales para el alojamiento de los invitados.</li>
                      <li>Asesoramiento y servicio personalizado.</li>
                    </ul>

                    <a href="#" class="btn-leer menos">Leer menos</a>
                  </div>
                  <a href="#" class="btn-reservar">Más información</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="general_modal general_modal--secondary general_modal--md js-general-modal" data-id="modal-1">
          <div class="general_modal__content centrada">
              <a href="#" class="btn-close"></a>
              <img src="../../images/perfect-day-1.jpg" class="img" alt=""/>
          </div>
        </div> <!--/.modal1-->

        <div class="general_modal general_modal--secondary general_modal--md js-general-modal" data-id="modal-2">
          <div class="general_modal__content centrada">
              <a href="#" class="btn-close"></a>
              <img src="../../images/perfect-day-2.jpg" class="img" alt=""/>
          </div>
        </div> <!--/.modal2-->



      </div>
    </section>

<?php if($include_no == false){ ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../../../js/slick.min.js"></script>
    <script src="../../../js/_c17-02.js"></script>
  </body>
</html>
<?php } ?>

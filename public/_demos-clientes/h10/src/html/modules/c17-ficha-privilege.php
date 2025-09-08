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
                    <div lang="" class="titulo-img">Privilege Services</div>
                    <img src="../../images/privilege_1.jpg" class="img" alt=""/>
                    <div class="zoom-holder"><img src="../../images/zoom_out.png" class="zoom" alt=""></div>
                  </div>
                  <div class="texto_leer_mas no-padding-left height-minima no-margin-bottom">

                    <ul class="texto-1 no-margin-bottom">
                        <li>Sala Privilege con servicio gratuito de bebidas y snacks, TV e Internet</li>
                        <li>Terraza Sunset Infinity Pool & Bar situada en la última planta del edificio Privilege con espectaculares vistas al mar.</li>
                    </ul>
                    <a href="#" class="btn-leer mas">Leer más</a>
                    
                    <ul class="texto-2 no-margin-bottom">
                        <li >Acceso gratuito al Despacio Spa Centre y descuento especial en tratamientos.</li>
                        <li >Check-in y check-out personalizado.</li>
                        <li >Servicio de botones.</li>
                        <li >Guest Service personalizado.</li>
                    </ul>
                    <a href="#" class="btn-leer menos">Leer menos</a>

                  </div>
                  <a href="#" class="btn-reservar">Reservar</a>
                </div>
              </div>
              <div class="elems_3">
                <div class="restaurante-destacado">
                  <div class="image js-open-modal" id="modal-2">
                    <div lang="" class="titulo-img">Food & Drinks</div>
                    <img src="../../images/privilege_2.jpg" class="img" alt=""/>
                    <div class="zoom-holder"><img src="../../images/zoom_out.png" class="zoom" alt=""></div>
                  </div>
                  <div class="texto height-minima no-margin-bottom">
                    <ul class="no-margin-bottom">
                      <li>Desayuno y cena a la carta en el exclusivo Restaurante The View, situado junto a la sala Privilege.</li>
                      <li>Cenas en los restaurantes temáticos del hotel (Sakura Teppanyaki, Stromboli y Route 66). Se requiere reserva previa.</li>
                    </ul>
                  </div>
                  <a href="#" class="btn-reservar">Reservar</a>
                </div>
              </div>
              <div class="elems_3 last_one">
                <div class="restaurante-destacado">
                  <div class="image js-open-modal" id="modal-3">
                    <div lang="" class="titulo-img">Privilege Rooms</div>
                    <img src="../../images/privilege_3.jpg" class="img" alt=""/>
                    <div class="zoom-holder"><img src="../../images/zoom_out.png" class="zoom" alt=""></div>
                  </div>
                  <div class="texto height-minima no-margin-bottom">
                    <p>Las habitaciones Privilege incluyen, además de los servicios comunes a las demás habitaciones.</p>
                    <ul class="no-margin-bottom">
                      <li>Obsequio de bienvenida.</li>
                      <li>Carta de almohadas y pillow-top</li>
                      <li>Toalla de piscina exclusiva.</li>
                      <li>Servicio de descubierta nocturna</li>
                    </ul>
                  </div>
                  <a href="#" class="btn-reservar">Reservar</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="general_modal general_modal--secondary general_modal--md js-general-modal" data-id="modal-1">
          <div class="general_modal__content centrada">
              <a href="#" class="btn-close"></a>
              <img src="../../images/privilege_1.jpg" class="img" alt=""/>
          </div>
        </div> <!--/.modal1-->

        <div class="general_modal general_modal--secondary general_modal--md js-general-modal" data-id="modal-2">
          <div class="general_modal__content centrada">
              <a href="#" class="btn-close"></a>
              <img src="../../images/privilege_2.jpg" class="img" alt=""/>
          </div>
        </div> <!--/.modal2-->

        <div class="general_modal general_modal--secondary general_modal--md js-general-modal" data-id="modal-3">
          <div class="general_modal__content centrada">
              <a href="#" class="btn-close"></a>
              <img src="../../images/privilege_3.jpg" class="img" alt=""/>
          </div>
        </div> <!--/.modal3-->



      </div>
    </section>

<?php if($include_no == false){ ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../../../js/slick.min.js"></script>
    <script src="../../../js/_c17-02.js"></script>
  </body>
</html>
<?php } ?>

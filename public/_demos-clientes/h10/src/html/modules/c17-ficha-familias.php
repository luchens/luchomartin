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
                    <div lang="" class="titulo-img">Espacio Daisy Club</div>
                    <img src="../../images/familias-1.jpg" class="img" alt=""/>
                    <div class="zoom-holder"><img src="../../images/zoom_out.png" class="zoom" alt=""></div>
                  </div>
                  <div class="texto_leer_mas no-desktop no-padding-left height-minima no-margin-bottom">
                    <p class="texto-1">
                      Amplia ludoteca con variedad de juegos para niños de diferentes edades y actividades como <i class="dots">...</i><span class="text-no-mobile">pintura o manualidades. Cuenta con un espacio para meriendas, escenario y Minidisco con la Daisy.</span> 
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
                    <img src="../../images/familias-2.jpg" class="img" alt=""/>
                    <div class="zoom-holder"><img src="../../images/zoom_out.png" class="zoom" alt=""></div>
                  </div>
                  <div class="texto_leer_mas no-desktop no-padding-left height-minima no-margin-bottom">
                    <p class="texto-1">
                      Espacio con instalaciones y servicios especializados para pasarlo en grande <i class="dots">...</i><span class="text-no-mobile"> en familia. <br><br>Cuenta con piscina familiar climatizada con agua dulce, zona de juegos acuáticos y parque infantil</span> 
                    </p>
                    <a href="#" class="btn-leer mas">Leer más</a>
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
              <img src="../../images/familias-1.jpg" class="img" alt=""/>
          </div>
        </div> <!--/.modal1-->

        <div class="general_modal general_modal--secondary general_modal--md js-general-modal" data-id="modal-2">
          <div class="general_modal__content centrada">
              <a href="#" class="btn-close"></a>
              <img src="../../images/familias-2.jpg" class="img" alt=""/>
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

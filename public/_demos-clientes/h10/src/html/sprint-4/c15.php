<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c15</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

<div class="container-fix">
  <section class="c15__container fix-top fix-bottom">
    <div class="hoteles-destacados">
      <div class="slick-slider-holder">
        <div class="slick-slider">
          <div>
            <div class="hotel-destacado">
              <div class="img-holder"><img src="../../images/03_HPLPatio.jpg" class="img" alt=""/></div>
              <div class="data">
                <div class="data-content">
                  <h3 class="titulo">Sé único</h3>
                  <p class="texto">Alójate en exclusivos hoteles donde te haremos sentir único y especial.</p>
                </div>  
                <a href="#" class="btn-ver">Espacios singulares</a>
              </div>
            </div>
          </div>
          <div>
            <div class="hotel-destacado">
              <div class="img-holder"><img src="../../images/11_HASInfinityPool3.jpg" class="img" alt=""/></div>
              <div class="data">
                <div class="data-content">
                  <h3 class="titulo">Disfruta del mar</h3>
                  <p class="texto">Hoteles en primera línea de mar con todo lo necesario para unas vacaciones inolvidables.</p>
                </div>  
                <a href="#" class="btn-ver">Hoteles vacacionales</a>
              </div>
            </div>
          </div>
          <div>
            <div class="hotel-destacado">
              <div class="img-holder"><img src="../../images/01_HMITerrace.jpg" class="img" alt=""/></div>
              <div class="data">
                <div class="data-content">
                  <h3 class="titulo">Explora la ciudad</h3>
                  <p class="texto">Hoteles con encanto y gastronomía de autor en el corazón de las principales ciudades españolas y europeas.</p>
                </div>  
                <a href="/src/html/pages/hoteles-en-ciudad.php" class="btn-ver">Hoteles de ciudad</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<?php if($include_no == false){ ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../../../js/slick.min.js"></script>
    <script src="../../../js/_c15.js"></script>
  </body>
</html>
<?php } ?>

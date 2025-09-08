<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c8-01</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

    <section class="c8-1__container container-fix fix-bottom container-left">
      <div class="card-info__container inset-text">
        <div class="card-info__image-container">
          <picture> 
            <source media="(max-width: 740px)" srcset="../../images/stay-green-1.jpg" class="card-info__image"/>
            <img src="../../images/stay-green-1.jpg" alt="" class="card-info__image"/>
          </picture>
        </div>
        <div class="card-info__text-container wide">
          <h2 class="card-info__title"><span class="card-info__title-span">Huella de</span><span class="card-info__title-span-bottom card-info__title-span">Carbono Cero</span></h2>
          <p class="card-info__p">
            Con el objetivo de reducir un 75% las emisiones de gases de efecto invernadero<sup>1</sup>
            <span class="sup"><sup>1</sup> Sobre indicadores de 2010</span>
            <a href="#" class="btn-ver-mas" data-order="1">CONOCER MÁS</a>
            <a href="#" class="btn-ver-menos" data-order="1">CONOCER MENOS</a>

          </p>
        </div>
      </div>
    </section>

<?php if($include_no == false){ ?>
  <script src="../../../js/_c8.js"></script>
  </body>
</html>
<?php } ?>

<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>c36</title>
  <link rel="stylesheet" href="../../../css/style.css">
</head>

<body>
  <?php } ?>

  <section class="c36__container section-modal">
    <div class="container-fix">
      <div class="c36__header">
        <h3 class="c36__title">Premios y reconocimientos</h3>

        <button class="second-button c36__button-desk open-modal js-open-modal" id="awards">Ver todos los premios y reconocmientos</button>
      </div>

      <ul class="c36__contenido">
        <li class="c36__contenido-item">
          <div class="c36__image">
            <img src="../../../src/images/certificado_1_.png" alt="">
          </div>
          <p class="c36__text">
            <span class="bold">Booking.com</span>
            <span>Traveller Review Award</span>
            <span>2021, 2020</span>
          </p>
        </li>
        <li class="c36__contenido-item">
          <div class="c36__image">
            <img src="../../../src/images/certificado_2_.png" alt="">
          </div>
          <p class="c36__text">
            <span class="bold">Booking.com</span>
            <span>Traveller Review Award</span>
            <span>2021, 2020</span>
          </p>
        </li>
        <li class="c36__contenido-item">
          <div class="c36__image">
            <img src="../../../src/images/certificado_3_.png" alt="">
          </div>
          <p class="c36__text">
            <span class="bold">Condé nast traveler</span>
            <span>TOP 10 DE LAS CADENAS HOTELERAS “MÁS EXCELENTES” DEL MUNDO</span>
            <span>2022</span>
          </p>
        </li>
        <li class="c36__contenido-item">
          <div class="c36__image">
            <img src="../../../src/images/certificado_4_.png" alt="">
          </div>
          <p class="c36__text">
            <span class="bold">Hotels.com</span>
            <span>Loved by Guests</span>
            <span>2021</span>
          </p>
        </li>
        <li class="c36__contenido-item">
          <div class="c36__image">
            <img src="../../../src/images/certificado_5_.png" alt="">
          </div>
          <p class="c36__text">
            <span class="bold">Traveller Review Award</span>
            <span>Traveller Review Award</span>
            <span>2021, 2020</span>
          </p>
        </li>
        <li class="c36__contenido-item">
          <div class="c36__image">
            <img src="../../../src/images/certificado_6_.png" alt="">
          </div>
          <p class="c36__text">
            <span class="bold">Tripadvisor</span>
            <span>Travellers' Choice</span>
            <span>2021, 2020</span>
          </p>
        </li>
      </ul>

      <!--js-c36-show-->
      <button class="second-button c36__button-mob open-modal js-open-modal" id="awards">Ver todos <span>los premios y reconocmientos</span></button>
    </div>

    <div class="c36__modal general_modal general_modal--secondary general_modal--lg js-general-modal" data-id="awards">
      <div class="general_modal__content">
          <a href="#" class="btn-close"></a>

        <div class="modal-body">
          <h2 class="modal-body__title">Premios y reconocimientos</h2>

          <ul class="modal-body__awards">
            <li>
              <img src="../../../src/images/tripadvisor.png" alt="">
              <div>
                <p class="modal-body__awards-text"><b>Tripadvisor </b></p>
                <p>Travellers' Choice 2022, 2021, 2020</p>
                <p>Certificado de Excelencia 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011</p>
              </div>
            </li>
            <li>
              <img src="../../../src/images/booking.png" alt="">
              <div>
                <p class="modal-body__awards-text"><b>Booking.com</b></p>
                <p>Traveller Review Award 2022, 2021, 2020</p>
                <p>Guest Review Award 2017</p>
                <p>Booking Award 2018</p>
              </div>
            </li>
            <li>
              <img src="../../../src/images/granhotel.png" alt="">
              <div>
                <p class="modal-body__awards-text"><b>Gran hotel turismo</b></p>
                <p>Mejor Cadena Hotelera 2014 en la X Edición de los Premios a la Iniciativa Hotelera 2014</p>
              </div>
            </li>
            <li>
              <img src="../../../src/images/holidaycheck.png" alt="">
              <div>
                <p class="modal-body__awards-text"><b>holidaycheck</b></p>
                <p>Recommended on 2018</p>
                <p>Quality Selection 2013, 2012</p>
              </div>
            </li>
            <li>
              <img src="../../../src/images/easytobook.png" alt="">
              <div>
                <p class="modal-body__awards-text"><b>easy to book</b></p>
                <p>Your hotel ended 2nd in the 3 Star Class in the Overall category. 2011</p>
              </div>
            </li>
            <li>
              <img src="../../../src/images/h10.png" alt="">
              <div>
                <p class="modal-body__awards-text"><b>h10 hotels</b></p>
                <p>Mejor hotel urbano de la cadena por índices de Satisfacción de Clientes 2007, 2002</p>
                <p>1º Premio a la Excelencia 2011</p>
                <p>2º Premio a la Excelencia 2007</p>
                <p>3º Premio a la Excelencia 2005</p>
              </div>
            </li>
          </ul>


        </div>
      </div>
    </div> <!--/.modal-->
  </section>

  <?php if($include_no == false){ ?>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="../../../js/_c36.js"></script>
</body>

</html>
<?php } ?>

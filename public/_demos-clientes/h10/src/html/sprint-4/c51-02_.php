<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c51-02</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

    <div class="container-fix">
      <section class="c51-02__container">
        <a href="#" class="btn-ver">VER TODAS LAS IMAGENES<img class="arrow-right" src="../../icons/arrow-right.svg" alt="hotel image"></a>
        <div class="grid-wrapper">
          <div class="wide">
            <div class="video-holder">
              <div class="ico-play"></div>
              <video id="video" poster="../../images/image-111.png" class="video">
                <source src="../../videos/video-lorem-ipsum.mp4" type="video/mp4">
                <source src="../../videos/video-lorem-ipsum.ogg" type="video/ogv">
                <source src="../../videos/video-lorem-ipsum.webm" type="video/webm">
                  Your browser doesn't support HTML5 video.
              </video>
            </div>
          </div>
          <div class="image2"><img src="../../images/grid-image2.png" alt=""></div>
          <div><img src="../../images/grid-image3.png" alt=""></div>
          <div class="display-none__mobile"><img class="display-none__mobile" src="../../images/grid-image6.png" alt=""></div>
          <div class="display-none__mobile"><img class="display-none__mobile display-none__tablet" src="../../images/grid-image7.png" alt=""></div>
          <div class="display-none__mobile"><img class="display-none__mobile display-none__tablet" src="../../images/grid-image4.png" alt=""></div>
        </div>
      </section>
    </div>

    <div class="c51-02__container modal-galeria">
      <a href="#" class="btn-close"></a>
      <div class="slick-slider-holder">
        <div class="slick-slider">
          <div>
            <div class="item">
              <div class="video-holder">
                <div class="ico-play"></div>
                <video id="video" poster="../../images/image-111.png" class="video" controls>
                  <source src="../../videos/video-lorem-ipsum.mp4" type="video/mp4">
                  <source src="../../videos/video-lorem-ipsum.ogg" type="video/ogv">
                  <source src="../../videos/video-lorem-ipsum.webm" type="video/webm">
                    Your browser doesn't support HTML5 video.
                </video>
              </div>
            </div>
          </div>
          <div>
            <div class="item">
              <img src="../../images/image-116.png" data-lazy="" data-srcset="" data-sizes="100vw" class="image" alt="" loading="lazy"/>
            </div>
          </div>
          <div>
            <div class="item">
              <img src="../../images/image-116.png" data-lazy="" data-srcset="" data-sizes="100vw" class="image" alt="" loading="lazy"/>
            </div>
          </div>
          <div>
            <div class="item">
              <img src="../../images/image-116.png" data-lazy="" data-srcset="" data-sizes="100vw" class="image" alt="" loading="lazy"/>
            </div>
          </div>
          <div>
            <div class="item">
              <img src="../../images/image-116.png" data-lazy="" data-srcset="" data-sizes="100vw" class="image" alt="" loading="lazy"/>
            </div>
          </div>
        </div>
        <div class="slick-contador-holder">
          <div class="slick-contador"><div class="slick-actual"></div><div class="slick-total"></div></div> <div class="texto">Piscina exterior</div>
        </div>
      </div>
    </div>

<?php if($include_no == false){ ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../../../js/slick.min.js"></script>
    <script src="../../../js/_c51-02.js"></script>
  </body>
</html>
<?php } ?>

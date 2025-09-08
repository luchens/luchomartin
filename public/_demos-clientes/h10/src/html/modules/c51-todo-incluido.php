<?php if($include_no == false){ ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c51-03</title>
    <link rel="stylesheet" href="../../../css/style.css">
  </head>
  <body>
<?php } ?>

    <div class="container-fix">
      <section class="c51-02__container videos-holder">
        
        <div class="items-holder">
          
          <div class="item-group-images item-3">
            <div class="image e-click" id="slide-0"><img src="../../images/todo_1.jpg" alt="" /></div>
            <div class="image e-click" id="slide-1"><img src="../../images/todo_2.jpg" alt="" /></div>
            <div class="image e-click" id="slide-2"><img src="../../images/todo_3.jpg" alt="" /></div>
          </div>

        </div>

      </section>
    </div>

    <div class="c51-02__container modal-galeria video">
      <a href="#" class="btn-close"></a>
      <div class="slick-slider-holder video">
        <div class="slick-slider">
          <div>
            <div class="item" data-caption="Piscina exterior">
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
            <div class="item" data-caption="Piscina exterior 2">
              <img src="../../images/grid-image2.png" data-lazy="" data-srcset="" data-sizes="100vw" class="image" alt="" loading="lazy"/>
            </div>
          </div>
          <div>
            <div class="item" data-caption="Piscina exterior 3">
              <img src="../../images/image-125.jpg" data-lazy="" data-srcset="" data-sizes="100vw" class="image" alt="" loading="lazy"/>
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

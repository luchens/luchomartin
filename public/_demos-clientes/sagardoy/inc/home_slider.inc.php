<section class="section slider section_slider home_slider">
  <div class="etiqueta left">AURA PARK</div>
  <div class="etiqueta right">AURA PARK</div>
  <div class="slick-slider" data-sizes="100vw">
    <div>
      <div class="data">
        <div class="titulo" data-aos="fade-up" data-aos-delay="200"><?php echo $home_slider_titulo[$lang][0]; ?></div>
        <p class="texto" data-aos="fade-up" data-aos-delay="300"><?php echo $home_slider_texto[$lang][0]; ?></p>
      </div>
        <picture>
            <source srcset="images/img-slide-home-1.webp" type="image/webp">
            <source srcset="images/img-slide-home-1.jpg" type="image/jpeg">
            <img src="images/img-slide-home-1.jpg" class="img-fluid" loading="lazy" alt="" data-aos="zoom-out">
        </picture>
    </div>
    <div>
      <div class="data">
        <div class="titulo"><?php echo $home_slider_titulo[$lang][1]; ?></div>
        <p class="texto"><?php echo $home_slider_texto[$lang][1]; ?></p>
      </div>
        <picture>
            <source srcset="images/img-slide-home-2.webp" type="image/webp">
            <source srcset="images/img-slide-home-2.jpg" type="image/jpeg">
            <img src="images/img-slide-home-2.jpg" class="img-fluid" loading="lazy" alt="">
        </picture>
    </div>
    <div>
      <div class="data">
        <div class="titulo"><?php echo $home_slider_titulo[$lang][2]; ?></div>
        <p class="texto"><?php echo $home_slider_texto[$lang][2]; ?></p>
      </div>
        <picture>
            <source srcset="images/img-slide-home-3.webp" type="image/webp">
            <source srcset="images/img-slide-home-3.jpg" type="image/jpeg">
            <img src="images/img-slide-home-3.jpg" class="img-fluid" loading="lazy" alt="">
        </picture>
    </div>
    <div>
      <div class="data">
        <div class="titulo"><?php echo $home_slider_titulo[$lang][3]; ?></div>
        <p class="texto"><?php echo $home_slider_texto[$lang][3]; ?></p>
      </div>
        <picture>
            <source srcset="images/img-slide-home-4.webp" type="image/webp">
            <source srcset="images/img-slide-home-4.jpg" type="image/jpeg">
            <img src="images/img-slide-home-4.jpg" class="img-fluid" loading="lazy" alt="">
        </picture>
    </div>
  </div>

  <div data-aos="fade-up" data-aos-delay="400">
    <div class="sliderParent">
      <button class="btnPrev" title="btnPrev"></button>
      <div class="appendDots"></div>
      <button class="btnNext" title="btnNext"></button>
    </div>
  </div>
</section>

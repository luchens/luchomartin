<section class="section two-cols-text-y-img-fullscreen">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="titulo-holder">
          <div class="titulo-top" data-aos="fade-right" data-aos-delay="100"><?php echo $sobre_nosotros[$lang][0]; ?></div>
          <h2 class="titulo" data-aos="fade-right" data-aos-delay="300"><?php echo $sobre_nosotros[$lang][1]; ?></h2>
        </div>
        <p class="texto" data-aos="fade-right" data-aos-delay="400"><?php echo $sobre_nosotros[$lang][2]; ?></p>
        <div data-aos="fade-up" data-aos-delay="500">
          <a href="<?php echo $sobre_nosotros_btn_reservar[$lang][0]; ?>" target="_blank" class="btn-reservar desktop"><?php echo $sobre_nosotros[$lang][3]; ?></a>
          <a href="<?php echo $sobre_nosotros_btn_reservar[$lang][1]; ?>" target="_blank" class="btn-reservar mobile"><?php echo $sobre_nosotros[$lang][3]; ?></a>
        </div>
      </div>
    </div>
  </div>
  <picture data-aos="fade-in">
      <source srcset="images/img-sobre-nosotros-2.webp" type="image/webp">
      <source srcset="images/img-sobre-nosotros-2.jpg" type="image/jpeg">
      <img src="images/img-sobre-nosotros-2.jpg" class="img-fluid" loading="lazy" alt="">
  </picture>
</section>

<section class="section texto-frase" data-aos="fade-up">
  <div class="container">
    Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
  </div>
</section>

<section class="section two-cols-img-y-text bg-blanco">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-left text-end pe-4">
        <div class="titulo-holder">
          <h1 class="titulo" data-aos="fade-right" data-aos-delay="100">
            <b><?php echo $sobre_nosotros[$lang][4]; ?></b></br>
            <?php echo $sobre_nosotros[$lang][5]; ?>
          </h1>
        </div>
        <div class="texto" data-aos="fade-right" data-aos-delay="500"><?php echo $sobre_nosotros[$lang][6]; ?></div>
        <picture class="img" loading="lazy" alt="" data-aos="fade-up" data-aos-delay="700">
            <source srcset="images/img-sobre-nosotros-4.webp" type="image/webp">
            <source srcset="images/img-sobre-nosotros-4.jpg" type="image/jpeg">
            <img src="images/img-sobre-nosotros-4.jpg">
        </picture>
      </div>
      <div class="col-12 col-md-6 col-right ps-4">
        <picture class="img" loading="lazy" alt="" data-aos="fade-up" data-aos-delay="500">
            <source srcset="images/img-sobre-nosotros-3.webp" type="image/webp">
            <source srcset="images/img-sobre-nosotros-3.jpg" type="image/jpeg">
            <img src="images/img-sobre-nosotros-3.jpg">
        </picture>
        <div class="texto" data-aos="fade-up" data-aos-delay="800"><?php echo $sobre_nosotros[$lang][7]; ?></div>
      </div>
    </div>
  </div>
</section>

<section class="section cta-boton-texto bg-blanco">
  <div class="reservar-ahora">
    <a href="<?php echo $sobre_nosotros_btn_reservar[$lang][0]; ?>" class="btn-reservar desktop" target="_blank" data-aos="fade-up" data-aos-delay="100"><?php echo $sobre_nosotros[$lang][8]; ?></a>
    <a href="<?php echo $sobre_nosotros_btn_reservar[$lang][1]; ?>" class="btn-reservar mobile" target="_blank" data-aos="fade-up" data-aos-delay="100"><?php echo $sobre_nosotros[$lang][8]; ?></a>
    <p class="texto" data-aos="fade-up" data-aos-delay="300"><?php echo $sobre_nosotros[$lang][9]; ?></p>
  </div>
</section>

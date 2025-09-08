<section class="section two-cols-text-y-img-fullscreen">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="titulo-holder">
          <div class="titulo-top" data-aos="fade-right" data-aos-delay="100"><?php echo $restaurant_nectar[$lang][0]; ?></div>
          <h2 class="titulo" data-aos="fade-right" data-aos-delay="200">
            <b><?php echo $restaurant_nectar[$lang][1]; ?></b></br>
            <?php echo $restaurant_nectar[$lang][2]; ?>
          </h2>
        </div>
        <div class="texto" data-aos="fade-right" data-aos-delay="400"><?php echo $restaurant_nectar[$lang][3]; ?></div>
        <div data-aos="fade-up" data-aos-delay="500">
          <a href="<?php echo $restaurant_nectar_btn_reservar[$lang][0]; ?>" target="_blank" class="btn-reservar desktop"><?php echo $restaurant_nectar[$lang][4]; ?></a>
          <a href="<?php echo $restaurant_nectar_btn_reservar[$lang][1]; ?>" target="_blank" class="btn-reservar mobile"><?php echo $restaurant_nectar[$lang][4]; ?></a>
        </div>
      </div>
    </div>
  </div>

  <picture data-aos="fade-in">
      <source srcset="images/img-restaurant-nectar-5.webp" type="image/webp">
      <source srcset="images/img-restaurant-nectar-5.jpg" type="image/jpeg">
      <img src="images/img-restaurant-nectar-5.jpg" class="img-fluid" loading="lazy" alt="">
  </picture>
</section>

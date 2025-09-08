<section class="section two-cols-img-y-text bg-verde">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-left text-end pe-4">
        <div class="titulo-holder">
          <h1 class="titulo" data-aos="fade-right" data-aos-delay="100">
            <b><?php echo $home_aura_park[$lang][0]; ?></b></br>
            <?php echo $home_aura_park[$lang][1]; ?>
          </h1>
        </div>
        <p class="texto" data-aos="fade-right" data-aos-delay="500"><?php echo $home_aura_park[$lang][2]; ?></p>
        <picture class="img" loading="lazy" alt="" data-aos="fade-up" data-aos-delay="700">
            <source srcset="images/img-aura-park-1.webp" type="image/webp">
            <source srcset="images/img-aura-park-1.jpg" type="image/jpeg">
            <img src="images/img-aura-park-1.jpg">
        </picture>
      </div>
      <div class="col-12 col-md-6 col-right ps-4">
        <picture class="img" loading="lazy" alt="" data-aos="fade-up" data-aos-delay="500">
            <source srcset="images/img-aura-park-2.webp" type="image/webp">
            <source srcset="images/img-aura-park-2.jpg" type="image/jpeg">
            <img src="images/img-aura-park-2.jpg">
        </picture>
        <p class="texto" data-aos="fade-up" data-aos-delay="800"><?php echo $home_aura_park[$lang][3]; ?></p>
        <div class="btn-mas-holder" data-aos="fade-up" data-aos-delay="900"><a href="#" class="btn-mas"><?php echo $home_aura_park[$lang][4]; ?></a></div>
        <div class="btn-reservar-holder" data-aos="fade-up" data-aos-delay="1000">
          <a href="<?php echo $home_aura_park_btn_reservar[$lang][0]; ?>" target="_blank" class="btn-reservar desktop"><?php echo $home_aura_park[$lang][5]; ?></a>
          <a href="<?php echo $home_aura_park_btn_reservar[$lang][1]; ?>" target="_blank" class="btn-reservar mobile"><?php echo $home_aura_park[$lang][5]; ?></a>
        </div>
      </div>
    </div>
  </div>
</section>

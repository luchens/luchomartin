<section class="section two-cols-text-y-img-fullscreen bg-verde">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="titulo-holder">
          <div class="titulo-top" data-aos="fade-up" data-aos-delay="100"><?php echo $servicios[$lang][0]; ?></div>
          <h1 class="titulo" data-aos="fade-up" data-aos-delay="200">
            <b><?php echo $servicios[$lang][1]; ?></b></br>
            <?php echo $servicios[$lang][2]; ?>
          </h1>
        </div>
        <div class="texto" data-aos="fade-up" data-aos-delay="300"><?php echo $servicios[$lang][3]; ?></div>
        <div data-aos="fade-up" data-aos-delay="400">
          <a href="<?php echo $servicios_btn_reservar[$lang][0]; ?>" target="_blank" class="btn-reservar desktop"><?php echo $servicios[$lang][4]; ?></a>
          <a href="<?php echo $servicios_btn_reservar[$lang][1]; ?>" target="_blank" class="btn-reservar mobile"><?php echo $servicios[$lang][4]; ?></a>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="container">

  <section class="section bloque-oferta">
    <div class="row">
      <div class="col-12 col-md-7">
        <div class="titulo-holder">
          <div class="titulo-top" data-aos="fade-right" data-aos-delay="100"><?php echo $ofertas[$lang][0][0]; ?></div>
          <div class="titulo" data-aos="fade-right" data-aos-delay="200"><?php echo $ofertas[$lang][0][1]; ?></div>
        </div>
        <div class="texto" data-aos="fade-right" data-aos-delay="300"><?php echo $ofertas[$lang][0][2]; ?></div>
        <div data-aos="fade-up" data-aos-delay="400">
          <a href="<?php echo $ofertas_btn_reservar[$lang][0]; ?>" target="_blank" class="btn-reservar desktop"><?php echo $ofertas[$lang][0][5]; ?></a>
          <a href="<?php echo $ofertas_btn_reservar[$lang][1]; ?>" target="_blank" class="btn-reservar mobile"><?php echo $ofertas[$lang][0][5]; ?></a>
        </div>
      </div>
      <div class="col-12 col-md-5">
        <picture data-aos="fade-up" data-aos-delay="500">
            <source srcset="images/img-ofertas-1.webp" type="image/webp">
            <source srcset="images/img-ofertas-1.jpg" type="image/jpeg">
            <img src="images/img-ofertas-1.jpg" class="img-fluid" loading="lazy" alt="">
        </picture>
      </div>
    </div>
  </section>

  <section class="section bloque-oferta">
    <div class="row">
      <div class="col-12 col-md-7">
        <div class="titulo-holder">
          <div class="titulo-top" data-aos="fade-right" data-aos-delay="100"><?php echo $ofertas[$lang][1][0]; ?></div>
          <div class="titulo" data-aos="fade-right" data-aos-delay="200"><?php echo $ofertas[$lang][1][1]; ?></div>
        </div>
        <div class="texto" data-aos="fade-right" data-aos-delay="400"><?php echo $ofertas[$lang][1][2]; ?></div>
        <div class="listado" data-aos="fade-right" data-aos-delay="500">
          <?php foreach ($ofertas[$lang][1][3] as &$valor) { ?>
            <li><div class="item"><?php echo $valor; ?></div></li>
          <?php } ?>
        </div>
        <div class="precio-holder" data-aos="fade-right" data-aos-delay="600"><div class="precio"><?php echo $ofertas[$lang][1][4]; ?></div></div>
        <div data-aos="fade-right" data-aos-delay="700">
          <a href="<?php echo $ofertas_btn_reservar[$lang][0]; ?>" target="_blank" class="btn-reservar desktop"><?php echo $ofertas[$lang][1][5]; ?></a>
          <a href="<?php echo $ofertas_btn_reservar[$lang][1]; ?>" target="_blank" class="btn-reservar mobile"><?php echo $ofertas[$lang][1][5]; ?></a>
        </div>
      </div>
      <div class="col-12 col-md-5">
        <picture data-aos="fade-up" data-aos-delay="800">
            <source srcset="images/img-ofertas-2.webp" type="image/webp">
            <source srcset="images/img-ofertas-2.jpg" type="image/jpeg">
            <img src="images/img-ofertas-2.jpg" class="img-fluid" loading="lazy" alt="">
        </picture>
      </div>
    </div>
  </section>
</div>

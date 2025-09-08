<section class="section apartamentos">

    <div class="bloque-apartamento">
      <div class="container-fluid">
        <div class="info-holder" data-aos="zoom-out" data-aos-delay="1000">
          <div class="info">
            <h2 class="titulo-top"><?php echo $apartamentos[$lang][0][0]; ?></h2>
            <h3 class="titulo"><?php echo $apartamentos[$lang][0][1]; ?></h3>
            <p class="texto-info"><?php echo $apartamentos[$lang][0][2]; ?></p>
            <a href="<?php echo $apartamentos[$lang][0][7]; ?>" class="btn-reservar" target="_blank">
              <div class="texto"><?php echo $apartamentos[$lang][0][3]; ?></div>
              <div class="precio"><?php echo $apartamentos[$lang][0][4]; ?></div>
              <div class="subprecio"><?php echo $apartamentos[$lang][0][5]; ?></div>
            </a>
            <a href="#" class="btn-mas"><?php echo $apartamentos[$lang][0][6]; ?></a>
          </div>
        </div>
        <picture data-aos="fade-in">
            <source srcset="images/img-apartamento-1.webp" type="image/webp">
            <source srcset="images/img-apartamento-1.jpg" type="image/jpeg">
            <img src="images/img-apartamento-1.jpg" class="img-fluid" loading="lazy" alt="">
        </picture>
      </div>
    </div>

    <div class="bloque-apartamento">
      <div class="container-fluid">
        <div class="info-holder" data-aos="zoom-out" data-aos-delay="1000">
          <div class="info">
            <h2 class="titulo-top"><?php echo $apartamentos[$lang][1][0]; ?></h2>
            <h3 class="titulo"><?php echo $apartamentos[$lang][1][1]; ?></h3>
            <p class="texto-info"><?php echo $apartamentos[$lang][1][2]; ?></p>
            <a href="<?php echo $apartamentos[$lang][1][7]; ?>" class="btn-reservar" target="_blank">
              <div class="texto"><?php echo $apartamentos[$lang][1][3]; ?></div>
              <div class="precio"><?php echo $apartamentos[$lang][1][4]; ?></div>
              <div class="subprecio"><?php echo $apartamentos[$lang][1][5]; ?></div>
            </a>
            <a href="#" class="btn-mas"><?php echo $apartamentos[$lang][1][6]; ?></a>
          </div>
        </div>
        <picture data-aos="fade-in">
            <source srcset="images/img-apartamento-2.webp" type="image/webp">
            <source srcset="images/img-apartamento-2.jpg" type="image/jpeg">
            <img src="images/img-apartamento-2.jpg" class="img-fluid" loading="lazy" alt="">
        </picture>
      </div>
    </div>

    <div class="bloque-apartamento">
      <div class="container-fluid">
        <div class="info-holder" data-aos="zoom-out" data-aos-delay="1000">
          <div class="info">
            <h2 class="titulo-top"><?php echo $apartamentos[$lang][2][0]; ?></h2>
            <h3 class="titulo"><?php echo $apartamentos[$lang][2][1]; ?></h3>
            <p class="texto-info"><?php echo $apartamentos[$lang][2][2]; ?></p>
            <a href="<?php echo $apartamentos[$lang][2][7]; ?>" class="btn-reservar" target="_blank">
              <div class="texto"><?php echo $apartamentos[$lang][2][3]; ?></div>
              <div class="precio"><?php echo $apartamentos[$lang][2][4]; ?></div>
              <div class="subprecio"><?php echo $apartamentos[$lang][2][5]; ?></div>
            </a>
            <a href="#" class="btn-mas"><?php echo $apartamentos[$lang][2][6]; ?></a>
          </div>
        </div>
        <picture data-aos="fade-in">
            <source srcset="images/img-apartamento-3.webp" type="image/webp">
            <source srcset="images/img-apartamento-3.jpg" type="image/jpeg">
            <img src="images/img-apartamento-3.jpg" class="img-fluid" loading="lazy" alt="">
        </picture>
      </div>
    </div>

    <div class="bloque-apartamento">
      <div class="container-fluid">
        <div class="info-holder" data-aos="zoom-out" data-aos-delay="1000">
          <div class="info">
            <h2 class="titulo-top"><?php echo $apartamentos[$lang][3][0]; ?></h2>
            <h3 class="titulo"><?php echo $apartamentos[$lang][3][1]; ?></h3>
            <p class="texto-info"><?php echo $apartamentos[$lang][3][2]; ?></p>
            <a href="<?php echo $apartamentos[$lang][3][7]; ?>" class="btn-reservar" target="_blank">
              <div class="texto"><?php echo $apartamentos[$lang][3][3]; ?></div>
              <div class="precio"><?php echo $apartamentos[$lang][3][4]; ?></div>
              <div class="subprecio"><?php echo $apartamentos[$lang][3][5]; ?></div>
            </a>
            <a href="#" class="btn-mas"><?php echo $apartamentos[$lang][3][6]; ?></a>
          </div>
        </div>
        <picture data-aos="fade-in">
            <source srcset="images/img-apartamento-4.webp" type="image/webp">
            <source srcset="images/img-apartamento-4.jpg" type="image/jpeg">
            <img src="images/img-apartamento-4.jpg" class="img-fluid" loading="lazy" alt="">
        </picture>
      </div>
    </div>

    <section class="section cta-boton-texto bg-blanco">
      <div class="reservar-ahora">
        <a href="<?php echo $home_servicios_publica_btn_reservar[$lang][0]; ?>" class="btn-reservar desktop" target="_blank" data-aos="fade-up" data-aos-delay="100"><?php echo $home_piscina_restaurant[$lang][2]; ?></a>
        <a href="<?php echo $home_servicios_publica_btn_reservar[$lang][1]; ?>" class="btn-reservar mobile" target="_blank" data-aos="fade-up" data-aos-delay="100"><?php echo $home_piscina_restaurant[$lang][2]; ?></a>
        <p class="texto" data-aos="fade-up" data-aos-delay="300"><?php echo $home_piscina_restaurant[$lang][3]; ?></p>
      </div>
    </div>

</section>

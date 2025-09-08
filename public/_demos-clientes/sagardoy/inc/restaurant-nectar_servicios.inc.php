<section class="section grid-servicios n-cols-4">
  <div class="container">
    <div class="titulo" data-aos="fade-up" data-aos-delay="100"><?php echo $restaurant_servicios[$lang][0]; ?></div>
    <p class="texto" data-aos="fade-up" data-aos-delay="300"><?php echo $restaurant_servicios[$lang][1]; ?></p>
    <div class="servicios">
      <div class="servicio" data-aos="fade-up" data-aos-delay="500">
        <img src="images/home-servicios-ico-13.svg" class="icon" loading="lazy" alt="" />
        <p class="texto"><?php echo $restaurant_servicios[$lang][2][0]; ?></p>
      </div>
      <div class="servicio" data-aos="fade-up" data-aos-delay="700">
        <img src="images/home-servicios-ico-14.svg" class="icon" loading="lazy" alt="" />
        <p class="texto"><?php echo $restaurant_servicios[$lang][2][1]; ?></p>
      </div>
      <div class="servicio" data-aos="fade-up" data-aos-delay="900">
        <img src="images/home-servicios-ico-15.svg" class="icon" loading="lazy" alt="" />
        <p class="texto"><?php echo $restaurant_servicios[$lang][2][2]; ?></p>
      </div>
      <div class="servicio" data-aos="fade-up" data-aos-delay="1100">
        <img src="images/home-servicios-ico-16.svg" class="icon" loading="lazy" alt="" />
        <p class="texto"><?php echo $restaurant_servicios[$lang][2][3]; ?></p>
      </div>
      <div class="servicio" data-aos="fade-up" data-aos-delay="1300">
        <img src="images/home-servicios-ico-17.svg" class="icon" loading="lazy" alt="" />
        <p class="texto"><?php echo $restaurant_servicios[$lang][2][4]; ?></p>
      </div>
      <div class="servicio" data-aos="fade-up" data-aos-delay="1500">
        <img src="images/home-servicios-ico-18.svg" class="icon" loading="lazy" alt="" />
        <p class="texto"><?php echo $restaurant_servicios[$lang][2][5]; ?></p>
      </div>
      <div class="servicio" data-aos="fade-up" data-aos-delay="1700">
        <img src="images/home-servicios-ico-19.svg" class="icon" loading="lazy" alt="" />
        <p class="texto"><?php echo $restaurant_servicios[$lang][2][6]; ?></p>
      </div>
      <div class="servicio" data-aos="fade-up" data-aos-delay="1900">
        <img src="images/home-servicios-ico-20.svg" class="icon" loading="lazy" alt="" />
        <p class="texto"><?php echo $restaurant_servicios[$lang][2][7]; ?></p>
      </div>
    </div>
  </div>
</section>

<section class="section slider-galeria-img bg-crema-50">
  <div class="container position-relative">
    <div class="sliderParent">
      <button class="btnNext" title="btnNext"></button>
      <button class="btnPrev disable" title="btnPrev"></button>
    </div>
  </div>

  <div class="slick-slider" data-sizes="100vw">
    <div>
      <picture>
          <source srcset="images/img-restaurant-nectar-2.webp" type="image/webp">
          <source srcset="images/img-restaurant-nectar-2.jpg" type="image/jpeg">
          <img src="images/img-restaurant-nectar-2.jpg" class="img-fluid" loading="lazy" alt="">
      </picture>
    </div>
    <div>
      <picture>
          <source srcset="images/img-restaurant-nectar-3.webp" type="image/webp">
          <source srcset="images/img-restaurant-nectar-3.jpg" type="image/jpeg">
          <img src="images/img-restaurant-nectar-3.jpg" class="img-fluid" loading="lazy" alt="">
      </picture>
    </div>
    <div>
      <picture>
          <source srcset="images/img-restaurant-nectar-4.webp" type="image/webp">
          <source srcset="images/img-restaurant-nectar-4.jpg" type="image/jpeg">
          <img src="images/img-restaurant-nectar-4.jpg" class="img-fluid" loading="lazy" alt="">
      </picture>
    </div>
  </div>
</section>

<section class="section info-contacto">
  <div class="container">
    <div class="titulo_inner" data-aos="fade-up" data-aos-delay="0">Productos de temporada y una amplia carta </div>
    <div class="subtitulo_inner" data-aos="fade-up" data-aos-delay="100">Con una gran selección de vinos, cavas y licores</div>
    <div class="texto_inner" data-aos="fade-up" data-aos-delay="200">El Restaurante Nèctar está situado en la planta baja de Aura Park Sud y es un espacio amplio y luminoso decorado con tonos suaves. Dispone de barra y cafetería y ofrece menús con platos escogidos como pescados y carnes al horno, a la plancha y con una gran variedad de guarniciones, ensaladas y arroces.</div>
    <div class="row">
      <div class="col-12 col-md-4 line" data-aos="fade-up" data-aos-delay="300">
        <div class="icon"><img src="images/ico-ubicacion.svg" alt="" /></div>
        <div class="subtitulo_inner2">Ubicación</div>
        <div class="datos_inner">
          <span>Plaça Puig i Gairalt, 1, 08901</span>
          <p>Hospitalet de Llobregat</br>España</p>
        </div>
      </div>
      <div class="col-12 col-md-4 line" data-aos="fade-up" data-aos-delay="400">
        <div class="icon"><img src="images/ico-horarios.svg" alt="" /></div>
        <div class="subtitulo_inner2">Horarios</div>
        <div class="datos_inner">
          <span>De lunes a viernes:</span>
          <p>Abierto de 07:30h. a 17:00h.</br>Desayunos de 07:30h. a 11:00h.</p>
          <span>Sábados y domingos</span>
          <p>Abierto sólo para desayunos de 08:00h. a 11:00h.</p>
        </div>
      </div>
      <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="500">
        <div class="icon"><img src="images/ico-contactanos.svg" alt="" /></div>
        <div class="subtitulo_inner2">Contactanos</div>
        <div class="datos_inner">
          <span>Teléfono</span>
          <p>933 384 317</p>
          <span>Mail</span>
          <a href="mailto:reservas@aurapark.es">reservas@aurapark.es</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section cta-boton-texto bg-blanco">
  <div class="reservar-ahora">
    <a href="<?php echo $home_servicios_publica_btn_reservar[$lang][0]; ?>" class="btn-reservar desktop" target="_blank" data-aos="fade-up" data-aos-delay="100"><?php echo $home_piscina_restaurant[$lang][2]; ?></a>
    <a href="<?php echo $home_servicios_publica_btn_reservar[$lang][1]; ?>" class="btn-reservar mobile" target="_blank" data-aos="fade-up" data-aos-delay="100"><?php echo $home_piscina_restaurant[$lang][2]; ?></a>
    <p class="texto" data-aos="fade-up" data-aos-delay="300"><?php echo $home_piscina_restaurant[$lang][3]; ?></p>
  </div>
</section>

<section class="section mapa-dinamico">
  <div class="container-fluid">
    <div class="titulo-top" data-aos="fade-up" data-aos-delay="100"><?php echo $home_mapa[$lang][0]; ?></div>
    <ul class="tabs" data-aos="fade-up" data-aos-delay="300">
      <li id="1" class="activo"><?php echo $home_mapa[$lang][1][0]; ?></li>
      <li id="2"><?php echo $home_mapa[$lang][1][1]; ?></li>
      <li id="3"><?php echo $home_mapa[$lang][1][2]; ?></li>
      <li id="4"><?php echo $home_mapa[$lang][1][3]; ?></li>
      <li id="5"><?php echo $home_mapa[$lang][1][4]; ?></li>
    </ul>
  </div>
  <div id="map" data-aos="fade-up" data-aos-delay="500"></div>
</section>

<nav class="navbar navbar-expand-lg fixed-top">
  <div class="menu-content">
    <a class="navbar-brand d-block d-lg-none" href="index"><img src="images/logo-verde.svg" class="logo" loading="lazy" alt="Aura Park" /></a>
    <div id="main-nav" class="collapse navbar-collapse">
      <div class="navbar-nav">
        <div class="btns-left">
          <a href="tel:+34933384317" class="btn-link">(+34 )  93 338 43 17</a>
          <a href="mailto:reservas@aurapark.es" class="btn-link">reservas@aurapark.es</a>
        </div>
        <a class="navbar-brand" href="index" data-aos="zoom-out" data-aos-delay="300">
          <img src="images/logo-blanco.svg" class="logo desktop" loading="lazy" alt="Aurapark" />
          <img src="images/logo-sticky.svg" class="logo sticky" loading="lazy" alt="Aurapark" />
        </a>
        <div class="btns-right">
          <div class="idioma-dropdown-menu">
            <a class="btn-idioma" href="#" data-bs-toggle="dropdown"><?php echo $idioma[$lang][0]; ?></a>
            <ul class="dropdown-menu">
              <li><a href="?lang=es" <?php if($lang == 0){ ?> class="activo" <?php } ?>>ES</a></li>
              <li><a href="?lang=en" <?php if($lang == 1){ ?> class="activo" <?php } ?>>EN</a></li>
            </ul>
          </div>
          <a class="nav-link" data-bs-toggle="modal" href="#ModalMenuTop" role="button"><i class="icons ico-menu-top"></i></a>
        </div>
      </div>
      <div class="navbar-nav-mobile d-block d-lg-none">
        <div class="container contenido-top">
          <div class="row">
            <div class="col-12 col-lg-3">
              <div class="btn-idiomas">
                <a href="?lang=es" class="btn-idioma es">Español</a>
                <a href="?lang=en" class="btn-idioma en">English</a>
                <a href="?lang=ca" class="btn-idioma ca">Catalán</a>
                <a href="?lang=fr" class="btn-idioma fr">Français</a>
              </div>
            </div>
            <div class="col-12 col-lg-1"></div>
            <div class="col-12 col-lg-8">
              <div class="row-top">
                <div class="row">
                  <div class="col-12 col-lg-4">
                    <h2><a href="index"><div class="title"><?php echo $navbar[$lang][0]; ?></div></a></h2>
                    <ul class="menu">
                      <li><a href="publica"><?php echo $navbar[$lang][1][0]; ?></a></li>
                      <li><a href="publica"><?php echo $navbar[$lang][1][1]; ?></a></li>
                      <li><a href="publica"><?php echo $navbar[$lang][1][2]; ?></a></li>
                    </ul>
                  </div>
                  <div class="col-12 col-lg-4">
                    <h2><a href="sobre-nosotros"><div class="title"><?php echo $navbar[$lang][2]; ?></div></a></h2>
                  </div>
                  <div class="col-12 col-lg-4">
                    <h2><a href="apartamentos"><div class="title"><?php echo $navbar[$lang][3]; ?></div></a></h2>
                    <ul class="menu">
                      <li><a href="apartamentos-interna"><?php echo $navbar[$lang][4][0]; ?></a></li>
                      <li><a href="apartamentos-interna"><?php echo $navbar[$lang][4][1]; ?></a></li>
                      <li><a href="apartamentos-interna"><?php echo $navbar[$lang][4][2]; ?></a></li>
                      <li><a href="apartamentos-interna"><?php echo $navbar[$lang][4][3]; ?></a></li>
                    </ul>
                  </div>
                  <div class="col-12 col-lg-4">
                    <h2><a href="servicios"><div class="title"><?php echo $navbar[$lang][5]; ?></div></a></h2>
                  </div>
                  <div class="col-12 col-lg-4">
                    <h2><a href="restaurant-nectar"><div class="title"><?php echo $navbar[$lang][6]; ?></div></a></h2>
                  </div>
                  <div class="col-12 col-lg-4">
                    <h2><a href="ofertas"><div class="title"><?php echo $navbar[$lang][7]; ?></div></a></h2>
                  </div>
                </div>
              </div>
              <div class="direccion">
                Avda. Fabregada 54 - 56.</br>08901 L’Hospitalet de Llobregat.</br>
                <a href="tel:+34933384317">(+34 ) 93 338 43 17</a></br></br>
                <a href="mailto:reservas@aurapark.es">reservas@aurapark.es</a>
              </div>
              <div class="row-bottom">
                <div class="row">
                  <div class="col-12 col-lg-4">
                    <a href="aviso-legal"><?php echo $footer_links_legal[$lang][1]; ?></a>
                  </div>
                  <!--<div class="col-12 col-lg-4">
                    <a href="politica-de-privacidad"><?php echo $footer_links_legal[$lang][2]; ?></a>
                  </div>-->
                  <div class="col-12 col-lg-4">
                    <a href="politica-de-cookies"><?php echo $footer_links_legal[$lang][3]; ?></a>
                  </div>
                </div>
              </div>
              <div class="redes">
                <a href="https://www.instagram.com/aurapark_apartahotel/" target="_blank" class="btn_red ico-instagram" data-aos="fade-in" data-aos-delay="900"></a>
                <a href="https://es-es.facebook.com/auraparkapartahotel" target="_blank" class="btn_red ico-facebook" data-aos="fade-in" data-aos-delay="1100"></a>
                <!--<a href="https://api.whatsapp.com/send?phone=34933384317" target="_blank" class="btn_red ico-whatsapp" data-aos="fade-in" data-aos-delay="1300"></a>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"  aria-expanded="false" aria-label="" title="navbar-toggler"><i class="icons ico-menu-top"></i><i class="icons ico-tancar"></i></button>
  </div>
</nav>

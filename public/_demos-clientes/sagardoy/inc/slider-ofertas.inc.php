<section class="section slider-ofertas">
  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="sliderParent">
      <div class="appendDots"></div>
    </div>
    <button href="#" class="btnPrev"></button>
    <div class="slick-slider-holder">
      <div class="slick-slider" data-sizes="100vw">
        <div>
          <div class="oferta">
            <div class="row">
              <div class="col-12 col-md-6 col-left">
                <div class="label"><?php echo $home_ofertas[$lang][0][0]; ?></div>
                <div class="titulo"><?php echo $home_ofertas[$lang][0][1]; ?></div>
                <p class="texto"><?php echo $home_ofertas[$lang][0][2]; ?></p>
                <a href="#" class="btn-ampliar"><?php echo $home_ofertas[$lang][0][3]; ?></a>
              </div>
              <div class="col-12 col-md-6 col-right">
                <img src="images/home-ofertas-1.jpg" class="image" loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="oferta">
            <div class="row">
              <div class="col-12 col-md-6 col-left">
                <div class="label"><?php echo $home_ofertas[$lang][1][0]; ?></div>
                <div class="titulo"><?php echo $home_ofertas[$lang][1][1]; ?></div>
                <p class="texto"><?php echo $home_ofertas[$lang][1][2]; ?></p>
                <a href="#" class="btn-ampliar"><?php echo $home_ofertas[$lang][1][3]; ?></a>
              </div>
              <div class="col-12 col-md-6 col-right">
                <img src="images/home-ofertas-1.jpg" class="image" loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button href="#" class="btnNext"></button>
  </div>
</section>

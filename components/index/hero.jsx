

const Hero = () => {
    return(
        <section id="hero" class="hero d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">BNMO : We offer the greatest financial technology</h1>
              <h3 style={{color: "#454444"}} data-aos="fade-up" data-aos-delay="400">We shall never deny a guest, even the most ridiculous request</h3>
              <div data-aos="fade-up" data-aos-delay="600">
                <div class="text-center text-lg-start">
                </div>
              </div>
            </div>
            <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src="assets/img/hero-img.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
    
      </section>
    )
}

export default Hero
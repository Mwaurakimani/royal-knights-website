<template>
  <div class="mobile-footer">
      <section>
          <div class="logo-holder">
              <div class="logo-icon">
                  <img src="/storage/frontEnd/logo-white.png" alt="">
              </div>
              <h3>Royal Knights <br>Organization</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum dolores in nemo, nostrum optio quam qui quibusdam quos vel?</p>
          <div class="social">
              <div class="social-icon">
                  <img src="/storage/frontEnd/socialMedia/facebook.png" alt="">
              </div>
              <div class="social-icon">
                  <img src="/storage/frontEnd/socialMedia/instagram.png" alt="">
              </div>
              <div class="social-icon">
                  <img src="/storage/frontEnd/socialMedia/movie.png" alt="">
              </div>
              <div class="social-icon">
                  <img src="/storage/frontEnd/socialMedia/twitter.png" alt="">
              </div>
          </div>
      </section>
      <section id="site-map">
          <ul>
              <li>About</li>
              <li>Our Work</li>
              <li>Reach Out</li>
              <li>Programs</li>
              <li>Up Coming Events</li>
          </ul>
      </section>

      <div class="contact-us-section">
          <h2>Contact Us</h2>
          <ul>
              <li>
                  <div class="icon">
                      <img src="/storage/frontEnd/footer_icons/icons8-envelope-48.png" alt="">
                  </div>
                  <p>info@royalknights.org</p>
              </li>
              <li>
                  <div class="icon">
                      <img src="/storage/frontEnd/footer_icons/icons8-phone-60.png" alt="">
                  </div>
                  <p>+254 700 000 000</p>
              </li>
              <li>
                  <div class="icon">
                      <img src="/storage/frontEnd/footer_icons/icons8-address-50.png" alt="">
                  </div>
                  <p>Nairobi Kenya</p>
              </li>
          </ul>
      </div>

      <section class="gallery_section">
          <h2>Gallery</h2>
          <div class="image-holder">
              <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </div>
      </section>
  </div>
</template>
<script>
export default {
  name: 'mobile-footer'
}
</script>
<style lang="scss" >
@use "../resources/scss/index";

.gallery_section{
    display: none;
}

.mobile-footer{
    margin: auto;
    width: 90%;
    padding-top: 20px;
    .logo-holder{
        width: 100%;
        display: flex;
        margin-bottom: 30px;
        .logo-icon{
            height: 50px;
            margin-right: 30px;
            img{
                height: 100%;
            }
        }
        h3{
            font-weight: bolder;
            font-size: larger;
            color: white;
        }
    }
    &>section>p{
        color: white;
        margin-bottom: 20px;
    }
    .social{
        display: flex;
        margin-bottom: 50px;
        .social-icon{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }
    }
    &>section>ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 40px;
        li{
            color: white;
            font-size: 1.2em;
            margin-bottom: 10px;
        }
    }
    .contact-us-section{
        h2{
            font-weight: bolder;
            font-size: 1.3em;
            color: white;
            margin-bottom: 20px;
        }
        ul{
            padding-bottom: 50px;
            li{
                height: 40px;
                display: flex;
                align-items: center;

                .icon{
                    width: 30px;
                    height: 30px;
                    margin-right: 20px;
                }
                p{
                    color: white;
                    line-height: 40px;
                }
            }
        }
    }

}


@media screen  and (min-width:700px) {
    .mobile-footer{
        display: flex;
        justify-content: space-around;
        section{
            width: 33%;
        }
        p{
            font-size: 0.9em;
        }
        &>section>ul{
            flex-direction: column;
            margin: 0px;
            height: 150px;
            li{
                margin: 0px;
                font-size: 0.9em;
                padding: 0px;
            }
        }
    }

    .social-icon{
        width: 30px !important;
    }

    #site-map{
        max-width: 200px;
    }
}

@media screen  and (min-width:1300px) {
    .gallery_section{
        display: block;
        width: 300px;
        height: 300px;
        padding: 0px 20px;

        h2{
            font-weight: bolder;
            font-size: 1.3em;
            color: white;
            margin-bottom: 20px;
        }
        .image-holder{
            width: 100%;
            height: 80%;
            ul{
                width: 100%;
                height: 215px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                overflow: hidden;

                li{
                    width: 100px;
                    height: 100px;
                    background-color: blue;
                    margin: 5px;
                }
            }
        }
    }

}



</style>

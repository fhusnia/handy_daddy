<template>
  <div class="navcolor">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="col-1 col-sm-12 d-sm-block d-lg-block col-lg-3">
          <div class="navbrand2">
            <router-link to="/" @click.native="handleLinkClick"
              ><img v-if="isImageVisible" src="../../assets/images/logo.png"
            /></router-link>
          </div>
        </div>

        <div
          class="col-11 col-sm-9 col-lg-9 justify-content-end row align-items-center"
        >
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
              <div class="row justify-content-end">
                <div class="col-3">
                  <button
                    @click="toggleNavbar"
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span
                      ><font-awesome-icon
                        icon="fa-solid fa-bars"
                        size="xl"
                        style="color: #ffffff"
                    /></span>
                  </button>
                </div>
              </div>

              <div
                :class="['collapse', 'navbar-collapse', { show: isNavbarOpen }]"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item d-none d-sm-block">
                    <a
                      class="clr nav-link phoneclr"
                      aria-current="page"
                      :href="`tel:${phoneNumber}`"
                      @click="makeCall"
                      >(+000) 000 00 00</a
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/" @click.native="handleLinkClick"
                      ><a class="nav-link" href="#">Home</a></router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/whyus" @click.native="handleLinkClick"
                      ><a class="nav-link" href="#">Why us</a></router-link
                    >
                  </li>

                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      @click.native="handleLinkClick"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <router-link
                        to="/service1"
                        @click.native="handleLinkClick"
                        ><li>
                          <a class="dropdown-item" href="#">Service1</a>
                        </li></router-link
                      >

                      <li><hr class="dropdown-divider" /></li>
                      <router-link
                        to="/service2"
                        @click.native="handleLinkClick"
                        ><li>
                          <a class="dropdown-item" href="#">Service2</a>
                        </li></router-link
                      >

                      <li><hr class="dropdown-divider" /></li>
                      <router-link to="/lottery" @click.native="handleLinkClick"
                        ><li>
                          <a class="dropdown-item" href="#">Lottery</a>
                        </li></router-link
                      >

                      <li><hr class="dropdown-divider" /></li>
                      <router-link
                        to="/refrepair"
                        @click.native="handleLinkClick"
                        ><li>
                          <a class="dropdown-item" href="#">RefRepair</a>
                        </li></router-link
                      >
                    </ul>
                  </li>

                  <li class="nav-item">
                    <router-link
                      to="/homeappliances"
                      @click.native="handleLinkClick"
                      ><a class="nav-link" href="#">Appliances</a></router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/blog" @click.native="handleLinkClick"
                      ><a class="nav-link" href="#">Blog</a></router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/contact" @click.native="handleLinkClick"
                      ><a class="nav-link" href="#">Contact</a></router-link
                    >
                  </li>

                  <li class="nav-item d-sm-none d-lg-block d-none">
                    <router-link to="/join"
                      ><button class="btn"><a>JOIN US</a></button>
                    </router-link>
                  </li>
                  <li class="nav-item d-lg-none d-block">
                    <button class="btnmobile">
                      <a
                        class="clr"
                        :href="`tel:${phoneNumber}`"
                        @click="makeCall"
                        >CALL NOW</a
                      >
                    </button>
                  </li>
                </ul>
                <div class="row justify-content-center d-block d-sm-none">
                  <div class="pt-5">
                    <div class="d-flex p-4 gap-4">
                      <a @click="goToFacebook"
                        ><font-awesome-icon
                          class="icn"
                          icon="fa-brands fa-facebook-f"
                          size="lg"
                      /></a>
                      <a @click="goToYoutube"
                        ><font-awesome-icon
                          class="icn"
                          icon="fa-brands fa-youtube"
                          size="lg"
                      /></a>
                      <a @click="goToLinkedin"
                        ><font-awesome-icon
                          class="icn"
                          icon="fa-brands fa-linkedin"
                          size="lg"
                      /></a>
                    </div>
                  </div>
                  <!-- <div class="bottomcontainer d-flex d-block d-sm-none justify-content-center pt-5 gap-2 ">
                                    <a><font-awesome-icon icon="fa-regular fa-copyright"  size="s" style="color:white"/></a> <p class="fs-6 ">2022 Handy Daddy | All rights reserved.</p>
                          </div> -->
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      isImageVisible: true,
      isNavbarOpen: false,
      phoneNumber: "230093209903",
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
      this.isImageVisible = !this.isImageVisible;
    },
    makeCall() {
      console.log(`Calling ${this.phoneNumber}`);
    },
    handleLinkClick() {
      this.isNavbarOpen = false;
      this.isImageVisible = true;
    },
    goToLinkedin() {
      window.open(
        "https://www.linkedin.com/company/rabitabank-ojsc/mycompany/verification/",
        "_blank",
      );
    },
    goToFacebook() {
      window.open("https://www.facebook.com/rabitabank", "_blank");
    },
    goToYoutube() {
      window.open("https://www.youtube.com/c/Rabitabank_official", "_blank");
    },
    scrollToTop(event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.icn {
  color: white;
  cursor: pointer;
  transition: color 0.3s ease;
}

.icn:hover {
  color: #ffd633;
}
.dropdown-menu {
  --bs-dropdown-link-active-bg: white;
  a {
    text-decoration: none;
  }
}
.btn:first-child:active {
  color: #ffd633;
}
.btn:hover {
  color: #000000;
  background-color: #ffd633;
}
.nav-link {
  color: white;
}
a {
  color: black;
}
.nav-link:focus,
.nav-link:hover {
  color: #ffd633;
}

.navcolor {
  background: black !important;
}
nav {
  width: 100%;
}
.nav-item {
  padding: 15px !important;
}
.colnavphone2 {
  padding-top: 18px;
  color: #ffd633 !important;
}
.navbar {
  .container {
    display: block;
  }
}
.navbar2 {
  @include center;
}

.nav-item2 {
  a {
    color: white !important;
  }
  @include row;
  .navpad {
    a {
      padding: 12px;
    }
  }
  .navbtn2 {
    a {
      padding: 6px 14px 6px 14px;
      border: 1px solid $yellow;
      border-radius: 6px;
      text-decoration: none !important;
      color: #ffd633 !important;
    }
    span {
      font-size: 12px;
    }
  }
}
.navbrand2 {
  width: 150px;
  position: relative;
  top: 45px;
  z-index: 2;
}
img {
  width: 120px;
}
.nav {
  background-color: rgb(0, 0, 0);
  border-bottom: 3px solid $yellow;
}

.dropdown-menu {
  a {
    color: #636664 !important;
  }
}
.btn {
  background: black;
  width: 90px;
  padding: 8px;
  border: 1px solid $yellow;
  font-size: 12px;
  color: white;
}
.phnclr {
  color: $yellow !important;
}
.btnmobile {
  width: 130px;
  padding: 6px;
  margin-top: 8px;
  border-radius: 6px;
  background: $yellow;
  border: 1px solid $yellow;
  font-size: 14px;
  font-weight: 600;
}
.bottomcontainer p {
  color: white;
}
@media only screen and (max-width: 600px) {
  .navbrand2 {
    position: relative;
    z-index: 2;
    img {
      width: 60%;
    }
  }
}
</style>

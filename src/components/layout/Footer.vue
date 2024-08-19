<template>
    <footer>
        <div class="top-container">

                <div class="container">

                    <div class=" p-sm-4 p-lg-4 p-2">

                        <div class="row justify-content-center align-items-center">
                            <div class="col-7 col-sm-5 col-lg-5">
                                <img src="../../assets/images/logo.png"/>
                            </div>
                            <div class="col-5 rightcontain d-block d-sm-none d-lg-none">
                                <div class="d-flex align-items-center flex-column pt-4">
                                    <span class="yellow ">Rate us on</span>
                                    <p class="text-white">Google</p>             
                                    
                                </div>
                            </div>
                            <div class="col-7  d-none d-sm-block d-lg-block">
                                <div class="footertop">

                                    <a class=" text-decoration-none text-white">Subscribe for news</a>
                                    <br/>
                                    <div class="col-12">
                                        <div class="pt-4">
                                            <input placeholder="Type your email here" class="footerinput" type="text"/>
                                            <a class="righticona"><font-awesome-icon  class=" iconright" icon="fa-solid fa-arrow-right" /></a>
                                        </div>
                       
                                    </div>
                                    

                                </div>
                            
                            </div>
                      
                        </div>
                    </div>
                    
                   
                </div>
       
    
        </div>
        <div class="mid-container">
     
                <div class="container pt-4 ">
                    <div class="row ">
                        <div class="col-5">
                            <div class="rightcontain  d-none d-sm-block d-lg-block p-2">
                                <div class="pb-3">
                                    <span class="yellow ">Rate us on</span>
                                    <p class="pb-3 text-white">Google</p>
                                    <div class="callnow">
                                        <a>Call Now</a>
                                    </div>
                                    
                                </div>
                                <div class="d-flex pt-4 gap-3">
                                   <a @click="goToFacebook" ><font-awesome-icon class="icn" icon="fa-brands fa-facebook-f" size="lg" /></a> 
                                    <a @click="goToYoutube"><font-awesome-icon class="icn" icon="fa-brands fa-youtube"  size="lg" /></a>
                                    <a @click="goToLinkedin"><font-awesome-icon  class="icn" icon="fa-brands fa-linkedin" size="lg"/></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="leftcontain ">
                                <div class="row ">
                                    <div class="col-12 d-block d-sm-none d-lg-none d-lg-block">
                                        <div class="footertop">

                                            <a class=" text-decoration-none text-white">Subscribe for news</a>
                                            <br/>
                                            <div class="pt-2 d-flex ">
                                                <div>
                                                    <input placeholder="Type your email here" class="footerinput" type="text"/>

                                                </div>
                                                <div>
                                                    <a class="righticona"><font-awesome-icon  class=" iconright" icon="fa-solid fa-arrow-right" /></a>

                                                </div>
                 
                                            </div>
                                            

                                        </div>
                            
                                    </div>
                                    <div class="col-6  col-sm-3  justify-content-between">
                                        <label class="text-center p-2">Company</label>
                                        <ul class="p-1">
                                            <router-link to="/whyus" @click.native="scrollToTop" class="scroll-to-top"><li><a>Why Us</a></li></router-link>
                                            <router-link to="/service1" @click.native="scrollToTop" class="scroll-to-top"><li><a>Services</a></li></router-link>
                                            <router-link to="/join" @click.native="scrollToTop" class="scroll-to-top"><li><a>Join us</a></li></router-link>
                                            <router-link to="/contact" @click.native="scrollToTop" class="scroll-to-top"><li><a>Contact</a></li></router-link>
                                        </ul>
                                    </div>
                                    <div class="col-6 col-sm-3  ">
                                        <label class="text-center p-2">Legal</label>
                                        <ul class="p-1">
                                           <router-link to="/privacy" @click.native="scrollToTop" class="scroll-to-top"><li><a>Terms&Conditions</a></li></router-link>
                                           <router-link to="/privacy" @click.native="scrollToTop" class="scroll-to-top"><li><a>Privacy policy</a></li></router-link>
                                            <router-link to="/privacy" @click.native="scrollToTop" class="scroll-to-top"><li><a>Refund Policy</a></li></router-link>
                                            <router-link  to="/faq" @click.native="scrollToTop" class="scroll-to-top"><li><a>FAQs</a></li></router-link>
                                        </ul>
                                    </div>
                                    <div class="col-6  col-sm-6 getin d-none d-sm-block ">
                                        <label class="text-center p-2">Get in Touch with Us</label>
                                        <ul class="p-1">
                                            <li class="d-flex">
                                                <span><font-awesome-icon icon="fa-solid fa-location-dot" size="xs" style="color: #ffffff;" /></span><a>1609 Yonge Street, </a>
                                            </li>
                                            <li class="d-flex">
                                                <span><font-awesome-icon :icon="['fas', 'phone']" size="xs" style="color: #ffffff;" /></span><a>(+1) 997 962 87 2</a>
                                            </li>
                                            <li class="d-flex">
                                                <span><font-awesome-icon icon="envelope" size="xs" style="color: #ffffff;" /></span><a>info@handydaddy.ca</a>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                </div>
                                <div class="bottomcontainer d-flex d-block d-sm-none justify-content-center pt-3 gap-2 ">
                                    <a><font-awesome-icon icon="fa-regular fa-copyright"  size="s" style="color:#575655"/></a> <p class="fs-6">2022 Handy Daddy | All rights reserved.</p>
                                </div>
                                <div class="p-2 pt-3 d-none d-sm-block d-lg-block"> 
                                    <p class="text-white " style="font-size:12px;">created by <span style="color:#ffd633;font-size:16px"> People Brand</span></p>

                                </div>
                                
                            </div>
                        </div>
                       
                    </div>
                   
     
            </div>
        </div>

        <div class="bottomcontainer d-flex justify-content-center d-block d-sm-none ">
            <div class="pt-2"> 
                 <p class="text-white " style="font-size:12px;">created by <span style="color:#ffd633;font-size:16px"> People Brand</span></p>

            </div>
        </div>
        <div class="bottomcontainer d-none d-sm-block ">
           
           
                                
                <div class="d-flex justify-content-center pt-3 gap-2 ">
                    <a><font-awesome-icon icon="fa-regular fa-copyright"  size="s" style="color:#575655"/></a> <p class="fs-6">2022 Handy Daddy | All rights reserved.</p>
                </div>
            
        </div>
            
   
      
    </footer>
</template>

<script>
export default {
  name: 'AppFooter' ,
  methods:{
    goToLinkedin(){     
        window.open('https://www.linkedin.com/company/rabitabank-ojsc/mycompany/verification/', '_blank');
    },
    goToFacebook(){
        window.open('https://www.facebook.com/rabitabank', '_blank');
    },
    goToYoutube(){
        window.open('https://www.youtube.com/c/Rabitabank_official','_blank')
    },
    scrollToTop(event) {
      event.preventDefault(); 
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>


<style lang="scss"  scoped>

.icn {
    color: white; 
    cursor: pointer;
    transition: color 0.3s ease; 
}

.icn:hover {
    color: #ffd633; 
}

a{
    color:white !important;
}
.top-container{
    background: #282828;
    border-bottom: 1px solid #ffd633;
}
.footercontainer{
    width: 100%;
}
.top-container{
    padding:12px;
}

.scroll-to-top {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.scroll-to-top:hover {
  text-decoration: none;
}
.footerinput{
    background-color: #575655;
    border:none;
    padding:8px;
    width: 260px;
    border-radius:3px;

}

.footerinput::placeholder{
    padding-left: 12px;
    color:#d6d6d6;
    font-size:13px;
    line-height: 2;
    letter-spacing: 1px
}
.iconright{
    width: 30px;
    color:black;
}
.righticona{
    position: relative;
    right:12px;
    background-color:#ffd633;
    padding: 10px;
    border-radius:6px;
}
.footertop{
    padding:16px;
    a{
        font-size: 18px;
        letter-spacing: 1px

    }
}
.mid-container{
    background: black;
   
}
.rightcontain{
    span{
        font-size:18px;
    }
    p{
        font-size:30px;
    }
    a{
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1px;
    }
}
.callnow{
    width:140px;
    background: #ffd633;
    text-align: center;
    padding:7px;
    border-radius: 3px;
}
.leftcontain {
    label{
        color:#ffd633; 
        font-size: 18px;
        letter-spacing: 1px;
        font-weight:bold;
    }
    li{
        list-style:none;
        color: rgb(216, 211, 211);
        padding: 4px;
    
    }
    span{
        padding-right:8px;
    }
   
   
}
.getin{
    padding-left: 34px;
}
.bottomcontainer{
    background: #282828;
    padding: 6px;
    color: #575655;
}

@media only screen and (max-width: 576px) {
  img{
    width: 80px;
  }
  .top-container{
    padding: 0;
  }

  .rightcontain{
    span{
        font-size:18px;
    }
    p{
        margin-top: -8px;
        font-size:24px;
    }
  
}
.footertop{
    padding:0;
}
.righticona{
    position: relative;
    left:-12px;
    top:6px;
    background-color:#ffd633;
    padding:10px;
    border-radius:6px;
}
.mid-container{
    background: #282828;
   
}
.leftcontain{
    li{
        color: #575655;
    }
   
}
a{
 color:  #8D8D8D !important;   
}
}
</style>
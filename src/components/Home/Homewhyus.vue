<template>
    <div class="whyus pt-5 pb-5 ">
        <div >
        <div class="container">
            <div class="row flex-column flex-sm-row flex-lg-row">

                <div class="col-12 col-sm-6 col-lg-6">
                    <div class="imageslide">
                    
                        <div class="imgslide1">
                            <img src="../../assets/images/repairman2.jpg"/>
                        </div>
                        <div class="row justify-content-center d-sm-flex  d-none">
                            <div v-show="show"  class="col-6">
                                <div class="imgslide2">
                                    <img src="../../assets/images/repairman.jpg"/>
                                </div>
                            </div>
                            <div v-show="show"   class="col-6">
                                <div class="imgslide2">
                                    <img src="../../assets/images/repairman3.jpg"/>
                                </div>
                            </div>
                            
                        </div>
                    
                        
                    </div>
               
            </div>
            <div class="col-12 col-sm-6 col-lg-6 bg-white">
                <div>
               
                        <div class="row">
                            <div class="col-10">
                                <div class="title">
                                <h4>WHY US</h4>
                    
                            </div>
                        </div>
                            
                                <div class="col-2 p-3 row justify-content-end">
                                    
                                    <div @click="closeModal" v-show="show"  class="close">
                                        <font-awesome-icon icon="fa-solid fa-angle-up" />
                                    </div>
                                </div>
                            
                            
                        </div>
                            
                        
                                
                        <ul class="list">
                            <li class="listitem"><font-awesome-icon icon="fa-solid fa-check" size="xs" /><a>Same day service</a></li>
                            <li class="listitem"><font-awesome-icon icon="fa-solid fa-check" size="xs"/><a>No hourly charge - flat rate</a></li>
                            <li class="listitem"><font-awesome-icon icon="fa-solid fa-check" size="xs"/><a>No extra charge for evening and week-end services</a></li>
                            <li class="listitem"><font-awesome-icon icon="fa-solid fa-check" size="xs" /><a>3 month warranty on spare parts and labor</a></li>                    <li class="listitem"><font-awesome-icon icon="fa-solid fa-check" size="xs"/><a>No surprise or hidden fees</a></li>
                            <div v-show="!close"  >
                                <li class="listitem"><font-awesome-icon icon="fa-solid fa-check" size="xs"/><a>No hourly charge - flat rate</a></li>
                                <li class="listitem"><font-awesome-icon icon="fa-solid fa-check" size="xs"/><a>No extra charge for evening and week-end services</a></li>
                                <li class="listitem"><font-awesome-icon icon="fa-solid fa-check" size="xs" /><a>3 month warranty on spare parts and labor</a></li>
                                <li class="listitem"><font-awesome-icon icon="fa-solid fa-check" size="xs"/><a>No surprise or hidden fees</a></li>
                                <li class="listitem"><font-awesome-icon icon="fa-solid fa-check" size="xs" /><a>Same day service</a></li>
                                <li class="listitem"><font-awesome-icon icon="fa-solid fa-check" size="xs"/><a>No surprise or hidden fees</a></li>
                                <li class="listitem"><font-awesome-icon icon="fa-solid fa-check" size="xs" /><a>Same day service</a></li>
                            </div>
                            
                        </ul>
                        
                      
                            <button v-show="!show" @click="openModal" class="d-none d-sm-block" > SEE MORE</button>
                            
                            <div class="d-sm-none d-lg-none  row justify-content-center">
                                    
                                    <div v-show="!show" @click="openModal" class="close opn">
                                        <font-awesome-icon icon="fa-solid fa-angle-down" />
                                    </div>
                            </div>
                            

                    </div>

            </div> 


            </div>
                
          
        </div>
      
    </div>
    <div  class="row justify-content-center">
            <div class=" col-2 pt-5">
                <div v-show="!close" class="callbtn">
                    <button>CALL NOW</button>
                </div>
          
        </div>
      
    </div>
  
    </div>
   
  
</template>

<script>
export default {
    name: 'HomeWhyUs' ,
    data() {
      return{
        show: false,
        close: true
      }
      
    },
    methods: {
        openModal() {
        this.show = true;
        this.close = false;
        },
        closeModal() {
        this.show = false;
        this.close = true;
        }
  }
}
</script>

<style  lang="scss"  scoped>
  

.imgslide1{
    width: 100%;
    img{
        width: 100%;
        height: 395px;
    }
}
.imgslide2{
    padding:12px;
    width: 100%;
    img{
        width: 100%;
        height: 30vh;
    }
}
.listitem{
    padding:8px;
    border-bottom: 1px solid rgb(230, 230, 230);
    list-style: none;
    a{
        padding: 12px;
    }
}
.title {
    padding: 18px;  
    margin-left:12px;
    text-align: center;
    h4{

        width: 105px;
        padding: 6px;
        border-bottom: 3px solid $yellow;
        text-align: center;
    }
}
 button{
  width:150px;
  padding:8px;
  margin-top:18px;
  margin-left:32px;
  border-radius:6px;
  background: $yellow;
  border:1px solid $yellow;
  font-size: 14px;
}
.close{
    width: 40px;
    height: 40px;
    background: $yellow;
    text-align: center;
    padding: 6px;
    border-radius: 100%;
    font-size: 20px;
    cursor: pointer;
}

.callbtn button{
  width:150px;
  padding:8px;
  margin-left:32px;
  border-radius:6px;
  background: $yellow;
  border:1px solid $yellow;
  font-size: 14px;
}

</style>
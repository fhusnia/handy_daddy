<template>
  
        <div class=" container ">
            <div class="pt-5 pb-5 ">
                <div class="row justify-content-center">
                <div class="col-12">
                <div class="row justify-content-center">
                    <div class="title">
                        <div class="p-1 fs-5 text-center"><a >{{ data1 | uppercase }}</a></div>
                        <div class="pb-2 text-center">
                             <a>{{ data2 }}</a>                            
                        </div>
                       
                        <div class="row justify-content-center">
                            <p></p>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="col-12 ">
                    <div class="flex-wrap d-flex justify-content-center gap-4 gap-sm-0 gap-lg-0 ">
                        <div class="col-5 col-sm-3 col-lg-3" >
                            <div class="cardone row align-items-center justify-content-center hover-effect"  
                                :class="{ 'hovered': isHovered }" 
                                @mouseover="isHovered = true" 
                                @mouseleave="isHovered = false" >
                                <div>
                                    <div class="col-12  text-center">
                                        <font-awesome-icon class="size" icon="fa-brands fa-figma" />

                                    </div>
                                    <div class="col-12  text-center">
                                        <a>WASHER</a>
                                    </div>
                                   
                                </div>
                              
                            </div>
                           
                        </div>
                        <div class="col-5 col-sm-3 col-lg-3">
                            <div class="cardone row align-items-center justify-content-center">
                                <div>
                                    <div class="col-12 text-center">
                                        <font-awesome-icon class="size" icon="fa-brands fa-figma" />

                                    </div>
                                    <div class="col-12 text-center">
                                        <a>WASHER</a>
                                    </div>
                                   
                                </div>
                              
                            </div>
                           
                        </div>
                        <div class="col-5 col-sm-3 col-lg-3">
                            <div class="cardone row align-items-center justify-content-center">
                                <div>
                                    <div class="col-12 text-center ">
                                        <font-awesome-icon class="size" icon="fa-brands fa-figma" />

                                    </div>
                                    <div class="col-12  text-center">
                                        <a>WASHER</a>
                                    </div>
                                   
                                </div>
                              
                            </div>
                           
                        </div>
                        <div class="col-5 col-sm-3 col-lg-3">
                            <div class="cardone row align-items-center justify-content-center">
                                <div>
                                    <div class="col-12  text-center">
                                        <font-awesome-icon class="size" icon="fa-brands fa-figma" />

                                    </div>
                                    <div class="col-12  text-center">
                                        <a>WASHER</a>
                                    </div>
                                   
                                </div>
                              
                            </div>
                           
                        </div>
                        <div class="col-5 col-sm-3 col-lg-3">
                            <div class="cardone row align-items-center justify-content-center">
                                <div>
                                    <div class="col-12  text-center">
                                        <font-awesome-icon class="size" icon="fa-brands fa-figma" />

                                    </div>
                                    <div class="col-12  text-center">
                                        <a>WASHER</a>
                                    </div>
                                   
                                </div>
                              
                            </div>
                           
                        </div>
                        <div class="col-5 col-sm-3 col-lg-3">
                            <div class="cardone  row align-items-center justify-content-center">
                                <div>
                                    <div class="col-12  text-center">
                                        <font-awesome-icon class="size" icon="fa-brands fa-figma" />

                                    </div>
                                    <div class="col-12  text-center">
                                        <a>WASHER</a>
                                    </div>
                                   
                                </div>
                              
                            </div>
                           
                        </div>
                        <div class="col-5 col-sm-3 col-lg-3">
                            <div class="cardone row align-items-center justify-content-center">
                                <div>
                                    <div class="col-12  text-center">
                                        <font-awesome-icon class="size" icon="fa-brands fa-figma" />

                                    </div>
                                    <div class="col-12  text-center">
                                        <a>WASHER</a>
                                    </div>
                                   
                                </div>
                              
                            </div>
                           
                        </div>
                        <div class="col-5 col-sm-3 col-lg-3">
                            <div class="cardone row align-items-center justify-content-center">
                                <div>
                                    <div class="col-12  text-center">
                                        <font-awesome-icon class="size" icon="fa-brands fa-figma" />

                                    </div>
                                    <div class="col-12  text-center">
                                        <a>WASHER</a>
                                    </div>
                                   
                                </div>
                              
                            </div>
                           
                        </div>
                  
                              
                       
                       
                        
                    </div>
          
                </div>
            </div>
             
            <div>

            </div>
            <div   class="row justify-content-center pt-4">
                <button :style="{ backgroundColor: bgColor,display:disPlay }">{{  data3 | uppercase }}</button>
            </div>
            </div>
         
            </div>
          
        </div>
        

</template>

<script>
import { EventBus} from '../../main';
export default {
  name: 'AppLiances ' ,
  props:{
    bgColor:{
        type: String,
        default: 'white'
    },
    disPlay:{
        type: String,
        default: 'block'
    }
  },
  data() {
    return {
      data1: '',
      data2:'',
      data3:'',
      isHovered: false
    };
  },
  created() {
    EventBus.$on('update-title', (data1,data2,data3) => {
      this.data1 = data1,
      this.data2 = data2
      this.data3 = data3
    });
  },
  
}
</script>

<style lang="scss"  scoped>
.cardone{
    cursor: pointer;
}
.hover-effect {
  background-color: rgb(255, 255, 255);
  transition: background-color 0.3s;
}
.hover-effect.hovered {
  background-color: $yellow;
}
.title{
    font-weight: 500;
    a{
        letter-spacing: 1px;
    }
    p{
       
        width: 10%;
        border-bottom: 3px solid $yellow;
    }
}
.cardone{
    width: 90%;
    margin: 10px;
    height: 160px;
    border: 1px solid rgb(201, 200, 200);
    border-radius: 5px;
}
.size{
    font-size: 35px;
}
button{
  width:150px;
  padding:8px;
  margin-top:18px;
  margin-left:20px;
  border-radius:6px;
  border:1px solid black;
  font-size: 14px;
  font-weight: 600;
}
.coloryellow{
    background: $yellow;
}

@media only screen and (max-width: 576px) {
  .cardone{
    margin: 0;
    width: 100%;
  }
  .title{
 
    p{
       
        width: 60%;
        border-bottom: 3px solid $yellow;
    }
}
}
</style>
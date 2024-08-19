<template>

    
               <div class="p-3 container">   
                <div class="row justify-content-center">
                    <div class="col-12">
                                <div class="pb-2 row justify-content-center">
                                    <div class="title text-center">
                                        <h4>JOIN OUR LOTTERY</h4>
                                        <div class="row justify-content-center">
                                            <p></p>
                                        </div>
                                       
                                    </div>
                                 </div>
                                <div class="d-flex justify-content-center">
                              
                                        <div class="lotterybody">
                                                    <div class="col-8 col-sm-6 col-lg-6">
                                                        <div class="lotteryleft">
                                                            <div class="lorem">
                                                                <a>Lorem Ipsum</a>
                                                                <p>of dream lottery</p>
                                                            </div>
                                                            
                                                        <div class="btnlottery d-sm-block d-lg-block d-none">
                                                                <button>LEARN MORE <a><font-awesome-icon icon="fa-solid fa-arrow-right" /></a></button>
                                                        </div>
                                                        </div>
                                                    </div>
                                            
                                                <div class="col-4  col-sm-6 col-lg-6">
                                                        <div class="lotteryright">
                                                            <div class="bannerlottery">
                                                                <img src="../../assets/images/bannerlottery.png" />
                                                            </div>
                                                            <div class="bannermoney">
                                                                <img src="../../assets/images/asasas 1.png" />
                                                            </div>
                                                            
                                                            
                                                        </div>
                                                </div>
                                      
                                         </div>
                          
                                    
                                   
                                </div>
                              
                        </div>
                </div>              
                       
                                                     
                </div>

             
              
         
   

</template>


<script>
export default {
  name: 'BannerLottery' 

}
</script>

<style lang="scss"  scoped>
.title{
    h4{
        font-size:18px;
        letter-spacing: 1px;
    }
    p{
    width: 10%; 
    text-align: center;
    border-bottom: 3px solid $yellow;
    }
}
.lotterybody{
    height: 200px;
    background-color: $yellow;
    position: relative;
    width: 90%;
    border-radius: 16px;
}
.lotteryleft{
    padding: 24px;
    margin-left: 20px;
    letter-spacing: 0.5px;
    .lorem{
        a{
            font-size: 32px;
            font-weight: 600;
        }
        p{
            font-size: 28px;
            font-weight: 200;
        }
    }
    
}
.btnlottery{
    button{
        width:150px;
        padding:8px;
        border-radius:6px;
        background: $yellow;
        border:1px solid black;
        font-size: 12px;
    }
    a{
        margin: 6px;
    }
}

.bannerlottery{
    position: absolute;
    top: 0;
    right: 0;
    img{
        width: 650px;
    }
   
}

.bannermoney{
    position: absolute;
    bottom:2px;
    right: 10px;
    img{
        width: 430px;
    }
}
@media (max-width: 576px) {
.bannerlottery{
    position: absolute;
    top: 20px;
    right: 0;
    img{
        width: 420px;
    }
   
}

.bannermoney{
    position: absolute;
    top:-70px;
    left: 100px;
    img{
        width: 250px;
    }
}

.lotterybody{
    height: 150px;
    width: 100%;
}
.lotteryleft{
  padding: 0;
  padding-top:18px;
.lorem{
    a{
        font-size: 23px;
        font-weight: 500;
    }
    p{
        font-size:23px ;
    }
    p{
        margin-top: -8px;
    }
}
   
}
.title{
    h4{
        font-size:18px;
        letter-spacing: 1px;
    }
    p{
    width: 30%; 
    text-align: center;
    border-bottom: 4px solid $yellow;
    }
}

}


</style>
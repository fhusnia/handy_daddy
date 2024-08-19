<template>
    <div class="container ">
        <div class="row justify-content-center">
            <div class="ref">
                <div class="pt-5 d-flex justify-content-center flex-wrap">
                    <div class="title">
                        <div class="text-center pb-1"> <a style="font-weight: 500;">FREEZER</a></div>
                        <div class="text-center pb-3"> <a>We proudly provide these services</a></div>
                        <p></p>
                       
                       
                    </div>
                   
                </div>

                <div class="row justify-content-center">
                    <div class="p-3">
                        <div class="bg-white ">
                            <div class="p-4">
                                <div class="d-flex flex-column flex-sm-row justify-content-center">
                                <div class="col-12 col-sm-4">
                                    <div class="imagecol text-center">
                                            <img src="../../assets/images/refrigerator.png"/>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-8 d-flex pt-4 pt-sm-0 justify-content-center align-items-center">
                                    <div class="detail">
                                        <p>Refrigerators are rather complex devices,
                                            and it is possible to determine the exact cause of a breakdown only with the help of
                                            special diagnostic equipment.</p>
                                            <span>-Do not try to find the problem "by touch" </span>
                                        <a></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                                                  
                        </div>
                    </div>
                        
                    
                </div>
                <div class="row justify-content-center">
                        <div class="p-3">
                            <div class="imagebanner">
                                <img src="../../assets/images/refrigeratorbanner.png"/>

                            </div>
                        </div>
                   
                </div>
                <div class="row justify-content-center">
                    <div class="line d-none d-sm-block">
                        <div class="p-5">
                            <img src="../../assets/images/linelottery.jpg"/>
                        </div>
                    </div>
                     
                </div>
                <div class="row justify-content-center d-none d-sm-block">
                        <div class="p-3">
                            <div class="bg-white">
                                <div class="p-4">
                                    <div class=" d-flex flex-column flex-sm-row justify-content-center">
                                        <div class="col-12 col-sm-4 ">
                                            <div class="imagecol2 text-center">
                                                    <img src="../../assets/images/Handyman.jpg"/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-8 pt-3 d-flex justify-content-center align-items-center">
                                            <div class="detail">
                                                <p>It is better to contact Handy Daddy specialists, who have all the necessary tools and 
                                                    impressive experience in repairing refrigerators of various types and brands. In the shortest time possible, 
                                                    our masters will determine the cause of the breakdown and bring your refrigerator to working condition.</p>
                                                    
                                                <a></a>
                                            </div>
                                        </div>
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

export default{
    name:"RefrigeratorMain"
}
</script>

<style lang="scss"  scoped>
.title{
    
  a{
    letter-spacing: 2px;
    font-size: 18px;
  }
    p{
        margin-left:86px;
        width: 40%;
        border-bottom: 3px solid $yellow;
    }
    
}
.imagecol{
    margin-top: 12px;
    width: 280px;
    height: 230px;
    background-color: #ffd633;
    border-radius: 16px;
    img{
        width: 168px;
       

    }
}
.imagecol2{
    margin-top: 12px;
    width: 280px;
    height: 230px;
    background-color: #ffd633;
    border-radius: 16px;
    img{
       width: 270px;
       position: relative;
       bottom: 30px;

    }
}
.detail{
    p{
        text-align: justify;
        font-size: 20px;
        letter-spacing: 1.8px;
        line-height: 1.6;
      
    }
    span{
        padding: 6px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 1px;
        border-bottom: 2px solid  $yellow;
    }
 
}
.imagebanner{
    img{
        width: 100%;

    }
}
.line {

    img{
        width: 1150px;
    }
}

@media only screen and (max-width: 576px) {
    .imagecol{
        img{
            width: 50%;
            height: 34vh;
        }
        width: 100%;
    }
    .imagebanner{
    img{
        width: 100%;
        height: 30vh;

    }
}
}
</style>
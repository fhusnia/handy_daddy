<template>
    <div class="row">
        <div class="col-12 pt-5">
            <div class="card p-0 p-sm-5"  >
                <div class="card-body pt-4">
                
                    <p class="text-center">Was the article</p>
                    <p style="font-weight:500" class="fix text-center">useful to you?</p>
                    <div class="line row justify-content-center">
                        <p></p>
                    </div>
                    <p style="font-size:22px" class="text-center pt-3">Share with friends:</p>
                    <div class="pt-2">
                        <div class=" phone d-flex justify-content-center">
                            <ul class="d-flex gap-4  pt-3 ">
                                
                                    <li><a><font-awesome-icon icon="fa-brands fa-facebook-f" size="lg"  /> </a></li>
                                    <li><a><font-awesome-icon icon="fa-brands fa-linkedin"  size="lg"  /></a></li>
                                    <li><a><font-awesome-icon icon="fa-brands fa-twitter" size="lg" /></a></li>
                                    <li><a><font-awesome-icon icon="fa-brands fa-pinterest-p" size="lg" /></a></li>
                            </ul>
                        </div>
                    </div>
                       
                
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:"BlogSocial"
}
</script>

<style lang="scss" scoped>
.card{
    border-radius: 24px ;
    width: 100%;
    font-size: 24px;
    background: $yellow;
    img{
        width: 40%;
    }
}
.fix{
    margin-top: -20px;
}
.card-body{
   letter-spacing: 2px;
}
.line{
    p{
       
       width: 40%;
       border-bottom: 3px solid white;
       margin-top: -8px;
   }
}
.phone{
    background: white;

    border-radius: 12px;
}
.btn{
    a{
        font-size:20px;
        border-bottom: 1px solid black;
    }
}
li{
    list-style: none;
    padding: 5px;
}
ul{
    padding-left:0;
}

</style>
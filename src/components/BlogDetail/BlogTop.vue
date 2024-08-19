<template>
    <div class="row">
        <div class="col-12">
            <div class="date">
               <ul class="d-flex">
                    <li><a>23 Nov 2022</a></li>
                    <li><a>Share</a></li>
                    <li><a><font-awesome-icon icon="fa-brands fa-facebook-f" size="s"  style="color: #98989c;"/> </a></li>
                    <li><a><font-awesome-icon icon="fa-brands fa-linkedin"  size="s"  style="color: #98989c;"/></a></li>
                    <li><a><font-awesome-icon icon="fa-brands fa-twitter" size="s"  style="color: #98989c;"/></a></li>
                    <li><a><font-awesome-icon icon="fa-brands fa-pinterest-p" size="s"  style="color: #98989c;"/></a></li>
               </ul>
            </div>
        </div>
        <div class="col-12 pb-4 ">
            <div class="text">
                <h3>Top 6 issues With</h3>
                <h2>Dishwashers and Solutions!</h2>
            </div>
           
        </div>
        <div class="col-12">
            <div class="imagecol">
                <img src="../../assets/images/blogdetail.png"/>
            </div>
        </div>
        
    </div>
        
</template>

<script>
export default{
    name:"BlogTop"
}
</script>

<style lang="scss" scoped>
li{
    list-style: none;
    padding: 5px;
    color:rgb(74, 73, 73);
    font-size: 14px;
}
ul{
    padding-left:0;
}

.text{
    letter-spacing: 1px;
    h2{
        margin-top: -8px;
        font-weight: 600;
        font-size: 22px;
    }
}
.imagecol{
    img{
        width: 95%;
    }
}
</style>
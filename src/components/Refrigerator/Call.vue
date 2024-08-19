<template>
    <div class="pb-3 pt-4 d-none d-sm-block">
        <div class="call ">
      
             
      <div class=" w-100 d-flex justify-content-between align-items-center">
          <div class="col-4">
              <div class="">
                  <img src="../../assets/images/linerefrigerator.png"/>

              </div>

          </div>
          <div class="col-4 ">
              <div class="calldetail p-4">
                  <p class="text-center">Call us now to schedule</p>
                  <span>a refrigerator repair +587 000 000 000!</span>
              </div>
          </div>
            
          <div class="col-4">
              <div class="d-flex justify-content-end">
                  <img src="../../assets/images/linerefrigerator.png"/>

              </div>

          </div>
      </div>




</div>
    </div>
   
</template>

<script>
export default{
    name:"CallRef"
}
</script>

<style lang="scss"  scoped>
.call{
    background: #231F20;;
}
.schedule{
    width: 100%;
}
.colimage{
    width:900px;

}
.calldetail{
    font-size: 18px;
    color: $yellow;
    p{
        margin-bottom: 0;
        line-height: 2;
        letter-spacing: 2px;
    }
    span{
        line-height: 1;
        letter-spacing: 1px;
        margin-left: 26px;
    }
}
</style>
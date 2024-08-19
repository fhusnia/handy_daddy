<template>
    <div class="row justify-content-start">
        <div class="p-0 p-sm-2">
            <div class="col-12">
                <div class="d-flex flex-column gap-3 pt-4">
                    <div class="card  ">
                        <div class="card-body d-flex align-items-center">
                            <div class="col-4">
                                <img src="../../assets/images/problems.png"/>
                            </div>
                            <div class="col-8">
                                <div class="text ">
                                    <p>Common Freezer Problems</p>
                                    <p class="fix">Solutions at Glance</p>
                                </div>
                            </div>
                    
                    </div>
                </div>
                <div class="card ">
                    <div class="card-body d-flex align-items-center">
                        <div class="col-4">
                            <img src="../../assets/images/problems.png"/>
                        </div>
                        <div class="col-8">
                            <div class="text ">
                                <p>Common Freezer Problems</p>
                                <p class="fix">Solutions at Glance</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div class="card ">
                    <div class="card-body d-flex align-items-center">
                        <div class="col-4">
                            <img src="../../assets/images/problems.png"/>
                        </div>
                        <div class="col-8">
                            <div class="text ">
                                <p>Common Freezer Problems</p>
                                <p class="fix">Solutions at Glance</p>
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
    name:"ProblemS"
}
</script>

<style lang="scss" scoped>
.card{
    border: none;
    width: 100%s;
    background: #EEEEEE;
    font-size: 18px;
    border-radius: 18px;
}
.text{
    font-weight: 500;
}
.fix{
    margin-top: -14px;
}
@media only screen and (max-width: 576px) {
    .card{
        width: 100%;
        font-size: 15px;
    }
}
</style>
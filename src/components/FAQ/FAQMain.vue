<template>

        <div class="container">
            <div class="row flex-wrap justify-content-center">
                <div class="p-0 p-sm-4 ">
                    <div class="col-12 ">
                        <div class="title p-3 text-center text-sm-start">
                            <h4>About services</h4>
                                <div class="d-flex d-block d-sm-none  justify-content-center">
                                    <p></p>
                                </div>
                                <p class="d-none d-sm-block"></p>
                        
                        
                        </div>
                        <div class="col-12 p-2 ">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        What appliances and systems are repaired?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body ">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        When can i request service?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        What appliances and systems are repaired?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
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
    name:"FAQMain"
}

</script>

<style lang="scss" scoped>
.title{
    p{
        width: 13%;
        border-bottom:3px solid $yellow ;
    }
}
.accordion-button{
    background: rgb(245, 244, 244) !important;
}
.accordion-body{
    background: rgb(245, 244, 244) !important;

}
.accordion-button:focus {
    box-shadow: none !important;
}
@media only screen and (max-width: 576px) {
    .title{
        p{
            width: 40%;
            border-bottom:3px solid $yellow ;
        }
}
}
</style>
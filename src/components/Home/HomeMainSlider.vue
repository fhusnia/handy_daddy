<template>
  <div>     


  <div class="carouselheight ">
    

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner" @click="closeModal">
                    <div  class="carousel-item active" >
                      
                        <img src="../../assets/images/repairman.jpg" class="d-block w-100" alt="...">
                    
                      <div class=" carousel-caption overlay  d-flex flex-column">
                        <div class="headtitle">
                          <h1>WE’LL <span>FIX IT</span></h1>
                        </div>
                        <div class="headdetail">
                          <p>Liquam turpis ligula velit augue dictum quam libero.Mattis elementum diam at turpis lectus maecenas.</p>
                        </div>
                      
                          <div class="headbtn d-flex flex-column flex-sm-row flex-lg-row gap-3">
                            
                              <div class="btn1">
                                <button>Call Now</button>
                              </div>
                              <div class="position-relative btn2">
                                <button  @click.stop="toggleModal" >Order Now</button>

                                <div class="row justify-content-center justify-sm-content-end justify-lg-content-end ">
                                  

                                    <div class="col-4">
                                      <transition name="modal-slide" type="animation">
                                        <div v-show="show"  @click.stop class=" modal1 ">
                                          <div class="modal-content">
                                            <div class="modal-header p-3">
                                              <a>We'll get back to you in 30 minutes!</a>
                                            </div>
                                            <form @submit.prevent="handleSubmit" class="modal-body1">
                                              <div class="col">
                                                <input v-model="form.fullName"
                                                :style="{ borderColor: errors.fullName ? 'red' : '' }" 
                                                type="text" placeholder="Full Name"/>
                                              </div>
                                              <div class="col">
                                                <input    v-model="form.phone"
                                                :style="{ borderColor: errors.phone ? 'red' : '' }"
                                                 type="phone" placeholder="(+994)"/>
                                              </div>
                                              <div class="col">
                                                <input v-model="form.address"
                                                :style="{ borderColor: errors.address ? 'red' : '' }"
                                                type="text" placeholder="Adresses"/>
                                              </div>
                                            
                                              <div class="d-flex justify-content-center">
                                                <div class="col3">
                                                  <select   id="date"
                                                    v-model="form.date"
                                                    :style="{ borderColor: errors.date ? 'red' : '' }">
                                                  <option><a>09:00 - 12:00 AM</a></option>
                                                  <option >07:00 - 10:00 AM</option>
                                                  <option>08:00 - 11:00 AM</option>
                                                  <option >09:00 - 12:00 AM</option>
                                                </select>

                                                </div>
                                                <div class="col3">
                                                  <input  v-model="form.dateInput"
                                                  :style="{ borderColor: errors.dateInput ? 'red' : '' }"
                                                  type="date"/>

                                                </div>
                                                
                                              </div>
                                              <div class="col">
                                                <input  v-model="form.applianceType"
                                                :style="{ borderColor: errors.applianceType ? 'red' : '' }"
                                                 type="text" placeholder="Appliance Type"/>
                                              </div>
                                              <div class="col ">
                                                <button type="submit">Submit</button>
                                              </div>
                                            </form>
                                          </div>
                                    </div>
                                      </transition>
                                  
                                    </div>

                                </div>
                              
                            
                            </div>
                            
                          </div>  
                        
                    </div>
                
            
                    </div>
                    
                    <div class="carousel-item">
                      <img src="../../assets/images/repairman2.jpg" class="d-block w-100" alt="...">
                      <div class=" overlay carousel-caption d-none d-md-block">
                        
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="../../assets/images/repairman3.jpg" class="d-block w-100" alt="...">
                      <div class=" overlay carousel-caption d-none d-md-block">
                        
                      </div>
                    </div>

                      
          
              </div>
          
              
          
    

        </div>
    
  </div>


      
                 
  </div>
 
 
</template>
<script>

  export default {
    name: 'MainSlider',
    data() {
      return{
        show: false,
        form: {
        fullName: '',
        phone: '',
        address: '',
        date: '',
        dateInput: '',
        applianceType: ''
      },
      errors: {}
      }
      
    },
    methods: {
      toggleModal() {
      this.show = !this.show;
      console.log(this.show)
    },
      closeModal() {
        this.show = false;
        console.log(this.show)
      },
      handleSubmit() {
        this.errors = this.validateForm();
        if (Object.keys(this.errors).length === 0) {
          alert('Form successfully ');
        }
      },
        validateForm() {
        const errors = {};
        for (const key in this.form) {
          if (!this.form[key].trim()) {
            errors[key] = true;
          }
        }
        return errors;
    }
    }

  }
</script>

<style lang="scss"  scoped>

input[type="date"] {
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

.carouselheight img{
  height: 600px;
  object-fit: cover;

}
.carouselheight{
  background-color: black;
  z-index: 1;
}
.carousel-inner{
  cursor: pointer;
}
.overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(2, 2, 2, 0.7); 
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
.headbtn{
  padding:12px;
  a{
    text-align: center;
  }
  .btn1 button{
    text-align: center;
    padding:7px;
    border-radius: 7px;
    background-color: white;
    color:black;
    width:180px;
    border:none;
    font-weight: 500;
  }
  .btn2 button{
    text-align: center;
    padding:7px;
    border-radius: 7px;
    background-color: $yellow;
    width:180px;
    border:none;
    font-weight: 500;

  }

}
.headtitle{
  h1{
    font-size: 80px;
  }
  span{
    color: $yellow;
  }
}
.headdetail{
  p{
    letter-spacing: 1px;
  }
  padding-bottom:16px;
}
.modal1{
  background-color: white;
  height: 470px;
  width: 380px;
  position: absolute;
  border-radius:6px;
  z-index: 3;
  left: 0;
  top: 50px;
}
.model-content{
  position: absolute;
  z-index: 3;
}
.modal-header{
  color:black;
  a{
    width: 100%;
    text-align:center ;
  }
}


.col input{
  width: 317px;
  padding:12px;
  margin:8px;
  border-radius:6px;
  border:1px solid #a6a6a6;
}

.carousel-inner{
  overflow: unset !important;
}
.col3 input{
  width:150px;
  padding: 12px;
  margin:8px;
  border-radius:6px;
  border:1px solid #a6a6a6;

}
.col3 select{
  width:150px;
  padding:13.4px;
  margin:8px;
  border-radius:6px;
  border:1px solid #a6a6a6;
  option{ 
    a{
      color: #999 !important; 
     }
   
  }
  
}
input::placeholder {
    color: #999; 
    font-size: 14px;
}
.col button{
  width: 317px !important;
  padding:13px;
  margin:16px;
}
@media (max-width: 576px) {
  .headtitle{
    h1{
      font-size: 42px;
    }
    padding-bottom: 12px;
  }
.headdetail{
  width: 300px;
  font-size: 14px;
}
.headbtn{
.btn1 {
  button{
    width: 270px;
    padding: 12px;
  }
}
.btn2{
  button{
    width: 270px;
    padding: 12px;
  }
}
}
.modal1{
  width: 350px;
  left:-42px;
}



}
</style>

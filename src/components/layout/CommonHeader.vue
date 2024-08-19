<template>
    <div class="cmnheader">
        <div class="cmnback d-flex align-items-center">
                <div class="container">
                
                    <div class="row justify-content-center align-items-center">
                      <div class="content">
                            
                            <div class="headtitle d-flex justify-content-center" v-html="htmlContent">
                                
                            </div>
                          
                    
                            <div class="headbtn d-none d-sm-block ">
                                <div class="d-flex justify-content-center " >
                                  <div class="btn1 m-2">
                                          <button>Call Now</button>
                                        </div>
                                        <div class="position-relative btn2 m-2">
                                          <button  @click="show = !show" >Order Now</button>

                                          <div class="d-flex justify-content-end ">
                                            

                                              <div class="col-4">
                                                <transition name="modal-slide" type="animation">
                                                  <div v-show="show" class=" modal1 ">
                                                    <div class="modal-content p-3">
                                                      <div class="modal-header p-2 ">
                                                        <a>We'll get back to you in 30 minutes!</a>
                                                      </div>
                                                      <form @submit.prevent="handleSubmit" class="modal-body1 p-2">
                                                        <div class="col">
                                                          <input
                                                            v-model="form.fullName" 
                                                            :style="{ borderColor: errors.fullName ? 'red' : '' }" 
                                                            type="text" 
                                                            placeholder="Full Name"/>
                                                        </div>
                                                        <div class="col">
                                                          <input 
                                                          v-model="form.phone"
                                                           :style="{ borderColor: errors.phone ? 'red' : '' }"
                                                            type="phone" 
                                                            placeholder="(+994)"/>
                                                        </div>
                                                        <div class="col">
                                                          <input v-model="form.address" 
                                                          :style="{ borderColor: errors.address ? 'red' : '' }" 
                                                          type="text"
                                                           placeholder="Adresses"/>
                                                        </div>
                                                      
                                                        <div class="d-flex justify-content-center">
                                                          <div class="col3">
                                                            <select id="date" v-model="form.date" :style="{ borderColor: errors.date ? 'red' : '' }">
                                                            <option><a>09:00 - 12:00 AM</a></option>
                                                            <option >07:00 - 10:00 AM</option>
                                                            <option>08:00 - 11:00 AM</option>
                                                            <option >09:00 - 12:00 AM</option>
                                                          </select>

                                                          </div>
                                                          <div class="col3">
                                                            <input 
                                                             v-model="form.dateInput" 
                                                             :style="{ borderColor: errors.dateInput ? 'red' : '' }"
                                                              type="date"/>

                                                          </div>
                                                          
                                                        </div>
                                                        <div class="col">
                                                          <input
                                                           v-model="form.applianceType" 
                                                           :style="{ borderColor: errors.applianceType ? 'red' : '' }"  
                                                            type="text" placeholder="Appliance Type"/>
                                                        </div>
                                                        <div class="col pt-2 pb-3 d-flex justify-content-center " >
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
                    </div>
                  </div>   
               </div>
          
        </div>
       
 
</template>

<script>

export default{
    name:"CommonHeader",
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
    props: {
      htmlContent: {
        type: String,
        required: true
      }

    },
    methods: {

      handleSubmit() {
        this.errors = this.validateForm();
        if (Object.keys(this.errors).length === 0) {
          alert('Form successfully');
        }
        console.log('ss')
      },
      validateForm() {
        const errors = {};
        for (const key in this.form) {
          if (!this.form[key].trim()) {
            errors[key] = true;
          }
        }
        console.log('aaa')
        return errors;
      }
    }
    

}
</script>

<style lang="scss"  scoped>
.cmnheader{
    height: 400px;
    background-image: url('../../assets/images/repairman3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
.cmnback{
    background-color: rgba(2, 2, 2, 0.7); 
    height: 400px;
}

input[type="date"] {
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
} 
.headtitle{
    h1{
        font-size: 60px ;
        color: white;
    }
    span{
        color:#ffd633;
    }
}

.headbtn{
  padding:12px;
  a{
    text-align: center;
  }
.btn1 button{
    text-align: center;
    padding:7px;
    border-radius: 3px;
    background-color: white;
    color:black;
    width:180px;
    border:none;
  }
.btn2 button{
    text-align: center;
    padding:7px;
    border-radius: 3px;
    background-color:#ffd633;
    width:180px;
    border:none;
  }

}
.headtitle{
  h1{
    font-size: 80px;
  }
  span{
    color:#ffd633;
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
  left: 0%;
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
  
  
}
input::placeholder {
    color: #999; 
    font-size: 14px;
}
.col button{
  width: 330px !important;
  padding:13px;
  margin:9px;
}
</style>
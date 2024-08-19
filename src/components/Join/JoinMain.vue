<template>

        <div class="container">
            <div class=" p-sm-3 p-0 pt-5 pb-5">
                <div class="row flex-wrap justify-content-center">
                        <div class="col-12">                
                            <div class="d-flex justify-content-center">
                                    <div class="title p-4 ">
                                        <div class="pb-2">
                                            <a>FILL AND JOIN US</a>                            
                                        </div>                      
                                    <p></p>
                                </div>
                            </div>            
                        </div>
                        <div class="col-12">
                            
                            <div class="d-flex justify-content-center ">
                                <form class="form p-4">
                                    <div class="row inpt justify-content-center">
                                        <div class="col-12 col-sm-6">
                                            <label>Full Name</label>
                                            <br>                                  
                                            <input placeholder="Name SurName"/>                                   
                                        </div>
                                        <div class="col-12 col-sm-6">  
                                            <label for="inputState" class="form-label">Select Field</label>
                                            <select id="inputState" class="form-select">
                                                <option selected>Choose...</option>
                                                <option>Home Appliances</option>
                                                <option>Plumber</option>

                                            </select>
                                    
                                        </div>
                                        
                                        
                                    </div>
                                    <div class="row inpt justify-content-center">
                                        <div class="col-12 col-sm-6">
                                            <label>Phone</label>
                                            <br>                                  
                                            <input placeholder="(+994)"/>                                   
                                        </div>
                                        <div class="col-12 col-sm-6">  
                                            <label>Email</label> 
                                            <br>                                  
                                            <input placeholder="example@gmail.com"/>                                   
                                        </div>
                                        
                                        
                                    </div>
                                    <div class="row p-2 justify-content-center">
                                        <div class="col-12">
                                            <div class="message">  
                                                <label>Your Message</label> 
                                                <br>
                                                <textarea placeholder="Write your message"></textarea>                             
                                            </div>
                                        </div>
                                    
                                    
                                    </div>
                         
                                 
                                    <div class="p-2 row justify-content-center">
                                      
                                            <button>SEND</button>
                                    
                                           

                                        
                                    </div>
                                </form>
                            </div>
                            
                
                        </div>
                </div>
            </div>
          
        </div>
 
</template>


<script>
export default{
    name:"JoinMain"
}
</script>


<style lang="scss" scoped>
.uploadfile{
    input{
        display: none;
    }
}
select{ 
    margin-left:6px ;
        width: 96%;
        padding: 10px;
        border: 1px solid #8D8D8D73;
}
.title{
    
    a{
        letter-spacing: 1px;
        font-weight: 500;
    }
    p{
        margin-left: 14px;
        width: 80%;
        border-bottom: 3px solid $yellow;
    }
}
.form{
    width: 80%;
    background-color: white;
    border: 1px solid #8D8D8D73; 
    border-radius: 10px;  

}
.title{
    font-size: 40px;
   p{
    font-weight: 500;
    margin-top: -12px;
   }
   .line{

        width: 50%;
        border-bottom: 3px solid $yellow;
        margin-bottom:30px;
    
   }
   
  
}

.inpt{

    input{
        width: 96%;
        margin: 8px;
        padding: 10px;
        border: 1px solid #8D8D8D73;
        border-radius: 6px;  
        
      
    }
    label{
        padding: 6px;
    }
    input::placeholder {
    color: gray;
    font-size: 14px;

    }
}
input:focus, button:focus {
    outline: none;
    background-color: rgb(252, 252, 252);
}

.message{
  textarea{
    width: 100%;
    height: 250px;
    border: 1px solid #8D8D8D73;  
    border-radius: 6px;  
    resize: none;
 
  }
   label{
        padding-bottom: 14px;
        padding-top: 8px;
    }
}
button{
        width:30%;
        padding:7px;
        border-radius:6px;
        background: $yellow;
        border:1px solid  #8d8d8d73;
        font-size: 15px;
        color: #000000;
        font-weight: 600;
        
}
textarea::placeholder {
        color: gray;
        font-size: 15px;
        padding:15px;
}

@media only screen and (max-width: 576px) {
    form{
        width: 100% !important;
    }
    button{
        width: 95%;
    }
}
</style>
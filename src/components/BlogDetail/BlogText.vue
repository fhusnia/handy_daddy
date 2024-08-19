<template>
    <div class="row pt-5 pb-5">
        <div class="col-12 pb-4">
            <div class="text">
             
                <h3>It’s time to Beat the heat</h3>
                <h2>this summer with save-on bills!</h2>
        
            </div>
        </div>
        <div class="col-12 d-flex justify-content-start">
            <div class="detail">
                <p>Power stays one of the critical challenges of fortune. Businesses require to strike the balance between working efficiency and endurable development. With soaring energy prices and the improved absence of biological resources, identifying energy efficiencies – from intending to manufacturing to processes – makes reasonable industry insight. Summer pulling about means warmer temperatures are on the horizon. Whether you are even operating from home, and like to maintain cool in your house or office, or you are just glancing for ways to preserve money, energy efficiency can benefit.</p>
                <p>Heat waves and power outages have been plaguing the nation in recent weeks and temperatures are expected to rise higher than usual all over the world due to increasing population. Besides being an ecological tragedy, these hot summer daytimes can likewise be a disaster for your pocket. By far, the greatest part of your power bill arrives from your home’s heating and cooling appliances. With your AC racing all summer protracted, you can anticipate some of your most elevated electric statements of the year to come between June and October.</p>
                <a>1. Cook wisely</a>
                <p>Rather than operating the oven or stovetop, you can preserve cooling your house by decreasing the heat in your residence. Cook outside as much as feasible. Not only does this preserve your home from overheating, but it also prevents your air conditioner from operating over time.</p>
                <a>2. Soak your laundry in cold water whenever practicable</a>
                <p>Relying on the clothing and local water rate, you may be competent to do laundry solely with cold water using cold dampness detergents. An intermediate household with an electric water heater can preserve $400 annually.</p>
                <a>3. Keep a consistent temperature in the refrigerator</a>
                <p>Place the temperature of the fridge between 36 degrees and 38 degrees for maximum effectiveness. The freezer should be maintained at 15 degrees at least.</p>
                <a>4. Accommodate your water heater to a more inferior temperature</a>
                <p>You can efficiently lessen your moisture heater’s temperature to 120 degrees to conserve energy and cash. Question your plumber for service so you can commence learning savings!</p>
                <a>5. Utilize light appliances that you require</a>
                <p>A bare light bulb can warm a space.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'BlogText'
}
</script>

<style lang="scss" scoped>

.text{
    letter-spacing: 1px;
    h2{
   
        font-weight: 600;
    }
    h3{
        font-weight: 300;
    }
   
}
.detail{
    width: 95%;
    p{
        text-align: justify;
        letter-spacing: 1px;
        line-height: 2;
    }
    a{
        color: black;
        font-weight: bold;
    }
    span{
        font-weight: 400;
    }
}
@media only screen and (max-width: 576px) {
    text{
        h2{
            font-size: 15px;
            font-weight: none;
        }
        h3{
            font-size: 18px;
            
        }
    }
}
</style>
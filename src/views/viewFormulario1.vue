<template>
    <div>
        <compBar/>
        <div class="form-group">
            <label>Your Email Address</label>
            <input type="text" class="form-control">
            <hr>
            <label for="satisfaction">Satisfaction (10 for best, 1 for worst)</label>
            <input min="1" max="10" type="number" id="satisfaction" class="form-control">
            <hr>
            <label for="message">Your Message</label>
            <textarea id="message" rows="1"
              class="form-control"></textarea>
              <hr>
              <label for="sendspecial">
            <input type="checkbox" id="sendspecial" value="sendSpecial"> I Want Today's Special
            </label>
            <br>
            <label for="sendCoupons">
                <input type="checkbox" id="sendcoupons" value="sendCoupons"> Send Me Monthly Coupons
            </label>
            <hr>
        </div>
    </div>
</template>

<script>
import compBar from '../components/compBar.vue';
  export default {
    data: () => ({
            
    }),
    methods: {
        
    },
     components: {
    compBar,
    },
  }
</script>
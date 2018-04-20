var app = new Vue({
  el: '#app',
  data: {
    margs: 1,
    tequila: {
      scale: 1.5,
    },
    cointreau: {
      scale: 1
    },
    lime: {
      scale: 0.75
    },

//computed properties for the actual drinks
  },
  methods: {
    update: function(){
      console.log(this.margs);
    }
  }
})

 

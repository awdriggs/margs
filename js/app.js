var app = new Vue({
      el: '#app',
      data: {
        margs: 0,
        ingredients: [{
            name: 'tequila',
            scale: 1.5,
            display: ""
          }, {
            name: 'cointreau',
            scale: 1,
            display: ""
          }, {
            name: 'lime',
            scale: 0.75,
            display: ""
          }]
          //computed properties for the actual drinks
      },
      methods: {
        update: function() {
            for (let item of this.ingredients) {
              var total = this.margs * item.scale
                //console.log(item.name, total);
              if (total >= 8) {
                var cups = total / 8;
                var whole = Math.trunc(cups);
                var part = Fraction(cups % 1);
                item.display = `${whole ? `${whole}` : ``} ${whole && part.n ? ` and` : ``} ${part.n ? ` ${part.n}/${part.d}` : `` } ${cups > 1 ? `cups`:`cup`}`;
           } else {
              var whole = Math.trunc(total);
              var part = Fraction(total % 1);
              item.display = `${whole ? `${whole}` : ``} ${whole && part.n ? ` and` : ``} ${part.n ? ` ${part.n}/${part.d}` : `` } ${total > 1 ? `ounces`:`ounce`}`;
          }
        }
      } //end of update 
    },
})

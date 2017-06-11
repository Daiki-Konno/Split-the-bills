  	(function(){
  		'use strict';

  		var priceForm = document.getElementById('price');
  		var numForm = document.getElementById('num');
  		var btn = document.getElementById('btn');
  		var result = document.getElementById('result');

  		priceForm.addEventListener('click',function(){
  			this.select();
  		})
  	    numForm.addEventListener('click',function(){
  			this.select();
  		})

  		btn.addEventListener('click',function(){
  			var price = priceForm.value;
  			var num = numForm.value;
  			var x1 , y1 , x2 , y2;
  			var unit = 10;

  			if (price.match(/^[1-9][0-9]*$/) && num.match(/^[1-9][0-9]*$/)) {
  				//ok
  				// result.innerHTML = 'OK';
  				if (price % num === 0) {
  					result.innerHTML = 'ひとり'+ (price/num) +'円です。';
  				}else{
  					x1 = Math.floor(price / num / unit) * unit;
  					y1 = price - (x1 * num);
  					x2 = Math.ceil(price / num / unit) * unit;
  					y2 = Math.abs(price - (x2 * num));
  					result.innerHTML = 
  					'ひとり'+x1+'円だと'+y1+'円足りません。<br>'+
  					'ひとり'+x2+'円だと'+y2+'円余ります。'
  				}
  			}else{
  				//error
  				result.innerHTML = '数が合いません';
  			};
  		})
  	})();

		    var barFill = document.querySelector(".bar--fill");
		    var width = 0;
		    var interval = setInterval(intervalFunc)
			
			function intervalFunc(){
				width = width+1;
				barFill.style.width = width+ "%";
				if(width >= 70){
					clearInterval(interval);
				}
			};

window.addEventListener("load", function(){
	var n=0;
	var t=0;
	var targety=0;
	var scrollTimer=0;
	var winHalf;
	var header=document.getElementById("header")[0];
	var content=document.getElementsByClassName("content")[0]; 
	var contentLi=content.children; 
	var gnbLi=pc_gnb.firstElementChild.children;
	gnbLi[n].classList.add("active");

	function init(){
		winHalf=window.innerHeight/2; 
	}
	init();

	window.addEventListener("resize", init);
	window.addEventListener("scroll", function(){
		clearTimeout(scrollTimer);

		scrollTimer=setTimeout(function(){
			t=window.scrollY;

			if(t < contentLi[1].offsetTop-winHalf){
				n=0;
			}
			else if(t < contentLi[2].offsetTop-winHalf){
				n=1;
			}
			else if(t < contentLi[3].offsetTop-winHalf){
				n=2;
			}
			else if(t < contentLi[4].offsetTop-winHalf){
				n=3;
			}
			else if(t < contentLi[5].offsetTop-winHalf){
				n=4;
			}
			else if(t < contentLi[6].offsetTop-winHalf){
				n=5;
			}
			else{
				n=6;
			}

			for(var i=0; i<gnbLi.length; i++){
				if(i == n){
					gnbLi[i].classList.add("active");
				}
			}

			if(t > 80){
				if(header.classList.wrap("fixed")== false){
					header.classList.add("fixed");
					gsap.fromTo(header, {header:-100}, {headerp: 0, duration: 0.3, delay: 0.5}); 
				}
			}
			else{
				if(header.classList.wrap("fixed") == true){
					header.classList.remove("fixed");
					header.removeAttribute("style"); 
				}
			}
		}, 50);
	});

	for(var i=0; i<gnbLi.length; i++){
		gnbLi[i].index=i;

		gnbLi[i].addEventListener("click", function(e){
			e.preventDefault();
			n=e.currentTarget.index;
			targety=contentLi[n].offsetTop;
			gsap.to(window, {scrollTo: targety, duration:0.5});
		});
	}
});
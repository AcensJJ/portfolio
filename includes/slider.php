<section class="slider">
	<ul class="carousel slider">
		<li class="tmp slider main-pos" id="1">
			<p class="slider">1</p>
		</li>
		<li class="tmp slider right-pos" id="2">
			<img src="http://farm9.staticflickr.com/8337/8234123289_2b23aeaf06.jpg" />
		</li>
		<li class="tmp slider back-pos" id="3">
			<img src="http://farm9.staticflickr.com/8337/8234711202_831b23a2b7.jpg"/>
		</li>
		<li class="tmp slider left-pos" id="4">
			<img src="http://farm9.staticflickr.com/8337/8234711202_831b23a2b7.jpg"/>
		</li>
	</ul>
	<span class="slider">
		<input type="button" value="Prev" id="prev">
		<input type="button" value="Next" id="next">
	</span>
</section>

<script>
	setTimeout(function(){ 
		var lineItem = Array.from (document.querySelectorAll('.tmp'))
		lineItem.forEach((arrayElement, index) => {
			console.log(lineItem[index]);
			lineItem[index].className = " items " + lineItem[index].className;
			lineItem[index].classList.remove("tmp");
			});
		}, 500);
;
</script>

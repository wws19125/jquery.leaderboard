#jQuery Leaderboard
	A plugin to generate simple leaderboard tables.

##Getting Started

###link

```html
 <link href="leaderboard/jquery.leaderboard-1.0.css" rel="stylesheet" media="screen">  
 <script src="js/jquery-1.7.2.min.js"></script>  
 <script src="js/jquery.tinysort.min.js"></script>  
 <script src="../leaderboard/jquery.leaderboard-1.0.min.js"></script>  
```

###markup

```html
 <div class="leaderboard">
	<h4>Product Sales</h4>
	<ul>
		<li class="title">Product A Sales</li>
		<li class="rank"></li>
		
		<li data-rel="US" data-value="845">
			<span class="name">United States</span>
		</li>
		<!--more data-->
	</ul>
	<ul>
		<li class="title">Product B Sales</li>
		<li class="rank"></li>

		<li data-rel="US" data-value="485">
			<span class="name">United States</span>
		</li>
		<!--more data-->
	</ul>	
	<div class="total"></div>
 </div>
```

###javascript

```js
$(document).ready(function() { 
	var lb = $(".leaderboard").jqleaderboard({
		// options
	});

	lb_object = lb.data("leaderboard");
	lb_object.leaderboard_highlight("US").leaderboard_select("CA");
});
```

##Requirements
* [jQuery](http://jquery.com/)
* [TinySort](https://github.com/Sjeiti/TinySort)

##Special Thanks
* jQuery
* TinySort
* Twitter Bootstrap

##License
* Copyright 2013
* Released under the MIT license
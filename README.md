#jQuery Leaderboard
A plugin to generate simple leaderboard tables.

##Getting Started

###link

```
 <link href="../leaderboard/jquery.leaderboard-1.0.css" rel="stylesheet" media="screen">
 <script src="js/jquery-1.7.2.min.js"></script>
 <script src="js/jquery.tinysort.min.js"></script>
 <script src="leaderboard/jquery.leaderboard-1.0.js"></script>
```

###markup

```
 <div class="leaderboard">
	<h4>Product Sales</h4>
	<ul>
		<li class="title">Product A Sales</li>
		<li class="rank"></li>
		<li data-rel="US" data-value="845">
			<span class="name">United States</span>
		</li>
	</ul>
	<ul>
		<li class="title">Product B Sales</li>
		<li class="rank"></li>

		<li data-rel="US" data-value="485">
			<span class="name">United States</span>
		</li>
	<div class="total"></div>
 </div>
```

###javascript

```
$(document).ready(function() { 
	$(".leaderboard").jqleaderboard({
		// options
	});
});
```

##Requirements
1. [jQuery](http://jquery.com/)
2. [TinySort](https://github.com/Sjeiti/TinySort)

#Special Thanks
1. jQuery
2. TinySort
3. Twitter Bootstrap

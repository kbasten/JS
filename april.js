jQuery(document).ready(function(){
	// array of words with their replacements
	var words = {

		"Awesome": 	"Awful",
		"Amazing": 	"Awful",
		"Nice": 	"Strange",
		"April": 	"January",
		"Fools": 	"Genius",
		"Day": 		"Year",
		"Prank": 	"filibuster",
		
	};
			
	var w = {};
	
	/**
	 *	Anti-cheat fixes v0.1 ;)
	 *	Matches all words with spacers as well, ie. 'ama_zing' and 'ama.zing'
	 */
	for (var s in words){
		var sp = s.split("");
		var sw = "";
		
		for(var i = 0; i < sp.length - 1; i++){
			sw += sp[i] + "[.,_]?"; 
		}
		sw += sp[sp.length - 1];
		w[sw] = words[s];
	}
	
	/**
	 *	Replace the words, only search in <div class="post"></div>
	 *	Create a Regexp for case-insensitive, global, multiline matching
	 */
	jQuery(".post").each(function(){				
		for (var s in w){
			var r = new RegExp(s, "gmi");
			jQuery(this).html((jQuery(this).html()).replace(r, w[s]));
		}
	});
});
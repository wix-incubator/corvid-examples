const splitter = '<p style="font-size:9px; line-height:1.6em"><span style="color:#EFF3F6"><span style="font-size:9px">'+
  '<span style="background-color:#EFF3F6">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'+
  'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span></span></span></p>';
$w.onReady(() => {
	$w("#recipesDataset").onReady(() => {
		$w("#recipesDataset").getItems(0, 50)
			.then(({items}) => {
				let itemTexts = items.map((item) => {
					let title = item.title;
					let brief = makeBrief(item.personalTake, 100);
					var link = item["link-recipes-title"];
					
					let itemText = `<p class="p1" style="font-size:16px; line-height:1.6em; margin-left:40px">&nbsp;</p>
<p class="p1" style="font-size:16px; line-height:1.6em; margin-left:40px"><span style="font-size:16px">
<span style="letter-spacing:0.1em"><span style="font-family:cinzel,serif"><a href="${link}">${title}</a></span></span></span></p>
<p style="line-height:1.6em; margin-left:40px"><a href="${link}">${brief}</a></p>
<p style="line-height:1.6em; margin-left:40px">&nbsp;</span></p>`;
					return itemText; 
				});
				$w("#textIndex").html = itemTexts.join(splitter);
			});
	});
});

function makeBrief(about, breakFrom) {
	if (!about)
		return "";
	var regex = /(<([^>]+)>)/ig;
	var plainText = about.replace(regex, "");
	var dotPos = plainText.indexOf('.', breakFrom);
	var exclamationPos = plainText.indexOf('!', breakFrom);
	var wordBreak = plainText.indexOf(" ", breakFrom);
	if (dotPos < 0) dotPos = 500;
	if (exclamationPos < 0) exclamationPos = 500;
	if (wordBreak < 0) wordBreak = 500;
	var lineEnd = Math.min(Math.min(dotPos, exclamationPos), wordBreak);
	if (lineEnd !== 500)
		return plainText.substring(0, lineEnd) + "...";
	else
		return plainText;
}

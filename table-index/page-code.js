export function dynamicDataset_onReady(event) {
	let foodistaLink = $w('#dynamicDataset').getCurrentItem().linkFromFoodista;
	$w('#foodistaCredit').html = `<p style="font-size:10px; line-height:1.2em; text-align:center"><span style="letter-spacing:0em">
	  <span style="font-size:10px"><span class="color_11"><span style="font-weight:bold">
	  Recipe originally published by <span style="font-family:avenir-lt-w01_85-heavy1475544,sans-serif"><a href="${foodistaLink}" 
	  target="_blank">Foodista.com</a></span></span></span></span></span></p>`;
}

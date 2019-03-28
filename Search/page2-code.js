

import wixData from "wix-data";

$w.onReady(() => {
  loadContinents();
});

let lastFilterTitle;
let lastFilterContinent;
let debounceTimer;
export function iTitle_keyPress(event, $w) {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    debounceTimer = undefined;
  }
  debounceTimer = setTimeout(() => {
    filter($w('#iTitle').value, lastFilterContinent);  
  }, 500);
}

export function iContinent_change(event, $w) {
	filter(lastFilterTitle, $w('#iContinent').value);
}

function filter(title, continent) {
  if (lastFilterTitle !== title || lastFilterContinent !== continent) {
    let newFilter = wixData.filter();
    if (title)
      newFilter = newFilter.contains('articleTitle', title);
    if (continent)
      newFilter = newFilter.contains('continent', continent);
    $w('#dataset1').setFilter(newFilter);		
    lastFilterTitle = title; 
    lastFilterContinent = continent;
  }
}

function loadContinents() {
  wixData.query('Continents')
	  .find()
	  .then(res => {
	  	let options = [{"value": '', "label": 'All Continents'}];
	  	options.push(...res.items.map(continent => {
	  		return {"value": continent.title, "label": continent.title};
	  	}));
	  	$w('#iContinent').options = options;
	  });

}

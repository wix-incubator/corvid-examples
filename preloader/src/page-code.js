$w.onReady(() => {
	waitForLoading();
});

export function button6_onClick(event) {
	$w('#preloader').show();
	waitForLoading();
}

function waitForLoading() {
	setTimeout(() => {
		$w('#preloader').hide('FadeOut');
	}, 1500);
}

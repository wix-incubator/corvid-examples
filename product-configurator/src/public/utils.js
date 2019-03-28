export function imageToUrl(image) {
	//image - wix:image://v1/ebd955_379326bf72654d818c3de9e24ad071fe~mv2.png/ebd955_379326bf72654d818c3de9e24ad071fe~mv2.png#originWidth=541&originHeight=719
	const data = image.split('/').pop().split('#');
	const fileName = data[0];
	const width = data[1].split('&')[0].split('=')[1];
	const height = data[1].split('&')[1].split('=')[1];

	return 'http://static.wixstatic.com/media/' + fileName + '/v1/fill/w_' + width +',h_' + height +',al_c,q_90/file.jpg';
}

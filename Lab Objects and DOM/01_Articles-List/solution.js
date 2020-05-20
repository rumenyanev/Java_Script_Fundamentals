function solve() {
	//TODO
	let createTitleElement = document.getElementById('createTitle');
	let creatteTitleValue = createTitleElement.value;

	let createContentElement = document.getElementById('createContent');
	let createContentValue = createContentElement.value;

	if ( creatteTitleValue && createContentValue) {  // if titleValue && contentValue != '' ;
		   let titleElement = document.createElement('h3');
		   titleElement.textContent = creatteTitleValue;

		   let contentElement = document.createElement('p');
		   contentElement.textContent = createContentValue;

		   let articleElement = document.createElement('article');
		   articleElement.appendChild(titleElement);
		   articleElement.appendChild(contentElement);

		   let articlesElement = document.getElementById('articles');
		   articlesElement.appendChild(articleElement);
		  
		   createTitleElement.value = '';    // clear text in area
		   createContentElement.value = '';

	}

}
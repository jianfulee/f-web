window.onload = function(){
	var postMessButton = document.getElementById('post-mess');
	var back = document.getElementById('back');
	var postArea = document.getElementById('post-mess-area');
	postMessButton.onclick = function(){
		back.style.display = 'block';
		postArea.style.display = 'block';
		document.body.style.overflow='hidden';
	}


	var linksArea = document.getElementById('links-text');
	var linksA = document.getElementById('links-a');
	var linkAT = document.getElementById('links-a-t');
	linksA.onclick = function(){
		if (linksArea.style.display == 'none') {
			linksArea.style.display = 'block';
		}else{
			linksArea.style.display = 'none';
		};
	}
}
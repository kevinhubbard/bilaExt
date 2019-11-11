window.addEventListener('load', (event) => {

	document.getElementById('responsive').style.display = 'none';
	document.getElementsByClassName('right_side')[0].style.display = 'none';
	document.getElementById('darkmode').style.display = 'none';
	document.getElementById('gamesinfo').style.display = 'none';
	document.getElementsByClassName('bg_left_side')[0].style.float = 'none';
	document.getElementsByClassName('bg_left_side')[0].style.margin = '0 auto';

	setTimeout(()=>{
		document.getElementsByClassName('cc-window')[0].style.display = 'none';
	}, 3000);
});
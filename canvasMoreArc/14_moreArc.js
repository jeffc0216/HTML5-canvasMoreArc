function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext("2d"); //沒寫var表示全域變數

	canvas.lineWidth = 5;
	canvas.strokeStyle = 'red';
	//canvas.fillStyle = 'pink';

	canvas.arc(150,150,120,0,2*Math.PI,false);
	canvas.stroke();
	//canvas.fill();
	
	canvas.lineWidth = 1;
	canvas.strokeStyle = 'blue';

	canvas.beginPath();
	canvas.translate(150,150); //原點移到150,150當圓心
	canvas.moveTo(0,0);
	canvas.lineTo(0,-105);
	canvas.stroke();

	// canvas.beginPath();
	// canvas.moveTo(150,150);
	// canvas.lineTo(150,40);
	// canvas.stroke();
	
}
window.addEventListener('load', doFirst, false);
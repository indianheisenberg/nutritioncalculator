/**
 * 
 */


function getImagePath(){

	var temp=document.getElementById('iname');
	console.log(temp);
	//var itemName=document.getElementById('iimage').setAttribute("src","../dist/user/img/"+temp.value+".jpg");
	//console.log(itemName);
	console.log('inside getimagepath');
	//console.log(itemName.name);
	//console.log(itemName.value);
	
	return '../dist/user/img/'+temp.value+'.jpg';
}

	var myanswer = new Array()
	var index = 0
	//document.querySelector('#save').addEventListener('click', saveFile);
       function fakeClick(obj) { 
       　　var ev = document.createEvent("MouseEvents");
　　　　ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
　　　　obj.dispatchEvent(ev);
　　}

　　function exportRaw(name, data) {
　　　　var urlObject = window.URL || window.webkitURL || window;
　　　　var export_blob = new Blob([data]);
　　　　var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
　　　　save_link.href = urlObject.createObjectURL(export_blob);
　　　　save_link.download = name;
　　　　fakeClick(save_link);
　　}

　　function saveFile(inValue){
　　　　//var inValue  = document.querySelector('#text').value;
　　　　exportRaw('Answers.txt', inValue);
　　}
	function random_plu(max){
	var op1 = Math.floor(Math.random()*(max+1))
	var op2 = Math.floor(Math.random()*(max+1))
	var result = op1 + op2
	myanswer[index] = (index+1)+'. '+result
	index++
	document.write(op1+ '+' + op2 + '=' + result + "<br />")
}
	function random_sub(max){
	var op1 = Math.floor(Math.random()*(max+1))
	var op2 = Math.floor(Math.random()*(max+1))
	var high_op = op1>op2 ? op1 : op2
	var low_op = op1<op2 ? op1 : op2
	var result = high_op - low_op
	myanswer[index] = (index+1)+'. '+result
	index++
	document.write(high_op+ '-' + low_op + '=' + result + "<br />")
}
	function random_mul(max){
	var op1 = Math.floor(Math.random()*(max+1))
	var op2 = Math.floor(Math.random()*(max+1))
	var result = op1 * op2
	myanswer[index] = (index+1)+'. '+result
	index++
	document.write(op1+ '*' + op2 + '=' + result + "<br />")
}
	function random_div(max){
	var op1 = Math.floor(Math.random()*(max+1))
	var op2 = Math.floor(Math.random()*(max+1))
	var high_op = op1>op2 ? op1 : op2
	var low_op = op1<op2 ? op1 : op2
	var result = high_op + '/' + low_op
	myanswer[index] = (index+1)+'. '+result
	index++
	document.write(high_op+ '/' + low_op + '=' + result + "<br />")
}

	function ffo(max){
	var operator=['+','-','*','/']
	var sel_oper = Math.floor(Math.random()*4)
	switch(sel_oper)
	{
		case 0:
			random_plu(max)
			break
		case 1:
			random_sub(max)
			break
		case 2:
			random_mul(max)
			break
		case 3:
			random_div(max)
			break
		default: break
	}
}
	var num = prompt("输入所需生成题目数量", "")
	var range = prompt("输入题目数值范围，直接输入最大值即可", "")

	for (var i=0; i<Number(num); i++) {
		ffo(Number(range))
	}
	saveFile(myanswer)


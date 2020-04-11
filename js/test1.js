var hello = new Array()
var i=0
function test1(){
	var op1 = 1
	var op2 = 3
	var result = op1+op2
		hello[i] = result
		i++
		return result
	document.write(op1 + '+' + op2)
}
function test2()
{
	var res1 = test1()
	var op3 = 2
	var res2 = res1 + op3
	console.log(res2)
}
for (var j=0; j<5; j++) {
	test2()
	console.log(hello[j])
}
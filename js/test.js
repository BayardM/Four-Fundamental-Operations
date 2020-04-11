//做到 four +/-
var operator=['+','-','*','/']
var Formula = new Array()
var myanswer = new Array()
var canswer = new Array()
var index = 0
var cindex = 0
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
　　　　exportRaw('Answers.txt', inValue);
　　}
function ffo(max){
var op_gath = Math.floor(Math.random()*(3)+2)
var sel_oper1 = Math.floor(Math.random()*4)
var sel_oper2 = Math.floor(Math.random()*4)
var sel_oper3 = Math.floor(Math.random()*4) 
var result
switch(op_gath)
{
	case 2:
		var op1 = Math.floor(Math.random()*(max)+1)
		var op2 = Math.floor(Math.random()*(max)+1)
		result = two_oper(op1 , op2 , sel_oper1)
		if(result < 0)
		{
			Formula[0] = op2
			Formula[2] = op1
		}
		canswer[cindex] = result
		cindex++
		myanswer[index] = (index+1)+'. '+result
		index++
		Formula[0] = String(Formula[0])
		Formula[2] = String(Formula[2])
		Formula[1] = operator[sel_oper1]
		for(var i=0; i<3; i++)
		document.write(Formula[i])
		document.write('=' + '<input type="text" placeholder="输入答案" />' + '<br />')
		break
	case 3:
		var op1 = Math.floor(Math.random()*(max)+1)
		var op2 = Math.floor(Math.random()*(max)+1)
		var op3 = Math.floor(Math.random()*(max)+1)
		result = thr_oper(op1 , op2 , op3 , sel_oper1 , sel_oper2)
		canswer[cindex] = result
		cindex++
		myanswer[index] = (index+1)+'. '+result
		index++
		Formula[0] = String(Formula[0])
		Formula[2] = String(Formula[2])
		Formula[4] = String(Formula[4])
		Formula[1] = operator[sel_oper1]
		Formula[3] = operator[sel_oper2]
		for(var i=0; i<5; i++)
		document.write(Formula[i])
		document.write('=' + '<input type="text" placeholder="输入答案" />' + '<br />')
		break
	case 4:
		var op1 = Math.floor(Math.random()*(max)+1)
		var op2 = Math.floor(Math.random()*(max)+1)
		var op3 = Math.floor(Math.random()*(max)+1)
		var op4 = Math.floor(Math.random()*(max)+1)
		result = four_oper(op1 , op2 , op3 , op4 , sel_oper1 , sel_oper2 , sel_oper3)
		canswer[cindex] = result
		cindex++
		myanswer[index] = (index+1)+'. '+result
		index++
		Formula[0] = String(Formula[0])
		Formula[2] = String(Formula[2])
		Formula[4] = String(Formula[4])
		Formula[6] = String(Formula[6])
		Formula[1] = operator[sel_oper1]
		Formula[3] = operator[sel_oper2]
		Formula[5] = operator[sel_oper3]
		for(var i=0; i<7; i++)
		document.write(Formula[i])
		document.write('=' + '<input type="text" placeholder="输入答案" />' + '<br />')
		break
	default: break	
}
}
function two_oper(op1, op2 , sel_oper1)
{
	var result
	var formula = [op1 , sel_oper1 , op2]
	switch(sel_oper1)
	{
		case 0:
			result = op1 + op2
			break
		case 1:
			var high_op = op1>op2 ? op1 : op2
			var low_op = op1<op2 ? op1 : op2
			result = high_op - low_op
			break
		case 2:
			result = op1 * op2
			break
		case 3:
			if(op1%op2 != 0)
			{
				if(op1/op2 >= 1)
				result = parseInt(op1/op2) + "'" + op1%op2 + '/' + op2
				else result = op1 + '/' + op2
			}else{
				result = op1 / op2
			}
			break
		default:break
	}
	for (var j=0; j<3; j++) {
		Formula[j] = formula[j]
	}
	return result
}

function thr_oper(op1 , op2 , op3 , sel_oper1 , sel_oper2)
{
	var formula = [op1 , sel_oper1 , op2 , sel_oper2 , op3]
	var result
	switch(sel_oper1)
	{
		case 0:
			switch(sel_oper2)
			{
				case 0:
					 result = formula[0] + formula[2] + formula[4]
					break
				case 1:
					var high_op = (formula[0]+formula[2])>formula[4] ? (formula[0]+formula[2]) : formula[4]
					var low_op = (formula[0]+formula[2])<formula[4] ? (formula[0]+formula[2]) : formula[4]
					result = two_oper(high_op , low_op , sel_oper2)
					if(high_op == formula[4])
					{
						formula[0] = op3
						formula[4] = op1
						formula[1] = sel_oper2
					}
					break
				case 2:
					result = formula[0] + (formula[2] * formula[4])
					break
				case 3:
					result = two_oper((formula[0]*formula[4]+formula[2]) , formula[4] , sel_oper2)
					break
				default:break
			}
			break
		case 1:
			switch(sel_oper2)
			{
				case 0:
					var high_op = (formula[0]+formula[4])>formula[2] ? (formula[0]+formula[4]) : formula[2]
					var low_op = (formula[0]+formula[4])<formula[2] ? (formula[0]+formula[4]) : formula[2]
					result = two_oper(high_op , low_op , sel_oper1)
					if(high_op == formula[2])
					{
						formula[0] = op2
						formula[2] = op1
						formula[3] = sel_oper1
					}
					break
				case 1:
					var high_op = (formula[2]+formula[4])>formula[0] ? formula[2]+formula[4] : formula[0]
					var low_op = (formula[2]+formula[4])<formula[0] ? formula[2]+formula[4] : formula[0]
					result = two_oper(high_op , low_op , sel_oper2)
					if(high_op == (formula[2]+formula[4]))
					{
						formula[0] = op3
						formula[4] = op1
						formula[1] = sel_oper2-1
					}
					break
				case 2:
					var high_op = (formula[2]*formula[4])>formula[0] ? formula[2]*formula[4] : formula[0]
					var low_op = (formula[2]*formula[4])<formula[0] ? formula[2]*formula[4] : formula[0]
					result = two_oper(high_op , low_op , sel_oper1)
					if(high_op == (formula[2]*formula[4]))
					{
						formula[0] = op3
						formula[4] = op1
						formula[1] = sel_oper2
						formula[3] = sel_oper1
					}
					break
				case 3:
					var high_op = (formula[0]*formula[4])>formula[2] ? formula[0]*formula[4] : formula[2]
					var low_op = (formula[0]*formula[4])<formula[2] ? formula[0]*formula[4] : formula[2]
					//0
					result = two_oper((high_op-low_op) ,formula[4] , sel_oper2)
					if(formula[2]> (formula[0]*formula[4]))
					{
						formula[0] = op2
						formula[2] = op3
						formula[4] = op1
						formula[1] = sel_oper2
						formula[3] = sel_oper1
					}
					break
				default:break
			}
			break
		case 2:
			switch(sel_oper2)
			{
				case 0:
					 result = formula[0] * formula[2] + formula[4]
					break
				case 1:
					result = two_oper((formula[0]*formula[2]) , formula[4] , sel_oper2)
					if(formula[4]> (formula[0]*formula[2]))
					{
						formula[0] = op3
						formula[4] = op1
						formula[1] = sel_oper2
						formula[3] = sel_oper1
					}
					break
				case 2:
					result = formula[0] * formula[2] * formula[4]
					break
				case 3:
					result = two_oper((formula[0]*formula[2]) , formula[4] , sel_oper2)
					break
				default:break
			}
			break
		case 3:
			switch(sel_oper2)
			{
				case 0:
					result = two_oper((formula[0]+formula[4]*formula[2]) , formula[2] , sel_oper1)
					break
				case 1:
					var high_op = formula[0]>(formula[2]*formula[4]) ? formula[0] : (formula[2]*formula[4])
					var low_op = formula[0]<(formula[2]*formula[4]) ? formula[0] : (formula[2]*formula[4])
					result = two_oper((high_op-low_op) ,formula[2] , sel_oper1)
					if((formula[2]*formula[4]) > formula[0])
					{
						formula[0] = op3
						formula[2] = op1
						formula[4] = op2
						formula[1] = sel_oper2
						formula[3] = sel_oper1
					}
					break
				case 2:
					result = two_oper((formula[0]*formula[4]) , formula[2] , sel_oper1)
					break
				case 3:
					result = two_oper(formula[0] , (formula[2]*formula[4]) , sel_oper1)
					break
				default:break
			}
			break
		default: break
}
	for (var j=0; j<5; j++) {
			Formula[j] = formula[j]
		}
	return result
}

function four_oper(op1 , op2 , op3 , op4 , sel_oper1 , sel_oper2 , sel_oper3)
{
	var formula = [op1 , sel_oper1 , op2 , sel_oper2 , op3 , sel_oper3 , op4]
	var result
	switch(sel_oper1)
	{
		case 0:
			switch(sel_oper2)
			{
				case 0:
					switch(sel_oper3)
					{
						case 0:
							result = formula[0] + formula[2] + formula[4] + formula[6]
							break
						case 1:
						//++-
						result = two_oper((formula[0] + formula[2] + formula[4]) , formula[6] , sel_oper3)
							if(formula[6] > (formula[0] + formula[2] + formula[4])) 
							{
								formula[0] = op4
								formula[6] = op1
								formula[1] = sel_oper3
								formula[3] = sel_oper3
							}
							break
						case 2:
						//++*
							result = formula[0] + formula[2] + formula[4] * formula[6]
							break
						case 3:
						//++/
						result = thr_oper((formula[0] + formula[2]) , formula[4] , formula[6] , sel_oper1 , sel_oper3)
							break
					} 
					break
				case 1:
					switch(sel_oper3)
					{
						case 0:
						//+-+
							result = two_oper((formula[0] + formula[2] + formula[6]) , formula[4] , sel_oper2)
							if(formula[4] > (formula[0] + formula[2] + formula[6])) 
							{
								formula[0] = op3
								formula[4] = op1
								formula[1] = sel_oper2
								formula[3] = sel_oper2
								formula[5] = sel_oper2
							}
							break
						case 1:
						//+--
							result = two_oper((formula[0] + formula[2]) , (formula[4] + formula[6]) , sel_oper2)
							if((formula[4] + formula[6]) > (formula[0] + formula[2])) 
							{
								formula[0] = op4
								formula[2] = op3
								formula[4] = op2
								formula[6] = op1
							}
							break
						case 2:
						//+-*
							result = two_oper((formula[0] + formula[2]) , (formula[4] * formula[6]) , sel_oper2)
							if((formula[4] * formula[6]) > (formula[0] + formula[2])) 
							{
								formula[0] = op4
								formula[2] = op3
								formula[4] = op2
								formula[6] = op1
								formula[1] = sel_oper3
								formula[5] = sel_oper1
							}
							break
						case 3:
						//+-/
							var high_op = ((formula[0] + formula[2])*formula[6])>formula[4] ? ((formula[0] + formula[2])*formula[6]) : formula[4]
							var low_op = ((formula[0] + formula[2])*formula[6])<formula[4] ? ((formula[0] + formula[2])*formula[6]) : formula[4]
							result = two_oper((high_op-low_op) , formula[6] , sel_oper3)
							if(((formula[0]+formula[2])*formula[6]) > formula[4]) 
							{
								formula[0] = op3
								formula[2] = op4
								formula[4] = op2
								formula[6] = op1
								formula[1] = sel_oper3
								formula[5] = sel_oper2
							}
							break
					}					
					break
				case 2:
					switch(sel_oper3)
					{
						case 0:
						//+*+
						result = formula[0] + formula[2] * formula[4] + formula[6]
							break
						case 1:
						//+*-
							result = two_oper((formula[0] + formula[2]*formula[4]) , formula[6] , sel_oper3)
							if(formula[6] > (formula[0] + formula[2]*formula[4])) 
							{
								formula[0] = op4
								formula[6] = op1
								formula[1] = sel_oper3
							}
							break
						case 2:
						//+**
							result = formula[0] + formula[2] * formula[4] * formula[6]
							break
						case 3:
						//+*/
							result = thr_oper(formula[0] , (formula[2]*formula[4]) , formula[6] , sel_oper1 , sel_oper3)
							break
					}
					break
				case 3:
					switch(sel_oper3)
					{
						case 0:
						//+/+
							result = thr_oper((formula[0]+formula[6]) , formula[2] , formula[4] , sel_oper1 , sel_oper2)
							break
						case 1:
						//+/-
							var high_op = (formula[0]*formula[4] + formula[2])>formula[4]*formula[6] ? (formula[0]*formula[4] + formula[2]) : formula[4]*formula[6]
							var low_op = (formula[0]*formula[4] + formula[2])<formula[4]*formula[6] ? (formula[0]*formula[4] + formula[2]) : formula[4]*formula[6]
							result = thr_oper((high_op-low_op) , formula[2] , formula[4] , sel_oper1 , sel_oper2)
							if(high_op == formula[4]*formula[6]) 
							{
								formula[0] = op4
								formula[6] = op1
								formula[1] = sel_oper3
							}
							break
						case 2:
						//+/*
							result = thr_oper(formula[0] , (formula[2]*formula[6]) , formula[4] , sel_oper1 , sel_oper2)
							break
						case 3:
						//+//
							result = thr_oper(formula[0] , formula[2] , (formula[4]*formula[6]) , sel_oper1 , sel_oper2)
							break	
						default:break
					}
					break
			}
			break
		case 1:
			switch(sel_oper2)
			{
				case 0:
					switch(sel_oper3)
					{
						case 0:
						//-++
							result = two_oper((formula[0] + formula[6] + formula[4]) , formula[2] , sel_oper1)
							if(formula[2] > (formula[0] + formula[6] + formula[4])) 
							{
								formula[0] = op2
								formula[2] = op1
								formula[3] = sel_oper1
								formula[5] = sel_oper1
							}
							break
						case 1:
						//-+-
							result = two_oper((formula[0] + formula[4]) , (formula[2] + formula[6]) , sel_oper1)
							if((formula[2] + formula[6]) > (formula[0] + formula[4])) 
							{
								formula[0] = op2
								formula[2] = op1
								formula[4] = op4
								formula[6] = op3
							}
							break
						case 2:
						//-+*
							result = two_oper((formula[0]+formula[4]*formula[6]) , formula[2] , sel_oper1)
							if(formula[2] > (formula[0]+formula[4]*formula[6])) 
							{
								formula[0] = op2
								formula[2] = op1
								formula[3] = sel_oper1
							}
							break
						case 3:
						//-+/
							var high_op = (formula[0]*formula[6]+formula[4])>(formula[2]*formula[6]) ? (formula[0]*formula[6]+formula[4]) : (formula[2]*formula[6])
							var low_op = (formula[0]*formula[6]+formula[4])<(formula[2]*formula[6]) ? (formula[0]*formula[6]+formula[4]) : (formula[2]*formula[6])
							result = two_oper((high_op-low_op) , formula[6] , sel_oper3)
							if(high_op == (formula[2]*formula[6])) 
							{
								formula[0] = op2
								formula[2] = op1
								formula[3] = sel_oper1
							}
							break
						default:break
					} 
					break
				case 1:
					switch(sel_oper3)
					{
						case 0:
						//--+
							result = two_oper((formula[0]+formula[6]) , (formula[2]+formula[4]) , sel_oper1)
							if((formula[2]+formula[4]) > (formula[0]+formula[6]))
							{
								formula[0] = op2
								formula[2] = op1
								formula[4] = op4
								formula[6] = op3
							}
							break
						case 1:
						//---
							result = two_oper(formula[0] , (formula[2]+formula[4]+formula[6]) , sel_oper1)
							if((formula[2]+formula[4]+formula[6]) > formula[0]) 
							{
								formula[0] = op4
								formula[2] = op3
								formula[4] = op2
								formula[6] = op1
								formula[1] = sel_oper1-1
								formula[3] = sel_oper1-1
							}
							break
						case 2:
						//--*
							result = two_oper(formula[0] , (formula[2]+formula[4]*formula[6]) , sel_oper1)
							if((formula[2]+formula[4]*formula[6]) > formula[0]) 
							{
								formula[0] = op4
								formula[2] = op3
								formula[4] = op2
								formula[6] = op1
								formula[1] = sel_oper3
								formula[3] = sel_oper1-1
								formula[5] = sel_oper2
							}
							break
						case 3:
						//--/
							var high_op = (formula[0]*formula[6])>(formula[4]+formula[2]*formula[6]) ? (formula[0]*formula[6]) : (formula[4]+formula[2]*formula[6])
							var low_op = (formula[0]*formula[6])<(formula[4]+formula[2]*formula[6]) ? (formula[0]*formula[6]) : (formula[4]+formula[2]*formula[6])
							result = two_oper((high_op-low_op) , formula[6] , sel_oper3)
							if((formula[4]+formula[2]*formula[6]) > (formula[0]*formula[6]))
							{
								formula[6] = op1
								formula[0] = op3
								formula[2] = op4
								formula[4] = op2
								formula[1] = sel_oper3
								formula[3] = sel_oper2-1
								formula[5] = sel_oper1
							}
							break
					}					
					break
				case 2:
					switch(sel_oper3)
					{
						case 0:
						//-*+
						result = two_oper((formula[0]+formula[6]) , (formula[2]*formula[4]) , sel_oper1)
						if((formula[2]*formula[4]) > (formula[0]+formula[6]))
						{
							formula[0] = op2
							formula[2] = op3
							formula[4] = op1
							formula[1] = sel_oper2
							formula[3] = sel_oper1
							formula[5] = sel_oper1
						}
							break
						case 1:
						//-*-
							result = two_oper(formula[0] , (formula[2]*formula[4]+formula[6]) , sel_oper1)
							if((formula[2]*formula[4]+formula[6]) > formula[0]) 
							{
								formula[0] = op4
								formula[6] = op1
								formula[1] = sel_oper3-1
							}
							break
						case 2:
						//-**
							result = two_oper(formula[0] , (formula[2]*formula[4]*formula[6]) , sel_oper1)
							if((formula[2]*formula[4]*formula[6]) > formula[0])
							{
								formula[6] = op1
								formula[0] = op4
								formula[1] = sel_oper2
								formula[5] = sel_oper1
							}
							break
						case 3:
						//-*/
							var high_op = (formula[0]*formula[6])>(formula[2]*formula[4]) ? (formula[0]*formula[6]) : (formula[2]*formula[4])
							var low_op = (formula[0]*formula[6])>(formula[2]*formula[4]) ? (formula[0]*formula[6]) : (formula[2]*formula[4])
							result = two_oper((high_op-low_op) , formula[6] , sel_oper3)
							if((formula[2]*formula[4]) > (formula[0]*formula[6]))
							{
								formula[6] = op1
								formula[0] = op3
								formula[2] = op4
								formula[4] = op2
								formula[1] = sel_oper3
								formula[5] = sel_oper1
							}
							break
						default:break
					}
					break
				case 3:
					switch(sel_oper3)
					{
						case 0:
							//-/+
							var high_op = ((formula[0]+formula[6])*formula[4])>formula[2] ? ((formula[0]+formula[6])*formula[4]) : formula[2]
							var low_op = ((formula[0]+formula[6])*formula[4])>formula[2] ? ((formula[0]+formula[6])*formula[4]) : formula[2]
							result = two_oper((high_op-low_op) , formula[4] , sel_oper2)
							if(formula[2] > ((formula[0]+formula[6])*formula[4]))
							{
								formula[0] = op2
								formula[2] = op3
								formula[4] = op1
								formula[1] = sel_oper2
								formula[3] = sel_oper1
								formula[5] = sel_oper1
							}
							break
						case 1:
						//-/-
							var high_op = formula[0]>(formula[2]+formula[4]*formula[6]) ? formula[0] : (formula[2]+formula[4]*formula[6])
							var low_op = formula[0]<(formula[2]+formula[4]*formula[6]) ? formula[0] : (formula[2]+formula[4]*formula[6])
							result = ((high_op-low_op) , formula[4] , sel_oper2)
							if((formula[2]+formula[4]*formula[6]) > formula[0]) 
							{
								formula[0] = op4
								formula[6] = op1
								formula[1] = sel_oper3-1
							}
							break
						case 2:
						//-/*
							var high_op = (formula[0]*formula[4])>(formula[2]*formula[6]) ? (formula[0]*formula[4]) : (formula[2]*formula[6])
							var low_op = (formula[0]*formula[4])<(formula[2]*formula[6]) ? (formula[0]*formula[4]) : (formula[2]*formula[6])
							result = two_oper((high_op-low_op) , formula[4] , sel_oper2)
							if(high_op == (formula[2]*formula[6]))
							{
								formula[0] = op4
								formula[6] = op1
								formula[1] = sel_oper3
								formula[5] = sel_oper1
							}
							break
						case 3:
						//-//							
							var high_op = (formula[0]*formula[4]*formula[6])>formula[2] ? (formula[0]*formula[4]*formula[6]) : formula[2]
							var low_op = (formula[0]*formula[4]*formula[6])<formula[2] ? (formula[0]*formula[4]*formula[6]) : formula[2]
							result = two_oper((high_op-low_op) , (formula[4]*formula[6]) , sel_oper2)
							if(high_op == formula[2])
							{
								formula[0] = op2
								formula[2] = op3
								formula[4] = op4
								formula[6] = op1
								formula[1] = sel_oper3
								formula[5] = sel_oper1
							}
							break
					}
					break
				default:break
			}
			break
		case 2:
			switch(sel_oper2)
			{
				case 0:
					switch(sel_oper3)
					{
						case 0:
						//*++							
							result = formula[0] * formula[2] + formula[4] + formula[6]
							break
						case 1:
						//*+-
							result = two_oper((formula[0]*formula[2]+formula[4]) , formula[6] , sel_oper3)
							if(formula[6] > (formula[0]*formula[2]+formula[4])) 
							{
								formula[0] = op4
								formula[2] = op3
								formula[4] = op1
								formula[6] = op2
								formula[1] = sel_oper3
								formula[3] = sel_oper3
								formula[5] = sel_oper1
							}
							break
						case 2:
						//*+*
							result = formula[0] * formula[2] + formula[4] * formula[6]
							break
						case 3:
						//*+/
							result = thr_oper((formula[0]*formula[2]) , formula[4] , formula[6] ,sel_oper2 , sel_oper3)
							break
						default:break
					} 
					break
				case 1:
					switch(sel_oper3)
					{
						case 0:
						//*-+
							result = two_oper((formula[0]*formula[2]+formula[6]) , formula[4] , sel_oper2)
							if(formula[4] > (formula[0]*formula[2]+formula[6]))
							{
								formula[0] = op3
								formula[2] = op4
								formula[4] = op1
								formula[6] = op2
								formula[1] = sel_oper2
								formula[5] = sel_oper1
							}
							break
						case 1:
						//*--
							result = two_oper((formula[0]*formula[2]) , (formula[4]+formula[6]) , sel_oper2)
							if((formula[4]+formula[6]) > (formula[0]*formula[2])) 
							{
								formula[0] = op4
								formula[2] = op3
								formula[4] = op2
								formula[6] = op1
								formula[1] = sel_oper3
								formula[5] = sel_oper1
							}
							break
						case 2:
						//*-*
							result = two_oper((formula[0]*formula[2]) , (formula[4]*formula[6]) , sel_oper2)
							if((formula[0]*formula[2]) > (formula[4]*formula[6])) 
							{
								formula[0] = op4
								formula[2] = op3
								formula[4] = op2
								formula[6] = op1
							}
							break
						case 3:
						//*-/
							var high_op = (formula[0]*formula[2]*formula[6])>formula[4] ? (formula[0]*formula[2]*formula[6]) : formula[4]
							var low_op = (formula[0]*formula[2]*formula[6])<formula[4] ? (formula[0]*formula[2]*formula[6]) : formula[4]
							result = two_oper((high_op-low_op) , formula[6] , sel_oper3)
							if(formula[4] > (formula[0]*formula[2]*formula[6]))
							{
								formula[6] = op1
								formula[0] = op3
								formula[2] = op4
								formula[4] = op2
								formula[1] = sel_oper3
								formula[5] = sel_oper1
							}
							break
						default:break
					}					
					break
				case 2:
					switch(sel_oper3)
					{
						case 0:
						//**+
						result = formula[0] * formula[2] * formula[4] + formula[6]
							break
						case 1:
						//**-
							result = two_oper((formula[0]*formula[2]*formula[4]) , formula[6] , sel_oper3)
							if(formula[6] > (formula[0]*formula[2]*formula[4])) 
							{
								formula[0] = op4
								formula[6] = op1
								formula[1] = sel_oper3
								formula[5] = sel_oper1
							}
							break
						case 2:
						//***
							result = formula[0] * formula[2] * formula[4] * formula[6]
							break
						case 3:
						//**/
							result = two_oper((formula[0] * formula[2] * formula[4]) , formula[6] , sel_oper3)
							break
						default:break
					}
					break
				case 3:
					switch(sel_oper3)
					{
						case 0:
							//*/+
							result = thr_oper((formula[0]*formula[2]) , formula[4] , formula[6] , sel_oper2 , sel_oper3)
							break
						case 1:
						//*/-
							var high_op = (formula[0]*formula[2])>(formula[4]*formula[6]) ? (formula[0]*formula[2]) : (formula[4]*formula[6])
							var low_op = (formula[0]*formula[2])<(formula[4]*formula[6]) ? (formula[0]*formula[2]) : (formula[4]*formula[6])
							result = ((high_op-low_op) , formula[4] , sel_oper2)
							if((formula[4]*formula[6]) > (formula[0]*formula[2])) 
							{
								formula[0] = op4	
								formula[6] = op1
								formula[1] = sel_oper3
								formula[5] = sel_oper1
							}
							break
						case 2:
						//*/*
							result = two_oper((formula[0]*formula[2]*formula[6]) , formula[4] , sel_oper2)
							break
						case 3:
						//*//
							result = two_oper((formula[0]*formula[2]) , (formula[4]*formula[6]) , sel_oper2)
							break
						default:break
					}
					break
				default:break
			}
			break
		case 3:
			switch(sel_oper2)
			{
				case 0:
					switch(sel_oper3)
					{
						case 0:
						///++							
							result = thr_oper(formula[0] , formula[2] , (formula[4]+formula[6]) , sel_oper1 , sel_oper2)
							break
						case 1:
						///+-
							var high_op = (formula[0] + formula[4]*formula[2])>(formula[6]*formula[2]) ? (formula[0] + formula[4]*formula[2]) : (formula[2]*formula[6])
							var low_op = (formula[0] + formula[4]*formula[2])<(formula[2]*formula[6]) ? (formula[0] + formula[4]*formula[2]) : (formula[2]*formula[6])
							result = two_oper((high_op-low_op) , formula[2] , sel_oper1)
							if((formula[2]*formula[6]) > (formula[0]+formula[2]*formula[4])) 
							{
								formula[0] = op4
								formula[2] = op3
								formula[4] = op1
								formula[6] = op2
								formula[1] = sel_oper3
								formula[3] = sel_oper3
								formula[5] = sel_oper1
							}
							break
						case 2:
						///+*
							result = thr_oper(formula[0] , formula[2] , (formula[4]*formula[6]) , sel_oper1 , sel_oper2)
							break
						case 3:
						///+/
							result = two_oper((formula[0]*formula[6]+formula[2]*formula[4]) , (formula[2]*formula[6]) , sel_oper1)
							break
						default:break
					} 
					break
				case 1:
					switch(sel_oper3)
					{
						case 0:
						///-+
							var high_op = (formula[0]+formula[6]*formula[2])>(formula[4]*formula[2]) ? (formula[0]+formula[6]*formula[2]) : (formula[4]*formula[2])
							var low_op = (formula[0]+formula[6]*formula[2])<(formula[4]*formula[2]) ? (formula[0]+formula[6]*formula[2]) : (formula[4]*formula[2])
							result = two_oper((high_op-low_op) , formula[2] , sel_oper1)
							if((formula[4]*formula[2]) > (formula[0]+formula[2]*formula[6]))
							{
								formula[0] = op3
								formula[2] = op4
								formula[4] = op1
								formula[6] = op2
								formula[1] = sel_oper2
								formula[5] = sel_oper1
							}
							break
						case 1:
						///--
							var high_op = formula[0]>((formula[4] + formula[6])*formula[2]) ? formula[0] : ((formula[4] + formula[6])*formula[2])
							var low_op = formula[0]<((formula[4] + formula[6])*formula[2]) ? formula[0] : ((formula[4] + formula[6])*formula[2])
							result = two_oper((high_op-low_op) , formula[2] , sel_oper1)
							if(((formula[4] + formula[6])*formula[2]) > formula[0]) 
							{
								formula[0] = op4
								formula[2] = op3
								formula[4] = op1
								formula[6] = op2
								formula[1] = sel_oper3-1
								formula[5] = sel_oper1
							}
							break
						case 2:
						///-*
							var high_op = formula[0]>(formula[4]*formula[6]*formula[2]) ? formula[0] : (formula[4]*formula[6]*formula[2])
							var low_op = formula[0]<(formula[4]*formula[6]*formula[2]) ? formula[0] : (formula[4]*formula[6]*formula[2])
							result = two_oper((high_op-low_op) , formula[2] , sel_oper1)
							if((formula[4]*formula[6]*formula[2]) > formula[0]) 
							{
								formula[0] = op4
								formula[2] = op3
								formula[4] = op1
								formula[6] = op2
								formula[1] = sel_oper3
								formula[5] = sel_oper1
							}
							break
						case 3:
						///-/
							var high_op = (formula[0]*formula[6])>(formula[4]*formula[2]) ? (formula[0]*formula[6]) : (formula[4]*formula[2])
							var low_op = (formula[0]*formula[6])<(formula[4]*formula[2]) ? (formula[0]*formula[6]) : (formula[4]*formula[2])
							result = two_oper((high_op-low_op) , formula[2] , sel_oper1)
							if((formula[4]*formula[2]) > (formula[0]*formula[6]))
							{
								formula[6] = op2
								formula[0] = op3
								formula[2] = op4
								formula[4] = op1
							}
							break
						default:break
					}					
					break
				case 2:
					switch(sel_oper3)
					{
						case 0:
						///*+
						result = thr_oper((formula[0]*formula[4]) , formula[2] , formula[6] , sel_oper1 , sel_oper3)
							break
						case 1:
						///*-
							var high_op = (formula[0]*formula[4])>(formula[6]*formula[2]) ? (formula[0]*formula[4]) : (formula[6]*formula[2])
							var low_op = (formula[0]*formula[4])<(formula[6]*formula[2]) ? (formula[0]*formula[4]) : (formula[6]*formula[2])
							result = two_oper((high_op-low_op) , formula[2] , sel_oper1)
							if((formula[6]*formula[2]) > (formula[0]*formula[4])) 
							{
								formula[0] = op4
								formula[2] = op3
								formula[4] = op1
								formula[6] = op2
								formula[1] = sel_oper3
								formula[5] = sel_oper1
							}
							break
						case 2:
						///**
							result = two_oper((formula[0]*formula[4]*formula[6]) , formula[2] , sel_oper1)
							break
						case 3:
						///*/
							result = two_oper((formula[0] * formula[4]) , (formula[2]*formula[6]) , sel_oper1)
							break
						default:break
					}
					break
				case 3:
					switch(sel_oper3)
					{
						case 0:
							////+
							result = thr_oper(formula[0] , (formula[2]*formula[4]) , formula[6] , sel_oper2 , sel_oper3)
							break
						case 1:
						////-
							var high_op = formula[0]>(formula[2]*formula[4]*formula[6]) ? (formula[0]*formula[2]) : (formula[2]*formula[4]*formula[6])
							var low_op = formula[0]<(formula[2]*formula[4]*formula[6]) ? (formula[0]*formula[2]) : (formula[2]*formula[4]*formula[6])
							result = ((high_op-low_op) , (formula[4]*formula[2]) , sel_oper1)
							if((formula[2]*formula[4]*formula[6]) > formula[0]) 
							{
								formula[0] = op4
								formula[2] = op1
								formula[4] = op2
								formula[6] = op3
								formula[1] = sel_oper3
								formula[5] = sel_oper1
							}
							break
						case 2:
						////*
							result = two_oper((formula[0]*formula[6]) , (formula[4]*formula[2]) , sel_oper2)
							break
						case 3:
						/////
							result = two_oper(formula[0] , (formula[2]*formula[4]*formula[6]) , sel_oper2)
							break
						default:break
					}
					break
				default:break
			}
			break
	default:break
	}
	for (var j=0; j<7; j++) {
			Formula[j] = formula[j]
		}
	return result
}
function checkanswer(){
		var right = new Array()
		var wrong = new Array()
		var r_index=1
		var w_index=1
		var inputtag = document.getElementsByTagName('input')
		for (var i=0 ; i<inputtag.length ;i++) {
			if(inputtag[i].value == canswer[i])
				{
					right[r_index] = i+1
					r_index++
				}
			else {
				wrong[w_index] = i+1
				w_index++
			}
		}
		var show = ['correct:' + (right.length-1) + '(' , 'wrong:' + (wrong.length-1) + '(' , ')']
		exportRaw('check.txt' , show[0]+right+show[2]+show[1]+wrong+show[2])
}
var num = prompt("输入所需生成题目数量", "")
var range = prompt("输入题目数值范围，直接输入最大值即可", "")
	for (var i=0; i<Number(num); i++) {
		document.write((i+1) + '. ')
		ffo(Number(range))
	}
	exportRaw('Answers.txt' , myanswer)
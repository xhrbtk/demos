window.jQuery=function(sElements){
	var array=[]
// 如果selectorOrElements是个字符串那么久push进array数组
	if(typeof sElements==='string'){
		var elements=document.querySelectorAll(sElements)
		for(var i=0;i<elements.length;i++){
		array.push(elements[i])
	}
 }
 // 如果selectorOrElements是个数组 那么就遍历这个数组添加进array
 else if(sElements.legnth instanceof Array){
 	for(var i=0;i<sElements.legnth;i++){

		array.push(sElements[i])
 }
 // array['xxx']=sElements['xxx']
}

	
	// elements 不是一个数组，是一个类数组对象
	
	// 为array添加属性  array即是一个数组也是一个对象
	array.on=function(eventType,fn){
		for(var i=0;i<array.length;i++){
			array[i].addEventListener(eventType,fn)
		   }
		   // 为了实现链式调用  所以要返回array
		   return array
		}
	array.addClass=function(className){
		for(var i=0;i<array.length;i++){
			array[i].classList.add(className)
		   }
		   return array
	}
	array.removeClass=function(className){
		for(var i=0;i<array.length;i++){
			array[i].classList.remove(className)
		   }
		   return array
	}
	array.toggleClass=function(className){
		for(var i=0;i<array.length;i++){
			array[i].classList.toggle(className)
		   }
		  return array
	}
	// text返回的是div的文本数组
	array.text=function(value){
		// 如果value是等于undefined说明没有传值
		// 取一个空数组，去遍历获得每一个元素的文本值
			if(value===undefined){
				var result=[]
				for(var i=0;i<array.length;i++){
					result.push(array[i].textContent)
				}
			return result
			}	
	
		else{
			for(var i=0;i<array.length;i++){
					array[i].textContent=value
				}
			  return array
	}
}
	array.html=function(htmlString){
		
		if(htmlString===undefined){
			var result=[]
			for(var i=0;i<array.length;i++){
				result.push(array[i].innerHTML)
			}
			return result
		  }
	else{
		for(var i=0;i<array.length;i++){
				array[i].innerHTML=htmlString
			}
		return array
   }
}


// array.find=function(selector){
// 	var array2=[]
// 	for(var i=0;i<array.length;i++){
// 		var elements=array[i].querySelectorAll(selector)
// 		for(var j=0;j<elements.length;j++){
// 			array2.push(elements[j])
// 		}
// 	}
// 	// 利用Jquery包装了这里的array2  
// 	array2.xxx=array

// 	return jQuery(array2)
// }
return array
}

window.$=window.jQuery



// 为了实现$xxx.addClass('c4').text('hi').on('click',function(){})
// 1可以做到$xxx.text('ji')
// 2需要做到$xxx.addClass('c4').text('hi')
// 3所以我们需要让$xxx===$xxx.addClass('c4')
// 在不返回array的时候只能实现 $xxx.on('click',function(){})



// $xxx.addClass('c1')
// $xxx.addClass('c4')===$xxx

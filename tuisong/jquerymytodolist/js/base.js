var myTodoModule=(function(){
	// 变量
	var task_list=[]
	var $task_list,$content,$addTaskSubmit,$task_detail,$task_content,$desc,$datetime,$detail_submit,$delete
	var detailIndex,deleteIndex  //定义点击详情和删除的时候记录的索引index
	// 初始化jquery对象
	var initJqVar=function(){
		$task_list=$('.task-list')
		$content=$('.content')
		$addTaskSubmit=$('.addTaskSubmit')
		$task_detail=$('.task-detail')
		$task_content=$('.detail-content')
		$desc=$('.desc')
		$datetime=$('.datetime')
		$detail_submit=$('.detail-submit')
		$delete=$('.delete')
	}
	// 页面初始化的时候，从store中取出item，并重新渲染
	var initRenderIndex=function(){
		$task_list.html('')
		task_list=store.get('task_list')
		var taskHtmlStr=''
		for(var i=task_list.length-1;i>=0;i--){
			var oneItem='<div class="task-item"><!--任务项目-->'+
'					<span ><!--复选框-->'+
'						<input type="checkbox" />'+
'					</span>'+
'					<span class="item-content"><!--item的content-->'+task_list[i].content+
'					</span>'+
'					<span class="fr"><!--item右侧的action-->'+
'					<span class="action detail"><!--详情-->'+
'						详情	'+
'					</span>'+
'					<span class="action delete"><!--删除-->'+
'						删除	'+
'					</span>'+
'					</span>'+
'				</div>'
				taskHtmlStr=taskHtmlStr+oneItem
		}
		$(taskHtmlStr).appendTo($task_list)
		// 需要再次注册click事件
		listenDetail()
		listenDelete()
	
		
	}

// 添加taskItem操作方法
    var addTask=function(){
    	var new_task={}
    	new_task.content=$content.val() //获取输入框内容
    	task_list.push(new_task)  //更新数组操作
    	store.set('task_list',task_list)
    	renderOneItem(new_task)
    }
//向html列表中新添加一条记录
var renderOneItem=function(new_task){
	var oneItem = '<div class="task-item"><!--任务项目-->'+
'					<span ><!--复选框-->'+
'						<input type="checkbox" />'+
'					</span>'+
'					<span class="item-content"><!--item的content-->'+new_task.content+
'					</span>'+
'					<span class="fr"><!--item右侧的action-->'+
'					<span class="action detail"><!--详情-->'+
'						详情	'+
'					</span>'+
'					<span class="action delete"><!--删除-->'+
'						删除	'+
'					</span>'+
'					</span>'+
'				</div>'
				$(oneItem).prependTo($task_list)
				$content.val('')  //清空输入框的内容 以便下次使用
				listenDetail()  //需要再次注册click事件
				listenDelete()
}

// 添加任务按钮监听事件
var listenAddTaskItem=function(){
	$addTaskSubmit.click(function(){
		addTask()
	})
	
}
// 点击任务item的详情编辑项目明细
var listenDetail=function(){
	$('.detail').click(function(){
		// 找到第几个list的索引
		detailIndex=task_list.length-1-$(this).parent().parent().index()
		// 显示详情页面
		$task_detail.show()
		// 更新内容
		$task_content.val(task_list[detailIndex].content)
		$desc.val(task_list[detailIndex].desc)
		$datetime.val(task_list[detailIndex].datetime)

	})
}
// 保存详情上的信息
    var listenDetailSave=function(){
    	$detail_submit.click(function(){
    		var dataTask={}
    		dataTask.content=$task_content.val()
    		dataTask.desc=$desc.val()
    		dataTask.datetime=$datetime.val()
    		// 修改更新操作--要把修改后的对象和原来的对象合并
    		task_list[detailIndex]=$.extend(task_list[detailIndex],dataTask)
    		console.log(task_list)
    		store.set('task_list',task_list)
    		// 保存之后清空所有
    		$task_content.val('')
    		$desc.val('')
    		$datetime.val('')
    		
    		$task_detail.hide()
    		//在更新了详情后 有可能详情里面的标题也会更改 所以要再次初始化渲染一下
    		initRenderIndex()
    	})

    }
    // 删除那操作
    var listenDelete=function(){
    	$('.delete').click(function(){
    	 deleteIndex=task_list.length-1-$(this).parent().parent().index()
    		var r=confirm('确认要删除吗？')
    		if(r){
    			 task_list.splice(deleteIndex,1)  //将store中的清除掉
    			$(this).parent().parent().remove()  //将页面上的展示删除掉
    		}
    	})
    }

	var initModule=function(){
		store.set('task_list',task_list)
		initJqVar()
		initRenderIndex()
		listenAddTaskItem()
		addTask()
		listenDetail()
		$datetime.datetimepicker()
		listenDetailSave()
		listenDelete()
	}
	return {
		initModule:initModule
	}

})()
$(function(){
	myTodoModule.initModule()
})
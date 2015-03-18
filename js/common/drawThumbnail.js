function clickTest(){
 htmlobj:$.ajax({url:"http://www.baidu.com",async:true});
 b:$("#company").html((this.htmlobj).responseText);

}

new clickTest();
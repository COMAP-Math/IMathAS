!function(){var border,strokewidth,strokedasharray,stroke,fill,fontstyle,fontfamily,fontsize,fontweight,fontstroke,fontfill,fontbackground,fillopacity,markerstrokewidth,markerstroke,markerfill,marker,arrowfill,dotradius,ticklength,axesstroke,gridstroke,pointerpos,coordinates,above,below,left,right,aboveleft,aboveright,belowleft,belowright,xmin,xmax,ymin,ymax,xscl,yscl,xgrid,ygrid,xtick,ytick,initialized,isOldIE,picture,svgpicture,doc,width,height,a,b,c,d,i,n,p,t,x,y,ASgraphidcnt,ASnoSVG=!1,checkIfSVGavailable=!0,notifyIfNoSVG=!1,alertIfNoSVG=!1,xunitlength=20,yunitlength=20,origin=[0,0],defaultwidth=300;function chop(t,e){return null==e&&(e=0),Math.floor(t*Math.pow(10,e))/Math.pow(10,e)}function prepWithMath(t){return t=(t=(t=(t=t.replace(/Ma(t|\(t\)\*)h\./,"")).replace(/\b(abs|acos|asin|atan|ceil|floor|cos|sin|tan|sqrt|exp|max|min|pow)\(/g,"Math.$1(")).replace(/\(E\)/g,"(Math.E)")).replace(/\((PI|pi)\)/g,"(Math.PI)")}function ran(t,e,i){return null==i&&(i=0),chop((e+Math.pow(10,-i)-t)*Math.random()+t,i)}function myCreateElementXHTML(t){return isOldIE?document.createElement(t):document.createElementNS("http://www.w3.org/1999/xhtml",t)}function isSVGavailable(){var rv,oSVG;if(null!=(ver=navigator.userAgent.toLowerCase().match(/webkit\/(\d+)/))&&531<ver[1])return null;if(navigator.product&&"Gecko"==navigator.product)return rv=navigator.userAgent.toLowerCase().match(/rv:\s*([\d\.]+)/),null!=rv&&(rv=rv[1].split("."),rv.length<3&&(rv[2]=0),rv.length<2&&(rv[1]=0)),null!=rv&&10800<=1e4*rv[0]+100*rv[1]+1*rv[2]?null:1;if("Microsoft"!=navigator.appName.slice(0,9))return 1;if(version=parseFloat(navigator.appVersion.split("MSIE")[1]),9<=version)return null;try{return oSVG=eval("new ActiveXObject('Adobe.SVGCtl.3');"),null}catch(t){return 1}}function less(t,e){return t<e}function setText(t,e){var i=document.getElementById(e);null!=i&&(0!=i.childNodes.length?i.childNodes[0].nodeValue=t:i.appendChild(document.createTextNode(t)))}function myCreateElementSVG(t){return isOldIE?doc.createElement(t):doc.createElementNS("http://www.w3.org/2000/svg",t)}function getX(){return(doc.getElementById("pointerpos").getAttribute("cx")-origin[0])/xunitlength}function getY(){return(height-origin[1]-doc.getElementById("pointerpos").getAttribute("cy"))/yunitlength}function mousemove_listener(t){null!=svgpicture.getAttribute("xbase")&&(pointerpos.cx.baseVal.value=t.clientX-svgpicture.getAttribute("xbase")),null!=svgpicture.getAttribute("ybase")&&(pointerpos.cy.baseVal.value=t.clientY-svgpicture.getAttribute("ybase"))}function top_listener(t){svgpicture.setAttribute("ybase",t.clientY)}function bottom_listener(t){svgpicture.setAttribute("ybase",t.clientY-height+1)}function left_listener(t){svgpicture.setAttribute("xbase",t.clientX)}function right_listener(t){svgpicture.setAttribute("xbase",t.clientX-width+1)}function asciisvgexpand(t){var e,i,r=t.currentTarget.parentNode,n=r.getAttribute("width")/r.getAttribute("height"),s=Math.min(800,.8*$(window).width()),l=.9*$(window).height()-30;1<=n&&s/n<l?l=Math.min(l,s/n):s=Math.min(s,l*n),l=Math.floor(l),e='<div style="text-align:center"><embed data-enlarged="true" type="image/svg+xml" width="'+(s=Math.floor(s))+'" height="'+l+'" ',r.hasAttribute("data-script")?e+='script="'+r.getAttribute("data-script").replace(/"/g,"&quot;")+'"':r.hasAttribute("data-sscr")&&((i=r.getAttribute("data-sscr").split(","))[9]=s,i[10]=l,e+='sscr="'+i.join(",")+'"'),e+=" /></div>",GB_show(_("Enlarged Graph"),e,s+6,l+66),setTimeout(drawPics,500)}function switchTo(t){picture=document.getElementById(t),width=picture.getAttribute("width")-0,height=picture.getAttribute("height")-0,strokewidth="1",stroke="black",marker=fill="none",doc="EMBED"!=picture.nodeName&&"embed"!=picture.nodeName||!isOldIE?(svgpicture=picture,document):(svgpicture=picture.getSVGDocument().getElementById("root"),picture.getSVGDocument()),xunitlength=svgpicture.getAttribute("xunitlength")-0,yunitlength=svgpicture.getAttribute("yunitlength")-0,xmin=svgpicture.getAttribute("xmin")-0,xmax=svgpicture.getAttribute("xmax")-0,ymin=svgpicture.getAttribute("ymin")-0,ymax=svgpicture.getAttribute("ymax")-0,origin=[svgpicture.getAttribute("ox")-0,svgpicture.getAttribute("oy")-0]}function updatePicture(obj){var src=document.getElementById("string"==typeof obj?obj:"picture"+(obj+1)+"input").value;xmin=null,xmax=null,ymin=null,ymax=null,xscl=null,xgrid=null,yscl=null,ygrid=null,initialized=!1,switchTo("string"==typeof obj?obj.slice(0,8):"picture"+(obj+1)),src=src.replace(/plot\(\x20*([^\"f\[][^\n\r]+?)\,/g,'plot("$1",'),src=src.replace(/plot\(\x20*([^\"f\[][^\n\r]+)\)/g,'plot("$1")'),src=src.replace(/([0-9])([a-zA-Z])/g,"$1*$2"),src=src.replace(/\)([\(0-9a-zA-Z])/g,")*$1");try{eval(prepWithMath(src))}catch(t){alert(t+"\n"+src)}}function showHideCode(t){for(var e=t.nextSibling;null!=e&&"BUTTON"!=e.nodeName&&"button"!=e.nodeName;)e=e.nextSibling;for("none"==e.style.display?e.style.display="":e.style.display="none";null!=e&&"TEXTAREA"!=e.nodeName&&"textarea"!=e.nodeName;)e=e.previousSibling;"none"==e.style.display?e.style.display="":e.style.display="none"}function hideCode(){}function showcode(){}function nobutton(){}function setBorder(t,e,i,r){border=null==r?new Array(t,t,t,t):new Array(t,e,i,r)}function initPicture(x_min,x_max,y_min,y_max){var qnode,picid,title,st,node;if(null!=x_min&&(xmin=x_min),null!=x_max&&(xmax=x_max),null!=y_min&&(ymin=y_min),null!=y_max&&(ymax=y_max),null==xmin&&(xmin=-5),null==xmax&&(xmax=5),"number"!=typeof xmin||"number"!=typeof xmax||xmax<=xmin?alert("Picture requires at least two numbers: xmin < xmax"):null!=y_max&&("number"!=typeof y_min||"number"!=typeof y_max||y_max<=y_min)?alert("initPicture(xmin,xmax,ymin,ymax) requires numbers ymin < ymax"):(width=picture.getAttribute("width"),null!=width&&""!=width||(width=defaultwidth),height=picture.getAttribute("height"),null!=height&&""!=height||(height=defaultheight),xunitlength=(width-border[0]-border[2])/(xmax-xmin),yunitlength=xunitlength,null==ymin?(origin=[-xmin*xunitlength+border[0],height/2],ymin=-(height-border[1]-border[3])/(2*yunitlength),ymax=-ymin):(null!=ymax?yunitlength=(height-border[1]-border[3])/(ymax-ymin):ymax=(height-border[1]-border[3])/yunitlength+ymin,origin=[-xmin*xunitlength+border[0],-ymin*yunitlength+border[1]]),winxmin=Math.max(border[0]-5,0),winxmax=Math.min(width-border[2]+5,width),winymin=Math.max(border[3]-5,0),winymax=Math.min(height-border[1]+5,height)),initialized)for(;svgpicture.lastChild;)svgpicture.removeChild(svgpicture.lastChild);else{if(strokewidth="1",strokedasharray=null,stroke="black",fill="none",fontstyle="italic",fontfamily="times",fontsize="16",fontweight="normal",fontstroke="black",fontfill="black",fontbackground="none",marker="none",initialized=!0,isOldIE){for(svgpicture=picture.getSVGDocument().getElementById("root");5<svgpicture.childNodes.length();)svgpicture.removeChild(svgpicture.lastChild);svgpicture.setAttribute("width",width),svgpicture.setAttribute("height",height),doc=picture.getSVGDocument()}else qnode=document.createElementNS("http://www.w3.org/2000/svg","svg"),picid=picture.getAttribute("id"),picture.setAttribute("id",picid+"-embed"),qnode.setAttribute("id",picid),picture.hasAttribute("data-enlarged")?qnode.setAttribute("viewBox","0 0 "+picture.getAttribute("width")+" "+picture.getAttribute("height")):(qnode.setAttribute("style","display:inline; "+picture.getAttribute("style")),qnode.setAttribute("width",picture.getAttribute("width")),qnode.setAttribute("height",picture.getAttribute("height"))),picture.hasAttribute("data-nomag")&&qnode.setAttribute("data-nomag",1),qnode.setAttribute("alt",picture.getAttribute("alt")||""),qnode.setAttribute("role","img"),null!=picture.parentNode?(picture.parentNode.insertBefore(qnode,picture),picture.style.display="none",picture.hasAttribute("sscr")&&(qnode.setAttribute("data-sscr",picture.getAttribute("sscr")),picture.removeAttribute("sscr")),picture.hasAttribute("script")&&(qnode.setAttribute("data-script",picture.getAttribute("script")),picture.removeAttribute("script"))):svgpicture.parentNode.replaceChild(qnode,svgpicture),svgpicture=qnode,""!=picture.getAttribute("alt")&&null!=picture.getAttribute("alt")&&(title=document.createElement("title"),svgpicture.appendChild(title),title.innerText=picture.getAttribute("alt"),title.id=picid+"-label",svgpicture.setAttribute("aria-labelledby",picid+"-label")),doc=document,pointerpos=doc.getElementById("pointerpos"),null==pointerpos&&(pointerpos=myCreateElementSVG("circle"),pointerpos.setAttribute("id","pointerpos"),pointerpos.setAttribute("cx",0),pointerpos.setAttribute("cy",0),pointerpos.setAttribute("r",.5),pointerpos.setAttribute("fill","red"),svgpicture.appendChild(pointerpos)),picture.hasAttribute("data-enlarged");isOldIE||null==picture.getAttribute("onmousemove")||(svgpicture.addEventListener("mousemove",mousemove_listener,!0),st=picture.getAttribute("onmousemove"),svgpicture.addEventListener("mousemove",eval(st.slice(0,st.indexOf("("))),!0),node=myCreateElementSVG("polyline"),node.setAttribute("points","0,0 "+width+",0"),node.setAttribute("style","stroke:white; stroke-width:3"),node.addEventListener("mousemove",top_listener,!0),svgpicture.appendChild(node),node=myCreateElementSVG("polyline"),node.setAttribute("points","0,"+height+" "+width+","+height),node.setAttribute("style","stroke:white; stroke-width:3"),node.addEventListener("mousemove",bottom_listener,!0),svgpicture.appendChild(node),node=myCreateElementSVG("polyline"),node.setAttribute("points","0,0 0,"+height),node.setAttribute("style","stroke:white; stroke-width:3"),node.addEventListener("mousemove",left_listener,!0),svgpicture.appendChild(node),node=myCreateElementSVG("polyline"),node.setAttribute("points",width-1+",0 "+(width-1)+","+height),node.setAttribute("style","stroke:white; stroke-width:3"),node.addEventListener("mousemove",right_listener,!0),svgpicture.appendChild(node)),border=defaultborder}svgpicture.hasAttribute("viewBox")?svgpicture.setAttribute("viewBox","0 0 "+width+" "+height):(svgpicture.setAttribute("height",height),svgpicture.style.height=height+"px",svgpicture.setAttribute("width",width),svgpicture.style.width=width+"px"),svgpicture.setAttribute("xunitlength",xunitlength),svgpicture.setAttribute("yunitlength",yunitlength),svgpicture.setAttribute("xmin",xmin),svgpicture.setAttribute("xmax",xmax),svgpicture.setAttribute("ymin",ymin),svgpicture.setAttribute("ymax",ymax),svgpicture.setAttribute("ox",origin[0]),svgpicture.setAttribute("oy",origin[1]),node=myCreateElementSVG("rect"),node.setAttribute("x","0"),node.setAttribute("y","0"),node.setAttribute("width",width),node.setAttribute("height",height),node.setAttribute("style","stroke-width:1;fill:white"),svgpicture.appendChild(node)}function line(t,e,i){var r;null!=i&&(r=doc.getElementById(i)),null==r&&((r=myCreateElementSVG("path")).setAttribute("id",i),svgpicture.appendChild(r)),r.setAttribute("d","M"+(t[0]*xunitlength+origin[0])+","+(height-t[1]*yunitlength-origin[1])+" "+(e[0]*xunitlength+origin[0])+","+(height-e[1]*yunitlength-origin[1])),r.setAttribute("stroke-width",strokewidth),null!=strokedasharray&&r.setAttribute("stroke-dasharray",strokedasharray),r.setAttribute("stroke",stroke),"trans"==fill.substr(0,5)?(r.setAttribute("fill",fill.substring(5)),r.setAttribute("fill-opacity",fillopacity)):r.setAttribute("fill",fill),"dot"==marker||"arrowdot"==marker?(ASdot(t,4,markerstroke,markerfill),"arrowdot"==marker&&arrowhead(t,e),ASdot(e,4,markerstroke,markerfill)):"arrow"==marker&&arrowhead(t,e)}function path(t,e,i){var r,n,s;if(null==i&&(i=""),null!=e&&(r=doc.getElementById(e)),null==r&&((r=myCreateElementSVG("path")).setAttribute("id",e),svgpicture.appendChild(r)),"string"==typeof t)n=t;else for(n="M",n+=t[0][0]*xunitlength+origin[0]+","+(height-t[0][1]*yunitlength-origin[1])+" "+i,s=1;s<t.length;s++)n+=t[s][0]*xunitlength+origin[0]+","+(height-t[s][1]*yunitlength-origin[1])+" ";if(r.setAttribute("d",n),r.setAttribute("stroke-width",strokewidth),null!=strokedasharray&&r.setAttribute("stroke-dasharray",strokedasharray),r.setAttribute("stroke",stroke),"trans"==fill.substr(0,5)?(r.setAttribute("fill",fill.substring(5)),r.setAttribute("fill-opacity",fillopacity)):r.setAttribute("fill",fill),"dot"==marker||"arrowdot"==marker)for(s=0;s<t.length;s++)("C"!=i&&"T"!=i||1!=s&&2!=s)&&ASdot(t[s],4,markerstroke,markerfill)}function curve(t,e){path(t,e,"T")}function circle(t,e,i){var r;null!=i&&(r=doc.getElementById(i)),null==r&&((r=myCreateElementSVG("circle")).setAttribute("id",i),svgpicture.appendChild(r)),r.setAttribute("cx",t[0]*xunitlength+origin[0]),r.setAttribute("cy",height-t[1]*yunitlength-origin[1]),r.setAttribute("r",e*xunitlength),r.setAttribute("stroke-width",strokewidth),r.setAttribute("stroke",stroke),"trans"==fill.substr(0,5)?(r.setAttribute("fill",fill.substring(5)),r.setAttribute("fill-opacity",fillopacity)):r.setAttribute("fill",fill)}function loop(t,e,i){null==e&&(e=[1,0]),path([t,[t[0]+e[0],t[1]+e[1]],[t[0]-e[1],t[1]+e[0]],t],i,"C"),"arrow"!=marker&&"arrowdot"!=marker||arrowhead([t[0]+Math.cos(1.4)*e[0]-Math.sin(1.4)*e[1],t[1]+Math.sin(1.4)*e[0]+Math.cos(1.4)*e[1]],t)}function sector(t,e,i,r,n){var s,l,o,a,u,d;null!=n&&(s=doc.getElementById(n)),null==s&&((s=myCreateElementSVG("path")).setAttribute("id",n),svgpicture.appendChild(s)),l=0,3.142<Math.abs(r-i)&&(l=1),o=0,r<i&&(o=1),a=[t[0]+e*Math.cos(i),t[1]+e*Math.sin(i)],u=[t[0]+e*Math.cos(r),t[1]+e*Math.sin(r)],d="M"+(t[0]*xunitlength+origin[0])+","+(height-t[1]*yunitlength-origin[1])+" L"+(a[0]*xunitlength+origin[0])+","+(height-a[1]*yunitlength-origin[1])+" A"+e*xunitlength+","+e*yunitlength+" 0 "+l+","+o+" "+(u[0]*xunitlength+origin[0])+","+(height-u[1]*yunitlength-origin[1])+" z",s.setAttribute("d",d),s.setAttribute("stroke-width",strokewidth),s.setAttribute("stroke",stroke),"trans"==fill.substr(0,5)?(s.setAttribute("fill",fill.substring(5)),s.setAttribute("fill-opacity",fillopacity)):s.setAttribute("fill",fill)}function arc(t,e,i,r){var n,s;null!=r&&(n=doc.getElementById(r)),null==i&&(s=[e[0]-t[0],e[1]-t[1]],i=Math.sqrt(s[0]*s[0]+s[1]*s[1])),null==n&&((n=myCreateElementSVG("path")).setAttribute("id",r),svgpicture.appendChild(n)),n.setAttribute("d","M"+(t[0]*xunitlength+origin[0])+","+(height-t[1]*yunitlength-origin[1])+" A"+i*xunitlength+","+i*yunitlength+" 0 0,0 "+(e[0]*xunitlength+origin[0])+","+(height-e[1]*yunitlength-origin[1])),n.setAttribute("stroke-width",strokewidth),n.setAttribute("stroke",stroke),"trans"==fill.substr(0,5)?(n.setAttribute("fill",fill.substring(5)),n.setAttribute("fill-opacity",fillopacity)):n.setAttribute("fill",fill),s="arrow"==marker||"arrowdot"==marker?(u=[(e[1]-t[1])/4,(t[0]-e[0])/4],s=[(e[0]-t[0])/2,(e[1]-t[1])/2],[t[0]+s[0]+u[0],t[1]+s[1]+u[1]]):[t[0],t[1]],"dot"==marker||"arrowdot"==marker?(ASdot(t,4,markerstroke,markerfill),"arrowdot"==marker&&arrowhead(s,e),ASdot(e,4,markerstroke,markerfill)):"arrow"==marker&&arrowhead(s,e)}function ellipse(t,e,i,r){var n;null!=r&&(n=doc.getElementById(r)),null==n&&((n=myCreateElementSVG("ellipse")).setAttribute("id",r),svgpicture.appendChild(n)),n.setAttribute("cx",t[0]*xunitlength+origin[0]),n.setAttribute("cy",height-t[1]*yunitlength-origin[1]),n.setAttribute("rx",e*xunitlength),n.setAttribute("ry",i*yunitlength),n.setAttribute("stroke-width",strokewidth),n.setAttribute("stroke",stroke),"trans"==fill.substr(0,5)?(n.setAttribute("fill",fill.substring(5)),n.setAttribute("fill-opacity",fillopacity)):n.setAttribute("fill",fill)}function rect(t,e,i,r,n){var s;null!=i&&(s=doc.getElementById(i)),null==s&&((s=myCreateElementSVG("rect")).setAttribute("id",i),svgpicture.appendChild(s)),s.setAttribute("x",Math.min(t[0],e[0])*xunitlength+origin[0]),s.setAttribute("y",height-Math.max(e[1],t[1])*yunitlength-origin[1]),s.setAttribute("width",Math.abs(e[0]-t[0])*xunitlength),s.setAttribute("height",Math.abs(e[1]-t[1])*yunitlength),null!=r&&s.setAttribute("rx",r*xunitlength),null!=n&&s.setAttribute("ry",n*yunitlength),s.setAttribute("stroke-width",strokewidth),s.setAttribute("stroke",stroke),"trans"==fill.substr(0,5)?(s.setAttribute("fill",fill.substring(5)),s.setAttribute("fill-opacity",fillopacity)):s.setAttribute("fill",fill)}function text(t,e,i,r){t[0]=t[0]*xunitlength+origin[0],t[1]=t[1]*yunitlength+origin[1],textabs(t,e,i,r)}function textabs(t,e,i,r,n,s){var l,o,a,u,d,h;if(l="middle",a=o=0,270==(r=null==r?0:(360-r)%360)&&(a=0,o=fontsize/3,null!=i&&(i.match(/left/)&&(o=-fontsize/2-2),i.match(/right/)&&(o=1*fontsize+2),i.match(/above/)&&(l="start",a=-fontsize/2-2),i.match(/below/)&&(l="end",a=fontsize/2+2))),90==r&&(a=0,o=-fontsize/3,null!=i&&(i.match(/left/)&&(o=-fontsize-2),i.match(/right/)&&(o=fontsize/2+2),i.match(/above/)&&(l="end",a=-fontsize/2-2),i.match(/below/)&&(l="start",a=fontsize/2+2))),0==r&&(o=0,a=fontsize/3,null!=i&&(i.match(/above/)&&(a=-fontsize/3-2),i.match(/below/)&&(a=1*fontsize+2),i.match(/right/)&&(l="start",o=fontsize/3+2),i.match(/left/)&&(l="end",o=-fontsize/3-2))),null!=n&&(u=doc.getElementById(n)),null==u&&((u=myCreateElementSVG("text")).setAttribute("id",n),svgpicture.appendChild(u),u.appendChild(doc.createTextNode(e))),u.lastChild.nodeValue=e,u.setAttribute("x",t[0]+o),u.setAttribute("y",height-t[1]+a),0!=r&&u.setAttribute("transform","rotate("+r+" "+(t[0]+o)+" "+(height-t[1]+a)+")"),u.setAttribute("font-style",null!=s?s:fontstyle),u.setAttribute("font-family",fontfamily),u.setAttribute("font-size",fontsize),u.setAttribute("font-weight",fontweight),u.setAttribute("text-anchor",l),"none"!=fontfill&&u.setAttribute("fill",fontfill),u.setAttribute("stroke-width","0px"),"none"!=fontbackground)try{d=u.getBBox(),(h=myCreateElementSVG("rect")).setAttribute("fill",fontbackground),h.setAttribute("stroke-width","0px"),h.setAttribute("x",d.x-2),h.setAttribute("y",d.y-1),h.setAttribute("width",d.width+4),h.setAttribute("height",d.height+2),0!=r&&h.setAttribute("transform","rotate("+r+" "+(t[0]+o)+" "+(height-t[1]+a)+")"),svgpicture.insertBefore(h,u)}catch(t){}return t}function ASdot(t,e,i,r){null==i&&(i=stroke),null==r&&(r=fill);var n=myCreateElementSVG("circle");n.setAttribute("cx",t[0]*xunitlength+origin[0]),n.setAttribute("cy",height-t[1]*yunitlength-origin[1]),n.setAttribute("r",e),n.setAttribute("stroke-width",strokewidth),n.setAttribute("stroke",i),n.setAttribute("fill",r),svgpicture.appendChild(n)}function dot(t,e,i,r,n){var s,l=t[0]*xunitlength+origin[0],o=height-t[1]*yunitlength-origin[1];null!=n&&(s=doc.getElementById(n)),"+"==e||"-"==e||"|"==e?(null==s&&((s=myCreateElementSVG("path")).setAttribute("id",n),svgpicture.appendChild(s)),"+"==e?(s.setAttribute("d"," M "+(l-ticklength)+" "+o+" L "+(l+ticklength)+" "+o+" M "+l+" "+(o-ticklength)+" L "+l+" "+(o+ticklength)),s.setAttribute("stroke-width",.5),s.setAttribute("stroke",axesstroke)):("-"==e?s.setAttribute("d"," M "+(l-ticklength)+" "+o+" L "+(l+ticklength)+" "+o):s.setAttribute("d"," M "+l+" "+(o-ticklength)+" L "+l+" "+(o+ticklength)),s.setAttribute("stroke-width",strokewidth),s.setAttribute("stroke",stroke))):(null==s&&((s=myCreateElementSVG("circle")).setAttribute("id",n),svgpicture.appendChild(s)),s.setAttribute("cx",l),s.setAttribute("cy",o),s.setAttribute("r",dotradius),s.setAttribute("stroke-width",strokewidth),s.setAttribute("stroke",stroke),s.setAttribute("fill","open"==e?"white":stroke)),null!=i&&text(t,i,null==r?"below":r,null==n?n:n+"label")}function arrowhead(t,e){var i,r,n=[t[0]*xunitlength+origin[0],height-t[1]*yunitlength-origin[1]],s=[e[0]*xunitlength+origin[0],height-e[1]*yunitlength-origin[1]],l=[s[0]-n[0],s[1]-n[1]],o=Math.sqrt(l[0]*l[0]+l[1]*l[1]);1e-8<o&&(i=[-(l=[l[0]/o,l[1]/o])[1],l[0]],(r=myCreateElementSVG("path")).setAttribute("d","M "+(s[0]-15*l[0]-4*i[0])+" "+(s[1]-15*l[1]-4*i[1])+" L "+(s[0]-3*l[0])+" "+(s[1]-3*l[1])+" L "+(s[0]-15*l[0]+4*i[0])+" "+(s[1]-15*l[1]+4*i[1])+" z"),r.setAttribute("stroke-width",markerstrokewidth),r.setAttribute("stroke",stroke),r.setAttribute("fill",stroke),svgpicture.appendChild(r))}function addMagGlass(){node=myCreateElementSVG("circle"),node.setAttribute("id","magglass1"),node.setAttribute("cx",width-10),node.setAttribute("cy",height-10),node.setAttribute("r",5),node.setAttribute("stroke-width",2),node.setAttribute("stroke","grey"),node.setAttribute("stroke-opacity",.5),node.setAttribute("fill","none"),svgpicture.appendChild(node),node=myCreateElementSVG("line"),node.setAttribute("id","magglass2"),node.setAttribute("x1",width-1),node.setAttribute("y1",height-1),node.setAttribute("x2",width-6),node.setAttribute("y2",height-6),node.setAttribute("stroke-width",2),node.setAttribute("stroke","grey"),node.setAttribute("stroke-opacity",.5),node.setAttribute("fill","none"),svgpicture.appendChild(node),node=myCreateElementSVG("rect"),node.setAttribute("id","magglass3"),node.setAttribute("x",width-20),node.setAttribute("y",height-20),node.setAttribute("width",20),node.setAttribute("height",20),node.setAttribute("stroke","none"),node.setAttribute("fill","white"),node.setAttribute("fill-opacity",.01),node.style.cursor="pointer",svgpicture.appendChild(node),node.setAttribute("tabindex",0),node.setAttribute("aria-label","Expand Graph"),node.addEventListener("click",asciisvgexpand),node.addEventListener("keydown",function(t){13===t.keyCode&&asciisvgexpand(t)})}function chopZ(t){var e,i=t.indexOf(".");if(-1==i)return t;for(e=t.length-1;i<e&&"0"==t.charAt(e);e--);return e==i&&e--,t.slice(0,e+1)}function rounddec(t,e){e=2+Math.max(0,e-2);var i=Math.pow(10,e);return Math.round(t*i)/i}function grid(t,e){axes(t,e,null,t,e)}function noaxes(){initialized||initPicture()}function axes(t,e,i,r,n,s,l,o){var a,u,d,h,c,g,p,m,b,x,f,y,A,w,v,k,M,S;if(initialized||initPicture(),"string"==typeof t&&(i=t,t=null),"string"==typeof e&&(r=e,e=null),null!=xscl&&(r=t=xscl,i=t),null!=yscl&&(n=e=yscl),null!=xtick&&(t=xtick),null!=ytick&&(e=ytick),null==s&&(s=!0),null==l&&(l=!0),y=f=!1,"fq"==s&&(f=!0),"fq"==l&&(y=!0),l="off"!=l&&0!=l,null!=r&&0<r&&width<(xmax-xmin)/r&&(r=xmax-xmin),null!=n&&0<n&&height<(ymax-ymin)/n&&(n=ymax-ymin),width<(xmax-xmin)/t&&(t=xmax-xmin),height<(ymax-ymin)/e&&(e=ymax-ymin),t=null==t?xunitlength:t*xunitlength,e=null==e?t:e*yunitlength,fontsize=(s="off"!=s&&0!=s)?l?Math.floor(Math.min(Math.abs(t)/1.5,Math.abs(e)/1.5,16)):Math.floor(Math.min(Math.abs(t)/1.5,16)):Math.floor(Math.min(Math.abs(e)/1.5,16)),ticklength=fontsize/4,null!=xgrid&&(r=xgrid),null!=ygrid&&(n=ygrid),null!=r&&0<r){if(k=null!=o&&1==o?(A=origin[1]+.7*ticklength,w=origin[1]-.7*ticklength,v=origin[0]-.7*ticklength,origin[0]+.7*ticklength):(A=winymin,w=winymax,v=winxmin,winxmax),r="string"==typeof r?t:r*xunitlength,n=null==n?e:n*yunitlength,b=myCreateElementSVG("path"),x="",s&&0<r){for(a=origin[0];a<=winxmax;a+=r)a>=winxmin&&(x+=" M"+a+","+A+" "+a+","+(y?height-origin[1]:w));if(!f)for(a=origin[0]-r;a>=winxmin;a-=r)a<=winxmax&&(x+=" M"+a+","+A+" "+a+","+(y?height-origin[1]:w))}if(l&&0<n){if(!y)for(u=height-origin[1];u<=winymax;u+=n)u>=winymin&&(x+=" M"+(f?origin[0]:v)+","+u+" "+k+","+u);for(u=height-origin[1]-n;u>=winymin;u-=n)u<=winymax&&(x+=" M"+(f?origin[0]:v)+","+u+" "+k+","+u)}b.setAttribute("d",x),b.setAttribute("stroke-width",.5),b.setAttribute("stroke",gridstroke),b.setAttribute("fill",fill),svgpicture.appendChild(b)}if(b=myCreateElementSVG("path"),s&&(x="M"+(f?origin[0]:winxmin)+","+(height-origin[1])+" "+winxmax+","+(height-origin[1])),l&&(x+=" M"+origin[0]+","+winymin+" "+origin[0]+","+(y?height-origin[1]:winymax)),s&&0<t){for(a=origin[0];a<winxmax;a+=t)a>=winymin&&(x+=" M"+a+","+(height-origin[1]+ticklength)+" "+a+","+(height-origin[1]-ticklength));if(!f)for(a=origin[0]-t;a>winxmin;a-=t)a<=winxmax&&(x+=" M"+a+","+(height-origin[1]+ticklength)+" "+a+","+(height-origin[1]-ticklength))}if(l&&0<e){if(!y)for(u=height-origin[1];u<winymax;u+=e)u>=winymin&&(x+=" M"+(origin[0]+ticklength)+","+u+" "+(origin[0]-ticklength)+","+u);for(u=height-origin[1]-e;u>winymin;u-=e)u<=winymax&&(x+=" M"+(origin[0]+ticklength)+","+u+" "+(origin[0]-ticklength)+","+u)}if(null!=i){if(d=t/xunitlength,h=e/yunitlength,p=0==(g=0<ymin||ymax<0?ymin:0)?"below":"above",m=0==(c=0<xmin||xmax<0?xmin:0)?"left":"right",M=Math.floor(1-Math.log(d)/Math.log(10))+1,(S=Math.floor(1-Math.log(h)/Math.log(10))+1)<0&&(S=0),M<0&&(M=0),s&&0<t){for(a=l?d:0;a<=xmax;a+=d)xmin<=a&&text([a,g],rounddec(a,M),p);if(!f)for(a=-d;xmin<=a;a-=d)a<=xmax&&text([a,g],rounddec(a,M),p)}if(l&&0<e){for(u=s?h:0;u<=ymax;u+=h)ymin<=u&&text([c,u],rounddec(u,S),m);if(!y)for(u=-h;ymin<=u;u-=h)u<=ymax&&text([c,u],rounddec(u,S),m)}}b.setAttribute("d",x),b.setAttribute("stroke-width",.5),b.setAttribute("stroke",axesstroke),b.setAttribute("fill",fill),svgpicture.appendChild(b)}function slopefield(fun,dx,dy){var gxy,x,y,u,v,dz,x_min,y_min,g=fun;for("string"==typeof fun&&eval("g = function(x,y){ return "+prepWithMath(mathjs(fun,"x|y"))+" }"),null==dx&&(dx=1),null==dy&&(dy=1),dz=Math.sqrt(dx*dx+dy*dy)/6,x_min=dx*Math.ceil(xmin/dx),y_min=dy*Math.ceil(ymin/dy),x=x_min;x<=xmax;x+=dx)for(y=y_min;y<=ymax;y+=dy)gxy=g(x,y),isNaN(gxy)||(v="Infinity"==Math.abs(gxy)?(u=0,dz):(u=dz/Math.sqrt(1+gxy*gxy),gxy*u),line([x-u,y-v],[x+u,y+v]))}function drawPictures(){drawPics()}function parseShortScript(sscript,gw,gh){var sa,inx,varlet,eqnlist,fails,tofixid;if(null==sscript&&(sscript=picture.sscr,initialized=!1),sa=sscript.split(","),gw&&gh&&(sa[9]=gw,sa[10]=gh,sscript=sa.join(","),picture.setAttribute("sscr",sscript)),picture.hasAttribute("viewBox")?picture.setAttribute("viewBox","0 0 "+sa[9]+" "+sa[10]):(picture.setAttribute("width",sa[9]),picture.setAttribute("height",sa[10]),picture.style.width=sa[9]+"px",picture.style.height=sa[10]+"px"),10<sa.length){for(commands="setBorder(5);",commands+="width="+sa[9]+"; height="+sa[10]+";",commands+="initPicture("+sa[0]+","+sa[1]+","+sa[2]+","+sa[3]+");",commands+="axes("+sa[4]+","+sa[5]+","+sa[6]+","+sa[7]+","+sa[8]+");",inx=11,varlet="",eqnlist="Graphs on the window x="+sa[0]+" to "+sa[1]+" and y="+sa[2]+" to "+sa[3]+": ";sa.length>inx+9;)commands+='stroke="'+sa[inx+7]+'";',eqnlist+=sa[inx+7]+" ",commands+='strokewidth="'+sa[inx+8]+'";',""!=sa[inx+9]&&(commands+='strokedasharray="'+sa[inx+9].replace(/\s+/g,",")+'";',"2"==sa[inx+9]?eqnlist+="dotted ":"5"==sa[inx+9]?eqnlist+="dashed ":"5 2"==sa[inx+9]?eqnlist+="tight dashed ":"7 3 2 3"==sa[inx+9]&&(eqnlist+="dash-dot ")),"slope"==sa[inx]?(eqnlist+="slopefield where dy/dx="+sa[inx+1]+". ",commands+='slopefield("'+sa[inx+1]+'",'+sa[inx+2]+","+sa[inx+2]+");"):"label"==sa[inx]?(eqnlist+="label with text "+sa[inx+1]+" at the point ("+sa[inx+5]+","+sa[inx+6]+"). ",commands+="text(["+sa[inx+5]+","+sa[inx+6]+'],"'+sa[inx+1]+'");'):("func"==sa[inx]?(eqnlist+="graph of y="+sa[inx+1],eqn='"'+sa[inx+1]+'"',varlet="x"):"polar"==sa[inx]?(eqnlist+="polar graph of r="+sa[inx+1],eqn='["cos(t)*('+sa[inx+1]+')","sin(t)*('+sa[inx+1]+')"]',varlet="r"):"param"==sa[inx]&&(eqnlist+="parametric graph of x(t)="+sa[inx+1]+", y(t)="+sa[inx+2],eqn='["'+sa[inx+1]+'","'+sa[inx+2]+'"]',varlet="t"),"number"==typeof eval(sa[inx+5])?(commands+="plot("+eqn+","+sa[inx+5]+","+sa[inx+6]+",null,null,"+sa[inx+3]+","+sa[inx+4]+");",eqnlist+=" from "+varlet+"="+sa[inx+5]+" ",1==sa[inx+3]?eqnlist+="with an arrow ":2==sa[inx+3]?eqnlist+="with an open dot ":3==sa[inx+3]&&(eqnlist+="with a closed dot "),eqnlist+="to "+varlet+"="+sa[inx+6]+" ",1==sa[inx+4]?eqnlist+="with an arrow ":2==sa[inx+4]?eqnlist+="with an open dot ":3==sa[inx+4]&&(eqnlist+="with a closed dot ")):commands+="plot("+eqn+",null,null,null,null,"+sa[inx+3]+","+sa[inx+4]+");",eqnlist+=". "),inx+=10;picture.setAttribute("alt",eqnlist);try{eval(commands),svgpicture.hasAttribute("viewBox")||svgpicture.hasAttribute("data-nomag")||addMagGlass()}catch(t){if(picture.hasAttribute("data-failedrenders")){if(fails=picture.getAttribute("data-failedrenders"),3<fails)return commands;picture.setAttribute("data-failedrenders",fails+1)}else picture.setAttribute("data-failedrenders",1);tofixid=picture.getAttribute("id"),setTimeout(function(){switchTo(tofixid),parseShortScript(sscript,gw,gh)},100)}return commands}}function drawPics(base){var index,nd,i,len,sscr,src;if(base=base||document,pictures=base.getElementsByTagName("embed"),!ASnoSVG&&isOldIE)try{for(i=0;i<pictures.length;i++)if((""!=pictures[i].getAttribute("sscr")||""!=pictures[i].getAttribute("script"))&&null==pictures[i].getSVGDocument().getElementById("root"))return void setTimeout(drawPics,100)}catch(t){return void setTimeout(drawPics,100)}for(len=pictures.length,index=len-1;0<=index;index--)if(picture=pictures[index],picture.hasAttribute("id")&&""!=picture.getAttribute("id")||(picture.setAttribute("id","ASnewid"+ASgraphidcnt),ASgraphidcnt++),ASnoSVG)sscr=picture.hasAttribute("data-sscr")?picture.getAttribute("data-sscr"):picture.getAttribute("sscr"),null!=sscr&&""!=sscr&&(n=document.createElement("img"),n.setAttribute("style",picture.getAttribute("style")),n.setAttribute("src",AScgiloc+"?sscr="+encodeURIComponent(sscr)),pn=picture.parentNode,pn.replaceChild(n,picture));else if(initialized=!1,sscr=picture.hasAttribute("data-sscr")?picture.getAttribute("data-sscr"):picture.getAttribute("sscr"),null!=sscr&&""!=sscr)try{parseShortScript(sscr)}catch(t){}else if(src=picture.hasAttribute("data-script")?picture.getAttribute("data-script"):picture.getAttribute("script"),null!=src&&""!=src)try{eval(prepWithMath(src)),picture.hasAttribute("data-enlarged")||picture.hasAttribute("data-nomag")||addMagGlass()}catch(t){alert(t+"\n"+src)}}function plot(fun,x_min,x_max,points,id,min_type,max_type){var min,max,inc,gt,t,pth=[],f=function(t){return t},g=fun,name=null;if("string"==typeof fun?eval("g = function(x){ return "+prepWithMath(mathjs(fun,"x"))+" }"):"object"==typeof fun&&(eval("f = function(t){ return "+prepWithMath(mathjs(fun[0],"t"))+" }"),eval("g = function(t){ return "+prepWithMath(mathjs(fun[1],"t"))+" }")),"string"==typeof x_min?(name=x_min,x_min=xmin):name=id,min=null==x_min?xmin:x_min,max=null==x_max?xmax:x_max,max<=min)return null;for(inc=max-min-1e-6*(max-min),inc=null==points?inc/200:inc/points,t=min;t<=max;t+=inc)gt=g(t),isNaN(gt)||"Infinity"==Math.abs(gt)||(0<pth.length&&Math.abs(gt-pth[pth.length-1][1])>ymax-ymin?(1<pth.length&&path(pth,name),pth.length=0):pth[pth.length]=[f(t),gt]);return 1<pth.length&&path(pth,name),1==min_type?arrowhead(pth[1],pth[0]):2==min_type?dot(pth[0],"open"):3==min_type&&dot(pth[0],"closed"),1==max_type?arrowhead(pth[pth.length-2],pth[pth.length-1]):2==max_type?dot(pth[pth.length-1],"open"):3==max_type&&dot(pth[pth.length-1],"closed"),p}defaultheight=200,defaultborder=[0,0,0,0],border=defaultborder,fillopacity=.5,markerstrokewidth="1",markerstroke="black",markerfill="yellow",marker="none",arrowfill=stroke,dotradius=4,ticklength=4,axesstroke="black",gridstroke="#757575",pointerpos=null,coordinates=null,above="above",below="below",left="left",right="right",aboveleft="aboveleft",aboveright="aboveright",belowleft="belowleft",belowright="belowright",isOldIE=null==document.createElementNS,ASgraphidcnt=0,$(function(){drawPics()}),checkIfSVGavailable&&(checkifSVGavailable=!1,nd=isSVGavailable(),ASnoSVG=null!=nd),window.drawPictures=drawPictures,window.drawPics=drawPics,window.ASnoSVG=ASnoSVG,window.parseShortScript=parseShortScript}();

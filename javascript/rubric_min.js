var hasTouch,rubricbase,lastrubricpos;function imasrubric_getpttot(t){var e,i=0;for(e=0;e<imasrubrics[t].data.length;e++)0==imasrubrics[t].type||1==imasrubrics[t].type?i+=imasrubrics[t].data[e][2]:3!=imasrubrics[t].type&&4!=imasrubrics[t].type||(i=Math.max(i,imasrubrics[t].data[e][2]));return i=Math.round(10*i)/10}function imasrubric_show(t,e,i,r,n,o){var a,c,s,d,u,l,m;hasTouch="ontouchstart"in document.documentElement,0==GB_loaded&&((a=document.createElement("div")).id="GB_window",a.innerHTML='<div id="GB_caption"></div><div id="GB_loading">Loading...</div><div id="GB_frameholder"></div>',document.getElementsByTagName("body")[0].appendChild(a),GB_loaded=!0),document.getElementById("GB_caption").innerHTML='<span style="float:right;"><span class="pointer clickable" onclick="GB_hide()">[X]</span></span> Rubric',document.getElementById("GB_caption").style.cursor="move",document.getElementById("GB_window").style.display="block",document.getElementById("GB_window").style.position="absolute",document.getElementById("GB_window").style.height="auto",document.getElementById("GB_window").style.margin="0",document.getElementById("GB_loading").style.display="block",hasTouch?$("#GB_caption").bind("touchstart",function(t){var e=t.originalEvent.changedTouches[0]||t.originalEvent.touches[0];rubricbase={left:e.pageX,top:e.pageY},$("body").bind("touchmove",rubricmousemove),$("body").bind("touchend",function(t){var e=$("#GB_window").offset();lastrubricpos.left=e.left,lastrubricpos.top=e.top,$("body").unbind("touchmove",rubricmousemove),$(this).unbind(t)})}):$("#GB_caption").mousedown(function(t){rubricbase={left:t.pageX,top:t.pageY},$("body").bind("mousemove",rubricmousemove),$("body").mouseup(function(t){var e=$("#GB_window").offset();lastrubricpos.left=e.left,lastrubricpos.top=e.top,$("body").unbind("mousemove",rubricmousemove),$(this).unbind(t)})}),c="<div style='margin: 10px;'><form id='imasrubricform'><table><tbody>",imasrubrics[t].type<2&&(c+='<tr><td></td><td colspan="3"><a href="#" onclick="imasrubric_fullcredit();return false;">'+_("Full Credit")+"</a></td></tr>"),s=imasrubric_getpttot(t);for(d=0;d<imasrubrics[t].data.length;d++)0==imasrubrics[t].type||1==imasrubrics[t].type?(c+="<tr><td>"+imasrubrics[t].data[d][0],""!=imasrubrics[t].data[d][1]&&(c+="<br/><i>"+imasrubrics[t].data[d][1]+"</i>"),totpts=Math.round(100*Math.round(e*imasrubrics[t].data[d][2])/s)/100,c+='</td><td width="10%"><input type="radio" name="rubricgrp'+d+'" value="'+totpts+'"/> '+totpts+"</td>",c+='<td width="10%"><input type="radio" name="rubricgrp'+d+'" value="0" checked="checked"/> 0</td>',c+='<td width="10%" style="white-space:nowrap;"><input type="radio" name="rubricgrp'+d+'" id="rubricgrpother'+d+'" value="-1"/> Other: <input onfocus="document.getElementById(\'rubricgrpother'+d+'\').checked=true" type="number" step="0.1" min="0" max="'+totpts+'" size="3" id="rubricother'+d+'" value=""/></td></tr>'):2==imasrubrics[t].type?(c+="<tr><td>"+imasrubrics[t].data[d][0],""!=imasrubrics[t].data[d][1]&&(c+="<br/><i>"+imasrubrics[t].data[d][1]+"</i>"),c+='</td><td><input type="checkbox" id="rubricchk'+d+'" value="1"/></td></tr>'):3!=imasrubrics[t].type&&4!=imasrubrics[t].type||(c+="<tr><td>"+imasrubrics[t].data[d][0],""!=imasrubrics[t].data[d][1]&&(c+="<br/><i>"+imasrubrics[t].data[d][1]+"</i>"),totpts=Math.round(100*Math.round(e*imasrubrics[t].data[d][2])/s)/100,c+='</td><td width="10%"><input type="radio" name="rubricgrp" value="'+d+'"/> '+totpts+"</td></tr>");c+='</tbody></table><br/><input type="button" value="Record" onclick="imasrubric_record(\''+t+"','"+i+"','"+r+"','"+n+"',"+e+',false)" />',c+='<input type="button" value="Clear Existing and Record" onclick="imasrubric_record(\''+t+"','"+i+"','"+r+"','"+n+"',"+e+',true)" /></form></div>',document.getElementById("GB_frameholder").innerHTML=c,document.getElementById("GB_loading").style.display="none",u=document.documentElement,l=self.innerWidth||u&&u.clientWidth||document.body.clientWidth,m=self.innerHeight||u&&u.clientHeight||document.body.clientHeight,document.getElementById("GB_window").style.width=o+"px",$("#GB_window").outerHeight()>m-30&&(document.getElementById("GB_window").style.height=m-30+"px"),document.getElementById("GB_window").style.left=(l-o)/2+"px",lastrubricpos={left:($(window).width()-$("#GB_window").outerWidth())/2,top:$(window).scrollTop()+((window.innerHeight?window.innerHeight:$(window).height())-$("#GB_window").outerHeight())/2,scroll:$(window).scrollTop()},document.getElementById("GB_window").style.top=lastrubricpos.top+"px"}function rubricmousemove(t){return $("#GB_window").css("left",t.pageX-rubricbase.left+lastrubricpos.left).css("top",t.pageY-rubricbase.top+lastrubricpos.top),!1}function rubrictouchmove(t){var e=t.originalEvent.changedTouches[0]||t.originalEvent.touches[0];return $("#GB_window").css("left",e.pageX-rubricbase.left+lastrubricpos.left).css("top",e.pageY-rubricbase.top+lastrubricpos.top),t.preventDefault(),!1}function imasrubric_record(t,e,i,r,n,o){var a,c,s,d,u="";if(null!==r&&(u+="#"+r+": "),a=window.tinymce?tinymce.get(i).getContent():$("textarea[name="+i+"]").val(),c=imasrubric_getpttot(t),0==imasrubrics[t].type||1==imasrubrics[t].type){for(d=s=0;d<imasrubrics[t].data.length;d++)val=getRadioValue("rubricgrp"+d),-1==val?thisscore=1*document.getElementById("rubricother"+d).value:thisscore=1*val,s+=thisscore,totpts=Math.round(n*imasrubrics[t].data[d][2])/c,u+="<li>"+imasrubrics[t].data[d][0]+": "+thisscore+"/"+totpts+".</li>";""!=u&&(u="<ul class=nomark>"+u+"</ul>"),document.getElementById(e).value=s,1==imasrubrics[t].type&&(o?window.tinymce?tinymce.get(i).setContent(u):document.getElementById(i).value=u:window.tinymce?tinymce.get(i).setContent(a+u):document.getElementById(i).value=a+u)}else if(2==imasrubrics[t].type){for(d=0;d<imasrubrics[t].data.length;d++)document.getElementById("rubricchk"+d).checked&&(u+="<li>"+imasrubrics[t].data[d][0]+".</li>");""!=u&&(u="<ul class=nomark>"+u+"</ul>"),o?window.tinymce?tinymce.get(i).setContent(u):document.getElementById(i).value=u:window.tinymce?tinymce.get(i).setContent(a+u):document.getElementById(i).value=a+u}else 3!=imasrubrics[t].type&&4!=imasrubrics[t].type||(loc=getRadioValue("rubricgrp"),totpts=Math.round(n*imasrubrics[t].data[loc][2])/c,u+=imasrubrics[t].data[loc][0],document.getElementById(e).value=totpts,3==imasrubrics[t].type&&(o?window.tinymce?tinymce.get(i).setContent(u):document.getElementById(i).value=u:window.tinymce?tinymce.get(i).setContent(a+u):document.getElementById(i).value=a+u));document.getElementById(i).dispatchEvent(new CustomEvent("input")),document.getElementById(e).dispatchEvent(new CustomEvent("input")),(p=i.match(/^fb-(\d+)/))&&revealfb(p[1]),GB_hide()}function imasrubric_chgtype(){var t=document.getElementById("rubtype").value;for(i in els=document.getElementsByTagName("input"),els)"rubricpoints"==els[i].className&&(2==t?(els[i].style.display="none",document.getElementById("pointsheader").style.display="none",$("#breakdowninstr").hide(),$("#scoretotalinstr").hide()):(els[i].style.display="",document.getElementById("pointsheader").style.display="",0==t||1==t?($("#breakdowninstr").show(),$("#scoretotalinstr").hide()):3!=t&&4!=t||($("#breakdowninstr").hide(),$("#scoretotalinstr").show())))}function imasrubric_fullcredit(){$("#imasrubricform tr").find("input:radio:first").attr("checked",!0)}function getRadioValue(t){var e,i=document.getElementsByName(t);for(e=0;e<i.length;e++)if(i[e].checked)return i[e].value}function quickgrade(t,e,i,r,n){var o;if(0==e)for(o=0;o<r;o++)document.getElementById(i+t+"-"+o).value=n[o];else for(o=0;o<r.length;o++)document.getElementById(i+t+"-"+r[o]).value=n[r[o]]}function quicksetscore(t,e,i){if(document.getElementById(t).value=e,null!=i){var r=" | "+_("Quick feedback: ");r+='<a href="#" onclick="return quicksetfb(this)">'+_("Good!")+"</a> | ",r+='<a href="#" onclick="return quicksetfb(this)">'+_("Great work.")+"</a> | ",r+='<a href="#" onclick="return quicksetfb(this)">'+_("Excellent!")+"</a> ",$(i).siblings(".quickfb").html(r)}}function quicksetfb(t){var e=$(t).text(),i=$(t).closest(".review, .scoredetails").find(".fbbox").attr("id");return window.tinymce?tinymce.get(i).setContent(e):document.getElementById(i).value=e,!1}function markallfullscore(){$(".quickgrade").click()}function revealfb(t,e){return $("#fb-"+t+"-wrap").show(),$("#fb-"+t+"-add").hide(),e&&$("#fb-"+t).focus(),!1}

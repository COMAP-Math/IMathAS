var AutoSuggestIdCounter,autoSuggestLists,autoSuggestObjects,initstack=[],callbackstack={},imathasAssess=function($){var LivePreviews,MQsyntaxtimer,greekletters,onlyAscii,allParams={};function init(e,t){var i,a,r,n,s,c;for(i in e)if(!isNaN(parseInt(i))){if(allParams[i]=e[i],(a=e[i]).helper&&a.qtype.match(/^(calc|numfunc|string)/)&&(n=document.getElementById("qn"+i),s=a.qtype,a.calcformat&&(s+=","+a.calcformat),a.displayformat&&(s+=","+a.displayformat),a.matrixsize?(s+=",matrixsized",$("input[id^=qn"+i+"-]").attr("data-mq",s)):n.setAttribute("data-mq",s),a.vars&&n.setAttribute("data-mq-vars",a.vars),t&&(a.matrixsize?MQeditor.toggleMQAll("input[id^=qn"+i+"-]",!0,!0):MQeditor.toggleMQ(n,!0,!0),$("#pbtn"+i).hide())),a.preview&&(c=i,document.getElementById("pbtn"+i).addEventListener("click",function(){showPreview(c)}),a.qtype.match(/matrix/)||(LivePreviews.hasOwnProperty(i)&&delete LivePreviews[i],setupLivePreview(i,t),document.getElementById("qn"+i).addEventListener("keyup",updateLivePreview),t&&showSyntaxCheckMQ(i))),"debit"===a.format?document.getElementById("qn"+i).addEventListener("keyup",editdebit):"credit"===a.format?(document.getElementById("qn"+i).addEventListener("keyup",editcredit),initcreditboxes()):"normslider"===a.format&&imathasDraw.addnormslider(i,!0),a.autosuggest&&(!autoSuggestLists.hasOwnProperty(a.autosuggest)&&a.hasOwnProperty(a.autosuggest)&&(autoSuggestLists[a.autosuggest]=a[a.autosuggest]),autoSuggestLists.hasOwnProperty(a.autosuggest)&&(autoSuggestObjects[i]=new AutoSuggest(document.getElementById("qn"+i),autoSuggestLists[a.autosuggest]))),a.tip)if(n=document.getElementById("qn"+i+"-0"))for(r=0;document.getElementById("qn"+i+"-"+r);)setupTips("qn"+i+"-"+r,a.tip,a.longtip),r++;else setupTips("qn"+i,a.tip,a.longtip);"draw"===a.qtype&&setupDraw(i),"file"===a.qtype&&initFileAlt(document.getElementById("qn"+i)),"multans"===a.qtype&&initMultAns(i),a.usetinymce&&initeditor("textareas","mceEditor"),initEnterHandler(i)}if(initShowAnswer2(),initqsclickchange(),initClearScoreMarkers(),e.scripts){!function e(t,i){"code"==t[i][0]?(window.eval(t[i][1]),t.length>i+1&&e(t,i+1)):jQuery.getScript(t[i][1]).always(function(){t.length>i+1&&e(t,i+1)})}(e.scripts,0)}for(r=0;r<initstack.length;r++)initstack[r]();initstack.length=0}function setupTips(e,t,i){var a,r=document.getElementById(e);r.setAttribute("data-tip",t),a=e.substr(2).split(/-/)[0],document.getElementById("tips"+a)||$("body").append($("<div>",{class:"hidden",id:"tips"+a}).html(i)),r.setAttribute("aria-label",t),r.setAttribute("aria-describedby","tips"+a),r.addEventListener("focus",function(){showehdd(e,t,a)}),r.addEventListener("blur",hideeh),r.addEventListener("click",function(){reshrinkeh(e)})}function initqsclickchange(){$("input[id^=qs][value=spec]").each(function(e,t){$(t).siblings("input[type=text]").off("keyup.qsclickchange").on("keyup.qsclickchange",function(e){8!=e.keyCode&&46!=e.keyCode&&$(t).prop("checked",!0)})})}function initClearScoreMarkers(){$("input[id^=qs],input[id^=qn],select[id^=qn]").off("input.clearmarkers change.clearmarkers").on("input.clearmarkers change.clearmarkers",function(e){var t,i,a=e.currentTarget;null!==(t=a.className.match(/(ansgrn|ansred|ansyel)/))?($(a).removeClass(t[0]),"hidden"==a.type&&$("#mqinput-"+a.id).removeClass(t[0])):0<(i=$(a).closest("[id^=qnwrap]")).length&&null!==(t=i[0].className.match(/(ansgrn|ansred|ansyel)/))&&(i.removeClass(t[0]),i.find(".scoremarker").remove())})}function initEnterHandler(e){$("input[type=text][name=qn"+e+"]").off("keydown.enterhandler").on("keydown.enterhandler",function(e){if(13==e.which){e.preventDefault();var t=$(this).closest(".questionwrap").find(".submitbtnwrap .primary");t.is(":disabled")||t.trigger("click")}})}function handleMQenter(e){var t=$("#"+e).closest(".questionwrap").find(".submitbtnwrap .primary");t.is(":disabled")||t.trigger("click")}function initShowAnswer2(){$("input.sabtn + span.hidden, input.sabtn + div.hidden").each(function(e,t){var i,a,r,n,s,c=t.id.substring(3),l=c;if(-1!==l.indexOf("-")&&(l=1e3*(1*(i=l.split("-"))[0]+1)+1*i[1]),a=$("<span>",{class:"keywrap"}).append($("<button>",{type:"button","aria-controls":"ans"+c,"aria-expanded":"false",class:"keybtn","aria-label":_("View Key"),title:_("View Key")}).on("click",function(e){var t="true"==e.currentTarget.getAttribute("aria-expanded");e.currentTarget.setAttribute("aria-expanded",t?"false":"true"),$("#ans"+c).toggle(!t)}).html('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>')),0<$(t).closest(".autoshowans").length){if(0<(r=$("#qnwrap"+l)).length)return a.append($(t).hide().removeClass("hidden")).addClass("inwrap"),$("#showansbtn"+c).remove(),void r.append(a);if(0<(n=$("#mqinput-qn"+l+",input[type=text]#qn"+l+",select#qn"+l)).length)return a.append($(t).hide().removeClass("hidden")),n.after(a),void $("#showansbtn"+c).remove()}s=$(t).parent(),a.append($(t).hide().removeClass("hidden")),s.empty().append(a)}),$("input.dsbtn + div.hidden").attr("aria-hidden",!0).attr("aria-expanded",!1),$("input.dsbtn").each(function(){var e=$(this).siblings("div:first-of-type").attr("id");$(this).attr("aria-expanded",!1).attr("aria-controls",e).off("click.sashow").on("click.sashow",function(){$(this).attr("aria-expanded",!0).siblings("div:first-of-type").attr("aria-expanded",!0).attr("aria-hidden",!1).removeClass("hidden")})})}function initShowAnswer(){$("input.sabtn + span.hidden").attr("aria-hidden",!0).attr("aria-expanded",!1),$("input.sabtn").each(function(){var e=$(this).siblings("span:first-of-type").attr("id");$(this).attr("aria-expanded",!1).attr("aria-controls",e).off("click.sashow").on("click.sashow",function(){$(this).attr("aria-expanded",!0).siblings("span:first-of-type").attr("aria-expanded",!0).attr("aria-hidden",!1).removeClass("hidden")})}),$("input.dsbtn + div.hidden").attr("aria-hidden",!0).attr("aria-expanded",!1),$("input.dsbtn").each(function(){var e=$(this).siblings("div:first-of-type").attr("id");$(this).attr("aria-expanded",!1).attr("aria-controls",e).off("click.sashow").on("click.sashow",function(){$(this).attr("aria-expanded",!0).siblings("div:first-of-type").attr("aria-expanded",!0).attr("aria-hidden",!1).removeClass("hidden")})})}function setupDraw(e){var t,i,a,r=document.getElementById("qn"+e).value,n=r.split(";;"),s=[];for(t=0;t<n.length;t++)if(5==t?n[t]="["+n[t].replace(/&quot;/g,'"')+"]":(n[t]="["+n[t].replace(/\(/g,"[").replace(/\)/g,"]")+"]",0==t&&2<n[t].length&&(n[t]="["+n[t].replace(/;/g,"],[")+"]")),""===n[t])s[t]=[];else try{s[t]=JSON.parse(n[t])}catch(e){s[t]=[]}for(window.drawla[e]=s,window.canvases[e]=allParams[e].canvas,imathasDraw.initCanvases(e),i=document.getElementById("qn"+e).parentNode.querySelectorAll("[data-drawaction]"),t=0;t<i.length;t++)i[t].addEventListener("click",function(){var e,t=event.target,i=t.getAttribute("data-drawaction"),a=t.getAttribute("data-qn");"clearcanvas"===i?imathasDraw.clearcanvas(a):"settool"===i&&(e=t.getAttribute("data-val"),imathasDraw.settool(t,a,e))});(a=document.getElementById("qn"+e).parentNode.querySelector(".a11ydrawadd"))&&a.addEventListener("click",function(){var e=event.target.getAttribute("data-qn");imathasDraw.adda11ydraw(e)})}function initMultAns(e){var t=$('input[name^="qn'+e+'["]');t.on("change",function(){this.checked&&this.value==t.length-1?t.not(":last").prop("checked",!1):this.checked&&t.last().prop("checked",!1)})}function isBlank(e){return!e||0===e.length||/^\s*$/.test(e)}function editdebit(e){var t=e.target,i=$("#qn"+(1*t.id.substr(2)-1));!isBlank(t.value)&&i.hasClass("iscredit")&&(i.css("padding-left"),i.is("select")?i.css("margin-right",20):i.width(""),i.css("padding-left",""),i.removeClass("iscredit"))}function editcredit(e){var t,i=e.target,a=$("#qn"+(1*i.id.substr(2)-2));isBlank(i.value)||a.hasClass("iscredit")||(t=parseInt(a.css("padding-left")),a.is("select")?a.css("margin-right",0):a.width(a.width()-20),a.css("padding-left",20+t),a.addClass("iscredit"))}function initcreditboxes(){$(".creditbox").each(function(e,t){editcredit({target:t})})}function setupLivePreview(a,e){LivePreviews.hasOwnProperty(a)||("MathJax"==mathRenderer||"Katex"==mathRenderer?(LivePreviews[a]={delay:"MathJax"==mathRenderer?100:0,finaldelay:1e3,preview:null,buffer:null,timeout:null,finaltimeout:null,mjRunning:!1,mjPending:!1,oldText:null,Init:function(e){$("#p"+a).css("positive","relative").append('<span id="lpbuf1'+a+'" style="visibility:hidden;position:absolute;"></span>').append('<span id="lpbuf2'+a+'" style="visibility:hidden;position:absolute;"></span>'),this.preview=document.getElementById("lpbuf1"+a),this.buffer=document.getElementById("lpbuf2"+a),e||showPreview(a)},SwapBuffers:function(){var e=this.preview,t=this.buffer;this.buffer=e,this.preview=t,e.style.visibility="hidden",e.style.position="absolute",t.style.position="",t.style.visibility=""},Update:function(e){this.timeout&&clearTimeout(this.timeout),this.finaltimeout&&clearTimeout(this.finaltimeout),this.timeout=setTimeout(this.callback,this.delay),this.finaltimeout=setTimeout(this.DoFinalPreview,this.finaldelay)},RenderNow:function(e){this.buffer.innerHTML=this.oldtext=e,this.mjRunning=!0,this.RenderBuffer()},RenderBuffer:function(){"MathJax"==mathRenderer?MathJax.Hub.Queue(["Typeset",MathJax.Hub,this.buffer],["PreviewDone",this]):"Katex"==mathRenderer&&(renderMathInElement(this.buffer),"undefined"!=typeof MathJax&&0<$(this.buffer).children(".mj").length?MathJax.Hub.Queue(["PreviewDone",this]):this.PreviewDone())},DoFinalPreview:function(){$("#pbtn"+a).trigger("click")},preformat:function(e){var t=allParams[a].qtype,i=allParams[a].calcformat;return preformat(a,e,t,i)},CreatePreview:function(){if(this.timeout=null,!this.mjPending){var e=document.getElementById("qn"+a).value;e!==this.oldtext&&(this.mjRunning?(this.mjPending=!0,MathJax.Hub.Queue(["CreatePreview",this])):(this.oldtext=e,this.buffer.innerHTML="`"+this.preformat(e)+"`",this.mjRunning=!0,this.RenderBuffer()))}},PreviewDone:function(){this.mjRunning=this.mjPending=!1,this.SwapBuffers(),updateehpos()}},"undefined"!=typeof MathJax?(LivePreviews[a].callback=MathJax.Callback(["CreatePreview",LivePreviews[a]]),LivePreviews[a].callback.autoReset=!0):LivePreviews[a].callback=function(){LivePreviews[a].CreatePreview()},LivePreviews[a].Init(e)):LivePreviews[a]={finaldelay:1e3,finaltimeout:null,Update:function(e){this.finaltimeout&&clearTimeout(this.finaltimeout),this.finaltimeout=setTimeout(this.DoFinalPreview,this.finaldelay)},RenderNow:function(e){var t=document.getElementById("p"+a);t.innerHTML=e,rendermathnode(t)},DoFinalPreview:function(){$("#pbtn"+a).trigger("click")}})}function updateLivePreview(e){var t=e.target.id.substr(2);setupLivePreview(t),LivePreviews[t].Update()}function clearLivePreviewTimeouts(){for(var e in LivePreviews)clearTimeout(LivePreviews[e].finaltimeout)}function normalizemathunicode(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]/g,"")).replace(/\u2013|\u2014|\u2015|\u2212/g,"-")).replace(/\u2044|\u2215/g,"/")).replace(/∞/g,"oo").replace(/≤/g,"<=").replace(/≥/g,">=").replace(/∪/g,"U")).replace(/±/g,"+-").replace(/÷/g,"/").replace(/·|✕|×|⋅/g,"*")).replace(/√/g,"sqrt").replace(/∛/g,"root(3)")).replace(/²/g,"^2").replace(/³/g,"^3")).replace(/\u2329/g,"<").replace(/\u232a/g,">")).replace(/₀/g,"_0").replace(/₁/g,"_1").replace(/₂/g,"_2").replace(/₃/g,"_3")).replace(/\bOO\b/i,"oo")).replace(/θ/,"theta").replace(/ϕ/,"phi").replace(/φ/,"phi").replace(/π/,"pi").replace(/σ/,"sigma").replace(/μ/,"mu")).replace(/α/,"alpha").replace(/β/,"beta").replace(/γ/,"gamma").replace(/δ/,"delta").replace(/ε/,"epsilon").replace(/κ/,"kappa")).replace(/λ/,"lambda").replace(/ρ/,"rho").replace(/τ/,"tau").replace(/χ/,"chi").replace(/ω/,"omega")).replace(/Ω/,"Omega").replace(/Γ/,"Gamma").replace(/Φ/,"Phi").replace(/Δ/,"Delta").replace(/Σ/,"Sigma")}function showPreview(e){var t,i=allParams[e],a="",r=processByType(e);r.str&&(a="`"+r.str+"`"),r.dispvalstr&&""!=r.dispvalstr&&-1!=i.calcformat.indexOf("showval")&&(a+=(""==a?"":" = ")+"`"+r.dispvalstr+"`"),r.err&&""!=r.err&&""!=r.str&&(a+="``"==a?"":". <span class=noticetext>"+r.err+"</span>"),LivePreviews.hasOwnProperty(e)?LivePreviews[e].RenderNow(a):((t=document.getElementById("p"+e)).innerHTML=a,rendermathnode(t))}function syntaxCheckMQ(e,t){clearTimeout(MQsyntaxtimer);var i=parseInt(e.replace(/\D/g,""));MQsyntaxtimer=setTimeout(function(){showSyntaxCheckMQ(i)},1e3)}function showSyntaxCheckMQ(e){var t,i=processByType(e),a="";i.err&&""!=i.err&&""!=i.str&&(a+="<span class=noticetext>"+i.err+"</span>"),LivePreviews.hasOwnProperty(e)?((t=document.getElementById("p"+e).firstChild).innerHTML=a,t.style.visibility="",t.style.position=""):(t=document.getElementById("p"+e)).innerHTML=a}function preSubmitForm(e){var t,i,a,r;for(i in allParams)!1!==(t=preSubmit(i))&&((a=document.getElementById("qn"+i+"-val"))?a.value=t:((r=document.createElement("input")).type="hidden",r.name="qn"+i+"-val",r.value=t,e.appendChild(r)))}function preSubmit(e){var t=processByType(e);return!!t.submitstr&&t.submitstr}function processByType(e){var t,i,a;if(!allParams.hasOwnProperty(e))return!1;if(i={},"draw"==(t=allParams[e]).qtype)return imathasDraw.encodea11ydraw(),{};if("choices"==t.qtype||"multans"==t.qtype||"matching"==t.qtype)return{};if(t.hasOwnProperty("matrixsize"))i=processSizedMatrix(e);else{if((a=(a=normalizemathunicode(a=document.getElementById("qn"+e).value)).replace(/^\s+/,"").replace(/\s+$/,"")).match(/^\s*$/))return{str:"",displvalstr:"",submitstr:""};if(a.match(/^\s*DNE\s*$/i))return{str:"DNE",displvalstr:"",submitstr:"DNE"};if(a.match(/^\s*oo\s*$/i))return{str:"oo",displvalstr:"",submitstr:"oo"};switch(t.qtype){case"calculated":i=processCalculated(a,t.calcformat);break;case"calcinterval":i=processCalcInterval(a,t.calcformat,t.vars);break;case"calcntuple":i=processCalcNtuple(a,t.calcformat);break;case"calccomplex":i=processCalcComplex(a,t.calcformat);break;case"calcmatrix":i=processCalcMatrix(a,t.calcformat);break;case"numfunc":i=processNumfunc(e,a,t.calcformat);break;case"matrix":(i=processCalcMatrix(a,"")).dispvalstr=""}i.str=preformat(e,a,t.qtype,t.calcformat)}return i}function preformat(e,t,i,a){return t=normalizemathunicode(t),"calcinterval"==i?a.match(/inequality/)?(t=t.replace(/<=/g," le ").replace(/>=/g," ge ").replace(/</g," lt ").replace(/>/g," gt ")).match(/all\s*real/i)&&(t="text("+t+")"):t=t.replace(/U/g,"uu"):"numfunc"==i?t=AMnumfuncPrepVar(e,t)[1]:"calcntuple"==i?t=t.replace(/<+/g,"(:").replace(/>+/g,":)"):"calculated"==i&&(-1==a.indexOf("list")&&-1==a.indexOf("set")&&(t=t.replace(/(\d)\s*,\s*(?=\d{3}\b)/g,"$1")),-1!=a.indexOf("scinot")&&(t=t.replace(/(x|X|\u00D7)/,"xx"))),t=t.replace(/[^\u0000-\u007f]/g,"?")}function AMnumfuncPrepVar(e,t){var a,i,r,n,s,c,l,o,d,u,h=allParams[e].vars.slice(),p=h.join("|"),g=allParams[e].fvars.join("|");for(h.push("DNE"),p.match(/lambda/)&&(t=t.replace(/lamda/,"lambda")),t=t.replace(/,/g,"").replace(/^\s+/,"").replace(/\s+$/,""),a=[],i=(i=t).replace(/(arcsinh|arccosh|arctanh|arcsech|arccsch|arccoth|arcsin|arccos|arctan|arcsec|arccsc|arccot|sinh|cosh|tanh|sech|csch|coth|sqrt|ln|log|exp|sin|cos|tan|sec|csc|cot|abs|root)/g,functoindex),r=0;r<h.length;r++)if("varE"==h[r])t=t.replace("E","varE"),i=i.replace("E","varE");else for(a[r]=!1,n=0;n<h.length;n++)if(r!=n&&h[n].toLowerCase()==h[r].toLowerCase()&&h[n]!=h[r]){a[r]=!0;break}for(t=(t=t.replace(new RegExp("("+p+")","gi"),function(e,t){for(var i=0;i<h.length;i++)if(h[i]==t||!a[i]&&h[i].toLowerCase()==t.toLowerCase())return"@v"+i+"@"})).replace(/@v(\d+)@/g,function(e,t){return h[t]}),i=(i=i.replace(new RegExp("("+p+")","gi"),function(e,t){for(var i=0;i<h.length;i++)if(h[i]==t||!a[i]&&h[i].toLowerCase()==t.toLowerCase())return"@v"+i+"@"})).replace(/@v(\d+)@/g,function(e,t){return h[t]}),s=new Array,r=0;r<h.length;r++)1<h[r].length&&(l=!1,-1!=greekletters.indexOf(h[r].toLowerCase())&&(l=!0),h[r].match(/^\w+_\w+$/)?(c=a[r]?"g":"gi",o=new RegExp(/^(\w+)_(\w+)$/,c).exec(h[r]),d=new RegExp(o[1]+"_\\("+o[2]+"\\)",c),i=i.replace(d,h[r]),t=t.replace(d,h[r]),1<o[1].length&&-1==greekletters.indexOf(o[1].toLowerCase())&&(o[1]='"'+o[1]+'"'),1<o[2].length&&-1==greekletters.indexOf(o[2].toLowerCase())&&(o[2]='"'+o[2]+'"'),i=i.replace(new RegExp(o[0],c),o[1]+"_"+o[2]),t=t.replace(new RegExp(o[0],"g"),"repvars"+r),h[r]="repvars"+r):l||"varE"==h[r]||s.push(h[r]));return 0<s.length&&(vltq=s.join("|"),u=new RegExp("("+vltq+")","g"),i=i.replace(u,'"$1"')),i=(i=i.replace("varE","E")).replace(/@(\d+)@/g,indextofunc),p.match(/\bf\b/)&&!g.match(/\bf\b/)&&(i=(i=i.replace(/([^a-zA-Z])f\^([\d\.]+)([^\d\.])/g,"$1f^$2{::}$3")).replace(/([^a-zA-Z])f\(/g,"$1f{::}(")),p.match(/\bg\b/)&&!g.match(/\bg\b/)&&(i=(i=i.replace(/([^a-zA-Z])g\^([\d\.]+)([^\d\.])/g,"$1g^$2{::}$3")).replace(/([^a-zA-Z])g\(/g,"$1g{::}(")),[t,i,h.join("|")]}function processCalculated(e,t){var i,a,r,n,s,c;for(e=e.replace(/=/,""),i=-1!=t.indexOf("list")?e.split(/,/):-1!=t.indexOf("set")?e.replace(/[\{\}]/g,"").split(/,/):[e],a="",n=[],s=0;s<i.length;s++)str=i[s],a+=singlevalsyntaxcheck(str,t),a+=syntaxcheckexpr(str,t),a+=(r=singlevaleval(str,t))[1],n.push(r[0]);return c=n.join(", "),-1!=t.indexOf("set")&&(c="{"+c+"}"),{err:a,dispvalstr:c,submitstr:n.join(",")}}function processCalcInterval(e,t,a){var r,n,s,c,l,o,d,u,h,p;if(-1!=t.indexOf("inequality")){if(1<(r=ineqtointerval(e=e.replace(/or/g," or "),a)).length)return{err:"wrongvar"==r[1]?_("you may have used the wrong variable"):_("invalid inequality notation")};e=r[0]}if(n=[],s=[],dispstrarr=[],-1!=t.indexOf("list")){for(c=0,l=1;l<e.length-1;l++)","==e.charAt(l)&&(")"!=e.charAt(l-1)&&"]"!=e.charAt(l-1)||"("!=e.charAt(l+1)&&"["!=e.charAt(l+1)||(n.push(e.substring(c,l)),c=l+1));n.push(e.substring(c))}else n=e.split(/\s*U\s*/i);for(o="",p=[],i=0;i<n.length;i++){if(d=n[i],sm=d.charAt(0),em=d.charAt(d.length-1),2!=(u=(u=d.substring(1,d.length-1)).split(/,/)).length||"("!=sm&&"["!=sm||")"!=em&&"]"!=em){-1!=t.indexOf("inequality")?o+=_("invalid inequality notation")+". ":o+=_("invalid interval notation")+". ";break}for(j=0;j<2;j++)o+=singlevalsyntaxcheck(u[j],t),o+=syntaxcheckexpr(u[j],t),u[j].match(/^\s*\-?oo\s*$/)?p[j]=u[j]:(o+=(h=singlevaleval(u[j],t))[1],p[j]=h[0]);s[i]=sm+p[0]+","+p[1]+em,-1!=t.indexOf("inequality")&&(p[0].toString().match(/oo/)?p[1].toString().match(/oo/)?dispstrarr[i]="RR":dispstrarr[i]=a+("]"==em?"le":"lt")+p[1]:p[1].toString().match(/oo/)?dispstrarr[i]=a+("["==sm?"ge":"gt")+p[0]:dispstrarr[i]=p[0]+("["==sm?"le":"lt")+a+("]"==em?"le":"lt")+p[1])}return-1!=t.indexOf("inequality")?{err:o,dispvalstr:dispstrarr.join(' "or" '),submitstr:s.join("U")}:{err:o,dispvalstr:s.join(" uu "),submitstr:s.join("U")}}function processCalcNtuple(e,t){var i,a,r="",n=0,s=0,c="",l=!0,o=NaN;for((e=(e=e.replace(/(\s+,\s+|,\s+|\s+,)/,",")).replace(/<<(.*)>>/,"<$1>")).charAt(0).match(/[\(\[\<\{]/)||(l=!1),a=0;a<e.length;a++)i=!1,0==n&&(r+=e.charAt(a),s=a+1,","==e.charAt(a)&&(e.substring(a+1).match(/^\s*[\(\[\<\{]/)&&e.substring(0,a).match(/[\)\]\>\}]\s*$/)||(l=!1))),e.charAt(a).match(/[\(\[\<\{]/)?n++:e.charAt(a).match(/[\)\]\>\}]/)&&(n--,i=!0),(0==n&&i||1==n&&","==e.charAt(a))&&(sub=e.substring(s,a).replace(/^\s+/,"").replace(/\s+$/,""),"oo"==sub||"-oo"==sub?r+=sub:(c+=singlevalsyntaxcheck(sub,t),c+=syntaxcheckexpr(sub,t),c+=(o=singlevaleval(sub,t))[1],r+=o[0]),r+=e.charAt(a),s=a+1);return 0!=n&&(l=!1),0==l&&(c=_("Invalid notation")+". "+c),{err:c,dispvalstr:r,submitstr:r}}function processCalcComplex(e,t){var i,a,r,n,s,c,l="",o=e.split(","),d="",u="",h=[];for(s=0;s<o.length;s++)d=o[s].replace(/^\s+/,"").replace(/\s+$/,""),-1==t.indexOf("sloppycomplex")&&("string"==typeof(c=parsecomplex(o[s]))?l+=c:(l+=singlevalsyntaxcheck(c[0],t),l+=singlevalsyntaxcheck(c[1],t))),syntaxcheckexpr(d,t),i=scopedeval("var i=0;"+(n=prepWithMath(mathjs(d)))),a=scopedeval("var i=1;"+n),r=scopedeval("var i=-1;"+n),"synerr"!=i&&"synerr"!=a||(l+=_("syntax incomplete"),i=NaN),isNaN(i)||"Infinity"==i||isNaN(a)||isNaN(r)||"Infinity"==a||(a-=i,u=Math.abs(i)<1e-16?"":i,u+=Math.abs(a)<1e-16?"":(0<a&&""!=u?"+":"")+a+"i",h.push(u));return{err:l,dispvalstr:h.join(", "),submitstr:h.join(",")}}function processSizedMatrix(e){var t,i,a,r,n,s,c,l,o=allParams[e],d=o.matrixsize,u="";for(o.calcformat&&(u=o.calcformat),t=[],i=[],a=[],s="",c=r=0;c<d[0];c++){for(t[c]=[],i[c]=[],l=0;l<d[1];l++)s+=syntaxcheckexpr(n=normalizemathunicode(n=document.getElementById("qn"+e+"-"+r).value),u),s+=singlevalsyntaxcheck(n,u),t[c][l]=n,res=singlevaleval(n,u),s+=res[1],i[c][l]=res[0],a.push(res[0]),r++;t[c]="("+t[c].join(",")+")",i[c]="("+i[c].join(",")+")"}return{err:s,str:"["+t.join(",")+"]",dispvalstr:"calcmatrix"==o.qtype?"["+i.join(",")+"]":"",submitstr:a.join("|")}}function processCalcMatrix(e,t){var i,a,r,n,s,c,l,o,d,u,h,p;for(e=(e=(e=(e=e.replace("[","(")).replace("]",")")).replace(/\s+/g,"")).substring(1,e.length-1),i="",a=[],s=n=r=0;s<e.length;s++)"("==e.charAt(s)?n++:")"==e.charAt(s)?n--:","==e.charAt(s)&&0==n&&(a.push(e.substring(r+1,s-1)),r=s+1);for(a.push(e.substring(r+1,e.length-1)),c=!0,l=-1,0!==n&&(c=!1),u=[],h=[],s=0;s<a.length;s++){for(u[s]=[],o=a[s].split(","),-1<l&&o.length!=l&&(c=!1),l=o.length,p=0;p<o.length;p++)i+=syntaxcheckexpr(d=o[p].replace(/^\s+/,"").replace(/\s+$/,""),t),i+=singlevalsyntaxcheck(d,t),res=singlevaleval(d,t),i+=res[1],u[s][p]=res[0],h.push(res[0]);u[s]="("+u[s].join(",")+")"}return c||(i+=_("Invalid matrix format")+". "),{err:i,dispvalstr:"["+u.join(",")+"]",submitstr:h.join("|")}}function processNumfunc(e,t,i){var a,r,n,s,c,l=allParams[e],o=l.vars,d=l.fvars,u=l.domain,h=i.match(/equation/),p="",g=AMnumfuncPrepVar(e,t),m=g[0];for(t.match(/=/)?(h?1<t.match(/=/g).length&&(p+=_("syntax error: your equation should only contain one equal sign")):p+=_("syntax error: you gave an equation, not an expression"),m=m.replace(/(.*)=(.*)/,"$1-($2)")):h&&(p+=_("syntax error: this is not an equation")),0<d.length&&(reg=new RegExp("("+d.join("|")+")\\(","g"),m=m.replace(reg,"$1*sin($1+")),m=prepWithMath(mathjs(m,o.join("|"))),r=c=0;r<20;r++){for(n="var DNE=1;",a=0;a<o.length;a++)s=u[a][2]?Math.floor(Math.random()*(u[a][0]-u[a][1]+1)+u[a][0]):Math.random()*(u[a][0]-u[a][1])+u[a][0],n+="var "+o[a]+"="+s+";";if("synerr"!==scopedeval(n+m)){c++;break}}return 0===c&&(p+=_("syntax error")+". "),{err:p+=syntaxcheckexpr(t,"",o.join("|"))}}function simplifyVariable(e){return e.replace(/[^\w_\^\-+]/g,"")}function ineqtointerval(e,t){var i,a=simplifyVariable(t);return(e=e.replace(/(\d)\s*,\s*(?=\d{3}\b)/g,"$1")).match(/all\s*real/i)?["(-oo,oo)"]:e.match(/DNE/)?["DNE"]:(i=e.match(/^(.*?)(<=?|>=?)(.*?)(<=?|>=?)(.*?)$/))?simplifyVariable(i[3])!=a?["","wrongvar"]:i[2].charAt(0)!=i[4].charAt(0)?["","invalid"]:[(i[2].charAt(0),("<"==i[2]?"(":"[")+i[1]+","+i[5]+("<"==i[4]?")":"]"))]:(i=e.match(/^(.*?)(<=?|>=?)(.*?)$/))?simplifyVariable(i[1])==a?["<"==i[2].charAt(0)?"(-oo,"+i[3]+("<"==i[2]?")":"]"):("<"==i[2]?"(":"[")+i[3]+",oo)"]:simplifyVariable(i[3])==a?["<"==i[2].charAt(0)?("<"==i[2]?"(":"[")+i[1]+",oo)":"(-oo,"+i[1]+("<"==i[2]?")":"]")]:["","wrongvar"]:["","invalid"]}function parsecomplex(e){var t,i,a,r,n,s,c,l;if(l=(e=(e=(e=(e=e.replace(/\s/,"")).replace(/\((\d+\*?i|i)\)\/(\d+)/g,"$1/$2")).replace(/sin/,"s$n")).replace(/pi/,"p$")).length,2<e.split("i").length)return _("error - more than 1 i in expression");if(-1==(n=e.indexOf("i")))t=e,i="0";else{for(r=0,c=n-1;0<c;c--)if(")"==(a=e.charAt(c)))r++;else if("("==a)r--;else if(("+"==a||"-"==a)&&0==r)break;if(c<0&&(c=0),0!=r)return _("error - invalid form");for(r=0,s=n+1;s<l;s++)if("("==(a=e.charAt(s)))r++;else if(")"==a)r--;else if(("+"==a||"-"==a)&&0==r)break;if(0!=r)return _("error - invalid form");if(0<n-c&&0<s-n&&(s==l||0==c)){if(s==l)t=e.substr(0,c),i=e.substr(c,n-c);else{if(0!=c)return _("error - invalid form");t=e.substr(s),i=e.substr(0,n)}i=(i=(i+="*"+e.substr(n+1+("*"==e.charAt(n+1)?1:0),s-n-1)).replace("-*","-1*").replace("+*","+1*")).replace(/(\+|-)1\*(.+)/g,"$1$2")}else if(1<n-c)i=e.substr(c,n-c),t=e.substr(0,c)+e.substr(n+1);else if(1<s-n)if(0<n){if("+"!=e.charAt(n-1)&&"-"!=e.charAt(n-1))return _("error - invalid form");i=e.charAt(n-1)+e.substr(n+1+("*"==e.charAt(n+1)?1:0),s-n-1),t=e.substr(0,n-1)+e.substr(s)}else i=e.substr(n+1,s-n-1),t=e.substr(0,n)+e.substr(s);else i="+"==e.charAt(c)?"1":"-"==e.charAt(c)?"-1":0==n?"1":e.charAt(c),t=(0<n?e.substr(0,c):"")+e.substr(n+1);""==t&&(t="0"),"/"==i.charAt(0)?i="1"+i:"+"!=i.charAt(0)&&"-"!=i.charAt(0)||"/"!=i.charAt(1)||(i=i.charAt(0)+"1"+i.substr(1)),"*"==i.charAt(i.length-1)&&(i=i.substr(0,i.length-1)),"+"==i.charAt(0)&&(i=i.substr(1)),"+"==t.charAt(0)&&(t=t.substr(1))}return[t=(t=t.replace("s$n","sin")).replace("p$","pi"),i=(i=(i=i.replace("s$n","sin")).replace("p$","pi")).replace(/\*\//g,"/")]}function singlevalsyntaxcheck(e,t){if((e=e.replace(/(\d)\s*,\s*(?=\d{3}\b)/g,"$1")).match(/DNE/i))return"";if(e.match(/oo$/)||e.match(/oo\W/))return"";if(e.match(/,/))return _("Invalid use of a comma.");if(-1!=t.indexOf("allowmixed")&&e.match(/^\s*\-?\s*\d+\s*(_|\s)\s*(\d+|\(\d+\))\s*\/\s*(\d+|\(\d+\))\s*$/))return"";if(-1!=t.indexOf("fracordec")){if(!(e=e.replace(/([0-9])\s+([0-9])/g,"$1*$2").replace(/\s/g,"")).match(/^\-?\(?\d+\s*\/\s*\-?\d+\)?$/)&&!e.match(/^\-?\d+$/)&&!e.match(/^\-?(\d+|\d+\.\d*|\d*\.\d+)$/))return _(" invalid entry format")+". "}else if(-1!=t.indexOf("fraction")||-1!=t.indexOf("reducedfraction")){if(!(e=e.replace(/([0-9])\s+([0-9])/g,"$1*$2").replace(/\s/g,"")).match(/^\(?\-?\(?\d+\)?\/\(?\d+\)?$/)&&!e.match(/^\(?\d+\)?\/\(?\-?\d+\)?$/)&&!e.match(/^\s*?\-?\d+\s*$/))return _("not a valid fraction")+". "}else if(-1!=t.indexOf("mixednumber")){if(!(e.match(/^\(?\-?\s*\(?\d+\)?\/\(?\d+\)?$/)||e.match(/^\(?\d+\)?\/\(?\-?\d+\)?$/)||e.match(/^\s*\-?\s*\d+\s*(_|\s)\s*(\d+|\(\d+\))\s*\/\s*(\d+|\(\d+\))\s*$/)||e.match(/^\s*\-?\s*\d+\s*$/)))return _("not a valid mixed number")+". ";e=e.replace(/_/," ")}else if(-1!=t.indexOf("scinot")){if(!(e=(e=e.replace(/\s/g,"")).replace(/(x|X|\u00D7)/,"xx")).match(/^\-?[1-9](\.\d*)?(\*|xx)10\^(\(?\-?\d+\)?)$/)){if(-1==t.indexOf("scinotordec"))return _("not valid scientific notation")+". ";if(!e.match(/^\-?(\d+|\d+\.\d*|\d*\.\d+)$/))return _("not valid decimal or scientific notation")+". "}}else if(-1!=t.indexOf("decimal")&&-1==t.indexOf("nodecimal")){if(!e.match(/^\-?(\d+|\d+\.\d*|\d*\.\d+)$/))return _(" not a valid integer or decimal number")+". "}else if(!onlyAscii.test(e))return _("Your answer contains an unrecognized symbol")+". ";return""}function syntaxcheckexpr(e,t,i){var a,r,n,s,c,l="";for(-1!=t.indexOf("notrig")&&e.match(/(sin|cos|tan|cot|sec|csc)/i)?l+=_("no trig functions allowed")+". ":-1!=t.indexOf("nodecimal")&&-1!=e.indexOf(".")?l+=_("no decimals allowed")+". ":-1==t.indexOf("mixed")&&e.match(/\-?\s*\d+\s*(_|\s)\s*(\d+|\(\d+\))\s*\/\s*(\d+|\(\d+\))/)&&(l+=_("mixed numbers are not allowed")+". "),s=n=r=a=0;s<e.length;s++)"("==e.charAt(s)?a++:")"==e.charAt(s)?a--:"["==e.charAt(s)?r++:"]"==e.charAt(s)?r--:"|"==e.charAt(s)&&(n=1-n);if(0==a&&0==r||(l+=" ("+_("unmatched parens")+"). "),0!=n&&(l+=" ("+_("unmatched absolute value bars")+"). "),reg=i?new RegExp("(sqrt|ln|log|exp|sinh|cosh|tanh|sech|csch|coth|sin|cos|tan|sec|csc|cot|abs)s*("+i+"|\\d+)","i"):new RegExp("(sqrt|ln|log|exp|sinh|cosh|tanh|sech|csch|coth|sin|cos|tan|sec|csc|cot|abs)s*(\\d+)","i"),errstuff=e.match(reg),null!=errstuff&&(l+="["+_("use function notation")+" - "+_("use $1 instead of $2",errstuff[1]+"("+errstuff[2]+")",errstuff[0])+"]. "),i&&(reg=new RegExp("(repvars\\d+|arc|sqrt|root|ln|log|exp|sinh|cosh|tanh|sech|csch|coth|sin|cos|tan|sec|csc|cot|abs|pi|sign|DNE|e|oo|"+i+")","ig"),e.replace(reg,"").match(/[a-zA-Z]/)&&(l+=_(" Check your variables - you might be using an incorrect one")+". ")),2<(e.match(/\|/g)||[]).length)for(c=/\|.*?\|\s*(.|$)/g;match=c.exec(e);)if(""!=match[1]&&match[1].match(/[^+\-\*\/\^\)]/)){l+=_(" You may want to use abs(x) instead of |x| for absolute values to avoid ambiguity")+". ";break}return e.match(/%/)&&!e.match(/^\s*[+-]?\s*((\d+(\.\d*)?)|(\.\d+))\s*%\s*$/)&&(l+=_(" Do not use the percent symbol, %")+". "),l}function singlevaleval(e,t){(e=e.replace(/,/,"")).match(/^\s*[+-]?\s*((\d+(\.\d*)?)|(\.\d+))\s*%\s*$/)&&(e=e.replace(/%/,"")+"/100"),-1!=t.indexOf("mixed")&&(e=e.replace(/(-?\s*\d+)\s+(\d+|\(\d+\))\s*\/\s*(\d+|\(\d+\))/g,"($1+$2/$3)")),-1!=t.indexOf("scinot")&&(e=e.replace("xx","*"));try{return[scopedmatheval(e),""]}catch(e){return[NaN,_("syntax incomplete")+". "]}}function scopedeval(c){try{return eval(c)}catch(e){return"synerr"}}function scopedmatheval(c){if(c.match(/^\s*[a-df-zA-Z]\s*$/))return"";try{return eval(prepWithMath(mathjs(c)))}catch(e){return""}}return LivePreviews=[],MQsyntaxtimer=null,greekletters=["alpha","beta","chi","delta","epsilon","gamma","varphi","phi","psi","sigma","rho","theta","lambda","mu","nu","omega","tau"],onlyAscii=/^[\u0000-\u007f]*$/,{init:init,preSubmitForm:preSubmitForm,preSubmit:preSubmit,clearLivePreviewTimeouts:clearLivePreviewTimeouts,syntaxCheckMQ:syntaxCheckMQ,handleMQenter:handleMQenter}}(jQuery);function prepWithMath(e){return e=(e=(e=e.replace(/\b(abs|acos|asin|atan|ceil|floor|cos|sin|tan|sqrt|exp|max|min|pow)\(/g,"Math.$1(")).replace(/\(E\)/g,"(Math.E)")).replace(/\((PI|pi)\)/g,"(Math.PI)")}function toggleinlinebtn(e,t){var i,a=document.getElementById(t),r=document.getElementById(e);"none"==r.style.display?(r.style.display="",r.setAttribute("aria-hidden",!1),a.setAttribute("aria-expanded",!0)):(r.style.display="none",r.setAttribute("aria-hidden",!0),a.setAttribute("aria-expanded",!1)),i=a.innerHTML,a.innerHTML=i.match(/\[\+\]/)?i.replace(/\[\+\]/,"[-]"):i.replace(/\[\-\]/,"[+]")}function AutoSuggest(e,t){var a,r,n,s,c,l,o=this;this.elem=e,this.suggestions=t,this.eligible=new Array,this.inputText=null,this.highlighted=-1,this.div=document.getElementById("autosuggest"),null==this.div&&(this.div=document.createElement("div"),this.div.id="autosuggest",document.getElementsByTagName("body")[0].appendChild(this.div),this.div.appendChild(document.createElement("ul"))),a=9,r=27,n=38,s=40,c=13,e.setAttribute("autocomplete","off"),e.id||(l="autosuggest"+AutoSuggestIdCounter,AutoSuggestIdCounter++,e.id=l),e.onkeydown=function(e){var t=o.getKeyCode(e);switch(t){case a:o.useSuggestion("tab");break;case c:return o.useSuggestion("enter"),!1;case r:o.hideDiv();break;case n:0<o.highlighted&&o.highlighted--,o.changeHighlight(t);break;case s:o.highlighted<o.eligible.length-1&&o.highlighted++,o.changeHighlight(t)}},e.onkeyup=function(e){switch(o.getKeyCode(e)){case a:case r:case n:case s:return;default:1<this.value.length?(o.inputText=this.value,o.getEligible(),0<o.eligible.length?o.highlighted=0:o.highlighted=-1,o.createDiv(),o.positionDiv(),o.showDiv()):(o.hideDiv(),0==this.value.length&&(o.inputText=""))}},e.onblur=function(e){setTimeout(o.hideDiv,100)},this.useSuggestion=function(e){-1<this.highlighted&&(this.elem.value=this.eligible[this.highlighted]),this.hideDiv()},this.showDiv=function(){this.div.style.display="block"},this.hideDiv=function(){o.div.style.display="none",o.highlighted=-1},this.changeHighlight=function(){var e,t=this.div.getElementsByTagName("LI");for(i in t)e=t[i],this.highlighted==i?e.className="selected":e.className=""},this.positionDiv=function(){var e=this.elem,t=findPos(e);t[1]+=e.offsetHeight,this.div.style.left=t[0]+"px",this.div.style.top=t[1]+"px"},this.createDiv=function(){var e,t,a,r=document.createElement("ul");for(i in this.eligible)e=this.eligible[i],t=document.createElement("li"),(a=document.createElement("a")).href="#",a.onclick=function(){return!1},a.innerHTML=e,t.appendChild(a),o.highlighted==i&&(t.className="selected"),r.appendChild(t);this.div.replaceChild(r,this.div.childNodes[0]),r.onmouseover=function(e){for(var t,a=o.getEventSource(e);a.parentNode&&"LI"!=a.tagName.toUpperCase();)a=a.parentNode;for(i in t=o.div.getElementsByTagName("LI"))if(t[i]==a){o.highlighted=i;break}o.changeHighlight()},r.onclick=function(e){return o.useSuggestion("click"),o.hideDiv(),o.cancelEvent(e),!1},this.div.className="suggestion_list",this.div.style.position="absolute"},this.getEligible=function(){var e,t;if(this.eligible=new Array,",",-1==this.inputText.indexOf(" "))for(i in e=new RegExp("\\b"+this.inputText.toLowerCase()),this.suggestions)(t=this.suggestions[i]).toLowerCase().match(e)&&(this.eligible[this.eligible.length]=t,i+",")},this.getKeyCode=function(e){return e?e.keyCode:window.event?window.event.keyCode:void 0},this.getEventSource=function(e){return e?e.target:window.event?window.event.srcElement:void 0},this.cancelEvent=function(e){e&&(e.preventDefault(),e.stopPropagation()),window.event&&(window.event.returnValue=!1)}}AutoSuggestIdCounter=0,autoSuggestLists={},autoSuggestObjects={};

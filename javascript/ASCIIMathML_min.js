var AMcal,AMfrk,AMbbb,CONST,UNARY,BINARY,INFIX,LEFTBRACKET,RIGHTBRACKET,SPACE,UNDEROVER,DEFINITION,LEFTRIGHT,TEXT,AMsqrt,AMroot,AMfrac,AMdiv,AMover,AMsub,AMsup,AMtext,AMmbox,AMquote,AMsymbols,AMnames,AMmathml,AMnestingDepth,AMpreviousSymbol,AMcurrentSymbol,AMbody,AMnoMathML,AMtranslated,existing,nd,checkForMathML=!0,notifyIfNoMathML=!1,alertIfNoMathML=!1,mathcolor="",mathfontfamily="Times,STIXGeneral,serif",displaystyle=!0,showasciiformulaonhover=!0,decimalsign=".",AMdelimiter1="`",AMescape1="\\\\`",doubleblankmathdelimiter=!1,fixphi=!0,noMathRender=!1,AMisIE="Microsoft"==navigator.appName.slice(0,9);function AMcreateElementXHTML(t){return AMisIE?document.createElement(t):document.createElementNS("http://www.w3.org/1999/xhtml",t)}function AMnoMathMLNote(){var t,e=AMcreateElementXHTML("h3");return e.setAttribute("align","center"),e.appendChild(AMcreateElementXHTML("p")),e.appendChild(document.createTextNode("To view the ")),(t=AMcreateElementXHTML("a")).appendChild(document.createTextNode("ASCIIMathML")),t.setAttribute("href","http://www.chapman.edu/~jipsen/asciimath.html"),e.appendChild(t),e.appendChild(document.createTextNode(" notation use Internet Explorer 6+")),(t=AMcreateElementXHTML("a")).appendChild(document.createTextNode("MathPlayer")),t.setAttribute("href","http://www.dessci.com/en/products/mathplayer/download.htm"),e.appendChild(t),e.appendChild(document.createTextNode(" or Netscape/Mozilla/Firefox")),e.appendChild(AMcreateElementXHTML("p")),e}function AMisMathMLavailable(){var t;if(navigator.product&&"Gecko"==navigator.product)return(t=navigator.userAgent.toLowerCase().match(/rv:\s*([\d\.]+)/)[1].split(".")).length<3&&(t[2]=0),t.length<2&&(t[1]=0),10100<=1e4*t[0]+100*t[1]+1*t[2]?null:AMnoMathMLNote();if("Microsoft"!=navigator.appName.slice(0,9))return AMnoMathMLNote();try{return new ActiveXObject("MathPlayer.Factory.1"),null}catch(t){return AMnoMathMLNote()}}function compareNames(t,e){return t.input>e.input?1:-1}function AMinitSymbols(){var t,e=[];for(t=0;t<AMsymbols.length;t++)AMsymbols[t].tex&&(e[e.length]={input:AMsymbols[t].tex,tag:AMsymbols[t].tag,output:AMsymbols[t].output,ttype:AMsymbols[t].ttype});for((AMsymbols=AMsymbols.concat(e)).sort(compareNames),t=0;t<AMsymbols.length;t++)AMnames[t]=AMsymbols[t].input}function AMcreateElementMathML(t){return AMisIE?document.createElement("m:"+t):document.createElementNS(AMmathml,t)}function AMcreateMmlNode(t,e){var u;return(u=AMisIE?document.createElement("m:"+t):document.createElementNS(AMmathml,t)).appendChild(e),u}function newcommand(t,e){AMsymbols=AMsymbols.concat([{input:t,tag:"mo",output:e,tex:null,ttype:DEFINITION}])}function AMremoveCharsAndBlanks(t,e){var u,n;for(u="\\"==t.charAt(e)&&"\\"!=t.charAt(e+1)&&" "!=t.charAt(e+1)?t.slice(e+1):t.slice(e),n=0;n<u.length&&u.charCodeAt(n)<=32;n+=1);return u.slice(n)}function AMposition(t,e,u){var n,o,p;if(0==u){for(u=-1,n=t.length;u+1<n;)t[o=u+n>>1]<e?u=o:n=o;return n}for(p=u;p<t.length&&t[p]<e;p++);return p}function AMgetSymbol(t){var e,u,n,o,p,a=0,l="",i=!0;for(o=1;o<=t.length&&i;o++)u=t.slice(0,o),(a=AMposition(AMnames,u,a))<AMnames.length&&t.slice(0,AMnames[a].length)==AMnames[a]&&(o=(l=AMnames[e=a]).length),i=a<AMnames.length&&t.slice(0,AMnames[a].length)>=AMnames[a];if(AMpreviousSymbol=AMcurrentSymbol,""!=l)return AMcurrentSymbol=AMsymbols[e].ttype,AMsymbols[e];for(AMcurrentSymbol=CONST,a=1,u=t.slice(0,1),p=!0;"0"<=u&&u<="9"&&a<=t.length;)u=t.slice(a,a+1),a++;if(u==decimalsign&&"0"<=(u=t.slice(a,a+1))&&u<="9")for(p=!1,a++;"0"<=u&&u<="9"&&a<=t.length;)u=t.slice(a,a+1),a++;return n=p&&1<a||2<a?(u=t.slice(0,a-1),"mn"):(a=2,((u=t.slice(0,1))<"A"||"Z"<u)&&(u<"a"||"z"<u)?"mo":"mi"),"-"==u&&AMpreviousSymbol==INFIX?(AMcurrentSymbol=INFIX,{input:u,tag:n,output:u,ttype:UNARY,func:!0}):{input:u,tag:n,output:u,ttype:CONST}}function AMremoveBrackets(t){var e;"mrow"!=t.nodeName&&"M:MROW"!=t.nodeName||"("!=(e=t.firstChild.firstChild.nodeValue)&&"["!=e&&"{"!=e||t.removeChild(t.firstChild),"mrow"!=t.nodeName&&"M:MROW"!=t.nodeName||")"!=(e=t.lastChild.firstChild.nodeValue)&&"]"!=e&&"}"!=e||t.removeChild(t.lastChild)}function AMparseSexpr(t){var e,u,n,o,p,a,l,i,r=document.createDocumentFragment();if(null==(e=AMgetSymbol(t=AMremoveCharsAndBlanks(t,0)))||e.ttype==RIGHTBRACKET&&0<AMnestingDepth)return[null,t];switch(e.ttype==DEFINITION&&(e=AMgetSymbol(t=e.output+AMremoveCharsAndBlanks(t,e.input.length))),e.ttype){case UNDEROVER:case CONST:return t=AMremoveCharsAndBlanks(t,e.input.length),[AMcreateMmlNode(e.tag,document.createTextNode(e.output)),t];case LEFTBRACKET:return AMnestingDepth++,n=AMparseExpr(t=AMremoveCharsAndBlanks(t,e.input.length),!0),AMnestingDepth--,"boolean"==typeof e.invisible&&e.invisible?u=AMcreateMmlNode("mrow",n[0]):(u=AMcreateMmlNode("mrow",u=AMcreateMmlNode("mo",document.createTextNode(e.output)))).appendChild(n[0]),[u,n[1]];case TEXT:return e!=AMquote&&(t=AMremoveCharsAndBlanks(t,e.input.length)),-1==(o="{"==t.charAt(0)?t.indexOf("}"):"("==t.charAt(0)?t.indexOf(")"):"["==t.charAt(0)?t.indexOf("]"):e==AMquote?t.slice(1).indexOf('"')+1:0)&&(o=t.length)," "==(p=t.slice(1,o)).charAt(0)&&((u=AMcreateElementMathML("mspace")).setAttribute("width","1ex"),r.appendChild(u)),r.appendChild(AMcreateMmlNode(e.tag,document.createTextNode(p)))," "==p.charAt(p.length-1)&&((u=AMcreateElementMathML("mspace")).setAttribute("width","1ex"),r.appendChild(u)),t=AMremoveCharsAndBlanks(t,o+1),[AMcreateMmlNode("mrow",r),t];case UNARY:if(null==(n=AMparseSexpr(t=AMremoveCharsAndBlanks(t,e.input.length)))[0])return[AMcreateMmlNode(e.tag,document.createTextNode(e.output)),t];if("boolean"==typeof e.func&&e.func)return"^"==(p=t.charAt(0))||"_"==p||"/"==p||"|"==p||","==p||("f"==e.input||"g"==e.input)&&"("!=p?[AMcreateMmlNode(e.tag,document.createTextNode(e.output)),t]:((u=AMcreateMmlNode("mrow",AMcreateMmlNode(e.tag,document.createTextNode(e.output)))).appendChild(n[0]),[u,n[1]]);if(AMremoveBrackets(n[0]),"sqrt"==e.input)return[AMcreateMmlNode(e.tag,n[0]),n[1]];if("abs"==e.input)return(u=AMcreateMmlNode("mrow",AMcreateMmlNode("mo",document.createTextNode("|")))).appendChild(n[0]),u.appendChild(AMcreateMmlNode("mo",document.createTextNode("|"))),[u,n[1]];if("cancel"==e.input)return(u=AMcreateMmlNode(e.tag,n[0])).setAttribute("notation","updiagonalstrike"),[u,n[1]];if("boolean"==typeof e.acc&&e.acc)return(u=AMcreateMmlNode(e.tag,n[0])).setAttribute("accent","true"),u.appendChild(AMcreateMmlNode("mo",document.createTextNode(e.output))),[u,n[1]];if(!AMisIE&&void 0!==e.codes)for(o=0;o<n[0].childNodes.length;o++)if("mi"==n[0].childNodes[o].nodeName||"mi"==n[0].nodeName){for(p="mi"==n[0].nodeName?n[0].firstChild.nodeValue:n[0].childNodes[o].firstChild.nodeValue,a=[],l=0;l<p.length;l++)64<p.charCodeAt(l)&&p.charCodeAt(l)<91?a+=e.codes[p.charCodeAt(l)-65]:a+=p.charAt(l);"mi"==n[0].nodeName?n[0]=AMcreateElementMathML("mo").appendChild(document.createTextNode(a)):n[0].replaceChild(AMcreateElementMathML("mo").appendChild(document.createTextNode(a)),n[0].childNodes[o])}return(u=AMcreateMmlNode(e.tag,n[0])).setAttribute(e.atname,e.atval),[u,n[1]];case BINARY:return null==(n=AMparseSexpr(t=AMremoveCharsAndBlanks(t,e.input.length)))[0]?[AMcreateMmlNode("mo",document.createTextNode(e.input)),t]:(AMremoveBrackets(n[0]),null==(i=AMparseSexpr(n[1]))[0]?[AMcreateMmlNode("mo",document.createTextNode(e.input)),t]:(AMremoveBrackets(i[0]),"color"==e.input?("{"==t.charAt(0)?o=t.indexOf("}"):"("==t.charAt(0)?o=t.indexOf(")"):"["==t.charAt(0)&&(o=t.indexOf("]")),p=t.slice(1,o),(u=AMcreateMmlNode(e.tag,i[0])).setAttribute("color",p),[u,i[1]]):("root"!=e.input&&"stackrel"!=e.input||r.appendChild(i[0]),r.appendChild(n[0]),"frac"==e.input&&r.appendChild(i[0]),[AMcreateMmlNode(e.tag,r),i[1]])));case INFIX:return t=AMremoveCharsAndBlanks(t,e.input.length),[AMcreateMmlNode("mo",document.createTextNode(e.output)),t];case SPACE:return t=AMremoveCharsAndBlanks(t,e.input.length),(u=AMcreateElementMathML("mspace")).setAttribute("width","1ex"),r.appendChild(u),r.appendChild(AMcreateMmlNode(e.tag,document.createTextNode(e.output))),(u=AMcreateElementMathML("mspace")).setAttribute("width","1ex"),r.appendChild(u),[AMcreateMmlNode("mrow",r),t];case LEFTRIGHT:return AMnestingDepth++,n=AMparseExpr(t=AMremoveCharsAndBlanks(t,e.input.length),!1),AMnestingDepth--,p="",null!=n[0].lastChild&&(p=n[0].lastChild.firstChild.nodeValue),"|"==p?((u=AMcreateMmlNode("mrow",u=AMcreateMmlNode("mo",document.createTextNode(e.output)))).appendChild(n[0]),[u,n[1]]):[u=AMcreateMmlNode("mrow",u=AMcreateMmlNode("mo",document.createTextNode(e.output))),t];default:return t=AMremoveCharsAndBlanks(t,e.input.length),[AMcreateMmlNode(e.tag,document.createTextNode(e.output)),t]}}function AMparseIexpr(t){var e,u,n,o,p,a,l;return u=AMgetSymbol(t=AMremoveCharsAndBlanks(t,0)),o=(p=AMparseSexpr(t))[0],(e=AMgetSymbol(t=p[1])).ttype==INFIX&&"/"!=e.input&&(null==(p=AMparseSexpr(t=AMremoveCharsAndBlanks(t,e.input.length)))[0]?p[0]=AMcreateMmlNode("mo",document.createTextNode("□")):AMremoveBrackets(p[0]),t=p[1],"_"==e.input?(n=AMgetSymbol(t),a=u.ttype==UNDEROVER,"^"==n.input?(AMremoveBrackets((l=AMparseSexpr(t=AMremoveCharsAndBlanks(t,n.input.length)))[0]),t=l[1],(o=AMcreateMmlNode(a?"munderover":"msubsup",o)).appendChild(p[0]),o.appendChild(l[0]),o=AMcreateMmlNode("mrow",o)):(o=AMcreateMmlNode(a?"munder":"msub",o)).appendChild(p[0])):(o=AMcreateMmlNode(e.tag,o)).appendChild(p[0]),"boolean"==typeof u.func&&u.func&&(e=AMgetSymbol(t)).ttype!=INFIX&&(o=AMcreateMmlNode("mrow",o),p=AMparseSexpr(t),o.appendChild(p[0]),t=p[1])),[o,t]}function AMparseExpr(t,e){for(var u,n,o,p,a,l,i,r,m,c,d,s,g,A,N,M,h=document.createDocumentFragment();n=(o=AMparseIexpr(t=AMremoveCharsAndBlanks(t,0)))[0],(u=AMgetSymbol(t=o[1])).ttype==INFIX&&"/"==u.input?(null==(o=AMparseIexpr(t=AMremoveCharsAndBlanks(t,u.input.length)))[0]?o[0]=AMcreateMmlNode("mo",document.createTextNode("□")):AMremoveBrackets(o[0]),t=o[1],AMremoveBrackets(n),(n=AMcreateMmlNode(u.tag,n)).appendChild(o[0]),h.appendChild(n),u=AMgetSymbol(t)):null!=n&&h.appendChild(n),(u.ttype!=RIGHTBRACKET&&(u.ttype!=LEFTRIGHT||e)||0==AMnestingDepth)&&null!=u&&""!=u.output;);if(u.ttype==RIGHTBRACKET||u.ttype==LEFTRIGHT){if(0<(a=h.childNodes.length)&&"mrow"==h.childNodes[a-1].nodeName&&(")"==(l=h.childNodes[a-1].lastChild.firstChild.nodeValue)||"]"==l)&&("("==(i=h.childNodes[a-1].firstChild.firstChild.nodeValue)&&")"==l&&"}"!=u.output||"["==i&&"]"==l)){for(r=[],m=!0,c=h.childNodes.length,p=0;m&&p<c;p+=2){if(r[p]=[],n=h.childNodes[p],m&&(m="mrow"==n.nodeName&&(p==c-1||"mo"==n.nextSibling.nodeName&&","==n.nextSibling.firstChild.nodeValue)&&n.firstChild.firstChild.nodeValue==i&&n.lastChild.firstChild.nodeValue==l),m)for(d=0;d<n.childNodes.length;d++)","==n.childNodes[d].firstChild.nodeValue&&(r[p][r[p].length]=d);m&&1<p&&(m=r[p].length==r[p-2].length)}if(m=m&&(1<r.length||0<r[0].length)){for(M=document.createDocumentFragment(),p=0;p<c;p+=2){for(s=document.createDocumentFragment(),g=document.createDocumentFragment(),A=(n=h.firstChild).childNodes.length,N=0,n.removeChild(n.firstChild),d=1;d<A-1;d++)void 0!==r[p][N]&&d==r[p][N]?(n.removeChild(n.firstChild),s.appendChild(AMcreateMmlNode("mtd",g)),N++):g.appendChild(n.firstChild);s.appendChild(AMcreateMmlNode("mtd",g)),2<h.childNodes.length&&(h.removeChild(h.firstChild),h.removeChild(h.firstChild)),M.appendChild(AMcreateMmlNode("mtr",s))}n=AMcreateMmlNode("mtable",M),"boolean"==typeof u.invisible&&u.invisible&&n.setAttribute("columnalign","left"),h.replaceChild(n,h.firstChild)}}t=AMremoveCharsAndBlanks(t,u.input.length),"boolean"==typeof u.invisible&&u.invisible||(n=AMcreateMmlNode("mo",document.createTextNode(u.output)),h.appendChild(n))}return[h,t]}function AMparseMath(t){var e,u=AMcreateElementMathML("mstyle");return""!=mathcolor&&u.setAttribute("mathcolor",mathcolor),displaystyle&&u.setAttribute("displaystyle","true"),""!=mathfontfamily&&u.setAttribute("fontfamily",mathfontfamily),AMnestingDepth=0,t=(t=(t=t.replace(/&nbsp;/g,"")).replace(/&gt;/g,">")).replace(/&lt;/g,"<"),u.appendChild(AMparseExpr(t.replace(/^\s+/g,""),!1)[0]),u=AMcreateMmlNode("math",u),showasciiformulaonhover&&u.setAttribute("title",t.replace(/\s+/g," ")),""==mathfontfamily||!AMisIE&&"serif"==mathfontfamily?u:((e=AMcreateElementXHTML("font")).setAttribute("face",mathfontfamily),e.appendChild(u),e)}function AMstrarr2docFrag(t,e){var u,n,o,p=document.createDocumentFragment(),a=!1;for(u=0;u<t.length;u++){if(a)p.appendChild(AMparseMath(t[u]));else for(n=e?t[u].split("\n\n"):[t[u]],p.appendChild(AMcreateElementXHTML("span").appendChild(document.createTextNode(n[0]))),o=1;o<n.length;o++)p.appendChild(AMcreateElementXHTML("p")),p.appendChild(AMcreateElementXHTML("span").appendChild(document.createTextNode(n[o])));a=!a}return p}function AMprocessNodeR(t,e){var u,n,o,p,a,l,i;if(0==t.childNodes.length){if(8==t.nodeType&&!e||"form"==t.parentNode.nodeName||"FORM"==t.parentNode.nodeName||"textarea"==t.parentNode.nodeName||"TEXTAREA"==t.parentNode.nodeName||"pre"==t.parentNode.nodeName||"PRE"==t.parentNode.nodeName)return 0;if(null!=(n=t.nodeValue)){for(n=n.replace(/\r\n\r\n/g,"\n\n"),doubleblankmathdelimiter&&(n=(n=(n=n.replace(/\x20\x20\./g," "+AMdelimiter1+".")).replace(/\x20\x20,/g," "+AMdelimiter1+",")).replace(/\x20\x20/g," "+AMdelimiter1+" ")),n=(n=n.replace(/\x20+/g," ")).replace(/\s*\r\n/g," "),u=!1,o=(n=n.replace(new RegExp(AMescape1,"g"),function(t){return u=!0,"AMescape1"})).split(AMdelimiter1),a=0;a<o.length;a++)o[a]=o[a].replace(/AMescape1/g,AMdelimiter1);if(1<o.length||u)return checkForMathML&&(checkForMathML=!1,l=AMisMathMLavailable(),(AMnoMathML=null!=l)&&notifyIfNoMathML&&(alertIfNoMathML?alert("To view the ASCIIMathML notation use Internet Explorer 6 +\nMathPlayer (free from www.dessci.com)\n                or Firefox/Mozilla/Netscape"):AMbody.insertBefore(l,AMbody.childNodes[0]))),AMnoMathML?0:(i=(p=AMstrarr2docFrag(o,8==t.nodeType)).childNodes.length,t.parentNode.replaceChild(p,t),i-1)}}else if("math"!=t.nodeName)for(a=0;a<t.childNodes.length;a++)a+=AMprocessNodeR(t.childNodes[a],e);return 0}function AMprocessNode(t,e,u){var n,o,p;if(null!=u)for(n=document.getElementsByTagName("span"),p=0;p<n.length;p++)"AM"==n[p].className&&AMprocessNodeR(n[p],e);else{try{o=t.innerHTML}catch(t){}null!=o&&-1==o.indexOf(AMdelimiter1)||AMprocessNodeR(t,e)}if(AMisIE)for(n=document.getElementsByTagName("math"),p=0;p<n.length;p++)n[p].update()}function translate(t){AMtranslated||(AMtranslated=!0,AMprocessNode(AMbody=document.getElementsByTagName("body")[0],!1,t))}if(null==document.getElementById&&alert("This webpage requires a recent browser such as\nMozilla/Netscape 7+ or Internet Explorer 6+MathPlayer"),AMsymbols=[{input:"alpha",tag:"mi",output:"α",tex:null,ttype:CONST=0},{input:"beta",tag:"mi",output:"β",tex:null,ttype:CONST},{input:"chi",tag:"mi",output:"χ",tex:null,ttype:CONST},{input:"delta",tag:"mi",output:"δ",tex:null,ttype:CONST},{input:"Delta",tag:"mo",output:"Δ",tex:null,ttype:CONST},{input:"epsi",tag:"mi",output:"ε",tex:"epsilon",ttype:CONST},{input:"varepsilon",tag:"mi",output:"ɛ",tex:null,ttype:CONST},{input:"eta",tag:"mi",output:"η",tex:null,ttype:CONST},{input:"gamma",tag:"mi",output:"γ",tex:null,ttype:CONST},{input:"Gamma",tag:"mo",output:"Γ",tex:null,ttype:CONST},{input:"iota",tag:"mi",output:"ι",tex:null,ttype:CONST},{input:"kappa",tag:"mi",output:"κ",tex:null,ttype:CONST},{input:"lambda",tag:"mi",output:"λ",tex:null,ttype:CONST},{input:"Lambda",tag:"mo",output:"Λ",tex:null,ttype:CONST},{input:"lamda",tag:"mi",output:"λ",tex:null,ttype:CONST},{input:"Lamda",tag:"mo",output:"Λ",tex:null,ttype:CONST},{input:"mu",tag:"mi",output:"μ",tex:null,ttype:CONST},{input:"nu",tag:"mi",output:"ν",tex:null,ttype:CONST},{input:"omega",tag:"mi",output:"ω",tex:null,ttype:CONST},{input:"Omega",tag:"mo",output:"Ω",tex:null,ttype:CONST},{input:"phi",tag:"mi",output:fixphi?"ϕ":"φ",tex:null,ttype:CONST},{input:"varphi",tag:"mi",output:fixphi?"φ":"ϕ",tex:null,ttype:CONST},{input:"Phi",tag:"mo",output:"Φ",tex:null,ttype:CONST},{input:"pi",tag:"mi",output:"π",tex:null,ttype:CONST},{input:"Pi",tag:"mo",output:"Π",tex:null,ttype:CONST},{input:"psi",tag:"mi",output:"ψ",tex:null,ttype:CONST},{input:"Psi",tag:"mi",output:"Ψ",tex:null,ttype:CONST},{input:"rho",tag:"mi",output:"ρ",tex:null,ttype:CONST},{input:"sigma",tag:"mi",output:"σ",tex:null,ttype:CONST},{input:"Sigma",tag:"mo",output:"Σ",tex:null,ttype:CONST},{input:"tau",tag:"mi",output:"τ",tex:null,ttype:CONST},{input:"theta",tag:"mi",output:"θ",tex:null,ttype:CONST},{input:"vartheta",tag:"mi",output:"ϑ",tex:null,ttype:CONST},{input:"Theta",tag:"mo",output:"Θ",tex:null,ttype:CONST},{input:"upsilon",tag:"mi",output:"υ",tex:null,ttype:CONST},{input:"xi",tag:"mi",output:"ξ",tex:null,ttype:CONST},{input:"Xi",tag:"mo",output:"Ξ",tex:null,ttype:CONST},{input:"zeta",tag:"mi",output:"ζ",tex:null,ttype:CONST},{input:"*",tag:"mo",output:"⋅",tex:"cdot",ttype:CONST},{input:"**",tag:"mo",output:"∗",tex:"ast",ttype:CONST},{input:"***",tag:"mo",output:"⋆",tex:"star",ttype:CONST},{input:"//",tag:"mo",output:"/",tex:null,ttype:CONST},{input:"\\\\",tag:"mo",output:"\\",tex:"backslash",ttype:CONST},{input:"setminus",tag:"mo",output:"\\",tex:null,ttype:CONST},{input:"xx",tag:"mo",output:"×",tex:"times",ttype:CONST},{input:"-:",tag:"mo",output:"÷",tex:"div",ttype:CONST},{input:"divide",tag:"mo",output:"-:",tex:null,ttype:DEFINITION=8},{input:"@",tag:"mo",output:"∘",tex:"circ",ttype:CONST},{input:"o+",tag:"mo",output:"⊕",tex:"oplus",ttype:CONST},{input:"o-",tag:"mo",output:"⊖",tex:"ominus",ttype:CONST},{input:"ox",tag:"mo",output:"⊗",tex:"otimes",ttype:CONST},{input:"o.",tag:"mo",output:"⊙",tex:"odot",ttype:CONST},{input:"sum",tag:"mo",output:"∑",tex:null,ttype:UNDEROVER=7},{input:"prod",tag:"mo",output:"∏",tex:null,ttype:UNDEROVER},{input:"^^",tag:"mo",output:"∧",tex:"wedge",ttype:CONST},{input:"^^^",tag:"mo",output:"⋀",tex:"bigwedge",ttype:UNDEROVER},{input:"vv",tag:"mo",output:"∨",tex:"vee",ttype:CONST},{input:"vvv",tag:"mo",output:"⋁",tex:"bigvee",ttype:UNDEROVER},{input:"nn",tag:"mo",output:"∩",tex:"cap",ttype:CONST},{input:"nnn",tag:"mo",output:"⋂",tex:"bigcap",ttype:UNDEROVER},{input:"uu",tag:"mo",output:"∪",tex:"cup",ttype:CONST},{input:"uuu",tag:"mo",output:"⋃",tex:"bigcup",ttype:UNDEROVER},{input:"!=",tag:"mo",output:"≠",tex:"ne",ttype:CONST},{input:":=",tag:"mo",output:":=",tex:null,ttype:CONST},{input:"lt",tag:"mo",output:"<",tex:null,ttype:CONST},{input:"gt",tag:"mo",output:">",tex:null,ttype:CONST},{input:"<=",tag:"mo",output:"≤",tex:"le",ttype:CONST},{input:"lt=",tag:"mo",output:"≤",tex:"leq",ttype:CONST},{input:"gt=",tag:"mo",output:"≥",tex:"geq",ttype:CONST},{input:">=",tag:"mo",output:"≥",tex:"ge",ttype:CONST},{input:"-<",tag:"mo",output:"≺",tex:"prec",ttype:CONST},{input:"-lt",tag:"mo",output:"≺",tex:null,ttype:CONST},{input:">-",tag:"mo",output:"≻",tex:"succ",ttype:CONST},{input:"-<=",tag:"mo",output:"⪯",tex:"preceq",ttype:CONST},{input:">-=",tag:"mo",output:"⪰",tex:"succeq",ttype:CONST},{input:"in",tag:"mo",output:"∈",tex:null,ttype:CONST},{input:"!in",tag:"mo",output:"∉",tex:"notin",ttype:CONST},{input:"sub",tag:"mo",output:"⊂",tex:"subset",ttype:CONST},{input:"sup",tag:"mo",output:"⊃",tex:"supset",ttype:CONST},{input:"sube",tag:"mo",output:"⊆",tex:"subseteq",ttype:CONST},{input:"supe",tag:"mo",output:"⊇",tex:"supseteq",ttype:CONST},{input:"-=",tag:"mo",output:"≡",tex:"equiv",ttype:CONST},{input:"~=",tag:"mo",output:"≅",tex:"cong",ttype:CONST},{input:"~~",tag:"mo",output:"≈",tex:"approx",ttype:CONST},{input:"prop",tag:"mo",output:"∝",tex:"propto",ttype:CONST},{input:"and",tag:"mtext",output:"and",tex:null,ttype:SPACE=6},{input:"xor",tag:"mo",output:"⊕",tex:"oplus",ttype:CONST},{input:"or",tag:"mtext",output:"or",tex:null,ttype:SPACE},{input:"not",tag:"mo",output:"¬",tex:"neg",ttype:CONST},{input:"=>",tag:"mo",output:"⇒",tex:"implies",ttype:CONST},{input:"if",tag:"mo",output:"if",tex:null,ttype:SPACE},{input:"<=>",tag:"mo",output:"⇔",tex:"iff",ttype:CONST},{input:"AA",tag:"mo",output:"∀",tex:"forall",ttype:CONST},{input:"EE",tag:"mo",output:"∃",tex:"exists",ttype:CONST},{input:"_|_",tag:"mo",output:"⊥",tex:"bot",ttype:CONST},{input:"TT",tag:"mo",output:"⊤",tex:"top",ttype:CONST},{input:"|--",tag:"mo",output:"⊢",tex:"vdash",ttype:CONST},{input:"|==",tag:"mo",output:"⊨",tex:"models",ttype:CONST},{input:"(",tag:"mo",output:"(",tex:null,ttype:LEFTBRACKET=4},{input:")",tag:"mo",output:")",tex:null,ttype:RIGHTBRACKET=5},{input:"[",tag:"mo",output:"[",tex:null,ttype:LEFTBRACKET},{input:"]",tag:"mo",output:"]",tex:null,ttype:RIGHTBRACKET},{input:"{",tag:"mo",output:"{",tex:null,ttype:LEFTBRACKET},{input:"}",tag:"mo",output:"}",tex:null,ttype:RIGHTBRACKET},{input:"|",tag:"mo",output:"|",tex:null,ttype:LEFTRIGHT=9},{input:"(:",tag:"mo",output:"〈",tex:"langle",ttype:LEFTBRACKET},{input:":)",tag:"mo",output:"〉",tex:"rangle",ttype:RIGHTBRACKET},{input:"<<",tag:"mo",output:"〈",tex:null,ttype:LEFTBRACKET},{input:">>",tag:"mo",output:"〉",tex:null,ttype:RIGHTBRACKET},{input:"{:",tag:"mo",output:"{:",tex:null,ttype:LEFTBRACKET,invisible:!0},{input:":}",tag:"mo",output:":}",tex:null,ttype:RIGHTBRACKET,invisible:!0},{input:"int",tag:"mo",output:"∫",tex:null,ttype:CONST},{input:"dx",tag:"mi",output:"{:d x:}",tex:null,ttype:DEFINITION},{input:"dy",tag:"mi",output:"{:d y:}",tex:null,ttype:DEFINITION},{input:"dz",tag:"mi",output:"{:d z:}",tex:null,ttype:DEFINITION},{input:"dt",tag:"mi",output:"{:d t:}",tex:null,ttype:DEFINITION},{input:"oint",tag:"mo",output:"∮",tex:null,ttype:CONST},{input:"del",tag:"mo",output:"∂",tex:"partial",ttype:CONST},{input:"grad",tag:"mo",output:"∇",tex:"nabla",ttype:CONST},{input:"+-",tag:"mo",output:"±",tex:"pm",ttype:CONST},{input:"O/",tag:"mo",output:"∅",tex:"emptyset",ttype:CONST},{input:"oo",tag:"mo",output:"∞",tex:"infty",ttype:CONST},{input:"aleph",tag:"mo",output:"ℵ",tex:null,ttype:CONST},{input:"...",tag:"mo",output:"...",tex:"ldots",ttype:CONST},{input:":.",tag:"mo",output:"∴",tex:"therefore",ttype:CONST},{input:"/_",tag:"mo",output:"∠",tex:"angle",ttype:CONST},{input:"/_\\",tag:"mo",output:"△",tex:"triangle",ttype:CONST},{input:"\\ ",tag:"mo",output:" ",tex:null,ttype:CONST},{input:"quad",tag:"mo",output:"  ",tex:null,ttype:CONST},{input:"qquad",tag:"mo",output:"    ",tex:null,ttype:CONST},{input:"cdots",tag:"mo",output:"⋯",tex:null,ttype:CONST},{input:"vdots",tag:"mo",output:"⋮",tex:null,ttype:CONST},{input:"ddots",tag:"mo",output:"⋱",tex:null,ttype:CONST},{input:"diamond",tag:"mo",output:"⋄",tex:null,ttype:CONST},{input:"square",tag:"mo",output:"□",tex:null,ttype:CONST},{input:"|__",tag:"mo",output:"⌊",tex:"lfloor",ttype:CONST},{input:"__|",tag:"mo",output:"⌋",tex:"rfloor",ttype:CONST},{input:"|~",tag:"mo",output:"⌈",tex:"lceiling",ttype:CONST},{input:"~|",tag:"mo",output:"⌉",tex:"rceiling",ttype:CONST},{input:"CC",tag:"mo",output:"ℂ",tex:null,ttype:CONST},{input:"NN",tag:"mo",output:"ℕ",tex:null,ttype:CONST},{input:"QQ",tag:"mo",output:"ℚ",tex:null,ttype:CONST},{input:"RR",tag:"mo",output:"ℝ",tex:null,ttype:CONST},{input:"ZZ",tag:"mo",output:"ℤ",tex:null,ttype:CONST},{input:"f",tag:"mi",output:"f",tex:null,ttype:UNARY=1,func:!0},{input:"g",tag:"mi",output:"g",tex:null,ttype:UNARY,func:!0},{input:"'",tag:"mo",output:"′",tex:"prime",ttype:CONST},{input:"lim",tag:"mo",output:"lim",tex:null,ttype:UNDEROVER},{input:"Lim",tag:"mo",output:"Lim",tex:null,ttype:UNDEROVER},{input:"sin",tag:"mo",output:"sin",tex:null,ttype:UNARY,func:!0},{input:"cos",tag:"mo",output:"cos",tex:null,ttype:UNARY,func:!0},{input:"tan",tag:"mo",output:"tan",tex:null,ttype:UNARY,func:!0},{input:"arcsin",tag:"mo",output:"arcsin",tex:null,ttype:UNARY,func:!0},{input:"arccos",tag:"mo",output:"arccos",tex:null,ttype:UNARY,func:!0},{input:"arctan",tag:"mo",output:"arctan",tex:null,ttype:UNARY,func:!0},{input:"sinh",tag:"mo",output:"sinh",tex:null,ttype:UNARY,func:!0},{input:"cosh",tag:"mo",output:"cosh",tex:null,ttype:UNARY,func:!0},{input:"tanh",tag:"mo",output:"tanh",tex:null,ttype:UNARY,func:!0},{input:"coth",tag:"mo",output:"coth",tex:null,ttype:UNARY,func:!0},{input:"sech",tag:"mo",output:"sech",tex:null,ttype:UNARY,func:!0},{input:"csch",tag:"mo",output:"csch",tex:null,ttype:UNARY,func:!0},{input:"cot",tag:"mo",output:"cot",tex:null,ttype:UNARY,func:!0},{input:"sec",tag:"mo",output:"sec",tex:null,ttype:UNARY,func:!0},{input:"csc",tag:"mo",output:"csc",tex:null,ttype:UNARY,func:!0},{input:"log",tag:"mo",output:"log",tex:null,ttype:UNARY,func:!0},{input:"ln",tag:"mo",output:"ln",tex:null,ttype:UNARY,func:!0},{input:"abs",tag:"mo",output:"abs",tex:null,ttype:UNARY},{input:"Sin",tag:"mo",output:"sin",tex:null,ttype:UNARY,func:!0},{input:"Cos",tag:"mo",output:"cos",tex:null,ttype:UNARY,func:!0},{input:"Tan",tag:"mo",output:"tan",tex:null,ttype:UNARY,func:!0},{input:"Arcsin",tag:"mo",output:"arcsin",tex:null,ttype:UNARY,func:!0},{input:"Arccos",tag:"mo",output:"arccos",tex:null,ttype:UNARY,func:!0},{input:"Arctan",tag:"mo",output:"arctan",tex:null,ttype:UNARY,func:!0},{input:"Sinh",tag:"mo",output:"sinh",tex:null,ttype:UNARY,func:!0},{input:"Sosh",tag:"mo",output:"cosh",tex:null,ttype:UNARY,func:!0},{input:"Tanh",tag:"mo",output:"tanh",tex:null,ttype:UNARY,func:!0},{input:"Cot",tag:"mo",output:"cot",tex:null,ttype:UNARY,func:!0},{input:"Sec",tag:"mo",output:"sec",tex:null,ttype:UNARY,func:!0},{input:"Csc",tag:"mo",output:"csc",tex:null,ttype:UNARY,func:!0},{input:"Log",tag:"mo",output:"log",tex:null,ttype:UNARY,func:!0},{input:"Ln",tag:"mo",output:"ln",tex:null,ttype:UNARY,func:!0},{input:"Abs",tag:"mo",output:"abs",tex:null,ttype:UNARY,func:!0},{input:"det",tag:"mo",output:"det",tex:null,ttype:UNARY,func:!0},{input:"exp",tag:"mo",output:"exp",tex:null,ttype:UNARY,func:!0},{input:"dim",tag:"mo",output:"dim",tex:null,ttype:CONST},{input:"mod",tag:"mo",output:"mod",tex:null,ttype:CONST},{input:"gcd",tag:"mo",output:"gcd",tex:null,ttype:UNARY,func:!0},{input:"lcm",tag:"mo",output:"lcm",tex:null,ttype:UNARY,func:!0},{input:"lub",tag:"mo",output:"lub",tex:null,ttype:CONST},{input:"glb",tag:"mo",output:"glb",tex:null,ttype:CONST},{input:"min",tag:"mo",output:"min",tex:null,ttype:UNDEROVER},{input:"max",tag:"mo",output:"max",tex:null,ttype:UNDEROVER},{input:"uarr",tag:"mo",output:"↑",tex:"uparrow",ttype:CONST},{input:"darr",tag:"mo",output:"↓",tex:"downarrow",ttype:CONST},{input:"rarr",tag:"mo",output:"→",tex:"rightarrow",ttype:CONST},{input:"->",tag:"mo",output:"→",tex:"to",ttype:CONST},{input:"|->",tag:"mo",output:"↦",tex:"mapsto",ttype:CONST},{input:">->",tag:"mo",output:"↣",tex:"rightarrowtail",ttype:CONST},{input:"->>",tag:"mo",output:"↠",tex:"twoheadrightarrow",ttype:CONST},{input:">->>",tag:"mo",output:"⤖",tex:"twoheadrightarrowtail",ttype:CONST},{input:"larr",tag:"mo",output:"←",tex:"leftarrow",ttype:CONST},{input:"harr",tag:"mo",output:"↔",tex:"leftrightarrow",ttype:CONST},{input:"rArr",tag:"mo",output:"⇒",tex:"Rightarrow",ttype:CONST},{input:"lArr",tag:"mo",output:"⇐",tex:"Leftarrow",ttype:CONST},{input:"hArr",tag:"mo",output:"⇔",tex:"Leftrightarrow",ttype:CONST},AMsqrt={input:"sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:UNARY},AMroot={input:"root",tag:"mroot",output:"root",tex:null,ttype:BINARY=2},AMfrac={input:"frac",tag:"mfrac",output:"/",tex:null,ttype:BINARY},AMdiv={input:"/",tag:"mfrac",output:"/",tex:null,ttype:INFIX=3},AMover={input:"stackrel",tag:"mover",output:"stackrel",tex:null,ttype:BINARY},AMsub={input:"_",tag:"msub",output:"_",tex:null,ttype:INFIX},AMsup={input:"^",tag:"msup",output:"^",tex:null,ttype:INFIX},{input:"Sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:UNARY},{input:"cancel",tag:"menclose",output:"cancel",tex:null,ttype:UNARY},{input:"hat",tag:"mover",output:"^",tex:null,ttype:UNARY,acc:!0},{input:"bar",tag:"mover",output:"¯",tex:"overline",ttype:UNARY,acc:!0},{input:"vec",tag:"mover",output:"→",tex:null,ttype:UNARY,acc:!0},{input:"tilde",tag:"mover",output:"~",tex:null,ttype:UNARY,acc:!0},{input:"dot",tag:"mover",output:".",tex:null,ttype:UNARY,acc:!0},{input:"ddot",tag:"mover",output:"..",tex:null,ttype:UNARY,acc:!0},{input:"ul",tag:"munder",output:"̲",tex:"underline",ttype:UNARY,acc:!0},AMtext={input:"text",tag:"mtext",output:"text",tex:null,ttype:TEXT=10},AMmbox={input:"mbox",tag:"mtext",output:"mbox",tex:null,ttype:TEXT},AMquote={input:'"',tag:"mtext",output:"mbox",tex:null,ttype:TEXT},{input:"color",tag:"mstyle",ttype:BINARY},{input:"bb",tag:"mstyle",atname:"fontweight",atval:"bold",output:"bb",tex:null,ttype:UNARY},{input:"mathbf",tag:"mstyle",atname:"fontweight",atval:"bold",output:"mathbf",tex:null,ttype:UNARY},{input:"sf",tag:"mstyle",atname:"fontfamily",atval:"sans-serif",output:"sf",tex:null,ttype:UNARY},{input:"mathsf",tag:"mstyle",atname:"fontfamily",atval:"sans-serif",output:"mathsf",tex:null,ttype:UNARY},{input:"bbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck",output:"bbb",tex:null,ttype:UNARY,codes:AMbbb=[61324,61325,8450,61326,61327,61328,61329,8461,61330,61331,61332,61333,61334,8469,61335,8473,8474,8477,61336,61337,61338,61339,61340,61341,61342,8484]},{input:"mathbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck",output:"mathbb",tex:null,ttype:UNARY,codes:AMbbb},{input:"cc",tag:"mstyle",atname:"mathvariant",atval:"script",output:"cc",tex:null,ttype:UNARY,codes:AMcal=[61237,8492,61238,61239,8496,8497,61240,8459,8464,61241,61242,8466,8499,61243,61244,61245,61246,8475,61247,61248,61249,61250,61251,61252,61253,61254]},{input:"mathcal",tag:"mstyle",atname:"mathvariant",atval:"script",output:"mathcal",tex:null,ttype:UNARY,codes:AMcal},{input:"tt",tag:"mstyle",atname:"fontfamily",atval:"monospace",output:"tt",tex:null,ttype:UNARY},{input:"mathtt",tag:"mstyle",atname:"fontfamily",atval:"monospace",output:"mathtt",tex:null,ttype:UNARY},{input:"fr",tag:"mstyle",atname:"mathvariant",atval:"fraktur",output:"fr",tex:null,ttype:UNARY,codes:AMfrk=[61277,61278,8493,61279,61280,61281,61282,8460,8465,61283,61284,61285,61286,61287,61288,61289,61290,8476,61291,61292,61293,61294,61295,61296,61297,8488]},{input:"mathfrak",tag:"mstyle",atname:"mathvariant",atval:"fraktur",output:"mathfrak",tex:null,ttype:UNARY,codes:AMfrk}],AMnames=[],AMtranslated=AMnoMathML=!(AMmathml="http://www.w3.org/1998/Math/MathML"),AMinitSymbols(),AMisIE&&(document.write('<object id="mathplayer"  classid="clsid:32F66A20-7614-11D4-BD11-00104BD3F987"></object>'),document.write('<?import namespace="m" implementation="#mathplayer"?>')),"undefined"!=typeof initstack)initstack.push(translate);else{function generic(){translate()}void 0!==window.addEventListener?window.addEventListener("load",generic,!1):void 0!==document.addEventListener?document.addEventListener("load",generic,!1):void 0!==window.attachEvent?window.attachEvent("onload",generic):"function"==typeof window.onload?(existing=onload,window.onload=function(){existing(),generic()}):window.onload=generic}checkForMathML&&(checkForMathML=!1,nd=AMisMathMLavailable(),AMnoMathML=null!=nd);

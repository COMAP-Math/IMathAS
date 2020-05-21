var AMtoMQ=function(){var i,v,c,g,s=".",x=0,m=1,y=2,$=3,h=4,q=5,f=6,b=7,A=8,_=9,d=10,t={input:"sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:m},u={input:"root",tag:"mroot",output:"root",tex:null,ttype:y},e={input:"frac",tag:"mfrac",output:"/",tex:null,ttype:y},p={input:"/",tag:"mfrac",output:"/",tex:null,ttype:$},n={input:"stackrel",tag:"mover",output:"stackrel",tex:null,ttype:y},l={input:"_",tag:"msub",output:"_",tex:null,ttype:$},a={input:"^",tag:"msup",output:"^",tex:null,ttype:$},o={input:"text",tag:"mtext",output:"text",tex:null,ttype:d},r={input:"mbox",tag:"mtext",output:"mbox",tex:null,ttype:d},w={input:'"',tag:"mtext",output:"mbox",tex:null,ttype:d},O=[{input:"alpha",tag:"mi",output:"α",tex:null,ttype:x},{input:"beta",tag:"mi",output:"β",tex:null,ttype:x},{input:"chi",tag:"mi",output:"χ",tex:null,ttype:x},{input:"delta",tag:"mi",output:"δ",tex:null,ttype:x},{input:"Delta",tag:"mo",output:"Δ",tex:null,ttype:x},{input:"epsi",tag:"mi",output:"ε",tex:"epsilon",ttype:x},{input:"varepsilon",tag:"mi",output:"ɛ",tex:null,ttype:x},{input:"eta",tag:"mi",output:"η",tex:null,ttype:x},{input:"gamma",tag:"mi",output:"γ",tex:null,ttype:x},{input:"Gamma",tag:"mo",output:"Γ",tex:null,ttype:x},{input:"iota",tag:"mi",output:"ι",tex:null,ttype:x},{input:"kappa",tag:"mi",output:"κ",tex:null,ttype:x},{input:"lambda",tag:"mi",output:"λ",tex:null,ttype:x},{input:"Lambda",tag:"mo",output:"Λ",tex:null,ttype:x},{input:"mu",tag:"mi",output:"μ",tex:null,ttype:x},{input:"nu",tag:"mi",output:"ν",tex:null,ttype:x},{input:"omega",tag:"mi",output:"ω",tex:null,ttype:x},{input:"Omega",tag:"mo",output:"Ω",tex:null,ttype:x},{input:"phi",tag:"mi",output:"φ",tex:null,ttype:x},{input:"varphi",tag:"mi",output:"ϕ",tex:null,ttype:x},{input:"Phi",tag:"mo",output:"Φ",tex:null,ttype:x},{input:"pi",tag:"mi",output:"π",tex:null,ttype:x},{input:"Pi",tag:"mo",output:"Π",tex:null,ttype:x},{input:"psi",tag:"mi",output:"ψ",tex:null,ttype:x},{input:"Psi",tag:"mi",output:"Ψ",tex:null,ttype:x},{input:"rho",tag:"mi",output:"ρ",tex:null,ttype:x},{input:"sigma",tag:"mi",output:"σ",tex:null,ttype:x},{input:"Sigma",tag:"mo",output:"Σ",tex:null,ttype:x},{input:"tau",tag:"mi",output:"τ",tex:null,ttype:x},{input:"theta",tag:"mi",output:"θ",tex:null,ttype:x},{input:"vartheta",tag:"mi",output:"ϑ",tex:null,ttype:x},{input:"Theta",tag:"mo",output:"Θ",tex:null,ttype:x},{input:"upsilon",tag:"mi",output:"υ",tex:null,ttype:x},{input:"xi",tag:"mi",output:"ξ",tex:null,ttype:x},{input:"Xi",tag:"mo",output:"Ξ",tex:null,ttype:x},{input:"zeta",tag:"mi",output:"ζ",tex:null,ttype:x},{input:"*",tag:"mo",output:"⋅",tex:"cdot",ttype:x},{input:"-:",tag:"mo",output:"÷",tex:"div",ttype:x},{input:"sum",tag:"mo",output:"∑",tex:null,ttype:b},{input:"nn",tag:"mo",output:"∩",tex:"cap",ttype:x},{input:"uu",tag:"mo",output:"∪",tex:"cup",ttype:x},{input:"U",tag:"mo",output:"∪",tex:"cup",ttype:x},{input:"!=",tag:"mo",output:"≠",tex:"ne",ttype:x},{input:"lt",tag:"mo",output:"<",tex:null,ttype:x},{input:"gt",tag:"mo",output:">",tex:null,ttype:x},{input:"<=",tag:"mo",output:"≤",tex:"le",ttype:x},{input:"lt=",tag:"mo",output:"≤",tex:"leq",ttype:x},{input:"gt=",tag:"mo",output:"≥",tex:"geq",ttype:x},{input:">=",tag:"mo",output:"≥",tex:"ge",ttype:x},{input:"geq",tag:"mo",output:"≥",tex:null,ttype:x},{input:"in",tag:"mo",output:"∈",tex:null,ttype:x},{input:"sub",tag:"mo",output:"⊂",tex:"subset",ttype:x},{input:"sube",tag:"mo",output:"⊆",tex:"subseteq",ttype:x},{input:"(",tag:"mo",output:"(",tex:null,ttype:h},{input:")",tag:"mo",output:")",tex:null,ttype:q},{input:"[",tag:"mo",output:"[",tex:null,ttype:h},{input:"]",tag:"mo",output:"]",tex:null,ttype:q},{input:"{",tag:"mo",output:"{",tex:"{",ttype:h,notexcopy:!0},{input:"}",tag:"mo",output:"}",tex:"}",ttype:q,notexcopy:!0},{input:"|",tag:"mo",output:"|",tex:null,ttype:_},{input:"(:",tag:"mo",output:"〈",tex:"langle",ttype:h},{input:":)",tag:"mo",output:"〉",tex:"rangle",ttype:q},{input:"<<",tag:"mo",output:"〈",tex:"langle",ttype:h},{input:">>",tag:"mo",output:"〉",tex:"rangle",ttype:q},{input:"int",tag:"mo",output:"∫",tex:null,ttype:x},{input:"+-",tag:"mo",output:"±",tex:"pm",ttype:x},{input:"O/",tag:"mo",output:"∅",tex:"emptyset",ttype:x},{input:"oo",tag:"mo",output:"∞",tex:"infty",ttype:x},{input:"rarr",tag:"mo",output:"→",tex:"rightarrow",ttype:x},{input:"->",tag:"mo",output:"→",tex:"to",ttype:x},{input:"RR",tag:"mo",output:"ℝ",tex:"mathbb{R}",ttype:x,notexcopy:!0},{input:"f",tag:"mi",output:"f",tex:null,ttype:m,func:!0,val:!0},{input:"sin",tag:"mo",output:"sin",tex:null,ttype:m,func:!0},{input:"cos",tag:"mo",output:"cos",tex:null,ttype:m,func:!0},{input:"tan",tag:"mo",output:"tan",tex:null,ttype:m,func:!0},{input:"arcsin",tag:"mo",output:"arcsin",tex:null,ttype:m,func:!0},{input:"arccos",tag:"mo",output:"arccos",tex:null,ttype:m,func:!0},{input:"arctan",tag:"mo",output:"arctan",tex:null,ttype:m,func:!0},{input:"arcsec",tag:"mo",output:"arcsec",tex:null,ttype:m,func:!0},{input:"arccsc",tag:"mo",output:"arccsc",tex:null,ttype:m,func:!0},{input:"arccot",tag:"mo",output:"arccot",tex:null,ttype:m,func:!0},{input:"sinh",tag:"mo",output:"sinh",tex:null,ttype:m,func:!0},{input:"cosh",tag:"mo",output:"cosh",tex:null,ttype:m,func:!0},{input:"tanh",tag:"mo",output:"tanh",tex:null,ttype:m,func:!0},{input:"cot",tag:"mo",output:"cot",tex:null,ttype:m,func:!0},{input:"coth",tag:"mo",output:"coth",tex:null,ttype:m,func:!0},{input:"sech",tag:"mo",output:"sech",tex:null,ttype:m,func:!0},{input:"csch",tag:"mo",output:"csch",tex:null,ttype:m,func:!0},{input:"sec",tag:"mo",output:"sec",tex:null,ttype:m,func:!0},{input:"csc",tag:"mo",output:"csc",tex:null,ttype:m,func:!0},{input:"log",tag:"mo",output:"log",tex:null,ttype:m,func:!0},{input:"ln",tag:"mo",output:"ln",tex:null,ttype:m,func:!0},{input:"abs",tag:"mo",output:"abs",tex:null,ttype:m},{input:"Sin",tag:"mo",output:"sin",tex:null,ttype:m,func:!0},{input:"Cos",tag:"mo",output:"cos",tex:null,ttype:m,func:!0},{input:"Tan",tag:"mo",output:"tan",tex:null,ttype:m,func:!0},{input:"Arcsin",tag:"mo",output:"arcsin",tex:null,ttype:m,func:!0},{input:"Arccos",tag:"mo",output:"arccos",tex:null,ttype:m,func:!0},{input:"Arctan",tag:"mo",output:"arctan",tex:null,ttype:m,func:!0},{input:"Sinh",tag:"mo",output:"sinh",tex:null,ttype:m,func:!0},{input:"Sosh",tag:"mo",output:"cosh",tex:null,ttype:m,func:!0},{input:"Tanh",tag:"mo",output:"tanh",tex:null,ttype:m,func:!0},{input:"Cot",tag:"mo",output:"cot",tex:null,ttype:m,func:!0},{input:"Sec",tag:"mo",output:"sec",tex:null,ttype:m,func:!0},{input:"Csc",tag:"mo",output:"csc",tex:null,ttype:m,func:!0},{input:"Log",tag:"mo",output:"log",tex:null,ttype:m,func:!0},{input:"Ln",tag:"mo",output:"ln",tex:null,ttype:m,func:!0},{input:"Abs",tag:"mo",output:"abs",tex:null,ttype:m,func:!0},t,u,e,p,n,l,a,{input:"Sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:m},{input:"hat",tag:"mover",output:"^",tex:null,ttype:m,acc:!0},{input:"bar",tag:"mover",output:"¯",tex:"overline",ttype:m,acc:!0},{input:"vec",tag:"mover",output:"→",tex:null,ttype:m,acc:!0},o,r,w];function R(t,u){return t.input>u.input?1:-1}function S(t,u){var e,p;for(e="\\"==t.charAt(u)&&"\\"!=t.charAt(u+1)&&" "!=t.charAt(u+1)?t.slice(u+1):t.slice(u),p=0;p<e.length&&e.charCodeAt(p)<=32;p+=1);return e.slice(p)}function z(t,u,e){var p,n,l;if(0==e){for(e=-1,p=t.length;e+1<p;)t[n=e+p>>1]<u?e=n:p=n;return p}for(l=e;l<t.length&&t[l]<u;l++);return l}function D(t){var u,e,p,n,l,a=0,o="",r=!0;for(n=1;n<=t.length&&r;n++)e=t.slice(0,n),(a=z(i,e,a))<i.length&&t.slice(0,i[a].length)==i[a]&&(n=(o=i[u=a]).length),r=a<i.length&&t.slice(0,i[a].length)>=i[a];if(c=g,""!=o)return g=O[u].ttype,O[u];for(g=x,a=1,e=t.slice(0,1),l=!0;"0"<=e&&e<="9"&&a<=t.length;)e=t.slice(a,a+1),a++;if(e==s&&"0"<=(e=t.slice(a,a+1))&&e<="9")for(l=!1,a++;"0"<=e&&e<="9"&&a<=t.length;)e=t.slice(a,a+1),a++;return p=l&&1<a||2<a?(e=t.slice(0,a-1),"mn"):(a=2,((e=t.slice(0,1))<"A"||"Z"<e)&&(e<"a"||"z"<e)?"mo":"mi"),"-"==e&&c==$?(g=$,{input:e,tag:p,output:e,ttype:m,func:!0,val:!0}):{input:e,tag:p,output:e,ttype:x,val:!0}}function E(t){var u,e;return"{"==t.charAt(0)&&"}"==t.charAt(t.length-1)&&(e=0,"\\left"==(u=t.substr(1,5))?"("==(u=t.charAt(6))||"["==u||"{"==u?e=7:"\\lbrace"==(u=t.substr(6,7))&&(e=13):"("!=(u=t.charAt(1))&&"["!=u||(e=2),0<e&&("\\right)}"==(u=t.substr(t.length-8))||"\\right]}"==u||"\\right.}"==u?t=(t="{"+t.substr(e)).substr(0,t.length-8)+"}":"\\rbrace}"==u&&(t=(t="{"+t.substr(e)).substr(0,t.length-14)+"}"))),t}function N(t){return"boolean"==typeof t.val&&t.val?pre="":pre="\\",null==t.tex?pre+t.input:pre+t.tex}function Z(t){return null==t.tex?t.input:"\\"+t.tex}function C(t){var u,e,p,n,l,a,o,r="";if(null==(u=D(t=S(t,0)))||u.ttype==q&&0<v)return[null,t];switch(u.ttype==A&&(u=D(t=u.output+S(t,u.input.length))),u.ttype){case b:case x:return t=S(t,u.input.length),"\\"==(l=N(u)).charAt(0)||"mo"==u.tag?[l,t]:["{"+l+"}",t];case h:return v++,e=k(t=S(t,u.input.length),!0),v--,e[0].match(/bmatrix/)?[e[0].substring(0,e[0].length-7),e[1]]:("\\right"==e[a=0].substr(0,6)&&(")"==(n=e[0].charAt(6))||"]"==n||"}"==n?a=6:"."==n?a=7:"\\rbrace"==(n=e[0].substr(6,7))&&(a=13)),[0<a?(e[0]=e[0].substr(a),"boolean"==typeof u.invisible&&u.invisible?"{"+e[0]+"}":"{"+Z(u)+e[0]+"}"):"boolean"==typeof u.invisible&&u.invisible?"{\\left."+e[0]+"}":"{\\left"+Z(u)+e[0]+"}",e[1]]);case d:return u!=w&&(t=S(t,u.input.length)),-1==(p="{"==t.charAt(0)?t.indexOf("}"):"("==t.charAt(0)?t.indexOf(")"):"["==t.charAt(0)?t.indexOf("]"):u==w?t.slice(1).indexOf('"')+1:0)&&(p=t.length),[r+="\\text{"+(n=t.slice(1,p))+"}",t=S(t,p+1)];case m:return null==(e=C(t=S(t,u.input.length)))[0]?["{"+N(u)+"}",t]:"boolean"==typeof u.func&&u.func?"^"==(n=t.charAt(0))||"_"==n||"/"==n||"|"==n||","==n||1==u.input.length&&u.input.match(/\w/)&&"("!=n?["{"+N(u)+"}",t]:["{"+N(u)+"{"+e[0]+"}}",e[1]]:(e[0]=E(e[0]),"sqrt"==u.input?["\\sqrt{"+e[0]+"}",e[1]]:"abs"==u.input?["\\left|{"+e[0]+"}\\right|",e[1]]:"cancel"==u.input?["\\cancel{"+e[0]+"}",e[1]]:void 0!==u.rewriteleftright?["{\\left"+u.rewriteleftright[0]+e[0]+"\\right"+u.rewriteleftright[1]+"}",e[1]]:"boolean"==typeof u.acc&&u.acc?[N(u)+"{"+e[0]+"}",e[1]]:["{"+N(u)+"{"+e[0]+"}}",e[1]]);case y:return null==(e=C(t=S(t,u.input.length)))[0]?["{"+N(u)+"}",t]:(e[0]=E(e[0]),null==(o=C(e[1]))[0]?["{"+N(u)+"}",t]:(o[0]=E(o[0]),[r="color"==u.input?"{\\color{"+e[0].replace(/[\{\}]/g,"")+"}"+o[0]+"}":"root"==u.input?"{\\sqrt["+e[0]+"]{"+o[0]+"}}":"{"+N(u)+"{"+e[0]+"}{"+o[0]+"}}",o[1]]));case $:return t=S(t,u.input.length),[u.output,t];case f:return t=S(t,u.input.length),["{\\quad\\text{"+u.input+"}\\quad}",t];case _:return v++,e=k(t=S(t,u.input.length),!1),v--,n="","|"==(n=e[0].charAt(e[0].length-1))?["{\\left|"+e[0]+"}",e[1]]:["{\\mid}",t];default:return t=S(t,u.input.length),["{"+N(u)+"}",t]}}function M(t){var u,e,p,n,l,a;return e=D(t=S(t,0)),n=(l=C(t))[0],(u=D(t=l[1])).ttype==$&&"/"!=u.input&&(null==(l=C(t=S(t,u.input.length)))[0]?l[0]="{}":l[0]=E(l[0]),t=l[1],"_"==u.input?"^"==(p=D(t)).input?((a=C(t=S(t,p.input.length)))[0]=E(a[0]),t=a[1],n="{"+n,n+="_{"+l[0]+"}",n+="^{"+a[0]+"}",n+="}"):n+="_{"+l[0]+"}":n=n+"^{"+l[0]+"}",void 0!==e.func&&e.func&&(p=D(t)).ttype!=$&&p.ttype!=q&&(n="{"+n+(l=M(t))[0]+"}",t=l[1])),[n,t]}function k(t,u){for(var e,p,n,l,a,o,r,i,c,g,s,x,m,y,h,f,b,A="",d=!1;p=(n=M(t=S(t,0)))[0],(e=D(t=n[1])).ttype==$&&"/"==e.input?(null==(n=M(t=S(t,e.input.length)))[0]?n[0]="{}":n[0]=E(n[0]),t=n[1],p="\\frac{"+(p=E(p))+"}",A+=p+="{"+n[0]+"}",e=D(t)):null!=p&&(A+=p),(e.ttype!=q&&(e.ttype!=_||u)||0==v)&&null!=e&&""!=e.output;);if(e.ttype==q||e.ttype==_){if(2<(a=A.length)&&"{"==A.charAt(0)&&0<A.indexOf(",")&&(")"==(o=A.charAt(a-2))||"]"==o)&&("("==(r=A.charAt(6))&&")"==o&&"}"!=e.output||"["==r&&"]"==o)){for(i="\\begin{bmatrix}",(c=new Array).push(0),g=!0,(x=[])[s=0]=[0],y=m=0,l=1;l<a-1;l++)A.charAt(l)==r&&s++,A.charAt(l)==o&&0==--s&&","==A.charAt(l+2)&&"{"==A.charAt(l+3)&&(c.push(l+2),x[m=l+2]=[l+2]),"["!=A.charAt(l)&&"("!=A.charAt(l)&&"{"!=A.charAt(l)||y++,"]"!=A.charAt(l)&&")"!=A.charAt(l)&&"}"!=A.charAt(l)||y--,","==A.charAt(l)&&1==y&&x[m].push(l);if(c.push(a),h=-1,0==s&&0<c.length)for(l=0;l<c.length-1;l++){if(0<l&&(i+="\\\\"),0==l)if(1==x[c[l]].length)f=[A.substr(c[l]+7,c[l+1]-c[l]-15)];else{for(f=[A.substring(c[l]+7,x[c[l]][1])],b=2;b<x[c[l]].length;b++)f.push(A.substring(x[c[l]][b-1]+1,x[c[l]][b]));f.push(A.substring(x[c[l]][x[c[l]].length-1]+1,c[l+1]-8))}else if(1==x[c[l]].length)f=[A.substr(c[l]+8,c[l+1]-c[l]-16)];else{for(f=[A.substring(c[l]+8,x[c[l]][1])],b=2;b<x[c[l]].length;b++)f.push(A.substring(x[c[l]][b-1]+1,x[c[l]][b]));f.push(A.substring(x[c[l]][x[c[l]].length-1]+1,c[l+1]-8))}0<h&&f.length!=h?g=!1:-1==h&&(h=f.length),i+=f.join("&")}i+="\\end{bmatrix}",g&&(A=i)}t=S(t,e.input.length),d=("boolean"==typeof e.invisible&&e.invisible?A+="\\right.":A+=p="\\right"+Z(e),!0)}return 0<v&&!d&&(A+="\\right."),[A,t]}return i=[],function(){var t,u=[];for(t=0;t<O.length;t++)!O[t].tex||"boolean"==typeof O[t].notexcopy&&O[t].notexcopy||(u[u.length]={input:O[t].tex,tag:O[t].tag,output:O[t].output,ttype:O[t].ttype,acc:O[t].acc||!1});for((O=O.concat(u)).sort(R),t=0;t<O.length;t++)i[t]=O[t].input}(),function(t){return v=0,null==(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/(&nbsp;|\u00a0|&#160;)/g,"")).replace(/^\s*<([^<].*?[^>])>\s*$/,"<<$1>>")).replace(/&gt;/g,">")).replace(/&lt;/g,"<")).replace(/\s*\bor\b\s*/g,'" or "')).replace(/all\s+real\s+numbers/g,'"all real numbers"')).replace(/(\)|\])\s*u\s*(\(|\[)/g,"$1U$2")).replace(/\bDNE\b/gi,'"DNE"')).match(/\S/)?"":k(t.replace(/^\s+/g,""),!1)[0]}}();function MQtoAM(t,u){var e,p,n,l,a,o;if(t=(t=t.replace(/\\:/g," ")).replace(/\\operatorname{(\w+)}/g,"\\$1"),u)t=t.replace(/\\Re/g,"RR");else{for(;-1!=(o=t.lastIndexOf("\\left|"));)t=-1!=(p=t.indexOf("\\right|",o+1))?(n=t.substring(0,o).match(/(arcsinh|arccosh|arctanh|arcsech|arccsch|arccoth|arcsin|arccos|arctan|arcsec|arccsc|arccot|sinh|cosh|tanh|sech|csch|coth|ln|log|exp|sin|cos|tan|sec|csc|cot)(\^\d+)?$/),(t=t.substring(0,p)+")"+(n?")":"")+t.substring(p+7)).substring(0,o)+(n?"(":"")+"abs("+t.substring(o+6)):t.substring(0,o)+"|"+t.substring(o+6);t=(t=(t=(t=(t=t.replace(/\\text{\s*or\s*}/g," or ")).replace(/\\text{all\s+real\s+numbers}/g,"all real numbers")).replace(/\\text{DNE}/g,"DNE")).replace(/\\varnothing/g,"DNE")).replace(/\\Re/g,"all real numbers")}for(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/\\begin{.?matrix}(.*?)\\end{.?matrix}/g,function(t,u){return"[("+u.replace(/\\\\/g,"),(").replace(/&/g,",")+")]"})).replace(/\\le(?!f)/g,"<=")).replace(/\\ge/g,">=")).replace(/\\pm/g,"+-")).replace(/\\approx/g,"~~")).replace(/(\\arrow|\\rightarrow)/g,"rarr")).replace(/\\cup/g,"U")).replace(/\\left\\{/g,"lbrace").replace(/\\right\\}/g,"rbrace")).replace(/\\left/g,"")).replace(/\\right/g,"")).replace(/\\langle/g,"<<")).replace(/\\rangle/g,">>")).replace(/\\cdot/g,"*")).replace(/\\infty/g,"oo")).replace(/\\nthroot/g,"root")).replace(/\\/g,"")).replace(/sqrt\[(.*?)\]/g,"root($1)")).replace(/(\d)frac/g,"$1 frac");-1!=(o=t.indexOf("frac{"));){for(e=1,l=o+5;0<e&&l<t.length-1;)l++,"{"==(a=t.charAt(l))?e++:"}"==a&&e--;t=0==e?t.substring(0,o)+"("+t.substring(o+5,l)+")/"+t.substring(l+1):t.substring(0,o)+t.substring(o+4)}return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/_(\d)(\d)/g,"_$1 $2")).replace(/\^(\d)(\d)/g,"^$1 $2")).replace(/_{([\d\.]+)}\^/g,"_$1^")).replace(/_{([\d\.]+)}([^\^])/g,"_$1 $2")).replace(/_{([\d\.]+)}$/g,"_$1")).replace(/_{(\w+)}$/g,"_($1)")).replace(/{/g,"(").replace(/}/g,")")).replace(/lbrace/g,"{").replace(/rbrace/g,"}")).replace(/\(([\d\.]+)\)\/\(([\d\.]+)\)/g,"$1/$2")).replace(/\/\(([\d\.]+)\)/g,"/$1")).replace(/\(([\d\.]+)\)\//g,"$1/")).replace(/\/\(([\a-zA-Z])\)/g,"/$1")).replace(/\(([\a-zA-Z])\)\//g,"$1/")).replace(/\^\(-1\)/g,"^-1")).replace(/\^\((-?[\d\.]+)\)/g,"^$1")).replace(/\/\(([\a-zA-Z])\^([\d\.]+)\)/g,"/$1^$2")).replace(/\(([\a-zA-Z])\^([\d\.]+)\)\//g,"$1^$2/")).replace(/\+\-/g,"+ -")}

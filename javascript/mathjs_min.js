var pi,ln,e,arcsin,arccos,arctan,sec,csc,cot,arcsec,arccsc,arccot,sinh,cosh,tanh,sech,csch,coth,arcsinh,arccosh,arctanh,arcsech,arccsch,arccoth,sign,logten,sinn,cosn,tann,cscn,secn,cotn,lnn,funcstoindexarr;function factorial(c,r){for(var n=c-(r=null==r?1:r);0<n;n-=r)c*=n;return c<0?NaN:0==c?1:c}function C(c,r){for(var n=1,t=0;t<r;t++)n*=(c-t)/(r-t);return n}function matchtolower(c){return c.toLowerCase()}function nthroot(c,r){return safepow(r,1/c)}function nthlogten(c,r){return Math.log(r)/Math.log(c)}function functoindex(c){for(var r=0;r<funcstoindexarr.length;r++)if(funcstoindexarr[r]==c)return"@"+r+"@";return c}function indextofunc(c,r){return funcstoindexarr[r]}function safepow(c,r){if(c<0&&Math.floor(r)!=r){for(var n=3;n<50;n+=2)if(Math.abs(Math.round(n*r)-n*r)<1e-6)return Math.round(n*r)%2==0?Math.pow(Math.abs(c),r):-1*Math.pow(Math.abs(c),r);return Math.sqrt(-1)}return Math.pow(c,r)}function mathjs(c,r){var t,a,n,e,o,s,h;if(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=c.replace(/(\+\s*-|-\s*\+)/g,"-").replace(/-\s*-/g,"+")).replace(/\[/g,"(")).replace(/\]/g,")")).replace(/\b00+\./g,"0.")).replace(/root\s*(\d+)/,"root($1)")).replace(/\|(.*?)\|/g,"abs($1)")).replace(/arc(sin|cos|tan|sec|csc|cot|sinh|cosh|tanh|sech|csch|coth)/gi,"$1^-1")).replace(/(ar|arg)(sinh|cosh|tanh|sech|csch|coth)/gi,"$2^-1")).replace(/(Sin|Cos|Tan|Sec|Csc|Cot|Arc|Abs|Log|Exp|Ln|Sqrt)/gi,matchtolower)).replace(/(sinh|cosh|tanh|sech|csch|coth|sqrt|ln|log|exp|sin|cos|tan|sec|csc|cot|abs|root)/g,functoindex),null!=r&&""!=r){for((t=r.split("|")).push("pi"),t.sort(function(c,r){return r.length-c.length}),r=t.join("|"),a=[],n=0;n<t.length;n++)if(a[n]=!1,"E"==t[n]||"e"==t[n])a[n]=!0;else for(e=0;e<t.length;e++)if(n!=e&&t[e].toLowerCase()==t[n].toLowerCase()&&t[e]!=t[n]){a[n]=!0;break}c=c.replace(new RegExp("("+r+")","gi"),function(c,r){for(var n=0;n<t.length;n++)if(t[n]==r||!a[n]&&t[n].toLowerCase()==r.toLowerCase())return"(@v"+n+"@)";return r})}else c=c.replace(/pi/g,"(pi)");for(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=c.replace(/([0-9])E([\-0-9])/g,"$1(EE)$2")).replace(/\*?\s*degrees?/g,"*((pi)/180)")).replace(/div/,"/")).replace(/e/g,"(E)")).replace(/@(\d+)@/g,indextofunc)).replace(/log_([a-zA-Z\d\.]+)\s*\(/g,"nthlog($1,")).replace(/log_\(([a-zA-Z\/\d\.]+)\)\s*\(/g,"nthlog(($1),")).replace(/log_(\(@v\d+@\))\s*\(/g,"nthlog($1,")).replace(/log/g,"logten")).replace(/(sin|cos|tan|sec|csc|cot|sinh|cosh|tanh|sech|csch|coth)\^(-1|\(-1\))/g,"arc$1")).replace(/(sin|cos|tan|sec|csc|cot|ln)\^(\d+)\s*\(/g,"$1n($2,")).replace(/(sin|cos|tan|sec|csc|cot|ln)\^\((\d+)\)\s*\(/g,"$1n($2,")).replace(/root\s*\((\d+)\)\s*\(/g,"nthroot($1,")).replace(/([0-9]\.?)\s+([0-9])/g,"$1*$2")).replace(/#/g,"")).replace(/\s/g,""),c=(c=(c=(c=(c=null!=r&&""!=r?c.replace(/@v(\d+)@/g,function(c,r){return t[r]}):c).replace(/([0-9]\.?)([\(a-zA-Z])/g,"$1*$2")).replace(/(!)([0-9\(a-zA-Z])/g,"$1*$2")).replace(/\)([\(0-9a-zA-Z]|\.\d+)/g,")*$1")).replace(/([0-9])\*\(EE\)\*?([\-0-9])/g,"$1e$2");-1!=(n=c.indexOf("!"));){if(0==n)return"Error: missing argument";if("0"<=(s=c.charAt(e=n-1))&&s<="9"||"."==s){for(e--;0<=e&&"0"<=(s=c.charAt(e))&&s<="9";)e--;if("."==s)for(e--;0<=e&&"0"<=(s=c.charAt(e))&&s<="9";)e--}else if(")"==s){for(h=1,e--;0<=e&&0<h;)"("==(s=c.charAt(e))?h--:")"==s&&h++,e--;for(;0<=e&&("a"<=(s=c.charAt(e))&&s<="z"||"A"<=s&&s<="Z");)e--}else{if(!("a"<=s&&s<="z"||"A"<=s&&s<="Z"))return"Error: incorrect syntax in "+c+" at position "+e;for(e--;0<=e&&("a"<=(s=c.charAt(e))&&s<="z"||"A"<=s&&s<="Z");)e--}c=c.slice(0,e+1)+"factorial("+c.slice(e+1,n)+")"+c.slice(n+1)}for(;-1!=(n=c.lastIndexOf("^"));){if(0==n)return"Error: missing argument";if("0"<=(s=c.charAt(e=n-1))&&s<="9"||"."==s){for(e--;0<=e&&"0"<=(s=c.charAt(e))&&s<="9";)e--;if("."==s)for(e--;0<=e&&"0"<=(s=c.charAt(e))&&s<="9";)e--}else if(")"==s){for(h=1,e--;0<=e&&0<h;)"("==(s=c.charAt(e))?h--:")"==s&&h++,e--;for(;0<=e&&("a"<=(s=c.charAt(e))&&s<="z"||"A"<=s&&s<="Z");)e--}else{if(!("a"<=s&&s<="z"||"A"<=s&&s<="Z"))return"Error: incorrect syntax in "+c+" at position "+e;for(e--;0<=e&&("a"<=(s=c.charAt(e))&&s<="z"||"A"<=s&&s<="Z");)e--}if(n==c.length-1)return"Error: missing argument";if(s=c.charAt(o=n+1),nch=c.charAt(o+1),"0"<=s&&s<="9"||"-"==s&&"("!=nch||"."==s){for(o++;o<c.length&&"0"<=(s=c.charAt(o))&&s<="9";)o++;if("."==s)for(o++;o<c.length&&"0"<=(s=c.charAt(o))&&s<="9";)o++}else if("("==s||"-"==s&&"("==nch)for("-"==s&&o++,h=1,o++;o<c.length&&0<h;)"("==(s=c.charAt(o))?h++:")"==s&&h--,o++;else{if(!("a"<=s&&s<="z"||"A"<=s&&s<="Z"))return"Error: incorrect syntax in "+c+" at position "+o;for(o++;o<c.length&&("a"<=(s=c.charAt(o))&&s<="z"||"A"<=s&&s<="Z");)o++;if("("==s&&c.slice(n+1,o).match(/^(sinn|cosn|tann|secn|cscn|cotn|sin|cos|tan|sec|csc|cot|logten|nthlogten|log|ln|exp|arcsin|arccos|arctan|arcsec|arccsc|arccot|sinh|cosh|tanh|sech|csch|coth|arcsinh|arccosh|arctanh|arcsech|arccsch|arccoth|sqrt|abs|nthroot|factorial|safepow)$/))for(h=1,o++;o<c.length&&0<h;)"("==(s=c.charAt(o))?h++:")"==s&&h--,o++}c=c.slice(0,e+1)+"safepow("+c.slice(e+1,n)+","+c.slice(n+1,o)+")"+c.slice(o)}return c}pi=Math.PI,ln=Math.log,e=Math.E,arcsin=Math.asin,arccos=Math.acos,arctan=Math.atan,sec=function(c){return 1/Math.cos(c)},csc=function(c){return 1/Math.sin(c)},cot=function(c){return 1/Math.tan(c)},arcsec=function(c){return arccos(1/c)},arccsc=function(c){return arcsin(1/c)},arccot=function(c){return arctan(1/c)},sinh=function(c){return(Math.exp(c)-Math.exp(-c))/2},cosh=function(c){return(Math.exp(c)+Math.exp(-c))/2},tanh=function(c){return(Math.exp(c)-Math.exp(-c))/(Math.exp(c)+Math.exp(-c))},sech=function(c){return 1/cosh(c)},csch=function(c){return 1/sinh(c)},coth=function(c){return 1/tanh(c)},arcsinh=function(c){return ln(c+Math.sqrt(c*c+1))},arccosh=function(c){return ln(c+Math.sqrt(c*c-1))},arctanh=function(c){return ln((1+c)/(1-c))/2},sech=function(c){return 1/cosh(c)},csch=function(c){return 1/sinh(c)},coth=function(c){return 1/tanh(c)},arcsech=function(c){return arccosh(1/c)},arccsch=function(c){return arcsinh(1/c)},arccoth=function(c){return arctanh(1/c)},sign=function(c){return 0==c?0:c<0?-1:1},logten=function(c){return Math.LOG10E*Math.log(c)},sinn=function(c,r){return Math.pow(Math.sin(r),c)},cosn=function(c,r){return Math.pow(Math.cos(r),c)},tann=function(c,r){return Math.pow(Math.tan(r),c)},cscn=function(c,r){return 1/Math.pow(Math.sin(r),c)},secn=function(c,r){return 1/Math.pow(Math.cos(r),c)},cotn=function(c,r){return 1/Math.pow(Math.tan(r),c)},lnn=function(c,r){return Math.pow(Math.log(r),c)},funcstoindexarr="sinh|cosh|tanh|sech|csch|coth|sqrt|ln|log|exp|sin|cos|tan|sec|csc|cot|abs|root|arcsin|arccos|arctan|arcsec|arccsc|arccot|arcsinh|arccosh|arctanh|arcsech|arccsch|arccoth|argsinh|argcosh|argtanh|argsech|argcsch|argcoth|arsinh|arcosh|artanh|arsech|arcsch|arcoth|pi".split("|");

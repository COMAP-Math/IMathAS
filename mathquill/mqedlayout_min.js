var MQ,myMQeditor=function(w){var b={tabs:[{p:"Basic",enabled:!0,tabcontent:[{flow:"row",s:2,contents:[{l:"\\left(\\right)",c:"i",w:"()"},{l:"x^{}",c:"t",w:"^",nb:1},{l:"\\pi",nb:1},{l:"\\sqrt{}",c:"c",w:"sqrt",nb:1},{l:"\\infty"},{l:"\\sqrt[n]{}",c:"c",w:"nthroot",nb:1},{p:"DNE",sm:2},{l:"\\left|\\right|",c:"i",w:"||"}]},{s:.1},{flow:"row",s:4,contents:[{b:"7"},{b:"8"},{b:"9"},{l:"\\frac{}{}",c:"t",w:"/"},{b:"4"},{b:"5"},{b:"6"},{b:"*"},{b:"1"},{b:"2"},{b:"3"},{b:"-"},{b:"0"},{b:"."},{s:1},{b:"+"}]},{s:.1},{flow:"row",s:2,contents:[{s:.5},{b:"&uarr;",c:"k",w:"Up"},{s:.5},{b:"&larr;",c:"k",w:"Left"},{b:"&rarr;",c:"k",w:"Right"},{s:.5},{b:"&darr;",c:"k",w:"Down"},{s:.5},{b:"&#x232B;",s:2,c:"k",w:"Backspace"}]}]},{p:"Funcs",enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{l:"\\log",c:"f"},{l:"\\ln",c:"f"},{l:"\\log_{}",c:"f"},{l:"e^{}",c:"t",w:"e^"}]}]},{p:"Trig",enabled:!1,tabcontent:[{flow:"row",s:6,contents:[{l:"\\sin",c:"f"},{l:"\\cos",c:"f"},{l:"\\tan",c:"f"},{l:"\\sec",c:"f"},{l:"\\csc",c:"f"},{l:"\\cot",c:"f"},{l:"\\sin^{-1}",c:"f"},{l:"\\cos^{-1}",c:"f"},{l:"\\tan^{-1}",c:"f"},{l:"\\sinh",c:"f"},{l:"\\cosh",c:"f"},{l:"\\tanh",c:"f"},{l:"\\pi",nb:1},{s:1},{s:4}]}]},{p:"Inequality",enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{l:"\\lt"},{l:"\\gt"},{l:"\\le"},{l:"\\ge"},{p:"or",c:"w",w:"\\text{ or }"},{p:"DNE",sm:2},{p:"all reals",c:"w",w:"\\text{all reals}",s:2}]}]},{p:"Interval",enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{l:"\\left(\\right)",c:"i",w:"()"},{l:"\\left[\\right]",c:"i",w:"[]"},{l:"\\left(\\right]",c:"i",w:"(]"},{l:"\\left[\\right)",c:"i",w:"[)"},{l:"\\infty"},{l:"-\\infty",c:"w",w:"-\\infty"},{l:"\\cup"},{s:1}]}]},{p:"Matrix",sm:1,enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{p:"2×2",c:"w",w:"\\begin{bmatrix}&\\\\&\\end{bmatrix}"},{p:"2×3",c:"w",w:"\\begin{bmatrix}&&\\\\&&\\end{bmatrix}"},{p:"3×3",c:"w",w:"\\begin{bmatrix}&&\\\\&&\\\\&&\\end{bmatrix}"},{p:"3×4",c:"w",w:"\\begin{bmatrix}&&&\\\\&&&\\\\&&&\\end{bmatrix}"},{p:"+Col",c:"m",w:"addColumn"},{p:"-Col",c:"m",w:"deleteColumn"},{p:"+Row",c:"m",w:"addRow"},{p:"-Row",c:"m",w:"deleteRow"}]}]},{p:"=<%",enabled:!0,tabcontent:[{flow:"row",s:5,contents:[{p:"[",s:.5},{p:"]",s:.5},{p:"{",s:.5},{p:"}",s:.5},{p:"(",s:.5},{p:")",s:.5},{l:"\\left\\langle\\right\\rangle",c:"i",w:["\\left\\langle","\\right\\rangle"]},{l:"\\left|\\right|",c:"i",w:"||"},{p:"="},{l:"\\lt"},{l:"\\gt"},{l:"\\le"},{l:"\\ge"},{p:"%"},{p:","},{p:"*"},{p:"!"},{p:"?"}]}]},{p:"ABC",enabled:!0,tabcontent:[{flow:"row",s:10,contents:[{p:"q"},{p:"w"},{p:"e"},{p:"r"},{p:"t"},{p:"y"},{p:"u"},{p:"i"},{p:"o"},{p:"p"},{s:.5},{p:"a"},{p:"s"},{p:"d"},{p:"f"},{p:"g"},{p:"h"},{p:"j"},{p:"k"},{p:"l"},{s:.5},{b:"&#8679;",c:"shift",s:1.5},{p:"z"},{p:"x"},{p:"c"},{p:"v"},{p:"b"},{p:"n"},{p:"m"},{b:"&#x232B;",c:"k",w:"Backspace",s:1.5},{p:"%"},{p:","},{p:"Space",s:5,c:"t",w:" "},{p:"."},{b:"&larr;",c:"k",w:"Left"},{b:"&rarr;",c:"k",w:"Right"}]}]}]},i={tabs:[{p:"Basic",enabled:!0,tabcontent:[{flow:"row",s:5,contents:[{l:"\\frac{}{}",c:"t",w:"/"},{l:"x^{}",c:"t",w:"^",nb:1},{l:"x_{}",c:"t",w:"_",nb:1},{l:"\\sqrt{}",c:"c",w:"sqrt",nb:1},{l:"\\sqrt[n]{}",c:"c",w:"nthroot",nb:1},{l:"\\left(\\right)",c:"i",w:"()"},{l:"\\left|\\right|",c:"i",w:"||"},{l:"\\pi",nb:1},{l:"\\infty"},{p:"DNE",sm:2}]},{s:.1},{flow:"row",s:2,contents:[{b:"&uarr;",c:"k",w:"Up"},{b:"&darr;",c:"k",w:"Down"},{b:"&larr;",c:"k",w:"Left"},{b:"&rarr;",c:"k",w:"Right"},{b:"&#x232B;",s:2,c:"k",w:"Backspace"}]}]},{p:"Funcs",enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{l:"\\log",c:"f"},{l:"\\ln",c:"f"},{l:"\\log_{}",c:"f"},{l:"e^{}",c:"t",w:"e^"}]}]},{p:"Trig",enabled:!1,tabcontent:[{flow:"row",s:6,contents:[{l:"\\sin",c:"f"},{l:"\\cos",c:"f"},{l:"\\tan",c:"f"},{l:"\\sec",c:"f"},{l:"\\csc",c:"f"},{l:"\\cot",c:"f"},{l:"\\sin^{-1}",c:"f"},{l:"\\cos^{-1}",c:"f"},{l:"\\tan^{-1}",c:"f"},{l:"\\sinh",c:"f"},{l:"\\cosh",c:"f"},{l:"\\tanh",c:"f"},{l:"\\pi",nb:1},{s:1},{s:4}]}]},{p:"Inequality",enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{l:"\\lt"},{l:"\\gt"},{l:"\\le"},{l:"\\ge"},{p:"or",c:"w",w:"\\text{ or }"},{p:"DNE",sm:2},{p:"all reals",c:"w",w:"\\text{all reals}",s:2}]}]},{p:"Interval",enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{l:"\\left(\\right)",c:"i",w:"()"},{l:"\\left[\\right]",c:"i",w:"[]"},{l:"\\left(\\right]",c:"i",w:"(]"},{l:"\\left[\\right)",c:"i",w:"[)"},{l:"\\infty"},{l:"-\\infty",c:"w",w:"-\\infty"},{l:"\\cup"},{s:1}]}]},{p:"Matrix",sm:1,enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{p:"2×2",c:"w",w:"\\begin{bmatrix}&\\\\&\\end{bmatrix}"},{p:"2×3",c:"w",w:"\\begin{bmatrix}&&\\\\&&\\end{bmatrix}"},{p:"3×3",c:"w",w:"\\begin{bmatrix}&&\\\\&&\\\\&&\\end{bmatrix}"},{p:"3×4",c:"w",w:"\\begin{bmatrix}&&&\\\\&&&\\\\&&&\\end{bmatrix}"},{p:"+Col",c:"m",w:"addColumn"},{p:"-Col",c:"m",w:"deleteColumn"},{p:"+Row",c:"m",w:"addRow"},{p:"-Row",c:"m",w:"deleteRow"}]}]}]};return{getLayout:function(t,e){var n,a,c,l,s=t.id.substring(8),o=w("#"+s),r=o.attr("data-mq-vars")||"";return r=""==r?[]:r.split(/,/),a=(n=o.attr("data-mq")).split(/,/)[0],c=[],"OSK"===e?(c=w.extend(!0,[],b),n.match(/\bdecimal/)&&"numfunc"!=a?(c.tabs[0].tabcontent[0].s=1,c.tabs[0].tabcontent[0].contents=[{l:"\\infty"},{p:"DNE",sm:2}],c.tabs[0].tabcontent[2]={flow:"row",s:4,contents:[{b:"7"},{b:"8"},{b:"9"},{s:1},{b:"4"},{b:"5"},{b:"6"},{s:1},{b:"1"},{b:"2"},{b:"3"},{b:"-"},{b:"0"},{b:"."},n.match(/(list|set)/)?{b:","}:{s:1},"calcntuple"===a&&!n.match(/vector/)||n.match(/point/)?{l:"\\left(\\right)",c:"t",w:"("}:{s:1}]}):n.match(/(fraction|mixednumber|fracordec)/)&&"numfunc"!=a?(c.tabs[0].tabcontent[0].s=1,c.tabs[0].tabcontent[0].contents=[{l:"\\frac{n}{}",c:"t",w:"/"},{b:"\\frac{}{}",c:"c",w:"\\frac"},{l:"\\infty"},{p:"DNE",sm:2}],c.tabs[0].tabcontent[2]={flow:"row",s:4,contents:[{b:"7"},{b:"8"},{b:"9"},{s:1},{b:"4"},{b:"5"},{b:"6"},{s:1},{b:"1"},{b:"2"},{b:"3"},{b:"-"},{b:"0"},n.match(/fracordec/)?{b:"."}:{s:1},n.match(/(list|set)/)?{b:","}:{s:1},"calcntuple"===a&&!n.match(/vector/)||n.match(/point/)?{l:"\\left(\\right)",c:"t",w:"("}:{s:1}]}):(n.match(/(list|set)/)||a.match(/(interval|string|ntuple)/)?c.tabs[0].tabcontent[2].contents[14]={b:","}:n.match(/equation/)&&(c.tabs[0].tabcontent[2].contents[14]={b:"="}),n.match(/nodecimal/)&&(c.tabs[0].tabcontent[2].contents[13]={s:1}))):(c=w.extend(!0,[],i),n.match(/\bdecimal/)?(c.tabs[0].tabcontent[0].s=3,c.tabs[0].tabcontent[0].contents=[{l:"\\infty"},{p:"DNE",sm:2},"calcntuple"===a&&!n.match(/vector/)||n.match(/point/)?{l:"\\left(\\right)",c:"t",w:"("}:{s:1}]):n.match(/(fraction|mixednumber|fracordec)/)&&(c.tabs[0].tabcontent[0].s=4,c.tabs[0].tabcontent[0].contents=[{l:"\\frac{n}{}",c:"t",w:"/"},{l:"\\frac{}{}",c:"c",w:"\\frac"},{l:"\\infty"},{p:"DNE",sm:2}],("calcntuple"===a&&!n.match(/vector/)||n.match(/point/))&&c.tabs[0].tabcontent[0].contents.push({l:"\\left(\\right)",c:"t",w:"("},{s:3})),"numfunc"==a&&n.match(/inequality/)&&(c.tabs[3].enabled=!0,c.tabs[3].tabcontent[0].contents.splice(4,3))),n.match(/(fraction|mixednumber|fracordec|\bdecimal)/)||(c.tabs[1].enabled=!0,n.match(/notrig/)||(c.tabs[2].enabled=!0,n.match(/allowdegrees/)&&(c.tabs[2].tabcontent[0].contents[13]={l:"\\degree"}))),a.match(/interval/)?n.match(/inequality/)?c.tabs[3].enabled=!0:c.tabs[4].enabled=!0:a.match(/matrix/)&&!n.match(/matrixsized/)?c.tabs[5].enabled=!0:n.match(/set/)?c.tabs[0].tabcontent.unshift({flow:"row",s:1,contents:[{l:"\\lbrace{\\rbrace}",c:"i",w:["\\left\\{","\\right\\}"]}]},{s:.1}):a.match(/complex/)?c.tabs[0].tabcontent.unshift({flow:"row",s:1,contents:[{b:"i"}]},{s:.1}):n.match(/vector/)&&c.tabs[0].tabcontent.unshift({flow:"row",s:1,contents:[{l:"\\left\\langle\\right\\rangle",c:"i",w:["\\left\\langle","\\right\\rangle"]}]},{s:.1}),0<r.length&&("basic"==(l=function(t,e){var n,a,c,l,s;for(n=1,a=[],c="OSK"==e?4:2,l=0;l<t.length;l++)t[l]=t[l].replace(/alpha|beta|chi|delta|epsilon|gamma|varphi|phi|psi|sigma|rho|theta|lambda|mu|nu|omega|tau/i,"\\$&"),"\\"!=t[l].charAt(0)&&t[l].length>n&&(n=t[l].length),t[l]=t[l].replace(/_(\w{2,})/,"_{$1}"),a.push({b:t[l],c:"w"});return s=Math.min(8,Math.max(4,Math.ceil(t.length/4))),t.length%s!=0&&a.push({s:s-t.length%s}),{format:t.length<=c&&n<4?"basic":"tab",btns:a,perrow:s}}(r,e)).format?c.tabs[0].tabcontent.unshift({flow:"row",s:1,contents:l.btns},{s:.1}):c.tabs.splice(1,0,{p:"Vars",enabled:!0,tabcontent:[{flow:"row",s:l.perrow,contents:l.btns}]})),c},onShow:function(t,e,n){var a,c,l,s,o,r,b,i;n&&"under"===e&&(a=t.id.substring(8),(c=w("#"+a))[0].hasAttribute("data-tip")&&(s=(l=w("#mqeditor .mqed-tabpanel").first()).children("div").last().position().left-12,o=c.attr("data-tip"),r=document.createElement("div"),w(r).html(o),c[0].hasAttribute("aria-describedby")&&(b=c[0].getAttribute("aria-describedby"),document.getElementById(b).textContent!=o&&(i=w("<a>",{href:"#",text:_("[more..]")}).on("click",function(t){return t.preventDefault(),w(t.target).parent().html(w("#"+b).html()),!1}),w(r).append(" ").append(i))),l.parent().css("height","auto").append(w("<div>",{width:s,class:"mqed-tipholder"}).append(r))))},onTab:function(t,e,n){"under"===e&&(n.match(/mqeditor-0-tabpanel/)?w(".mqed-tipholder").show():w(".mqed-tipholder").hide())}}}(jQuery);MQeditor.setConfig({getLayout:myMQeditor.getLayout,onShow:myMQeditor.onShow,onTab:myMQeditor.onTab,toMQ:AMtoMQ,fromMQ:MQtoAM,onEdit:imathasAssess.syntaxCheckMQ,onEnter:imathasAssess.handleMQenter}),(MQ=MathQuill.getInterface(MathQuill.getInterface.MAX)).config({spaceBehavesLikeTab:!0,leftRightIntoCmdGoes:"up",supSubsRequireOperand:!0,charsThatBreakOutOfSupSub:"=<>",charsThatBreakOutOfSupSubVar:"+-(",charsThatBreakOutOfSupSubOp:"+-(",restrictMismatchedBrackets:!0,autoCommands:"pi theta root sqrt ^oo degree",autoParenOperators:!0,addCommands:{oo:["VanillaSymbol","\\infty ","&infin;"]}});

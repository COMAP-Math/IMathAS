(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"39c3":function(e,t,s){var n={"./de.json":["6ce2","lang-de-json"],"./en.json":["edd4"]};function i(e){if(!s.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return Promise.all(t.slice(1).map(s.e)).then((function(){return s.t(i,3)}))}i.keys=function(){return Object.keys(n)},i.id="39c3",e.exports=i},4632:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",{staticClass:"scorelist"},[s("tr",[s("th",[e._v(e._s(e.$t("catlist.category")))]),s("th",[e._v(e._s(e.$t("catlist.score")))])]),e._l(e.catScores,(function(t,n){return s("tr",{key:n},[s("td",[e._v("\n      "+e._s(t.name)+"\n    ")]),s("td",[e._v("\n      "+e._s(t.pct)+"%\n      "),s("span",{staticClass:"subdued med-left"},[e._v("\n        "+e._s(e.$tc("catlist.pts",t.poss,{pts:t.tot,poss:t.poss}))+"\n      ")])])])}))],2)},i=[],r=(s("55dd"),s("7f7f"),{name:"SummaryCategories",props:["data"],computed:{catScores:function(){var e=this.data,t=[];for(var s in e)if(e[s].hasOwnProperty("category")&&""!==e[s].category){for(var n=!1,i=0;i<t.length;i++)if(t[i].name===e[s].category){t[i].tot+=e[s].score,t[i].poss+=e[s].points_possible,n=!0;break}n||t.push({name:e[s].category,tot:e[s].score,poss:e[s].points_possible})}for(var r=0;r<t.length;r++)t[r].pct=Math.round(1e3*t[r].tot/t[r].poss)/10;return t.sort((function(e,t){return e.name<t.name})),t}}}),o=r,a=(s("98b7"),s("2877")),l=Object(a["a"])(o,n,i,!1,null,null,null);t["a"]=l.exports},"55db":function(e,t,s){"use strict";var n=s("7ba0"),i=s.n(n);i.a},"619f":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"wrap",staticClass:"fullwrap"},[s("div",{staticClass:"dialog-overlay",attrs:{tabindex:"-1"},on:{click:e.clearError}},[s("div",{ref:"dialog",staticClass:"dialog",attrs:{role:"alertdialog","aria-modal":"true","aria-labelledby":"error_hdr","aria-describedby":"error_body",tabindex:"-1"},on:{click:function(e){e.stopPropagation()}}},[s("div",{staticClass:"pane-header flexrow",attrs:{id:"error_hdr"}},[s("div",{staticStyle:{"flex-grow":"1"}},[s("icons",{attrs:{name:"alert"}}),e._v("\n          "+e._s(e.errorTitle)+"\n        ")],1),s("button",{staticClass:"plain slim",attrs:{type:"button","aria-label":e.$t("close")},on:{click:e.clearError}},[s("icons",{attrs:{name:"close"}})],1)]),s("div",{staticClass:"pane-body",attrs:{id:"error_body"}},[e._v("\n        "+e._s(e.errorMsg)+"\n      ")])])])])},i=[],r=s("f05b"),o=(s("649c"),{name:"ErrorDialog",props:["errormsg"],data:function(){return{dialog:null}},components:{Icons:r["a"]},computed:{isError:function(){return"string"==typeof this.errormsg},errorTitle:function(){return this.isError?this.$t("error.error"):this.errormsg.title},errorMsg:function(){return this.isError?this.$t("error."+this.errormsg):this.errormsg.msg}},methods:{clearError:function(){"no_session"===this.errormsg&&window.location.reload(),this.$emit("clearerror")}},mounted:function(){var e=this;window.$(document).on("keyup.dialog",(function(t){"Escape"===t.key&&e.clearError()})),this.dialog=new window.A11yDialog(this.$refs.wrap),this.dialog.show()},beforeDestroy:function(){window.$(document).off("keyup.dialog"),this.dialog.destroy()}}),a=o,l=s("2877"),u=Object(l["a"])(a,n,i,!1,null,null,null);t["a"]=u.exports},"649c":function(e,t,s){"use strict";(function(e,t){var n=s("7618");s("ac6a");(function(e){var s,i=['a[href]:not([tabindex^="-"]):not([inert])','area[href]:not([tabindex^="-"]):not([inert])',"input:not([disabled]):not([inert])","select:not([disabled]):not([inert])","textarea:not([disabled]):not([inert])","button:not([disabled]):not([inert])",'iframe:not([tabindex^="-"]):not([inert])','audio:not([tabindex^="-"]):not([inert])','video:not([tabindex^="-"]):not([inert])','[contenteditable]:not([tabindex^="-"]):not([inert])','[tabindex]:not([tabindex^="-"]):not([inert])'],r=9;function o(e,t){this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._maintainFocus=this._maintainFocus.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.container=e,this.dialog=e.querySelector('dialog, [role="dialog"], [role="alertdialog"]'),this.role=this.dialog.getAttribute("role")||"dialog",this.useDialog="show"in document.createElement("dialog")&&"DIALOG"===this.dialog.nodeName,this._listeners={},this.create(t)}function a(e){return Array.prototype.slice.call(e)}function l(e,t){return a((t||document).querySelectorAll(e))}function u(e){return NodeList.prototype.isPrototypeOf(e)?a(e):Element.prototype.isPrototypeOf(e)?[e]:"string"===typeof e?l(e):void 0}function c(e){var t=d(e),s=e.querySelector("[autofocus]")||t[0];s&&s.focus()}function d(e){return l(i.join(","),e).filter((function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}))}function h(e,t){var s=d(e),n=s.indexOf(document.activeElement);t.shiftKey&&0===n?(s[s.length-1].focus(),t.preventDefault()):t.shiftKey||n!==s.length-1||(s[0].focus(),t.preventDefault())}function p(e){var t=a(e.parentNode.childNodes),s=t.filter((function(e){return 1===e.nodeType}));return s.splice(s.indexOf(e),1),s}o.prototype.create=function(e){return this._targets=this._targets||u(e)||p(this.container),this.shown=this.dialog.hasAttribute("open"),this.dialog.setAttribute("role",this.role),this.useDialog?this.container.setAttribute("data-a11y-dialog-native",""):this.shown?this.container.removeAttribute("aria-hidden"):this.container.setAttribute("aria-hidden",!0),this._fire("create"),this},o.prototype.show=function(e){return this.shown?this:(this.shown=!0,s=document.activeElement,this.useDialog?this.dialog.showModal(e instanceof Event?void 0:e):(this.dialog.setAttribute("open",""),this.container.removeAttribute("aria-hidden"),this._targets.forEach((function(e){e.setAttribute("aria-hidden","true")}))),c(this.dialog),document.body.addEventListener("focus",this._maintainFocus,!0),document.addEventListener("keydown",this._bindKeypress),this._fire("show",e),this)},o.prototype.hide=function(e){return this.shown?(this.shown=!1,this.useDialog?this.dialog.close(e instanceof Event?void 0:e):(this.dialog.removeAttribute("open"),this.container.setAttribute("aria-hidden","true"),this._targets.forEach((function(e){e.removeAttribute("aria-hidden")}))),s&&s.focus(),document.body.removeEventListener("focus",this._maintainFocus,!0),document.removeEventListener("keydown",this._bindKeypress),this._fire("hide",e),this):this},o.prototype.destroy=function(){return this.hide(),this._fire("destroy"),this._listeners={},this},o.prototype.on=function(e,t){return"undefined"===typeof this._listeners[e]&&(this._listeners[e]=[]),this._listeners[e].push(t),this},o.prototype.off=function(e,t){var s=this._listeners[e].indexOf(t);return s>-1&&this._listeners[e].splice(s,1),this},o.prototype._fire=function(e,t){var s=this._listeners[e]||[];s.forEach(function(e){e(this.container,t)}.bind(this))},o.prototype._bindKeypress=function(e){this.shown&&e.which===r&&h(this.dialog,e)},o.prototype._maintainFocus=function(e){this.shown&&!this.container.contains(e.target)&&c(this.dialog)},"undefined"!==typeof t.exports?t.exports=o:"object"===Object(n["a"])(e)&&(e.A11yDialog=o)})("undefined"!==typeof e?e:window)}).call(this,s("c8ba"),s("dd40")(e))},"6b56":function(e,t,s){},"6e40":function(e,t,s){},7713:function(e,t,s){},"7ba0":function(e,t,s){},"801c":function(e,t,s){},9225:function(e,t,s){"use strict";s("6762");var n=s("2b0e"),i=s("a925"),r={en:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}}},o=s("edd4");s.d(t,"a",(function(){return a})),n["a"].use(i["a"]);var a=new i["a"]({locale:"en",fallbackLocale:"en",messages:{en:o},dateTimeFormats:r}),l=["en"];function u(e){return a.locale=e,document.querySelector("html").setAttribute("lang",e),e}function c(e){return a.locale===e?Promise.resolve(u(e)):l.includes(e)?Promise.resolve(u(e)):s("39c3")("./"+e+".json").then((function(t){return a.setLocaleMessage(e,t.default),l.push(e),u(e)}))}var d=document.getElementsByTagName("html")[0].getAttribute("lang").substring(0,2);"en"!==d&&c(d)},"98b7":function(e,t,s){"use strict";var n=s("7713"),i=s.n(n);i.a},a9af:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"dropdown-wrap",attrs:{tabindex:"-1"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.triggerOpen(t,!1)},mouseover:function(t){return e.triggerOpen(t,!0)},mouseleave:function(t){return e.triggerOpen(t,!1)},touchstart:e.triggerOpen,blur:function(t){return e.triggerOpen(t,!1)}}},[e._t("default"),s("transition",{attrs:{name:"fade"}},[e.open?s("div",{ref:"pane",staticClass:"dropdown-pane tooltip-pane"},[e._v("\n      "+e._s(e.tip)+"\n    ")]):e._e()])],2)},i=[],r={name:"TooltipSpan",props:["tip","show"],data:function(){return{open:!1}},methods:{triggerOpen:function(e,t){var s=this;"undefined"!=typeof this.tip&&""!=this.tip&&(!1===this.show?this.open=!1:this.open="boolean"===typeof t?t:!this.open,this.open&&this.$nextTick((function(){s.$refs.pane.style.right="";var e=s.$refs.pane.getBoundingClientRect(),t=document.documentElement.clientWidth;e.right>=t&&(s.$refs.pane.style.right="12px")})),"touchstart"===e.type&&this.open&&e.currentTarget.focus(),"touchstart"===e.type&&e.cancelable)}}},o=r,a=(s("f513"),s("2877")),l=Object(a["a"])(o,n,i,!1,null,null,null);t["a"]=l.exports},ad21:function(e,t,s){"use strict";var n=s("dd89"),i=s.n(n);i.a},ad76:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"menubutton",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.toggleOpen(!1)},keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.handleUpDown(-1))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.handleUpDown(1))},e.handleKeys],focusin:e.handleFocus,focusout:e.handleBlur}},[s("button",{ref:"button",class:{nobutton:!!e.nobutton,"flex-nowrap-center":!0},attrs:{id:e.id,tabindex:e.open?-1:0,"aria-haspopup":"true","aria-controls":e.id+"_wrap","aria-expanded":e.open?"true":"false"},on:{click:e.toggleOpen,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:(t.preventDefault(),e.toggleOpen(t))}}},[e.hasButton?e._e():e._t("default",null,{option:e.options[e.selected],selected:!0}),s("tooltip-span",{attrs:{show:!e.open,tip:e.header}},[e.hasButton?e._t("button"):e._e()],2),e.noarrow?e._e():s("icons",{staticClass:"mb_downarrow",attrs:{name:"downarrow",size:"micro"}})],2),s("transition",{attrs:{name:"fade"}},[e.open?s("ul",{class:{"menubutton-right":"right"==e.position},attrs:{role:"menu","aria-labelledby":e.id,"aria-activedescendant":e.id+"_"+e.curSelected,id:e.id+"_wrap",tabindex:"-1"}},[e.header?s("li",{staticClass:"menubutton-header"},[e._v("\n        "+e._s(e.header)+"\n      ")]):e._e(),e._l(e.options,(function(t,n){return s("li",{key:n,class:{listsubitem:t.subitem},on:{click:function(t){return e.handleClick(n)}}},[t.internallink?s("router-link",{class:{"menubutton-focus":n==e.curSelected},attrs:{to:t.internallink,id:e.id+"_"+n,role:"menuitem",tabindex:"-1"},nativeOn:{click:function(t){return e.toggleOpen(t)},mouseover:function(t){e.curSelected=n}}},[e.hasSlot?e._t("default",null,{option:t,selected:!1}):[e._v("\n            "+e._s(t.label)+"\n          ")]],2):s("component",e._b({class:{"menubutton-focus":n==e.curSelected},attrs:{id:e.id+"_"+n,role:"menuitem",tabindex:"-1"},on:{click:e.toggleOpen,mouseover:function(t){e.curSelected=n}}},"component",e.getLinkProps(t,n),!1),[e.hasSlot?e._t("default",null,{option:t,selected:!1}):[e._v("\n            "+e._s(t.label)+"\n          ")]],2)],1)}))],2):e._e()])],1)},i=[],r=(s("ac6a"),s("456d"),s("4917"),s("6b54"),s("3b2b"),s("b54a"),s("f05b")),o=s("a9af"),a={name:"MenuButton",model:{prop:"selected",event:"change"},props:["options","selected","id","header","nobutton","noarrow","position","searchby"],components:{Icons:r["a"],TooltipSpan:o["a"]},data:function(){return{open:!1,curSelected:0,keybuffer:"",closetimer:null}},computed:{hasButton:function(){return!!this.$scopedSlots["button"]},hasSlot:function(){return!!this.$scopedSlots["default"]}},methods:{getLinkProps:function(e,t){return e.internallink?{is:"router-link",to:e.internallink}:e.link?{is:"a",href:e.link,target:e.target||"_blank"}:{is:"span"}},toggleOpen:function(e){var t=this;this.open="boolean"===typeof e?e:!this.open,this.open?(this.curSelected=this.selected?this.selected:0,this.$nextTick(this.setMenuHeight),this.$nextTick(this.scrollToCurrent),this.$nextTick((function(){document.getElementById(t.id+"_"+t.curSelected).focus()}))):this.$nextTick((function(){document.getElementById(t.id).focus()}))},setMenuHeight:function(){var e=document.getElementById(this.id+"_wrap"),t=e.getBoundingClientRect(),s=e.clientHeight,n=t.top,i=window.innerHeight;e.style.height=n+s>i-30?i-n-30+"px":"auto",e.style.left="",e.style.right="",t.left<0&&(e.style.left="0px",e.style.right="auto")},scrollToCurrent:function(){var e=document.getElementById(this.id+"_"+this.curSelected),t=e.offsetTop,s=e.clientHeight,n=document.getElementById(this.id+"_wrap"),i=n.clientHeight,r=t-(i/2-s/2);n.scrollTop=r},handleClick:function(e){this.options[e].onclick&&this.options[e].onclick()},handleUpDown:function(e){var t=this;this.open?this.curSelected=(this.curSelected+e+this.options.length)%this.options.length:(this.toggleOpen(),1===e?this.curSelected=0:-1===e&&(this.curSelected=this.options.length-1)),this.$nextTick((function(){document.getElementById(t.id+"_"+t.curSelected).focus()}))},processKeyBuffer:function(e){if(""!==this.keybuffer){var t=new RegExp("^"+this.keybuffer,"i");for(var s in this.options){var n=this.options[s][this.searchby].toString();if(n.match(t)){this.curSelected=s,this.$nextTick(this.scrollToCurrent);break}}}e&&(this.keybuffer="")},handleKeys:function(e){var t=this;if(this.open){var s=e.key.toLowerCase();"home"===s?this.curSelected=0:"end"===s?this.curSelected=this.options.length-1:this.searchby&&this.options[Object.keys(this.options)[0]].hasOwnProperty(this.searchby)&&(s>="0"&&s<="9"||s>="a"&&s<="z")&&(this.keybuffer+=s,this.processKeyBuffer(!1),setTimeout((function(){return t.processKeyBuffer(!0)}),300))}},handleBlur:function(){var e=this;this.closetimer=setTimeout((function(){e.open=!1}),50)},handleFocus:function(){clearTimeout(this.closetimer)}}},l=a,u=(s("ad21"),s("2877")),c=Object(u["a"])(l,n,i,!1,null,null,null);t["a"]=c.exports},b394:function(e,t,s){"use strict";var n=s("6b56"),i=s.n(n);i.a},c428:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"listpane"},e._l(e.penalties,(function(t,n){return s("li",{key:n},[e._v("\n    "+e._s(t.pct)+"% "+e._s(e.$t("penalties."+t.type))+"\n  ")])})),0)},i=[],r={name:"PreviousAttempts",props:["part","submitby"],data:function(){return{expanded:!1}},computed:{penalties:function(){var e="by_question"===this.submitby,t=this.part.penalties;for(var s in t)"regen"===t[s].type&&e&&(t[s].type="trysimilar");return t}}},o=r,a=(s("b394"),s("2877")),l=Object(a["a"])(o,n,i,!1,null,null,null);t["a"]=l.exports},dd89:function(e,t,s){},edd4:function(e){e.exports=JSON.parse('{"nth":"| first | second | third | fourth | {n}th","seconds":"1 second | {n} seconds","minutes":"1 minute | {n} minutes","hours":"1 hour | {n} hours","close":"Close","loading":"Loading...","intro":"Intro / Instructions","next":"Next","previous":"Previous","question_n":"Question {n}","launch":{"continue_assess":"Continue Assessment","retake_assess":"Retake Assessment","start_assess":"Start Assessment","timewarning":"This assessment has a time limit. Once you start the assessment, the timer will not pause for any reason.  Are you sure you are ready to start?","resetmsg":"Teachers: you can reset your attempts on this assessment if desired.","doreset":"Reset Assessment","view_as_stu":"Acting as student: {name}"},"closed":{"hidden":"This assessment is not currently available.","notyet":"This assessment is not yet available.  It will be available {sd} until {ed}.","pastdue":"This assessment was due {ed}.","pasttime":"The timelimit has expired on this assessment.","needprereq":"You have not yet met the prerequisite requirements to work on this assessment.","no_attempts":"You have used all your attempts at this assessment.","latepassn":"You have one LatePass available. | You have {n} LatePass available.","latepass_needed":"You can redeem one LatePass to reopen this assessment until {date} | You can redeem {n} LatePasses to reopen this assessment until {date}","practice_no_latepass":"This assessment is now open for un-graded practice.","practice_w_latepass":"You can also open the assessment for un-graded practice.","will_block_latepass":"If you do so, you will not be able to later use a LatePass.","confirm":"Are you SURE you want to do this? If you do, you will not be able to later use a LatePass.","can_view_scored":"You can review your scored assessment.","view_scored":"View scored assessment","use_latepass":"Redeem LatePass | Redeem {n} LatePasses","do_practice":"Practice","unsubmitted_pastdue":"You have an unsubmitted assessment attempt.","unsubmitted_overtime":"You have an unsubmitted assessment attempt whose time limit has expired.","submit_now":"Submit it now","exit":"Exit","teacher_preview":"This assessment is closed to students, but you can preview it.","teacher_preview_button":"Preview Assessment"},"setlist":{"practice":"This assessment is in un-graded practice mode.","points_possible":"{pts} points possible.","due_at":"Due {date}.","originally_due":"Originally due {date}.","latepass_used":"You used one LatePass. | You used {n} LatePasses.","extension":"You were granted an extension.","penalty":"A penalty of {p}% will be applied.","take":"You can take this assessment one time. | You can take this assessment {n} times.","take_more":"You can take this assessment one more time. | You can take this assessment {n} more times.","attempt_inprogress":"You have an assessment attempt in progress.","cur_attempt_n_of":"You are working on attempt {n} of {nmax}.","keep_highest_q":"Best attempt on each question recorded as grade.","keep_highest":"Highest scored attempt recorded as grade.","keep_average":"Average score recorded as grade.","keep_last":"Last attempt recorded as grade.","retake_penalty":"A penalty of {p}% will be applied on the next retake.","time_expires":"Your current assessment time limit expires at {date}.","time_expires_wgrace":"Your current assessment time limit expires at {date}, and the grace period ends {grace}.","time_expired":"Your current assessment time limit expired at {date}.","time_grace_expires":"Your current assessment time limit expired at {date}. The grace period ends {grace}.","timelimit":"Time limit: {time}.","timelimit_wgrace":"Time limit: {time}, with a grace period of {grace} subject to a {penalty}% penalty.","timelimit_extend":"Extended from the original {time}."},"group":{"isgroup":"This is a group assessment.","teacher_auto":"This assessment allows students to select their own group members, up to {n}.","teacher_preset":"This assessment uses groups that the instructor must create in advance.","needpreset":"You are not yet a member of a group.  Contact your instructor to be added to a group.","members":"Group Members","max":"max {n}","remove":"Remove","add":"Add to group:","select":"Select...","addbutton":"Add"},"password":{"requires":"This assessment requires a password.","label":"Password: "},"qinfo":{"tryn":"Try {n} of {nmax}","regenn":"Version {n} of {nmax}","tries_remaining":"1 try on this question remaining | {n} tries on this question remaining","tries_remaining_range":"{min} to {max} tries remaining depending on the part - see Details","regens_remaining":"You can Try a Similar Question 1 more time | You can Try a Similar Question {n} more times"},"question":{"submit":"Submit Question","checkans":"Check Answer","saveans":"Save Answer","withdrawn":"This question was withdrawn by the instructor. You do not need to complete this question.","jump_to_answer":"Jump to Answer","jump_warn":"This will use up your remaining tries at this version of the question."},"header":{"score":"Score: {pts}/{poss}","practicescore":"Practice score: {pts}/{poss}","possible":"{poss} points possible","answered":"{n}/{tot} answered","assess_submit":"Submit Assessment","done":"Done","resources_header":"Resources","pts":"1 pt | {n} pts","details":"Details","warn_unattempted":"There appears to be unattempted questions. Are you sure you want to submit now?","withdrawn":"Question withdrawn","enable_mq":"Enable equation editor","disable_mq":"Disable equation editor","work_save":"Save work","work_saved":"Work saved","work_saving":"Saving...","confirm_assess_submit":"After submitting, you will not be able to change your answers on this version of the assessment. Are you ready to submit?"},"text":{"hide":"Hide text","show":"Show question text"},"error":{"error":"Error","invalid_password":"The password you entered was invalid","invalid_aid":"Invalid assessment ID","no_access":"You must be a student, teacher, or tutor to access this assessment","teacher_only":"You must be a teacher to access this feature","missing_param":"Missing required parameter on API call","not_avail":"The assessment is not currently available","not_ready":"The assessment is not ready for this action","timelimit_expired":"Timelimit has expired","timesup_submitting":"Timelimit has expired. Submitting now.","out_of_regens":"No more Try a Similar Question remain","need_group":"Cannot start the assessment until you have been added to a group","out_of_attempts":"You have used all your assessment attempts","already_submitted":"Submission rejected. You have submitted this assessment elsewhere since it was displayed here, so the question(s) you were trying to submit may be out of date.","no_active_attempt":"You do not have an active attempt","no_session":"Your login session expired. To continue you will need to log in again.","lti_no_session":"Your session expired. Please go back to your LMS and open the assignment again.","fast_regen":"Hey, how about slowing down and trying the problem before hitting Try a Similar Question?  Wait 5 seconds before trying again.","nochange":"Your answers have not changed since your last submission.","noserver":"The site is not responding","parseerror":"Server sent an invalid response","livepoll_wrongquestion":"Submitted question is not the current question.","livepoll_notopen":"This question is not open for submissions.","need_relaunch":"Necessary information is missing. Please go back to your LMS and open the assignment again."},"scoreresult":{"correct":"Correct","incorrect":"Incorrect","partial":"Partially correct","retry":"Retry this question","next":"Next question","retryq":"You can retry this question below","trysimilar":"Try a similar question","scorepts":"{pts} of {poss} pts | {pts} of {poss} pts","scorelast":"Score on last try:","submitted":"Question submitted.","see_details":"See Details for more.","manual_grade":"This question contains parts that must be graded by your instructor. They will show a score of 0 until they are graded."},"summary":{"no_total":"Your assessment has been submitted.","viewwork_immediately":"You can view your work and scores in the gradebook.","viewwork_after_take":"You can view your work and scores in the gradebook.","viewwork_after_due":"You can view your work and scores in the gradebook after the due date.","viewwork_never":"","score":"Score","recordedscore":"Recorded Score","use_override":"Instructor grade override is recorded","scorepts":"{pts} of {poss} pt | {pts} of {poss} pts","retake_penalty":"{n}% retake penalty applied","late_penalty":"{n}% late work penalty applied","scorelist":"Score List","reshowquestions":"Review Questions"},"scorelist":{"question":"Question","score":"Score","pts":"{pts} of {poss} pt | {pts} of {poss} pts","unattempted":"Unattempted"},"catlist":{"category":"Category","score":"Score","pts":"{pts} of {poss} pt | {pts} of {poss} pts"},"prev":{"previous_attempts":"Previous Attempts","scored_attempts":"Scored Attempts","all_attempts":"All Attempts","date":"Date","score":"Score","viewingb":"Review work in gradebook"},"penalties":{"applied":"Penalties applied","retry":"Retry penalty","regen":"Assessment retake penalty","trysimilar":"Try Similar Question penalty","late":"Late work penalty","overtime":"Overtime penalty"},"qdetails":{"question_details":"Question Details","part":"Part","lasttry":"Results on last try:","score":"Score","try":"Tries Remaining","penalties":"Penalties","category":"Category","gbscore":"Recorded score","bestpractice":"Best practice score","lastscore":"Score on last try","license":"License"},"timer":{"hrs":"hr | hrs","min":"min | mins","overtime":"Overtime","show":"Show timelimit countdown"},"helps":{"message_instructor":"Message instructor","post_to_forum":"Post to forum","video":"Video","read":"Read","written_example":"Written Example"},"unload":{"alert":"Alert","unsubmitted_questions":"You have entered answers that have not yet been submitted. Are you sure you want to leave?","unsubmitted_assessment":"You have not submitted your assessment for grading yet. Don\'t forget to come back and do that.","unsubmitted_done_assessment":"You have attempted every question, but have not submitted your assessment yet. Don\'t forget to come back and do that."},"pages":{"next":"Next Page"},"print":{"print_version":"Print Ready Version","print":"Print","hide_text":"Hide Intro and Between-Question Text","show_text":"Show Intro and Between-Question Text","hide_qs":"Hide Questions","show_qs":"Show Questions"},"videocued":{"continue":"Continue video to {title}","skipto":"Jump video to {title}"},"livepoll":{"settings":"LivePoll Settings","show_question_default":"Show question on this screen when first selected","show_results_live_default":"Show results as they come in on this screen","show_results_after":"Show results on this screen after question is closed","show_answers_after":"Show correct answers automatically after question is closed","use_timer":"Use question timer","seconds":"seconds","show_question":"Show question on this screen","show_results":"Show results","show_answers":"Show correct answers","stucnt":"No students | 1 student | {n} students","open_input":"Open student input","close_input":"Close student input","new_version":"Generate a similar question","waiting":"Waiting for the instructor to start a question","numresults":"1 result received | {n} results received","answer":"Answer","frequency":"Frequency"},"lti":{"more":"More options","userprefs":"User Preferences","msgs":"Messages | Messages (1 new) | Messages ({n} new)","use_latepass":"Redeem LatePass"},"icons":{"retake":"Reattempts","calendar":"Date","retry":"Retries","alert":"Alert","info":"Info","timer":"Timer","lock":"Lock","square-check":"Check","group":"Group","incorrect":"Incorrect","correct":"Correct","partial":"Partially correct","dot":"Dot","attempted":"Attempted","unattempted":"Unattempted","print":"Print","left":"Previous","right":"Next","downarrow":"Expand","file":"File","close":"Close","message":"Message","forum":"Forum","video":"Video","eqned":"Equation editor","eqnedoff":"Equation editor disabled","more":"More","clipboard":"Clipboard","rubric":"Rubric","none":""},"gradebook":{"detail_title":"Review Assessment Attempts","started":"Started","lastchange":"Last Changed","time_onscreen":"Total time questions were on-screen","time_on_version":"Time spent on this version","due":"Due Date","originally_due":"Originally Due","make_exception":"Make Exception","edit_exception":"Edit Exception","attempt_n":"Attempt {n}","version_n":"Version {n}","scored_attempt":"Scored attempt","practice_attempt":"Practice attempt","submitted":"Submitted","scored":"scored","score":"Score","not_started":"Not started","not_submitted":"Not submitted","best_on_question":"Grade is calculated on the best version of each question","keep_best":"Grade is calculated on the best assessment attempt","keep_avg":"Grade is calculated on the average of all assessment attempts","keep_last":"Grade is calculated on the last assessment attempt","full_credit_parts":"Full credit all parts","full_credit":"Full credit","add_feedback":"Add feedback","feedback":"Feedback","general_feedback":"General feedback","use_in_msg":"Use in Message","clear_hdr":"Delete confirmation","clear_all":"Delete all attempts","clear_attempt":"Delete this attempt","clear_qwork":"Delete work on question","question_id":"Question ID","seed":"Seed","msg_owner":"Message owner to report problems","had_help":"Had help available","save":"Save Changes","return":"Return to Gradebook","gb_score":"Score in Gradebook","override":"Override score","overridden":"Overridden by teacher","view_as_stu":"View as student","print":"Print version","hide_perfect":"Hide full-credit questions","hide_correct":"Hide correct questions","hide_unans":"Hide unanswered questions","show_perfect":"Show full-credit questions","show_correct":"Show correct questions","show_unans":"Show unanswered questions","quick_grade":"Quick grade","saving":"Saving...","saved":"Saved","save_fail":"Error saving","clear_completely_msg":"Delete all student attempts, as if the student never started the assessment. If the student takes the assessment, they will get new versions of all questions.","clear_all_work_msg":"Delete all student work, but retain the most recent question versions.","clear_attempt_regen_msg":"Delete this assessment attempt completely. If the student retakes the assessment, they will get new versions of all questions.","clear_attempt_msg":"Delete work on this attempt. Student will be able to redo this attempt with the same question versions.","clear_qver_regen_msg":"Delete this question version entirely.","clear_qver_regen_msg2":"Delete student work on this question version, and generate a new version of the question.","clear_qver_msg":"Delete student work on this question version, but keep the version.","clear_warning":"WARNING: This action will delete student data and CAN NOT be undone.","unsaved_warn":"Warning: You have unsaved score or feedback changes. If you change versions now, your changes will be discarded.","unsubmitted":"This assessment attempt has not been submitted for grading.","show_tries":"Show all tries","show_penalties":"Show applied penalties","all_tries":"All Tries","part_n":"Part {n}","try_n":"Try {n}","view_edit":"View/Edit Question","show_all_ans":"Show All Answers","no_versions":"No assessment attempts available to view yet","minutes":"minutes","avail_never":"Grade is currently hidden by the teacher.","avail_after_take":"Will show after you submit an assessment attempt.","avail_after_due":"Will show after the due date.","latepass_blocked_practice":"Use of a LatePass is currently blocked because the student viewed the assessment in practice mode.","clear_latepass_block":"Clear Block"},"regions":{"questions":"Questions and text","q_and_vid":"Video and questions","pagenav":"Page navigation","qnav":"Question navigation","qvidnav":"Video and question navigation","aheader":"Assessment info"}}')},f05b:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("i",[s("svg",{staticClass:"svgicon",attrs:{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",viewBox:"0 0 24 24",width:e.iconwidth,height:e.iconwidth,fill:"none",stroke:e.stroke,"stroke-width":e.strokewidth,"stroke-linecap":"round","stroke-linejoin":"round"}},["retake"==e.name?[s("polyline",{attrs:{points:"17 1 21 5 17 9"}}),s("path",{attrs:{d:"M3 11V9a4 4 0 0 1 4-4h14"}}),s("polyline",{attrs:{points:"7 23 3 19 7 15"}}),s("path",{attrs:{d:"M21 13v2a4 4 0 0 1-4 4H3"}})]:"calendar"==e.name?[s("rect",{attrs:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}}),s("line",{attrs:{x1:"16",y1:"2",x2:"16",y2:"6"}}),s("line",{attrs:{x1:"8",y1:"2",x2:"8",y2:"6"}}),s("line",{attrs:{x1:"3",y1:"10",x2:"21",y2:"10"}})]:"retry"==e.name?[s("polyline",{attrs:{points:"1 4 1 10 7 10"}}),s("path",{attrs:{d:"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"}})]:"alert"==e.name?[s("path",{attrs:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}}),s("line",{attrs:{x1:"12",y1:"9",x2:"12",y2:"13"}}),s("line",{attrs:{x1:"12",y1:"17",x2:"12",y2:"17"}})]:"info"==e.name?[s("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),s("line",{attrs:{x1:"12",y1:"16",x2:"12",y2:"12"}}),s("line",{attrs:{x1:"12",y1:"8",x2:"12",y2:"8"}})]:"timer"==e.name?[s("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),s("polyline",{attrs:{points:"12 6 12 12 16 14"}})]:"lock"==e.name?[s("rect",{attrs:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}}),s("path",{attrs:{d:"M7 11V7a5 5 0 0 1 10 0v4"}})]:"square-check"==e.name?[s("polyline",{attrs:{points:"9 11 12 14 22 4"}}),s("path",{attrs:{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"}})]:"group"==e.name?[s("path",{attrs:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}}),s("circle",{attrs:{cx:"9",cy:"7",r:"4"}}),s("path",{attrs:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}}),s("path",{attrs:{d:"M16 3.13a4 4 0 0 1 0 7.75"}})]:"incorrect"==e.name?[s("path",{attrs:{stroke:e.wrong,d:"M18 6 L6 18 M6 6 L18 18"}})]:"correct"==e.name?[s("polyline",{attrs:{stroke:e.correct,points:"20 6 9 17 4 12"}})]:"partial"==e.name?[s("path",{attrs:{stroke:e.partial,d:"M 5.3,10.6 9,14.2 18.5,4.6 21.4,7.4 9,19.8 2.7,13.5 z"}})]:"dot"==e.name?[s("circle",{attrs:{cx:"12",cy:"12",r:"8",fill:e.neutral}})]:"unattempted"==e.name?[s("circle",{attrs:{cx:"12",cy:"12",r:"8",fill:e.neutral}})]:"print"==e.name?[s("polyline",{attrs:{points:"6 9 6 2 18 2 18 9"}}),s("path",{attrs:{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}}),s("rect",{attrs:{x:"6",y:"14",width:"12",height:"8"}})]:"left"==e.name?[s("polyline",{attrs:{points:"15 18 9 12 15 6"}})]:"right"==e.name?[s("polyline",{attrs:{points:"9 18 15 12 9 6"}})]:"downarrow"==e.name?[s("polygon",{attrs:{fill:e.dark,"stroke-linecap":"square",points:"6 6 18 6 12 14"}})]:"file"==e.name?[s("path",{attrs:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}}),s("polyline",{attrs:{points:"14 2 14 8 20 8"}}),s("line",{attrs:{x1:"16",y1:"13",x2:"8",y2:"13"}}),s("line",{attrs:{x1:"16",y1:"17",x2:"8",y2:"17"}}),s("polyline",{attrs:{points:"10 9 9 9 8 9"}})]:"close"==e.name?[s("path",{attrs:{d:"M18 6 L6 18 M6 6 L18 18"}})]:"message"==e.name?[s("path",{attrs:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}}),s("polyline",{attrs:{points:"22,6 12,13 2,6"}})]:"forum"==e.name?[s("path",{attrs:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"}})]:"video"==e.name?[s("rect",{attrs:{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}}),s("polygon",{attrs:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}})]:"eqned"==e.name?[s("polyline",{attrs:{points:"1 10 4 10 7 22 10 2 22 2"}}),s("rect",{attrs:{x:"14",y:"7",width:"6",height:"12",rx:"2",ry:"2"}})]:"eqnedoff"==e.name?[s("polyline",{attrs:{points:"1 10 4 10 7 22 10 2 22 2"}}),s("rect",{attrs:{x:"14",y:"7",width:"6",height:"12",rx:"2",ry:"2"}}),s("polyline",{attrs:{points:"0 2 24 22"}})]:"more"==e.name?[s("circle",{attrs:{fill:e.stroke,cx:"12",cy:"12",r:"1"}}),s("circle",{attrs:{fill:e.stroke,cx:"12",cy:"4",r:"1"}}),s("circle",{attrs:{fill:e.stroke,cx:"12",cy:"20",r:"1"}})]:"clipboard"==e.name?[s("path",{attrs:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}}),s("rect",{attrs:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"}}),s("path",{attrs:{d:"M 9 12 h 6 M 9 16 h6"}})]:e._e()],2),e.alttext.length>0?s("span",{staticClass:"sronly"},[e._v("\n    "+e._s(e.alttext)+"\n  ")]):e._e()])},i=[],r=(s("7f7f"),{name:"Icons",data:function(){return{id:null,dark:"#000",neutral:"#00a",wrong:"#900",correct:"#090",partial:"#fb0",warn:"#900",subdued:"#757575"}},props:["name","size","color","alt"],computed:{alttext:function(){return this.alt?""===this.alt?"":this.$t(this.alt):this.$t("icons."+this.name)},stroke:function(){return this.color?this.hasOwnProperty(this.color)?this[this.color]:this.color:this.dark},iconwidth:function(){switch(this.size){case"micro":return 12;case"small":return 16;case"medium":return 20}return 16},strokewidth:function(){switch(this.size){case"micro":return 2.5;case"small":return 2;case"medium":return 2}return 2}}}),o=r,a=(s("55db"),s("2877")),l=Object(a["a"])(o,n,i,!1,null,null,null);t["a"]=l.exports},f513:function(e,t,s){"use strict";var n=s("801c"),i=s.n(n);i.a}}]);
//# sourceMappingURL=chunk-common.js.map
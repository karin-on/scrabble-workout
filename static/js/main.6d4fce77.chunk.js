(window["webpackJsonpscrabble-workout"]=window["webpackJsonpscrabble-workout"]||[]).push([[0],{160:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(36),i=n.n(o),c=n(7),s=n(6),l=n(77),u=(n(96),n(97),n(98),n(99),n(15)),m=n(16),d=n(19),_=n(17),f=n(20),p=n(13),b=n(21),v=n(49),g=n.n(v),h=function(){return a.a.createElement("header",null,a.a.createElement("h1",{className:g.a.Header},a.a.createElement(p.b,{className:g.a.HeaderLink,to:"/"},"Scrabble Workout")))},w=n(22),S=n.n(w),O=function(){return a.a.createElement("main",{className:S.a.Home},a.a.createElement("section",{className:S.a.Hero},a.a.createElement("div",{className:S.a.HeroBg}),a.a.createElement("h2",{className:S.a.HeroHeader},"Zosta\u0144 mistrzem siedmioliter\xf3wek!")),a.a.createElement("section",{className:S.a.StartGame},a.a.createElement(p.b,{to:"/game",className:S.a.StartGameAction},"Zagraj")))},E=n(10),L=n(18),A=n(38),y=n(79),j=n.n(y),k=n(3),N=n.n(k),C=n(25),D=n.n(C),H=n(26),P=n.n(H),B=7,W=12e4,x=1e3;window.matchMedia=window.matchMedia||function(){return{matches:!1,addEventListener:function(){},removeEventListener:function(){}}};var M=window.matchMedia("(max-width: 530px)"),R=function(e){var t=e.currentAnswer;return a.a.createElement("section",{className:P.a.SlotsSection},a.a.createElement("ul",{className:P.a.Slots},Object(E.a)(Array(B).keys()).map(function(e){return t[e]}).map(function(e,t){return a.a.createElement("li",{key:t,className:N()(P.a.Slot,Object(L.a)({},P.a.Empty,!e))},e?a.a.createElement("span",{className:P.a.SlotLetter},e.value):null)})))},I=n(80),T=n.n(I),U=function(e){var t=e.clicked,n=e.disabled;return a.a.createElement("button",{onClick:t,className:T.a.BackspaceBtn,disabled:n,type:"button"},a.a.createElement("i",{className:"fas fa-backspace fa-2x"}))};U.defaultProps={clicked:function(){}};var G=n(31),z=n(40),F=n.n(z),V=n(41),X=n.n(V),q=function(e){var t=e.dragActive,n=e.clicked,r=e.letter,o=e.index;return a.a.createElement(G.b,{draggableId:r.id,isDragDisabled:!t,disableInteractiveElementBlocking:!0,index:o,key:r.id},function(e){return a.a.createElement("li",Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,className:N()(X.a.Letter,X.a["Letter-".concat(o+1)])}),a.a.createElement("button",{type:"button",tabIndex:"-1",className:X.a.LetterButton,disabled:!r.active,onClick:function(){return n(r.id)}},r.value))})};q.defaultProps={clicked:function(){}};var Z=function(e){var t=e.letters,n=e.clicked,r=e.dragActive,o=e.dragEnd;return a.a.createElement(G.a,{onDragEnd:o},a.a.createElement("section",{className:F.a.Letters},a.a.createElement(G.c,{droppableId:"droppable",direction:"horizontal"},function(e,o){return a.a.createElement("ul",Object.assign({className:N()(F.a.LettersContainer,Object(L.a)({},F.a.DraggingOver,o.isDraggingOver)),ref:e.innerRef},e.droppableProps),t.map(function(t,o){return a.a.createElement(q,Object.assign({},e.draggableProps,e.dragHandleProps,{dragActive:r,clicked:n,letter:t,index:o,key:t.id}))}),e.placeholder)})))};Z.defaultProps={dragEnd:function(){},clicked:function(){}};var K=n(27),Q=n.n(K),Y=function(e){var t=e.onSubmit,n=e.onCancel,r=e.showCancel;return a.a.createElement("section",{className:Q.a.Submit},a.a.createElement("button",{className:N()(Q.a.Button,Q.a.SubmitButton),onClick:t,type:"button"},"Zatwierd\u017a"),r?a.a.createElement("button",{className:N()(Q.a.Button,Q.a.CancelButton),onClick:n,type:"button"},"Anuluj"):null)};Y.defaultProps={onSubmit:function(){},onCancel:function(){}};var J=n(84),$=n.n(J),ee=function(e){for(var t,n,r=e,a=e.length;a;)n=Math.floor(Math.random()*a),t=r[a-=1],r[a]=r[n],r[n]=t;return r},te=function(){return"_".concat(Math.random().toString(36).substr(2))},ne=function(){return M.matches},re=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(a)))).state={timeLeft:W},n.startTimer=function(){n.setState({start:(new Date).getTime()},function(){n.updateTimeLeft(),n.interval=setInterval(n.updateTimeLeft,x)})},n.updateTimeLeft=function(){var e=n.props.timeIsOver;n.setState({timeLeft:n.getTimeLeft()},function(){n.state.timeLeft<=0&&(n.stopTimer(),e())})},n.stopTimer=function(){clearInterval(n.interval)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.startTimer()}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"getTimeLeft",value:function(){var e=this.state.start;return W-((new Date).getTime()-e)}},{key:"render",value:function(){var e=this.state.timeLeft;return a.a.createElement("div",{className:$.a.Timer},a.a.createElement("span",null,function(e){if(!Number.isInteger(e))throw new Error("Error in formatDuration function: parameter is not a non-negative integer. Please provide a proper parameter");if(!(e<0)){var t=Math.floor(e/6e4).toString(),n=Math.floor(e%6e4/1e3).toString().padStart(2,"0");return"".concat(t,":").concat(n)}}(e)))}}]),t}(r.Component),ae=function(e){var t,n=e.length,r=(t=n,Math.floor(Math.random()*t));return{type:"INIT_WORDS",words:e.length?Object(E.a)(e[r]):[]}},oe=function(e){return{type:"SUBMIT_ANSWER",answer:e}};function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(n,!0).forEach(function(t){Object(L.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var se=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(_.a)(t).call(this,e))).getDragActive=function(){return!ne()},n.handleResize=function(){var e=n.state,t=e.letters,r=e.currentAnswer,a=e.dragActive,o=n.getDragActive();if(o!==a){var i={dragActive:o};if(o){var c=t.filter(function(e){return e.active}),s=r.concat(c);i=ce({},i,{letters:n.setAllLettersActiveState(s,!0),currentAnswer:Object(E.a)(s),isSubmitVisible:!1})}else i=ce({},i,{letters:n.setAllLettersActiveState(t,!1),currentAnswer:Object(E.a)(t),isSubmitVisible:!0});n.setState(i)}},n.initLetters=function(e){var t=e[0].split("").map(function(e){return{value:e,id:te(),active:!0}});n.setState({letters:ee(t)},n.initCurrentAnswer)},n.initCurrentAnswer=function(){if(!ne()){var e=n.state.letters;n.setState({currentAnswer:Object(E.a)(e)})}},n.toggleLettersActiveState=function(e){var t=n.state.letters,r=t.findIndex(function(t){return t.id===e});t[r].active=!t[r].active,n.setState({letters:t})},n.setAllLettersActiveState=function(e,t){var n=e;return n.forEach(function(e,r){n[r].active=t}),n},n.handleLetterClick=function(e){if(ne()){var t=n.state,r=t.letters,a=t.currentAnswer,o=r.find(function(t){return t.id===e});n.toggleLettersActiveState(e);var i=[].concat(Object(E.a)(a),[o]);n.setState({currentAnswer:i},function(){i.length===B&&n.setState({isSubmitVisible:!0})})}},n.handleDragEnd=function(e){var t=e.source,r=e.destination,a=e.draggableId,o=n.state.letters;if(r&&r.index!==t.index){var i=o[t.index],c=o.filter(function(e){return e.id!==a});c.splice(r.index,0,i),n.setState({letters:c,currentAnswer:Object(E.a)(c)})}},n.handleBackspaceClick=function(){var e=n.state.currentAnswer,t=e[e.length-1].id;n.toggleLettersActiveState(t),e.pop(),n.setState({currentAnswer:Object(E.a)(e)})},n.submit=function(){var e=n.state.currentAnswer,t=n.props,r=t.dispatch,a=t.history;r(oe(e.length===B?n.joinLetters(e):"")),a.replace("/result")},n.onSubmit=function(){n.submit()},n.onCancel=function(){n.setState({isSubmitVisible:!1})},n.timeIsOver=function(){n.submit()},n.joinLetters=function(e){return e.reduce(function(e,t){return e+t.value},"")},n.state={letters:[],currentAnswer:[],isSubmitVisible:!1,dragActive:n.getDragActive()},n.handleResize=n.handleResize.bind(Object(A.a)(n)),n.debouncedResizeListener=j()(n.handleResize,50),n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.allWords,n=e.dispatch;t.length&&n(ae(t)),window.addEventListener("resize",this.debouncedResizeListener)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.allWords,r=t.words,a=t.dispatch;n!==e.allWords&&a(ae(n)),r!==e.words&&r.length&&this.initLetters(r)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedResizeListener)}},{key:"render",value:function(){var e=this.props,t=e.loading,n=e.error,r=this.state,o=r.letters,i=r.currentAnswer,c=r.isSubmitVisible,s=r.dragActive,l=t||n?N()(D.a.Game,D.a.Empty):D.a.Game;return t?a.a.createElement("main",{className:l},a.a.createElement("div",{className:D.a.Loader},"Loading\u2026")):n?a.a.createElement("main",{className:l},"Wyst\u0105pi\u0142 b\u0142\u0105d"):a.a.createElement("main",{className:D.a.Game},a.a.createElement(re,{timeIsOver:this.timeIsOver}),a.a.createElement(R,{currentAnswer:i}),a.a.createElement(U,{clicked:this.handleBackspaceClick,disabled:0===i.length||c}),c?a.a.createElement(Y,{onSubmit:this.onSubmit,onCancel:this.onCancel,showCancel:!s}):a.a.createElement(Z,{letters:o,clicked:this.handleLetterClick,dragActive:s,dragEnd:this.handleDragEnd}),s?a.a.createElement(Y,{onSubmit:this.onSubmit,onCancel:this.onCancel,showCancel:!s}):null)}}]),t}(r.Component);se.defaultProps={error:null};var le=Object(c.b)(function(e){var t=e.allWords;return{allWords:t.data,loading:t.loading,error:t.error,words:e.words}})(se),ue=n(85),me=n.n(ue),de=n(43),_e=n.n(de),fe=function(e){var t=e.answer;return a.a.createElement("div",{className:_e.a.AnswerSection},a.a.createElement("h2",{className:_e.a.AnswerHeader},t?"Twoje s\u0142owo:":"Nie u\u0142o\u017cy\u0142a\u015b/e\u015b s\u0142owa"),t?a.a.createElement("div",{className:_e.a.Answer},t):null)},pe=n(28),be=n.n(pe),ve=function(e){var t=e.isAnswerCorrect;return a.a.createElement("div",{className:be.a.MessageSection},t?a.a.createElement("h3",{className:be.a.MessageHeader},a.a.createElement("i",{className:N()("fas fa-check fa-3x",be.a.MessageIcon)}),"Gratulacje, jest to poprawna odpowied\u017a!"):a.a.createElement("h2",{className:be.a.MessageHeader},a.a.createElement("i",{className:N()("fas fa-times fa-3x",be.a.MessageIcon)}),"Nie uda\u0142o si\u0119, mo\u017ce nast\u0119pnym razem"))},ge=n(29),he=n.n(ge),we=function(e){var t=e.isAnswerCorrect,n=e.otherWords,r=n.map(function(e){return a.a.createElement("li",{className:he.a.WordListItem,key:e},e.toUpperCase())}),o=n.length>1?"s\u0142owa":"s\u0142owo";return a.a.createElement("div",{className:he.a.OtherSection},n.length?a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{className:he.a.OtherHeader},t?"Inne mo\u017cliwe ".concat(o,":"):"Poprawne ".concat(o," to:")),a.a.createElement("ul",{className:he.a.WordList},r)):a.a.createElement("h4",{className:he.a.OtherHeader},"S\u0142owo nie ma anagram\xf3w"))},Se=n(53),Oe=n.n(Se),Ee=function(){return a.a.createElement("div",{className:Oe.a.PlayAgainSection},a.a.createElement(p.b,{to:"/game",replace:!0,className:Oe.a.PlayAgainBtn,type:"button"},"Zagraj ponownie"))},Le=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(a)))).isAnswerCorrect=function(){var e=n.props,t=e.words,r=e.answer;return t.includes(r)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillUnmount",value:function(){(0,this.props.dispatch)(oe(null))}},{key:"render",value:function(){var e=this.props,t=e.words,n=e.answer,r=t.filter(function(e){return e!==n});return null===n?a.a.createElement(b.a,{to:"/"}):a.a.createElement("main",{className:me.a.Result},a.a.createElement(fe,{answer:n.toUpperCase()}),a.a.createElement(ve,{isAnswerCorrect:this.isAnswerCorrect()}),a.a.createElement(we,{isAnswerCorrect:this.isAnswerCorrect(),otherWords:r}),a.a.createElement(Ee,null))}}]),t}(r.Component);Le.defaultProps={answer:null};var Ae=Object(c.b)(function(e){return{words:e.words,answer:e.answer}})(Le),ye=n(86),je=n.n(ye),ke=function(e){return je.a.get(e).then(function(e){return e.data})},Ne="words.json",Ce=function(){return ke(Ne)},De=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(function(e){return e({type:"LOAD_ALL_WORDS_REQUEST"}),Ce().then(function(t){return e(function(e){return{type:"LOAD_ALL_WORDS_SUCCESS",data:e}}(t))},function(t){return e(function(e){return{type:"LOAD_ALL_WORDS_FAILURE",error:e}}(t))})})}},{key:"render",value:function(){return a.a.createElement(p.a,{basename:"/scrabble-workout"},a.a.createElement("div",null,a.a.createElement(h,null),a.a.createElement(b.b,{exact:!0,path:"/",component:O}),a.a.createElement(b.b,{exact:!0,path:"/game",component:le}),a.a.createElement(b.b,{exact:!0,path:"/result",component:Ae})))}}]),t}(r.Component);De.defaultProps={dispatch:function(){}};var He=Object(c.b)(null)(De);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pe=[];function Be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function We(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Be(n,!0).forEach(function(t){Object(L.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var xe={data:[],loading:!1,error:null},Me=Object(s.c)({allWords:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.data,a=t.error;switch(n){case"LOAD_ALL_WORDS_REQUEST":return We({},e,{loading:!0});case"LOAD_ALL_WORDS_SUCCESS":return We({},e,{loading:!1,error:null,data:r});case"LOAD_ALL_WORDS_FAILURE":return We({},e,{loading:!1,error:a,data:[]});default:return e}},words:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.words;switch(n){case"INIT_WORDS":return r;default:return e}},answer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.answer;switch(n){case"SUBMIT_ANSWER":return r;default:return e}}}),Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,Ie=Object(s.e)(Me,Re(Object(s.a)(l.a)));i.a.render(a.a.createElement(c.a,{store:Ie},a.a.createElement(He,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},22:function(e,t,n){e.exports={Home:"Home__Home__hMHTH",Hero:"Home__Hero__1qk5I",HeroBg:"Home__HeroBg__1VrOS",HeroHeader:"Home__HeroHeader__2c86O",StartGame:"Home__StartGame__39d5A",StartGameAction:"Home__StartGameAction__3rSNF"}},25:function(e,t,n){e.exports={Game:"Game__Game__xvUCX",Empty:"Game__Empty__2meEP",Loader:"Game__Loader__srtKB",load:"Game__load__fLGti"}},26:function(e,t,n){e.exports={SlotsSection:"Slots__SlotsSection__3yFud",Slots:"Slots__Slots__37-My",Slot:"Slots__Slot__2KBwb",Empty:"Slots__Empty__2UuSX",SlotLetter:"Slots__SlotLetter__3XQPm"}},27:function(e,t,n){e.exports={Submit:"Submit__Submit__2tvrk",Button:"Submit__Button__3zAbD",SubmitButton:"Submit__SubmitButton__YP53B",CancelButton:"Submit__CancelButton__MbH0S"}},28:function(e,t,n){e.exports={MessageSection:"ResultMessage__MessageSection__1Aq-D",MessageIcon:"ResultMessage__MessageIcon__2MrXu",MessageHeader:"ResultMessage__MessageHeader__1R9wU"}},29:function(e,t,n){e.exports={OtherSection:"OtherWords__OtherSection__32KdO",OtherHeader:"OtherWords__OtherHeader__1VlGe",WordList:"OtherWords__WordList__1RqyB",WordListItem:"OtherWords__WordListItem__qaidZ"}},40:function(e,t,n){e.exports={Letters:"Letters__Letters__2F_th",LettersContainer:"Letters__LettersContainer__R5vr9",DraggingOver:"Letters__DraggingOver__2vakM"}},41:function(e,t,n){e.exports={Letter:"Letter__Letter__1liXh","Letter-1":"Letter__Letter-1__1nzbv","Letter-2":"Letter__Letter-2__-Frrh","Letter-3":"Letter__Letter-3__1W4AF","Letter-4":"Letter__Letter-4__1wDI3","Letter-5":"Letter__Letter-5__3bqUn","Letter-6":"Letter__Letter-6__1TiOg","Letter-7":"Letter__Letter-7__1Y5t_",LetterButton:"Letter__LetterButton__28uiz"}},43:function(e,t,n){e.exports={AnswerSection:"Answer__AnswerSection__w0wsp",AnswerHeader:"Answer__AnswerHeader__1Lf6s",Answer:"Answer__Answer__1hAC1"}},49:function(e,t,n){e.exports={Header:"Header__Header__1_1R8",HeaderLink:"Header__HeaderLink__ClY9q"}},53:function(e,t,n){e.exports={PlayAgainSection:"PlayAgain__PlayAgainSection__2e0KN",PlayAgainBtn:"PlayAgain__PlayAgainBtn__1zcw0"}},80:function(e,t,n){e.exports={BackspaceBtn:"Backspace__BackspaceBtn__3fj68"}},84:function(e,t,n){e.exports={Timer:"Timer__Timer__18W2m"}},85:function(e,t,n){e.exports={Result:"Result__Result__3Lmz1"}},87:function(e,t,n){e.exports=n(160)},99:function(e,t,n){e.exports={"fa-spin":"index__fa-spin__2FcI0"}}},[[87,1,2]]]);
//# sourceMappingURL=main.6d4fce77.chunk.js.map
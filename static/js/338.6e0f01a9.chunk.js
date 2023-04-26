"use strict";(self.webpackChunkITD_React_project=self.webpackChunkITD_React_project||[]).push([[338],{2146:function(e,a,t){t.d(a,{Z:function(){return g}});var n=t(9439),s=t(2791),i=t(9513),r=t.n(i),c=(t(8639),t(3145)),o=t(9434),l=t(3255),d=t(7689),m=t(4289),u=t(8182),h=t(1601),f=t(184),_=["January","February","March","April","May","June","July","August","September","October","November","December"],g=function(){var e=(0,o.I0)(),a=(0,s.useState)(new Date),t=(0,n.Z)(a,2),i=t[0],g=t[1],p=(0,o.v9)(m._),x=(0,d.TH)(),j=(0,s.useState)(!1),y=(0,n.Z)(j,2),v=y[0],N=y[1],b=x.pathname.endsWith("dynamics");(0,s.useEffect)((function(){x.pathname.endsWith("transactions")&&p&&e((0,l.fo)(C(i))),x.pathname.endsWith("categories")&&p&&e((0,l.rS)(C(i))),x.pathname.endsWith("dynamics")&&p&&e((0,h.Tt)(C(i)))}),[p,e,x.pathname,i]);var C=function(e){var a=e.getMonth();return{year:e.getFullYear(),month:a+1}};return(0,f.jsxs)("div",{className:(0,u.Z)("calendarWrap",b&&"calendarDynamicsWrap"),children:[(0,f.jsx)(r(),{selected:i,onChange:function(e){return function(e){g(e),N(!0)}(e)},value:function(e){var a=e.getMonth(),t=e.getFullYear();return"".concat(_[a],", ").concat(t)}(i),onCalendarClose:function(){return a=i,void(v||(x.pathname.endsWith("transactions")&&e((0,l.fo)(C(a))),x.pathname.endsWith("categories")&&e((0,l.rS)(C(a))),b&&e((0,h.Tt)(C(a))),N(!0)));var a},maxDate:new Date,dateFormat:"MM/yyyy",showMonthYearPicker:!0}),(0,f.jsx)(c.Z,{name:b?"icon-vector-down":"icon-calendar",width:"24",height:"24",className:"icon-calendar",secondaryClassName:"icon-claendar-dynamics"})]})}},5338:function(e,a,t){t.r(a),t.d(a,{default:function(){return Y}});var n=t(7762),s=t(5967),i=t(3623),r=t(2791),c={dynamicsChartContainer:"Chart_dynamicsChartContainer__l5JKW",title:"Chart_title__eAN-E",list:"Chart_list__C+uqb",listItem:"Chart_listItem__dTZyR",chartContainer:"Chart_chartContainer__AKMWK",select:"Chart_select__VD3be",statList:"Chart_statList__YMJpy",statListItem:"Chart_statListItem__4USfE",itemTitle:"Chart_itemTitle__1AXCy",itemNum:"Chart_itemNum__1A-8B",errorItem:"Chart_errorItem__BDI6B"},o={chartArea:{bottom:5},maintainAspectRatio:!1,categoryPercentage:.75,barPercentage:.5,indexAxis:"y",borderRadius:6,elements:{bar:{borderWidth:0}},responsive:!0,plugins:{legend:{display:!1,labels:{font:{size:16}}},title:{display:!1}},layout:{padding:{left:40}},scales:{y:{beginAtZero:!0,grid:{display:!1,borderColor:"white",borderWidth:2},border:{display:!1},ticks:{color:"#F3F3F3",padding:0,backdropPadding:0,font:{size:12}},gridLines:{tickMarkLength:10},position:{y:-.75}},x:{grid:{color:"rgba(243, 243, 243, 0.2)",offset:!1,tickLength:13,tickBorderDash:[3,10]},border:{display:!1,dash:[8,10]},ticks:{color:"#F3F3F3"},position:"top"}},labels:{fontColor:"#F3F3F3"}},l={chartArea:{bottom:5},maintainAspectRatio:!1,categoryPercentage:.75,barPercentage:.5,indexAxis:"x",borderRadius:6,elements:{bar:{borderWidth:0}},responsive:!0,plugins:{legend:{display:!1,labels:{font:{size:16}}},title:{display:!1}},layout:{padding:{left:0}},scales:{y:{beginAtZero:!0,grid:{display:!0,offset:!1,color:"rgba(243, 243, 243, 0.2)",tickLength:10,tickBorderDash:[3,10]},border:{display:!0,dash:[8,10]},ticks:{color:"#F3F3F3",backdropPadding:0,font:{size:12,family:"Lato",weight:400}},gridLines:{tickMarkLength:10}},x:{grid:{display:!1,color:"rgba(243, 243, 243, 0.2)",offset:!1,tickLength:10},border:{display:!1,dash:[8,10]},ticks:{color:"#F3F3F3",font:{size:12,family:"Lato",weight:400}}}}},d=t(9434),m=t(1601),u=t(6916),h=function(e){return e.dynamics.statByYear},f=function(e){return e.dynamics.statByMonth},_=function(e){return e.dynamics.accumulatedProc},g=function(e){return e.dynamics.accumulatedUah},p=function(e){return e.dynamics.flatImage},x=function(e){return e.dynamics.month},j=function(e){return e.dynamics.square\u041ceters},y=function(e){return e.dynamics.year},v=(0,u.P1)([g,function(e){return e.ownPlan.plan.footage},function(e){return e.ownPlan.plan.cost}],(function(e,a,t){var n=t/a,s=n>e?n-e:n-e%n;return 0===s?n:s})),N=t(4289),b=t(2146),C=t(4805),I=t(184);s.kL.register(s.qi,s.u,s.De,s.uw,s.f$,s.ZL,s.Dx);var F=function(){var e=(0,C.useMediaQuery)({query:"(min-width: 768px)"}),a=(0,d.I0)(),t=(0,r.useRef)(null),s=(0,d.v9)(N._),u=(0,d.v9)(h),_=(0,d.v9)(f),g=_.income,p=_.expense,x=_.accumulated,j=_.plan,y=_.planInProcent,v=(0,r.useMemo)((function(){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),[]);(0,r.useEffect)((function(){s&&a((0,m.a8)())}),[a,s]);var F=(0,r.useMemo)((function(){return{labels:v,datasets:[{data:v.map((function(e,a){var t,s=(0,n.Z)(u);try{for(s.s();!(t=s.n()).done;){var i=t.value,r=i.income-i.expense;if(a+1===+i.month)return r>=0?r:1}}catch(c){s.e(c)}finally{s.f()}return 0})),backgroundColor:"#6359E9"},{data:v.map((function(e,a){var t,s=(0,n.Z)(u);try{for(s.s();!(t=s.n()).done;){var i=t.value;if(a+1===+i.month)return i.expense}}catch(r){s.e(r)}finally{s.f()}return 0})),backgroundColor:"#3A6AF5"},{data:v.map((function(e,a){var t,s=(0,n.Z)(u);try{for(s.s();!(t=s.n()).done;){var i=t.value;if(a+1===+i.month)return i.income}}catch(r){s.e(r)}finally{s.f()}return 0})),backgroundColor:"#F3F3F3"}]}}),[v,u]);return(0,I.jsxs)("div",{className:c.dynamicsChartContainer,children:[(0,I.jsx)("h1",{className:c.title,children:"Dynamics of expenses and savings"}),(0,I.jsxs)("ul",{className:c.list,children:[(0,I.jsx)("li",{className:c.listItem,children:"Accumulated"}),(0,I.jsx)("li",{className:c.listItem,children:"Expenses"}),(0,I.jsx)("li",{className:c.listItem,children:"Income"})]}),e?(0,I.jsx)("div",{className:c.chartContainer,children:(0,I.jsx)(i.$Q,{ref:t,options:l,data:F,height:"100%",width:"100%"})}):(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("div",{className:c.chartContainer,children:(0,I.jsx)(i.$Q,{ref:t,options:o,data:F,height:"100%",width:"100%"})})}),(0,I.jsxs)("div",{className:c.statContainer,children:[(0,I.jsx)(b.Z,{}),"no transactions for this period"===_?(0,I.jsx)("p",{className:c.errorItem,children:"No information for this period"}):(0,I.jsxs)("ul",{className:c.statList,children:[(0,I.jsxs)("li",{className:c.statListItem,children:[(0,I.jsx)("p",{className:c.itemTitle,children:"Income, \u20b4"}),(0,I.jsx)("p",{className:c.itemNum,children:g||0})]}),(0,I.jsxs)("li",{className:c.statListItem,children:[(0,I.jsx)("p",{className:c.itemTitle,children:"Expenses, \u20b4"}),(0,I.jsx)("p",{className:c.itemNum,children:p||0})]}),(0,I.jsxs)("li",{className:c.statListItem,children:[(0,I.jsx)("p",{className:c.itemTitle,children:"Accumulated, \u20b4"}),(0,I.jsx)("p",{className:c.itemNum,children:x||0})]}),(0,I.jsxs)("li",{className:c.statListItem,children:[(0,I.jsx)("p",{className:c.itemTitle,children:"Plan, \u20b4"}),(0,I.jsx)("p",{className:c.itemNum,children:j||0})]}),(0,I.jsxs)("li",{className:c.statListItem,children:[(0,I.jsx)("p",{className:c.itemTitle,children:"Plan, %"}),(0,I.jsx)("p",{className:c.itemNum,children:y?parseInt(y):0})]})]})]})]})},k=t(1413),w=t(9439),A={infoContainer:"Info_infoContainer__Lmpcd",title:"Info_title__euRFB",list:"Info_list__TyBOA",item:"Info_item__nT5Sh",text:"Info_text__52E5-",num:"Info_num__bHqjF",barTitle:"Info_barTitle__zB1yE",bar:"Info_bar__3VkbB",barFill:"Info_barFill__SQkUC",imageElement:"Info_imageElement__izvFD",imageContainer:"Info_imageContainer__Gx+9j",image:"Info_image__yi7O7",imageBtn:"Info_imageBtn__JnSA4",accRemain:"Info_accRemain__a01X5",accTitleContainer:"Info_accTitleContainer__5lwC9",accTitle:"Info_accTitle__pFO9i",accSpan:"Info_accSpan__RdcDJ",accNum:"Info_accNum__qbWlE",svgContainer:"Info_svgContainer__WtBiO"},T=t(7831),L=t(2755);function M(e){var a,t=(0,r.useRef)(null),n=(e.trigger,e.setTrigger);return a=t,(0,r.useEffect)((function(){function e(e){a.current&&!a.current.contains(e.target)&&n(!0)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[a]),(0,I.jsx)("div",{ref:t,children:e.children})}var D=t(3145),Z="ModalHooray_overlay__Pjm6L",P="ModalHooray_modalWrap__6L4y9",E="ModalHooray_title__fVu1m",W="ModalHooray_text__iQO3v",R="ModalHooray_bcgLeft__TzbkH",S="ModalHooray_bcgRight__4-6Fq",B="ModalHooray_btnClose__5IVAL",H=t(4164),J=document.querySelector("#modal-root"),q=function(e){var a=e.closeModal;return(0,H.createPortal)((0,I.jsx)("div",{className:Z,children:(0,I.jsxs)("div",{className:P,children:[(0,I.jsx)("button",{className:B,onClick:function(){return a()},children:(0,I.jsx)(D.Z,{name:"icon-close",width:24,height:24,fill:"white"})}),(0,I.jsx)("h3",{className:E,children:"Hooray! Congratulations!"}),(0,I.jsxs)("p",{className:W,children:["You did it! ",(0,I.jsx)("br",{}),"We are so proud of you and wish you all the best as you embark on this exciting new chapter of your life."]}),(0,I.jsx)("div",{className:R}),(0,I.jsx)("div",{className:S})]})}),J)},z={width:"87%",height:"87%",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:10,borderColor:"rgba(255, 255, 255, 0.2)",borderStyle:"dashed",backgroundColor:"rgba(110, 110, 110, 0.2)",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},O=function(e){var a=(0,d.v9)(_),t=(0,d.v9)(N._),n=(0,d.v9)(g),s=(0,d.v9)(p),i=(0,d.v9)(x),c=(0,d.v9)(j),o=(0,d.v9)(y),l=(0,d.v9)(L.QJ),u=(0,d.v9)(L.sA),h=(0,d.v9)(v),f=(0,r.useState)(!1),b=(0,w.Z)(f,2),C=b[0],F=b[1],Z=(0,T.uI)({accept:{"image/jpeg":[],"image/png":[]}}),P=Z.acceptedFiles,E=Z.getRootProps,W=Z.getInputProps,R=(0,r.useState)(!0),S=(0,w.Z)(R,2),B=S[0],H=S[1],J=(0,d.I0)(),O=P;(0,r.useEffect)((function(){if(O.length>0){var e=new FormData;e.append("image",P[0]),J((0,m.mh)(e))}}),[P,O.length,J,B]),(0,r.useEffect)((function(){u&&t&&Number(c)>=l.footage&&F(!0)}),[l.footage,c,t,u]);var Q=(0,r.useMemo)((function(){return(0,k.Z)({},z)}),[]);function Y(e,a){return e>a?a:e}return(0,I.jsxs)(I.Fragment,{children:[C&&(0,I.jsx)(q,{closeModal:function(){F(!1)}}),(0,I.jsxs)("div",{className:A.infoContainer,children:[(0,I.jsxs)("div",{className:A.accumulated,children:[(0,I.jsxs)("p",{className:A.title,children:["After ",n>=l.cost?0:o," "," ","years ",n>=l.cost?0:i," month"]}),(0,I.jsxs)("ul",{className:A.list,children:[(0,I.jsxs)("li",{className:A.item,children:[(0,I.jsx)("p",{className:A.text,children:"Accumulated, %:"}),(0,I.jsxs)("p",{className:A.num,children:[Y(a,100),"%"]})]}),(0,I.jsxs)("li",{className:A.item,children:[(0,I.jsx)("p",{className:A.text,children:"Accumulated, UAH:"}),(0,I.jsxs)("p",{className:A.num,children:[Y(n,l.cost)," \u20b4"]})]}),(0,I.jsxs)("li",{className:A.item,children:[(0,I.jsx)("p",{className:A.text,children:"And This:"}),(0,I.jsxs)("p",{className:A.num,children:[c>=l.footage?l.footage:c," ","sq.m"]})]})]}),(0,I.jsxs)("p",{className:A.barTitle,children:[Y(c,l.footage)," out of ",l.footage," ","sq.m accumulated"]}),(0,I.jsx)("div",{className:A.bar,children:(0,I.jsx)("div",{className:A.barFill,style:{width:function(){var e=c/l.footage*100;return"".concat(e>=100?100:e,"%")}()}})})]}),(0,I.jsxs)("div",{className:A.imageElement,children:[(0,I.jsx)(M,{trigger:B,setTrigger:H,children:B?(0,I.jsx)("div",{className:A.imageContainer,onClick:function(){s||H(!1)},children:s?(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("img",{className:A.image,src:s,alt:"flat plan"})}):(0,I.jsx)(D.Z,{name:"icon-photo-camera",width:100,height:100})}):(0,I.jsx)("div",{className:A.imageContainer,children:(0,I.jsxs)("div",(0,k.Z)((0,k.Z)({},E({style:Q})),{},{children:[(0,I.jsx)("input",(0,k.Z)({},W())),(0,I.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"}),(0,I.jsx)("em",{children:"(Only *.jpeg and *.png images will be accepted)"})]}))})}),(0,I.jsx)("p",{className:A.imageBtn,style:{visibility:B?"visible":"hidden"},onClick:function(){return H(!1)},children:"Change image"})]})]}),(0,I.jsxs)("div",{className:A.accRemain,children:[(0,I.jsxs)("div",{className:A.accTitleContainer,children:[(0,I.jsxs)("p",{className:A.accTitle,children:["To add more ",(0,I.jsx)("span",{className:A.accSpan,children:"1 sq.m"})," for planning, it remains to accumulate"]}),(0,I.jsxs)("p",{className:A.accNum,children:[c>=l.footage?0:Math.round(h)," ","\u20b4"]})]}),(0,I.jsx)("div",{className:A.svgContainer})]})]})},Q="DynamicsPage_section__gfswJ",Y=function(){return(0,I.jsxs)("section",{className:Q,children:[(0,I.jsx)(F,{}),(0,I.jsx)(O,{})]})}}}]);
//# sourceMappingURL=338.6e0f01a9.chunk.js.map
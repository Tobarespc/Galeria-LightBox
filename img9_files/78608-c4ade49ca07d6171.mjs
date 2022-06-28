(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[78608,36556],{126892:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var i=n(667294),r=n(53930),o=n(883119);const s={};function l(e){if(null!=e)return s[e]&&s[e].screenWidth===window.innerWidth||(s[e]={screenWidth:window.innerWidth,cache:o.Rk.createMeasurementStore()}),s[e].cache}var d=n(559729),a=n(945464),c=n(324351),u=n(443109),p=n(51805),m=n(785893);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class y extends i.Component{constructor(...e){super(...e),h(this,"masonryRef",(0,i.createRef)()),h(this,"renderItem",(e=>{const{comp:t}=this.props,{gutterWidth:n,paddingBottom:i}=this.getGutters();return(0,m.jsx)("div",{style:{paddingBottom:i,paddingLeft:n/2,paddingRight:n/2},children:(0,m.jsx)(t,{...e})})}))}componentDidUpdate(e){const{widthOffset:t}=this.props;t!==e.widthOffset&&this.masonryRef.current&&this.masonryRef.current.handleResize()}getGutters(){const{gutterWidth:e,paddingStyle:t}=this.props,n="simplified"===t;return{gutterWidth:n?p.oX:e,paddingBottom:n?16:6}}render(){const{columnWidth:e,flexible:t,items:n,layout:i,loadItems:r,masonryRef:s,measurementStore:l,scrollContainer:d,serverRender:h,virtualize:y,isGridCentered:f,minCols:x}=this.props,{gutterWidth:g}=this.getGutters(),v=(0,m.jsx)(o.Rk,{columnWidth:e+g,gutterWidth:0,comp:this.renderItem,minCols:x,ref:e=>{this.masonryRef.current=e,s&&(s.current=e)},items:n,flexible:t,layout:i||"basic",loadItems:r,measurementStore:l,scrollContainer:d,virtualize:y});let C;return f&&(C="gridCentered"),(0,m.jsxs)("div",{className:C,children:[h&&(0,m.jsx)(u.Z,{unsafeCSS:t?(0,c.Z)((e||p.xf)+g,n.length||p.g5,x||p.yc):(0,a.Z)((e||p.xf)+g,n.length||p.g5,x||p.yc)}),(0,m.jsx)("div",{children:v})]})}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}h(y,"defaultProps",{gutterWidth:14,isGridCentered:!0,minCols:p.yc,paddingStyle:"simplified"});const x="undefined"!=typeof window?()=>window:void 0;class g extends i.Component{constructor(...e){super(...e),f(this,"renderItem",(e=>{const{comp:t}=this.props;return(0,m.jsx)(r.Z,{name:"MasonryPerfTimingItem",children:(0,m.jsx)(t,{...e})})})),f(this,"loadItems",(()=>{const{isFetching:e,loadItems:t}=this.props;e||t()}))}render(){const{cacheKey:e,columnWidth:t,flexible:n,gutterWidth:i,isGridCentered:r,items:o,layout:s,masonryRef:d,minCols:a,paddingStyle:c,scrollContainer:u,serverRender:p,virtualize:h,widthOffset:f}=this.props;return(0,m.jsx)(y,{columnWidth:t,comp:this.renderItem,flexible:n,gutterWidth:i,isGridCentered:r,items:o,layout:s,loadItems:this.loadItems,masonryRef:d,measurementStore:l(e),minCols:a,paddingStyle:c,scrollContainer:u||x,serverRender:p,virtualize:h,widthOffset:f})}}function v({cacheKey:e,columnWidth:t,comp:n,flexible:i,gutterWidth:r,isAtEnd:o,isFetching:s,isGridCentered:l=!0,isLoaded:a,items:c,pinData:u,layout:p,loadItems:h,masonryRef:y,minCols:f,paddingStyle:v,scrollContainer:C,serverRender:T=!0,virtualize:w,widthOffset:I,includeBackgroundImages:_,includeVideos:b}){return(0,m.jsx)(d.Z,{isAtEndOfFeed:o,pinData:u,itemCount:c.length,includeBackgroundImages:_,includeVideos:b,children:(0,m.jsx)(g,{cacheKey:e,columnWidth:t,comp:n,flexible:i,gutterWidth:r,isFetching:s,isGridCentered:l,items:c,layout:p,loadItems:h,masonryRef:y,minCols:f,paddingStyle:v,scrollContainer:C||x,serverRender:T,virtualize:w,widthOffset:I})})}},945464:(e,t,n)=>{function i(e=236,t=16,n=2){let i="\n.gridCentered {\n  margin-left: auto;\n  margin-right: auto;\n}\n.gridCentered .static,\n.gridCentered .Masonry-Premount .Collection-Item {\n  position: absolute;\n  visibility: hidden;\n}\n.gridCentered .Masonry-Premount,\n.gridCentered .Masonry-Premount .AutoSizer,\n.gridCentered .Masonry-Premount .Collection {\n  width: auto !important;\n}\n";for(let r=n;r<t+1;r+=1){i+=`\n@media (min-width: ${r===n?0:r*e}px) and (max-width: ${(r+1)*e-1}px) {\n  .gridCentered {\n    width: ${r*e}px;\n  }\n  .gridCentered .Masonry-Premount .Collection-Item:nth-child(-n+${r}),\n  .gridCentered .static:nth-child(-n+${r}) {\n    position: static !important;\n    visibility: visible !important;\n    float: left;\n    display: block;\n  }\n}\n`}return i}n.d(t,{Z:()=>i})},324351:(e,t,n)=>{function i(e=300,t=16,n=2){let i=`\n.gridCentered {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ${t*e}\n}\n\n.gridCentered .static,\n.gridCentered .Masonry-Premount .Collection-Item {\n  position: absolute !important;\n  visibility: hidden !important;\n}\n.gridCentered .Masonry-Premount,\n.gridCentered .Masonry-Premount .AutoSizer,\n.gridCentered .Masonry-Premount .Collection {\n  width: auto !important;\n}\n\n@media (min-width: ${t*e}px) {\n  .gridCentered .Masonry-Premount .Collection-Item:nth-child(-n+${t}),\n  .gridCentered .static:nth-child(-n+${t}) {\n    position: static !important;\n    visibility: visible !important;\n    float: left;\n    display: block;\n  }\n\n  .gridCentered .Masonry-Premount .Collection-Item,\n  .gridCentered .static {\n    width: ${e}px !important;\n  }\n}\n`;for(let r=n;r<t+1;r+=1){i+=`\n@media (min-width: ${r===n?0:(r-1)*e}px) and (max-width: ${r*e-1}px) {\n  .gridCentered .Masonry-Premount .Collection-Item:nth-child(-n+${r}),\n  .gridCentered .static:nth-child(-n+${r}) {\n    position: static !important;\n    visibility: visible !important;\n    float: left;\n    display: block;\n  }\n\n  .gridCentered .Masonry-Premount .Collection-Item,\n  .gridCentered .static {\n    width: calc(100% / ${r}) !important;\n  }\n}\n`}return i}n.d(t,{Z:()=>i})},394881:(e,t,n)=>{n.d(t,{W:()=>s,Z:()=>o});var i=n(883119),r=n(785893);function o({data:e}){return(0,r.jsx)(i.xu,{overflow:"auto",dangerouslySetInlineStyle:{__style:{border:"2px solid red"}},children:(0,r.jsx)("pre",{children:JSON.stringify(e,null,2).replace(/\\n/g,"\n")})})}const s=e=>(0,r.jsx)(i.xu,{width:236,dangerouslySetInlineStyle:{__style:{marginTop:10}},children:(0,r.jsx)(o,{...e})})},475389:(e,t,n)=>{n.d(t,{Je:()=>i,dA:()=>o,iO:()=>s,jh:()=>l,s_:()=>r});const i=350,r=134,o=16,s=2,l=236},79421:(e,t,n)=>{n.d(t,{Z:()=>s,u:()=>o});var i=n(883119),r=n(785893);const o=369;function s({index:e,item:t}){const{action:n,aux_fields:s,cover_images:l,dominant_colors:d,title:a}=t;if(!a||!l||!n)return null;const c=l.length<=0?[{}]:l.slice(0,2);return(0,r.jsxs)(i.xu,{alignItems:"center","data-test-id":"style-bubble",display:"flex",height:258,justifyContent:"center",overflow:"hidden",position:"relative",rounding:4,width:o,children:[(0,r.jsx)(i.kC,{children:c.map(((t,n)=>{var s,l,a;return(0,r.jsx)(i.zd,{height:258,wash:!0,width:o/c.length,children:(0,r.jsx)(i.Ee,{alt:"",color:(d||[])[n],fit:"cover",naturalHeight:1,naturalWidth:1,role:"presentation",src:(null===(s=t["474x"])||void 0===s?void 0:s.url)||(null===(l=t["736x"])||void 0===l?void 0:l.url)||(null===(a=t["236x"])||void 0===a?void 0:a.url)||""})},`styleCarousel_bubble${e}_pin${n}`)}))}),(0,r.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:null==s?void 0:s.button_background_color}},paddingX:4,paddingY:3,position:"absolute",rounding:"pill",children:(0,r.jsx)(i.xv,{align:"center",weight:"bold",children:(0,r.jsx)("span",{style:{color:null==s?void 0:s.button_text_color,margin:"0"},children:a.format})})})]})}},976252:(e,t,n)=>{n.d(t,{Q:()=>l,Z:()=>d});var i=n(667294),r=n(597569),o=n(952733),s=n(99417);function l(e,t){const{setViewContextData:n}=(0,s.sV)(),{requestIdentifier:l}=(0,o.B)(),d=(0,r.Z)();(0,i.useEffect)((()=>{var t;e&&(n({viewType:null!==(t=e.view_type)&&void 0!==t?t:1,viewParameter:e.view_parameter,viewData:e.view_data,component:e.component,element:e.element,objectIdStr:e.object_id_str,auxData:e.aux_data,clientTrackingParams:e.clientTrackingParams}),d({...e,event_type:13,request_identifier:l}))}),[t])}function d(e){const{children:t,log:n}=e;return l(n),t||null}},99417:(e,t,n)=>{n.d(t,{BE:()=>a,Ih:()=>c,SU:()=>u,sV:()=>l});var i=n(667294),r=n(487889),o=n(785893);const{Provider:s,useHook:l}=(0,r.Z)("View");let d;function a(){return d}function c({children:e,initialState:t={}}){const[n,r]=(0,i.useState)(t),l=(0,i.useMemo)((()=>({clearViewContextData:()=>{d={},r({})},setViewContextData:e=>{d={...d,...e},r((t=>({...t,...e})))}})),[]);return(0,o.jsx)(i.Fragment,{children:(0,o.jsx)(s,{value:{viewContextData:n,...l},children:e})})}function u(){const{viewContextData:e}=l();return e}},491289:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(667294),r=n(106736),o=n(189674),s=n(883119),l=n(785893);class d extends i.Component{renderPulsar(){const{anchor:e,handleComplete:t,handlePulsarCompleteOnHover:n,zIndex:i}=this.props;return(0,l.jsx)(o.Z,{anchor:e,onTouch:t,onMouseEnter:n,zIndex:i})}renderFlyout(){const{anchor:e,tooltip:t,handleDismiss:n,handleComplete:i}=this.props;if(!t)return null;const{cancelButtonText:r,confirmButtonText:o,mainText:d,idealDirection:a="down"}=t,c=r&&n&&o&&i;return(0,l.jsx)(s.J2,{anchor:e,color:"blue",idealDirection:a,onDismiss:n,shouldFocus:!1,showCaret:!0,size:"flexible",children:(0,l.jsxs)(s.xu,{maxWidth:284,padding:3,width:"max-content",children:[(0,l.jsx)(s.xv,{color:"inverse",overflow:"breakWord",weight:"bold",children:d}),c?(0,l.jsxs)(s.xu,{marginTop:2,display:"flex",alignItems:"center",children:[(0,l.jsx)(s.xu,{column:6,marginEnd:1,children:(0,l.jsx)(s.zx,{fullWidth:!0,color:"transparentWhiteText",onClick:e=>n(e),size:"md",text:String(r)})}),(0,l.jsx)(s.xu,{column:6,children:(0,l.jsx)(s.zx,{fullWidth:!0,color:"white",size:"md",text:String(o),onClick:i})})]}):null]})})}render(){const{anchor:e,pulserOnly:t}=this.props;return e?t?this.renderPulsar():this.renderFlyout():null}}var a=n(454132),c=n(23686),u=n(272792);function p({anchor:e,anchorElementRef:t,children:n,containerBoxConfig:o,experience:p,isHidden:m,onCompleteClick:h,zIndex:y}){var f;const{completeExperience:x,dismissExperience:g,experiences:v,viewExperience:C}=(0,u.M)(),T=(({anchor:e,anchorExperiences:t,passedExperience:n})=>n||(t?t[e]:null))({anchor:e,anchorExperiences:Object.values(v).reduce(((e,t)=>(8===t.type&&(e[(0,c.A0)(t)]=t),e)),{}),passedExperience:p}),w=(null==T||null===(f=T.display_data)||void 0===f?void 0:f.delay)||0,[I,_]=(0,i.useState)(!!w);if((0,i.useEffect)((()=>{if(w>0&&I){const e=setTimeout((()=>{_(!1)}));return()=>clearTimeout(e)}return()=>{}}),[w,I]),(0,i.useEffect)((()=>{!I&&T&&C(T.placement_id,T.experience_id)}),[I,T]),!T||I||m)return i.Children.only(n);const b=(e=>{const{display_data:t}=e;return t.tooltip&&(t.tooltip={...t.tooltip.options,...t.tooltip},delete t.tooltip.options),(0,r.Z)(a.Z,!0)(t)})(T),E=()=>{var e;null!==(e=T.display_data)&&void 0!==e&&e.complete_on_hover&&x(T.placement_id,T.experience_id)};return(0,l.jsxs)(s.xu,{position:"relative",height:null==o?void 0:o.height,display:null==o?void 0:o.display,children:[(0,l.jsx)(s.iP,{onMouseEnter:E,onTap:()=>{h&&h(),b.skipComplete||x(T.placement_id,T.experience_id)},children:i.Children.only(n)}),(0,l.jsx)(d,{anchor:t||null,handlePulsarCompleteOnHover:E,handleComplete:()=>{t instanceof HTMLElement&&t.click()},handleDismiss:e=>{null!=e&&e.event&&e.event.stopPropagation(),g(T.placement_id,T.experience_id)},pulserOnly:!!b.pulserOnly,tooltip:b.tooltip,tooltipOnly:!!b.tooltipOnly,zIndex:y})]})}},272792:(e,t,n)=>{n.d(t,{F:()=>p,M:()=>u});var i=n(667294),r=n(40142),o=n(708206),s=n(827132),l=n(487889),d=n(474809),a=n(785893);const{Provider:c,useHook:u}=(0,l.Z)("ExperienceContext");function p({children:e}){const[t,n]=(0,i.useReducer)(((e,t)=>{if("MOUNT_PLACEMENT"===t.type)return{...e,[t.payload]:!0};if("UNMOUNT_PLACEMENT"===t.type){const n={...e};return delete n[t.payload],n}return e}),{}),l=(0,r.useDispatch)(),u=(0,r.useSelector)((e=>e.experiences)),p=(0,i.useMemo)((()=>{const e=(0,o.bindActionCreators)({completeExperience:d.CK,dismissExperience:d.Qu,fetchAllExperiences:d.fO,fetchAllExperiencesMulti:s.NW,fetchExperienceForPlacements:d.pz,mountPlacement:d.N,triggerExperimentsForPlacement:d.kd,viewExperience:d.UT},l);return{...e,mountPlacement:(t,...i)=>{e.mountPlacement(t,...i),n({type:"MOUNT_PLACEMENT",payload:t})},unmountPlacement:e=>{n({type:"UNMOUNT_PLACEMENT",payload:e})}}}),[l,n]);return(0,a.jsx)(c,{value:{experiences:u,mountedPlacements:t,...p},children:e})}},265328:(e,t,n)=>{n.d(t,{F:()=>c,Z:()=>a});var i=n(667294),r=n(850770),o=n(909621),s=n(539195),l=n(276679);const d={Article:{impressionType:"articleImpressions",idType:"articleIdStr",eventType:3829},Pin:{impressionType:"pinImpressions",idType:"pinIdStr",eventType:18},Board:{impressionType:"boardImpressions",idType:"boardIdStr",eventType:3700},Interest:{impressionType:"topicImpressions",idType:"topicIdStr",eventType:3703},Search:{impressionType:"searchImpressions",idType:"term",eventType:3803},Story:{impressionType:"storyImpressions",idType:"storyIdStr",eventType:170},ActivationCard:{impressionType:"activationCardImpressions",idType:"experienceIdStr",eventType:8547},User:{impressionType:"userImpressions",idType:"userIdStr",eventType:3704},News:{impressionType:"newsHubData",idType:"newsIdStr",eventType:4110},Guide:{impressionType:"guideImpressions",idType:"term",eventType:7573},TodayArticle:{impressionType:"todayArticleImpressions",idType:"todayArticleIdStr",eventType:8569},Banner:{impressionType:"bannerImpressions",idType:"userIdStr",eventType:9061},Comment:{impressionType:"commentImpressions",idType:"commentIdStr",eventType:9127},OneBar:{impressionType:"oneBarImpressions",idType:"onebarIdStr",eventType:9975}};function a({closeupImpressionType:e,closeupNavigationType:t,componentType:n,contextLogData:a,elementType:c,impressionAuxFields:u,inImpressionExp:p,impressionType:m,impressionsFramework:h,isPaused:y,loggingId:f,objectIdStr:x,slotIndex:g,trackCarousel:v,viewData:C,viewParameter:T,viewType:w}){const{logContextEvent:I}=(0,s.v)(),{pins:_}=(0,l.Wb)(),b=f?_[f]:{},E=(0,r.Z)({pin:b}),j=h||o.Z,S=(0,i.useRef)(null),P=i=>{const r=d[m],o=r.idType,s={endTime:i.endTime,[o]:f,slotIndex:g,time:i.startTime,renderDuration:i.endTime-i.startTime,type:e,...u,forcedExit:"removed"===i.forcedExit?0:void 0},l={component:n,object_id_str:x,view_type:w,view_data:C||{},view_parameter:T};if(v){if(E){var p,h,y;I({event_type:7352,event_data:{pinCarouselSlotImpressions:[{...s,carouselDataId:Number(E.id),carouselSlotId:(null===(p=E.carousel_slots)||void 0===p?void 0:p[null!==(h=E.index)&&void 0!==h?h:0])&&Number(E.carousel_slots[null!==(y=E.index)&&void 0!==y?y:0].id),slotIndex:E.index}]},...l,aux_data:{...a}})}}else I({event_type:r.eventType,...l,element:c,event_data:{[r.impressionType]:[s]},aux_data:{closeup_navigation_type:t,...a}})},M=(0,i.useCallback)((()=>{try{S.current instanceof HTMLElement&&j.start(S.current).onExitViewport(P).setDebugId(f||"unknown")}catch(e){window.console.error('Can only track impressions for type "HTMLElement"')}}),[S.current]);(0,i.useEffect)((()=>(p&&!j.inExperiment&&j.setExperimentStatus(!0),y||M(),()=>{S.current instanceof HTMLElement&&j.stop(S.current)})),[M]);const k=(0,i.useRef)(y);return(0,i.useEffect)((()=>{k.current&&!y&&M(),k.current=y}),[y,M]),S}const c=({children:e,...t})=>e({impressionTrackerRef:a(t)})},106736:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(968630),r=n.n(i);function o(e,t=!1){return n=>{if(!r()(n))return t&&Array.isArray(n)?n.map(o(e,t)):n;const i={};return Object.keys(n).forEach((s=>{const l=e(n[s],s);r()(n[s])||t&&Array.isArray(n[s])?i[l]=o(e,t)(n[s]):i[l]=n[s]})),i}}function s(e,t=!1){const n=(t,n)=>e(n);return e=>o(n,t)(e)}},559729:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(53330),r=n(667294),o=n(328865),s=n(388492);function l({children:e,isAtEndOfFeed:t,pinData:n,itemCount:l,includeBackgroundImages:d=!1,includeVideos:a=!1}){return(0,i.Z)({pinData:n,isAtEndOfFeed:t,includeBackgroundImages:d,includeVideos:a}),function(e){const t=(0,o.EV)(),n=(0,r.useRef)(null);(0,r.useEffect)((()=>{e!==n.current&&(n.current=e,t&&(0,s.ZP)(s.at))}),[!!t,e])}(l),e}},932753:(e,t,n)=>{n.d(t,{Z:()=>d,n:()=>s});var i=n(124910),r=n(883119),o=n(785893);function s({items:e,itemWidth:t,itemGap:n,numRows:r=1,shouldUseLastItemForAction:o}){const[s,l]=(0,i.Z)(),d=Math.floor((s+n)/(t+n))*r||r,a=e.slice(0,d),c=o?((e,t,n)=>e.length<n?e.length>=4?e.slice(e.length-4,e.length):[]:e.length-n>4?e.slice(e.length-4,e.length):e.slice(t.length,e.length))(e,a,d):[];let u;return o&&(u=d>e.length?e[Math.floor(e.length/2)]:a.pop()),{containerRef:l,itemsToRender:a,actionItem:u,lastFourItems:c}}const l={center:{outer:"center",inner:"center"},left:{outer:"start",inner:"start"},right:{outer:"end",inner:"end"}};function d({children:e,itemGap:t,containerRef:n,numRows:i=1,rowAlignment:s="center"}){const d=l[s];return(0,o.jsx)(r.xu,{ref:n,width:"100%",children:(0,o.jsx)(r.kC,{alignItems:"center",justifyContent:d.outer,children:(0,o.jsx)(r.kC,{justifyContent:d.inner,gap:Math.floor(t/4),wrap:i>1,children:e})})})}},124910:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(667294);function r(){const[e,t]=(0,i.useState)(0),n=(0,i.useRef)(null),r=(0,i.useCallback)((()=>{n.current&&t(n.current.clientWidth)}),[n]);return(0,i.useEffect)((()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)})),[r]),(0,i.useEffect)(r),[e,n]}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/78608-c4ade49ca07d6171.mjs.map
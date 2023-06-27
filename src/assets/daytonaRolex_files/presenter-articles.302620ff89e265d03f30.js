(()=>{var e,t={92788:(e,t,o)=>{const i=o(45697),a=o(67294),{useIntl:n}=o(36319),{useInView:r}=o(4225),{connector:s}=o(92078),l=o(98288),d=o(48655),c=o(73749).Z,{trackComponent:u}=o(40199),{googleAnalytics:h}=o(28601),{SeriesRecircAsset:g,SeriesRecircContainer:m,SeriesRecircContent:p,SeriesRecircDek:b,SeriesPromoHed:k,SeriesRecircReadMoreCta:f,SeriesRecircReadMoreCtaMobile:C,SeriesRecircTextContainer:y}=o(78268),v="Read more",S={[v]:c.readMoreDefault,"Read next":c.readNext},w=({ContentWrapper:e,readMoreCTA:t,seriesData:o})=>{const{formatMessage:i}=n();a.useEffect((()=>{u("SeriesRecirc")}),[]);const s=(({links:e})=>{let t;for(let o=0;o<e.length;o++){const{isCurrent:i}=e[o];if(i){for(let i=o+1;i<e.length;i++){const{isExternal:o,isPublished:a}=e[i]||{};if(a&&!o){t=e[i];break}}break}}return t})({links:(null==o?void 0:o.links)||[]}),d=e=>{h.emitGoogleTrackingEvent("seriesrecirc",{title:e})},[c,v]=r();if(a.useEffect((()=>{v&&h.emitUniqueGoogleTrackingEvent("series-inview",{title:null==s?void 0:s.promoHed})}),[v]),!o)return null;if(!s)return null;const{dek:w="",hed:B="",image:I=null,promoHed:T="",url:x=""}=s,L=I&&(I.segmentedSources||I.sources)&&Object.assign({},I);return a.createElement(e,null,s&&a.createElement(m,{ref:c},a.createElement(p,null,a.createElement(C,null,i(S[t])),a.createElement(g,null,L&&a.createElement("a",{href:x,onClick:()=>d(T||B)},a.createElement(l,Object.assign({},L,{isLazy:!0})))),a.createElement(y,null,a.createElement(f,null,i(S[t])),(B||T)&&a.createElement(k,null,a.createElement("a",{href:x,onClick:()=>d(T||B)},a.createElement("span",{dangerouslySetInnerHTML:{__html:T||B}}))),w&&a.createElement(b,null,a.createElement("span",{dangerouslySetInnerHTML:{__html:w}}))))))};w.propTypes={ContentWrapper:i.elementType,readMoreCTA:i.string,seriesData:i.shape({hed:i.string,dek:i.string,image:i.object,links:i.arrayOf(i.shape({hed:i.string,dek:i.string,image:i.object,isCurrent:i.bool,isExternal:i.bool,isPublished:i.bool,promoDek:i.string,promoHed:i.string,url:i.string}))})},w.defaultProps={ContentWrapper:d.NarrowContentWithWideAdRail,readMoreCTA:v,seriesData:null},w.displayName="SeriesRecirc",e.exports=s(w,{keysToPluck:["seriesData"]})},1564:(e,t,o)=>{const{asConfiguredComponent:i}=o(36380),a=o(92788);e.exports=i(a,"SeriesRecirc")},78268:(e,t,o)=>{const i=o(51117).default,{BaseText:a}=o(74327),{calculateSpacing:n,getColorToken:r}=o(79720),{BREAKPOINTS:s}=o(85326),l=i.div.withConfig({displayName:"SeriesRecircAsset"})`
  grid-column: 1/5;

  @media (max-width: ${s.md}) {
    grid-column: 1/-1;
  }
`,d=i.div.withConfig({displayName:"SeriesRecircContainer"})`
  margin-top: ${n(4)};
  margin-bottom: ${n(5)};
  border-top: 2px solid
    ${({theme:e})=>r(e,"colors.discovery.body.white.heading")};
  padding-top: ${n(2)};
`,c=i.figure.withConfig({displayName:"SeriesRecircContent"})`
  margin-right: 0;
  margin-left: 0;

  @media (min-width: ${s.md}) {
    display: grid;
    grid-column-gap: ${n(3)};
    grid-template-columns: repeat(10, 1fr);
  }

  @media (max-width: ${s.md}) {
    display: block;
  }
`,u=i(a).withConfig({displayName:"SeriesRecircDek"})`
  @media (min-width: ${s.md}) {
    grid-column: 1/-1;
  }
`;u.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.description-embed"},u.displayName="SeriesRecircDek";const h=i(a).withConfig({displayName:"SeriesPromoHed"})`
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: ${s.md}) {
    grid-column: 1/-1;
  }
`;h.defaultProps={as:"h2",bottomSpacing:.625,topSpacing:1,typeIdentity:"typography.definitions.discovery.subhed-section-tertiary"};const g=i(a).withConfig({displayName:"SeriesRecircReadMoreCta"})`
  @media (max-width: ${s.md}) {
    display: none;
  }
`;g.defaultProps={typeIdentity:"typography.definitions.discovery.subhed-section-primary"};const m=i(g).withConfig({displayName:"SeriesRecircReadMoreCtaMobile"})`
  display: none;

  @media (max-width: ${s.md}) {
    display: block;
    grid-column: 1/-1;
    margin-bottom: 1em;
  }
`,p=i.div.withConfig({displayName:"SeriesRecircTextContainer"})`
  @media (min-width: ${s.md}) {
    grid-column: 5/-1;
  }
`;e.exports={SeriesRecircAsset:l,SeriesRecircContainer:d,SeriesRecircContent:c,SeriesRecircDek:u,SeriesPromoHed:h,SeriesRecircReadMoreCta:g,SeriesRecircReadMoreCtaMobile:m,SeriesRecircTextContainer:p}},73749:(e,t,o)=>{const i=o(36319);t.Z=(0,i.defineMessages)({readMoreDefault:{id:"ReadMore.SeriesRecirc",defaultMessage:"Read more",description:"SeriesRecirc component Read more text"},readNext:{id:"ReadNext.SeriesRecirc",defaultMessage:"Read next",description:"SeriesRecirc component Read next text"}})},94328:(e,t,o)=>{const i=o(45697),a=o(67294),{asConfiguredComponent:n}=o(36380),{googleAnalytics:r}=o(28601),{trackComponent:s}=o(40199),{ChannelCloudContainer:l,ChannelCloudContainerWrapper:d,ChannelCloudHeaderContainer:c,ChannelCloudHeaderLink:u,ChannelCloudHeaderImage:h,ChannelCloudSubChannelContainer:g,ChannelCloudSubChannelLink:m,ChannelCloudSubChannelLinkText:p,ChannelCloudSubChannelText:b}=o(9114),k=({channels:e,headerLogo:t,headerLink:o,sectionHeader:i})=>(a.useEffect((()=>{s("ChannelCloud")}),[]),a.createElement(d,null,i&&a.createElement(c,null,t&&a.createElement(h,{src:t,alt:"logo"}),a.createElement(u,{href:o,hasLogo:Boolean(t),dangerouslySetInnerHTML:{__html:i}})),e&&a.createElement(l,null,e.map((e=>a.createElement(g,{key:e.id},a.createElement(b,{dangerouslySetInnerHTML:{__html:e.text}}),e.sub.map((e=>a.createElement(m,{key:e.id,href:e.url,onClick:()=>r.emitGoogleTrackingEvent("channelCloud",e)},a.createElement(p,{dangerouslySetInnerHTML:{__html:e.text}}))))))))));k.propTypes={channels:i.arrayOf(i.shape({id:i.string,text:i.string,originalText:i.string,sub:i.arrayOf(i.shape({id:i.string,text:i.string,url:i.string}))})).isRequired,headerLink:i.string,headerLogo:i.string,sectionHeader:i.string.isRequired},k.displayName="ChannelCloud",e.exports=n(k,"ChannelCloud")},9114:(e,t,o)=>{const i=o(51117).default,{BaseText:a,BaseLink:n}=o(74327),{calculateSpacing:r,getColorStyles:s}=o(79720),l="\n  display: flex;\n  align-items: center;\n",d=i.div.withConfig({displayName:"ChannelCloudContainerWrapper"})``,c=i.div.withConfig({displayName:"ChannelCloudHeaderContainer"})`
  ${l};

  border-width: 0 0 ${r(.25)};
  border-style: solid;
  padding: ${r(1)} ${r(3)} ${r(2)}
    0;

  ${({theme:e})=>s(e,"border-color","colors.interactive.base.black")};
`,u=i.img.withConfig({displayName:"ChannelCloudHeaderImage"})`
  width: 25px;
  height: 30px;
`,h=i(n).withConfig({displayName:"ChannelCloudHeaderLink"})`
  position: relative;
  top: ${r(.3)};
  padding-left: ${({hasLogo:e})=>e?r(1.3):0};
`;h.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.discovery.hed-bulletin-secondary"};const g=i.div.withConfig({displayName:"ChannelCloudContainer"})`
  display: flex;
  flex-wrap: wrap;
  padding: ${r(2.4)} ${r(6)}
    ${r(1)} 0;
`,m=i.div.withConfig({displayName:"ChannelCloudSubChannelContainer"})`
  ${l}
  flex-wrap: wrap;
  margin-bottom: ${r(2)};
  padding-right: ${r(2)};
`,p=i(a).withConfig({displayName:"ChannelCloudSubChannelText"})`
  padding-right: ${r(1)};

  &::after {
    content: ':';
  }
`;p.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.globalEditorial.context-primary"};const b=i(n).withConfig({displayName:"ChannelCloudSubChannelLink"})`
  ${l}
  padding-right: ${r(1)};

  svg {
    ${({theme:e})=>s(e,"fill","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    top: 2px;
    right: 2px;
    transform: rotate(-45deg);
    width: 12px;
    height: 12px;
    vertical-align: bottom;
  }

  &::after {
    ${({theme:e})=>s(e,"color","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    right: ${({hasIcon:e})=>e?r(.4):0};
    line-height: 0;
    content: ',';
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
`,k=i(a).withConfig({displayName:"ChannelCloudSubChannelLinkText"})`
  line-height: 1.7em;

  &:hover {
    ${({theme:e})=>s(e,"color","colors.consumption.body.standard.link-hover")};
    text-decoration: underline;
    ${({theme:e})=>s(e,"text-decoration-color","colors.consumption.body.standard.link-hover")};
  }
`;k.defaultProps={colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.globalEditorial.context-primary"},e.exports={ChannelCloudContainer:g,ChannelCloudContainerWrapper:d,ChannelCloudHeaderContainer:c,ChannelCloudHeaderLink:h,ChannelCloudHeaderImage:u,ChannelCloudSubChannelContainer:m,ChannelCloudSubChannelLink:b,ChannelCloudSubChannelLinkText:k,ChannelCloudSubChannelText:p}},64220:(e,t,o)=>{e.exports=o(19904)},19904:(e,t,o)=>{const i=o(67294),{trackComponent:a}=o(40199);class n extends i.PureComponent{constructor(){super(...arguments),this.writeResourceHintLink=e=>{const{as:t,hint:o,href:i}=e,a=document.createElement("link");a.as=t,a.href=i,a.rel=o,document.head.appendChild(a)}}componentDidMount(){a("ResourceHint"),this.props&&this.writeResourceHintLink(this.props)}render(){return i.createElement(i.Fragment,null)}}e.exports=n},46919:(e,t,o)=>{const i=o(67294),{connect:a}=o(59800),n=o(45697),{useIntl:r}=o(36319),s=o(94184),l=o(99784).default,{asConfiguredComponent:d}=o(36380),c=o(57208),{googleAnalytics:u}=o(28601),h=o(94129),{saveThisStoryBookmarkIcon:g,savedToLibraryBookmarkIcon:m,loaderIcon:p}=o(94969),{ActionBarWrapper:b,ActionBarButton:k,ActionBarButtonDivider:f,ActionBarButtonText:C,ActionBarButtonSubText:y,ActionBarButtonIcon:v}=o(74655),S=({actionBarConfig:e,actionButtons:t,bookmarkId:o,buttonDirection:a,className:n,contentID:d,contentTitle:g,contentType:m,displayBookmarkAlert:p,documentUrl:S,doUpdateBookmarkedStatus:w,isBookmarkLoading:B,isUrlBookmark:I,maxScreenThreshold:T,minScreenThreshold:x,organizationID:L,shouldUseBookmarkV3:E,signInHed:M,signInHedSpanTag:A,signInMessage:P,signInModalConfig:D,user:R,userPlatform:O,variations:H={}})=>{var N;const $={bookmarkId:o,contentID:d,contentType:m,documentUrl:S,displayBookmarkAlert:p,doUpdateBookmarkedStatus:w,isUrlBookmark:I,organizationID:L,shouldUseBookmarkV3:E,signInHed:M,signInHedSpanTag:A,signInMessage:P,user:R,userPlatform:O},{formatMessage:V}=r(),{hideSecondaryButtonText:j=!1}=H,[U,_]=i.useState({}),{toggleBookmark:F}=h($),{isVisible:W,source:G}=D||{},q=(e,t,o={})=>{u.emitGoogleTrackingEvent(e,Object.assign({actionbar_button_type:t,actionbar_parent_id:d,actionbar_parent_title:g},o))};i.useEffect((()=>{_((e=>Object.assign(Object.assign({},e),{bookmark:{isActive:Boolean(Number(o)),inViewport:!1}})))}),[o]),i.useEffect((()=>{!W&&"VERSO_BOOKMARKING"===G&&_((e=>Object.assign(Object.assign({},e),{bookmark:Object.assign(Object.assign({},(null==e?void 0:e.bookmark)||{}),{isInProcess:!1})})))}),[W,G]),i.useEffect((()=>{var e;!1!==B&&R.isAuthenticated||!(null===(e=U.bookmark)||void 0===e?void 0:e.inViewport)||(_((e=>Object.assign(Object.assign({},e),{bookmark:Object.assign(Object.assign({},e.bookmark),{inViewport:!1})}))),q("actionbar-impression","bookmark",{actionbar_status:o?"active":"default"}))}),[null===(N=U.bookmark)||void 0===N?void 0:N.inViewport,B]),i.useEffect((()=>{if(window.document&&window.document.location){const e=c.parseQueryParams(window.location.search);e.action&&"addBookmark"===e.action&&R.isAuthenticated&&F()}}),[F,R.isAuthenticated]);const z=t=>{var o;const i=e[t];return(null===(o=U[t])||void 0===o?void 0:o.isActive)?V(l[i.afterActionLabel]):V(l[i.defaultLabel])},Z=t=>{var o,i;const a=e[t];return(null===(o=U[t])||void 0===o?void 0:o.isInProcess)&&(null==a?void 0:a.loaderIcon)?a.loaderIcon:(null===(i=U[t])||void 0===i?void 0:i.isActive)?a.afterActionIcon:a.defaultIcon};return i.createElement(b,{"data-test-id":"ActionBar",buttonDirection:a,maxScreenThreshold:T,minScreenThreshold:x,onIntersectionViewport:(e,o)=>{e&&(t.forEach((e=>{"bookmark"===e&&_((e=>Object.assign(Object.assign({},e),{bookmark:Object.assign(Object.assign({},e.bookmark),{inViewport:!0})})))})),o())}},t.map(((r,l)=>{var d;const c=e[r];let u="";const h=j&&1===l;if(c){"audio"===r&&(u=" 45 minutes");const e=z(r);return i.createElement(i.Fragment,{key:r},i.createElement(k,{id:r,"aria-label":e+u,buttonDirection:a,onClick:e=>{((e,t)=>{switch(e){case"bookmark":q("actionbar-interaction","bookmark",{actionbar_status:o?"active":"default",actionbar_interaction_type:z(e)}),_((e=>Object.assign(Object.assign({},e),{bookmark:Object.assign(Object.assign({},e.bookmark),{isInProcess:!0})}))),F(t);break;case"audio":t.stopPropagation(),_(Object.assign(Object.assign({},U),{audio:{isActive:!U.audio||!U.audio.isActive}}))}})(r,e)},className:s({active:Boolean(null===(d=U[r])||void 0===d?void 0:d.isActive),[r]:r,[n]:n}),maxScreenThreshold:T},i.createElement(v,{dangerouslySetInnerHTML:{__html:Z(r)},className:`${r}-button-icon`}),!h&&i.createElement(C,null,e,u&&i.createElement(y,null,u))),"row"===a&&l<t.length-1&&i.createElement(f,null))}return null})))};S.propTypes={actionBarConfig:n.objectOf(n.shape({afterActionIcon:n.string,afterActionLabel:n.string,defaultIcon:n.string,defaultLabel:n.string,loaderIcon:n.string})),actionButtons:n.arrayOf(n.oneOf(["audio","bookmark"])).isRequired,bookmarkId:n.number,buttonDirection:n.oneOf(["row","column"]),className:n.string,contentID:n.string,contentTitle:n.string,contentType:n.string,displayBookmarkAlert:n.func,documentUrl:n.string,doUpdateBookmarkedStatus:n.func,isBookmarkLoading:n.bool,isUrlBookmark:n.bool,maxScreenThreshold:n.string,minScreenThreshold:n.string,organizationID:n.string,shouldUseBookmarkV3:n.bool,signInHed:n.string,signInHedSpanTag:n.string,signInMessage:n.string,signInModalConfig:n.shape({isVisible:n.bool,source:n.string}),user:n.shape({amguuid:n.string,isAuthenticated:n.bool}),userPlatform:n.shape({federatedGraphqlUrl:n.string,siteCode:n.string,userPlatformProxy:n.string,xClientID:n.string}),variations:n.object},S.defaultProps={actionBarConfig:{bookmark:{afterActionIcon:m,afterActionLabel:"bookmarkSavedToLibrary",defaultIcon:g,defaultLabel:"bookmarkSaveThisStory",loaderIcon:p}},buttonDirection:"row",shouldUseBookmarkV3:!1},e.exports=a(((e,t)=>{const{coreDataLayer:{content:{contentType:o},site:{orgId:i}},"head.contentID":a,"head.canonicalUrl":n,"head.title":r,featureFlags:{shouldUseBookmarkV3:s},pageState:{bookmarkStatus:{bookmarkId:l,isUrlBookmark:d,isBookmarkLoading:c}},user:u,userPlatform:h,signInModalConfig:g}=e,{bookmarkDetails:m={},isPageScoped:p=!0}=t;return p?{bookmarkId:l,contentID:a,contentType:o,contentTitle:r,documentUrl:n,isBookmarkLoading:c,isUrlBookmark:d,organizationID:i,user:u,userPlatform:h,shouldUseBookmarkV3:s,signInModalConfig:g}:{bookmarkId:m.bookmarkId,contentID:m.contentId,contentType:o,contentTitle:r,documentUrl:n,isUrlBookmark:m.isUrlBookmark,organizationID:i,user:u,userPlatform:h,shouldUseBookmarkV3:s,signInModalConfig:g}}),(e=>({displayBookmarkAlert:()=>{e({type:"MERGE_KEY",key:"bookmarkAlert",value:{isVisible:!0}})},doUpdateBookmarkedStatus:t=>{e({type:"SET_KEY",key:"pageState.bookmarkStatus",value:t})}})))(d(S,"ActionBar"))},94969:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.savedToLibraryBookmarkIcon=t.saveThisStoryBookmarkIcon=t.loaderIcon=t.tnySavedBookmarkIcon=t.tnySaveBookmarkIcon=t.tnySaveThisStoryBookmarkIcon=void 0,t.tnySaveThisStoryBookmarkIcon='<svg class="icon icon-bookmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Save this story</title><path class="icon-bookmark-fill" d="M20 23.9508L12.5 19.7312L5 23.9508V2.95081H14V3.93211H6V22.1845L12.5 18.5536L19 22.1845V8.83866H20V23.9508Z" fill="black"></path><path class="icon-bookmark-stroke" d="M23 3H20V0H19V3H16V4H19V7H20V4H23V3Z" fill="black" stroke-width="1.25"></path></svg>',t.tnySaveBookmarkIcon='<svg class="icon icon-bookmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Save</title><path class="icon-bookmark-fill" d="M20 23.9508L12.5 19.7312L5 23.9508V2.95081H14V3.93211H6V22.1845L12.5 18.5536L19 22.1845V8.83866H20V23.9508Z" fill="black"></path><path class="icon-bookmark-stroke" d="M23 3H20V0H19V3H16V4H19V7H20V4H23V3Z" fill="black" stroke-width="1.25"></path></svg>',t.tnySavedBookmarkIcon='<svg class="icon icon-bookmark icon-bookmark--activated" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Saved</title><path class="icon-bookmark-fill icon-bookmark--activated-outline" d="M20 24L12.5 19.7804L5 24V3H20V24ZM12.5 18.6028L19 22.2336V3.98131H6V22.2336L12.5 18.6028Z" fill="black"></path><path class="icon-bookmark-fill icon-bookmark--activated-checkmark" d="M11.5541 13.7033L9 11.2033L9.66216 10.5552L11.5541 12.407L15.3378 8.70331L16 9.35146L11.5541 13.7033Z" fill="black" stroke-width="1.25"></path></svg>',t.loaderIcon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#E6E6E6"/>\n<path d="M12 21C7.07368 21 3 16.9263 3 12H3.94737C3.94737 16.4526 7.54737 20.0526 12 20.0526C16.4526 20.0526 20.0526 16.4526 20.0526 12C20.0526 7.54737 16.4526 3.94737 12 3.94737V3C16.9263 3 21 7.07368 21 12C21 16.9263 16.9263 21 12 21Z" fill="#0879BF"/>\n</svg>',t.saveThisStoryBookmarkIcon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Save this story</title><path d="M11.7661 16.3228L4.5 20.1695V3.5H19.5V20.1695L12.2339 16.3228L12 16.199L11.7661 16.3228Z" stroke="black" stroke-linecap="square"/></svg>',t.savedToLibraryBookmarkIcon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Saved to library</title><path d="M11.7661 16.3228L4.5 20.1695V3.5H19.5V20.1695L12.2339 16.3228L12 16.199L11.7661 16.3228Z" fill="#0879BF" stroke="#0879BF" stroke-linecap="square"/></svg>'},94129:(e,t,o)=>{const{useIntl:i}=o(36319),a=o(45697),n=o(47057),{default:r}=o(99784),s=o(8046),l="verso-story-page",d=({bookmarkId:e,contentID:t,contentType:o,displayBookmarkAlert:a,doUpdateBookmarkedStatus:d,isUrlBookmark:c,organizationID:u,shouldUseBookmarkV3:h,signInHed:g,signInHedSpanTag:m,signInMessage:p,user:b,userPlatform:k})=>{const{formatMessage:f}=i(),{amguuid:C="",isAuthenticated:y=!1}=b,{federatedGraphqlUrl:v,siteCode:S,userPlatformProxy:w,xClientID:B}=k,I=s(h),T=async e=>{e&&e.preventDefault();const{pathname:t,search:o}=window.location,i="action=addBookmark",a=o?`${t}${o}&${i}`:`${t}?${i}`;n.doDisplayModal({authSource:"sign-in-modal",source:"VERSO_BOOKMARKING",dangerousHed:g||"",dangerousHedSpanTag:m||"",dangerousDek:p||f(r.bookmarkSignInMessage),redirectURL:a,type:"default",analyticsType:"saved stories"})};return{toggleBookmark:async i=>y?e?(async t=>{t.preventDefault();try{const t=await I.proxyRemoveBookmark({amgUUID:C,bookmarkId:e,federatedGraphqlUrl:v,isUrlBookmark:c,source:l,userPlatformProxy:w,xClientID:B});if(t&&204!==t.status)return;d({bookmarkId:null,isUrlBookmark:null})}catch(e){console.error(e)}})(i):(async e=>{e&&e.preventDefault();try{const{statusCode:e,data:{id:i}={}}=await I.proxyCreateBookmark({amgUUID:C,copilotID:t,contentType:o,federatedGraphqlUrl:v,organizationID:u,siteCode:S,source:l,userPlatformProxy:w,xClientID:B});(201===e&&i||409===e)&&d({bookmarkId:i,isUrlBookmark:!1})}catch(e){console.error(e)}finally{window.history.replaceState({},document.title,document.location.pathname)}window.localStorage&&!window.localStorage.getItem("userHasUsedBookmarkFeature")&&(a(),window.localStorage.setItem("userHasUsedBookmarkFeature","true"))})(i):T(i),displaySignInModal:T}};d.propTypes={bookmarkId:a.number,contentID:a.string,contentType:a.string.isRequired,displayBookmarkAlert:a.func,documentUrl:a.string,doUpdateBookmarkedStatus:a.func,isUrlBookmark:a.bool,organizationID:a.string,shouldUseBookmarkV3:a.bool,signInHed:a.string,signInHedSpanTag:a.string,signInMessage:a.string,user:a.shape({amguuid:a.string,isAuthenticated:a.bool}).isRequired,userPlatform:a.shape({federatedGraphqlUrl:a.string,siteCode:a.string,userPlatformProxy:a.string,xClientID:a.string}).isRequired},d.defaultProps={shouldUseBookmarkV3:!1},e.exports=d},59185:(e,t,o)=>{const i=o(57);e.exports=i},74655:(e,t,o)=>{const{default:i,css:a}=o(51117),{BaseText:n}=o(74327),r=o(92727),{calculateSpacing:s,getColorStyles:l,maxScreen:d,minScreen:c,minMaxScreen:u}=o(79720),{minThresholds:h,maxThresholds:g}=o(515),m=i.span.withConfig({displayName:"ActionBarSecondaryButtonPrimaryIcon"})`
  display: flex;
  margin-right: ${s(1)};
`,p=i(n).withConfig({displayName:"ActionBarButtonText"})`
  white-space: nowrap;
`;p.defaultProps={as:"span",colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.utility.button-utility"};const b=i(n).withConfig({displayName:"ActionBarButtonSubText"})`
  padding-left: ${s(.5)};
`;b.defaultProps={as:"span",colorToken:"colors.interactive.base.dark",typeIdentity:"typography.definitions.utility.assistive-text"};const k=i.span.withConfig({displayName:"ActionBarButtonDivider"})`
  align-self: center;
  border-left: 1px solid;
  ${({theme:e})=>l(e,"border-color","colors.interactive.base.border")};
  height: ${s(3)};
`,f=i.button.withConfig({displayName:"ActionBarButton"})`
  display: flex;
  position: relative;
  align-items: center;
  border-bottom: ${({buttonDirection:e})=>"column"===e&&"1px solid;"};
  border-radius: ${({buttonDirection:e})=>s("column"===e?1:6)};
  padding: 0 ${s(2)};
  height: ${s(6)};
  overflow: hidden;

  ${({buttonDirection:e})=>"column"===e?"\n        &:last-of-type:not(:first-of-type) {\n          border-top-left-radius: 0;\n          border-top-right-radius: 0;\n        }\n        &:not(:last-of-type) {\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n        }\n      ":"row"===e?"\n        &:last-of-type:not(:first-of-type) {\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0;\n        }\n        &:not(:last-of-type) {\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0;\n        }\n      ":""};

  ${({theme:e})=>`\n      ${l(e,"border-color","colors.interactive.base.border")};\n      ${l(e,"background-color","colors.interactive.base.white")};\n    `};

  ${({buttonDirection:e})=>"column"===e&&`\n      min-width: ${s(7)};\n      height: ${s(7)};\n      &:last-of-type {\n        border-bottom: 0;\n      }\n    `}

  &:hover {
    text-decoration: none;
    ${({theme:e})=>l(e,"background-color","colors.interactive.base.highlight")};

    ${({maxScreenThreshold:e})=>e&&a`
        ${d(`${g[e]}px`)} {
          background-color: transparent;
        }
      `};
  }

  &:focus-visible {
    outline-style: auto;
  }

  &:focus {
    text-decoration: none;
  }

  ${m} .icon-loader {
    padding-right: ${s(1)};

    path {
      ${({theme:e})=>l(e,"fill","colors.interactive.base.brand-primary")};
    }
  }

  &.active {
    ${m} {
      path:first-of-type {
        ${({theme:e})=>l(e,"fill","colors.interactive.base.brand-primary")};
      }
    }

    ${p} {
      ${({theme:e})=>l(e,"color","colors.interactive.base.brand-primary")};
    }
  }
`,C=i(r).withConfig({displayName:"ActionBarWrapper"})`
  display: none;
  flex-direction: ${({buttonDirection:e})=>`${e};`};
  justify-content: center;
  border: 1px solid;
  border-radius: ${s(6)};

  ${({buttonDirection:e})=>"column"===e&&`\n    border-radius: ${s(1)};\n    max-width: ${s(7.25)};\n    transition: max-width 300ms ease-in-out;\n\n    ${p} {\n      display: none;\n    }\n\n    ${m} {\n      margin-right: 0;\n    }\n\n    &:hover {\n      max-width: ${s(22)};\n      ${m} {\n        margin-right: ${s(1)};\n      }\n      ${p} {\n        display: unset;\n      }\n    }\n  `}

  ${({theme:e})=>`\n      ${l(e,"border-color","colors.interactive.base.border")};\n      ${l(e,"background-color","colors.interactive.base.white")};\n    `};

  ${({maxScreenThreshold:e,minScreenThreshold:t})=>{const o=t?h[t]:0;if(e){const t=g[e];return a`
        ${u(`${o}px`,`${t}px`)} {
          display: inline-flex;
        }
      `}return a`
      ${c(`${o}px`)} {
        display: inline-flex;
      }
    `}};
`;e.exports={ActionBarWrapper:C,ActionBarButton:f,ActionBarButtonDivider:k,ActionBarButtonText:p,ActionBarButtonSubText:b,ActionBarButtonIcon:m}},99784:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=o(36319);t.default=(0,i.defineMessages)({audioPrimaryLabel:{id:"AudioPrimaryLabel.Listen",defaultMessage:"Listen",description:"Listen"},audioSecondaryLabel:{id:"AudioSecondaryLabel.NowPlaying",defaultMessage:"Now playing",description:"Now playing"},bookmarkSaveThisStory:{id:"BookmarkPrimaryLabel.SaveThisStory",defaultMessage:"Save this story",description:"Save this story"},bookmarkSavedToLibrary:{id:"BookmarkPrimaryLabel.SavedToLibrary",defaultMessage:"Saved to library",description:"Saved to library"},bookmarkSave:{id:"BookmarkPrimaryLabel.Save",defaultMessage:"Save",description:"Save"},bookmarkSaved:{id:"BookmarkPrimaryLabel.Saved",defaultMessage:"Saved",description:"Saved"},bookmarkSignInMessage:{id:"Bookmark.SignInMessage",defaultMessage:"After signing in, you can save stories and easily revisit them on any device—even off-line.",description:"Bookmark sign in message"}})},57:(e,t,o)=>{const{asVariation:i}=o(95545),a=o(46919);a.SecondaryButtonWithNoText=i(a,"SecondaryButtonWithNoText",{hideSecondaryButtonText:!0}),a.Stacked=i(a,"Stacked",{},{buttonDirection:"column"}),e.exports=a},90554:(e,t,o)=>{const i=o(67294),a=o(45697),{connect:n}=o(59800),r=o(83253),s=o(28824),l=o(18322),{minThresholds:d}=o(28657),{GlobalStyle:c,CloseModalButtonDesktop:u,CloseModalButtonMobile:h,ModalContentWrapper:g}=o(23247),m=({children:e,closeModalText:t,isModalOpen:o,openModal:a,modalTransitionTime:n,showHeader:s})=>{i.useEffect((()=>{r.setAppElement("#app-root")}),[]);const m=i.useMemo((()=>{var e;if(!s||!o||!document)return 0;const t=null===window||void 0===window?void 0:window.innerWidth,i=document.getElementsByClassName("visual-link-banner--is-scrolled"),a=document.getElementsByClassName("site-navigation");return t<d.xl&&i.length&&i[0]?i[0].offsetHeight:a&&a.length&&(null===(e=a[0])||void 0===e?void 0:e.offsetHeight)||0}),[o,s]);return i.createElement(r,{isOpen:o,className:"genericModal",overlayClassName:{base:"genericModalOverlay",afterOpen:"genericModalOverlayAfterOpen",beforeClose:"genericModalOverlayBeforeClose"},bodyOpenClassName:"genericModalBodyOpen",shouldCloseOnEsc:!0,closeTimeoutMS:n},i.createElement(u,{btnStyle:"text",iconPosition:"before",hasEnableIcon:!0,onClickHandler:()=>a(!1),ButtonIcon:l.Close,label:t}),i.createElement(h,{ButtonIcon:l.Close,onClickHandler:()=>a(!1),onTouchStart:()=>a(!1),btnStyle:"outlined",isIconButton:!0,hasEnableIcon:!0,cornerRadius:"FullyRoundedCorner",size:"small",label:t}),i.createElement(g,null,e),i.createElement(c,{siteHeaderHeight:m,modalTransitionTime:n}))};m.propTypes={children:a.node.isRequired,closeModalText:a.string,isModalOpen:a.bool.isRequired,modalTransitionTime:a.number,openModal:a.func.isRequired,showHeader:a.bool},m.defaultProps={closeModalText:"",modalTransitionTime:300,showHeader:!1},e.exports=n((e=>({isModalOpen:e.isModalOpen||!1})),(e=>{const{openModal:t}=s(e);return{openModal:t}}))(m)},42045:(e,t,o)=>{const i=o(1961),{asConfiguredComponent:a}=o(36380),{asThemedComponent:n}=o(3517);e.exports=n(a(i,"GenericModal"))},23247:(e,t,o)=>{const{default:i,createGlobalStyle:a}=o(51117),n=o(7279),{ButtonLabel:r,ButtonIconWrapper:s}=o(41909),{maxScreen:l,minScreen:d,getColorToken:c,calculateSpacing:u,getZIndex:h}=o(79720),{maxThresholds:g}=o(28657),{BREAKPOINTS:m}=o(85326),p=i(n.Utility).withConfig({displayName:"CloseModalButton"})`
  position: absolute;
  color: ${({theme:e})=>c(e,"colors.interactive.base.dark")};

  svg {
    fill: ${({theme:e})=>c(e,"colors.interactive.base.dark")};
  }

  &:hover {
    color: ${({theme:e})=>c(e,"colors.interactive.base.dark")};
  }

  ${s} {
    display: flex;
  }
`,b=i(p).withConfig({displayName:"CloseModalButtonDesktop"})`
  left: 0;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${c("colors.interactive.base.primary")};
  }

  ${l(`${g.lg}px`)} {
    display: none;
  }

  ${r} {
    padding: 0;
  }
`,k=i(p).withConfig({displayName:"CloseModalButtonRight"})`
  top: ${u(2.5)};
  right: ${u(3)};
  left: unset;
  z-index: ${h("skipLink")};
  border: 1px solid ${c("colors.interactive.base.light")};
  width: ${u(5)};
  height: ${u(5)};

  &:hover {
    border: 1px solid ${c("colors.interactive.base.light")};
    background: ${c("colors.interactive.base.light")};
  }

  svg {
    vertical-align: bottom;
  }

  ${d(m.lg)} {
    display: none;
  }
`,f=i.div.withConfig({displayName:"ModalContentWrapper"})`
  padding: 0;
  height: 100%;
`,C=a`
  .genericModalBodyOpen {
    overflow: hidden;
  }

  .genericModalOverlay {
    position: fixed;
    top: ${({siteHeaderHeight:e})=>`${e}px`};
    left: 0;
    transition: ${({modalTransitionTime:e})=>e&&`opacity ${e}ms ease-in-out;`};
    opacity: 0;
    z-index: ${h("hyperstitialLayer")};
    width: 100%;
    height: ${({siteHeaderHeight:e})=>`calc(100% - ${e}px)`};
  }

  .genericModal {
    background: ${({theme:e})=>c(e,"colors.interactive.base.white")};
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  .genericModalOverlayAfterOpen {
    opacity: 1;
  }

  .genericModalOverlayBeforeClose {
    opacity: 0;
  }
`;e.exports={GlobalStyle:C,CloseModalButtonDesktop:b,CloseModalButtonMobile:k,ModalContentWrapper:f}},1961:(e,t,o)=>{const{asVariation:i}=o(95545),a=o(90554);a.Default=i(a,"Default",{}),e.exports=a},67882:(e,t,o)=>{const i=o(94184),a=o(36968),n=o(27361),r=o(23493),s=o(23279),l=o(45697),d=o(67294),{injectIntl:c}=o(36319),u=o(67423).Z,h=o(92170),{getVariationNames:g}=o(95545),{I18nProvider:m}=o(5544),p=o(38134),b=o(32803),k=o(64220),f=o(64734),{connector:C}=o(92078),y=o(9370),v=o(42820),{googleAnalytics:S}=o(28601),w=o(48655),{PaywallCollaborator:B,withArticleTruncation:I}=o(13131),{InlineBarrier:T}=o(58980),x=o(1564),L=o(61784),E=o(6811),{withLightbox:M}=o(92267),A=o(4131),{Disclaimer:P}=o(5626),{BeopScript:D}=o(22665),{trackComponent:R}=o(40199),O=o(38309),H=o(15565),N=o(9855),$=o(43625),V=o(94328),{asConfiguredComponent:j}=o(36380),U=o(66518),_=o(71311),F=o(70734),{getNewsletterSubscriptions:W}=o(78918),G=o(50037),{MultiPackageRow:q}=o(42041),{getOverrideBehaviour:z}=o(66528),Z=o(42045),K=o(7891),Y=o(91749),X=o(59185),{ArticlePageBase:J,ArticlePageGlobalStyle:Q,ArticlePageLedeBackground:ee,ArticlePageContentBackGround:te,ArticlePageBodyMobileTruncatedBtn:oe,ArticlePageContentFooterGrid:ie,ArticlePageIssueDate:ae,ContentWrapperGrid:ne}=o(8172);class re extends d.Component{constructor(e){super(e),this.onHandleScroll=()=>{const e=window.scrollY<=this.pageContentEl.current.offsetTop+100;e!==this.state.hideNav&&this.setState({hideNav:e})},this.onResizeHandler=()=>{this.implementActionBarHeight()},this.onScrollHandler=()=>{this.implementActionBarHeight()},this.onTruncationDismiss=()=>{this.setState({isMobileTruncated:!this.state.isMobileTruncated}),S.emitUniqueGoogleTrackingEvent("article-read-more")},this.setCartoonLinkedGalleries=(e,t)=>{this.setState({sliderData:e},(()=>{t()}))},this.implementActionBarHeight=()=>{var e,t,o;(null===(e=this.props.featureFlags)||void 0===e?void 0:e.enableActionBar)&&(null===(o=null===(t=this.articleWrapperRef)||void 0===t?void 0:t.current)||void 0===o?void 0:o.offsetHeight)!==this.state.articleLength&&this.setState({articleLength:this.articleWrapperRef.current.offsetHeight})},this.fetchNewsletterSubscriptions=async e=>{try{const t=await W(e);if(200===t.status){const e=this.props.article.newsletterModules.filter((e=>e.priority)).sort(((e,t)=>e.priority-t.priority)).map((e=>e.newsletterId)),o=this.props.article.newsletter.newsletterId,i=t.newsletterSubscriptions.data.filter((e=>"SUBSCRIBED"===e.attributes.status)).map((e=>e.attributes.newsletterId));if(i.length){const t=e.filter((e=>!i.includes(e))),a=this.props.article.newsletterModules.find((e=>e.newsletterId===t[0]));i.includes(o)&&this.setState({newsletterData:Object.assign(Object.assign({},this.state.newsletterData),a)})}}}catch(e){console.log(e)}return{}},this.state={hideNav:this.props.article.headerProps.hasContentHeaderLogo,isMobileTruncated:!1,newsletterData:this.props.article.newsletter,sliderData:{},articleLength:0},this.pageContentEl=d.createRef(),this.articleWrapperRef=d.createRef();const t=e.hasLightbox?M(f,e.article.lightboxImages,e.hasSlideShow):f;this.TruncatedChunkedArticleContent=I(t,"body")}componentDidMount(){var e;if(R("ArticlePage"),this.props.user.isAuthenticated&&this.props.hasDynamicNewsletterSignup&&(null===(e=this.props.article.newsletterModules)||void 0===e?void 0:e.length)){const e=this.props.article.newsletterModules.map((e=>e.newsletterId)).toString(),t={amgUUID:this.props.user.amguuid,newsletterIds:e,userPlatformProxy:this.props.userPlatform.userPlatformProxy,provider:"sailthru",xClientID:this.props.userPlatform.xClientID};this.fetchNewsletterSubscriptions(t)}const{hasTruncationOnMobile:t}=this.props.article;if(t?this.setState({isMobileTruncated:!0}):this.setState({isMobileTruncated:!1}),this.props.article.headerProps.hasContentHeaderLogo){this.setState({hideNav:!0});const e=r(this.onHandleScroll,300);window.addEventListener("scroll",e)}const o="header"===n(this.props.article.interactiveOverride,"behavior"),i=n(this.props.componentConfig,"BasePage.settings.showNavWithHeaderOverride"),a=o&&!i;window.sessionStorage.setItem("nav_invisible",a),window.cns&&(window.cns.pageContext.content.pageStructure=this.props.article.pageStructure);const l=s(this.onScrollHandler,200),d=s(this.onResizeHandler,200);window.addEventListener("scroll",l),window.addEventListener("resize",d)}componentWillUnmount(){window.removeEventListener("scroll",this.onHandleScroll),window.sessionStorage.removeItem("nav_invisible")}render(){var e,t,o;const{article:{id:r,body:s,channelCloudData:l,contentWarnings:c,affiliateDisclaimer:h,contributorSpotLightProps:g,hideAffiliateDisclaimer:f,hasAffiliateLinks:C,hasEventBannerHidden:S,hideProductDisclaimer:I,channelMap:E,coralComments:M,hasNewsletterInBody:R,hasProduct:W,hasProductLisitingCarousel:X,hasTruncationOnMobile:re,headerProps:se,hideAutoDisclaimer:le,hideContributorBio:de,hideRecircList:ce,hideRecircMostPopular:ue,hierarchy:he,shouldReplaceOutbrainWithVMG:ge,interactiveOverride:me,isAffiliateLinksDisabled:pe,lang:be,langTranslations:ke,customHeading:fe={},recircs:Ce=[],recircMostPopular:ye,recircRelated:ve,relatedVideo:Se,interlude:we,isHeroAdVisible:Be,isLicensedPartner:Ie,licensedPartnerLink:Te,magazineDisclaimer:xe,paddingTop:Le,tagCloud:Ee,newsletter:Me,shouldUsePersistentAd:Ae,showAgeGate:Pe,showBookmark:De,showBreadcrumbTrail:Re,showHotelRecirc:Oe,signageConfig:He,isUpcEnabled:Ne,isLinkStackEnabled:$e,shouldShowFooterNewsletter:Ve,shouldPrioritizeSeriesPagination:je,savingsUnitedCoupons:Ue=[]},showWriterBio:_e,showFirstRailRecirc:Fe,showAffiliateBelowContentHeader:We,attributes:Ge,className:qe,componentConfig:ze,shouldCenterDisclaimer:Ze,shouldHideBaseTopPadding:Ke,shouldHideSeriesNavigation:Ye,shouldHideSeriesRecirc:Xe,shouldShowSeriesNavigationInFooter:Je,pageBackgroundTheme:Qe,dividerColor:et,shouldEnableArticleBackground:tt,shouldEnableFullArticleInverted:ot,shouldInheritDropcapColor:it,showLinkStackInsideContentBody:at,featureFlags:nt,hasLightbox:rt,hasChannelNavigation:st,hideSideBySideViewOnMobile:lt,showContributor:dt,showContributorSpotlight:ct,cartoonVariation:ut,hasRecircDriver:ht,linkList:gt,related:mt,metadataVideo:pt,outbrain:bt,taboola:kt,productCarousel:ft,user:Ct,hasNewsletterForABTest:yt,intl:vt,xlargePaddingTop:St,articleVariationForXlargePaddingTop:wt,beOp:Bt,hasDynamicDisclaimer:It,responsiveCartoonVariation:Tt,showGalleryCartoonPublishedDate:xt,actionBarLargeScreenVariation:Lt,actionBarMobileScreenVariation:Et,isActionBarStickyLargeScreen:Mt,actionBarButtons:At,acdcPhase2:Pt}=this.props,Dt=tt&&Qe,Rt=tt&&et,{hideNav:Ot,articleLength:Ht}=this.state,Nt=!!yt||R,{hasContentHeaderLogo:$t,isFullBleedVideo:Vt}=se;$t&&(()=>{const e=n(ze,"ContentHeader.settings");a(ze,"ContentHeader.variation","TextOverlayWithLogo"),a(ze,"ContentHeader.settings",Object.assign(Object.assign({},e),{showLogo:!0,hideContributors:!1,hidePublishDate:!0,hideRubric:!1,hideShareButtons:!0}))})();const jt=de?void 0:se.contributors,{hasNativeShareButton:Ut,hasNewsletterOnPageTop:_t,hasNewsletterWithoutWrapper:Ft,shouldEnableNativeShareOnDesktop:Wt,shouldRemoveBackgroundColor:Gt,enableEnhancedCartoonExperience:qt,enableACDC:zt,enableActionBar:Zt,variations:Kt,showFullBleedBelow:Yt,cneVideoEmbedProps:Xt,enableACDCPhase2:Jt}=nt,Qt={enableACDC:!1};let eo={},to={};const oo={},io=n(ze,"ContentHeader.variation"),ao=["TextAboveCenterSmallWithRule","TextAboveCenterFullBleedNoContributor","TextBelowCenterFullBleedNoContributor","InlineImage","SplitScreenImageRightFullBleed","SplitScreenImageRightInset","SplitScreenImageLeftInset","SplitScreenImageLeftFullBleed","TextAboveLeftSmallWithRule"];zt&&ao.includes(io)&&(eo={shouldAlignCenterWhenNoCaption:!0}),Zt&&(eo=Object.assign(Object.assign({},eo),{hideSocialIcons:!0,hideSocialIconsOnMobile:!0,hasStickySocialIcons:!1})),zt&&"TextBelowCenterFullBleedNoContributor"===io&&(eo=Object.assign(Object.assign({},eo),{isImagePositionBottomInSmallScreen:!0})),Jt&&ao.includes(io)&&"hide_all_features"===Pt.toLowerCase()?(oo.linkBannerScrollStrategy="hide-stacked-nav",eo=Object.assign(Object.assign({},eo),{hideArticleIssueDate:!0,showContributorImageOnMobile:!1})):Jt&&ao.includes(io)&&"enable"===Pt.toLowerCase()&&(eo=Object.assign(Object.assign({},eo),{hideArticleIssueDate:!0,showContributorImageOnMobile:!1}),Qt.enableACDC=!0,oo.linkBannerScrollStrategy="enable",to={articleIssueDateComponent:d.createElement((()=>se.issueDate?d.createElement(ae,null,vt.formatMessage(u.publishedInThe),` ${se.issueDate} `,vt.formatMessage(u.issue)):null),null)});const no=qt?"InlineCartoon":Tt,ro=function(e){return"WithAdRail"===n(e,"ChunkedArticleContent.variation")?w.NarrowContentWithWideAdRail:w.WithMargins}(ze),so="OneColumnNarrow"===n(ze,"ChunkedArticleContent.variation"),lo=w.DynamicGrid({startColumn:2,endColumn:12}),co=Ze?P.TextCenterNoTopRule:P,uo=Ce.map(((e,t)=>{const o=j(U,e.displayName),i=e.heading||"",{results:a,destinationPage:n,location:r,recommendedClickout:s,recommendedType:l}=e;return ht&&n?d.createElement(_,{key:`SummaryCollectionSplitColumns${t}`,recommendedItems:{items:a,recommendedType:l,recommendedClickout:s},guideItem:[n],location:r,shouldAppendReadMoreLinkForDek:!0}):d.createElement(F,{key:`ConnectedErrorBoundary${t}`},d.createElement(o,{related:e.related,heading:i,dividerColor:Rt,shouldEnableFullArticleInverted:ot}))})),ho=io===wt&&St?St:Le,go=(null==Bt?void 0:Bt.accountID)||"",mo=(null==Bt?void 0:Bt.isEnabled)||!1,po=st&&d.createElement(H,null),bo="WithAdRail"===n(ze,"ChunkedArticleContent.variation"),ko=({children:e})=>d.createElement(ne,{isadRail:bo,as:ro},d.createElement("div",{className:"body body__container"},d.createElement("div",{className:"container container--body"},d.createElement("div",{className:"container--body-inner"},e)))),fo="articleheader"===z(me),Co=n(se,"sponsoredContentHeaderProps"),yo=d.createElement(d.Fragment,null,d.createElement(A,null,d.createElement(lo,null,d.createElement(co,{disclaimerHtml:h,hasTopRule:!1}))));return d.createElement(J,Object.assign({additionalNavigation:po,attributes:Ge,shouldEnableFullArticleInverted:ot,channelMap:E,className:i("page--article",qe),featureFlags:nt,hideNav:Ot,hasContentHeaderLogo:$t,hasEventBannerHidden:S,hasFooterAdsMargins:!0,interactiveOverride:me,isHeroAdVisible:Be,hasBaseAds:!0,user:Ct,lang:be,customHeading:fe,shouldHideBaseTopPadding:Ke,shouldPrioritizeSeriesPagination:je,pageBackgroundTheme:Dt},oo),mo&&d.createElement(D,{accountId:go}),d.createElement(m,{locale:be,translations:ke},De&&d.createElement(N,null),C&&h&&!f&&!I&&!We&&yo,Re&&d.createElement(b,{hierarchy:he,shouldRemoveBackgroundColor:Gt}),d.createElement("article",{className:i("article main-content",{"article--inherited-dropcaps":it}),lang:be},_t&&Me&&d.createElement($,Object.assign({},Me,{position:"article-page-top"})),se.sponsoredContentHeaderProps&&d.createElement(L,Object.assign({},se.sponsoredContentHeaderProps,{className:"light-theme"})),fo?d.createElement("div",{className:"interactive-override-container interactive-override-container--content_header",dangerouslySetInnerHTML:{__html:me.markup}}):d.createElement(ee,{ref:this.pageContentEl},d.createElement(v,Object.assign({},se,eo,{showFullHeaderViewInMobile:zt,hasNativeShareButton:Ut,shouldEnableNativeShareOnDesktop:Wt,isFullBleedVideo:Vt,className:"article__content-header",hasLightbox:rt,stickySocialAnchorBottom:{selector:".content-bottom-anchor",edge:"bottom"},stickySocialAnchorTop:{selector:".body",edge:"top"},interactiveOverride:me,metadataVideo:pt,showBreadCrumb:Re}))),!Ye&&!Je&&d.createElement(O,{className:"article__series-navigation",pageBackgroundTheme:Dt,dividerColor:Rt}),d.createElement(te,Object.assign({togglePaddingTop:ho,isMobileTruncated:this.state.isMobileTruncated,cartoonVariation:ut,"data-attribute-verso-pattern":"article-body",enableActionBar:Zt,className:"article-body__content"},Qt,{ref:this.articleWrapperRef}),Zt&&d.createElement(Y,{actionBarLargeScreenVariation:Lt,actionBarMobileScreenVariation:Et,isActionBarStickyLargeScreen:Mt,actionBarButtons:At,articleLength:Ht}),re&&this.state.isMobileTruncated&&d.createElement(oe,{inputKind:"button",label:vt.formatMessage(u.truncatedButtonLabel),onClickHandler:this.onTruncationDismiss}),(()=>{var e;return n(ze,"ChannelCloud.settings.shouldShowChannelCloud",!1)&&(null===(e=null==l?void 0:l.channels)||void 0===e?void 0:e.length)>0})()&&d.createElement(w.ContentWithAdRailNarrow,null,d.createElement("div",null,d.createElement(V,Object.assign({},l,n(ze,"ChannelCloud.settings"))))),C&&h&&!f&&!I&&We&&yo,s&&d.createElement(B,Object.assign({body:s,linkList:gt,isLinkStackEnabled:$e&&at,component:this.TruncatedChunkedArticleContent,contributors:jt,hasProduct:W,hasProductLisitingCarousel:X,hasTopSpacing:!!se.lede,interlude:we,isAffiliateLinksDisabled:pe,name:"chunked-article-content",shouldUsePersistentAd:Ae,hideRecircMostPopular:ue,shouldEnableArticleBackground:tt,shouldEnableFullArticleInverted:ot,pageBackgroundTheme:Dt,dividerColor:Rt,recircMostPopular:ye,showFirstRailRecirc:Fe,tagCloud:Ee,hideAutoDisclaimer:le,hideAffiliateDisclaimer:f,hideProductDisclaimer:I,responsiveCartoonVariation:no,hasCartoonFullWidth:qt,setCartoonLinkedGalleries:this.setCartoonLinkedGalleries},to)),s&&d.createElement(ko,null,d.createElement(T,null))),!Xe&&d.createElement(x,{ContentWrapper:ko})),mo&&d.createElement(ko,null,d.createElement("div",{className:"BeOpWidget"})),Yt&&d.createElement(d.Fragment,null,d.createElement(v,{variations:Kt,isFullBleedVideo:Yt,cneVideoEmbedProps:Xt})),Object.keys(ft).length>0&&d.createElement(q,{key:"articleCarouselProduct",dataJourneyHook:"row-content"},d.createElement(G,Object.assign({isUpcEnabled:Ne},ft,{copilotId:r}))),d.createElement(ie,{as:y,className:i({"content-footer--mobile-truncated":this.state.isMobileTruncated}),channelMap:E,consumerMarketing:{position:"article-footer"},shouldEnableFullArticleInverted:ot,ContentWrapper:ro,contributors:jt,contributorSpotlight:g,coralComments:M,showWriterBio:_e,hideContributorBio:de,showContributorSpotlight:ct,showContributor:dt,hideRecircList:ce,hasNewsletterWithoutWrapper:Ft,isLicensedPartner:Ie,isLinkStackEnabled:$e&&!at,isNarrow:so,isAdRail:bo,licensedPartnerLink:Te,linkList:gt,magazineDisclaimer:xe,newsletter:Ct.isAuthenticated?this.state.newsletterData:Me,outbrain:bt,taboola:kt,recircs:Ce,recircListElements:uo,dividerColor:Rt,related:mt,recircRelated:ve,relatedVideo:Se,showNewsletter:Ve||!Nt,showHotelRecirc:Oe,signageConfig:He,tagCloud:Ee,shouldReplaceOutbrainWithVMG:ge,savingsUnitedCoupons:Ue,sponsoredProps:Co,hasDynamicDisclaimer:It,shouldShowSeriesNavigationInFooter:!Ye&&Je,pageBackgroundTheme:Dt}),Pe&&d.createElement(p,{content:{contentWarnings:c}}),!Ct.isAuthenticated&&Ct.hasUserAuthCheck&&d.createElement(k,{as:"document",hint:"prefetch",href:"/account/sign-in"})),qt&&d.createElement(Z,{closeModalText:vt.formatMessage(u.backToArticle)},d.createElement(K,{items:this.state.sliderData.items,showPublishedDate:xt,responsiveCartoonVariation:"SliderCartoon",title:null===(t=null===(e=this.state.sliderData)||void 0===e?void 0:e.source)||void 0===t?void 0:t.hed,titleLinkURL:null===(o=this.state.sliderData)||void 0===o?void 0:o.url,shouldUseModalStyle:!0,carouselPlacedIn:"modal",showHeadRecirc:!0,showNewsletter:!0})),d.createElement(Q,{pageBackgroundTheme:Dt,dividerColor:Rt,shouldEnableFullArticleInverted:ot,hideSideBySideViewOnMobile:lt}))}}re.propTypes={acdcPhase2:l.oneOf(["enable","disable","hide_all_features"]),actionBarButtons:l.arrayOf(l.oneOf(["audio","bookmark"])),actionBarLargeScreenVariation:l.oneOf(g(X)),actionBarMobileScreenVariation:l.oneOf(g(X)),article:l.shape({body:l.array,channelCloudData:l.object,affiliateDisclaimer:l.string,contributorSpotLightProps:l.object,hideProductDisclaimer:l.bool,hideAffiliateDisclaimer:l.boolean,hasAffiliateLinks:l.boolean,channelMap:l.object,coralComments:l.shape({enableComments:l.bool,coralHostName:l.string}),contentWarnings:l.array,customHeading:l.object,hasEventBannerHidden:l.bool,hasNewsletterInBody:l.bool,hasProduct:l.bool,hasProductLisitingCarousel:l.bool,hasTruncationOnMobile:l.bool,headerProps:l.object.isRequired,hideAutoDisclaimer:l.bool,hideContributorBio:l.bool,hideRecircList:l.bool,hideRecircMostPopular:l.bool,hierarchy:l.array,id:l.string,interactiveOverride:l.shape({markup:l.string,behavior:l.string}),interlude:l.shape(Object.assign(Object.assign({},E.propTypes),{isRailEligible:l.boolean})),isAffiliateLinksDisabled:l.bool,isHeroAdVisible:l.bool.isRequired,isLicensedPartner:l.bool,isLinkStackEnabled:l.bool,isUpcEnabled:l.bool,lang:l.string,langTranslations:l.object,licensedPartnerLink:l.string,lightboxImages:l.array.isRequired,magazineDisclaimer:l.shape({issueDate:l.string.isRequired,issueLink:l.string.isRequired,originalHed:l.string}),newsletter:l.object,newsletterModules:l.array,paddingTop:l.oneOf(["large"]),pageStructure:l.array,recircs:l.array,recircMostPopular:l.array,recircRelated:l.array,relatedVideo:l.shape({brand:l.string,related:l.any,useRelatedVideo:l.bool}),savingsUnitedCoupons:l.array,shouldPrioritizeSeriesPagination:l.bool,shouldShowFooterNewsletter:l.bool,shouldUsePersistentAd:l.bool,shouldReplaceOutbrainWithVMG:l.bool,showAgeGate:l.bool,showAffiliateBelowContentHeader:l.bool,showBookmark:l.bool,showBreadcrumbTrail:l.bool,showHotelRecirc:l.bool,signageConfig:l.object,tagCloud:l.shape({tags:l.arrayOf(l.shape({tag:l.string.isRequired,url:l.string}))})}).isRequired,articleVariationForXlargePaddingTop:l.string,attributes:l.object,beOp:l.shape({accountID:l.string,isEnabled:l.boolean}),cartoonVariation:l.oneOf(["default","card"]),className:l.string,componentConfig:l.object,dividerColor:l.string,featureFlags:l.object,hasChannelNavigation:l.bool,hasDynamicDisclaimer:l.bool,hasDynamicNewsletterSignup:l.bool,hasLightbox:l.bool,hasNewsletterForABTest:l.bool,hasRecircDriver:l.bool,hasSlideShow:l.bool,hideNav:l.bool,hideSideBySideViewOnMobile:l.bool,intl:l.object,isActionBarStickyLargeScreen:l.bool,linkList:l.object,metadataVideo:l.shape({isLive:l.bool,premiereDate:l.string,series:l.string,videoLength:l.number,premiereGap:l.number}),outbrain:l.shape({canonicalUrl:l.string.isRequired,shouldDisplayAboveRecircList:l.bool,template:l.string.isRequired,widgetId:l.string}),pageBackgroundTheme:l.string,productCarousel:l.object,related:l.array,responsiveCartoonVariation:l.oneOf(g(h)),shouldCenterDisclaimer:l.bool,shouldEnableArticleBackground:l.bool,shouldEnableFullArticleInverted:l.bool,shouldHideBaseTopPadding:l.bool,shouldHideSeriesNavigation:l.bool,shouldHideSeriesRecirc:l.bool,shouldInheritDropcapColor:l.bool,shouldShowSeriesNavigationInFooter:l.bool,showAffiliateBelowContentHeader:l.bool,showContributor:l.bool,showContributorSpotlight:l.bool,showFirstRailRecirc:l.bool,showGalleryCartoonPublishedDate:l.bool,showLinkStackInsideContentBody:l.bool,showWriterBio:l.bool,taboola:l.shape({publisherId:l.string.isRequired,widgetScriptExcludeContentTypes:l.array,widgetScriptTextContentMode:l.string,widgetScriptTextContentContainer:l.string,widgetScriptTextContentPlacement:l.string}),user:l.object,userPlatform:l.object,xlargePaddingTop:l.string},re.defaultProps={acdcPhase2:"disable",cartoonVariation:"default",hasDynamicNewsletterSignup:!1,hasLightbox:!1,hasSlideShow:!0,metadataVideo:{},productCarousel:{},related:[],shouldCenterDisclaimer:!1,shouldEnableArticleBackground:!1,shouldEnableFullArticleInverted:!1,shouldHideSeriesNavigation:!0,shouldHideSeriesRecirc:!0,shouldInheritDropcapColor:!1,showAffiliateBelowContentHeader:!1,showGalleryCartoonPublishedDate:!0,showLinkStackInsideContentBody:!1,showWriterBio:!1},re.displayName="ArticlePage",e.exports=C(c(re),{keysToPluck:["article","beOp","componentConfig","featureFlags","linkList","metadataVideo","outbrain","productCarousel","related","showFirstRailRecirc","taboola","user","userPlatform"]})},91749:(e,t,o)=>{const i=o(67294),a=o(45697),n=o(59185),{ArticlePageActionBarContent:r,ArticlePageActionBarWrapper:s}=o(8172),{getVariationNames:l}=o(95545),{sizesFullName:d}=o(28657),c=({actionBarLargeScreenVariation:e,actionBarMobileScreenVariation:t,isActionBarStickyLargeScreen:o,actionBarButtons:a,articleLength:l})=>{if(!a||!(null==a?void 0:a.length))return null;const c=e?n[e]:n,u=t?n[t]:n;return e||t?i.createElement(r,{isActionBarStickyLargeScreen:o,actionBarHeight:l},i.createElement(s,null,i.createElement(c,{minScreenThreshold:d.xLarge,actionButtons:a,className:"large-screen"}),i.createElement(u,{maxScreenThreshold:d.large,actionButtons:a,className:"mobile"}))):i.createElement(r,{isActionBarStickyLargeScreen:o,actionBarHeight:l},i.createElement(s,null,i.createElement(n,{actionButtons:a,className:"default"})))};c.propTypes={actionBarButtons:a.arrayOf(a.oneOf(["audio","bookmark"])).isRequired,actionBarLargeScreenVariation:a.oneOf(l(n)),actionBarMobileScreenVariation:a.oneOf(l(n)),articleLength:a.number,isActionBarStickyLargeScreen:a.bool},c.defaultProps={articleLength:0,isActionBarStickyLargeScreen:!1},e.exports=c},80107:(e,t,o)=>{const i=o(67882),{asConfiguredComponent:a}=o(36380);e.exports=a(i,"ArticlePage")},67423:(e,t,o)=>{const i=o(36319);t.Z=(0,i.defineMessages)({truncatedButtonLabel:{id:"ArticlePage.TruncatedButtonLabel",defaultMessage:"Read Full Story",description:"ArticlePage component truncated button label"},backToArticle:{id:"ArticlePage.Back to article",defaultMessage:"Back to article",description:"Gallery slider back button text"},publishedInThe:{id:"ArticlePage.Published in the",defaultMessage:"Published in the",description:"Article page date text"},issue:{id:"ArticlePage.issue",defaultMessage:"Issue",description:"Article page Issue text"}})},96370:function(e,t,o){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=i(o(80107));(0,i(o(72010)).default)(a.default)}},o={};function i(e){var a=o[e];if(void 0!==a)return a.exports;var n=o[e]={id:e,loaded:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=t,e=[],i.O=(t,o,a,n)=>{if(!o){var r=1/0;for(c=0;c<e.length;c++){for(var[o,a,n]=e[c],s=!0,l=0;l<o.length;l++)(!1&n||r>=n)&&Object.keys(i.O).every((e=>i.O[e](o[l])))?o.splice(l--,1):(s=!1,n<r&&(r=n));if(s){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[o,a,n]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={6486:0};i.O.j=t=>0===e[t];var t=(t,o)=>{var a,n,[r,s,l]=o,d=0;if(r.some((t=>0!==e[t]))){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(l)var c=l(i)}for(t&&t(o);d<r.length;d++)n=r[d],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(c)},o=globalThis.webpackChunkverso=globalThis.webpackChunkverso||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),i.nc=void 0;var a=i.O(void 0,[9271,4534,9738,5565,8801,4332,4848,2041,4446,37,7863,3138,4734],(()=>i(96370)));a=i.O(a)})();
(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[37],{20798:(e,o,a)=>{const t=a(67294),r=a(45697),i=a(73955),s=a(23279),{useIntl:l}=a(36319),{Slot:n}=a(86972),d=a(97425),u=a(54866),c=a(3258),{FilterableSummaryList:h}=a(54526),p=a(80152),m=a(37732),g=a(44031),{trackComponent:C}=a(40199),{modifyItemObjectBasedOnContentType:b,childTobeRendered:y}=a(64767),{formatGtmData:P,productImpressionTracking:f}=a(12190),T=({copilotId:e,buttonConfig:o,ctaCardAspectRatio:a,dangerousHed:r,dangerousDek:T,dropShipSellers:N,editor:S,groups:k,hasBorder:v,hasBorderBottom:$,hasCarouselSliderPagination:w,hasControls:B,hasImageGrid:A,hasAtRetailerNameLowerCase:D,hasMediumMarginBottom:x,hasNavigationButtonVariation:I,hasPadding:E,hasProductPriceColor:R,hasProductNewPriceColor:L,hasProductWhiteBackground:H,hasGridColumn:O,hasUnderlineHed:F,isProductCardName:V,isProductCardRetailerName:U,shouldCheckProductInView:M,hasMarginTopAuto:G,hasNoBottomPaddingForGridContent:j,hasPLPBrandNameContextTitle:W,hasPLPCardNameDescriptionCore:z,paginationStyle:_,sectionTitleVariation:q,shouldChipsRedirectOnClick:K,shouldEnableBundleComponentAnalytics:Z,shouldHideDangerousDek:J,shouldHidePublishDate:Q,shouldPlayInline:X,shouldRenderCtaCard:Y,showOfferUrl:ee,showShopNowButton:oe,summaryItemVariation:ae,shouldUseAlternativeTitleStyle:te,shouldUseProductPriceSecondary:re,shouldNavigateToNewTab:ie,shouldUseSmallHed:se,expVariationName:le,isDropshipProduct:ne,trackingNamespace:de,isDotClickable:ue,layout:ce,gridConfig:he,priceFormatting:pe,affiliateDisclaimer:me,shouldAffiliateDisclaimerPlpEnable:ge,isUpcEnabled:Ce,isPlpCurated:be,isContentCenter:ye,hasCustomSlider:Pe,hideDesktopPagination:fe})=>{t.useEffect((()=>{C("VersoFilterableSummaryList")}),[]);const{formatMessage:Te}=l(),Ne=ce||"Carousel",Se="ContentCarousel"===Ne,ke="GridFourColumns"===Ne?"PLP":ce,ve=r?r.replace(/[^a-zA-Z]+/gi,"-").toLowerCase():"",{gridItemColSpan:$e}=he||{};t.useEffect((()=>{Se||(window.addEventListener("scroll",s((()=>{f(ke,document.getElementsByClassName("impressionTracking"))}),1e3)),window.addEventListener("load",(()=>f(ke,document.getElementsByClassName("impressionTracking")))))}),[ke,Se]);const we=O&&"GridFourColumns"===Ne,[Be]=t.useState(parseInt(i(),10));return k&&0!==k.length?t.createElement(h,{dangerousHed:r,dangerousDek:T,editor:S,sectionTitleVariation:q,shouldChipsRedirectOnClick:K,shouldEnableBundleComponentAnalytics:Z,shouldUseAlternativeTitleStyle:te,hasImpressionTracking:!0,trackingNamespace:de,isDotClickable:ue,hasCarouselSliderPagination:w,hasCarouselControl:Se,hasControls:B,hasNavigationButtonVariation:I,hasToggleGridColor:we,hasPadding:E,layout:Ne,pos:Be,paginationStyle:_,buttonConfig:o,gridConfig:he,hasBorderBottom:$,affiliateDisclaimer:me,shouldAffiliateDisclaimerPlpEnable:ge,isPlpCurated:be,hasCustomSlider:Pe,hideDesktopPagination:fe,isUpcEnabled:Ce},k.map((o=>{const r=function(o){switch(Ne){case"ContentCarousel":case"GridFourColumns":case"EditorsPicksCarousel":return(o=>o.items.map(((o,a)=>{const r=o.contentType;if(["commerce-product","product"].includes(r))return Ce?t.createElement(m,Object.assign({},o,{isLazy:!0,key:`${o.dangerousHed}-${a}`,dropShipSellers:N,isDropshipProduct:ne,showOfferUrl:ee,data_item:o})):t.createElement(p,Object.assign({},o,{key:`${o.dangerousHed}-${a}`,hasAtRetailerNameLowerCase:D,hasImageGrid:A,hasProductPriceColor:R,hasProductNewPriceColor:L,shouldUseProductPriceSecondary:re,hasProductWhiteBackground:H,isLazy:!0,isProductCardName:V,isProductCardRetailerName:U,hasMarginTopAuto:G,hasPLPBrandNameContextTitle:W,hasPLPCardNameDescriptionCore:z,hasUnderlineHed:F,hasCarouselControl:Se,shouldCheckProductInView:M,layout:Ne,copilotID:e,dropShipSellers:N,isDropshipProduct:ne,showOfferUrl:ee,hasImpressionTracking:!0,data_item:o,onClick:()=>P(window,Object.assign(Object.assign({},o),{expVariationName:le}),a,ke,ve),expVariationName:le,layoutName:ve,priceFormatting:pe,hideDesktopPagination:fe}));const i=b(o,r,X);let s=g[ae];return ye&&"externallink"===r&&(s=g.TextBelowCenter),t.createElement(s,Object.assign({gridItemColSpan:$e,shouldHideIcon:!0,shouldHideMetadataSecondary:!0},i,{key:`${o.dangerousHed}-${a}`,hasBorder:v,hasUnderlineHed:F,shouldHideDangerousDek:J,shouldHidePublishDate:!0,hasHedCorePrimary:!0,shouldPlayInline:X,hasNoBottomMarginForCneVideo:"cnevideo"===r,hasNoBottomPaddingForCneVideo:"cnevideo"===r,hasNoBottomPaddingForGridContent:j&&"GridFourColumns"===Ne,hasMediumMarginBottom:x,buttonSize:"default",showShopNowButton:oe&&"externallink"===r,isPlpCurated:be,shouldNavigateToNewTab:ie,hideDesktopPagination:fe,shouldUseSmallHed:se&&"externallink"===r&&"GridFourColumns"!==Ne}))})))(o);case"ArticleCarousel":return(e=>{const o=g[ae];return e.items.map(((e,a)=>t.createElement(o,Object.assign({},e,{key:`${e.dangerousHed}-${a}`,hasBorder:v,hasUnderlineHed:F,shouldHideDangerousDek:J,shouldHidePublishDate:Q}))))})(o);default:return o.items.map(((e,o)=>t.createElement(d,Object.assign({},e,{key:`${e.hed}-${o}`}))))}}(o);Y&&o.url&&r.push(t.createElement(u,{aspectRatio:a,key:`cta-${o.label}`,url:o.url},Te(c.ctaMessage,{groupName:o.label.toLocaleLowerCase()})));const i=y(r);return t.createElement(n,{key:o.label,name:o.label,url:o.url},i)}))):null};T.propTypes={affiliateDisclaimer:r.string,buttonConfig:r.object,copilotId:r.string,ctaCardAspectRatio:r.arrayOf(r.number),dangerousDek:r.string,dangerousHed:r.string,dropShipSellers:r.arrayOf(r.string),editor:r.object,expVariationName:r.string,gridConfig:r.object,groups:r.arrayOf(r.object),hasAtRetailerNameLowerCase:r.bool,hasBorder:r.bool,hasBorderBottom:r.bool,hasCarouselSliderPagination:r.bool,hasControls:r.bool,hasCustomSlider:r.bool,hasGridColumn:r.bool,hasImageGrid:r.bool,hasMarginTopAuto:r.bool,hasMediumMarginBottom:r.bool,hasNavigationButtonVariation:r.bool,hasNoBottomPaddingForGridContent:r.bool,hasPadding:r.bool,hasPLPBrandNameContextTitle:r.bool,hasPLPCardNameDescriptionCore:r.bool,hasProductNewPriceColor:r.bool,hasProductPriceColor:r.bool,hasProductWhiteBackground:r.bool,hasToggleGridColor:r.bool,hasUnderlineHed:r.bool,hideDesktopPagination:r.bool,isContentCenter:r.bool,isDotClickable:r.bool,isDropshipProduct:r.bool,isPlpCurated:r.bool,isProductCardName:r.bool,isProductCardRetailerName:r.bool,isUpcEnabled:r.bool,layout:r.string,paginationStyle:r.string,priceFormatting:r.shape({fractionDigits:r.number,shouldFormatDecimalSeparator:r.bool}),sectionTitleVariation:r.string,shouldAffiliateDisclaimerPlpEnable:r.bool,shouldCheckProductInView:r.bool,shouldChipsRedirectOnClick:r.bool,shouldEnableBundleComponentAnalytics:r.bool,shouldHideDangerousDek:r.bool,shouldHidePublishDate:r.bool,shouldNavigateToNewTab:r.bool,shouldPlayInline:r.bool,shouldRenderCtaCard:r.bool,shouldUseAlternativeTitleStyle:r.bool,shouldUseProductPriceSecondary:r.bool,shouldUseSmallHed:r.bool,showNewProductCardDesign:r.bool,showOfferUrl:r.bool,showShopNowButton:r.bool,summaryItemVariation:r.string,trackingNamespace:r.shape({toggle:r.string,card:r.string})},T.displayName="VersoFilterableSummaryList",T.defaultProps={ctaCardAspectRatio:[2,1],dropShipSellers:[],hasAtRetailerNameLowerCase:!1,hasMarginTopAuto:!1,isDotClickable:!1,isDropshipProduct:!1,isProductCardRetailerName:!1,layout:"Carousel",sectionTitleVariation:"TextCenter",shouldChipsRedirectOnClick:!1,shouldEnableBundleComponentAnalytics:!1,shouldPlayInline:!1,shouldRenderCtaCard:!1,shouldUseSmallHed:!1,showNewProductCardDesign:!1,showShopNowButton:!1,summaryItemVariation:"TextBelowLeft"},e.exports=T},50037:(e,o,a)=>{const{asConfiguredComponent:t}=a(36380),r=a(20798);e.exports=t(r,"VersoFilterableSummaryList")},54526:(e,o,a)=>{const{default:t}=a(51117),{BREAKPOINTS:r}=a(85326),{minScreen:i,calculateSpacing:s,minMaxScreen:l,getTypographyStyles:n,getColorStyles:d}=a(79720),{cssVariablesGrid:u,applyGridSpacing:c}=a(62470),{LabelText:h,ListWrapper:p}=a(10719),{CarouselListItem:m}=a(95764),{CarouselWrapper:g,ChipWrapper:C}=a(78153),b=a(33528),y=a(44031),{SummaryItemHedBase:P}=a(27853),f=t(b).withConfig({displayName:"FilterableSummaryList"})`
  margin: 0 auto;
  ${({hasToggleGridColor:e})=>!e&&`max-width:${r.fullBleed};\n  ${u()}`}
  ${({hasPadding:e})=>!e&&c("padding")}
  ${m}:first-child {
    box-sizing: content-box;
    ${({hasPadding:e})=>e?`padding-left:${s(8)};\n      ${l(0,r.md)}\n      {  \n        padding-left:${s(3)};  \n      }`:"padding-left: 0;"}
  }
  ${m}:last-child {
    box-sizing: content-box;
    ${({hasPadding:e})=>e?`padding-right:${s(8)};\n    ${l(0,r.md)}\n     { padding-right:${s(3)}; \n    }`:null}
  }
  ${i(r.xxl)} {
    ${C},
    ${g} {
      ${({hasToggleGridColor:e})=>!e&&"margin-left: revert;\n      margin-right: revert;"}
      ${h} ,
      ${p} {
        padding-right: revert;
        padding-left: revert;
      }
      ${m}:first-child {
        ${({hasPadding:e})=>!e&&"padding-left: revert;"}
      }
      ${m}:last-child {
        ${({hasPadding:e})=>!e&&"padding-right: revert;"}
      }
    }
  }
`,T=t(y).withConfig({displayName:"SummaryItemExpernalLinkWrapper"})`
  ${P} {
    ${({theme:e})=>`${n(e,"typography.definitions.discovery.hed-core-primary")};\n      ${d(e,"color","colors.discovery.body.white.heading")}`}
  }
`;e.exports={FilterableSummaryList:f,SummaryItemExpernalLinkWrapper:T}},26760:(e,o,a)=>{const t=a(67294),r=a(45697),{CTACardBody:i,CTACardContent:s,CTACardFooter:l,CTACardIcon:n,CTACardText:d,CTACardWrapper:u}=a(91894),c=({aspectRatio:e,children:o,url:a})=>t.createElement(u,{aspectRatio:e},t.createElement(s,null,t.createElement(i,null,t.createElement(d,{href:a},o)),t.createElement(l,null,t.createElement("a",{href:a},t.createElement(n,null)))));c.propTypes={aspectRatio:r.arrayOf(r.number),children:r.node.isRequired,url:r.string.isRequired},c.defaultProps={aspectRatio:[1,1]},e.exports=c},54866:(e,o,a)=>{e.exports=a(26760)},91894:(e,o,a)=>{const{default:t}=a(51117),{BREAKPOINTS:r}=a(85326),{calculateSpacing:i,getColorToken:s,getDecoration:l,minScreen:n}=a(79720),{BaseLink:d}=a(74327),u=a(32574),c=t.div.withConfig({displayName:"CTACardWrapper"})`
  position: relative;
  border-radius: ${({theme:e})=>l(e,"cardRadiusSm")};
  background-color: ${s("colors.discovery.body.brand.background")};
  padding-top: ${({aspectRatio:e})=>e[1]/e[0]*100}%;

  ${n(r.md)} {
    border-radius: ${({theme:e})=>l(e,"cardRadiusMd")};
  }

  ${n(r.lg)} {
    border-radius: ${({theme:e})=>l(e,"cardRadiusLg")};
  }
`,h=t.div.withConfig({displayName:"CTACardContent"})`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-direction: column;
  padding: 0 ${i(3)} ${i(2)}
    ${i(3)};

  ${n(r.lg)} {
    padding: 0 ${i(5)} ${i(5)}
      ${i(5)};
  }
`,p=t.div.withConfig({displayName:"CTACardBody"})`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
`,m=t.div.withConfig({displayName:"CTACardFooter"})`
  height: ${i(6)};
`,g=t(d).withConfig({displayName:"CTACardText"})``;g.defaultProps={colorToken:"colors.discovery.body.brand.heading",typeIdentity:"typography.definitions.discovery.hed-core-secondary"};const C=t(u).withConfig({displayName:"CTACardIcon"})`
  border-radius: 50%;
  background-color: ${s("colors.discovery.body.brand.context-signature")};
  width: ${i(6)};
  height: ${i(6)};
  fill: ${s("colors.discovery.body.brand.context-texture")};
`;e.exports={CTACardBody:p,CTACardContent:h,CTACardFooter:m,CTACardIcon:C,CTACardText:g,CTACardWrapper:c}},3258:(e,o,a)=>{const{defineMessages:t}=a(36319);e.exports=t({ctaMessage:{id:"VersoFilterableSummaryList.CTAMessage",defaultMessage:"See more {groupName} recipes",description:"Message to display in the CTACard"}})},64767:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.childTobeRendered=o.modifyItemObjectBasedOnContentType=void 0,o.modifyItemObjectBasedOnContentType=(e,o,a)=>("cnevideo"===o&&a&&(e.image=Object.assign(Object.assign({},e.image),{url:(null==e?void 0:e.url)||"",dangerousHed:e.dangerousHed||""})),e),o.childTobeRendered=e=>e.filter((e=>{var o,a,t,r,i,s,l;return((null===(a=null===(o=null==e?void 0:e.props)||void 0===o?void 0:o.image)||void 0===a?void 0:a.id)||(null===(t=null==e?void 0:e.props)||void 0===t?void 0:t.aspectRatio)||"cnevideo"===(null===(r=null==e?void 0:e.props)||void 0===r?void 0:r.contentType)&&((null===(s=null===(i=null==e?void 0:e.props)||void 0===i?void 0:i.image)||void 0===s?void 0:s.scriptUrl)||(null===(l=null==e?void 0:e.props)||void 0===l?void 0:l.url)))&&e}))}}]);
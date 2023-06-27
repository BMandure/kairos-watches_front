(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[4848],{42813:(e,t,o)=>{const a=o(94184),i=o(45697),l=o(67294),{default:r}=o(45698),{trackComponent:n}=o(40199),{processLinks:s,processCeros:d,processTiktok:c,processSidebarHeadings:p}=o(54436),m=o(86982),g=o(85086),{BodyWrapper:u}=o(81717),h=new r({a:s,blockquote:({props:e})=>({type:m,props:e}),ceros:d,h2:p,tiktok:c,"inline-embed":g}),b=({body:e,className:t,children:o,shouldDisableMaxWidth:i,shouldEnableDataJourneyHook:r=!0,shouldEnableFullArticleInverted:s})=>{l.useEffect((()=>{n("Body")}),[]);const d={className:a("body",t),shouldDisableMaxWidth:i,shouldEnableFullArticleInverted:s};return r&&(d["data-journey-hook"]="client-content"),l.createElement(u,Object.assign({},d,{"data-testid":"BodyWrapper"}),o||h.convert(e))};b.propTypes={body:i.array,children:i.node,className:i.string,shouldDisableMaxWidth:i.bool,shouldEnableDataJourneyHook:i.bool,shouldEnableFullArticleInverted:i.bool},b.defaultProps={body:["div"],shouldDisableMaxWidth:!1},e.exports=b},94753:(e,t,o)=>{e.exports=o(42813)},76559:(e,t,o)=>{const a=o(67294),i=o(41609),l=o(45697),{useIntl:r}=o(36319),{calculateSpacing:n}=o(79720),{getSlots:s}=o(86972),d=o(67924),c=o(41334),p=o(32168),{Disclaimer:m}=o(5626),g=o(85650),{trackComponent:u}=o(40199),{componentTracking:h,googleAnalytics:b}=o(28601),{CarouselWrapper:y,ChipWrapper:C,EditorCard:f,EditorDescription:E,EditorDetails:$,EditorName:T,EditorResponsiveAsset:k,EditorsPicksCarousel:S,EditorTitle:D,FilterableSummaryListDynamicGridItemLayout:P,FilterableSummaryListGrid:w,FilterableSummaryListWrapper:v,FilterableSummaryListGridFullBleed:N,TitleWrapper:B,TitleToggleChipListWrapper:A}=o(78153),{ArticleGalleryCarouselBtnWrapper:x,ArticleGalleryCarouselButton:L}=o(28642),G=o(12102).Z,F={spacing:{sm:n(1.5),xl:n(2)},width:{sm:"60%",lg:"27%",xl:`calc(24% - ${n(1.5)})`,xxl:`calc(21% - ${n(1.5)})`}},I=({affiliateDisclaimer:e,buttonConfig:t,children:o,className:l,controlButtonIcon:n,controlPlacement:I,controlPosition:W,dangerousDek:M,dangerousHed:U,defaultToggleChipTitle:H,editor:R,hasBorderBottom:q,hasGridBottomPadding:O,hasCarouselSliderPagination:z,hasControls:j,hasCustomSlider:V,hasImpressionTracking:_,hasNavigationButtonVariation:J,hasNoHorizontalScrollCarousel:K,paginationStyle:Z,hasPadding:Q,hasPagination:X,hasProductDisclaimerAlternativeStyle:Y,hasTitleMarginTop:ee,hasTitleNoMargin:te,hasToggleGridColor:oe,hasHigherHorizontalPadding:ae,sectionTitleVariation:ie,selectedToggleChipTitle:le,shouldAppendFilterInUrl:re,shouldChipsRedirectOnClick:ne,shouldDisplaySingleSlot:se,shouldNotDisplayAllLabel:de,shouldEnableBundleComponentAnalytics:ce,shouldEnableProductDisclaimer:pe,shouldUseAlternativeTitleStyle:me,hasCarouselControl:ge,toggleChipRole:ue,trackingNamespace:he,isDotClickable:be,layout:ye,pos:Ce,gridConfig:fe,isEditorsPicksCarousel:Ee,shouldAffiliateDisclaimerPlpEnable:$e,isPlpCurated:Te,hideDesktopPagination:ke,isUpcEnabled:Se})=>{a.useEffect((()=>{u("FilterableSummaryList")}),[]);const{formatMessage:De}=r(),{slots:Pe,urlData:we}=s(o),ve=Object.keys(Pe),[Ne,Be]=a.useState(ve),[Ae,xe]=a.useState(Ne[0]),[Le,Ge]=a.useState(H),Fe=U||M,Ie=(null==he?void 0:he.toggle)||U,We=(null==he?void 0:he.card)||U;if(0===Ne.length)return null;const Me=Ne.length>1||se,Ue=t.hasCtaLink?De(G.atArticleGalleryCarouselBtnTextWithCtaLink,{categoryName:t.name}):De(G.atArticleGalleryCarouselBtnText,{categoryName:t.name}),{isDynamicGridItemLayout:He,shouldDisplayDenseGrid:Re}=fe||{},qe=()=>a.Children.map(Pe[Ae].props.children,((e,t)=>{const o=h.addDataSectionTitleAttribute(ce,`${We}/${Ae}/`,t,!1),i=a.cloneElement(e,{analyticsDataAttribute:o});return a.createElement("div",null,i)})),Oe=()=>a.createElement(y,null,a.createElement(m.TextCenterNoTopRule,{isEnabled:pe&&ge,hasHigherHorizontalPadding:ae,hasProductDisclaimerAlternativeStyle:Y,disclaimerHtml:e}),a.createElement(g,{hideDesktopPagination:ke,hasControls:j,hasNavigationButtonVariation:J,hasPagination:X,controlButtonIcon:J?"ArrowIcon":n,controlPlacement:I,controlPosition:W,isDotClickable:be,hasPadding:Q,hasNoHorizontalScrollCarousel:K,hasImpressionTracking:_,paginationStyle:z&&"slider"===Z?Z:"bullet",isPlpCurated:Te,hasCustomSlider:z&&V,dangerousHed:Fe,pos:Ce},a.Children.map(Pe[Ae].props.children,((e,t)=>{const o=h.addDataSectionTitleAttribute(ce,`${We}/${Ae}/`,t,!1),i=a.cloneElement(e,{analyticsDataAttribute:o}),l=`${Fe}/${Ae}`;return a.createElement(g.CarouselItem,Object.assign({},ce,F,{key:`${Ae}-${t}`,carouselTitle:l,carouselItemIndex:t,carouselItemName:e.props.dangerousHed,pos:Ce,isUpcEnabled:Se}),i)}))),t.showButton&&t.url&&a.createElement(x,null,a.createElement("div",{className:"more-products"},a.createElement(L,{className:"article-gallery__more-button",label:Ue,btnStyle:"outlined",ariaLabel:Ue,href:t.hasCtaLink?t.url:`/products/shop${t.url}`,inputKind:"link"}))));return a.useEffect((()=>{var e;{const t=decodeURIComponent(null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.hash),o=Ne.findIndex((e=>`#${e.toLowerCase()}`===t.toLowerCase()));xe(Ne[o>=0?o:0])}}),[Ne]),a.createElement(v,{className:l,hasToggleGridColor:oe,hasPadding:Q,hasBorderBottom:q},a.createElement(A,{shouldUseAlternativeTitleStyle:me},Fe&&a.createElement(B,{className:"section-title",hasPadding:Q,hasTitleMarginTop:ee,as:p[ie],dangerousHed:U,dangerousDek:M,hasTitleNoMargin:te,affiliateDisclaimer:e,shouldAffiliateDisclaimerPlpEnable:$e,hasHigherHorizontalPadding:ae,hasProductDisclaimerAlternativeStyle:Y}),Me&&a.createElement(C,{className:"clip-list",hasToggleGridColor:oe,hasPadding:Q},a.createElement(c,{contentAlign:"center",layout:"nowrap",hasToggleGridColor:oe,label:Le},Ne.map(((e,t)=>{const o=h.addDataSectionTitleAttribute(ce,`${Ie}/${e}`),i=e===Ae;return de&&"All"===e?null:a.createElement(d,{index:t,analyticsDataAttribute:o,key:e,isChecked:i,hasToggleGridColor:oe,onChange:t=>((e,t)=>{var o;xe(t),se&&(e.detail.checked?(Be([t]),le&&Ge(le)):(xe(ve[0]),Be(ve),Ge(H))),o=t,b.emitUniqueGoogleTrackingEvent("toggle-click",{clickText:o,clickType:"body"})})(t,e),isAnchorUrl:re,redirectUrl:we[t],shouldUrlRedirect:ne,shouldDisplaySingleChip:se,role:ue},e)}))))),Ee&&!i(R)?a.createElement(S,null,a.createElement(f,null,R.editorPhoto&&a.createElement(k,Object.assign({},R.editorPhoto)),a.createElement($,null,a.createElement(T,null,R.name),a.createElement(D,null,R.title)),a.createElement(E,null,R.editorNote)),Oe()):function(){switch(ye){case"GridFourColumns":return He?a.createElement(P,{shouldDisplayDenseGrid:Re,hasGridBottomPadding:O,isUpcEnabled:Se},qe()):a.createElement(w,{isUpcEnabled:Se},qe());case"FullBleed":return a.createElement("div",null,qe());case"FullBleedSideBySideContent":return a.createElement(N,null,qe());default:return Oe()}}())};I.propTypes={affiliateDisclaimer:l.string,buttonConfig:l.object,children:l.node.isRequired,className:l.string,controlButtonIcon:l.oneOf(["ChevronIcon","ArrowIcon"]),controlPlacement:l.oneOf(["right","space-between"]),controlPosition:l.oneOf(["top","bottom","center"]),dangerousDek:l.string,dangerousHed:l.string,defaultToggleChipTitle:l.string,editor:l.object,gridConfig:l.object,hasBorderBottom:l.bool,hasCarouselControl:l.bool,hasCarouselSliderPagination:l.bool,hasControls:l.bool,hasCustomSlider:l.bool,hasGridBottomPadding:l.bool,hasHigherHorizontalPadding:l.bool,hasImpressionTracking:l.bool,hasNavigationButtonVariation:l.bool,hasNoHorizontalScrollCarousel:l.bool,hasPadding:l.bool,hasPagination:l.bool,hasProductDisclaimerAlternativeStyle:l.bool,hasTitleMarginTop:l.bool,hasTitleNoMargin:l.bool,hasToggleGridColor:l.bool,hideDesktopPagination:l.bool,isDotClickable:l.bool,isEditorsPicksCarousel:l.bool,isPlpCurated:l.bool,isUpcEnabled:l.bool,layout:l.string,paginationStyle:l.string,pos:l.number,sectionTitleVariation:l.string,selectedToggleChipTitle:l.string,shouldAffiliateDisclaimerPlpEnable:l.bool,shouldAppendFilterInUrl:l.bool,shouldChipsRedirectOnClick:l.bool,shouldDisplaySingleSlot:l.bool,shouldEnableBundleComponentAnalytics:l.bool,shouldEnableProductDisclaimer:l.bool,shouldNotDisplayAllLabel:l.bool,shouldUseAlternativeTitleStyle:l.bool,toggleChipRole:l.string,trackingNamespace:l.shape({toggle:l.string,card:l.string})},I.displayName="FilterableSummaryList",I.defaultProps={buttonConfig:{name:"",showButton:!1,url:""},controlButtonIcon:"ChevronIcon",controlPlacement:"space-between",controlPosition:"center",hasControls:!0,hasHigherHorizontalPadding:!1,hasImpressionTracking:!1,hasNoHorizontalScrollCarousel:!1,hasPagination:!0,hasTitleMarginTop:!1,isDotClickable:!1,isEditorsPicksCarousel:!1,shouldAppendFilterInUrl:!0,shouldChipsRedirectOnClick:!1,shouldDisplaySingleSlot:!1,shouldEnableBundleComponentAnalytics:!1,shouldEnableProductDisclaimer:!1,shouldNotDisplayAllLabel:!1,shouldUseAlternativeTitleStyle:!1},I.displayName="FilterableSummaryList",e.exports=I},33528:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(76559);e.exports=a(i,"FilterableSummaryList")},78153:(e,t,o)=>{const{css:a,default:i}=o(51117),{calculateSpacing:l,minScreen:r,minMaxScreen:n,getColorToken:s,getTypographyStyles:d,getColorStyles:c}=o(79720),{CarouselControlButton:p,CarouselList:m,CarouselWrapper:g}=o(95764),u=o(48655),{BREAKPOINTS:h}=o(85326),b=o(99956),y=i(u.EvenFour).withConfig({displayName:"FilterableSummaryListGrid"})`
  &.grid-even.grid-items-4 {
    ${r(h.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &&& {
    ${({isUpcEnabled:e})=>e&&`\n      ${n(0,h.md)} {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n        \n          padding-right: ${l(2)};\n          padding-left: ${l(2)};\n          column-gap: ${l(1)};\n        \n      }\n      \n        padding-right: ${l(3)};\n        padding-left: ${l(3)};\n        column-gap: ${l(2)};\n      \n    `}
  }

  &.grid-even {
    ${n(0,h.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${l(3)};
      padding-left: ${l(3)};
    }
    padding-right: ${l(4)};
    padding-left: ${l(4)};
  }

  &.grid {
    row-gap: ${l(6)};
  }
`,C=i(u.EvenFour).withConfig({displayName:"FilterableSummaryListGridFullBleed"})`
  &.grid-even.grid-items-4 {
    ${n(0,h.md)} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      padding-top: ${l(3)};
      padding-right: ${l(1)};
      padding-left: ${l(1)};
    }
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: ${l(3)};
    padding-left: 0;
    row-gap: ${l(4)};
  }
`,f=i(u.DynamicGridItemLayout).withConfig({displayName:"FilterableSummaryListDynamicGridItemLayout"})`
  &.grid-even.grid-items-4 {
    ${r(h.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &&& {
    ${({isUpcEnabled:e})=>e&&`\n      ${n(0,h.md)} {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n        \n          padding-right: ${l(2)};\n          padding-left: ${l(2)};\n          column-gap: ${l(1)};\n        \n      }\n      \n        padding-right: ${l(3)};\n        padding-left: ${l(3)};\n        column-gap: ${l(2)};\n      \n    `}
  }

  &.grid-even {
    ${n(0,h.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${l(3)};
      padding-left: ${l(3)};
    }
    padding-right: ${l(4)};
    padding-left: ${l(4)};
  }

  &.grid {
    row-gap: ${l(6)};
    ${({shouldDisplayDenseGrid:e=!0})=>!e&&"grid-auto-flow:row;"}

    ${({hasGridBottomPadding:e=!1})=>e&&`padding-bottom:${l(8)};`}
  }
`,E=i.section.withConfig({displayName:"FilterableSummaryListWrapper"})`
  ${({theme:e,hasBorderBottom:t})=>t&&`border-bottom: 1px solid ${s(e,"colors.consumption.lead.standard.divider")};`}

  ${({hasPadding:e,hasToggleGridColor:t})=>e&&!t?`padding: ${l(4)} 0 ${l(4)};`:""}
`,$=i.div.withConfig({displayName:"TitleToggleChipListWrapper"})`
  ${({shouldUseAlternativeTitleStyle:e})=>e&&a`
      .section-title {
        margin: 0;
        border-top: none;
        padding-top: 0;

        @media (max-width: ${h.md}) {
          h2 {
            text-align: center;
          }
        }
      }

      @media (max-width: ${h.md}) {
        .list-wrapper {
          overflow-y: hidden;
          overflow-x: scroll;

          &::-webkit-scrollbar {
            display: none;
          }
        }
      }

      @media (min-width: ${h.md}) {
        ${c("border-color","colors.consumption.lead.standard.context-signature")};

        display: flex;
        align-items: center;
        border-top: 2px solid;
        gap: 2rem;

        .clip-list {
          margin: 0;

          .list-wrapper {
            padding: 0;
            gap: ${l(3)};

            button {
              border-radius: 0;
              background: none;
              padding: 0.2rem 0;
              font-size: 13px;
              font-weight: bold;

              &[aria-checked='false'] {
                ${c("color","colors.interactive.base.border")};
              }

              &[aria-checked='true'] {
                ${c("color","colors.interactive.base.black")};
                border-bottom: 1px solid;
              }

              &:hover,
              &:focus {
                box-shadow: none;
              }
            }
          }
        }
      }
    `}
`,T=i.div.withConfig({displayName:"TitleWrapper"})`
  ${({hasTitleMarginTop:e})=>{const t=l(4);return`margin: ${e?t:"0"} 0 ${t} 0;`}}

  ${({hasPadding:e})=>e&&`padding-left: ${l(3)};\n    padding-right:  ${l(3)};\n   `}
  
  ${({hasTitleNoMargin:e})=>e&&"margin: 0;"}
`,k=i.div.withConfig({displayName:"ChipWrapper"})`
  ${({hasToggleGridColor:e})=>e?`padding-bottom: ${l(4)};`:`margin: ${l(4)} 0 0 0;`}
`,S=i.div.withConfig({displayName:"CarouselWrapper"})`
  ${p} {
    margin-top: 1rem;

    &:disabled {
      display: none;
    }
  }
`,D=i.section.withConfig({displayName:"EditorsPicksCarousel"})`
  display: grid;
  grid-template-columns: 100%;
  margin-top: ${l(4)};
  overflow-x: hidden;
  @media (min-width: ${h.lg}) {
    grid-column-gap: ${l(4)};
    grid-template-columns: calc(20% - ${l(4)}) 80%;
    ${g} {
      margin-top: 0;
    }
  }
  ${m} {
    margin: 0;
  }
`,P=i.div.withConfig({displayName:"EditorCard"})`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  @media (min-width: ${h.lg}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, max-content);
    margin: ${l(4)} 0;
  }
`,w=i(b).withConfig({displayName:"EditorResponsiveAsset"})`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`,v=i.div.withConfig({displayName:"EditorDetails"})`
  margin-left: ${l(1)};
  @media (min-width: ${h.lg}) {
    grid-column: 1;
    margin: ${l(1)} 0 0;
  }
`,N=i.div.withConfig({displayName:"EditorName"})`
  ${({theme:e})=>d(e,"typography.definitions.consumptionEditorial.subhed-aux-secondary")};
`,B=i.div.withConfig({displayName:"EditorTitle"})`
  ${({theme:e})=>d(e,"typography.definitions.globalEditorial.accreditation-feature")};
`,A=i.div.withConfig({displayName:"EditorDescription"})`
  grid-column: 1 / span 2;
  margin-top: ${l(1.5)};
  ${({theme:e})=>d(e,"typography.definitions.consumptionEditorial.description-embed")}
  @media (min-width: ${h.lg}) {
    margin-top: ${l(2.5)};
  }
`;e.exports={CarouselWrapper:S,ChipWrapper:k,EditorCard:P,EditorDescription:A,EditorDetails:v,EditorName:N,EditorResponsiveAsset:w,EditorsPicksCarousel:D,EditorTitle:B,FilterableSummaryListDynamicGridItemLayout:f,FilterableSummaryListGrid:y,FilterableSummaryListWrapper:E,FilterableSummaryListGridFullBleed:C,TitleWrapper:T,TitleToggleChipListWrapper:$}},12102:(e,t,o)=>{const a=o(36319);t.Z=(0,a.defineMessages)({atArticleGalleryCarouselBtnText:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnText",defaultMessage:"VIEW ALL {categoryName}",description:"Article and Gallery carousel button text"},atArticleGalleryCarouselBtnTextWithCtaLink:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnTextWithCtaLink",defaultMessage:"{categoryName}",description:"Article and Gallery carousel button text for cta link"}})},14694:(e,t,o)=>{const a=o(45697),i=o(67294),l=o(94184),{BlockquoteEmbedWrapper:r,BlockquoteEmbedContent:n,BlockquoteEmbedFooter:s,BlockquoteEmbedCite:d}=o(45470),{trackComponent:c}=o(40199),p=({attributes:e,children:t,citeUrl:o,className:a,dangerousAttribution:p,hasParagraphMargin:m,hasSmallMargins:g,hasTopBorder:u,shouldUseBodyColor:h})=>(i.useEffect((()=>{c("BlockquoteEmbed")}),[]),i.createElement(r,Object.assign({},e,{cite:o,hasTopBorder:u,hasSmallMargins:g,className:l(a,"blockquote-embed")}),i.createElement(n,{hasParagraphMargin:m,shouldUseBodyColor:h,className:"blockquote-embed__content"},t),p&&i.createElement(s,null,i.createElement(d,{dangerouslySetInnerHTML:{__html:p}}))));p.propTypes={attributes:a.object,children:a.oneOfType([a.arrayOf(a.node),a.node]).isRequired,citeUrl:a.string,className:a.string,dangerousAttribution:a.string,hasParagraphMargin:a.bool,hasSmallMargins:a.bool,hasTopBorder:a.bool,shouldUseBodyColor:a.bool},p.defaultProps={hasSmallMargins:!1,hasTopBorder:!0,shouldUseBodyColor:!1},p.displayName="BlockquoteEmbed",e.exports=p},86982:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(14694);e.exports=a(i,"BlockquoteEmbed")},75985:(e,t,o)=>{const a=o(67294),i=o(45697),{trackComponent:l}=o(40199),r=({children:e,name:t})=>{if(a.useEffect((()=>{l("Slot")}),[]),!t)throw new Error("A slot must contain a name!");return e};r.propTypes={children:i.node.isRequired,name:i.string.isRequired},e.exports={Slot:r,getSlots:(e,t=[])=>{const o=new Set(t),i={};let l;const n=[];return a.Children.forEach(e,(e=>{l=e.props.name,n.push(e.props.url),e.type===r&&l&&(0===o.size||o.has(l))&&(i[l]=e)})),{slots:i,urlData:n}}}},86972:(e,t,o)=>{e.exports=o(75985)}}]);
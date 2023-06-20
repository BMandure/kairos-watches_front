(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[4446],{8172:(n,e,i)=>{const{default:t,createGlobalStyle:a,css:o}=i(51117),{BREAKPOINTS:r}=i(85326),{calculateSpacing:d,getColorStyles:l,getTypographyStyles:p,maxScreen:c,minScreen:s,minMaxScreen:g,getColorToken:m,getLinkStyles:h}=i(79720),{withRecircContextProvider:y}=i(82313),u=y(i(20886)),{getPattern:$}=i(7595),f=i(7279),{ConfiguredDisclaimer:b}=i(5626),{BodyWrapper:A}=i(81717),C=i(16650),{SectionTitleHed:P}=i(80577),{LinkStackContent:w}=i(43487),{GroupCalloutWrapper:x}=i(11628),{RecircMostPopularWrapper:_,RecircMostPopularHeading:v}=i(92352),{StickyBoxWrapper:k,StickyBoxPrimary:S}=i(29659),{IframeEmbedWrapper:B}=i(77957),{ResponsiveCartoonWrapper:T}=i(94007),{GalleryEmbedHr:N}=i(78116),{AssetEmbedAssetContainer:O}=i(42158),{GridItem:R,GridWrapper:G}=i(14134),D=i(65552),{SocialIconsListItem:E}=i(96860),{ResponsiveCartoonCaption:L}=i(94007),{applyCustomBackgroundColor:W}=i(62470),{ConsumerMarketingUnitThemedWrapper:M}=i(77084),{BaseText:I}=i(74327),{CneVideoEmbedContainer:H}=i(56706),j=o`
  ${({pageBackgroundTheme:n})=>n?o`
        ${W(n)};
      `:o`
      ${({theme:n})=>$(n,"page-background")};
    `}
  .grid-layout__content {
    ${s(r.md)} {
      grid-column: 3 / span 8;
    }

    ${s(r.lg)} {
      grid-column: 2 / span 6;
    }

    ${g(r.sm,r.md)} {
      grid-column: 1 / -1;
    }
  }

  .grid-layout--adrail.narrow {
    .container--body-inner {
      ${s(r.md)} {
        grid-column: 1 / -1;
      }
    }

    ${_} {
      &:first-child {
        margin-top: 0;

        ${v} {
          margin-top: 0;
        }
      }
    }
  }

  .container--body {
    grid-gap: 20px;
  }

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,z=t(u).withConfig({displayName:"ArticlePageBase"})`
  &&& {
    ${j}
    ${({shouldHideBaseTopPadding:n})=>n&&"padding-top : 0;"}
    ${({hideNav:n,shouldPrioritizeSeriesPagination:e,hasContentHeaderLogo:i})=>!e&&i&&(n=>n?"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transform: translateY(-150%);\n      transition: all 1000ms ease;\n    }\n    ":"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transition: all 500ms ease;\n    }\n")(n)}
  }
`,F=a`
    .channel--body {
      ${j}
    }
    
    .body__container {
      grid-column: 1/ -1;
    
      ${s(r.md)} {
        grid-column: 3 / span 8;
      }
    }
  
    /* 1. required to enforce proper alignment when text may be less than a full line
       2. remove extra top spacing added by default paragraph margins */
      .article__body {
        margin-bottom: ${d(2)};
        width: 100%; /* 1 */
  
        p:first-child:not(.callout--group-item):not(.upc-brandName) {
          margin-top: 0; /* 2 */
        }
  
        .small {
          font-variant: small-caps;
          text-transform: lowercase;
          font-style: normal;
        }
  
        .underline {
          text-decoration: underline;
          font-style: normal;
        }

        ${L} .underline {
          font-style: inherit;
        }
      }

      .article-white-background {
        background-color: white;
        padding: 1rem;
      }
  
      .article__body > .body__inner-container > {
        & {
          ${c(r.md)} {
            .grid-items-3${x} {
              ${R}{    
                margin-bottom: ${d(2.5)};
              }

              ${R}:last-child:nth-child(odd) {    
                grid-column: 1 / 3;
              } 
            }
          }
          ${({hideSideBySideViewOnMobile:n})=>n&&`\n            ${c(r.md)} {\n              ${x} {\n                ${R} {\n                  grid-column: 1 / -1;\n                }\n              }\n            }\n          `}

        }

        ${B}, .cne-video-embed {
            &:first-child {
              margin-top: 0;
            }
          }
  
          inline-embed:first-child ${B} {
            margin-top: 0;
          }
      }

      .article__body > .body__inner-container > figure.asset-embed {
        padding: 0 0 ${d(5)} 0;
      }


      .article__body--grid-margins {
        grid-column: 1 / -1;
      }

      /**
       1. have ad span more columns from the right panel
       to have a larger right margin
       2. have it span 3 which is intended in a 12 column grid
       */
       .grid-layout__aside {
         display: none;
     
         ${s(r.lg)} {
           display: block;
           min-width: 300px;
     
           ${k} {
             top: 90px;
           }
         }
     
         ${_} {
           &:first-child {
             margin-top: 0;
     
             ${v} {
               margin-top: 0;
             }
           }
         }
       }
       ${A} {
        ${({shouldEnableFullArticleInverted:n,theme:e})=>n&&`color: ${m(e,"colors.consumption.body.inverted.body")}`}
}

        ${A} {
          ${({dividerColor:n})=>n&&`\n                .body__inner-container  > hr {\n                    background: #${n};\n                    height: 1px;\n                }\n              `}
       }

  `,V=t("div").withConfig({displayName:"PaywallInlineBarrierWithWrapperGrid"})`
  ${({adRail:n})=>!n&&`\n    > ${R} {\n      grid-column: 1 / -1;\n    }`}
`,K=t("div").withConfig({displayName:"ArticlePageLedeBackground"})`
  ${({theme:n})=>$(n,"lede-background")}
`,U=t("div").withConfig({displayName:"ArticlePageContentBackGround"})`
  ${({theme:n})=>$(n,"lede-background")}
  padding-top: ${d(2)};

  @media (min-width: 1208px) {
    padding-top: ${d(4)};
  }

  ${({togglePaddingTop:n,enableACDC:e})=>"large"===n&&`padding-top: ${d(4)};\n       ${s(r.md)} { \n        padding-top: ${d(e?4:6)};\n       }\n  `}

  ${({enableActionBar:n})=>n&&`\n    ${c(r.lg)}{\n      padding-top: ${d(4)};\n    }\n  `}

  ${({togglePaddingTop:n})=>"xlarge"===n&&`${s(r.lg)} {  padding-top: ${d(8)}; }`}
  
    ${({isMobileTruncated:n})=>n&&`\n          position: relative;\n          height: 890px;\n          overflow: hidden;\n  \n          &::before {\n            display: block;\n            position: absolute;\n            bottom: 0;\n            z-index: 1;\n            background: linear-gradient(\n              0deg,\n              rgba(255, 255, 255, 1) 20%,\n              rgba(255, 255, 255, 0) 100%\n            );\n            width: 100%;\n            height: 192px;\n            content: '';\n          }\n  \n          ${s(r.md)} {\n            height: auto;\n            overflow: visible;\n  \n            &::before {\n              display: none;\n            }\n          }\n        `}

  ${({cartoonVariation:n})=>"card"===n&&o`
      ${T}::before, ${T}::after {
        border: none;
      }

      ${T} {
        ${l("background-color","colors.background.brand")};
        border: none;
        padding: ${d(3)} ${d(6)};

        ${s(r.lg)} {
          ${E} a {
            width: ${d(5)};
          }
        }
      }
    `}
`,q=t("div").withConfig({displayName:"ArticlePageChunks"})`
  ${({adRail:n})=>n&&`\n    ${H} {\n      margin-right: auto;\n      margin-left: auto;\n      width: auto;\n    }`}

  .grid:last-child {
    .body__container > .body__inner-container > *:last-child {
      ${N}:last-child {
        display: none;
      }
    }
  }

  ${({horizontalRuleStyle:n})=>"thin"===n&&"\n        .body__container {\n          .callout--has-top-border {\n            border-top-width: 1px;\n          }\n\n          hr {\n            height: 1px;\n          }\n        }\n      "}

  ${({hasTopSpacing:n})=>!n&&`\n        .inset-embedded-lede {\n          @media (min-width: 0px) and (max-width: calc(${r.md} - 1px)) {\n            ${O} {\n              transform: translateX(-50%);  /* 1 */\n              margin-left: 50%;\n              width: 100vw;\n            }\n          }\n        }\n\n        ${s(r.md)} {\n          .body__container {\n            p:first-of-type {\n              margin-top: 0;\n            }\n\n            .inset-embedded-lede {\n              margin-top: 0;\n            }\n          }\n        }\n    `}

  @media print {
    ${G} {
      display: block;
    }

    ${G} > p {
      font-size: 17px;
    }
  }

  ${({pageBackgroundTheme:n})=>n&&".ad.ad--mid-content {\n      .ad-label {\n        color: #1A1A1A;\n      }\n    }"}
`,X=t(f.Utility).withConfig({displayName:"ArticlePageBodyMobileTruncatedBtn"})`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 2;
  margin-left: -100px;
  width: 200px;

  ${s(r.md)} {
    display: none;
  }
`,Y=t(b).withConfig({displayName:"ArticlePageDisclaimer"})`
  ${p("typography.definitions.discovery.subhed-section-collection")}
  p {
    ${p("typography.definitions.globalEditorial.context-secondary")};
    font-style: italic;
  }
  ${({theme:n})=>l(n,"color","colors.consumption.body.standard.body")};
  ${s(r.md)} {
    .grid-layout--adrail & {
      grid-column: 1 / -1;
    }
  }

  span {
    font-style: normal;
  }
`,J=t("div").withConfig({displayName:"ArticlePageChunksContent"})`
  ${({isNarrowContentWell:n})=>n&&`\n        .grid > *:first-child,\n        .body__container {\n          grid-column: 1 / -1;\n\n          ${s(r.lg)} {\n            grid-column: 4 / span 6;\n          }\n        }\n\n        ${T} {\n          .grid--item {\n            grid-column: 1 / -1;\n          }\n        }\n      `}

  ${({shouldBlurText:n})=>{n&&o`
        .grid:first-of-type .body__container p.has-dropcap::first-letter {
          color: transparent;
        }
        ${A} {
          * {
            text-shadow: 0 0 20px
              rgba(
                ${m("colors.consumption.body.standard.body")},
                0.5
              );
            color: transparent;
          }

          a:not(.button) {
            ${({theme:n})=>h(n,"colors.consumption.body.standard.link","colors.consumption.body.standard.link-hover")};
            text-shadow: 0 0 20px
              rgba(
                ${m("colors.consumption.body.standard.link")},
                0.5
              );
          }
        }
      `}}

  ${({hasAdditionalDropcapStyling:n,theme:e})=>n&&`\n      .grid:first-of-type .body__container p.has-dropcap::first-letter {\n        ${p(e,"typography.definitions.consumptionEditorial.display-large")};\n        color: ${m(e,"colors.consumption.body.standard.accent")};\n        font-size: 80px;\n        padding: ${d(2)} ${d(2)} 0;\n        margin: 0;\n      }\n    `}
`,Q=t("article").withConfig({displayName:"ArticlePageMainContent"})`
  ${({shouldBlurText:n})=>n&&"\n        .grid {\n          .body__container {\n            p.has-dropcap,\n            p.has-dropcap__lead-standard-heading {\n              &::first-letter {\n                color: inherit;\n              }\n            }\n          }\n        }\n      "}
`,Z=t(D).withConfig({displayName:"ArticlePageSplitAdRail"})`
  ${k},
  ${k} > ${S} {
    height: 100%;
  }

  > aside > ${k} {
    position: static;
  }
`,nn=t("div").withConfig({displayName:"ArticlePageSplitAdRailContent"})`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${k} {
    margin-bottom: 0;
  }

  > div {
    flex: 1;
  }
`,en=t("div").withConfig({displayName:"ArticlePageSplitAdRailTop"})``,tn=t("div").withConfig({displayName:"ArticlePageSplitAdRailMiddle"})`
  margin-top: 40px;
`,an=t("div").withConfig({displayName:"ArticlePageSplitAdRailBottom"})`
  margin-top: 40px;
`,on=t("div").withConfig({displayName:"ArticlePageBodyGridContainer"})`
  width: 100%;
`,rn=t.div.withConfig({displayName:"ArticlePageChunksGrid"})`
  ${({adRail:n})=>!n&&`\n     > ${R} {\n      grid-column: 1/ -1;\n      ${s(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
  > ${R} {
    margin-bottom: ${d(2)};
  }

  ${({pageBackgroundTheme:n})=>n&&` .ad.ad--in-content {\n        display: none;\n      }\n      ${M} {\n        margin-top: 2rem;\n      }  \n    `}
`,dn=t.div.withConfig({displayName:"ArticlePageContentFooterGrid"})`
  ${R} {
    grid-column: 1 / -1;
    ${s(r.md)} {
      grid-column: 3 / span 8;
    }
    ${({isNarrow:n})=>n&&`\n         ${s(r.md)} {\n            grid-column: 4 / span 6;\n          }\n         `}
  }
`,ln=t.div.withConfig({displayName:"ArticlePageDisclaimerGrid"})`
  ${({adRail:n})=>!n&&`\n    > ${R} {\n      grid-column: 1/ -1;\n      ${s(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,pn=t.div.withConfig({displayName:"ContentWrapperGrid"})`
  ${({isadRail:n})=>!n&&`\n    > ${R} {\n      grid-column: 1/ -1;\n      ${s(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,cn=t(C).withConfig({displayName:"LinkStackArticlePage"})`
  margin: 48px 0;
  padding-bottom: 0;

  ${P} {
    margin: 0;
  }

  ${w} > ul {
    margin-left: 0;
    padding-left: 0;
  }
`,sn=t.div.withConfig({displayName:"ArticlePageActionBarWrapper"})``,gn=t.div.withConfig({displayName:"ArticlePageActionBarContent"})`
  display: flex;
  justify-content: center;
  padding-bottom: ${d(4)};

  ${({isActionBarStickyLargeScreen:n,actionBarHeight:e})=>n&&o`
      ${s(r.lg)} {
        position: absolute;
        left: ${d(4)};
        z-index: 301;
        padding: 0;
        width: fit-content;
        height: ${e}px;

        ${sn} {
          position: sticky;
          top: 50%;
          transition: all 300ms ease-in-out;
          height: fit-content;
        }
      }
    `}
`,mn=t(I).withConfig({displayName:"ArticlePageIssueDate"})`
  display: flex;
  justify-content: center;
  padding-bottom: ${d(4)};
  text-align: center;
`;mn.defaultProps={as:"span",colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.consumptionEditorial.description-feature"},n.exports={ArticlePageBase:z,ArticlePageGlobalStyle:F,ArticlePageLedeBackground:K,ArticlePageContentBackGround:U,ArticlePageChunks:q,ArticlePageBodyMobileTruncatedBtn:X,ArticlePageChunksContent:J,ArticlePageMainContent:Q,ArticlePageDisclaimer:Y,ArticlePageSplitAdRail:Z,ArticlePageSplitAdRailContent:nn,ArticlePageSplitAdRailTop:en,ArticlePageSplitAdRailMiddle:tn,ArticlePageSplitAdRailBottom:an,ArticlePageBodyGridContainer:on,ArticlePageChunksGrid:rn,ArticlePageContentFooterGrid:dn,ArticlePageDisclaimerGrid:ln,ArticlePageActionBarContent:gn,ArticlePageActionBarWrapper:sn,ArticlePageIssueDate:mn,ContentWrapperGrid:pn,LinkStackArticlePage:cn,PaywallInlineBarrierWithWrapperGrid:V}},8679:(n,e,i)=>{"use strict";var t=i(21296),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d={};function l(n){return t.isMemo(n)?r:d[n.$$typeof]||a}d[t.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},d[t.Memo]=r;var p=Object.defineProperty,c=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,h=Object.prototype;n.exports=function n(e,i,t){if("string"!=typeof i){if(h){var a=m(i);a&&a!==h&&n(e,a,t)}var r=c(i);s&&(r=r.concat(s(i)));for(var d=l(e),y=l(i),u=0;u<r.length;++u){var $=r[u];if(!(o[$]||t&&t[$]||y&&y[$]||d&&d[$])){var f=g(i,$);try{p(e,$,f)}catch(n){}}}}return e}},29750:n=>{n.exports=function(n,e,i){return n==n&&(void 0!==i&&(n=n<=i?n:i),void 0!==e&&(n=n>=e?n:e)),n}},74691:(n,e,i)=>{var t=i(29750),a=i(14841);n.exports=function(n,e,i){return void 0===i&&(i=e,e=void 0),void 0!==i&&(i=(i=a(i))==i?i:0),void 0!==e&&(e=(e=a(e))==e?e:0),t(a(n),e,i)}},73935:(n,e,i)=>{"use strict";!function n(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(n){console.error(n)}}(),n.exports=i(64448)},67294:(n,e,i)=>{"use strict";n.exports=i(72408)}}]);
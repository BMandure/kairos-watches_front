(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[2041],{42041:(i,a,e)=>{const{default:n,css:o}=e(51117),{BREAKPOINTS:r,ZINDEX_MAP:t}=e(85326),{applyGridSpacing:d,cssVariablesGrid:m}=e(62470),{calculateSpacing:l,minScreen:g,maxScreen:s,minMaxScreen:p,getColorToken:c,getTypographyStyles:$}=e(79720),y=e(7279),{universalGridCore:u}=e(61774),h=e(4131),{RowWrapper:b}=e(21920),f=e(48655),{GridItem:x}=e(14134),{SummaryRiverSection:w}=e(3183),{SummaryCollageOneGridWithMargin:k}=e(83695),{SectionTitleHed:v}=e(80577),{EmbedBody:C}=e(97893),S=`\n  ${m()}\n  ${d("padding")}\n\n  margin: 0 auto;\n  width: 100%;\n  max-width: ${r.xxl};\n`,_=n(h).withConfig({displayName:"MultiPackageBaseRow"})`
  &:first-child,
  & ~ & {
    ${({hasMarginTopMultiPackageRow:i})=>i?"":"margin-top: 0;"}
  }

  ${({hasRightAndLeftMargin:i})=>i?`\n        ${g(r.md)} {\n          padding: ${l(0)} ${l(8)};\n        }`:""}

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,N=n(y.Utility).withConfig({displayName:"MultiPackageRow"})`
  &&& {
    align-items: center;
    width: auto;
  }
`,M=n(_).withConfig({displayName:"MultiPackageRow"})`
  ${({hasNoTopMargin:i})=>i?"":`margin-top: ${l(7)};`}

  ${({hasLightBgForLinkBanner:i,hasPlpFilterableContainerLightBackgroundColor:a,theme:e,isInvertedTheme:n})=>i||a?`background-color: ${c(e,"colors.discovery.body.light.background")};`:n?`background-color: ${c(e,"colors.consumption.lead.inverted.background")};`:""}

  ${({hasMediumMargin:i,hasNoBottomMargin:a,hasReducedMargin:e,isNativeAd:n})=>i?`margin-bottom: ${l(4)};`:a||n&&e?"margin-bottom: 0;":e?`margin-bottom: ${l(2)};`:`margin-bottom: ${l(7)};`}

  ${({hasMarginBottomMultiPackageRow:i})=>i?`\n          ${g(r.lg)} {\n            margin-bottom: ${l(5)};\n          }\n          ${p(r.md,r.lg)} {\n            margin-bottom: ${l(4)};\n          }\n          ${p(0,r.md)} {\n            margin-bottom: ${l(3)};\n          }`:""}

${({hasNoTopBottomMarginOnMobile:i})=>i?`  ${p(0,r.md)} {\n            margin-top: 0;\n            margin-bottom: 0;\n          }`:""}

  ${({hasStickyLinkBanner:i})=>i?`\n        position: sticky;\n        top: 0px;\n        z-index: ${t.interstitialLayer};\n      `:""}

  /* TODO: this should be a configuration for a layout
     Specificity is required due to star selector in homepage  */
  ${g(r.lg)} {
    ${b}.homepage__half-column-row + && {
      width: 50%;
      max-width: 800px;
      ${v} {
        ${$("typography.definitions.discovery.subhed-section-secondary")};
      }
    }
    .homepage__half-column-row + && > ${k} {
      padding-left: var(--grid-gap);
    }
    ${w} {
      margin: 0 auto;
      max-width: 1600px;
    }
  }
`,B=n(f.WithMargins).withConfig({displayName:"DiscoveryQuoteRow"})`
  ${({hasTopAndBottomBorderQuote:i,theme:a})=>i?`\n    border-top:1px solid ${c(a,"colors.discovery.body.white.divider")};\n\n    border-bottom:1px solid ${c(a,"colors.discovery.body.white.divider")};`:""}

  ${x} {
    grid-column: 1/-1;

    ${g(r.md)} {
      grid-column: 3/11;
    }
  }
`,W=o`
  &.puzzles-games-landing-page {
    .ticker-wrapper {
      margin-bottom: 0;
    }

    .ticker-view > div:nth-child(2) {
      margin-top: ${l(4)};
    }

    .summary-collage-six-puzzles-games .summary-item:first-child h3 {
      ${$("typography.definitions.discovery.description-core")};
      font-size: ${l(4)};
    }

    .verso-features {
      margin-bottom: ${l(4)};
    }

    > div:nth-child(3)
      .summary-collage-six-puzzles-games
      .summary-list--collection-list {
      ${s(r.lg)} {
        padding-top: 0;
      }
    }

    .summary-river-puzzles-games {
      h2 {
        font-size: 24px;
      }

      & > section {
        .summary-item:last-child {
          border-bottom: 0;
        }

        > div {
          margin-bottom: ${l(2)};

          > div:first-child {
            margin-bottom: 0;
          }
        }
      }

      .summary-item {
        padding-top: ${l(2)};
      }
    }

    .summary-item--is-dense .summary-item__asset-container {
      ${p(0,r.xl)} {
        display: block;
      }

      ${g(r.xl)} {
        float: none;
        margin-left: 0;
      }
    }

    .summary-list--collection-list {
      ${p(0,r.lg)} {
        border-top: 0;
        padding-top: 0;
      }
    }

    .summary-list__items .summary-item:not(:first-child) {
      margin-bottom: 0;
      padding-bottom: ${l(2)};
    }

    .summary-list__items .summary-item:first-child {
      ${p(0,r.lg)} {
        padding-bottom: ${l(2)};
      }

      ${g(r.lg)} {
        padding-bottom: 0;
      }
    }

    .summary-collage-six-puzzles-games .summary-item h3 {
      ${$("typography.definitions.discovery.hed-core-secondary")};
    }

    .summary-collage-six-puzzles-games h2,
    .summary-collection-grid h2 {
      ${$("typography.definitions.discovery.subhed-section-primary")};
    }

    .verso-embed-row inline-embed h1 {
      margin: 0;
      font-size: ${l(5.5)};
    }

    .verso-embed-row {
      margin: ${l(4)} 0;
    }

    ${C} {
      max-width: initial;
    }

    .verso-features h2 {
      font-size: 24px;
    }

    .summary-collage-six-puzzles-games h2 {
      font-size: 20px;
    }

    .summary-item__dek > a {
      ${$("typography.definitions.foundation.link-primary")};
      display: block;
      padding-top: ${l(2.5)};
      text-decoration: none;
      color: ${c("colors.interactive.base.brand-primary")};
    }

    .summary-item__dek > a:hover {
      text-decoration: underline;
    }
  }
`,T=n.div.withConfig({displayName:"MultiPackageContainer"})`
  ${({showFooterAdPadding:i})=>i&&`padding-bottom: ${l(10,"px")};`}

  ${({customClass:i})=>i&&"puzzles-games-landing-page"===i&&W}
  ${({hasMarginBottomMultiPackageRow:i})=>i?"\n            .verso-features {\n              && {\n                margin-bottom: 0;\n              }\n            }\n          ":""}
`,P=n.div.withConfig({displayName:"SectionJumpLinksWrapper"})`
  ${({theme:i})=>(i=>`\n    background: ${c(i,"colors.consumption.body.inverted.display-texture")};\n    ${g(r.md)} {\n      width: ${r.md};\n      padding: ${l(3)} ${l(9)} ${l(5)} ${l(9)};\n    }\n    padding: ${l(2)} ${l(5)} ${l(3.5)} ${l(5)};\n    margin: auto;\n    div {\n      div {\n        h1 {\n          text-align: center;\n        }\n        div {\n          a {\n            font-family: Konnect, helvetica, sans-serif;\n            font-style: normal;\n            line-height: ${l(2.4,"rem")};\n            font-size: ${l(2)};\n            &:not(.button):link,\n            &:not(.button):visited {\n              color: rgb(0, 0, 0);\n            }\n          }\n          display: grid;\n          ${g(r.md)} {\n            grid-template-columns: 1fr 1fr 1fr;\n            grid-row-gap: ${l(1.5)};\n          }\n          grid-template-columns: 1fr 1fr;\n          grid-row-gap: ${l(1)};\n        }\n      }\n    }\n  }\n  `)(i)}
`,z=n(M).withConfig({displayName:"MultiPackageReadMore"})`
  display: flex;
  justify-content: center;
`,E=n.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${S}
`,L=n.div.withConfig({displayName:"EventsListWrapper"})`
  ${m()}

  margin: 0 auto;
  width: 100%;
  max-width: ${r.xxl};

  ${g(r.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,O=n.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${S}
`,R=n.div.withConfig({displayName:"NewsletterWrapper"})`
  ${S}

  padding-top: ${l(6)};
  padding-bottom: ${l(6)};

  ${g(r.md)} {
    padding-top: ${l(9)};
    padding-bottom: ${l(9)};
  }
`,I=n.div.withConfig({displayName:"CMUnitWrapper"})`
  ${S}

  ${g(r.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,G=n.div.withConfig({displayName:"SubTopicDiscoveryWrapper"})`
  ${u(!0)}
  ${d("padding")}

  margin: 0 auto;
  width: 100%;
  max-width: ${r.xxl};

  ${g(r.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,D=n.div.withConfig({displayName:"TickerWrapper"})`
  ${({isInvertedTheme:i})=>i?`\n        ${m()}\n        ${d("padding",!0)}`:`${S}`}
`,F=n("div").withConfig({displayName:"MultipackageNoItemsBlock"})`
  ${m()}
  ${d("padding")}
  margin: 0 auto;
  margin-bottom: ${l(4)};
  width: 100%;
  max-width: ${r.xxl};
  color: white;
  font-family: 'LabGrotesque';
  ${({hasRule:i,theme:a})=>i?`\n        &::before {\n          border-top: 1px solid ${c(a,"colors.discovery.body.white.divider")};\n          content: '';\n          grid-column: 1/-1;\n          margin-bottom: ${l(4)};\n          display: block;\n        }\n      `:""}

  h3 {
    margin: 0 auto;
    width: fit-content;
    ${$("typography.definitions.consumptionEditorial.subhed-break-secondary")}
  }

  p {
    font-family: Proxima Nova;
    font-size: 12px;
  }
`,A=n.div.withConfig({displayName:"MultiPackageBodyWrapperGrid"})`
  ${u()}
  ${d("padding")}
`;i.exports={CMUnitWrapper:I,DiscoveryQuoteRow:B,EventsListWrapper:L,MultiPackageContainer:T,MultiPackageRow:M,MultiPackageReadMore:z,NewsFeedWrapper:O,NewsletterWrapper:R,PromoBoxWrapper:E,SubTopicDiscoveryWrapper:G,TickerWrapper:D,MultipackageNoItemsBlock:F,MultiPackageBodyWrapperGrid:A,SectionJumpLinksWrapper:P,UtilityButton:N}},83695:(i,a,e)=>{const{default:n,css:o}=e(51117),{BREAKPOINTS:r}=e(85326),{maxThresholds:t}=e(28657),{applyGridSpacing:d,cssVariablesGrid:m}=e(62470),{RubricLink:l}=e(7320),{SectionTitleRoot:g,SectionTitleHed:s}=e(80577),{calculateSpacing:p,maxScreen:c,minScreen:$,minMaxScreen:y,getTypographyStyles:u,getColorToken:h}=e(79720),{BaseLink:b}=e(74327),{SocialIconsList:f}=e(96860),{SpanWrapper:x}=e(89676),w=n.div.withConfig({displayName:"SummaryCollageOneTitle"})`
  grid-column: 1 / -1;

  ${({isSingleFeature:i})=>!i&&`\n      margin-bottom: ${p(2)};\n\n      ${$(r.md)} {\n        margin-bottom: ${p(1)};\n      }\n\n      ${$(r.lg)} {\n        margin-bottom: ${p(0)};\n      }\n    `}
`,k=n.div.withConfig({displayName:"SummaryCollageOneCtaIcon"})`
  background-color: ${({theme:i})=>h(i,"colors.discovery.lead.secondary.background")};
  background-image: ${({icon:i})=>`url('${i}')`};
  width: ${p(6)};
  height: ${p(6)};

  ${$(r.lg)} {
    margin-right: ${p(2)};
  }

  ${c(`${t.lg}px`)} {
    margin-bottom: ${p(2)};
  }
`,v=n(b).withConfig({displayName:"SummaryCollageOneAnchorLink"})`
  ${u("typography.definitions.foundation.link-primary")}
  display: inline-block;
  margin-bottom: ${p(2)};
  vertical-align: top;

  ${$(r.lg)} {
    margin-bottom: ${({showCtaIcon:i})=>i?0:p(4)};
  }
`,C=n.div.withConfig({displayName:"SummaryCollageOneCtaLink"})`
  grid-column: 1 / -1;
  text-align: center;

  span {
    display: block;
    width: 100%;
    text-align: center;
  }

  ${({showCtaIcon:i})=>i&&`\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      \n      ${$(r.lg)} {\n        flex-direction: row;\n      }\n    `}
`;v.defaultProps={colorSecondaryLinkToken:"colors.interactive.base.dark",colorStaticLinkToken:"colors.interactive.base.brand-primary",linkStyle:"global"};const S=o`
  ${m()}
  ${d("padding")}

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--grid-gap);
  margin: 0 auto;
  width: 100%;
  max-width: ${r.xxl};
  row-gap: var(--grid-gap);

  .summary-item--layout-placement-text-below {
    &.summary-item--text-align-left,
    &.summary-item--text-align-center {
      .summary-item__hed {
        ${u("typography.definitions.discovery.hed-break-out")};
      }

      .summary-item__dek {
        ${u("typography.definitions.discovery.description-feature")};
      }
    }
  }

  .summary-item__hed-link {
    &::after {
      border-bottom: 1px solid
        ${h("colors.discovery.body.white.accent")};
    }
  }

  .summary-item__content:empty {
    display: none;
  }

  ${f} {
    justify-content: center;
  }

  ${$(r.md)} {
    grid-template-columns: repeat(12, 1fr);
  }
`,_=n.div.withConfig({displayName:"SummaryCollageOneItemComponent"})`
  grid-column: 1 / -1;

  &&& {
    border-bottom: 0;

    .summary-item__content {
      margin: 0;
      @media (min-width: 0) and (max-width: ${r.lg}) {
        margin: 0;
      }
    }
    @media (min-width: 0) and (max-width: ${r.md}) {
      padding-bottom: 0;
    }
  }
`,N=o`
  &&& {
    grid-gap: ${p(4)};
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }

  ${_} {
    display: grid;
    align-items: center;
  }

  ${x}.summary-item__image {
    .summary-item__image {
      display: grid;
      justify-items: center;
      ${({hasEnhancedDailyCartoon:i})=>i&&`\n          ${$(r.lg)} {\n            gap: ${p(3)};\n          }\n        `}

      picture {
        max-width: 300px;
        ${$(r.lg)} {
          max-width: 400px;
        }
      }
    }

    .responsive-cartoon__caption {
      margin-top: 0;
      ${$(r.lg)} {
        margin-top: ${({hasEnhancedDailyCartoon:i})=>i?0:p(2)};
        width: 85%;
      }
    }
  }
`,M=o`
  ${y(0,r.lg)} {
    .summary-item__asset-container {
      ${d("margin",!0)};
    }
  }
`,B=o`
  &&& {
    grid-template-rows: unset;
    background-color: ${h("colors.discovery.body.dark.background")};
    max-width: ${r.xxl};

    ${y(r.sm,r.md)} {
      column-gap: ${p(9)};
      margin: ${p(0)};
      padding: ${p(0)};
    }
    ${$(r.md)} {
      column-gap: ${p(3)};
      margin: ${p(0)};
      padding: ${p(5)} ${p(3)};
    }
    ${$(r.lg)} {
      margin: ${p(0)};
      padding: ${p(7)} ${p(6)};
    }
    ${$(r.xl)} {
      column-gap: 2rem;
      margin: ${p(0)};
      padding: ${p(10)} ${p(8)};
    }
    ${$(r.xxl)} {
      column-gap: 2rem;
      margin: auto;
      padding: ${p(10)} ${p(8)};
    }
  }
  ${l} {
    color: ${h("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__rubric {
    color: ${h("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__dek {
    color: ${h("colors.discovery.body.dark.description")};
  }

  .summary-item__hed--hed-core-primary {
    ${u("typography.definitions.discovery.hed-core-primary")}
    color: ${h("colors.discovery.body.dark.heading")};
  }

  .summary-item__hed {
    color: ${h("colors.discovery.body.dark.heading")};
  }

  .summary-item--dark-background-right {
    ${$(r.md)} {
      grid-column: 2 / -2;
      margin: ${p(0)} ${p(-3)};
    }
    ${$(r.lg)} {
      grid-column: 2 / -2;
      margin: ${p(0)} ${p(-3)};
      padding: ${p(0)};
    }
    ${$(r.xl)} {
      grid-column: 2 / -2;
      margin: ${p(0)} ${p(-4)};
      padding: ${p(0)};
    }
    ${$(r.xxl)} {
      grid-column: 2 / -2;
      margin: ${p(0)};
      padding: ${p(0)};
    }

    .summary-item__asset-container {
      ${$(r.md)} {
        margin-left: ${p(-3)};
      }
      ${$(r.xl)} {
        margin-left: ${p(0)};
      }
    }
  }

  .summary-item__content {
    margin: ${p(0)};
    ${$(r.md)} {
      padding-right: ${p(3)};
    }
    ${$(r.lg)} {
      padding-right: ${p(5)};
    }
    ${$(r.xl)} {
      padding-right: ${p(3)};
    }
    ${$(r.xxl)} {
      padding-right: ${p(6)};
    }
  }
`,W=n.div.withConfig({displayName:"SummaryCollageOneGridWithMargin"})`
  ${S}
  ${({isSingleFeature:i})=>i&&N}

  ${({hasFullWidthImage:i})=>i&&M}
  
  ${({isFullBleedDarkBackground:i})=>i&&B}

  ${({hasEnhancedDailyCartoon:i,theme:a})=>i&&o`
      ${y(r.md,`${t.lg}px`)} {
        ${w}, ${_}, ${C} {
          grid-column: 1 / 7;
        }
      }

      ${c(`${t.lg}px`)} {
        &&& {
          gap: ${p(3)};
        }
      }

      ${$(r.lg)} {
        &&& {
          grid-row-gap: 0;
        }

        ${C} {
          margin-top: ${p(4)};
        }

        ${w}, ${_}, ${C} {
          grid-column: 1 / 9;
        }
      }

      ${g} {
        display: flex;
        justify-content: center;

        ${$(r.lg)} {
          margin-bottom: ${p(3)};
        }

        ${s} {
          ${u(a,"typography.definitions.discovery.subhed-section-primary")};
        }
      }
    `}
`,T=n.div.withConfig({displayName:"SummaryCollageOneIsFullBleed"})`
  ${({isFullBleedDarkBackground:i})=>i&&o`
      background-color: ${h("colors.discovery.body.dark.background")};
      max-width: 100%;
    `}
`;i.exports={SummaryCollageOneTitle:w,SummaryCollageOneCtaLink:C,SummaryCollageOneGridWithMargin:W,SummaryCollageOneIsFullBleed:T,SummaryCollageOneItemComponent:_,SummaryCollageOneAnchorLink:v,SummaryCollageOneCtaIcon:k}},97893:(i,a,e)=>{const{default:n,css:o}=e(51117),{BREAKPOINTS:r}=e(85326),{applyGridSpacing:t,cssVariablesGrid:d}=e(62470),{calculateSpacing:m,minScreen:l,getColorToken:g,getTypographyStyles:s,firstLetterDropCap:p}=e(79720),{BaseText:c}=e(74327),$=e(48655),y=e(94753),u=`\n  ${d()}\n  ${t("padding")}\n\n  margin: 0 auto;\n  width: 100%;\n  max-width: ${r.xxl};\n`,h=n.div.withConfig({displayName:"EmbedWrapper"})`
  ${u}

  ${({isEmbedWrapperFullBleed:i})=>i&&o`
      padding-right: 0;
      padding-left: 0;
      max-width: 100%;
    `}
`,b=n.div.withConfig({displayName:"EmbedWrapperHed"})`
  margin-bottom: ${m(2)};
`,f=n(c).withConfig({displayName:"EmbedWrapperDek"})`
  margin: 0 auto ${m(2)};
  padding-right: ${m(1)};
  padding-left: ${m(1)};
  max-width: ${m(75)};
  text-align: center;
  ${s("typography.definitions.consumptionEditorial.description-core")}
`,x=n($).withConfig({displayName:"GridWrapper"})`
  ${u}
`,w=n(y).withConfig({displayName:"EmbedBody"})`
  p.has-dropcap {
    margin-top: ${m(4,"px")};

    &::first-letter {
      ${p};
    }

    &.has-dropcap__lead-standard-heading {
      &::first-letter {
        padding: 0.1em 0.05em 0 0;
        color: ${g("colors.consumption.lead.standard.heading")};
      }
    }
  }
  ${({constrainPagragraph:i})=>i&&`\n      inline-embed{\n        display: block;\n        p {\n          display:inline-block;\n          max-width: ${m(40.875)};\n          ${l(r.lg)} {\n            max-width: ${m(91.5)};\n          }\n        }\n      }\n    `}
`;i.exports={EmbedWrapper:h,EmbedWrapperHed:b,EmbedWrapperDek:f,EmbedBody:w,GridWrapper:x}}}]);
(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[8801],{23780:(e,t,i)=>{const o=i(67294),{useIntl:n}=i(36319),a=i(45697),r=i(84885),s=i(88752),l=i(98288),d=i(44287),c=i(13134),p=i(19688),h=i(19206).Z,g=i(16295),u=i(28910),{ContentHeaderByline:m,ContentHeaderAccreditationSocialIcons:b,ContentHeaderContributorImage:y,ContentHeaderNativeShareButton:S,ContentHeaderBylineContent:v,ContentHeaderDekRewards:C,ContentHeaderAccreditation:w,ContentHeaderDek:f,ContentHeaderSignageLabel:T,SummaryPremiereWrapper:B}=i(19658),D=({venueAwards:e})=>o.createElement(o.Fragment,null,e&&o.createElement(C,{dangerouslySetInnerHTML:{__html:e}}));D.propTypes={venueAwards:a.string};const I=({bylinesBlock:e,contributorImage:t,dangerousDek:i,dividerType:a,shouldRemoveBylineTopMargin:l,hasContributorImageBackground:c,hasDesktopTitleBlockDivider:C,hasLede:I,hasStickySocialIcons:x,hideByLine:k,hideDangerousDek:L,hideSocialIconsOnMobile:E,hideSocialIcons:A,hideTopRating:P,isBusinessContentHeader:H,isMiddleImage:R,isSponsoredContent:N,showSponsorBlock:M,signage:$,sponsorByline:O,sponsoredContentHeaderProps:W,isLiveStoryType:V,metadataVideo:_,publishDateBlock:F,publishDatePosition:j,rating:U,reviewRating:G,shouldShowAuthorsInTitleBlock:z,showContributorImage:Z,socialIconsToHide:K,socialMedia:q,socialTitle:Y,socialDescription:X,pageUrl:J,shouldDisplayPremiereDate:Q,shouldDisplaySignageInline:ee,showNativeShareButton:te,venueAwards:ie,theme:oe})=>{const{rating:ne,count:ae}=U||{},re=D({venueAwards:ie}),se={showDek:!L&&i&&!R,showVenueAwards:ie,showByline:!z&&!N&&!k,showNativeShareButton:te,socialMedia:q},{isLive:le,premiereGap:de,premiereDate:ce}=_,{formatMessage:pe}=n();return o.createElement(w,{className:"content-header__accreditation",shouldShowAuthorsInTitleBlock:z,isBusinessContentHeader:H,hasLede:I,rowWithBottomBorder:C&&("both"===a||"bottom"===a),visibilityInfo:se,"data-testid":"ContentHeaderAccreditation"},se.showDek&&o.createElement(f,{dangerouslySetInnerHTML:{__html:i},as:"div"}),ee&&$&&o.createElement(T,null,$),Q&&ce&&!le&&o.createElement(B,null,o.createElement(u,{premiereDate:ce,premiereGap:de,containerTheme:oe,hideTimeStampIcon:!0})),V&&M&&o.createElement(g,{sponsorByline:O,sponsoredContentHeaderProps:Object.assign({},W),theme:oe}),re,G&&!P&&o.createElement(s,{rating:G}),se.showByline&&o.createElement(m,{isLiveStoryType:V,sponsorName:null==W?void 0:W.sponsorName,showSponsorBlock:M,shouldRemoveBylineTopMargin:l},Z&&t&&o.createElement(y,Object.assign({},t,{sizes:H?"100%":"66px",hasContributorImageBackground:c,isBusinessContentHeader:H})),o.createElement(v,null,e,"bottom"===j&&F)),te?o.createElement(S,null,o.createElement(p,{shareData:{url:J,title:Y,text:X}})):q&&!A&&o.createElement(b,Object.assign({},q,{className:"content-header__social-share",hideSocialIconsOnMobile:E,hasStickySocialIcons:x,socialIconsToHide:K})),!!ne&&!!ae&&o.createElement(d,{averageRatingCount:Math.round(10*ne)/10,hasBorderTop:!0,link:{label:pe(h.readReviews),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:i}=r(t);window.scrollTo(0,i-56)},url:"#reviews"},totalRatingCount:ae}))};I.propTypes={bylinesBlock:a.node,contributorImage:a.shape(l.propTypes),dangerousDek:a.string,dividerType:a.string,hasContributorImageBackground:a.bool,hasDesktopTitleBlockDivider:a.bool,hasLede:a.bool,hasStickySocialIcons:a.bool,hideByLine:a.bool,hideDangerousDek:a.bool,hideSocialIcons:a.bool,hideSocialIconsOnMobile:a.bool,hideTopRating:a.bool,isBusinessContentHeader:a.bool,isLiveStoryType:a.bool,isMiddleImage:a.bool,isSponsoredContent:a.bool,metadataVideo:a.shape({isLive:a.bool,premiereDate:a.string,premiereGap:a.number,series:a.string,videoLength:a.number}),pageUrl:a.string,publishDateBlock:a.node,publishDatePosition:a.string,rating:a.shape(d.propTypes),reviewRating:a.number,shouldDisplayPremiereDate:a.bool,shouldDisplaySignageInline:a.bool,shouldRemoveBylineTopMargin:a.bool,shouldShowAuthorsInTitleBlock:a.bool,showContributorImage:a.bool,showNativeShareButton:a.bool,showSponsorBlock:a.bool,signage:a.string,socialDescription:a.string,socialIconsToHide:a.array,socialMedia:a.shape(c.propTypes),socialTitle:a.string,sponsorByline:a.string,sponsoredContentHeaderProps:a.shape({campaignUrl:a.string,sponsorLogo:a.shape(l.propTypes),sponsorName:a.string}),theme:a.oneOf(["standard","inverted","special"]),venueAwards:a.string},I.defaultProps={hideByLine:!1,hideDangerousDek:!1,hideSocialIcons:!1,isLiveStoryType:!1,metadataVideo:{},shouldDisplayPremiereDate:!1,showSponsorBlock:!1,socialIconsToHide:[],theme:"standard"},e.exports=I},79816:(e,t,i)=>{const o=i(45697),n=i(67294),{CategoriesWrapper:a,CategoriesTitle:r,CategoriesItemList:s,CategoriesItem:l,CategoriesLink:d}=i(21218),c=({title:e,tags:t})=>n.createElement(a,null,n.createElement(r,null,e),n.createElement(s,null,t.map((e=>n.createElement(l,{key:e.name},n.createElement(d,{href:e.slug},e.name))))));c.propTypes={tags:o.array,title:o.string},c.defaultProps={tags:[]},c.displayName="Categories",e.exports=c},21218:(e,t,i)=>{const{default:o}=i(51117),{BaseText:n,BaseLink:a}=i(74327),{calculateSpacing:r,getColorToken:s,getLinkStyles:l}=i(79720),d=o.div.withConfig({displayName:"CategoriesWrapper"})`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-top: ${r(.5)};
`,c=o(n).withConfig({displayName:"CategoriesTitle"})`
  margin-right: ${r(1)};
`;c.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.accreditation",typeIdentity:"typography.definitions.globalEditorial.accreditation-feature"};const p=o.ul.withConfig({displayName:"CategoriesItemList"})`
  margin: 0;
  padding: 0;
  line-height: 1;
`,h=o.li.withConfig({displayName:"CategoriesItem"})`
  display: inline-block;

  &:not(:last-child) {
    &::after {
      margin: 0 ${r(1)};
      color: ${({theme:e})=>s(e,"colors.consumption.lead.standard.divider")};
      content: '|';
    }
  }
`,g=o(a).withConfig({displayName:"CategoriesLink"})`
  ${({theme:e})=>l(e,"colors.consumption.lead.standard.link",null,"global")};
`;g.defaultProps={typeToken:"typography.definitions.globalEditorial.accreditation-core"},e.exports={CategoriesWrapper:d,CategoriesTitle:c,CategoriesItemList:p,CategoriesItem:h,CategoriesLink:g}},86772:(e,t,i)=>{const o=i(94184),n=i(45697),a=i(67294),r=i(65552),{withLightbox:s}=i(92267),l=i(60637),{trackComponent:d}=i(40199),c=i(13134),p=i(36895),h=i(34042),g=i(47109),u=i(93839),m=i(44287),b=i(98288),y=i(49359),S=i(32554),v=i(23780),{useNativeShare:C}=i(8998),{getThemedBylineVariation:w}=i(41317),{ContentHeaderSocialIcons:f}=i(17897),{ContentHeaderWrapper:T,ContentHeaderOffersData:B,ContentHeaderLeadOverride:D,ContentHeaderAccreditationBottom:I,ContentHeaderContainer:x,ContentHeaderPublishDate:k,ContentHeaderLeadAssetWrapper:L,ContentHeaderBylines:E,ContentHeaderPersistentAside:A,PodcastContentHeaderDivider:P,ContentHeaderHedAccreditationWrapper:H}=i(32279),{ContentHeaderDek:R}=i(19658),{getOverrideBehaviour:N}=i(66528),M=({additionalPhotos:e,authorsTitleBlockPosition:t,awards:i,business:n,bylineVariation:r,captionStyle:l,captionWidth:c,className:p,contentHeaderCategories:h,contentSponsorNames:g,contributorImage:m,contributors:b,ctaText:M,dangerousDek:$,dangerousHed:O,dividerType:W,showFullHeaderViewInMobile:V,externalLinks:_,hasDesktopTitleBlockDivider:F,hasLedeLightboxButton:j,hasLightbox:U,hasSlideshow:G,hasStaticPositionedAward:z,hasStickyBoxIndexPosition:Z,hasStickySocialIcons:K,hideArticleIssueDate:q,hideAdaptationByline:Y,hideByLine:X,hideContributors:J,hideDangerousDek:Q,hideRubric:ee,hideSocialIcons:te,hideSocialIconsOnMobile:ie,hideTopDisclaimerOnMobile:oe,hideTopRating:ne,hidePublishDate:ae,interactiveOverride:re,isBusinessContentHeader:se,isLiveStoryType:le,isImagePositionBottomInSmallScreen:de,isStoryLive:ce,issueDate:pe,issueLink:he,lede:ge,ledeSocialIcons:ue,modifiedDate:me,offers:be,persistentAsideAlign:ye,price:Se,publishDate:ve,rating:Ce,reviewRating:we,rubric:fe,rubricVariation:Te,itemsCount:Be,hasContributorImageBackground:De,metadataVideo:Ie,showContentDivider:xe,showContributorImage:ke,showContributorImageOnMobile:Le,showSponsorBlock:Ee,showHeaderButton:Ae,signage:Pe,hideIssueDate:He,hideIssueDatePipeSeparator:Re,hideLede:Ne,hideLedeCaption:Me,hasDisabledCloseOnClickForLightbox:$e,hasNarrowHeader:Oe,podcastPagePrimaryCta:We,podcastPagePrimaryCtaLabel:Ve,shouldDisplayPremiereDate:_e,shouldDisplaySignageInline:Fe,shouldShortenHeadline:je,showFullWidthLeadImage:Ue,showIssueCopyByDate:Ge,showTextOverlayDek:ze,slideShowVariation:Ze,socialIconsToHide:Ke,socialMedia:qe,socialTitle:Ye,socialDescription:Xe,stickySocialAnchorBottom:Je,stickySocialAnchorTop:Qe,theme:et,sponsoredContentHeaderProps:tt,sponsorByline:it,variations:{assetPosition:ot,copyWidth:nt,contentAlign:at,contentPosition:rt,contentStyle:st,hasAccreditationExtraSpacing:lt,hasAccreditationSocialBottomMargin:dt,hasAccreditationSocialTopMargin:ct,shouldRemoveBylineTopMargin:pt,hasDekBottomMargin:ht,hasExtraSpaceBetweenSeparator:gt=!1,hasLedeLightbox:ut,hasNoRowPadding:mt,hasPublishDateBottomPadding:bt,hasInlinePublishDate:yt,hasReducedTitleTopMargin:St,hasTitleWrapperTopSpacing:vt,shouldRemoveContentHedWrapperTopSpacing:Ct,hasXsNavSpacing:wt,hideAccreditationBottomSpacing:ft,ledeAlign:Tt,leadRailAnchor:Bt,mediaWidth:Dt,publishDatePosition:It="bottom",reducedSpacings:xt=!1,hasDivider:kt,showPodcastButton:Lt,shouldUseSmallLede:Et,shouldReduceAccreditationPadding:At,hasDateExtraTopSpacing:Pt},hasNativeShareButton:Ht,shouldEnableNativeShareOnDesktop:Rt,showBreadCrumb:Nt,venueAwards:Mt,hasInvertedCaption:$t,hasInvertedLedeBackground:Ot,variationName:Wt,isFullBleedVideo:Vt,cneVideoEmbedProps:{additionalEmbedParams:_t,dangerousCaption:Ft,isStickyType:jt,scriptUrl:Ut,shouldAutoplay:Gt,shouldHaveTeaser:zt,shouldMute:Zt,variationsVideo:Kt,variationVideoName:qt},shouldAlignCenterWhenNoCaption:Yt})=>{const Xt=void 0!==q?q:He;a.useEffect((()=>{d("ContentHeader",Wt)}),[Wt]);const Jt="middle"===ot,Qt=(e=>e&&1===Object.keys(e).length&&e.author&&1===e.author.items.length)(b)&&yt,ei="storyimage"===N(re),ti=w({bylineVariation:r,theme:et}),ii=a.createElement(y,{authorsPosition:t,business:n,bylineVariation:ti,contentHeaderCategories:h,contentSponsorNames:g,contributors:b,dangerousHed:O,dividerType:W,externalLinks:_,hasContentDivider:xe,hasDesktopTitleBlockDivider:F,hasDivider:kt,hasNoRowPadding:mt,hasExtraSpaceBetweenSeparator:gt,hideAdaptationByline:Y,hideIssueDate:Xt,hideIssueDatePipeSeparator:Re,hideRubric:ee,hidePublishDate:ae,isBusinessContentHeader:se,isLiveStoryType:le,isStoryLive:ce,issueDate:pe,issueLink:he,itemsCount:Be,metadataVideo:Ie,modifiedDate:me,podcastPagePrimaryCta:We,podcastPagePrimaryCtaLabel:Ve,price:Se,publishDate:ve,publishDatePosition:It,rubric:fe,rubricVariation:Te,showIssueCopyByDate:Ge,showPodcastButton:Lt,theme:et});let oi=S;U&&ut&&(oi=e?s(S,e,G,Ze,$e):s(S,[ge]));const{showNativeShareButton:ni,pageUrl:ai}=C(Ht,Rt),ri="hidden"!==t,si=b&&Object.keys(b).length>1,li=b&&!J&&a.createElement(E,{contributors:b,bylineVariation:ti,isCompact:!1,inlinePublishDate:Qt}),di=me&&{datetime:me},ci=!ae&&a.createElement(k,Object.assign({inlinePublishDate:Qt,"data-testid":"ContentHeaderPublishDate",mediaWidth:Dt,contentAlign:at},V&&{hasDateExtraTopSpacing:Pt,hasPublishDateBottomPadding:bt&&(!qe||te||ie)},di),ve),pi=a.createElement(a.Fragment,null,a.createElement(v,{bylinesBlock:li,contributorImage:m,dangerousDek:$,hideDangerousDek:Q,dividerType:W,hasContributorImageBackground:De,hasDesktopTitleBlockDivider:F,hasLede:!!ge,hideTopRating:ne,hasStickySocialIcons:K,hideByLine:X,hideSocialIcons:te,hideSocialIconsOnMobile:ie,isBusinessContentHeader:se,isMiddleImage:Jt,isSponsoredContent:g.length>0,isLiveStoryType:le,isStoryLive:ce,metadataVideo:Ie,publishDateBlock:ci,publishDatePosition:It,rating:Ce,reviewRating:we,shouldDisplayPremiereDate:_e,shouldDisplaySignageInline:Fe,shouldShowAuthorsInTitleBlock:ri,showContributorImage:ke,showSponsorBlock:Ee,signage:Pe,socialIconsToHide:Ke,socialMedia:qe,socialTitle:Ye,socialDescription:Xe,sponsorByline:it,sponsoredContentHeaderProps:tt,pageUrl:ai,showNativeShareButton:ni,venueAwards:Mt,mediaWidth:Dt,contentAlign:at,contentPosition:rt,theme:et,shouldRemoveBylineTopMargin:V&&pt}),a.createElement(B,{ctaText:M,hideTopDisclaimerOnMobile:oe,offers:be,showHeaderButton:Ae,buttonPosition:"content-header"})),hi=Yt&&!(null==ge?void 0:ge.caption);return a.createElement(T,Object.assign({className:o("content-header",{[p]:p}),isLiveStoryType:le,publishDatePosition:It,hasXsNavSpacing:wt,contentAlign:at,assetPosition:ot,shouldShowAuthorsInTitleBlock:ri,captionStyle:l,copyWidth:nt,mediaWidth:Dt,contentStyle:st,contentPosition:rt,isBusinessContentHeader:se,isLedeOverride:ei,shouldShortenHeadline:je,reducedSpacings:xt,hasInvertedCaption:$t,containerTheme:et,shouldBylineContentStacked:si,hasExtraSpaceBetweenSeparator:gt,hasLede:!!ge,hasNarrowHeader:Oe,showBreadCrumb:Nt,showTextOverlayDek:ze},V&&{hasAccreditationExtraSpacing:lt,hasAccreditationSocialTopMargin:ct,hasAccreditationSocialBottomMargin:dt,hasDekBottomMargin:ht,hideAccreditationBottomSpacing:ft,hasLeadAssetTopSpacing:!bt&&(Q||!$||!Jt),hasTitleWrapperTopSpacing:vt,shouldRemoveContentHedWrapperTopSpacing:Ct,hasReducedTitleTopMargin:St,shouldReduceAccreditationPadding:At},{isLedeTextCenterForMobile:hi,showContributorImageOnMobile:Le,isImagePositionBottomInSmallScreen:de}),a.createElement(x,{containerTheme:et,mediaWidth:Dt,showFullWidthLeadImage:Ue,contentStyle:st,contentPosition:rt,isFullBleedVideo:Vt,"data-testid":"ContentHeaderContainer"},!Q&&$&&Jt&&a.createElement(I,null,a.createElement(R,{dangerouslySetInnerHTML:{__html:$},assetPosition:ot,mediaWidth:Dt,"data-testid":"ContentHeaderDek"})),kt&&a.createElement(P,null),a.createElement(H,{isBusinessContentHeader:se},O&&ii,pi),ei?a.createElement(D,{contentPosition:rt,dangerouslySetInnerHTML:{__html:re.markup}}):!Vt&&!Ne&&ge&&a.createElement(L,{awards:i,hasLightboxButton:j,hasStaticPositionedAward:z,hideLedeCaption:Me,hasDisabledCloseOnClickForLightbox:$e,lede:ge,captionWidth:c,shouldRenderRailAnchor:Bt,shouldUseSmallLede:Et,socialIcons:ue,mediaWidth:Dt,containerTheme:et,hasInvertedLedeBackground:Ot,ledeAlign:Tt,showFullWidthLeadImage:Ue,hasLeadAssetTopSpacing:V&&!bt&&(Q||!$||!Jt),isBusinessContentHeader:se,shouldAlignCenterWhenNoCaption:Yt,as:oi,className:o({[`lead-asset--width-${Dt}`]:Dt})}),Vt&&a.createElement(u,{dangerousCaption:Ft,scriptUrl:Ut,shouldAutoplay:Gt,shouldMute:Zt,shouldHaveTeaser:zt,additionalEmbedParams:_t,isStickyType:jt,variationName:qt,variations:Kt})),!ni&&K&&qe&&a.createElement(A,{attributes:{shouldFadeOnMove:!0},align:ye,anchorBottom:Je,anchorTop:Qe,hasStickyBoxIndexPosition:Z,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(f,Object.assign({},qe,{className:"social-icons--share"}))))};M.propTypes={additionalPhotos:n.array,authorsTitleBlockPosition:n.oneOf(["above","below","hidden"]),awards:n.array,business:n.shape({address:n.object,phone:n.string,email:n.string,socialMedia:n.array}),bylineVariation:n.string,captionStyle:n.oneOf(["default","span-content-well"]),captionWidth:n.oneOf(["standard","fullbleed"]),className:n.string,cneVideoEmbedProps:n.shape({additionalEmbedParams:n.object,dangerousCaption:n.string,isStickyType:n.bool,scriptUrl:n.string,shouldAutoplay:n.bool,shouldHaveTeaser:n.bool,shouldMute:n.bool,variationsVideo:n.object,variationVideoName:n.object}),contentHeaderCategories:n.shape({title:n.string,tags:n.array}),contentSponsorNames:n.array,contributorImage:n.shape(b.propTypes),contributors:n.shape(h.propTypes.contributors),ctaText:n.string,dangerousDek:n.string,dangerousHed:n.string,dividerType:n.oneOf(["both","bottom","top"]),externalLinks:n.array,hasContributorImageBackground:n.bool,hasDesktopTitleBlockDivider:n.bool,hasDisabledCloseOnClickForLightbox:n.bool,hasInvertedCaption:n.bool,hasInvertedLedeBackground:n.bool,hasLedeLightboxButton:n.bool,hasLightbox:n.bool,hasNarrowHeader:n.bool,hasNativeShareButton:n.bool,hasSlideshow:n.bool,hasStaticPositionedAward:n.bool,hasStickyBoxIndexPosition:n.bool,hasStickySocialIcons:n.bool,hideAdaptationByline:n.bool,hideArticleIssueDate:n.bool,hideByLine:n.bool,hideContributors:n.bool,hideDangerousDek:n.bool,hideIssueDate:n.bool,hideIssueDatePipeSeparator:n.bool,hideLede:n.bool,hideLedeCaption:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,hideSocialIcons:n.bool,hideSocialIconsOnMobile:n.bool,hideTopDisclaimerOnMobile:n.bool,hideTopRating:n.bool,interactiveOverride:n.shape({markup:n.string,behavior:n.string}),isBusinessContentHeader:n.bool,isFullBleedVideo:n.bool,isImagePositionBottomInSmallScreen:n.bool,isLiveStoryType:n.bool,isStoryLive:n.bool,issueDate:n.string,issueLink:n.string,itemsCount:n.shape(l.propTypes),lede:n.oneOfType([n.shape(b.propTypes),n.shape(g.propTypes),n.shape(u.propTypes)]),ledeSocialIcons:n.shape(c.propTypes),metadataVideo:n.shape({isLive:n.bool,premiereDate:n.string,premiereGap:n.number,series:n.string,videoLength:n.number}),modifiedDate:n.string,offers:n.array,persistentAsideAlign:n.oneOf(["left","left-lead-asset"]),podcastPagePrimaryCta:n.string,podcastPagePrimaryCtaLabel:n.string,price:n.string,publishDate:n.string.isRequired,rating:n.shape(m.propTypes),reviewRating:n.number,rubric:n.shape(p.propTypes),rubricVariation:n.string,shouldAlignCenterWhenNoCaption:n.bool,shouldDisplayPremiereDate:n.bool,shouldDisplaySignageInline:n.bool,shouldEnableNativeShareOnDesktop:n.bool,shouldShortenHeadline:n.bool,showBreadCrumb:n.bool,showContentDivider:n.bool,showContributorImage:n.bool,showContributorImageOnMobile:n.bool,showFullHeaderViewInMobile:n.bool,showFullWidthLeadImage:n.bool,showHeaderButton:n.bool,showIssueCopyByDate:n.bool,showSponsorBlock:n.bool,showTextOverlayDek:n.bool,signage:n.string,slideShowVariation:n.string,socialDescription:n.string,socialIconsToHide:n.array,socialMedia:n.shape(c.propTypes),socialTitle:n.string,sponsorByline:n.string,sponsoredContentHeaderProps:n.shape({campaignUrl:n.string,sponsorLogo:n.shape(b.propTypes),sponsorName:n.string}),stickySocialAnchorBottom:r.propTypes.anchorBottom,stickySocialAnchorTop:r.propTypes.anchorTop,theme:n.oneOf(["standard","inverted","special","live"]),variationName:n.string,variations:n.shape({assetPosition:n.oneOf(["bottom","middle"]),contentAlign:n.oneOf(["center","left"]),contentPosition:n.oneOf(["above","below","start","end"]),contentStyle:n.oneOf(["card","dense-card","item"]),copyWidth:n.oneOf(["grid","fullbleed"]),hasDivider:n.bool,hasAccreditationExtraSpacing:n.bool,hasAccreditationSocialBottomMargin:n.bool,hasAccreditationSocialTopMargin:n.bool,hasTitleWrapperTopSpacing:n.bool,shouldReduceAccreditationPadding:n.bool,shouldRemoveBylineTopMargin:n.bool,hasDateExtraTopSpacing:n.bool,hasDekBottomMargin:n.bool,hasExtraSpaceBetweenSeparator:n.bool,hasInlinePublishDate:n.bool,hasLedeLightbox:n.bool,hasNoRowPadding:n.bool,hasPublishDateBottomPadding:n.bool,hasReducedTitleTopMargin:n.bool,hasXsNavSpacing:n.bool,hideAccreditationBottomSpacing:n.bool,leadRailAnchor:n.bool,ledeAlign:n.oneOf(["default","center"]),mediaWidth:n.oneOf(["small","smallrule","grid","fullbleed"]),publishDatePosition:n.oneOf(["top","bottom"]),reducedSpacings:n.bool,shouldRemoveContentHedWrapperTopSpacing:n.bool,shouldUseSmallLede:n.bool,showPodcastButton:n.bool}),venueAwards:n.string},M.defaultProps={authorsTitleBlockPosition:"hidden",business:{address:{},phone:"",email:"",socialMedia:[],link:""},captionStyle:"default",captionWidth:"standard",cneVideoEmbedProps:{additionalEmbedParams:{},dangerousCaption:"",isStickyType:!1,scriptUrl:"",shouldAutoplay:!0,shouldHaveTeaser:!0,shouldMute:!0,variationsVideo:{},variationVideoName:{}},contentSponsorNames:[],dividerType:"both",externalLinks:[],hasContributorImageBackground:!1,hasDesktopTitleBlockDivider:!1,hasInvertedCaption:!1,hasInvertedLedeBackground:!0,hasLightbox:!1,hasNarrowHeader:!1,hasNativeShareButton:!1,hasSlideshow:!1,hasStaticPositionedAward:!1,hasStickySocialIcons:!0,hideAdaptationByline:!1,hideByLine:!1,hideContributors:!1,hideDangerousDek:!1,hideIssueDatePipeSeparator:!1,hideLede:!1,hideLedeCaption:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIcons:!1,hideSocialIconsOnMobile:!1,isFullBleedVideo:!1,isLiveStoryType:!1,isStoryLive:!1,metadataVideo:{},persistentAsideAlign:"left",shouldAlignCenterWhenNoCaption:!1,shouldDisplayPremiereDate:!1,shouldDisplaySignageInline:!1,shouldEnableNativeShareOnDesktop:!1,shouldShortenHeadline:!1,showContentDivider:!1,showContributorImage:!0,showFullHeaderViewInMobile:!1,showFullWidthLeadImage:!1,showIssueCopyByDate:!1,showSponsorBlock:!1,showTextOverlayDek:!1,socialIconsToHide:[],stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderContainer']",edge:"bottom"},theme:"standard",variations:{assetPosition:"bottom",contentAlign:"center",contentPosition:"above",hasDivider:!1,hasExtraSpaceBetweenSeparator:!1,hasInlinePublishDate:!1,hasLedeLightbox:!1,hasNoRowPadding:!1,hasXsNavSpacing:!1,leadRailAnchor:!1,ledeAlign:"default",publishDatePosition:"bottom",reducedSpacings:!1,shouldUseSmallLede:!1,showPodcastButton:!1}},M.displayName="ContentHeader",e.exports=M},18715:(e,t,i)=>{const o=i(67294),n=i(45697),a=i(98288),r=i(47109),s=i(93839),{transformLegacySources:l}=i(8998),{Image:d}=i(15344),c=({lede:e})=>{if(!e||0===Object.keys(e).length)return null;const t="cnevideo"===e.modelName,i="gallery"===e.modelName,n=l(e);return o.createElement(d,null,!t&&!i&&o.createElement(a,Object.assign({},n)),t&&e.scriptEmbedUrl&&o.createElement(s,{shouldAutoplay:!0,scriptUrl:e.scriptEmbedUrl}),i&&o.createElement(r,Object.assign({},e,{showNoAdsFromParent:!0})))};c.defaultProps={lede:null},c.propTypes={lede:n.oneOfType([n.shape(a.propTypes),n.shape(r.propTypes),n.shape(s.propTypes)])},c.displayName="ImageBlock",e.exports=c},99938:(e,t,i)=>{const o=i(67294),n=i(45697),a=i(31954),r=i(36895),s=i(19688),l=i(34042),d=i(98288),c=i(47109),p=i(93839),h=i(13134),g=i(40284),u=i(18715),m=i(33843),{useNativeShare:b}=i(8998),{TextOverlayLogo:y,TextOverlayLogoLink:S,TextOverlayLogoImage:v,TextOverlayWrapper:C,ImageWrapper:w,Content:f,ContentAlign:T,Hed:B,DekWrapper:D,Dek:I,Figure:x,ContentDivider:k,ContributorImage:L,Accreditation:E,PublishDate:A,DekAndCaption:P,ContentGrid:H}=i(15344),R=i(74656),N=i(16295),M=({background:e,bylineVariation:t,contentAlign:i,contentHeaderCategories:n,contributorImage:c,contributors:p,dangerousDek:M,dangerousHed:$,hasNativeShareButton:O,hideContributors:W,hideDangerousDek:V,hideLedeCaption:_,hidePublishDate:F,hideShareButtons:j,hideRubric:U,isLiveStoryType:G,isStoryLive:z,lede:Z,ledeCaption:K,logoImage:q,logoBaseUrl:Y,modifiedDate:X,numberOfLinesToClamp:J,publishDate:Q,rubric:ee,shouldUseCutomColorLiveIndicator:te,showContentDivider:ie,showContributorImage:oe,showLogo:ne,showTextOverlayDek:ae,showSponsorBlock:re,socialDescription:se,socialMedia:le,socialTitle:de,sponsoredContentHeaderProps:ce,sponsorByline:pe,theme:he})=>{const{showNativeShareButton:ge,pageUrl:ue}=b(O),me="inverted"===he,be=Z&&!_&&(Z.caption&&Z.caption.trim()||Z.credit&&Z.credit.trim()||K),ye=X&&{datetime:X};return o.createElement(C,{"data-testid":"ContentHeader"},o.createElement(w,{background:e,contentAlign:i},o.createElement(u,{lede:Z}),ne&&q?o.createElement(y,null,o.createElement(S,{href:Y},o.createElement(v,Object.assign({},q)))):null,o.createElement(H,{contentAlign:i},o.createElement(f,null,!U&&(G&&z?o.createElement(T,{contentAlign:i},o.createElement(m,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0,shouldUseCutomColorLiveIndicator:te})):ee?o.createElement(T,{contentAlign:i,"data-testid":"ContentHeaderRubric"},o.createElement(r.Inverted,Object.assign({},ee))):null),o.createElement(T,{contentAlign:i},o.createElement(g,Object.assign({},n))),o.createElement(B,{dangerouslySetInnerHTML:{__html:$},"data-testid":"ContentHeaderHed",contentAlign:i}),!V&&M&&ae&&o.createElement(I,{dangerouslySetInnerHTML:{__html:M},contentAlign:i,"data-testid":"ContentHeaderDek",isInverted:me}),ie&&o.createElement(k,{contentAlign:i}),G&&re?o.createElement(N,{sponsorByline:pe,sponsoredContentHeaderProps:Object.assign({},ce)}):null,oe&&c&&o.createElement(L,{contentAlign:i},o.createElement(d,Object.assign({},c))),o.createElement(E,{contentAlign:i},p&&!W&&o.createElement(l,{contributors:p,bylineVariation:t,contentAlign:i,isCompact:!1}),!F&&o.createElement(A,Object.assign({"data-testid":"ContentHeaderPublishDate",contentAlign:i},ye),Q)),!j&&(ge?o.createElement(T,{contentAlign:i,bottomSpacing:4},o.createElement(s,{hasDarkBackground:!0,shareData:{url:ue,title:de,text:se},theme:"inverted"})):le&&o.createElement(T,{contentAlign:i,bottomSpacing:4},o.createElement(h.Footer,Object.assign({},le))))))),(be||M&&!V)&&o.createElement(P,{isInverted:me},be&&o.createElement(x,{contentAlign:i},o.createElement(a,{dangerousCaptionText:Z.caption,dangerousCredit:G?Z.credit||K:Z.credit,topSpacing:0,theme:he})),!V&&M&&!ae&&o.createElement(D,null,o.createElement(R,{isCollapsible:!0,lines:J},o.createElement(I,{dangerouslySetInnerHTML:{__html:M},contentAlign:i,"data-testid":"ContentHeaderDek",isInverted:me})))))};M.defaultProps={background:"gradient",bylineVariation:"Inverted",contentAlign:"center",hideContributors:!1,hideDangerousDek:!1,hideLedeCaption:!1,isLiveStoryType:!1,isStoryLive:!1,logoBaseUrl:"/",numberOfLinesToClamp:2,shouldUseCutomColorLiveIndicator:!1,showContentDivider:!1,showContributorImage:!0,showSponsorBlock:!1,showTextOverlayDek:!1},M.propTypes={background:n.oneOf(["gradient","solid"]),bylineVariation:n.string,contentAlign:n.oneOf(["center","left"]),contentHeaderCategories:n.shape({title:n.string,tags:n.array}),contributorImage:n.shape(d.propTypes),contributors:n.shape(l.propTypes.contributors),dangerousDek:n.string,dangerousHed:n.string,hasNativeShareButton:n.bool,hideContributors:n.bool,hideDangerousDek:n.bool,hideLedeCaption:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,hideShareButtons:n.bool,isLiveStoryType:n.bool,isStoryLive:n.bool,lede:n.oneOfType([n.shape(d.propTypes),n.shape(c.propTypes),n.shape(p.propTypes)]),ledeCaption:n.string,logoBaseUrl:n.string,logoImage:n.shape(d.propTypes),modifiedDate:n.string,numberOfLinesToClamp:n.number,publishDate:n.string,rubric:n.shape(r.propTypes),shouldUseCutomColorLiveIndicator:n.bool,showContentDivider:n.bool,showContributorImage:n.bool,showLogo:n.bool,showSponsorBlock:n.bool,showTextOverlayDek:n.bool,socialDescription:n.string,socialMedia:n.shape(h.propTypes),socialTitle:n.string,sponsorByline:n.string,sponsoredContentHeaderProps:n.shape({campaignUrl:n.string,sponsorLogo:n.shape(d.propTypes),sponsorName:n.string}),theme:n.oneOf(["standard","inverted","special"])},M.displayName="TextOverlay",e.exports=M},63401:(e,t,i)=>{const o=i(99938);e.exports=o},15344:(e,t,i)=>{const{default:o}=i(51117),{getColorToken:n,getTypographyStyles:a,calculateSpacing:r,maxScreen:s}=i(79720),{SocialIconsList:l}=i(96860),{BREAKPOINTS:d}=i(85326),{BaseText:c,BaseLink:p}=i(74327),{SITE_HEADER_TOP_HEIGHT:h,SITE_HEADER_TOP_STICKY_HEIGHT_MD:g,SITE_HEADER_TOP_STICKY_HEIGHT_LG:u}=i(76267),m=i(48655),{GridItem:b}=i(14134),{universalGridCore:y}=i(61774),{applyGridSpacing:S}=i(62470),v=i(98288),C=o.header.withConfig({displayName:"TextOverlayWrapper"})`
  .responsive-clip {
    height: 100%;
  }
  overflow: hidden;
`,w=o.div.withConfig({displayName:"ImageWrapper"})`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: ${({contentAlign:e})=>e};

  @media (orientation: landscape) {
    display: grid;
    min-height: 400px;
  }

  @media (max-width: ${d.md}) {
    display: grid;
    min-height: 667px;
  }

  @media (min-width: ${d.md}) {
    display: grid;
    height: calc(
      100vh - ${h} - ${g}
    );
  }

  @media (min-width: ${d.lg}) {
    display: grid;
    height: calc(
      100vh - ${h} - ${u}
    );
  }

  @media (min-width: ${d.xl}) {
    display: grid;
    min-height: 720px;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${({background:e})=>"gradient"===e?"linear-gradient(to top, rgb(0, 0, 0) 0, transparent 65%)":"rgba(0, 0, 0, 0.65)"};
    content: '';
    pointer-events: none;
  }
`,f=o.div.withConfig({displayName:"Image"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .responsive-asset {
    &::before {
      display: block;
      width: 100%;
      content: '';
    }
  }

  > *,
  picture,
  .responsive-asset picture, /* set to override the css specifity set on this component  */
  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }

  picture {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
`,T=o.div.withConfig({displayName:"ContentAlign"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({contentAlign:e})=>e};
  width: 100%;

  > .social-icons--footer {
    ${l} {
      @media (min-width: ${d.md}) {
        position: relative; /* for bookmark onboarding alert placement */
      }
    }
  }

  ${({socialIconsToHide:e})=>e&&`\n      ${s(d.lg)} {\n        ${(e=>e.map((e=>`\n        .social-icons__list-item--${e} {\n          display: none;\n        }\n    `)).join("\n"))(e)}\n      }\n    `}

  ${({bottomSpacing:e})=>e&&`margin-bottom: ${r(e)}`}
`,B=o.div.withConfig({displayName:"Content"})`
  position: relative;
  z-index: 2;
`,D=o(c).withConfig({displayName:"Hed"})`
  text-align: ${({contentAlign:e})=>e};
`;D.defaultProps={as:"h1",colorToken:"colors.consumption.lead.inverted.heading",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.hed-standard"};const I=o("div").withConfig({displayName:"DekAndCaption"})`
  ${y()}
  ${S("padding")}
  ${({isInverted:e,theme:t})=>e&&`\n      background: ${n(t,"colors.background.dark")};\n    `}
`,x=o.div.withConfig({displayName:"DekWrapper"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${d.md}) {
    grid-column: 3 / span 8;
  }
`,k=o(c).withConfig({displayName:"Dek"})`
  ${({isInverted:e,theme:t})=>e&&`\n    color: ${n(t,"colors.consumption.lead.inverted.description")};\n    `}
  text-align: ${({contentAlign:e})=>e};
`;k.defaultProps={as:"p",bottomSpacing:4,colorToken:"colors.consumption.lead.standard.description",topSpacing:3,typeIdentity:"typography.definitions.consumptionEditorial.description-core"};const L=o(c).withConfig({displayName:"Figure"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${d.md}) {
    grid-column: 1 / span 12;
  }
`;L.defaultProps={as:"figure",colorToken:"colors.consumption.lead.standard.description",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.description-embed"};const E=o.span.withConfig({displayName:"ContentDivider"})`
  display: block;
  margin-top: ${r(4)};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme:e})=>n(e,"colors.consumption.lead.standard.accent")};
  width: 100px;
  ${({contentAlign:e})=>"center"===e&&`margin: ${r(4)} auto 0`}
`,A=o.div.withConfig({displayName:"ContributorImage"})`
  display: block;
  margin-top: ${r(4)};
  border-radius: 50%;
  min-width: 60px;
  max-width: 66px;
  min-height: 60px;
  max-height: 66px;
  overflow: hidden;
  ${({contentAlign:e})=>"center"===e&&`margin: ${r(4)} auto 0`}
`,P=o.div.withConfig({displayName:"Accreditation"})`
  ${({contentAlign:e})=>"center"===e?`margin: ${r(2)} auto`:`margin: ${r(2)} 0`}
`,H=o.time.withConfig({displayName:"PublishDate"}).attrs((({datetime:e})=>({dateTime:e})))`
  ${({theme:e})=>a(e,"typography.definitions.globalEditorial.accreditation-core")}
  display: block;
  margin: ${r(1)} 0 ${r(4)};
  text-align: ${({contentAlign:e})=>e};
  color: ${({theme:e})=>n(e,"colors.consumption.lead.inverted.context-tertiary")};
`,R=o(m.WithMargins).withConfig({displayName:"ContentGrid"})`
  > ${b} {
    grid-column: 1 / span 4;
    margin-bottom: 4.5rem;
    @media (min-width: ${d.md}) {
      grid-column: ${({contentAlign:e})=>"left"===e?"1 / span 10":"2 / span 10"};
    }
  }
`,N=o(v).withConfig({displayName:"TextOverlayLogoImage"})`
  grid-column: 1 / span 4;

  img {
    max-width: 100%;
    height: 100px;
    vertical-align: bottom;
  }
`,M=o(p).withConfig({displayName:"TextOverlayLogoLink"})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${r(2)};

  @media (max-width: ${d.md}) {
    padding-right: calc(1 * ${r(3)});
    padding-left: calc(1 * ${r(3)});
  }
`,$=o.div.withConfig({displayName:"TextOverlayLogo"})`
  margin: auto;
  margin-top: 1.5rem;
`;e.exports={TextOverlayLogo:$,TextOverlayLogoLink:M,TextOverlayLogoImage:N,TextOverlayWrapper:C,ImageWrapper:w,Image:f,ContentAlign:T,Content:B,Hed:D,DekAndCaption:I,DekWrapper:x,Dek:k,Figure:L,ContentDivider:E,ContributorImage:A,Accreditation:P,PublishDate:H,ContentGrid:R}},84327:(e,t,i)=>{const o=i(67294),n=i(45697),{AddressBlockWrapper:a,HeaderContactInformation:r,HeaderSocialInformation:s,HeaderAddressDetails:l}=i(30414),d=i(73993),c=i(42342),{isIOSDevice:p}=i(39037),h=({address:e,email:t,phone:i,socialMedia:n,link:h})=>{if(!e&&!i&&!t)return null;const{street:g,city:u,state:m,postalCode:b,country:y}=e,S=[];[g,u,m,b,y].forEach((e=>{e&&S.push(e)}));let v=h.replace(/^(https?:|)\/\//,"");return v=v.includes("www.")?v:`www.${v}`,o.createElement(a,null,e&&o.createElement(l,{"data-testid":"HeaderAddressDetails",href:"",onClick:e=>(e=>{e.preventDefault(),(null==S?void 0:S.length)>0&&(p()?window.open(`maps://maps.apple.com/maps?q=${S}`):window.open(`https://maps.google.com?q=${S}`))})(e)},o.createElement("div",{className:"StreetAndCity"},g&&o.createElement("span",{"data-testid":"HeaderAddressStreet"},g),u&&o.createElement("span",{"data-testid":"HeaderAddressCity"},S[0]!==u&&", ",u,S[0]!==m&&", ")),o.createElement("div",{className:"StatePostalAndCountry"},m&&o.createElement("span",{"data-testid":"HeaderAddressState"},m),b&&o.createElement("span",{"data-testid":"HeaderAddressPostalCode"},S[0]!==b&&", ",b),y&&o.createElement("span",{"data-testid":"HeaderAddressCountry"},S[0]!==y&&", ",y))),o.createElement(r,null,i&&o.createElement("div",null,o.createElement("a",{"data-testid":"HeaderAddressPhone",href:`tel:${i}`,"aria-label":i,rel:"nofollow noopener noreferrer",target:"_blank"},i)),h&&o.createElement("a",{"data-testid":"HeaderAddressWebUrl",href:h,"aria-label":h,rel:"nofollow noopener noreferrer",target:"_blank"},v)),o.createElement(s,null,t&&o.createElement("a",{"data-testid":"HeaderAddressEmail",href:`mailto:${t}`,"aria-label":t,rel:"nofollow noopener noreferrer",target:"_blank"},o.createElement(d,null)),(null==n?void 0:n.length)>0&&o.createElement("a",{"data-testid":"HeaderAddressInstagram",href:n[0].handle,"aria-label":n[0].network,rel:"nofollow noopener noreferrer",target:"_blank"},o.createElement(c,null))))};h.propTypes={address:n.object,email:n.string,link:n.string,phone:n.string,socialMedia:n.array},e.exports=h},40284:(e,t,i)=>{const o=i(45697),n=i(67294),a=i(79816),r=({hasCategoryEyebrow:e,tags:t,title:i})=>e&&(null==t?void 0:t.length)>0?n.createElement(a,{title:i,tags:t}):null;r.propTypes={hasCategoryEyebrow:o.bool,tags:o.array,title:o.string},e.exports=r},41825:(e,t,i)=>{const o=i(45697),n=i(67294),{ContentHeaderRubricIssueDate:a}=i(81398),r=({hideIssueDate:e,hideIssueDatePipeSeparator:t,issueDate:i,issueLink:o,showIssueCopyByDate:r})=>e||!i?null:n.createElement(a,{name:`${i}${r?" Issue":""}`,url:o,hideIssueDatePipeSeparator:t});r.propTypes={hideIssueDate:o.bool,hideIssueDatePipeSeparator:o.bool,issueDate:o.string,issueLink:o.string,showIssueCopyByDate:o.bool},e.exports=r},16295:(e,t,i)=>{const o=i(45697),n=i(67294),{SponsorContentContainer:a,SponsorImage:r,SponsoredContent:s,SponsoredContentCampaignLink:l}=i(85606),d=i(98288),c=({sponsorByline:e,sponsoredContentHeaderProps:t,theme:i})=>{const{sponsorLogo:o,sponsorName:d,campaignUrl:c}=t;if(!d||!e)return null;const p=`${e} ${d}`;return n.createElement(a,null,n.createElement(l,{additionalRelVals:["sponsored"],href:c},n.createElement(r,Object.assign({},o)),n.createElement(s,{containerTheme:i},p)))};c.propTypes={sponsorByline:o.string,sponsoredContentHeaderProps:o.shape({campaignUrl:o.string,sponsorLogo:o.shape(d.propTypes),sponsorName:o.string}),theme:o.oneOf(["standard","inverted","special"])},c.defaultProps={theme:"inverted"},e.exports=c},85606:(e,t,i)=>{const{default:o}=i(51117),{BREAKPOINTS:n}=i(85326),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=i(79720),l=i(98288),{SpanWrapper:d}=i(89676),c=i(56851),p=o.div.withConfig({displayName:"SponsorContentContainer"})`
  margin-top: ${a(3)};
  text-align: center;
  ${d} {
    display: inline-flex;
    margin-top: 0;
    margin-bottom: 0;
    width: 66px;
  }
`,h=o(l).withConfig({displayName:"SponsorImage"})`
  margin-right: auto;
  margin-left: auto;

  img {
    border: 1px solid;
    border-radius: 50%;
    ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      border-color: ${r(t,"colors.consumption.lead.inverted.divider")};\n    `:`\n    border-color: ${r(t,"colors.consumption.lead.standard.divider")};\n  `)(e,t)}
    width: 64px;
    height: 64px;
  }
`,g=o.div.withConfig({displayName:"SponsoredContent"})`
  ${({theme:e})=>s(e,"typography.definitions.globalEditorial.syndication")}

  display: block;
  margin: ${a(2,"px")} 0 ${a(2,"px")};
  ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      color: ${r(t,"colors.consumption.lead.inverted.syndication")};\n    `:`\n    color: ${r(t,"colors.consumption.lead.standard.syndication")};\n  `)(e,t)}

  @media (min-width: 0) and (max-width: ${n.md}) {
    margin: ${a(1.5,"px")} 0 ${a(1.5,"px")};
  }
`,u=o(c).withConfig({displayName:"SponsoredContentCampaignLink"})`
  text-decoration: none;
`;e.exports={SponsorContentContainer:p,SponsorImage:h,SponsoredContent:g,SponsoredContentCampaignLink:u}},36517:(e,t,i)=>{const o=i(45697),n=i(67294),{ContentHeaderTitleBlockPublishDate:a}=i(30414),r=({hasExtraSpaceBetweenSeparator:e,hidePublishDate:t,publishDate:i,modifiedDate:o})=>{if(t||!i)return null;const r=o&&{datetime:o};return n.createElement(a,Object.assign({hasExtraSpaceBetweenSeparator:e,"data-testid":"ContentHeaderPublishDate"},r),i)};r.propTypes={hasExtraSpaceBetweenSeparator:o.bool,hidePublishDate:o.bool,modifiedDate:o.string,publishDate:o.string},e.exports=r},37939:(e,t,i)=>{const o=i(45697),n=i(67294),a=i(33843),r=i(36895),s=i(68224),l=i(41825),d=i(36517),{ContentHeaderSponsorName:c,ContentHeaderRubricBlock:p,ContentHeaderRubricDateBlock:h,ContentHeaderRubricPrice:g,ContentHeaderRubricContainer:u,ContentHeaderLiveIndicator:m}=i(81398),b=({authorsPosition:e,bylineVariation:t,contributors:i,hasExtraSpaceBetweenSeparator:o,hideAdaptationByline:b,hideIssueDate:y,hideIssueDatePipeSeparator:S,hidePublishDate:v,hideRubric:C,isLiveStoryType:w,isStoryLive:f,issueDate:T,issueLink:B,modifiedDate:D,price:I,publishDate:x,publishDatePosition:k,rubric:L,rubricVariation:E,showIssueCopyByDate:A,sponsorName:P})=>{const H=r[E]||r,R=!y&&T&&L,N=("above"===e||"top"===k)&&!P;return w&&f?n.createElement(m,null,n.createElement(a,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0})):!(L||T||i)||C?null:(L||T||i)&&n.createElement(p,{hasIssueDateAndRubricBlock:R,"data-testid":"ContentHeaderRubric"},"above"===e&&n.createElement(s,{bylineVariation:t,contributors:i,hideAdaptationByline:b}),n.createElement(h,{"data-testid":"ContentHeaderRubricDateBlock"},L&&n.createElement(u,Object.assign({},L,{isVerticalAlign:"above"===e||"top"===k||R,as:H})),I&&n.createElement(g,null,"/ ",I),P&&n.createElement(c,{hasExtraSpaceBetweenSeparator:o,items:[{name:P}]}),N&&n.createElement(d,{hasExtraSpaceBetweenSeparator:o,hidePublishDate:v,modifiedDate:D,publishDate:x})),n.createElement(l,{hideIssueDate:y,hideIssueDatePipeSeparator:S,issueDate:T,issueLink:B,showIssueCopyByDate:A}))};b.propTypes={authorsPosition:o.string,bylineVariation:o.string,contributors:o.object,hasExtraSpaceBetweenSeparator:o.bool,hasNoRowPadding:o.bool,hideAdaptationByline:o.bool,hideIssueDate:o.bool,hideIssueDatePipeSeparator:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,isLiveStoryType:o.bool,isStoryLive:o.bool,issueDate:o.string,issueLink:o.string,modifiedDate:o.string,price:o.string,publishDate:o.string,publishDatePosition:o.string,rubric:o.shape(r.propTypes),rubricVariation:o.string,showIssueCopyByDate:o.bool,sponsorName:o.string},b.defaultProps={hideAdaptationByline:!1,isLiveStoryType:!1,isStoryLive:!1},e.exports=b},49359:(e,t,i)=>{const o=i(45697),n=i(67294),{useIntl:a}=i(36319),{asConfiguredComponent:r}=i(36380),s=i(60637),l=i(36895),d=i(68224),c=i(36517),p=i(37939),h=i(40284),g=i(84327),u=i(33843),{ContentHeaderContentDivider:m,ContentHeaderLowerBylineDateBlock:b,ContentHeaderItemCount:y,ContentHeaderHed:S,ContentHeaderTitleBlockWrapper:v,PodcastButtonWrapper:C,PodcastButton:w,PodcastLink:f}=i(30414),T=i(83074).Z,B=e=>e.length>0?e[0]:null,D=({authorsPosition:e,business:t,bylineVariation:i,contentHeaderCategories:o,contentSponsorNames:r,contributors:s,dangerousHed:l,dividerType:D,externalLinks:I,hasContentDivider:x,hasDesktopTitleBlockDivider:k,hasExtraSpaceBetweenSeparator:L,hideIssueDate:E,hideIssueDatePipeSeparator:A,hasNoRowPadding:P,hideAdaptationByline:H,hidePublishDate:R,hideRubric:N,isBusinessContentHeader:M,isLiveStoryType:$,isStoryLive:O,issueDate:W,issueLink:V,itemsCount:_,metadataVideo:F,modifiedDate:j,price:U,podcastPagePrimaryCta:G,podcastPagePrimaryCtaLabel:z,publishDate:Z,publishDatePosition:K,rubric:q,rubricVariation:Y,shouldDisplayLiveIndicator:X,showIssueCopyByDate:J,showItemCount:Q,showPodcastButton:ee,theme:te})=>{const ie=x&&"above"!==e,oe="inverted"===te,ne=oe?"outlined":"filled",ae=k&&("both"===D||"top"===D),{formatMessage:re}=a();return n.createElement(v,{rowWithTopBorder:ae,isBusinessContentHeader:M,"data-testid":"ContentHeaderTitleBlockWrapper"},F.isLive&&X&&n.createElement(u,null),n.createElement(p,{authorsPosition:e,bylineVariation:i,contributors:s,hasExtraSpaceBetweenSeparator:L,hasNoRowPadding:P,hideIssueDate:E,hideIssueDatePipeSeparator:A,hideAdaptationByline:H,hidePublishDate:R,hideRubric:N,isLiveStoryType:$,isStoryLive:O,issueDate:W,issueLink:V,modifiedDate:j,price:U,publishDate:Z,publishDatePosition:K,rubric:q,rubricVariation:Y,showIssueCopyByDate:J,sponsorName:B(r),theme:te}),n.createElement(h,Object.assign({},o)),n.createElement(S,{dangerouslySetInnerHTML:{__html:l},"data-testid":"ContentHeaderHed"}),"below"===e&&n.createElement(b,null,n.createElement(d,{bylineVariation:i,contributors:s}),n.createElement(c,{hasExtraSpaceBetweenSeparator:L,hidePublishDate:R,modifiedDate:j,publishDate:Z})),Q&&_&&n.createElement(y,Object.assign({},_)),ie&&n.createElement(m,null),M&&n.createElement(g,{address:null==t?void 0:t.address,phone:null==t?void 0:t.phone,email:null==t?void 0:t.email,socialMedia:null==t?void 0:t.socialMedia,link:null==t?void 0:t.url}),ee&&G&&n.createElement(C,null,n.createElement(w,{btnStyle:ne,href:G,label:z||re(T.primaryCTALabel),target:"blank",inputKind:"link"}),I.length>0&&n.createElement(f,{isInverted:oe,href:I[0].url,target:"blank"},"Or, choose where to Listen")))};D.propTypes={authorsPosition:o.oneOf(["above","below","hidden"]),business:o.shape({address:o.object,phone:o.string,email:o.string,socialMedia:o.array,url:o.string}),bylineVariation:o.string,contentHeaderCategories:o.shape({title:o.string,tags:o.array,hasCategoryEyebrow:o.boolean}),contentSponsorNames:o.array,contributors:o.object,dangerousHed:o.string.isRequired,dividerType:o.string,externalLinks:o.array,hasContentDivider:o.bool,hasDesktopTitleBlockDivider:o.bool,hasDivider:o.bool,hasExtraSpaceBetweenSeparator:o.bool,hasNoRowPadding:o.bool,hideAdaptationByline:o.bool,hideIssueDate:o.bool,hideIssueDatePipeSeparator:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,isBusinessContentHeader:o.bool,isLiveStoryType:o.bool,isStoryLive:o.bool,issueDate:o.string,issueLink:o.string,itemsCount:o.shape(s.propTypes),metadataVideo:o.shape({isLive:o.bool,premiereDate:o.string,series:o.string,videoLength:o.number}),modifiedDate:o.string,podcastPagePrimaryCta:o.string,podcastPagePrimaryCtaLabel:o.string,price:o.string,publishDate:o.string,publishDatePosition:o.oneOf(["top","bottom"]),rubric:o.shape(l.propTypes),rubricVariation:o.string,shouldDisplayLiveIndicator:o.bool,showIssueCopyByDate:o.bool,showItemCount:o.bool,showPodcastButton:o.bool,theme:o.oneOf(["standard","inverted","special"])},D.defaultProps={authorsPosition:"hidden",contentHeaderCategories:{hasCategoryEyebrow:!1},contentSponsorNames:[],dividerType:"both",hasDesktopTitleBlockDivider:!1,hasExtraSpaceBetweenSeparator:!1,hasNoRowPadding:!1,hideAdaptationByline:!1,hideIssueDate:!0,hideIssueDatePipeSeparator:!1,hidePublishDate:!1,hideRubric:!1,isBusinessContentHeader:!1,metadataVideo:{},publishDatePosition:"bottom",shouldDisplayLiveIndicator:!1,showIssueCopyByDate:!1,showItemCount:!1,showPodcastButton:!1,theme:"standard"},D.displayName="TitleBlock",e.exports=r(D,"TitleBlock"),e.exports.TitleBlock=D},68224:(e,t,i)=>{const o=i(45697),n=i(67294),{ContentHeaderBylines:a}=i(32279),r=({bylineVariation:e,contributors:t,hideAdaptationByline:i})=>t&&0!==Object.keys(t).length?n.createElement(a,{contributors:t,bylineVariation:e,isCompact:!1,hideAdaptationByline:i}):null;r.propTypes={bylineVariation:o.string,contributors:o.object,hideAdaptationByline:o.bool},e.exports=r},36125:(e,t,i)=>{const{asVariation:o}=i(95545),n=i(86772),a=i(63401),r=i(72149);n.TextAboveCenterGridWidth=o(n,"TextAboveCenterGridWidth",{contentAlign:"center",contentPosition:"above"}),n.TextAboveCenterGridWidthTopCardSmall=o(n,"TextAboveCenterGridWidthTopCardSmall",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed",leadRailAnchor:!0,mediaWidth:"small"}),n.TextAboveCenterFullBleed=o(n,"TextAboveCenterFullBleed",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed"}),n.TextAboveCenterFullBleedNoContributor=o(n,"TextAboveCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed",shouldRemoveBylineTopMargin:!0,hasDekBottomMargin:!0,hasAccreditationSocialTopMargin:!0,shouldReduceAccreditationPadding:!0},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),n.TextAboveCenterFullBleedTop=o(n,"TextAboveCenterFullBleedTop",{contentAlign:"center",contentPosition:"above",copyWidth:"fullbleed"}),n.TextAboveCenterFullBleedGridWidthCard=o(n,"TextAboveCenterFullBleedGridWidthCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed"}),n.TextAboveCenterFullBleedCard=o(n,"TextAboveCenterFullBleedCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",mediaWidth:"fullbleed",copyWidth:"fullbleed"}),n.TextAboveLeftSmall=o(n,"TextAboveLeftSmall",{contentAlign:"left",contentPosition:"above",leadRailAnchor:!0,mediaWidth:"small"}),n.TextAboveLeftSmallWithRule=o(n,"TextAboveLeftSmallWithRule",{contentAlign:"left",contentPosition:"above",hasLedeLightbox:!0,leadRailAnchor:!0,mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0,hasTitleWrapperTopSpacing:!0,hasAccreditationSocialTopMargin:!0,shouldRemoveContentHedWrapperTopSpacing:!0,hasReducedTitleTopMargin:!0,hasAccreditationExtraSpacing:!0,shouldRemoveBylineTopMargin:!0,hasDateExtraTopSpacing:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),n.TextAboveCenterSmallWithRule=o(n,"TextAboveCenterSmallWithRule",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0,shouldRemoveBylineTopMargin:!0,hasAccreditationExtraSpacing:!0,hasAccreditationSocialTopMargin:!0,hasTitleWrapperTopSpacing:!0,shouldRemoveContentHedWrapperTopSpacing:!0,hasReducedTitleTopMargin:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),n.InlineImage=o(n,"InlineImage",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0,shouldRemoveBylineTopMargin:!0,hasAccreditationSocialTopMargin:!0,shouldRemoveContentHedWrapperTopSpacing:!0,hasReducedTitleTopMargin:!0,hasTitleWrapperTopSpacing:!0,hasAccreditationExtraSpacing:!0},{dividerType:"bottom",hideLede:!0,showContributorImage:!1,stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),n.TextAboveLeftFullBleed=o(n,"TextAboveLeftFullBleed",{contentAlign:"left",contentPosition:"above",copyWidth:"grid",hasLedeLightbox:!0,mediaWidth:"fullbleed"}),n.TextAboveLeftGridWidth=o(n,"TextAboveLeftGridWidth",{contentAlign:"left",contentPosition:"above",mediaWidth:"grid"}),n.TextAboveLeftGridWidthCard=o(n,"TextAboveLeftGridWidthCard",{contentAlign:"left",contentPosition:"above",contentStyle:"card",mediaWidth:"grid"}),n.TextAboveLeftNoImg=o(n,"TextAboveLeftNoImg",{contentAlign:"left",contentPosition:"above"},{className:"content-header--no-lede",lede:null}),n.TextBelowCenterGridWidth=o(n,"TextBelowCenterGridWidth",{contentAlign:"center",contentPosition:"below"}),n.TextBelowCenterFullBleed=o(n,"TextBelowCenterFullBleed",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed"}),n.TextBelowCenterFullBleedNoContributor=o(n,"TextBelowCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed",shouldRemoveBylineTopMargin:!0,hasDekBottomMargin:!0,hasAccreditationSocialTopMargin:!0,hasAccreditationSocialBottomMargin:!0,hasPublishDateBottomPadding:!0,hideAccreditationBottomSpacing:!0,shouldReduceAccreditationPadding:!0},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),n.TextBelowLeftGridWidth=o(n,"TextBelowLeftGridWidth",{contentAlign:"left",contentPosition:"below"}),n.TextBelowLeftGridWidthCard=o(n,"TextBelowLeftGridWidthCard",{contentAlign:"left",contentPosition:"below",contentStyle:"card"}),n.TextBelowLeftFullBleed=o(n,"TextBelowLeftFullBleed",{contentAlign:"left",contentPosition:"below",mediaWidth:"fullbleed"}),n.TextOverlay=o(a,"TextOverlayContentHeader",{}),n.TextOverlayWithLogo=o(a,"TextOverlayContentHeaderWithLogo",{isFeatured:!0}),n.TextOverlayCenterFullBleedGradient=o(a,"TextOverlayCenterFullBleedGradient",{contentAlign:"center",background:"gradient"}),n.SplitScreenImgLeft=o(n,"SplitScreenImgLeft",{contentAlign:"left",contentPosition:"end"}),n.SplitScreenImgRight=o(n,"SplitScreenImgRight",{contentAlign:"left",contentPosition:"start"}),n.SplitScreenImgRightContentCenter=o(n,"SplitScreenImgRightContentCenter",{contentAlign:"center",contentPosition:"start",contentStyle:"card",mediaWidth:"grid"}),n.AssetMiddleCenterBig=o(n,"AssetMiddleCenterBig",{assetPosition:"middle",contentAlign:"center",contentPosition:"above",mediaWidth:"small"}),n.AssetMiddleCenterFullBleed=o(n,"AssetMiddleCenterFullBleed",{assetPosition:"middle",contentAlign:"center",contentPosition:"above",mediaWidth:"grid"}),n.SubjectFocus=o(n,"SubjectFocus",{assetPosition:"bottom",contentAlign:"left",contentPosition:"above",hasExtraSpaceBetweenSeparator:!0,leadRailAnchor:!0,mediaWidth:"small",publishDatePosition:"top",reducedSpacings:!0},{showContributorImage:!1}),n.SplitScreenImageRightFullBleed=o(r,"SplitScreenImageRightFullBleed",{},{isTextRight:!1,showContributorImage:!1,shouldRemoveBylineTopMargin:!0,hasSplitScreenSocialShareReduceTopSpacing:!0}),n.SplitScreenImageRightInset=o(r,"SplitScreenImageRightInset",{},{hasSplitScreenSocialShareReduceTopSpacing:!0,shouldRemoveBylineTopMargin:!0,isInset:!0,isTextRight:!1,showContributorImage:!1,hideHeaderDividerInMobile:!0,hasImageBottomSpacing:!1}),n.SplitScreenImageLeftFullBleed=o(r,"SplitScreenImageLeftFullBleed",{},{shouldRemoveBylineTopMargin:!0,hasSplitScreenSocialShareReduceTopSpacing:!0,isTextRight:!0,showContributorImage:!1}),n.SplitScreenImageLeftInset=o(r,"SplitScreenImageLeftInset",{},{isInset:!0,isTextRight:!0,showContributorImage:!1,hasSplitScreenSocialShareReduceTopSpacing:!0,shouldRemoveBylineTopMargin:!0,hideHeaderDividerInMobile:!0}),n.BusinessContentHeader=o(n,"BusinessContentHeader",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed",showContentDivider:!0,hideRubric:!0}),n.PodcastContentHeader=o(n,"PodcastContentHeader",{contentAlign:"center",contentPosition:"below",shouldUseSmallLede:!0,showPodcastButton:!0,hasDivider:!0},{hideLedeCaption:!0}),n.TextAboveCenterFullBleedVideo=o(n,"ContentHeaderFullBleedVideo",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed",isFullBleedVideo:!0}),e.exports=n},17930:(e,t,i)=>{const o=i(45697),n=i(94184),a=i(67294),{useIntl:r}=i(36319),s=i(77333),l=i(7279),d=i(6046),{trackComponent:c}=i(40199),p=i(30970).Z,{ReviewRatingDataLabel:h,ReviewRatingDataWrapper:g,ReviewRatingDataValue:u,ReviewRatingDataExplainer:m,ReviewRatingDataExplainerModal:b,ReviewRatingDataExplainerModalList:y,ReviewRatingDataExplainerModalListRating:S,ReviewRatingDataExplainerModalListDescribe:v}=i(73703),C=({className:e,rating:t,ratingList:i})=>{a.useEffect((()=>{c("ReviewRatingData")}),[]);const o=r(),[C,w]=a.useState(!0),f=()=>{w(!C)},T=a.createElement(b,{className:"review-rating-data__rating-explainer-modal"},i.map(((e,t)=>a.createElement(y,{key:e},a.createElement(S,{as:"span"},t+1),a.createElement(v,{as:"span"},e)))));return a.createElement(g,{className:n("review-rating-data",e)},a.createElement(h,{className:"review-rating-data__label"},o.formatMessage(p.dataLabel)),a.createElement(u,null,t,"/10"),a.createElement(m,null,a.createElement(l.Utility,{isIconButton:!0,ButtonIcon:s,className:"review-rating-data__info-button",label:o.formatMessage(p.buttonLabel),onClickHandler:f,role:"button"}),!C&&a.createElement(d,{className:"alert__tooltip",arrowPosition:52,gaIdentifier:"review-rating-explainer",isVisible:!0,isTooltip:!0,onClose:f,shouldUseArrow:!0},T)))};C.propTypes={className:o.string,rating:o.number,ratingList:o.array},C.defaultProps={rating:0,ratingList:[]},C.displayName="ReviewRatingData",e.exports=C},88752:(e,t,i)=>{const{asConfiguredComponent:o}=i(36380),n=i(17930);e.exports=o(n,"ReviewRatingData")},73703:(e,t,i)=>{const o=i(51117).default,{BaseText:n}=i(74327),{calculateSpacing:a,getTypographyStyles:r,getColorToken:s}=i(79720),l=o.div.withConfig({displayName:"ReviewRatingDataWrapper"})`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  margin-top: ${a(2)};
  width: 100%;
`,d=o(n).withConfig({displayName:"ReviewRatingDataLabel"})`
  margin-right: ${a(1)};
`;d.defaultProps={as:"span",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-primary"};const c=o(n).withConfig({displayName:"ReviewRatingDataValue"})`
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.subhed-aux-primary")}
  color: ${({theme:e})=>s(e,"colors.consumption.body.standard.subhed")};
`,p=o.div.withConfig({displayName:"ReviewRatingDataExplainer"})`
  margin-left: ${a(.5)};

  .review-rating-data__info-button,
  .review-ratingdata__close-button {
    margin: 0;
    border: 0;
    background-color: ${({theme:e})=>s(e,"colors.interactive.base.white")};
    fill: ${({theme:e})=>s(e,"colors.consumption.body.standard.accent")};
    padding: 0;

    &:hover,
    &:focus {
      border: 0;
      background: none;
    }
  }

  .icon {
    padding-right: 5px;
    width: 24px;
    height: 24px;
  }

  .review-rating-data__info-button {
    .button__icon-container,
    .icon {
      padding-right: 0;
      width: 18px;
      height: 18px;
    }
  }

  .icon.icon-close {
    width: 35px;
    height: 35px;
  }
`,h=o.div.withConfig({displayName:"ReviewRatingDataExplainerModal"})`
  padding: ${a(2)} 0 ${a(2)}
    ${a(2)};
`,g=o.div.withConfig({displayName:"ReviewRatingDataExplainerModalList"})`
  display: flex;
  letter-spacing: 0;
`,u=o.span.withConfig({displayName:"ReviewRatingDataExplainerModalListRating"})`
  flex: 1;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
  font-weight: bold;
`,m=o.span.withConfig({displayName:"ReviewRatingDataExplainerModalListDescribe"})`
  flex: 9;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
`;e.exports={ReviewRatingDataLabel:d,ReviewRatingDataWrapper:l,ReviewRatingDataValue:c,ReviewRatingDataExplainer:p,ReviewRatingDataExplainerModal:h,ReviewRatingDataExplainerModalList:g,ReviewRatingDataExplainerModalListRating:u,ReviewRatingDataExplainerModalListDescribe:m}},30970:(e,t,i)=>{const o=i(36319);t.Z=(0,o.defineMessages)({dataLabel:{id:"ReviewRatingData.DataLabel",defaultMessage:"Rating:",description:"Label for rating"},buttonLabel:{id:"ReviewRatingData.ButtonLabel",defaultMessage:"Open rating explainer",description:"Label for rating explainer button"}})},98810:(e,t,i)=>{const o=i(67294),n=i(45697),a=i(93839),{SplitScreenContentHeaderLede:r,SplitScreenContentHeaderLedeBlock:s}=i(41903),l=({captionCredit:e,className:t,isCNEVideo:i,lede:n,socialMedia:l})=>n?i?n.scriptEmbedUrl?o.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},o.createElement(a,{hasMargins:!1,shouldAutoplay:!0,scriptUrl:n.scriptEmbedUrl})):null:o.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},o.createElement(r,Object.assign({},n)),e,l):null;l.propTypes={captionCredit:n.object,className:n.string,isCNEVideo:n.bool,lede:n.object,socialMedia:n.object},e.exports=l},68660:(e,t,i)=>{const o=i(94184),n=i(45697),a=i(67294),{useIntl:r}=i(36319),s=i(23493),l=i(3650).Z,{mapSourcesToSegmentedSources:d}=i(28679),c=i(98810),p=i(98288),h=i(36895),g=i(28891),u=i(90227),m=i(34042),b=i(65552),y=i(13134),S=i(44287),v=i(84885),{formatInfoSliceItems:C}=i(11850),w=i(19688),{useNativeShare:f}=i(8998),{getThemedBylineVariation:T}=i(41317),{getOverrideBehaviour:B}=i(66528),{trackComponent:D}=i(40199),{BookmarkIcon:I}=i(47649),{SplitScreenContentHeaderArtist:x,SplitScreenContentHeaderArtistSlash:k,SplitScreenContentHeaderArtistWrapper:L,SplitScreenContentHeaderByline:E,SplitScreenContentHeaderCaption:A,SplitScreenContentHeaderContributorImage:P,SplitScreenContentHeaderDek:H,SplitScreenContentHeaderDekDown:R,SplitScreenContentHeaderDivider:N,SplitScreenContentHeaderHed:M,SplitScreenContentHeaderMain:$,SplitScreenContentHeaderInfoSlice:O,SplitScreenContentHeaderForMusicReview:W,SplitScreenContentHeaderNativeShareButton:V,SplitScreenContentHeaderPublishDate:_,SplitScreenContentHeaderRating:F,SplitScreenContentHeaderRubric:j,SplitScreenContentHeaderRubricIssueDate:U,SplitScreenContentHeaderSignageRubric:G,SplitScreenContentHeaderSocialShare:z,SplitScreenContentHeaderTitleBlock:Z,SplitScreenContentHeaderWrapper:K,SplitScreenContentHeaderScoreBox:q,SplitScreenContentHeaderLeadWrapper:Y,SplitScreenContentHeaderArtistLink:X,SplitScreenContentHeaderGrid:J,SplitScreenContentHeaderPersistentAside:Q,SplitScreenContentHeaderReleaseYear:ee,SplitScreenContentHeaderLeadOverride:te}=i(41903),{SplitScreenContentHeaderSocialIcons:ie}=i(38215),{doHideBookmark:oe,doDisplayBookmark:ne}=i(49214),{BREAKPOINTS:ae}=i(85326),re=({contributors:e,contributorsPosition:t,hasInvertedBylineLink:i,hideContributors:o,hideIssueDate:n,hidePublishDate:r,issueDate:s,issueDatePostfix:l,issueLink:d,publishDate:c,publishDatePosition:p,rubric:g,rubricVariation:u,hideRubric:m,themedBylineVariation:b})=>{const y=h[u]||h,S=h.Item,v=e&&0!==Object.keys(e).length;return a.createElement("div",{"data-testid":"ContentHeaderRubric"},v&&!o&&"top"===t&&a.createElement(E,{contributors:e,bylineVariation:b,isCompact:!1,contributorsPosition:t,hasInvertedBylineLink:i}),g&&!m&&a.createElement(j,Object.assign({as:y},g)),!n&&s&&a.createElement(U,{as:S,name:l?`${s}${l}`:s,url:d}),!r&&c&&"top"===p&&a.createElement(_,{"data-testid":"ContentHeaderPublishDate"},c))};re.propTypes={contributors:n.object,contributorsPosition:n.oneOf(["top","bottom"]),hasInvertedBylineLink:n.bool,hideContributors:n.bool,hideIssueDate:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,issueDate:n.string,issueDatePostfix:n.string,issueLink:n.string,publishDate:n.string,publishDatePosition:n.oneOf(["top","bottom"]),rubric:n.shape(h.propTypes),rubricVariation:n.string,themedBylineVariation:n.string};const se=({signage:e,shouldDisplaySignage:t})=>e&&t?a.createElement("div",{"data-testid":"ContentHeaderRubricSignage"},a.createElement(G,{name:e})):null;se.propTypes={shouldDisplaySignage:n.bool,signage:n.string};const le=(e,t,i,o,n,r,s,l)=>n&&a.createElement(z,Object.assign({},n,{hasSocialShare:!0,hasStickySocialIcons:e,hideSocialIcons:t,hideSocialIconsOnMobile:i,socialIconsToHide:o,socialMediaPositionInMobile:r},l&&{hasSplitScreenSocialShareReduceTopSpacing:s})),de=(e,t)=>((null==t?void 0:t.caption)||(null==t?void 0:t.credit))&&!e&&a.createElement(J,null,a.createElement(A,{dangerousCaptionText:t.caption,dangerousCredit:t.credit})),{useRef:ce,useEffect:pe}=a,he=({artists:e,brandSlug:t,captionPosition:i,className:n,contentAlign:p,contributorImage:h,dangerousHed:m,dangerousDek:b,shouldRemoveBylineTopMargin:y,hasContributorImageBackground:S,showFullHeaderViewInMobile:A,hasInvertedBylineLink:j,hasMargin:U,hasSplitScreenSocialShareReduceTopSpacing:G,hasStickySocialIcons:z,hasNativeShareButton:he,hideArticleIssueDate:ge,hideContributorTitle:ue,hideContributors:me,hideDangerousDek:be,hideHeaderDividerInMobile:ye,hasImageBottomSpacing:Se,hideIssueDate:ve,hidePublishDate:Ce,hideRubric:we,socialIconsToHide:fe,hideSocialIcons:Te,hideSocialIconsOnMobile:Be,hideCaption:De,imageAlignment:Ie,infoSliceFields:xe,interactiveOverride:ke,isInset:Le,isMusicReview:Ee,isTextRight:Ae,isTrackReview:Pe,issueDate:He,issueDatePostfix:Re,issueLink:Ne,isSplitScreenArtistLarge:Me,rubric:$e,rubricVariation:Oe,contributors:We,contributorsPosition:Ve,bylineVariation:_e,persistentAsideAlign:Fe,publishDate:je,publishDatePosition:Ue,lede:Ge,ledeContentAlign:ze,modifiedDate:Ze,musicRating:Ke,shouldEnableNativeShareOnDesktop:qe,shouldFitToViewport:Ye,showBookmarked:Xe,shouldHeaderFitToViewport:Je,showContentDivider:Qe,showContributorImage:et,showHeaderDivider:tt,socialDescription:it,socialMedia:ot,socialMediaPositionInMobile:nt,socialTitle:at,stickySocialAnchorBottom:rt,stickySocialAnchorTop:st,theme:lt,rating:dt,signage:ct,shouldDisplaySignage:pt,showReviewLink:ht,textAlign:gt,shouldAlignCenterWhenNoCaption:ut})=>{var mt,bt;const yt=void 0!==ge?ge:ve,[St,vt]=a.useState("100vw");a.useEffect((()=>{var e;if(D("SplitScreenContentHeader"),Le){const t=`(min-width: ${ae.md})`;if(window.matchMedia(t).matches){const t=null===(e=window.visualViewport)||void 0===e?void 0:e.width;t&&vt(`${t}px`)}}}),[Le]);const Ct="CTA-firework"===B(ke),wt=T({bylineVariation:_e,theme:lt}),{showNativeShareButton:ft,pageUrl:Tt}=f(he,qe),{score:Bt,isBestNewMusic:Dt,isBestNewReissue:It}=Ke,xt=C(xe),kt=null==xe?void 0:xe.releaseYear,Lt=(e=>{if(!e)return;const t=Object.assign({},e);return new Set(["photo","cartoon"]).has(e.contentType)&&!e.segmentedSources&&e.sources&&(t.segmentedSources=d(e.sources)),t})(Ge),Et="cnevideo"===(null==Ge?void 0:Ge.modelName),At=!Ge||Et,{rating:Pt,count:Ht}=dt||{},Rt=Ee?W:$,{formatMessage:Nt}=r(),Mt={},$t=ce();"belowImage"===i&&(Mt.captionCredit=de(De,Ge)),"inLeadWrapperBelowImg"===nt&&(Mt.socialMedia=le(z,Te,Be,fe,ot,nt,A));const Ot=()=>{(e=>{const t=e.current&&e.current.offsetTop,i=window.pageYOffset;return Math.abs(i)>Math.abs(t)})($t)?ne():oe()};pe((()=>{const e=s(Ot,100);return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}}));const Wt=Ze&&{datetime:Ze},Vt=Le&&(null===(bt=null===(mt=null==Lt?void 0:Lt.segmentedSources)||void 0===mt?void 0:mt.lg[0])||void 0===bt?void 0:bt.aspectRatio),_t=Vt&&-1!==(Ft=Vt).indexOf(":")?Ft.split(":"):null;var Ft;const jt=ut&&(!(null==Ge?void 0:Ge.caption)||""===(null==Ge?void 0:Ge.caption));return a.createElement(K,Object.assign({className:o("content-header",{[n]:n}),contentHeaderTheme:lt,isFullWidth:At,isTextRight:Ae,isInset:Le,imageAlignment:Ie,ledeContentAlign:ze,shouldFitToViewport:!Ye,isMusicReview:Ee,"data-testid":"SplitScreenContentHeaderWrapper",showHeaderDivider:tt,socialMediaPositionInMobile:nt,hideSocialIconsOnMobile:Be,hideSocialIcons:Te,shouldHeaderFitToViewport:Je,captionPosition:i,hidePublishDate:Ce,mediaContentType:(null==Lt?void 0:Lt.contentType)||"",hasInvertedBylineLink:j,hasMargin:U,imgAspectRatioForDesktop:_t,viewportWidth:St,hasLedeTextAlignCenterForMobile:jt,hasPublishDateBottomPadding:A&&(!ot||Te||Be)},A&&{hasImageBottomSpacing:Se,hideHeaderDividerInMobile:ye}),a.createElement(Rt,{shouldFitToViewport:!Ye},a.createElement(Z,{contentAlign:p,textAlign:gt},a.createElement(se,{signage:ct,shouldDisplaySignage:pt}),a.createElement(re,Object.assign({},{contributors:We,contributorsPosition:Ve,rubric:$e,rubricVariation:Oe,hideContributors:me,hideIssueDate:yt,hidePublishDate:Ce,issueDate:He,issueDatePostfix:Re,issueLink:Ne,publishDate:je,publishDatePosition:Ue,hideRubric:we,hasInvertedBylineLink:j,themedBylineVariation:wt,shouldRemoveBylineTopMargin:y})),a.createElement(M,{dangerouslySetInnerHTML:{__html:m},"data-testid":"ContentHeaderHed",isMusicReview:Ee}),Ct&&a.createElement(te,{dangerouslySetInnerHTML:{__html:ke.markup}}),Qe&&a.createElement(N,{ledeContentAlign:ze,hasLedeTextAlignCenterForMobile:jt}),e&&Ee?a.createElement(L,{isMusicReview:Ee},0===e.length&&a.createElement(x,{isSplitScreenArtistLarge:Me},Nt(l.variousArtists)),e.map(((t,i)=>a.createElement(a.Fragment,{key:i},a.createElement(X,{key:i,href:"/".concat(t.uri)},a.createElement(x,{dangerouslySetInnerHTML:{__html:t.name},isSplitScreenArtistLarge:Me})),!(i===e.length-1)&&a.createElement(k,{dangerouslySetInnerHTML:{__html:" / "},isSplitScreenArtistLarge:Me}))))):!be&&b&&a.createElement(H,{dangerouslySetInnerHTML:{__html:b}}),et&&h&&a.createElement(P,Object.assign({},h,{sizes:"66px",hasContributorImageBackground:S})),We&&!me&&"bottom"===Ve&&a.createElement(E,Object.assign({contributors:We,bylineVariation:wt,isCompact:!1,hasInvertedBylineLink:j},A&&{shouldRemoveBylineTopMargin:y})),!Ce&&"bottom"===Ue&&a.createElement(_,Object.assign({"data-testid":"ContentHeaderPublishDate",hasPublishDateBottomPadding:A&&(!ot||Te||Be)},Wt),je),(Ee||Pe)&&kt&&a.createElement(ee,{"data-testid":"SplitScreenContentHeaderReleaseYear"},kt),Xe&&a.createElement("div",{ref:$t},a.createElement(I,{bookmarkTrackingType:"header",link:{label:"Save story",url:"#",network:"bookmark",behavior:"bookmark"},theme:"standard",type:"thin",isUrlBookmark:!0,isBookmarkButton:!0})),!!Pt&&!!Ht&&a.createElement(F,{averageRatingCount:Math.round(10*Pt)/10,brandSlug:t,hasBorderTop:!0,link:ht&&{label:Nt(l.ratingLinkLabel),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:i}=v(t);null==t||t.focus(),window.scrollTo(0,i-56)},url:"#reviews"},totalRatingCount:Ht}),ft?a.createElement(V,null,a.createElement(w,{shareData:{url:Tt,title:at,text:it}})):le(z,Te,Be,fe,ot,nt,G,A)),a.createElement(Y,{isMusicReview:Ee},a.createElement(c,Object.assign({lede:Lt,isCNEVideo:Et},Mt)),Ee&&a.createElement(q,null,a.createElement(u,{rating:Bt,isBestNewMusic:Dt,isBestNewReissue:It,isTrackReview:Pe})))),"belowHeader"===i&&de(De,Ge),We&&me&&a.createElement(E,{contributors:We,bylineVariation:ue?"Item":_e,isCompact:!1,isMusicReview:Ee}),xt.length>0&&a.createElement(J,null,a.createElement(O,null,a.createElement(g,{items:xt,isMusicReview:Ee}))),!be&&Ee&&b&&a.createElement(J,null,a.createElement(R,{dangerouslySetInnerHTML:{__html:b}})),!ft&&z&&ot&&a.createElement(Q,{align:Fe,attributes:{shouldFadeOnMove:!0},anchorBottom:rt,anchorTop:st,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(ie,Object.assign({},ot,{bookmarkTrackingType:"sticky",className:"social-icons--share"}))))};he.propTypes={artists:n.array,brandSlug:n.string,bylineVariation:n.string,captionPosition:n.oneOf(["belowHeader","belowImage"]),className:n.string,contentAlign:n.oneOf(["center","left"]),contributorImage:n.shape(p.propTypes),contributors:n.shape(m.propTypes.contributors),contributorsPosition:n.oneOf(["top","bottom"]),dangerousDek:n.string,dangerousHed:n.string.isRequired,hasContributorImageBackground:n.bool,hasImageBottomSpacing:n.bool,hasInvertedBylineLink:n.bool,hasMargin:n.bool,hasNativeShareButton:n.bool,hasSplitScreenSocialShareReduceTopSpacing:n.bool,hasStickySocialIcons:n.bool,hideArticleIssueDate:n.bool,hideCaption:n.bool,hideContributors:n.bool,hideContributorTitle:n.bool,hideDangerousDek:n.bool,hideHeaderDividerInMobile:n.bool,hideIssueDate:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,hideSocialIcons:n.bool,hideSocialIconsOnMobile:n.bool,imageAlignment:n.oneOf(["center","top","left","right","bottom"]),infoSliceFields:n.object,interactiveOverride:n.shape({markup:n.string,behavior:n.string}),isInset:n.bool,isMusicReview:n.bool,isSplitScreenArtistLarge:n.bool,issueDate:n.string,issueDatePostfix:n.string,issueLink:n.string,isTextRight:n.bool,isTrackReview:n.bool,lede:n.oneOfType([n.shape(p.propTypes)]),ledeContentAlign:n.oneOf(["left","center"]),modifiedDate:n.string,musicRating:n.object,persistentAsideAlign:n.oneOf(["left","left-lead-asset"]),publishDate:n.string.isRequired,publishDatePosition:n.oneOf(["top","bottom"]),rating:n.shape(S.propTypes),rubric:n.shape(h.propTypes),rubricVariation:n.string,shouldAlignCenterWhenNoCaption:n.bool,shouldDisplaySignage:n.bool,shouldEnableNativeShareOnDesktop:n.bool,shouldFitToViewport:n.bool,shouldHeaderFitToViewport:n.bool,shouldRemoveBylineTopMargin:n.bool,showBookmarked:n.bool,showContentDivider:n.bool,showContributorImage:n.bool,showFullHeaderViewInMobile:n.bool,showHeaderDivider:n.bool,showReviewLink:n.bool,signage:n.string,socialDescription:n.string,socialIconsToHide:n.array,socialMedia:n.shape(y.propTypes),socialMediaPositionInMobile:n.oneOf(["inLeadWrapperBelowImg","inTitleBlock"]),socialTitle:n.string,stickySocialAnchorBottom:b.propTypes.anchorBottom,stickySocialAnchorTop:b.propTypes.anchorTop,textAlign:n.oneOf(["left","center"]),theme:n.oneOf(["standard","inverted","special"])},he.defaultProps={brandSlug:"",captionPosition:"belowHeader",contentAlign:"center",contributorsPosition:"bottom",hasContributorImageBackground:!1,hasInvertedBylineLink:!1,hasMargin:!1,hasStickySocialIcons:!0,hideCaption:!1,hideContributorTitle:!1,hideContributors:!1,hideDangerousDek:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIcons:!1,hideSocialIconsOnMobile:!1,imageAlignment:"center",isInset:!1,isTextRight:!1,issueDatePostfix:" Issue",ledeContentAlign:"left",musicRating:{score:null},persistentAsideAlign:"left",publishDatePosition:"bottom",shouldAlignCenterWhenNoCaption:!1,shouldEnableNativeShareOnDesktop:!1,shouldFitToViewport:!0,shouldHeaderFitToViewport:!1,showBookmarked:!1,showContentDivider:!1,showContributorImage:!0,showFullHeaderViewInMobile:!1,showHeaderDivider:!0,showReviewLink:!0,socialIconsToHide:[],socialMediaPositionInMobile:"inTitleBlock",stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='SplitScreenContentHeaderWrapper']",edge:"bottom"},textAlign:"center",theme:"standard"},he.displayName="SplitScreenContentHeader",e.exports=he},72149:(e,t,i)=>{e.exports=i(68660)},3650:(e,t,i)=>{const o=i(36319);t.Z=(0,o.defineMessages)({ratingLinkLabel:{id:"SplitScreenContentHeader.RatingLinkLabel",defaultMessage:"Read Reviews",description:"SplitScreenContentHeader component Rating Link Label"},variousArtists:{id:"SplitScreenContentHeader.VariousArtists",defaultMessage:"Various Artists",description:"SplitScreenContentHeader component various artists text"}})},11850:e=>{const t={genre:"Genre:",label:"Label:",reviewDate:"Reviewed:"};e.exports={formatInfoSliceItems:e=>{if(!e)return[];const i=[];return Object.keys(e).forEach((o=>{e[o]&&e[o].length&&t[o]&&i.push({key:t[o],value:e[o]})})),i}}},5999:(e,t,i)=>{const o=i(45697),n=i(67294),{InfoSliceValue:a,InfoSliceKey:r,InfoSliceItem:s,InfoSliceListItem:l,InfoSliceList:d,InfoSliceWrapper:c}=i(93892),{trackComponent:p}=i(40199),h=({className:e,items:t,isMusicReview:i})=>(n.useEffect((()=>{p("InfoSlice")}),[]),t&&0!==t.length?n.createElement(c,{className:e},n.createElement(d,{isMusicReview:i},t.map((e=>{const{key:t,value:i}=e;return t&&i?n.createElement(l,{key:t.toString().toLowerCase()},n.createElement(s,null,n.createElement(r,null,t),n.createElement(a,null,i))):null})))):null);h.propTypes={className:o.string,isMusicReview:o.bool,items:o.arrayOf(o.shape({key:o.string,value:o.string}))},h.defaultProps={isMusicReview:!1},e.exports=h},28891:(e,t,i)=>{e.exports=i(5999)},93892:(e,t,i)=>{const o=i(51117).default,{calculateSpacing:n,getColorStyles:a}=i(79720),{BaseText:r}=i(74327),{BREAKPOINTS:s}=i(85326),{maxThresholds:l}=i(28657),d=o(r).withConfig({displayName:"InfoSliceValue"})`
  display: table-cell;
  vertical-align: top;
`;d.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.globalEditorial.numerical-small"};const c=o(r).withConfig({displayName:"InfoSliceKey"})`
  display: table-cell;
  padding-right: ${n(1)};
  vertical-align: top;
`;c.defaultProps={colorToken:"colors.consumption.body.standard.subhed",typeIdentity:"typography.definitions.globalEditorial.context-title"};const p=o.div.withConfig({displayName:"InfoSliceItem"})`
  display: table;
  align-items: center;
  padding: ${n(.5)} 0;
`,h=o.li.withConfig({displayName:"InfoSliceListItem"})`
  @media (max-width: ${l.md}px) {
    margin: 0 auto;
  }
  @media (min-width: ${s.md}) {
    margin-right: ${n(3)};

    :last-child {
      margin-right: ${n(0)};
    }
  }
`,g=o.ul.withConfig({displayName:"InfoSliceList"})`
  display: flex;
  flex-direction: column;
  margin: 0;
  border-width: 2px 0 0;
  border-style: solid;
  ${({theme:e})=>a(e,"border-color","colors.consumption.body.standard.divider")};
  padding: ${n(1.5)} 0;
  list-style: none;

  @media (min-width: ${s.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    ${({isMusicReview:e})=>e&&"\n    justify-content: center;\n    border-width: 0 0 0;"}
  }
  ${({isMusicReview:e})=>e&&"\n  justify-content: center;\n  border-width: 0 0 0;"}
`,u=o.div.withConfig({displayName:"InfoSliceWrapper"})``;e.exports={InfoSliceValue:d,InfoSliceKey:c,InfoSliceItem:p,InfoSliceListItem:h,InfoSliceList:g,InfoSliceWrapper:u}},80786:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BestNewMusicArrows=void 0;const o=i(67294),n=i(45697),{SvgWrapper:a,SvgStyle:r}=i(92545);t.BestNewMusicArrows=e=>o.createElement(a,{theme:e.theme,isBestBoth:e.isBestBoth,isBest:e.isBest},o.createElement(r,{x:"0px",y:"0px",viewBox:"0 0 80 40"},o.createElement("g",null,o.createElement("polyline",{points:"25.4,14.7 33.9,14.7 33.9,39.8 46.3,39.8 46.3,14.7 54.8,14.7 40.1,0 25.4,14.7   "}),o.createElement("polyline",{points:"50.6,40 80,40 65.2,25.4 50.6,40    "}),o.createElement("polyline",{points:"0,40 29.4,40 14.7,25.4 0,40    "})))),t.BestNewMusicArrows.propTypes={isBest:n.bool,isBestBoth:n.bool,theme:n.string}},52343:(e,t,i)=>{const o=i(67294),{useIntl:n}=i(36319),a=i(45697),{BestNewMusicArrows:r}=i(80786),s=i(86865).Z,l=i(17843),{trackComponent:d}=i(40199),{BestNewMusicText:c,Rating:p,ScoreBoxWrapper:h,ScoreCircle:g}=i(92545),u=({rating:e,isBestNewMusic:t,isBestNewReissue:i,palette:a,isTrackReview:u})=>{o.useEffect((()=>{d("ScoreBox")}),[]);const{formatMessage:m}=n(),b=u&&t;if(u&&!t)return null;const y=e<10?Number(e).toFixed(1):e,S=t||i,v=t&&i;return o.createElement(l,{palette:a},o.createElement(h,null,S&&o.createElement(r,{isBestBoth:v,isBest:S}),!b&&o.createElement(g,{isBest:S,isBestBoth:v},o.createElement(p,{isBest:S,isBestBoth:v},y)),S&&o.createElement(c,{isBestBoth:v,isBest:S},!b&&t&&o.createElement("div",null," ",m(s.BestNewMusic)," "),!b&&i&&o.createElement("div",null," ",m(s.BestNewReissue)),b&&o.createElement("div",null," ",m(s.BestNewTrack)))))};u.propTypes={isBestNewMusic:a.bool,isBestNewReissue:a.bool,isTrackReview:a.bool,palette:a.oneOf(["standard","inverted"]),rating:a.number},u.defaultProps={isBestNewMusic:!1,isBestNewReissue:!1,palette:"standard"},e.exports=u},90227:(e,t,i)=>{e.exports=i(52343)},92545:(e,t,i)=>{const{default:o}=i(51117),{BaseText:n}=i(74327),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=i(79720),l=o.div.withConfig({displayName:"ScoreBoxWrapper"})`
  position: relative;
  width: 130px;
`,d=o.div.withConfig({displayName:"ScoreCircle"})`
  position: relative;
  margin-bottom: ${a(2)};
  border: 7px solid
    ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  border-radius: 50%;
  padding-bottom: ${a(2)};
  width: 134px;
  height: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,c=o(n).withConfig({displayName:"Rating"})`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  ${s("typography.definitions.globalEditorial.numerical-large")};
`,p=o(n).withConfig({displayName:"BestNewMusicText"})`
  ${s("typography.definitions.globalEditorial.context-primary")};
  width: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,h=o.svg.withConfig({displayName:"SvgStyle"})`
  margin-bottom: ${a(2,"px")};
  margin-left: ${a(3,"px")};
  width: 86px;
  height: 26px;
`,g=o.div.withConfig({displayName:"SvgWrapper"})`
  svg {
    fill: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  }
  line-height: 0em;
`;e.exports={BestNewMusicText:p,Rating:c,ScoreBoxWrapper:l,ScoreCircle:d,SvgStyle:h,SvgWrapper:g}},86865:(e,t,i)=>{const o=i(36319);t.Z=(0,o.defineMessages)({BestNewMusic:{id:"ScoreBox.BestNewMusic",defaultMessage:"Best New Music",description:"Best New Music"},BestNewReissue:{id:"ScoreBox.BestNewReissue",defaultMessage:"Best New Reissue",description:"Best New Reissue"},BestNewTrack:{id:"ScoreBox.BestNewTrack",defaultMessage:"Best New Track",description:"Best New Track"}})},28604:(e,t,i)=>{const o=i(67294),n=i(83253),a=i(94184),{createGlobalStyle:r}=i(51117),s=i(74691),l=i(23279),d=i(30998),c=i(59704),p=i(58509),{useIntl:h}=i(36319),g=i(51889).Z,u=i(99815),m=i(70302),b=i(81768),{trackComponent:y}=i(40199),{LightboxCloseButtonIcon:S,LightboxSwipe:v,LightboxWrapper:C,LightboxSlidesWrapper:w}=i(988),{getColorToken:f,getZIndex:T}=i(79720);let B;const D=r`
  .lightbox {
    height: 100vh;
  }

  .body__lightbox--open {
    overflow: hidden;
  }

  .lightbox__overlay {
    position: fixed;
    top: 0;
    left: 0;
    transition: opacity 0.2s;
    opacity: 0;
    z-index: ${T("hyperstitialLayer")};
    background-color: ${({theme:e})=>f(e,"colors.consumption.lead.standard.background")};

    &.lightbox__overlay--open {
      opacity: 1;

      &.lightbox__overlay--closing {
        opacity: 0;
      }
    }
  }

  .listicle-variation {
    overflow-y: scroll;
  }
`;e.exports={withLightbox:(e,t,i,r,f=!1,T="Default")=>I=>{const[x,k]=o.useState(-1),{formatMessage:L}=h(),E=e=>i&&k(s(x+e,0,t.length-1)),A=x>-1,P=e=>{var t;"swipeClose"!==e&&("IMG"===(t=e.target).tagName||"SPAN"===t.tagName)||k(void 0)},H={transform:`translate(${"listicle"===r?"0":-100*x/t.length}%)`},R=()=>{B&&(B.style.height=`${window.innerHeight}px`)};o.useEffect((()=>{y("LightBox",T)})),o.useEffect((()=>{const e=l(R,50);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}})),o.useEffect((()=>{!A&&B&&p.enableBodyScroll(B)}),[A]);const N=(e,t)=>f?{}:t.reduce(((t,i)=>Object.assign(Object.assign({},t),{[i]:t=>P(e||t)})),{});return o.createElement(C,null,o.createElement(u.Provider,{value:{expandHandler:e=>k(d(t,{id:e})),isInSlides:e=>c(t,{id:e})}},o.createElement(e,Object.assign({},I))),o.createElement(n,{className:a("lightbox "+(r?`${r}-variation`:"")),overlayClassName:{base:a("lightbox__overlay"),afterOpen:"lightbox__overlay--open",beforeClose:"lightbox__overlay--closing"},bodyOpenClassName:"body__lightbox--open",isOpen:A,onAfterOpen:()=>{p.disableBodyScroll(B),R()},onRequestClose:()=>{k(void 0)},contentRef:e=>{e&&(B=e)},closeTimeoutMS:200,contentLabel:L(g.contentLabel)},o.createElement(S,{ButtonIcon:b,isIconButton:!0,className:r?`${r}-variation-close`:"",dataAttrs:{"data-action":"close"},label:L(g.closeButtonIconLabel),onClickHandler:P,role:"button",ariaLabel:L(g.closeButtonIconLabel)}),o.createElement(v,Object.assign({},N("swipeClose",["onSwipeDown","onSwipeUp"]),{onSwipeRight:()=>E(-1),onSwipeLeft:()=>E(1),shouldPreventDefaultEvent:!0}),o.createElement(w,Object.assign({className:r?`${r}-variation-slide-wrapper`:"",style:H},N("",["onMouseDown","onTouchEnd"])),t.map((e=>o.createElement(m,Object.assign({},e,{className:r?`${r}-variation-slide`:"",key:e.id})))))),o.createElement(D,null)))}}},70302:function(e,t,i){var o=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i};const n=i(45697),a=i(67294),r=i(31954),s=i(98288),l=i(63030),{LightboxSlideWrapper:d,LightboxSlideTopSpacer:c,LightboxSlideImageCaptionOuter:p,LightboxSlideCaptionContainer:h}=i(988),g=e=>{var{caption:t,className:i,credit:n,dangerousCredit:l,dangerousCaption:g}=e,u=o(e,["caption","className","credit","dangerousCredit","dangerousCaption"]);const[m,b]=a.useState("landscape");return a.createElement(d,{className:i,screenOrientation:m},a.createElement(c,null),a.createElement(p,null,a.createElement(s,Object.assign({},u,{contentType:"photo",onAssetLoaded:({width:e,height:t})=>{e<t?b("portrait"):e>t?b("landscape"):e===t&&b("square")}})),a.createElement(h,null,a.createElement(r,{dangerousCaptionText:t||g,dangerousCredit:n||l,hasLinebreak:"portrait"===m}))))};g.propTypes=Object.assign(Object.assign({},l.propTypes),{caption:n.string,credit:n.string,dangerousCaption:n.string,dangerousCredit:n.string}),e.exports=g},92267:(e,t,i)=>{e.exports=i(28604)},988:(e,t,i)=>{const o=i(51117).default,n=i(7279),{CaptionWrapper:a,CaptionText:r}=i(5481),{calculateSpacing:s,getColorToken:l,getLinkStyles:d}=i(79720),c=i(89058),{BREAKPOINTS:p}=i(85326),{ResponsiveImageContainer:h}=i(7230),g=o.div.withConfig({displayName:"LightboxWrapper"})`
  grid-column-start: main;
`,u=o(c).withConfig({displayName:"LightboxSwipe"})`
  display: flex;
  width: 100%;
  height: 100%;
`,m=o(n.Utility).withConfig({displayName:"LightboxCloseButtonIcon"})`
  position: fixed;
  top: ${s(.5)};
  right: ${s(.5)};
  z-index: 1;
  cursor: pointer;
  padding: 8px;
  line-height: 0;

  &.listicle-variation-close {
    top: 1px;
  }

  &,
  &:hover {
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.white")};
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  &:focus {
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.brand-primary")};
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  .icon {
    fill: ${({theme:e})=>l(e,"colors.interactive.base.dark")};
  }

  .icon:hover {
    fill: ${({theme:e})=>l(e,"colors.interactive.base.brand-primary")};
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  @media (min-width: ${p.md}) {
    top: ${s(2)};
    right: ${s(2)};
  }
`,b=o.div.withConfig({displayName:"LightboxSlidesWrapper"})`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  transition: transform 0.4s ease-in-out;
  height: 100%;

  &.listicle-variation-slide-wrapper {
    display: block;
  }
`,y=o.div.withConfig({displayName:"LightboxSlideTopSpacer"})``,S=o.div.withConfig({displayName:"LightboxSlideImageCaptionOuter"})``,v=o.div.withConfig({displayName:"LightboxSlideCaptionContainer"})``,C=o.div.withConfig({displayName:"LightboxSlideWrapper"})`
  background-color: ${({theme:e})=>l(e,"colors.consumption.lead.standard.background")};
  width: 100vw;

  &.listicle-variation-slide {
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
    padding: ${s(3)} ${s(9)};

    ${a} {
      margin-bottom: 0;
      background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
    }
  }

  ${a} {
    background-color: ${({theme:e})=>l(e,"colors.consumption.lead.standard.background")};
    text-align: initial;

    ${r} {
      ${({theme:e})=>d(e,"colors.consumption.lead.standard.description",null)}

      &:hover {
        text-decoration: none;
      }
    }
  }

  ${({screenOrientation:e})=>"landscape"===e||"portrait"===e||"square"===e?`\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: auto;\n\n    ${S} {\n      display: contents;\n    }\n\n    .responsive-image {\n      display: flex;\n      flex-direction: column;\n\n      ${h} {\n        max-height: 85vh;\n        object-fit: contain;\n      }\n    }\n\n    ${v} {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n    }\n\n    ${a} {\n      margin: ${s(2)} ${s(2)} ${s(5)};\n    }\n\n    @media (min-width: ${p.md}) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: ${s(4)};\n      height: initial;\n\n      ${y} {\n        display: none;\n      }\n\n      ${S} {\n        display: block;\n      }\n\n      .responsive-asset {\n        display: table-cell;\n      }\n\n      ${v} {\n        display: table-caption;\n        caption-side: bottom;\n      }\n\n      ${a} {\n        margin: 0;\n        margin-top: ${s(1)};\n      }\n    }\n\n    ${"portrait"===e?`\n      @media (min-width: ${p.lg}) {\n        display: flex;\n        flex-direction: row;\n        height: 100%;\n\n        ${y} {\n          display: none;\n        }\n\n        ${S} {\n          display: contents;\n        }\n\n        .responsive-asset {\n          display: flex;\n          height: 100%;\n\n          .responsive-image {\n            height: 100%;\n\n            ${h} {\n              height: 100%;\n              max-height: initial;\n            }\n          }\n        }\n\n        ${v} {\n          display: flex;\n          flex-direction: column;\n          align-self: flex-end;\n        }\n\n        ${a} {\n          margin: 0;\n          margin-bottom: ${s(6)};\n          margin-left: ${s(2)};\n          max-width: 180px;\n        }\n      }\n    `:""}\n  `:""}
`;e.exports={LightboxSwipe:u,LightboxCloseButtonIcon:m,LightboxSlideImageCaptionOuter:S,LightboxSlideCaptionContainer:v,LightboxWrapper:g,LightboxSlideTopSpacer:y,LightboxSlidesWrapper:b,LightboxSlideWrapper:C}},51889:(e,t,i)=>{const o=i(36319);t.Z=(0,o.defineMessages)({contentLabel:{id:"Lightbox.ContentLabel",defaultMessage:"Photo Gallery",description:"Lightbox component content label"},closeButtonIconLabel:{id:"Lightbox.CloseButtonIconLabel",defaultMessage:"Close Lightbox",description:"Lightbox component close button icon label"}})},20886:(e,t,i)=>{const{asConfiguredComponent:o}=i(36380),n=i(45495);e.exports=o(n,"BasePage")},83074:(e,t,i)=>{const o=i(36319);t.Z=(0,o.defineMessages)({relatedArticleHed:{id:"PodcastDetailedPage.relatedArticleHed",defaultMessage:"Related Articles",description:"Default section hed text for PodcastDetailedPage page summary river"},contextualHeader:{id:"PodcastDetailedPage.contextualHeader",defaultMessage:"You Might Like This",description:"Contextual Header for podcast recirc unit"},primaryCTALabel:{id:"PodcastDetailedPage.primaryCTALabel",defaultMessage:"Start Listening Now",description:"Default CTA text for Start Listening Now button"}})},7595:(e,t,i)=>{const o=i(18721),n=i(27361),a=e=>{const t=n(e,"gradient-style"),i=n(e,"color-stops");let o=n(e,"angle");"radial"===t&&(o=null);const a=((e,t,i=null)=>null===i?`${e}-gradient(${t})`:`${e}-gradient(${i}, ${t})`)(t,i,o);return`background: ${a}; position: sticky;`},r=e=>{const t=n(e,"url"),i=n(e,"repeat"),o=n(e,"color"),a=n(e,"attachment"),r=n(e,"size");return((e,t="no-repeat",i="center",o="cover",n="scroll",a="transparent")=>{let r,s="";if(null!==e&&(r=e),s=`background-image:${r};\n      background-attachment:${n};\n      background-color:${a};\n      background-repeat:${t};\n      background-position:${i};`,"string"==typeof o)s+=`background-size:${o};`;else{const e=[];o.forEach((t=>{e.push(t)})),s+=`background-size:${o.toString()};`}return s})(t,i,n(e,"position"),r,a,o)};e.exports={getPattern:(e,t)=>{let i;if(!e||0===Object.keys(e).length||!t)return"background: none;";if(o(e,"container-styles")){const d=e["container-styles"];if(!d[t])return"background: none;";i=d[t];const c=o(i,"pattern")?i.pattern:null;if(c&&c.length){let e="";return c.length>=2?(c.forEach(((t,i)=>{let s=i;if(o(t,"gradient"))e+=a(n(t,"gradient"));else if(o(t,"image")){let i="";n(t,"image").size&&(i=n(t,"url")),i.size?e+=`'url(${i})'`:s=c.length,r(n(t,"image"))}else if(o(t,"solid")){const i=n(t,"solid");i&&(e+=n(i,"color"))}s!==c.length-1&&(e+=",")})),e.toString()):(s=c[0],o(s,"gradient")?a(n(s,"gradient")):o(s,"image")?r(n(s,"image")):o(s,"solid")?(l=n(s,"solid"),`background-color:${n(l,"color")};`):"background: none;")}}var s,l;return"background: none;"}}},84885:e=>{e.exports=e=>{if(!window)return{};const{bottom:t,left:i,right:o,top:n}=e.getBoundingClientRect(),a=e.currentStyle||window.getComputedStyle(e);return{bottom:t+parseFloat(a.marginBottom),left:i-parseFloat(a.marginLeft),right:o+parseFloat(a.marginRight),top:n-parseFloat(a.marginTop)}}}}]);
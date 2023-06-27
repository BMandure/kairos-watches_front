(function() { function bxBootstrap() {
	var re = /bot|crawl|slurp|spider|mediapartners|headlesschrome|snap-prefetch|remotasks|woorank|uptime\.com|facebookexternalhit|facebookcatalog/i;
	if (re.test(navigator.userAgent) || navigator.userAgent == '') {
		return;
	}

	if (!(window.bouncex&&bouncex.website)) {
		var pushedData = [];
		if(window.bouncex && bouncex.push && bouncex.length){
			pushedData = bouncex;
		}
		window.bouncex = {};
		bouncex.pushedData = pushedData;
		bouncex.website = {"id":5916,"name":"Conde Nast - GQ UK","cookie_name":"bounceClientVisit5916","domain":"gq-magazine.co.uk","ct":"bind_to_domain","ally":0,"ei":0,"tcjs":"","cjs":"","force_https":false,"waypoints":false,"content_width":900,"gai":"","swids":"","sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":{"gdpr":1,"gmp":0,"whitelist_check":0},"burls":[],"ple":false,"fbe":true,"mas":2,"map":1,"gar":true,"ete":2,"ettm":true,"etjs":"","dge":false,"bxidLoadFirst":false,"pie":false,"cme":false,"gbi_enabled":0,"bpush":false,"pt":{"article":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"!!document.querySelector(\"meta[name='content-type']\") && !!document.querySelector(\"meta[name='content-type']\").getAttribute('content') && \ndocument.querySelector(\"meta[name='content-type']\").getAttribute('content') === \"article\";"},{"activation":"current_page_url","prop":"contains","prop2":"","prop3":"","val":"/article/"}]]},"cart":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('#btnToCheckout').length > 0;"}]]},"category":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"!!document.querySelector(\"meta[name='content-type']\") && !!document.querySelector(\"meta[name='content-type']\").getAttribute('content') && \ndocument.querySelector(\"meta[name='content-type']\").getAttribute('content') === \"bundle\";"}]]},"checkout":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('#placeOrder').length > 0;"}]]},"gallery":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"!!document.querySelector(\"meta[name='content-type']\") && !!document.querySelector(\"meta[name='content-type']\").getAttribute('content') && document.querySelector(\"meta[name='content-type']\").getAttribute('content') === \"gallery\";"},{"activation":"current_page_url","prop":"contains","prop2":"","prop3":"","val":"/gallery/"}]]},"home":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"window.location.pathname === '/';"}]]}},"els":{},"vars":[{"name":"page_type","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.website.pts;","trigger":"pageload"},{"name":"dfp_rblock","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function () {\n    if (!bouncex.dfpRan) {\n        bouncex.dfpRan = true;\n        return 'not_ready';\n    }\n    function check() {\n        bouncex.dfp_loaded = bouncex.utils.getNestedProp('dfp_loaded', false, bouncex);\n\n        var event = bouncex.gbi2.getDfpEndPageViewEvent();\n\n        if (event && event.dfp_status) {\n            if (event.dfp_status == 'pending') {\n                return 'not_ready';\n            }\n\n            bouncex.dfp_loaded = true;\n\n            if (event.dfp_status == 'suppressed') {\n                return 'sponsor';\n            }\n\n            return 'allow';\n        }\n\n        return 'not_ready';\n    }\n\n    if (bouncex.website.gbi.rblocks) {\n        if (bouncex.dfp_loaded) {\n            return null;\n        } else if (window.googletag && googletag.apiReady && googletag.pubadsReady && bouncex.gbi2) {\n            return check();\n        } else if (typeof window.googletag === 'undefined') {\n            return 'no_googletag';\n        }\n        return 'fallback';\n    } else {\n        return 'not_ready';\n    }\n})()","trigger":"pageload"},{"name":"video_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('iframe[data-cne-playing=\"1\"]').length > 0;","trigger":"pageload"},{"name":"submitted_recommends","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_daily","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"article_name","polling":"all","persist":"no","page_types":["article"],"testmode":false,"default":"false","code":"jQuery('meta[property=\"og:title\"]').first().attr('content');","trigger":"pageload"},{"name":"article_category","polling":"all","persist":"no","page_types":["article"],"testmode":false,"default":"false","code":"jQuery('[data-testid=\"ContentHeaderTitleBlockWrapper\"] [class*=RubricName]').first().text();","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":0,"mibcx":1,"te":0,"cart_rep":{"get":"","set":""},"ulpj":null,"cus":"","miw_exclude":"","enabled":0},"etjson":null,"osre":true,"osru":"osr.bounceexchange.com/v1/osr/items","checkDfp":false,"gamNetwork":"","spa":0,"spatm":1,"preinit_cjs":"","crs":{"integrations":null,"pageCount":null},"mat":0,"math":0,"cpnu":"coupons.bounceexchange.com","dfpcms":0,"sms":{"optm":"","eventSharing":false,"shqId":"","enabled":0},"pde":false,"fmc":["GB"],"fme":true,"fmx":"","sdk":{"android":{"enabled":false,"enabledVersions":[],"eventModifications":null},"ios":{"enabled":false,"enabledVersions":[],"eventModifications":null}},"onsite":{"enabled":1},"ads":{"enabled":0},"pubs":{"enabled":1},"ga4_property_id":"","ga4_measurement_id":""}
;
		bouncex.tag = 'tag3';
		bouncex.$ = window.jQuery;
		bouncex.env = 'production';
		bouncex.restrictedTlds = {"casl":{"ca":1},"gdpr":{"ad":1,"al":1,"at":1,"ax":1,"ba":1,"be":1,"bg":1,"by":1,"xn--90ais":1,"ch":1,"cy":1,"cz":1,"de":1,"dk":1,"ee":1,"es":1,"eu":1,"fi":1,"fo":1,"fr":1,"uk":1,"gb":1,"gg":1,"gi":1,"gr":1,"hr":1,"hu":1,"ie":1,"im":1,"is":1,"it":1,"je":1,"li":1,"lt":1,"lu":1,"lv":1,"mc":1,"md":1,"me":1,"mk":1,"xn--d1al":1,"mt":1,"nl":1,"no":1,"pl":1,"pt":1,"ro":1,"rs":1,"xn--90a3ac":1,"ru":1,"su":1,"xn--p1ai":1,"se":1,"si":1,"sj":1,"sk":1,"sm":1,"ua":1,"xn--j1amh":1,"va":1,"tr":1}};
		bouncex.client = {
			supportsBrotli: 1
		};
		bouncex.assets = {"ads":"531e4f2ee859d37adbf3da39849c72a9","creativesBaseStyles":"a53944a2","inbox":"9ffb0afbd53abff968999e9ed3f418a5","onsite":"cf4d7bb5ab0fde22ad6ae86f638f8246","sms":"602f03d5fa00679de3f769a199bed82f"};
		bouncex.push = function(pushData) {
			bouncex.pushedData.push(pushData);
		}

		var runtime = document.createElement('script');
		runtime.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/runtime_b4ad65fa381da0648767eee58152de5e.br.js');
		runtime.setAttribute('async', 'async');
		runtime.setAttribute('onload', 'bouncex.initializeTag()');

		bouncex.initializeTag = function() {
			var script = document.createElement('script');
			script.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/main-v2_243804a7a16a269e5cbfa28db2382900.br.js');
			script.setAttribute('async', 'async');
			document.body.appendChild(script);


			delete bouncex.initializeTag;
		};

		document.body.appendChild(runtime);

	}


}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bxBootstrap);
} else {
	bxBootstrap();
}})();
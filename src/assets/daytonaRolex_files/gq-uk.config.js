window.SparrowConfig={capturedCookies:[{cookie_key:"amg_user_partner",sparrow_key:"cnid"},{cookie_key:"aam_uuid",sparrow_key:"aam_uuid"},{cookie_key:"ba_opt_out",sparrow_key:"_anonymize"}],capturedQueryParams:["mbid","CNDID","intcid"],capturedHashParams:["intcid"],preinit:["user-context"],environment:"prod",events:[{selector:"window",type:["pageview"],meta:{dim1:"function d(){return window._4d&&window._4d.user&&window._4d.user.sg&&window._4d.user.sg.join(',')||undefined}",dim6:"function e(){return window && window.dataLayer && window.dataLayer[0] && JSON.stringify(window.dataLayer[0].experiments) || undefined; }"}},{selector:"window",type:["scroll"]},{selector:"window",type:["timespent"]},{parent:"body",selector:"[data-gtm-us-recommendation-type]",type:["inViewExists"],dataAttrMapper:{dim1:"href",dim5:"data-gtm-us-recommendation-type"},customMapper:{_c:"variations_recommendations",_t:"linksIn-view"},meta:{dim2:'function cutLink(n,i){return new Promise(function(n){if(i&&i.dim1){var r=i.dim1;return r.indexOf("#")>0?n(r.substring(0,r.indexOf("#"))):n(r)}})}',dim3:'function cutLink(n,i){return new Promise(function(n){if(i&&i.dim1){var r=i.dim1;var q=r.substring(r.indexOf("intcid=")); if(q.indexOf("?")>-1) {q=q.substring(0,q.lastIndexOf("?"))}; if (q.indexOf("&")>-1) {q=q.substring(0,q.lastIndexOf("&"))}; q=q.split("_"); return (r.indexOf("#")>0 && q.length > 3)?n(q[3]):n("")}return n("")})}',dim4:'function cutLink(n,i){return new Promise(function(n){if(i&&i.dim1){var r=i.dim1;var q=r.substring(r.indexOf("intcid=")); if(q.indexOf("?")>-1) {q=q.substring(0,q.lastIndexOf("?"))}; if (q.indexOf("&")>-1) {q=q.substring(0,q.lastIndexOf("&"))}; q=q.split("_"); return (r.indexOf("#")>0 && q.length > 4)?n(q[4]):n("")}return n("")})}'}},{parent:"body",selector:"[data-gtm-us-recommendation-type]",type:["click"],dataAttrMapper:{dim1:"href",dim5:"data-gtm-us-recommendation-type"},customMapper:{_c:"variations_recommendations",_t:"linkClick"},meta:{dim2:'function cutLink(n,i){return new Promise(function(n){if(i&&i.dim1){var r=i.dim1;return r.indexOf("#")>0?n(r.substring(0,r.indexOf("#"))):n(r)}})}',dim3:'function cutLink(n,i){return new Promise(function(n){if(i&&i.dim1){var r=i.dim1;var q=r.substring(r.indexOf("intcid=")); if(q.indexOf("?")>-1) {q=q.substring(0,q.lastIndexOf("?"))}; if (q.indexOf("&")>-1) {q=q.substring(0,q.lastIndexOf("&"))}; q=q.split("_"); return (r.indexOf("#")>0 && q.length > 3)?n(q[3]):n("")}return n("")})}',dim4:'function cutLink(n,i){return new Promise(function(n){if(i&&i.dim1){var r=i.dim1;var q=r.substring(r.indexOf("intcid=")); if(q.indexOf("?")>-1) {q=q.substring(0,q.lastIndexOf("?"))}; if (q.indexOf("&")>-1) {q=q.substring(0,q.lastIndexOf("&"))}; q=q.split("_"); return (r.indexOf("#")>0 && q.length > 4)?n(q[4]):n("")}return n("")})}'}}],meta:{cKh:"function (d) {var fds = window._4d.context; var keywords = ''; if (fds.keywords && fds.keywords.list) { var temp = fds.keywords.list.filter(function (d) { return d.score > .6 ? true : false; }); temp = temp.map(function (d) { return d.keyword.toLowerCase(); }); keywords = temp.join(',');} return keywords;}"},origin:"gq-uk",title:"gq-uk",version:"1.0",org_id:"4gKgcEyA7gQoJUFsbr2fioHUJeep"};

(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),d=i(a("VbXa")),s=i(a("8OQS")),l=i(a("pVnL")),c=i(a("q1tI")),o=i(a("17x9")),f=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},u=function(e){var t=e.media;return!!t&&(w&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(w&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(u);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=f(e),a=g(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,w="undefined"!=typeof window,v=w&&window.IntersectionObserver,y=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},i&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),c.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function A(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',d=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",o=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+d+s+a+i+t+n+r+l+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=e.ariaHidden,d=c.default.createElement(O,(0,l.default)({src:t},r,{ariaHidden:n}));return a.length>1?c.default.createElement("picture",null,i(a),d):d},O=c.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,d=e.onLoad,o=e.onError,f=e.loading,u=e.draggable,g=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":g,sizes:a,srcSet:i,src:r},p,{onLoad:d,onError:o,ref:t,loading:f,draggable:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=w&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||w&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,d.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=g(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,d=e.imgStyle,s=void 0===d?{}:d,o=e.placeholderStyle,u=void 0===o?{}:o,g=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,w=e.durationFadeIn,v=e.Tag,y=e.itemProp,S=e.loading,I=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:k?1:0,transition:C?"opacity "+w+"ms":"none"},s),W="boolean"==typeof b?"lightgray":b,z={transitionDelay:w+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&z,{},s,{},u),H={title:t,alt:this.state.isVisible?"":a,style:N,className:g,itemProp:y};if(h){var B=h,P=p(h);return c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),W&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:W,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&z)}),P.base64&&c.default.createElement(L,{ariaHidden:!0,src:P.base64,spreadProps:H,imageVariants:B,generateSources:A}),P.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,src:P.tracedSVG,spreadProps:H,imageVariants:B,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,E(B),c.default.createElement(O,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:S},P,{imageVariants:B}))}}))}if(m){var T=m,j=p(m),M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete M.display,c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},W&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:W,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},C&&z)}),j.base64&&c.default.createElement(L,{ariaHidden:!0,src:j.base64,spreadProps:H,imageVariants:T,generateSources:A}),j.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,src:j.tracedSVG,spreadProps:H,imageVariants:T,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,E(T),c.default.createElement(O,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:S},j,{imageVariants:T}))}}))}return null},t}(c.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string}),W=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string});C.propTypes={resolutions:V,sizes:W,fixed:o.default.oneOfType([V,o.default.arrayOf(V)]),fluid:o.default.oneOfType([W,o.default.arrayOf(W)]),fadeIn:o.default.bool,durationFadeIn:o.default.number,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string,loading:o.default.oneOf(["auto","lazy","eager"]),draggable:o.default.bool};var z=C;t.default=z},EPyS:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"89933e23-c363-5eca-b3db-323523fc5aa5","fields":{"slug":"/notifcation-dock/"},"frontmatter":{"title":"Notification Dock","date":"March 2018","tags":["UX","Visual Design","Prototyping"],"excerpt":"Notification Dock is a platform-wide solution for notifying users from all of their applications.","featuredImage":{"childImageSharp":{"fluid":{"aspectRatio":1.3333333333333333,"src":"/static/98e8d515a43e8cc894d85ab21f23b46e/2926a/new-dock.png","srcSet":"/static/98e8d515a43e8cc894d85ab21f23b46e/f976c/new-dock.png 200w,\\n/static/98e8d515a43e8cc894d85ab21f23b46e/3ea06/new-dock.png 400w,\\n/static/98e8d515a43e8cc894d85ab21f23b46e/2926a/new-dock.png 800w,\\n/static/98e8d515a43e8cc894d85ab21f23b46e/f232b/new-dock.png 1100w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAADuElEQVQ4y32U+U9cdRTFX5rWVquloEIZoIUCZREolGER7ALIMhQoyzAsM2UblkItEG01xhiNpppKAQHZt2FfpizToWytVGI1ampqbEJsakhd/o+Pd16VxMT4w8mdb97NOffcZZTffv+ThbW7OMdnsicylV3HE9kVlsDuiNfZHZXOs9E6ZpfWsa3fxS3JgPPpPJxOZrNHm8ZurY698TkokWl0DE9x+6t7KNtP/mBxbYNQfSUhhRcJ0lfjrzPikWbCM6sS74xSZu1rLK5+SWCumQB9jZrjqTPhlmrC61yVRCPtQxMs39lEebz9hPnl2xzLNhNUeInAgoscza7icJYZzdlyvDLKmLStMn9rlZD8csJL3iS0uJ5gEQ801HFMfwH3lAJa+sewr26gPHq8jfXWOkEFtZLYQKixgaO51XhlVqDJqFCJxxdXmLUt433WpL6P5NTgra/DO69WKqzEJdFAU+8IC8KjbP3yKzP2ZYINZiLONxJurBflWvyE1CfbYbkEy6yN6UU7QXllhJgaecVRocARA8SRq1i/1j2M1baC8vPWI0lewjfDiK+o+ufXSdIbBBXVq5UeTjcxOL3AmNWG55lzuCXkoEnK3YF7Yi4H49K52tHH1PwSyoOHW4zN2fHPriBY1IKLLuEtNtylf4d0pXhI8/smbjA8Pc9LsUm8cOIUTtrTOEU+xUHtGfaHv8ZHrd2MW2+i3H/wEIt1EZ+sEvxyqvCV4Wh053FLKcY1xYgmzUjX6AwDE1ZcX03GKSoB5+jEHbjEJPG8iHzY3IlFnCjf3f+J4Zk5QgvMRJa+RbipgQDpYUB+Lb5i2VssdwxP0jM6zcsOQu2/CR1wEL7f1MGgOFHuff8jveOzaoWxlW8Ta75CTMUVoisuC2ENh2THPh8Yp1NI/4/wvWtt9I/Nomx+8wPdoq5JL8OvqBGfvAsckT30yjTjpitTl7e5b4T2gbGnhFH/Tfjup630WKZR7mx+S5eoeybp0aQW4fE3vNKKZWEL0SQb+ExWolVIXeOShSBB7ZtLTKKKF+X3ARnOO1db6ByaRFnb+JrW/lH2HY9nb1icGv+B4+1Q/0RWoqlriAMy0X3hJ3ku4tQO9sv3Z8LiufxxE18MjqPY5Y67ZYqxhdVEGypVRAm0+WY1JpXXc73HQkuvhRh5R+SWcULgiBE5DpQSV1zDB9c7aesbRbHeXJWzWlExLYs5ecPOmFzGiKzA8OScOrleEey2TEmPpuiSP4FOqaRDetouztqkFW1ydi0i2iyt+Qv9/ocQUmTqwAAAAABJRU5ErkJggg==","tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'800\'%20height=\'600\'%3e%3cpath%20d=\'M74%20351v249h290V101H74v250m363%200v249h290V490l-1-249V101H437v250m205-198c-4%204-1%2010%204%2010%206%200%209-6%205-10-3-3-6-2-9%200m-361%201c-3%202-2%207%201%209%206%203%2012-4%207-9-2-2-6-3-8%200m-155%2028v7l1-2h1l3%202v-4c0-1%201-1%201%201%201%203%204%204%204%201h1c2%202%206%204%206%202h5c4%200%205%200%205-2l1-1v2l2%201c2%200%203-1%202-4%200-2-4-3-4-1h-1l-4-1c-2%200-3%201-3%203l-1%203v-3c0-3%200-3-3-3l-5%201h-1l-2-1c-1%201-2%200-4-1h-4m81%200l-1%201-2%201h-9l-6-1c-5%200-5%200-5%203%200%204%202%204%202%200%200-2%200-2%201%200%201%204%206%204%206%200l1%201c1%202%203%202%203-1l1%201c1%202%205%203%205%201h1l2%201c2%200%204-7%202-8l-1%201m358%200l-2%201c-2-1-5-1-6%201l-2-1h-3l-1-1c-2%200-4%203-3%205%200%202%204%201%205-1l1-2v2l2%202%202-2%201-2v2l2%202c2%200%202%200%201-1-2-1-2-1%200-1l2%201%203%201c2%200%202%200%202-3%200-4-1-5-4-3m83%2022c0%201%200%202-2%201v-2h-6c-2%200-2%200-2%202%200%201%200%202%202%201v2l2-1%202-2v2c3%201%205%201%205-1l1-2%201%202%201%202%201-1h8c3%202%204%201%204-3%200-2%200-3-1-2s-4%202-4%200l-1-1-1%202h-7c-3-2-3-2-3%201m-443%2029c-1%201-5%202-12%201h-11v3l1%203%201-2c0-4%202-4%202-1l2%203v-5l1%202c0%202%200%202%202%201%201-2%201-2%202%200%200%202%202%203%202%200h1c2%202%205%203%205%201l-1-1h-2c0-2%204-1%204%201l3%201c2%200%202-1%202-4v-4l-2%201m81%2022c0%202%200%203-2%202v-3l-2%201h-2l-4-1c-3%200-3%200-3%203s0%203%201%201c0-3%202-3%202%200%200%202%201%202%203%202h3l-3-1-2-1h2c3-1%206%200%204%201-1%201%200%201%202%201s3-1%203-2l1-2v2c0%202%204%203%207%201h3l2%201c2%200%202-1%202-3%200-3%200-4-1-3-2%200-3%202-1%202l1%202-1%201-1-2h-1l-1-2c0-2%200-2-1%200l-1%201c-1-2-4-3-4-1h-2c-3-3-4-2-4%200m-122%2032c-2%203-1%206%201%204%201-2%203-2%205%201h3l3-1c0%202%200%202%203%201%202-1%203-6%200-7l-2%201h-2c-2-2-4-1-5%201s-1%202-1%200c-1-4-3-4-5%200m122%2055l-1%203v-2c0-1-1-2-4-2-5%200-5%200-5%203%200%202%202%202%205%200%201-1%202%200%201%202l3%201c3%200%203-1%203-3v-2l1%202c1%203%204%204%207%202h3l1-2%201-2v5c2%200%202-1%202-4s0-4-1-3l-2%201-1%201-1-1c-1-2-1-2-1%201%200%202%200%202-1%201-1-2-2-2-4-2h-3c-3-3-3-2-3%201m-121%2093l-1%203c-1%203-1%203%201%202%202%200%203%200%204%202h3c1-1%204-2%204%200l1%201%201-1%202-1c2%200%201-5-1-6l-3%201h-1l-2-1c-3%200-3%201-3%203s0%202-1-1-3-4-4-2\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","srcWebp":"/static/98e8d515a43e8cc894d85ab21f23b46e/b8c44/new-dock.webp","srcSetWebp":"/static/98e8d515a43e8cc894d85ab21f23b46e/f5581/new-dock.webp 200w,\\n/static/98e8d515a43e8cc894d85ab21f23b46e/4bf8d/new-dock.webp 400w,\\n/static/98e8d515a43e8cc894d85ab21f23b46e/b8c44/new-dock.webp 800w,\\n/static/98e8d515a43e8cc894d85ab21f23b46e/25f4c/new-dock.webp 1100w"}}}}}},{"node":{"id":"d04bb75d-bc9e-5054-911c-aa70c1757b51","fields":{"slug":"/visdocs/"},"frontmatter":{"title":"Visdocs","date":"March 2020","tags":["UX","Visual Design","Software Engineering"],"excerpt":"Visdocs provides a structured way to document IT assets for rapid problem resolution.","featuredImage":{"childImageSharp":{"fluid":{"aspectRatio":1.3333333333333333,"src":"/static/e27ac275b7d597c3f5100b288de405d8/2926a/login-render.png","srcSet":"/static/e27ac275b7d597c3f5100b288de405d8/f976c/login-render.png 200w,\\n/static/e27ac275b7d597c3f5100b288de405d8/3ea06/login-render.png 400w,\\n/static/e27ac275b7d597c3f5100b288de405d8/2926a/login-render.png 800w,\\n/static/e27ac275b7d597c3f5100b288de405d8/035fd/login-render.png 1200w,\\n/static/e27ac275b7d597c3f5100b288de405d8/b1011/login-render.png 1600w,\\n/static/e27ac275b7d597c3f5100b288de405d8/a1a12/login-render.png 1940w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAC/klEQVQ4y2WRSUwUQRiFq3skRvHk3YsmHkzQRBP1orIKzDAjIIuCRBNj0KDgcvPkEgXFJTHGREVZBHFEgWGEYZNdmQWGLXiQTUeQaPRmcBvzfFVNQMPhy/tf/e+vqq4WgXdT+BiYwExgkko+GDqjmDB67w2mFeOYfjeOD4oxg6kxBKbeKsTAyBjqPeNo9s+gpW8GzT4itd+gsW9aaYvsq7XpRXzEO6/MNXJOXLEPQaS5seyAF3qqB3qS29BMr2LlIZ/qif0eaBkehGR5YZrv6enM7fWofIjMpHggCir9EEndEOk9EInUhC7Dp3ZjRdZrHC+ewIYzfqzJ8WH1YTeErZO9HiOftoi2b37+qn2QRQdPY3BPOzdsg5ZITenE8owuHLg1ipTro7DkjyCBRJwbxKosDjKjybytXc2ZkmXdwU+u7GfRAi31JYS1GSK+CRq9SG5FaGY7et98AhBEMPgHv4NBfJv7ibCcVxBRLugWIy9RdTTrggp+u7UBWkojb+eCiGMtNdGF0IwWDE1+WdgQ+MMNvyPsKL8mwgndypyNWOXmDVyrh7j8qBfC4oSWTGOug9jtgBZHjXUgNKkeHcOf8evnD8x+ncMd1ywets5iY3YbREwtdDljc/LwF9CJCHdAXCrlY8bX8N1orLUMPufVSdRz6KzXH3Rhc3YzNh1pwtosF9aRFQnM2Zg316iciK3mhvSRrC8W8/pxVXw3GonlmfIGTznwhJ8yT7Td8PFVRjaW/Uj6GDt0G+ei6S8Uyes/hmZhw0ws/6MlMGxdRPqFPudEeDkPqeAb0kdVQpy/zz8aXYZllgqYzOUwxS9Fl8SV822NWq2bmY8pgymiBKaoUoRwXkSWQZy9zb+07R7EzgcQO4qWItcji3mbEh5cspiTuv0+xJa7EFs5v4t+K73d2YEThQ6cuu7ASck1B/IWqFXItdM3HDhzsw55hbXILawxKKhGbn61ofTHWIs+rxsjAx4M+yVug343hhS9GOrrxSAZ8L3+h1cL+CXeHsUA+QsGj+hYNDteGwAAAABJRU5ErkJggg==","tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'800\'%20height=\'600\'%3e%3cpath%20d=\'M34%20303c0%20209%200%20231%202%20232%201%202%2037%202%20383%202h381V73H34v230m299-177l-1%206c0%205%200%205%203%205l5-2%204-2%204%202%206%202c6%200%207%201%207%206l-1%204c-2%200-2-1-2-3%200-4%200-4-4-4s-6-1-7-2l-3-2-3%202-5%202h-4v12c0%2015-1%2014%2015%2014h11v-6c0-5%200-6%202-6l1%206v6h4c6%200%207-1%207-6%200-4%200-4-4-4l-5-2-3-2-4%202c-1%203-10%203-12%200-2-2-2-15%200-16l1%207v8h4l6-2%204-2%205%202%205%202h3v-13c0-16%201-15-15-15l-11%201-1%202c0%204-3%204-3%200%200-3%200-3-4-3l-5%201m97%2011c0%204%200%204-3%203-7-1-11%209-5%2014%201%201%203%202%204%201h8v-11c0-9-1-11-2-11-2%200-2%201-2%204m9%205c-5%206-1%2013%206%2013%204%200%207-3%207-8%200-6-8-10-13-5m-107%2049v68l1%2067h98l101-1c1-1%202-130%200-133%200-3-199-3-200-1m113%20106v9l1%207h36l38-1c1-1%202-11%200-14%200-3-74-3-75-1\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","srcWebp":"/static/e27ac275b7d597c3f5100b288de405d8/b8c44/login-render.webp","srcSetWebp":"/static/e27ac275b7d597c3f5100b288de405d8/f5581/login-render.webp 200w,\\n/static/e27ac275b7d597c3f5100b288de405d8/4bf8d/login-render.webp 400w,\\n/static/e27ac275b7d597c3f5100b288de405d8/b8c44/login-render.webp 800w,\\n/static/e27ac275b7d597c3f5100b288de405d8/39ac9/login-render.webp 1200w,\\n/static/e27ac275b7d597c3f5100b288de405d8/fee0c/login-render.webp 1600w,\\n/static/e27ac275b7d597c3f5100b288de405d8/b73f3/login-render.webp 1940w"}}}}}}]},"allAuthorYaml":{"edges":[{"node":{"avatar":{"childImageSharp":{"original":{"width":1177,"height":1177,"src":"/static/ben-fa5f8a5b83d86becbe146ddc80b36398.jpg"}}}}}]}}}')},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),n="findIndex",d=!0;n in[]&&Array(1)[n]((function(){d=!1})),i(i.P+i.F*d,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},QeBL:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"pageQuery",(function(){return m}));var i=a("EPyS"),r=a("Wbzz"),n=a("S6nY"),d=a("vOnD"),s=a("lM68"),l=a("9eSz"),c=a.n(l),o=d.a.div.withConfig({displayName:"pages__Section",componentId:"o27l2d-0"})(["margin:20px -12px 120px;display:flex;flex-wrap:wrap;"]),f=d.a.div.withConfig({displayName:"pages__FlexBlock",componentId:"o27l2d-1"})(["width:100%;@media screen and (min-width:750px){width:50%;}"]),u=d.a.div.withConfig({displayName:"pages__Card",componentId:"o27l2d-2"})(["border-radius:",";box-shadow:",";margin:12px;"],s.a.borderRadius,s.a.shadow),g=d.a.div.withConfig({displayName:"pages__CardImage",componentId:"o27l2d-3"})(["img{border-top-right-radius:4px;border-top-left-radius:4px;}"]),p=d.a.div.withConfig({displayName:"pages__CardBody",componentId:"o27l2d-4"})(["padding:24px;p{height:120px;@media screen and (min-width:500px){height:100px;}}.link-button{height:42px;color:",";border:1px solid ",";border-radius:",";display:flex;align-items:center;justify-content:center;text-transform:uppercase;font-size:14px;font-weight:bold;:hover,:active{background:",";color:white;text-decoration:none;}}"],s.a.colors.primary,s.a.colors.primary,s.a.borderRadius,s.a.colors.primary),h=d.a.div.withConfig({displayName:"pages__BioContainer",componentId:"o27l2d-5"})(["display:flex;flex-direction:column;align-items:center;margin:12px;img{margin:12px;margin-bottom:40px;box-shadow:",";border-radius:",";width:100%;}@media screen and (min-width:500px){margin:0;flex-direction:row;img{margin-right:40px;width:200px;margin-bottom:0;}}"],s.a.shadow,s.a.borderRadius);t.default=function(){var t=i.data,a=t.allMarkdownRemark,d=t.allAuthorYaml,s=a.edges,l=d.edges[0].node.avatar.childImageSharp.original.src;return e.createElement(n.a,null,e.createElement(o,{style:{margin:"120px 0"}},e.createElement("h2",null,"Ben is a software designer and engineer. Currently creating useful products at"," ",e.createElement("a",{href:"https://level.tech/",target:"blank"},"Level Software"),". Formerly at"," ",e.createElement("a",{href:"https://www.db.com/company/index.htm",target:"blank"},"Deutsche Bank"),".")),e.createElement("h3",null,"Featured work"),e.createElement(o,null,s.map((function(t){var a=t.node,i=a.id,n=a.fields.slug,d=a.frontmatter,s=d.featuredImage,l=d.title,o=d.excerpt;return e.createElement(f,{key:i},e.createElement(u,{key:n},e.createElement(g,null,s&&e.createElement(c.a,{fluid:s.childImageSharp.fluid,alt:l})),e.createElement(p,null,e.createElement(r.Link,{to:n,className:"link-underline"},e.createElement("h3",null,l)),e.createElement("p",null,o),e.createElement(r.Link,{to:n,className:"link-button"},"View case study"))))}))),e.createElement("h3",null,"Biography"),e.createElement(o,null,e.createElement(h,null,e.createElement("img",{src:l,alt:"Benjamin Leeds Headshot"}),e.createElement("div",null,e.createElement("p",null,"Benjamin grew up in Durham, NC. He recieved his Bachelor’s in Computer Science from NC State University, while doing design work for the Engineering College."),e.createElement("p",null,"His career has been a blend of software engineering, user research, and visual design. Recently he’s been focused on React / Typescript development with GraphQL.")))))};var m="4039540821"}.call(this,a("iMUK"))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-43687652ab3be9495d56.js.map
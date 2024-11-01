(()=>{var e={967:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=l(e,c(o)))}return e}function c(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)n.call(e,o)&&e[o]&&(t=l(t,o));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"apiVersion":2,"name":"woocommerce/invoicexpress-vat","version":"0.1.0","title":"InvoiceXpress VAT","category":"woocommerce","description":"","supports":{"html":false,"align":false,"multiple":false,"reusable":false},"parent":["woocommerce/checkout-fields-block"],"attributes":{"lock":{"type":"object","default":{"remove":true,"move":false}}},"textdomain":"woo-billing-with-invoicexpress"}'),n=window.React,r=window.wp.components,c=window.wp.i18n,l=window.wc.wcSettings,{defaultLabel:a,defaultIsRequired:s,defaultValidate:i}=(0,l.getSetting)("invoicexpress_vat_data",""),p={lock:{type:"object",default:{move:!1,remove:!0}},className:{type:"string",default:""},stepTitle:{type:"string",default:(0,c.__)("Fiscal information","woo-billing-with-invoicexpress")},stepDescription:{type:"string",default:""},showStepNumber:{type:"boolean",default:!0},label:{type:"string",default:a},isRequired:{type:"boolean",default:s},validate:{type:"boolean",default:i}},u=window.wp.blockEditor,m=window.wc.blocksCheckout;var d=o(967),w=o.n(d);const v=window.wc.blocksComponents,b=({children:e,stepHeadingContent:t})=>(0,n.createElement)("div",{className:"wc-block-components-checkout-step__heading"},(0,n.createElement)(v.Title,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},e),!!t&&(0,n.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},t)),h=({attributes:e,setAttributes:t,className:o="",children:r})=>{const{stepTitle:l,stepDescription:a,showStepNumber:s}=e;return(0,n.createElement)("div",{className:w()("wc-block-components-checkout-step",o,{"wc-block-components-checkout-step--with-step-number":s})},(0,n.createElement)(b,null,(0,n.createElement)(u.PlainText,{value:l,onChange:e=>t({stepTitle:e}),style:{backgroundColor:"transparent"}})),(0,n.createElement)("div",{className:"wc-block-components-checkout-step__container"},(0,n.createElement)("p",{className:"wc-block-components-checkout-step__description"},(0,n.createElement)(u.PlainText,{className:a?"":"wc-block-components-checkout-step__description-placeholder",value:a,placeholder:(0,c.__)("Optional text for this form step.","woocommerce"),onChange:e=>t({stepDescription:e}),style:{backgroundColor:"transparent"}})),(0,n.createElement)("div",{className:"wc-block-components-checkout-step__content"},r)))};(0,e.registerBlockType)({...t,attributes:{...p}},{icon:()=>(0,n.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},(0,n.createElement)(r.Path,{d:"M39 10H9c-1.7 0-3 1.3-3 3v22c0 1.7 1.3 3 3 3h30c1.7 0 3-1.3 3-3V13c0-1.7-1.3-3-3-3zm0 24c0 .5-.5 1-1 1H10c-.6 0-1-.5-1-1V14c0-.6.4-1 1-1h28c.5 0 1 .4 1 1v20zm-21-3.2v.5c0 .4-.3.8-.8.8h-4.5c-.4 0-.8-.3-.8-.8v-.5c0-.4.3-.8.8-.8h4.5c.5 0 .8.3.8.8zm12 0v.5c0 .4-.3.8-.8.8h-8.5c-.4 0-.8-.3-.8-.8v-.5c0-.4.3-.8.8-.8h8.5c.5 0 .8.3.8.8z"}),(0,n.createElement)(r.Path,{d:"M35.3 21.1l-.8-.6.8-.7c1-1 1.7-2.2 1.9-3.6.1-.3 0-.7-.2-.9-.2-.3-.5-.4-.8-.4-.5 0-.9.4-1 .9-.2.8-.6 1.6-1.1 2.2-1.2 1.3-3.2 1.4-4.4.2l-.2-.2c-.6-.6-1-1.4-1.1-2.2-.1-.5-.5-.9-1-.9-.3 0-.6.2-.8.4-.2.3-.3.6-.2.9.2 1.4.9 2.7 1.9 3.6l.8.6-.8.7c-1 1-1.7 2.2-1.9 3.6-.1.3 0 .7.2.9.2.3.5.4.8.4.5 0 .9-.4 1-.9.2-.8.6-1.6 1.1-2.2.6-.6 1.4-1 2.3-1 .9 0 1.7.4 2.3 1.1.6.6 1 1.4 1.2 2.2.1.5.5.9 1 .9.3 0 .6-.2.8-.4.2-.3.3-.6.2-.9-.3-1.4-1-2.7-2-3.7zM6 21.2h3v2.1H6z"})),edit:function({attributes:e,setAttributes:t}){const{showStepNumber:o,label:l,isRequired:a,validate:s}=e,i=(0,u.useBlockProps)();return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(u.InspectorControls,null,(0,n.createElement)(r.PanelBody,{title:(0,c.__)("Form Step Options","woocommerce")},(0,n.createElement)(r.ToggleControl,{label:(0,c.__)("Show step number","woocommerce"),checked:o,onChange:()=>t({showStepNumber:!o})})),(0,n.createElement)(r.PanelBody,{title:(0,c.__)("InvoiceXpress VAT options","woo-billing-with-invoicexpress")},(0,n.createElement)(r.TextControl,{label:(0,c.__)("Label","woo-billing-with-invoicexpress"),value:l,onChange:e=>t({label:e})}))),(0,n.createElement)("div",{...i},(0,n.createElement)(h,{setAttributes:t,attributes:e},(0,n.createElement)("div",{"aria-disabled":"true",style:{userSelect:"none",pointerEvents:"none",cursor:"normal"}},(0,n.createElement)(m.TextInput,{label:l,required:a,value:""})))))},save:function({attributes:e}){const{text:t}=e;return(0,n.createElement)("div",{...u.useBlockProps.save()},(0,n.createElement)(u.RichText.Content,{value:t}))}})})()})();
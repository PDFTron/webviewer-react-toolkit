(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{2183:function(module,exports){module.exports=function(hljs){var XML_ENTITIES={className:"symbol",begin:"&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"},XML_META_KEYWORDS={begin:"\\s",contains:[{className:"meta-keyword",begin:"#?[a-z_][a-z1-9_-]+",illegal:"\\n"}]},XML_META_PAR_KEYWORDS=hljs.inherit(XML_META_KEYWORDS,{begin:"\\(",end:"\\)"}),APOS_META_STRING_MODE=hljs.inherit(hljs.APOS_STRING_MODE,{className:"meta-string"}),QUOTE_META_STRING_MODE=hljs.inherit(hljs.QUOTE_STRING_MODE,{className:"meta-string"}),TAG_INTERNALS={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[XML_ENTITIES]},{begin:/'/,end:/'/,contains:[XML_ENTITIES]},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:"<![a-z]",end:">",relevance:10,contains:[XML_META_KEYWORDS,QUOTE_META_STRING_MODE,APOS_META_STRING_MODE,XML_META_PAR_KEYWORDS,{begin:"\\[",end:"\\]",contains:[{className:"meta",begin:"<![a-z]",end:">",contains:[XML_META_KEYWORDS,XML_META_PAR_KEYWORDS,QUOTE_META_STRING_MODE,APOS_META_STRING_MODE]}]}]},hljs.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},XML_ENTITIES,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},hljs.inherit(hljs.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),hljs.inherit(hljs.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]},{className:"tag",begin:"<style(?=\\s|>)",end:">",keywords:{name:"style"},contains:[TAG_INTERNALS],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>)",end:">",keywords:{name:"script"},contains:[TAG_INTERNALS],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},TAG_INTERNALS]}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_xml.e6af9295dc53ac592098.bundle.js.map
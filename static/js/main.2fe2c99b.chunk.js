(this.webpackJsonpjscoder=this.webpackJsonpjscoder||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),c=a.n(r),i=(a(90),a(13)),l=(a(91),a(12)),s=Object(n.createContext)();function m(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],c=a[1];return o.a.createElement(s.Provider,{value:{isDarkMode:r,changeMode:function(){c(!r)}}},e.children)}var u=a(26),p=(a(93),a(112)),d=a(64),h=a(7),g=a(65);function f(e){var t=Object(p.e)((function(){return Object(d.a)({mass:0},e)})),a=Object(l.a)(t,1)[0];return o.a.createElement("mesh",{ref:a,receiveShadow:!0},o.a.createElement("planeBufferGeometry",{attach:"geometry",args:[5,5]}),o.a.createElement("shadowMaterial",{attach:"material",color:"#171717",opacity:.5}))}function E(e){var t=e.number,a=Object(p.c)((function(){return{mass:1,args:[.1,.1,.1],position:[Math.random()-1,2*Math.random(),Math.random()-.5]}})),r=Object(l.a)(a,2),c=r[0],i=r[1],s=Object(n.useMemo)((function(){for(var e=new Float32Array(3*t),a=new h.Color,n=0;n<t;n++)a.set(g[17][Math.floor(5*Math.random())]).convertSRGBToLinear().toArray(e,3*n);return e}),[t]);return Object(u.b)((function(){return i.at(Math.floor(Math.random()*t)).position.set(-1,2*Math.random(),0)})),o.a.createElement("instancedMesh",{receiveShadow:!0,castShadow:!0,ref:c,args:[null,null,t]},o.a.createElement("boxBufferGeometry",{attach:"geometry",args:[.1,.1,.1]},o.a.createElement("instancedBufferAttribute",{attachObject:["attributes","color"],args:[s,3]})),o.a.createElement("meshLambertMaterial",{attach:"material",vertexColors:h.VertexColors}))}var b=function(e){return o.a.createElement(u.a,{style:{height:"100vh"},shadowMap:!0,colorManagement:!0,gl:{alpha:!1},camera:{position:[-4.5,2,1],fov:50}},o.a.createElement("color",{attach:"background",args:["teal-500"]}),o.a.createElement("hemisphereLight",{intensity:.35}),o.a.createElement("spotLight",{position:[5,5,5],angle:.3,penumbra:1,intensity:2,castShadow:!0,"shadow-mapSize-width":256,"shadow-mapSize-height":256}),o.a.createElement(p.a,null,o.a.createElement(f,{rotation:[-Math.PI/2,0,0]}),o.a.createElement(E,{number:150})))},v=a(23),y=(a(94),function(){var e=Object(n.useContext)(s).isDarkMode?"#ffffff":"rgb(19, 38, 101)";return o.a.createElement("div",{className:"homepage"},o.a.createElement("span",{className:"canvasbox"},o.a.createElement(b,null)),o.a.createElement("div",{className:"titleBox"},o.a.createElement("span",{className:"title",style:{color:"".concat(e)}},"Javascript Developer"),o.a.createElement("span",{className:"name",style:{color:"".concat(e)}},"Jay Sharma"),o.a.createElement(v.b,{to:"/jscoder/projects",className:"exploreButton"},"Explore Projects")))}),x=a(132),w=Object(x.a)((function(e){return{root:{backgroundColor:"white",cursor:"pointer",borderRadius:"5px",padding:"0px"},textBox:{marginBottom:"".concat(e.spacing(2),"px")},imageBox:{height:"100%",width:"100%",borderRadius:"10px"}}}));var j=function(e){var t=w(),a=o.a.useState(!1),n=Object(l.a)(a,2),r=n[0],c=(n[1],e.imageURL);return r?o.a.createElement("div",{className:"overlay ".concat(r&&"show")}):o.a.createElement("div",null,o.a.createElement("img",{src:c,className:t.imageBox}))},k=a(137),S=a(139),C=a(134),N=a(135),T=a(138),M=a(144),L=a(136),A=a(51);function I(e){var t={backgroundColor:Object(n.useContext)(s).isDarkMode?"#37474f":"white"};return o.a.createElement("div",{style:t},e.children)}function R(e){var t=Object(n.useContext)(s).isDarkMode,a={backgroundColor:t?"#62727b":"white",borderRadius:"10px",color:t?"white":"#37474f"};return o.a.createElement("div",{style:a},e.children)}var O=Object(x.a)((function(e){return{root:{cursor:"pointer",marginTop:"0rem",fontSize:".9rem",background:"none",borderRadius:"10px",color:"inherit"},pname:{fontFamily:"Sansita Swashed, cursive !important"},textBox:{marginBottom:"".concat(e.spacing(2),"px"),paddingLeft:".1rem",fontSize:".9rem",color:"inherit"},techBox:{fontWeight:"800",marginBottom:"".concat(e.spacing(2),"px"),paddingLeft:".1rem",fontSize:".9rem",color:"inherit",fontFamily:"Sansita Swashed, cursive !important"},avatar:{backgroundColor:"#d81b60"},liveButton:{backgroundColor:"#064cd5",color:"#fff",marginRight:".5rem",fontSize:".9rem","&:hover":{color:"#000",backgroundColor:"#2979ff"}},postmanButton:{backgroundColor:"#d81b60",color:"#fff",fontSize:".9rem","&:hover":{color:"#000",backgroundColor:"#d81b60"}},buttonAnchor:{textDecoration:"none",color:"white"}}}));var B=function(e){var t=O(),a=o.a.useState(!1),n=Object(l.a)(a,2),r=(n[0],n[1],o.a.useState(!1)),c=Object(l.a)(r,2),i=c[0],s=(c[1],e.name),m=e.technology,u=e.summary,p=(e.imageUrl,e.showAPI),d=e.title,h=e.button;return i?o.a.createElement("div",{className:"overlay ".concat(i&&"show")}):o.a.createElement(R,null,o.a.createElement(C.a,{className:t.root,elevation:0},o.a.createElement(N.a,{avatar:o.a.createElement(M.a,{"aria-label":"recipe",className:t.avatar},s.slice(0,1)),action:o.a.createElement(L.a,{"aria-label":"settings"}),title:o.a.createElement(A.a,{variant:"h6",className:t.pname},s),subheader:o.a.createElement(A.a,{variant:"subtitle1"},d)}),o.a.createElement(k.a,{container:!0},o.a.createElement(k.a,{item:!0,container:!0,xs:12},o.a.createElement(T.a,null,o.a.createElement(k.a,{item:!0,container:!0,direction:"column",justify:"space-between",alignItems:"stretch"},o.a.createElement(k.a,{item:!0,className:t.textBox},o.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p",gutterBottom:!0,className:t.techBox},"Summary: ",u)),o.a.createElement(k.a,{item:!0},o.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p",className:t.techBox,gutterBottom:!0},"Technology: ",m)),o.a.createElement(k.a,{item:!0,container:!0,justify:"space-between"},o.a.createElement(k.a,{item:!0,style:{marginBottom:".5rem"}},o.a.createElement(S.a,{className:t.liveButton},o.a.createElement("a",{href:h.liveURL,target:"blank",className:t.buttonAnchor},"Go Live"))),o.a.createElement(k.a,{item:!0},p?o.a.createElement(S.a,{className:t.postmanButton},"Api with Postman"):null))))))))},P=(a(99),a(2)),U=a(5),H=a(3),z=a(4),D=a(140),J=a(141),F=a(143),W=a(11),G=a(10),V=function(e,t){return{root:{flexGrow:1,backgroundColor:"#064cd5"},menuButton:{marginRight:e.spacing(2)},title:Object(G.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),link:{color:"white",textDecoration:"none",fontFamily:"Sansita Swashed, cursive"},switchColor:{color:e.palette.primary.main},modeText:{fontFamily:"Sansita Swashed, cursive"},aboutme:{marginBottom:".3rem",marginRight:"1rem"}}},K=function(e){Object(H.a)(a,e);var t=Object(z.a)(a);function a(){return Object(P.a)(this,a),t.apply(this,arguments)}return Object(U.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=this.context,a=t.isDarkMode,n=t.changeMode;return o.a.createElement("div",{style:{marginBottom:"100px"}},o.a.createElement(D.a,{position:"fixed",className:e.root},o.a.createElement(J.a,null,o.a.createElement(A.a,{className:e.title,variant:"h5"},o.a.createElement(v.b,{to:"/jscoder",className:e.link},"jsCoder")),o.a.createElement(A.a,{className:"".concat(e.modeText," ").concat(e.aboutme)},o.a.createElement(v.b,{to:"/jscoder/aboutme",className:e.link},"About me")),o.a.createElement(A.a,{className:e.modeText},a?"Moon Mode":"Sun Mode",o.a.createElement(F.a,{onChange:n,color:"secondary"})))))}}]),a}(o.a.Component);K.contextType=s;var $=Object(W.a)(V)(K),q=a(77),Q=[{id:"1",name:"Holidays",title:"Full Stack Application",technology:"Nodejs, Express, MongoDB, PUG",imageURL:"./holiday.gif",summary:"This is javascript full stack server side rendered application. Holidays is tour & travel company which",button:{text:"CHECK LIVE",postmanText:"API WITH POSTMAN",liveURL:"https://holiday-adventure.herokuapp.com/",postmanURL:""},showAPI:!0},{id:"2",name:"Prism- The world of colors",title:"React Application",technology:"React JS, Chroma-js, Material-UI",imageURL:"./prism.gif",summary:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",button:{text:"CHECK LIVE",postmanText:"API WITH POSTMAN",liveURL:"https://jay-web.github.io/prism/",postmanURL:""},showAPI:!1},{id:"3",name:"Tasks",title:"React Application",technology:"React JS",imageURL:"./tasks.png",summary:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",button:{text:"CHECK LIVE",postmanText:"API WITH POSTMAN",liveURL:"",postmanURL:""},showAPI:!1},{id:"4",name:"Bitcoin tracker",title:"Javascript Application",technology:"Javascript, HTML, CSS",imageURL:"./bitcoins.gif",summary:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",button:{text:"CHECK LIVE",postmanText:"API WITH POSTMAN",liveURL:"https://jay-web.github.io/Live-Bitcoin/",postmanURL:""},showAPI:!1},{id:"5",name:"Single Page Theme",title:"Bootstrap Application",technology:"Bootstrap Framework",imageURL:"./looplab.gif",summary:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",button:{text:"CHECK LIVE",postmanText:"API WITH POSTMAN",liveURL:"https://jay-web.github.io/",postmanURL:""},showAPI:!1},{id:"6",name:"Maze Canvas",title:"Javascript Canvas Game",technology:"Matter.js, HTML, CSS, Javascript",imageURL:"./maze.gif",summary:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",button:{text:"CHECK LIVE",postmanText:"API WITH POSTMAN",liveURL:"https://jay-web.github.io/maze-canvas/",postmanURL:""},showAPI:!1}],X=Object(x.a)({content:{padding:"0px 10px"},box:{margin:"2rem 0rem 2rem 0rem"},root:{marginBottom:"2rem",borderRadius:"45px",transition:"all 800ms ease-in-out","&:hover":{},fontFamily:"Sansita Swashed, cursive"}}),Y=function(){var e=X();return Object(n.useEffect)((function(){console.log(Q)}),[]),o.a.createElement(k.a,{container:!0,direction:"column"},o.a.createElement($,null),o.a.createElement(k.a,{item:!0,container:!0},o.a.createElement(k.a,{xs:1,item:!0}),o.a.createElement(k.a,{xs:10,item:!0,container:!0},Q.map((function(t){return o.a.createElement(q.a,{elevation:1,key:t.id,className:e.root},o.a.createElement(k.a,{item:!0,container:!0,justify:"space-around",alignContent:"center",direction:t.id%2===0?"row-reverse":"row"},o.a.createElement(k.a,{item:!0,xs:10,md:5,className:e.box},o.a.createElement(B,t)),o.a.createElement(k.a,{item:!0,xs:10,md:5,className:e.box},o.a.createElement(j,{imageURL:t.imageURL}))))}))),o.a.createElement(k.a,{xs:1,item:!0})))},Z=a(69),_=a.n(Z),ee=a(70),te=a.n(ee),ae=a(71),ne=a.n(ae),oe=a(72),re=a.n(oe),ce=Object(W.a)({root:{height:"80vh",marginTop:"0px",fontFamily:"Sansita Swashed, cursive"},aboutme:{display:"grid",gridTemplateColumns:"1fr 1fr",justifyContent:"center",color:"#064cd5"},content:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"white",height:"80vh"},innerText:{padding:"2rem"},image:{display:"flex",justifyContent:"center",alignItems:"center"},img:{width:"50%",height:"50%"},social:{textDecoration:"none",marginRight:"1rem",color:"#064cd5"},contact:{display:"flex",justifyContent:"space-between",alignItems:"center"},"@media screen and (max-width:700px)":{aboutme:{gridTemplateColumns:"1fr"}}})((function(e){var t=e.classes,a=Object(n.useContext)(s).isDarkMode?"#37474f":"#064cd5";return o.a.createElement("div",{className:t.root},o.a.createElement($,null),o.a.createElement("div",{className:t.aboutme},o.a.createElement(q.a,{className:t.content,elevation:0},o.a.createElement(q.a,{className:t.innerText,style:{color:"".concat(a)}},o.a.createElement("span",null,"About & Contact"),o.a.createElement("h1",null,"Jay Sharma"),o.a.createElement("p",null," ","Hello, I am full stack javascript developer. I live in New Delhi, India."),o.a.createElement("p",null,"Expert in creating frontend react based application, creating backend nodejs server side rendered web applications."),o.a.createElement("br",null),o.a.createElement("p",null,"Feel free to connect me on +919958345009"),o.a.createElement("div",{className:t.contact},o.a.createElement("span",{className:"socialIcons"},o.a.createElement("a",{href:"https://www.linkedin.com/in/jay-sharma-developer",target:"blank",className:t.social},o.a.createElement(_.a,null)),o.a.createElement("a",{href:"https://github.com/jay-web",target:"blank",className:t.social},o.a.createElement(te.a,null)),o.a.createElement("a",{href:"https://twitter.com/jaywords7",target:"blank",className:t.social},o.a.createElement(ne.a,null))),o.a.createElement("a",{href:"./js.docx",className:t.social},o.a.createElement(S.a,{variant:"contained",color:"default",startIcon:o.a.createElement(re.a,null)},"Download Resume"))))),o.a.createElement("div",{className:t.image},o.a.createElement("img",{className:t.img,src:"./placeholder-image.jpeg",alt:"Jay Sharma"}))))})),ie=a(75),le=a(142),se=a(73),me=Object(ie.a)({palette:{primary:{main:"#1565c0",light:"#5e92f3",dark:"#003c8f"},secondary:{main:"#d84315",light:"#ff7543",dark:"#9f0000"}},props:{MuiCardHproeader:{title:{color:"white",fontSize:"2rem"}}}});var ue=function(){return o.a.createElement(m,{theme:me},o.a.createElement(I,null,o.a.createElement(se.a,{atEnter:{opacity:0},atLeave:{opacity:0},atActive:{opacity:1},className:"switch-wrapper"},o.a.createElement(i.a,{exact:!0,path:"/jscoder",component:y}),o.a.createElement(i.a,{exact:!0,path:"/jscoder/projects",component:Y}),o.a.createElement(i.a,{exact:!0,path:"/jscoder/aboutme",component:ce}),o.a.createElement(i.a,{component:Y}))),o.a.createElement(le.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v.a,null,o.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a(110)},90:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},99:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.2fe2c99b.chunk.js.map
(this.webpackJsonpjscoder=this.webpackJsonpjscoder||[]).push([[0],{110:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(29),c=t.n(r),i=(t(90),t(13)),l=(t(91),t(12)),s=Object(n.createContext)();function m(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),r=t[0],c=t[1];return o.a.createElement(s.Provider,{value:{isDarkMode:r,changeMode:function(){c(!r)}}},e.children)}var u=t(26),h=(t(93),t(112)),d=t(64),p=t(7),g=t(65);function b(e){var a=Object(h.e)((function(){return Object(d.a)({mass:0},e)})),t=Object(l.a)(a,1)[0];return o.a.createElement("mesh",{ref:t,receiveShadow:!0},o.a.createElement("planeBufferGeometry",{attach:"geometry",args:[5,5]}),o.a.createElement("shadowMaterial",{attach:"material",color:"#171717",opacity:.5}))}function f(e){var a=e.number,t=Object(h.c)((function(){return{mass:1,args:[.1,.1,.1],position:[Math.random()-1,2*Math.random(),Math.random()-.5]}})),r=Object(l.a)(t,2),c=r[0],i=r[1],s=Object(n.useMemo)((function(){for(var e=new Float32Array(3*a),t=new p.Color,n=0;n<a;n++)t.set(g[17][Math.floor(5*Math.random())]).convertSRGBToLinear().toArray(e,3*n);return e}),[a]);return Object(u.b)((function(){return i.at(Math.floor(Math.random()*a)).position.set(-1,2*Math.random(),0)})),o.a.createElement("instancedMesh",{receiveShadow:!0,castShadow:!0,ref:c,args:[null,null,a]},o.a.createElement("boxBufferGeometry",{attach:"geometry",args:[.1,.1,.1]},o.a.createElement("instancedBufferAttribute",{attachObject:["attributes","color"],args:[s,3]})),o.a.createElement("meshLambertMaterial",{attach:"material",vertexColors:p.VertexColors}))}var v=function(e){return o.a.createElement(u.a,{style:{height:"100vh",width:"100vw"},shadowMap:!0,colorManagement:!0,gl:{alpha:!1},camera:{position:[-4.5,2,1],fov:50}},o.a.createElement("color",{attach:"background",args:["teal-500"]}),o.a.createElement("hemisphereLight",{intensity:.35}),o.a.createElement("spotLight",{position:[5,5,5],angle:.3,penumbra:1,intensity:2,castShadow:!0,"shadow-mapSize-width":256,"shadow-mapSize-height":256}),o.a.createElement(h.a,null,o.a.createElement(b,{rotation:[-Math.PI/2,0,0]}),o.a.createElement(f,{number:150})))},E=t(23),y=(t(94),function(){var e=Object(n.useContext)(s).isDarkMode?"#ffffff":"rgb(19, 38, 101)";return o.a.createElement("div",{className:"homepage"},o.a.createElement("span",{className:"canvasbox"},o.a.createElement(v,null)),o.a.createElement("div",{className:"titleBox"},o.a.createElement("span",{className:"title",style:{color:"".concat(e),fontFamily:"Akaya Telivigala, cursive"}},"Javascript Developer"),o.a.createElement("span",{className:"name",style:{color:"".concat(e),fontFamily:"Akaya Telivigala, cursive"}},"Jay Sharma"),o.a.createElement(E.b,{to:"/projects",className:"exploreButton",style:{fontFamily:"Akaya Telivigala, cursive",fontSize:"1rem"}},"Explore Projects")))}),w=t(132),x=Object(w.a)((function(e){return{root:{backgroundColor:"white",cursor:"pointer",borderRadius:"5px",padding:"0px"},textBox:{marginBottom:"".concat(e.spacing(2),"px")},imageBox:{height:"100%",width:"100%",borderRadius:"10px"}}}));var k=function(e){var a=x(),t=o.a.useState(!1),n=Object(l.a)(t,2),r=n[0],c=(n[1],e.imageURL);return r?o.a.createElement("div",{className:"overlay ".concat(r&&"show")}):o.a.createElement("div",null,o.a.createElement("img",{src:c,className:a.imageBox}))},j=t(137),C=t(139),N=t(134),T=t(135),L=t(138),S=t(144),A=t(136),I=t(51);function R(e){var a={backgroundColor:Object(n.useContext)(s).isDarkMode?"#37474f":"white"};return o.a.createElement("div",{style:a},e.children)}function M(e){var a=Object(n.useContext)(s).isDarkMode,t={backgroundColor:a?"#62727b":"white",borderRadius:"10px",color:a?"white":"#37474f"};return o.a.createElement("div",{style:t},e.children)}var B=Object(w.a)((function(e){return{root:{cursor:"pointer",marginTop:"0rem",fontSize:".9rem",background:"none",borderRadius:"10px",color:"inherit"},pname:{fontFamily:"Akaya Telivigala, cursive",fontWeight:"bold",letterSpacing:"2px"},tname:{fontFamily:"Akaya Telivigala, cursive"},textBox:{marginBottom:"".concat(e.spacing(2),"px"),paddingLeft:".1rem",fontSize:".9rem",color:"inherit"},summary:{fontWeight:"800",marginBottom:"".concat(e.spacing(2),"px"),paddingLeft:".1rem",fontSize:"1.1rem",color:"inherit",fontFamily:"Akaya Telivigala, cursive"},tag:{fontWeight:"normal"},avatar:{backgroundColor:"#d81b60"},liveButton:{backgroundColor:"#064cd5",color:"#fff",marginRight:".5rem",fontSize:".9rem",fontFamily:"Akaya Telivigala, cursive","&:hover":{color:"#000",backgroundColor:"#2979ff"}},postmanButton:{backgroundColor:"#d81b60",color:"#fff",fontSize:".9rem",fontFamily:"Akaya Telivigala, cursive","&:hover":{color:"#000",backgroundColor:"#ef4873"}},githubButton:{backgroundColor:"#414849",fontFamily:"Akaya Telivigala, cursive",fontSize:".9rem","&:hover":{backgroundColor:"#000"}},buttonAnchor:{textDecoration:"none",color:"white"},gitButtonAnchor:{textDecoration:"none",color:"#fff","&:hover":{color:"#fff"}}}}));var U=function(e){var a=B(),t=o.a.useState(!1),n=Object(l.a)(t,2),r=(n[0],n[1],o.a.useState(!1)),c=Object(l.a)(r,2),i=c[0],s=(c[1],e.name),m=e.technology,u=e.summary,h=(e.imageUrl,e.showAPI),d=e.title,p=e.button,g=e.showCode;return i?o.a.createElement("div",{className:"overlay ".concat(i&&"show")}):o.a.createElement(M,null,o.a.createElement(N.a,{className:a.root,elevation:0},o.a.createElement(T.a,{avatar:o.a.createElement(S.a,{"aria-label":"recipe",className:a.avatar},s.slice(0,1)),action:o.a.createElement(A.a,{"aria-label":"settings"}),title:o.a.createElement(I.a,{variant:"h6",className:a.pname},s),subheader:o.a.createElement(I.a,{variant:"subtitle1",className:a.tname},d)}),o.a.createElement(j.a,{container:!0},o.a.createElement(j.a,{item:!0,container:!0,xs:12},o.a.createElement(L.a,null,o.a.createElement(j.a,{item:!0,container:!0,direction:"column",justify:"space-between",alignItems:"stretch"},o.a.createElement(j.a,{item:!0,className:a.textBox},o.a.createElement(I.a,{variant:"body2",color:"textSecondary",component:"p",gutterBottom:!0,className:a.summary},"Summary: ",o.a.createElement("span",{className:a.tag},u))),o.a.createElement(j.a,{item:!0},o.a.createElement(I.a,{variant:"body2",color:"textSecondary",component:"p",className:a.summary,gutterBottom:!0},"Technology: ",o.a.createElement("span",{className:a.tag},m))),o.a.createElement(j.a,{item:!0,container:!0,justify:"space-between"},o.a.createElement(j.a,{item:!0,style:{marginBottom:".5rem"}},o.a.createElement(C.a,{className:a.liveButton},o.a.createElement("a",{href:p.liveURL,target:"blank",className:a.buttonAnchor},"Go Live"))),o.a.createElement(j.a,{item:!0},h?o.a.createElement(C.a,{className:a.postmanButton},o.a.createElement("a",{href:p.postmanURL,target:"blank",className:a.buttonAnchor}," Api with Postman")):null),o.a.createElement(j.a,{item:!0},g?o.a.createElement(C.a,{className:a.githubButton},o.a.createElement("a",{href:p.githubURL,target:"blank",className:a.gitButtonAnchor}," Code on Github")):null))))))))},O=(t(99),t(2)),P=t(5),z=t(3),H=t(4),F=t(140),D=t(141),J=t(143),W=t(11),G=t(10),V=function(e,a){return{root:{flexGrow:1,backgroundColor:"#064cd5"},menuButton:{marginRight:e.spacing(2)},title:Object(G.a)({flexGrow:1,letterSpacing:"2px",display:"none"},e.breakpoints.up("sm"),{display:"block"}),link:{color:"white",textDecoration:"none",fontFamily:"Akaya Telivigala, cursive"},switchColor:{color:e.palette.primary.main},modeText:{fontFamily:"Akaya Telivigala, cursive"},aboutme:{marginBottom:".3rem",marginRight:"1rem"}}},K=function(e){Object(z.a)(t,e);var a=Object(H.a)(t);function t(){return Object(O.a)(this,t),a.apply(this,arguments)}return Object(P.a)(t,[{key:"render",value:function(){var e=this.props.classes,a=this.context,t=a.isDarkMode,n=a.changeMode;return o.a.createElement("div",{style:{marginBottom:"100px"}},o.a.createElement(F.a,{position:"fixed",className:e.root},o.a.createElement(D.a,null,o.a.createElement(I.a,{className:e.title,variant:"h5"},o.a.createElement(E.b,{to:"/",className:e.link},"jsCoder")),o.a.createElement(I.a,{className:"".concat(e.modeText," ").concat(e.aboutme)},o.a.createElement(E.b,{to:"/aboutme",className:e.link},"About me")),o.a.createElement(I.a,{className:e.modeText},t?"Moon Mode":"Sun Mode",o.a.createElement(J.a,{onChange:n,color:"secondary"})))))}}]),t}(o.a.Component);K.contextType=s;var q=Object(W.a)(V)(K),Q=t(77),X=[{id:"1",name:"Holidays",title:"Full Stack Application",technology:"Nodejs, Express, MongoDB, PUG",imageURL:"./holidays-2.gif",summary:"This is javascript full stack server side rendered application. ExpressJS, MongoDB, JWT based authentication, PUG and other node based libarary are implemented",button:{text:"CHECK LIVE",postmanText:"API WITH POSTMAN",liveURL:"https://holiday-adventure.herokuapp.com/",postmanURL:"https://documenter.getpostman.com/view/4087771/Tz5jdzYg",githubURL:"https://github.com/jay-web/holidays"},showAPI:!0,showCode:!0},{id:"2",name:"Prism- The world of colors",title:"React Application",technology:"React JS, Chroma-js, Material-UI",imageURL:"./prism.gif",summary:"Prism is reactjs based front end application. Chroma-js and Material-UI are also integrated to generate color palettes and application UI. User can use already generated color palettes or can generate new palette according to requirement.",button:{text:"CHECK LIVE",postmanText:"API WITH POSTMAN",liveURL:"https://jay-web.github.io/prism/",postmanURL:"",githubURL:"https://github.com/jay-web/prism"},showAPI:!1,showCode:!0},{id:"3",name:"Tasks",title:"React Application",technology:"React JS",imageURL:"./tasks.png",summary:"Task is the react based front end web application. New react features are implemented like react hooks (useState, useEffect, useContext etc..). User can create, edit or delete daily tasks as a todo list. ",button:{text:"CHECK LIVE",postmanText:"API WITH POSTMAN",liveURL:"https://jay-web.github.io/taskmanager",postmanURL:"",githubURL:"https://github.com/jay-web/taskmanager"},showAPI:!1,showCode:!0},{id:"4",name:"Bitcoin tracker",title:"Javascript Application",technology:"Javascript, HTML, CSS",imageURL:"./bitcoins.gif",summary:"Live Bitcoin is web app to fetch the price unit of bitcoin using the Bitcoin API. Multiple methods has been displayed to fetch the data i.e XHRHttpRequest Method of vanilla javascript, jQuery method and Fetch API.",button:{text:"CHECK LIVE",postmanText:"API WITH POSTMAN",liveURL:"https://jay-web.github.io/Live-Bitcoin/",postmanURL:"",githubURL:"https://github.com/jay-web/Live-Bitcoin"},showAPI:!1,showCode:!0},{id:"5",name:"Single Page Theme",title:"Bootstrap Application",technology:"Bootstrap Framework",imageURL:"./looplab.gif",summary:"UI theme which is based on bootstrap framework. Its has completely responsive layout. Easily access on desktop, mini screens as well mobile screens",button:{text:"CHECK LIVE",postmanText:"API WITH POSTMAN",liveURL:"https://jay-web.github.io/",postmanURL:"",githubURL:"https://github.com/jay-web/jay-web.github.io"},showAPI:!1,showCode:!0},{id:"6",name:"Maze Canvas",title:"Javascript Canvas Game",technology:"Matter.js, HTML, CSS, Javascript",imageURL:"./maze.gif",summary:"This is amazing classic maze game where we need to find the path to reach the target. Its written in native javascript and Matter.js libarary to work on HTML canvas",button:{text:"CHECK LIVE",postmanText:"API WITH POSTMAN",liveURL:"https://jay-web.github.io/maze-canvas/",postmanURL:"",githubURL:"https://github.com/jay-web/maze-canvas"},showAPI:!1,showCode:!0}],Y=Object(w.a)({content:{padding:"0px 10px"},box:{margin:"2rem 0rem 2rem 0rem"},root:{marginBottom:"2rem",borderRadius:"45px",transition:"all 800ms ease-in-out","&:hover":{},fontFamily:"Sansita Swashed, cursive"}}),$=function(){var e=Y();return Object(n.useEffect)((function(){console.log(X)}),[]),o.a.createElement(j.a,{container:!0,direction:"column"},o.a.createElement(q,null),o.a.createElement(j.a,{item:!0,container:!0},o.a.createElement(j.a,{xs:1,item:!0}),o.a.createElement(j.a,{xs:10,item:!0,container:!0},X.map((function(a){return o.a.createElement(Q.a,{elevation:1,key:a.id,className:e.root},o.a.createElement(j.a,{item:!0,container:!0,justify:"space-around",alignContent:"center",direction:a.id%2===0?"row-reverse":"row"},o.a.createElement(j.a,{item:!0,xs:10,md:5,className:e.box},o.a.createElement(U,a)),o.a.createElement(j.a,{item:!0,xs:10,md:5,className:e.box},o.a.createElement(k,{imageURL:a.imageURL}))))}))),o.a.createElement(j.a,{xs:1,item:!0})))},Z=t(69),_=t.n(Z),ee=t(70),ae=t.n(ee),te=t(71),ne=t.n(te),oe=t(72),re=t.n(oe),ce=Object(W.a)({root:{height:"80vh",marginTop:"0px",fontFamily:"Akaya Telivigala, cursive"},aboutme:{display:"grid",gridTemplateColumns:"1fr 1fr",justifyContent:"center"},content:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"white",color:"#37474f",height:"80vh"},innerText:{padding:"2rem",fontSize:"1.2rem",marginLeft:"1rem"},image:{display:"flex",justifyContent:"center",alignItems:"center"},img:{width:"50%",height:"50%"},social:{textDecoration:"none",marginRight:"1rem"},socialIcon:{"&:hover":{transform:"scale(1.2)",transition:"all .2s ease-in-out"}},contact:{display:"flex",justifyContent:"space-between",alignItems:"center"},"@media screen and (max-width:700px)":{aboutme:{gridTemplateColumns:"1fr"}}})((function(e){var a=e.classes,t=Object(n.useContext)(s).isDarkMode,r=t?"#fff":"#37474f",c=t?"#37474f":"#fff";return o.a.createElement("div",{className:a.root},o.a.createElement(q,null),o.a.createElement("div",{className:a.aboutme},o.a.createElement(Q.a,{className:a.content,elevation:0,style:{background:"".concat(c)}},o.a.createElement(Q.a,{className:a.innerText,elevation:3,style:{color:"".concat(r),background:"".concat(c)}},o.a.createElement("span",null,"About & Contact"),o.a.createElement("h1",null,"Jay Sharma"),o.a.createElement("p",null," ","Hello, I am full stack javascript developer. I live in New Delhi, India."),o.a.createElement("p",null,"Expert in creating frontend react based application, creating backend nodejs server side rendered web applications."),o.a.createElement("br",null),o.a.createElement("p",null,"Feel free to connect me on ",o.a.createElement("span",{style:{fontFamily:"normal",fontWeight:"bold"}},"+919958345009")),o.a.createElement("div",{className:a.contact},o.a.createElement("span",{className:"socialIcons"},o.a.createElement("a",{href:"https://www.linkedin.com/in/jay-sharma-developer",target:"blank",className:a.social},o.a.createElement(_.a,{className:a.socialIcon,fontSize:"large",style:{color:"".concat(t?"white":"black")}})),o.a.createElement("a",{href:"https://github.com/jay-web",target:"blank",className:a.social},o.a.createElement(ae.a,{className:a.socialIcon,fontSize:"large",style:{color:"".concat(t?"white":"black")}})),o.a.createElement("a",{href:"https://twitter.com/jaywords7",target:"blank",className:a.social},o.a.createElement(ne.a,{className:a.socialIcon,fontSize:"large",style:{color:"".concat(t?"white":"black")}}))),o.a.createElement("a",{href:"./js.docx",className:a.social},o.a.createElement(C.a,{variant:"contained",color:"default",startIcon:o.a.createElement(re.a,null)},"Download Resume"))))),o.a.createElement("div",{className:a.image,style:{background:"".concat("#fff")}},o.a.createElement("img",{className:a.img,src:"./placeholder-image.jpeg",alt:"Jay Sharma"}))))})),ie=t(75),le=t(142),se=t(73),me=Object(ie.a)({palette:{primary:{main:"#1565c0",light:"#5e92f3",dark:"#003c8f"},secondary:{main:"#d84315",light:"#ff7543",dark:"#9f0000"}},props:{MuiCardHproeader:{title:{color:"white",fontSize:"2rem"}}}});var ue=function(){return o.a.createElement(m,{theme:me},o.a.createElement(R,null,o.a.createElement(se.a,{atEnter:{opacity:0},atLeave:{opacity:0},atActive:{opacity:1},className:"switch-wrapper"},o.a.createElement(i.a,{exact:!0,path:"/",component:y}),o.a.createElement(i.a,{exact:!0,path:"/projects",component:$}),o.a.createElement(i.a,{exact:!0,path:"/aboutme",component:ce}),o.a.createElement(i.a,{component:$}))),o.a.createElement(le.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E.a,null,o.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,a,t){e.exports=t(110)},90:function(e,a,t){},91:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},99:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.581e500c.chunk.js.map
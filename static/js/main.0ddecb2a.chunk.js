(this["webpackJsonpphoto-album"]=this["webpackJsonpphoto-album"]||[]).push([[0],{138:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),o=a.n(i);a(76),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(25),l=a(26),s=a(10),d=a(31),m=a(30),u=a(22),h=[],g=a(67),p=a.n(g),y=(a(77),a(156)),b={color:"blue"},v=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChangeDate=function(e){n.setState({startDate:e})},n.onImageChange=function(e){if(e.target.files&&e.target.files[0]){var t=URL.createObjectURL(e.target.files[0]);n.setState({image:t})}},n.state={image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png",storyName:"",date:null,storyDescription:null,dateValue:null,startDate:new Date,mainPageDate:null,cardId:0,noDate:!1},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n.handleChangeArea=n.handleChangeArea.bind(Object(s.a)(n)),n.onImageChange=n.onImageChange.bind(Object(s.a)(n)),n.addItem=n.addItem.bind(Object(s.a)(n)),n.handleChangeDate=n.handleChangeDate.bind(Object(s.a)(n)),n.onCalendarClose=n.onCalendarClose.bind(Object(s.a)(n)),n.noDate=n.noDate.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"noDate",value:function(){var e=this.state.noDate,t=document.getElementById("datePicker").getAttribute("value");return 0==e?this.setState({noDate:!0,mainPageDate:this.break()}):this.setState({mainPageDate:t,noDate:!1}),e}},{key:"break",value:function(){return r.a.createElement("br",null)}},{key:"componentDidMount",value:function(){var e=document.getElementById("datePicker").getAttribute("value");this.setState({mainPageDate:e})}},{key:"onCalendarClose",value:function(){var e=document.getElementById("datePicker").getAttribute("value");this.setState({mainPageDate:e})}},{key:"handleChange",value:function(e){this.setState({storyDescription:e.target.value})}},{key:"handleChangeArea",value:function(e){this.setState({storyName:e.target.value})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.storyName,a=this.state.storyDescription,n={id:this.props.returnCardId(),storyName:t,storyDescription:a,image:this.state.image,mainPageDate:this.state.mainPageDate};h.push(n),this.props.cardId(),this.setState({storyDescription:"",storyName:"",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png",mainPageDate:document.getElementById("datePicker").getAttribute("value"),startDate:new Date})}},{key:"render",value:function(){return r.a.createElement("div",{className:"form"},r.a.createElement("div",{id:"nameStoryDiv"},r.a.createElement("p",null,"Name your story:"),r.a.createElement("input",{onChange:this.handleChangeArea,label:"Outlined",variant:"outlined",id:"nameStory",value:this.state.storyName})),r.a.createElement("div",{id:"filePick"},r.a.createElement("label",{id:"filePickerLabel",htmlFor:"filePicker",style:{fontWeight:"100",fontSize:"20px",borderRadius:"5px",background:"grey",color:"white",padding:"5px 10px"}},"click here to choose a photo"),r.a.createElement("input",{id:"filePicker",onChange:this.onImageChange,style:{visibility:"hidden"},type:"file"})),r.a.createElement("div",{id:"dateAndButton"},r.a.createElement("p",null,"Date:"),r.a.createElement("div",{id:"buttonDate"},r.a.createElement(p.a,{style:b,selected:this.state.startDate,onChange:this.handleChangeDate,dateFormat:"MM/dd/yyyy",id:"datePicker",onCalendarClose:this.onCalendarClose,disabled:this.state.noDate}),r.a.createElement(y.a,{id:"dateButton",onClick:this.noDate,variant:"contained",color:"primary"},"no date"))),r.a.createElement(y.a,{className:"addStoryButton",variant:"contained",color:"primary",onClick:this.addItem},"add story"),r.a.createElement("div",{id:"textAreaDiv"},r.a.createElement("p",null,"what happend?"),r.a.createElement("textarea",{className:"textArea",style:{maxHeight:"150px",minHeight:"150px",minWidth:"70vh",resize:"none",padding:"15px",boxSizing:"border-box",fontSize:"15px"},value:this.state.storyDescription,onChange:this.handleChange,maxLength:"400",placeholder:"400 characters max"})),r.a.createElement("div",{className:"backToMain"},r.a.createElement(u.b,{className:"backToMainButton",to:"/MainPage"},r.a.createElement(y.a,{id:"backToMainButtonB",variant:"contained",color:"secondary"},"go back"))))}}]),a}(r.a.Component);var f=function(e){return r.a.createElement("div",{id:e.id,className:e.className,onDrop:function(t){t.preventDefault();var a=t.dataTransfer.getData("card_id"),n=document.getElementById(a);if(n.style.display="block",t.target.appendChild(n),"trashBlock"===e.className){var r=h.map((function(e){return e.id})).indexOf(Number(a));h.splice(r,1)}},onDragOver:function(e){e.preventDefault()}},e.children)};var E=function(e){return r.a.createElement("img",{id:e.id,className:e.className,draggable:e.draggable,onDragStart:function(e){var t=e.target;e.dataTransfer.setData("card_id",t.id),setTimeout((function(){t.style.display="none"}),0)},onDragOver:function(e){e.stopPropagation()},onClick:e.onClick,src:e.image,alt:""})},D=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={storyName:null,storyDescription:null,image:null,date:null},n.loadingStory=n.loadingStory.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"loadingStory",value:function(e){this.setState({storyName:e.storyName,storyDescription:e.storyDescription,image:e.image,date:e.mainPageDate})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"containerBoard",className:"container"},r.a.createElement("div",{className:"textAndImage"},r.a.createElement("div",{className:"mainText"},r.a.createElement("h1",{style:{fontSize:30,fontStyle:"italic"}},this.state.storyName," "),r.a.createElement("p",{style:{marginTop:25}},this.state.date," "),r.a.createElement("p",{className:"nocvar"},this.state.storyDescription)),r.a.createElement("img",{className:"largePic",alt:"",src:this.state.image})),r.a.createElement(u.b,{className:"toCreatePage",to:"/CreateExp"},r.a.createElement(y.a,{variant:"contained",color:"primary",className:"noDecoration"},"Create a new story")),r.a.createElement(f,{className:"trashBlock"},r.a.createElement("img",{className:"trash",src:"./trash.png",alt:""})),r.a.createElement(f,{className:"netflixslide"},h.map((function(t){return r.a.createElement(E,{className:"smallPic",draggable:"true",image:t.image,src:t.image,alt:"",id:t.id,onClick:e.loadingStory.bind(e,t)})}))))}}]),a}(r.a.Component);a(138);var C=function(){return r.a.createElement("div",{className:"startPage"},r.a.createElement("h1",{className:"startPageText"},"Capture Your Story"),r.a.createElement("p",{className:"startPageText"},"The purpose of this app is to connnect funny ",r.a.createElement("br",null),"or interesting stories to your selected photos. "),r.a.createElement("h2",null,"a few points to keep in mind:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Don't refresh the app when you use it because i didn't learn databases yet (changes will not be saved). "),r.a.createElement("li",null,"you have the option to drag and drop the stories you created.if you wish to discard one of them,",r.a.createElement("br",null),"  drag it to the trash icon."),r.a.createElement("li",null,"there is a bug that happens if you drag the pictures on top of each other, im trying to fix it. ")),r.a.createElement(u.b,{className:"startPageText startButton",to:"/MainPage"},r.a.createElement(y.a,{variant:"contained",color:"primary",className:" "},"Click to start")))},k=a(7),N=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={cardId:0},n.cardId=n.cardId.bind(Object(s.a)(n)),n.returnCardId=n.returnCardId.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"returnCardId",value:function(){return this.state.cardId}},{key:"cardId",value:function(){this.setState({cardId:this.state.cardId+1})}},{key:"render",value:function(){var e=this;return r.a.createElement(u.a,{basename:window.location.pathname||""},r.a.createElement(k.a,{exact:!0,path:"/MainPage",render:function(e){return r.a.createElement(D,e)}}),r.a.createElement(k.a,{exact:!0,path:"/CreateExp",render:function(t){return r.a.createElement(v,Object.assign({},t,{cardId:e.cardId.bind(e),returnCardId:e.returnCardId.bind(e)}))}}),r.a.createElement(k.a,{path:"/",exact:!0,component:C}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){e.exports=a(139)},76:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.0ddecb2a.chunk.js.map
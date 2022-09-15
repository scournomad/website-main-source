(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(304),o=a(295),s=a(296),c=a(307),i=a(30),m=a(28),u=a.n(m),p=a(305),d=[{image:"./img/platform/project-details.png",textItems:["Easily access project notes and information","Manage initial seed resources","Review changes from automated scans"]},{image:"./img/platform/automation.png",textItems:["Use publicly available tools as well as the proprietary nodes","Run the workflows manually or schedule them","Set them up to be triggered from outside environments","Observe the changes between the scan runs","Get alerted on changes or interesting finds","Automatically generate reports or add information to notes"]},{image:"./img/platform/attack-surface.png",textItems:["Review discovered resources and their relationships","Review discovered CVE-s, bugs, keys, and other loot","Expand the attack surface by automatic discovery workflows or by manual testing","Execute per-resource tools to perform manual inspection, discovery, or attack","Import resources from other tools"]},{image:"./img/platform/report-templates.png",textItems:["Build report templates, either for client reports or internal technical reports","Fill them up automatically by running workflows or manual tools","Update them manually as needed and review them easily","Build mind maps and checklists for your internal use"]},{image:"./img/platform/knowledge-base.png",textItems:["Keep the knowledge base and project notes as correlated pieces of information","Effortlessly locate your notes related to discovered resources, like ports and services, directly from the attack surface monitor","Effortlessly locate your knowledge base notes related to tools and procedures directly from the flowgraphs and manual run screens"]},{image:"./img/platform/timeline.png",textItems:["The platform will automatically keep the timeline for you","Set up what goes into the timeline and how it is displayed","Manually edit the timeline","Automatically use the timeline in your reports"]},{image:"./img/platform/collaboration.png",textItems:["Collaborate with your team, company, or fellow security researchers","Selectively share the pieces of your knowledgebase","Jointly edit the project notes, group knowledgebase, or project information","Split the tasks, and create the tickets in one of the supported ticketing systems"]}];function f(){var e=Object(r.useState)(!1),t=u()(e,2),a=t[0],l=t[1],c=Object(r.useState)(!1),i=u()(c,2),m=i[0],f=i[1];return n.a.createElement(n.a.Fragment,null,d.map((function(e,t){return n.a.createElement(o.a,{className:"platform-description-item-row",gutter:32,align:"middle"},n.a.createElement(s.a,{xl:{span:12,push:t%2==0?0:12}},n.a.createElement(p.a,{preview:{visible:!1},onClick:function(){f(t),l(!0)},src:e.image})),n.a.createElement(s.a,{xl:{span:12,pull:t%2==0?0:12}},n.a.createElement("ul",null,e.textItems.map((function(e){return n.a.createElement("li",null,e)})))))})),n.a.createElement("div",{style:{display:"none"}},n.a.createElement(p.a.PreviewGroup,{preview:{visible:a,onVisibleChange:function(e){return l(e)},current:m}},d.map((function(e){return n.a.createElement(p.a,{src:e.image})})))))}var g=a(93),h=a(309);function E(){return n.a.createElement("div",{className:"roadmap"},n.a.createElement("h2",null,"Roadmap"),n.a.createElement("p",null,"We currently have the PoC running and are actively working on finalizing the pre-alpha stage. After this stage we will perform initial pentest and start with the closed apha testing."),n.a.createElement(o.a,null,n.a.createElement(s.a,{xs:24},n.a.createElement(h.a,{mode:"left"},n.a.createElement(h.a.Item,{label:"",color:"#1f1f1f"}," "),n.a.createElement(h.a.Item,{label:"2021",color:"#9e70c7"},"Proof of Concept development"),n.a.createElement(h.a.Item,{label:"Q3 2022",color:"#9e70c7"},"FRC investment received"),n.a.createElement(h.a.Item,{label:"Sep 2022",color:"#cf9ff8"},"Pre-alpha development"),n.a.createElement(h.a.Item,{label:"Jan 2022",color:"gray"},"Closed alpha testing starts"),n.a.createElement(h.a.Item,{label:"Q1-Q2 2023",color:"gray"},"Beta testing starts"),n.a.createElement(h.a.Item,{label:"Q1 2023",color:"gray",dot:n.a.createElement(i.a,{icon:g.p})},"Full third-party pentest"),n.a.createElement(h.a.Item,{label:"Q2-Q3 2023",color:"gray"},"First commercial version")))))}var y=l.a.Meta;t.default=function(){return n.a.createElement("div",{className:"main-body"},n.a.createElement(o.a,{className:"app-logo",justify:"center"},n.a.createElement(s.a,{xs:{span:24},md:{span:21,offset:3}},n.a.createElement(o.a,{className:"app-logo-container",justify:"center"},n.a.createElement(s.a,{xs:{flex:"350px"},md:6},n.a.createElement("img",{src:"./img/NetScourSecLogo.png"})),n.a.createElement(s.a,{xs:{flex:"350px"},md:18},n.a.createElement("span",{className:"intro-text"},"NetScour Security presents"),n.a.createElement("h1",{className:"header1"},"ScourNomad"),n.a.createElement("h2",{className:"header2"},"Redefining infosec toolbox"))))),n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"What is ",n.a.createElement("span",{className:"platform-name"},"ScourNomad"),"?"),n.a.createElement("p",null,"The goal of the ScourNomad platform is to reduce the security experts' time and effort performing mundane tasks and improve testing performance. It enhances the penetration tests and bug hunts speed and precision, providing easy-to-use interfaces and powerful integrations."),n.a.createElement("b",null,"Build and execute your full software security testing methodologies quickly and easily!"),n.a.createElement(o.a,{className:"initial-description",gutter:32},n.a.createElement(s.a,{xl:8,lg:12,xs:24},n.a.createElement(l.a,{cover:n.a.createElement(i.a,{icon:g.c})},n.a.createElement(y,{description:"Build security testing methodologies and access them from anywhere"}))),n.a.createElement(s.a,{xl:8,lg:12,xs:24},n.a.createElement(l.a,{cover:n.a.createElement(i.a,{icon:g.g})},n.a.createElement(y,{description:"Automate what can be automated"}))),n.a.createElement(s.a,{xl:8,lg:12,xs:24},n.a.createElement(l.a,{cover:n.a.createElement(i.a,{icon:g.l})},n.a.createElement(y,{description:"Discover resources and loot by automated or manual security testing"}))),n.a.createElement(s.a,{xl:8,lg:12,xs:24},n.a.createElement(l.a,{cover:n.a.createElement(i.a,{icon:g.j})},n.a.createElement(y,{description:"Build easy notes and reports"}))),n.a.createElement(s.a,{xl:8,lg:12,xs:24},n.a.createElement(l.a,{cover:n.a.createElement(i.a,{icon:g.m})},n.a.createElement(y,{description:"Visualize your tasks with checklists and mindmaps"}))),n.a.createElement(s.a,{xl:8,lg:12,xs:24},n.a.createElement(l.a,{cover:n.a.createElement(i.a,{icon:g.b})},n.a.createElement(y,{description:"Correlate your knowledge base with the attack surface resources"})))),n.a.createElement("h2",null,"How ",n.a.createElement("span",{className:"platform-name"},"ScourNomad")," platform works:"),n.a.createElement("p",null,"ScourNomad platform provides multiple user interfaces to cover the daily tasks that software security professionals require. It also offers the most used tools that are readily available at any moment."),n.a.createElement(f,null),n.a.createElement(E,null),n.a.createElement(o.a,{justify:"center",style:{marginTop:"100px"}},n.a.createElement(s.a,{xs:24,xl:18},n.a.createElement(c.a,{block:!0,className:"shout-button",onClick:function(){return document.location="/preregister"}},n.a.createElement(i.a,{icon:g.e})," Preregister")))))}}}]);
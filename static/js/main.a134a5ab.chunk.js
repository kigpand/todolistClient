(this["webpackJsonptodolist-client"]=this["webpackJsonptodolist-client"]||[]).push([[0],{123:function(n,e,t){},124:function(n,e,t){"use strict";t.r(e);var i,c,r,a,o,s,l,d,u,j,b,h,x,p,m,g,f=t(0),O=t.n(f),v=t(25),w=t.n(v),y=(t(73),t(6)),k=t(8),N=t(7),C=t(31),S=t(2),I=N.a.div(i||(i=Object(y.a)(['\n  width : 100vw;\n  height : 100vh;\n  display : flex;\n  flex-direction : column;\n  align-items : center;\n  justify-content : center;\n\n  .title{\n    text-align : center;\n    font-family: "HSYuji-Regular";\n    font-size : 2rem;\n\n    div{\n      margin-top : 1rem;\n    }\n  }\n\n  .loginBtn{\n    margin-top : 3rem;\n    width : 200px;\n    height : 50px;\n    background-color : lightgreen;\n    color : white;\n    display : flex;\n    align-items : center;\n    justify-content : center;\n    font-weight : bold;\n    font-size : 1.5rem;\n    font-family: "ImcreSoojin";\n\n    &:hover{\n      background-color : green;\n    }\n  }\n\n  @media only screen and (max-width: 1000px) {\n    .title{\n      font-size: 0.8rem;\n    }\n  }  \n']))),B=function(){return Object(S.jsxs)(I,{children:[Object(S.jsxs)("div",{className:"title",children:[Object(S.jsx)("div",{children:"By failing to prepare, you are preparing to fail."}),Object(S.jsx)("div",{children:"\uc900\ube44\uc5d0 \uc2e4\ud328\ud558\ub294 \uac83\uc740 \uc2e4\ud328\ub97c \uc900\ube44\ud558\ub294 \uac83\uc774\ub2e4."}),Object(S.jsx)("div",{children:"- \ubca4\uc790\ubbfc \ud504\ub7ad\ud074\ub9b0 -"})]}),Object(S.jsx)("li",{className:"loginBtn",children:Object(S.jsx)(C.b,{to:"/Main",children:"Login"})})]})},D=t(4),z=t(9),F=Object(z.b)({key:"todoListArray",default:{date:new Date(""),item:[]}}),E=Object(z.b)({key:"listDate",default:"".concat((new Date).getFullYear(),"-").concat((new Date).getMonth()+1,"-").concat((new Date).getDate())}),M=Object(z.b)({key:"userInfo",default:{id:"",nick:""}}),H=N.a.div(c||(c=Object(y.a)(["\n    width : 100%;\n    display : flex;\n    flex-direction : column;\n    align-items : center;\n    margin-bottom: 4rem;\n\n    .idContainer,\n    .pwContainer{\n        width : 70%;\n        display : flex;\n        flex-direction : column;\n        margin-bottom: 2rem;\n\n        input{\n            margin-top : 0.3rem;\n            border : none;\n            border-bottom : 2px solid black;\n            outline : none;\n            height : 30px;\n            background-color : transparent;\n        }\n    }\n"]))),W=function(n){var e=n.onSetId,t=n.onSetPw;return Object(S.jsxs)(H,{children:[Object(S.jsxs)("div",{className:"idContainer",children:[Object(S.jsx)("label",{className:"idLabel",children:"UserId"}),Object(S.jsx)("input",{type:"text",className:"idInput",onChange:function(n){e(n.target.value)}})]}),Object(S.jsxs)("div",{className:"pwContainer",children:[Object(S.jsx)("label",{className:"pwLabel",children:"Password"}),Object(S.jsx)("input",{type:"password",className:"pwInput",onChange:function(n){t(n.target.value)}})]})]})},L=t(15),R=t.n(L),Y=t(36),_=t(14),J=t.n(_),P="https://ji-todolist-server.herokuapp.com",T=N.a.div(r||(r=Object(y.a)(["\n    width : 100%;\n    margin-top : 2rem;\n    display : flex;\n    flex-direction : column;\n    align-items : center;\n    \n    .loginBtn,\n    .joinBtn{\n        width : 70%;\n        height : 40px;\n        margin-top : 0.5rem;\n        display : flex;\n        align-items : center;\n        justify-content : center;\n\n        &:hover{\n            cursor : pointer;\n        }\n    }\n\n    .loginBtn{\n        margin-bottom: 1rem;\n        color: white;\n        background-color : lightblue;\n        &:hover{\n            background-color : skyblue;\n        }\n    }\n\n    .joinBtn{\n        color: gray;\n    }\n"]))),A=function(n){var e=n.id,t=n.pw,i=n.onJoinDialog,c=Object(k.e)(),r=Object(z.e)(M),a=function(){var n=Object(Y.a)(R.a.mark((function n(){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,J.a.post("".concat(P,"/user/login"),{id:e,pw:t}).then((function(n){"fail"===n.data.result?alert("\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694!"):(sessionStorage.setItem("user_id",n.data.result.id),sessionStorage.setItem("user_nick",n.data.result.nick),r({id:n.data.result.id,nick:n.data.result.nick}))}));case 2:c.push("/Main");case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(S.jsxs)(T,{children:[Object(S.jsx)("div",{className:"loginBtn",onClick:a,children:"\ub85c\uadf8\uc778"}),Object(S.jsx)("div",{className:"joinBtn",onClick:function(){i()},children:"\uc544\uc774\ub514\uac00 \uc5c6\uc73c\uc2e0\uac00\uc694?"})]})},G=t(5),U=N.a.div(a||(a=Object(y.a)(['\n    width : 100%;\n    height : 100%;\n    position : absolute;\n    z-index : 10;\n    font-family: "HSYuji-Regular";\n    background-color : rgba(0,0,0,0.4);\n    display : flex;\n    align-items: center;\n    justify-content : center;\n\n    .joinForm{\n        width : 400px;\n        height : 600px;\n        background-color : white;\n        border-radius : 4px;\n        display : flex;\n        flex-direction : column;\n\n        .title{\n            text-align : center;\n            margin-top : 2rem;\n            font-weight : bold;\n            font-size : 1.5rem;\n        }\n\n        .inputWrapper{\n            margin : 2rem 0 0 1rem;\n\n            div{\n                font-weight : bold;\n                margin-bottom : 0.5rem;\n            }\n\n            input{\n                width : 90%;\n                height : 30px;\n                border : 1px solid lightgray;\n                outline : none;\n            }\n\n            .failPw{\n                font-size : 0.5rem;\n                color : red;\n            }\n\n            .idCheck{\n                display : flex;\n                input {\n                    width : 70%;\n                    margin-right : 1rem;\n                }\n\n                button{\n                    font-family: "HSYuji-Regular";\n                    border : 1px solid lightgray;\n                    border-radius: 4px;\n                    background-color : white;\n                    outline: none;\n\n                    &:hover{\n                        cursor: pointer;\n                        background-color : whitesmoke;\n                    }\n                }\n            }\n        }\n\n        .btns{\n            display: flex;\n            justify-content : center;\n            margin-top : 2rem;\n\n            .joinBtn,\n            .cancleBtn{\n                width : 100px;\n                height : 30px;\n                display : flex;\n                align-items: center;\n                justify-content : center;\n\n                &:hover{\n                    cursor : pointer;\n                }\n            }\n\n            .joinBtn{\n                background-color : #EDFF75;\n                margin-right : 2rem;\n\n                &:hover{\n                    background-color : yellow;\n                }\n            }\n\n            .cancleBtn{\n                background-color : lightgray;\n\n                &:hover{\n                    background-color : gray;\n                }\n            }\n        }\n    }\n']))),q=function(n){var e=n.closeJoinDialog,t=Object(f.useState)({id:"",nickName:"",pw:""}),i=Object(D.a)(t,2),c=i[0],r=i[1],a=Object(f.useState)(!1),o=Object(D.a)(a,2),s=o[0],l=o[1],d=Object(f.useState)(),u=Object(D.a)(d,2),j=u[0],b=u[1],h=Object(f.useState)(),x=Object(D.a)(h,2),p=x[0],m=x[1];return Object(f.useEffect)((function(){""!==c.pw&&""!==j&&(c.pw===j?m(!0):m(!1))}),[c.pw,j]),Object(S.jsx)(U,{children:Object(S.jsxs)("div",{className:"joinForm",children:[Object(S.jsx)("div",{className:"title",children:"\ud68c\uc6d0\uac00\uc785"}),Object(S.jsxs)("div",{className:"inputWrapper",children:[Object(S.jsx)("div",{children:"\uc544\uc774\ub514"}),Object(S.jsxs)("div",{className:"idCheck",children:[Object(S.jsx)("input",{type:"text",onChange:function(n){return function(n){r(Object(G.a)(Object(G.a)({},c),{},{id:n.target.value}))}(n)}}),Object(S.jsx)("button",{onClick:function(){""===c.id?alert("\uacf5\ubc31\uc740 \uc785\ub825\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4!"):J.a.post("".concat(P,"/user/idCheck"),{id:c.id}).then((function(n){n.data.result?(alert("\uc544\uc774\ub514\uac00 \uc0ac\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4!"),l(!0)):(alert("\uc544\uc774\ub514\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4"),l(!1))}))},children:"\uc911\ubcf5\ud655\uc778"})]})]}),Object(S.jsxs)("div",{className:"inputWrapper",children:[Object(S.jsx)("div",{children:"\ub2c9\ub124\uc784"}),Object(S.jsx)("input",{type:"text",onChange:function(n){return function(n){r(Object(G.a)(Object(G.a)({},c),{},{nickName:n.target.value}))}(n)}})]}),Object(S.jsxs)("div",{className:"inputWrapper",children:[Object(S.jsx)("div",{children:"\ube44\ubc00\ubc88\ud638"}),Object(S.jsx)("input",{type:"password",onChange:function(n){return function(n){r(Object(G.a)(Object(G.a)({},c),{},{pw:n.target.value}))}(n)}})]}),Object(S.jsxs)("div",{className:"inputWrapper",children:[Object(S.jsx)("div",{children:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"}),Object(S.jsx)("input",{type:"password",onChange:function(n){return function(n){b(n.target.value)}(n)}}),!p&&c.pw&&j&&Object(S.jsx)("div",{className:"failPw",children:"\ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694"})]}),Object(S.jsxs)("div",{className:"btns",children:[Object(S.jsx)("div",{className:"joinBtn",onClick:function(){return""!==c.id&&""!==c.pw&&""!==c.nickName?p?s?(J.a.post("".concat(P,"/user/join"),{userInfo:c}).then((function(n){n.data.result?alert("\ud68c\uc6d0\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4"):alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4")})).catch((function(n){console.error(n)})),void e()):void alert("\uc544\uc774\ub514 \uc911\ubcf5\ud655\uc778\uc744 \ud574\uc8fc\uc138\uc694"):void alert("\ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694"):void alert("\ud56d\ubaa9\ub4e4\uc744 \uc804\ubd80 \uc785\ub825\ud574\uc8fc\uc138\uc694!")},children:"\ud68c\uc6d0\uac00\uc785"}),Object(S.jsx)("div",{className:"cancleBtn",onClick:function(){e()},children:"\ucde8\uc18c"})]})]})})},K=N.a.div(o||(o=Object(y.a)(["\n    width : 100vw;\n    height : 100vh;\n    display : flex;\n    align-items : center;\n    justify-content : center;\n    position : relative;\n\n    .loginForm{\n        background-color : none;\n        width : 450px;\n        height : 600px;\n        color : black;\n        font-family: 'HSYuji-Regular';\n        display : flex;\n        flex-direction: column;\n        align-items: center;\n        z-index : 1;\n\n        .title{\n            font-size : 3rem;\n            margin : 3rem 0;\n        }\n    }\n"]))),Q=function(){var n=Object(f.useState)({id:"",pw:""}),e=Object(D.a)(n,2),t=e[0],i=e[1],c=Object(f.useState)(!1),r=Object(D.a)(c,2),a=r[0],o=r[1];return Object(S.jsx)(K,{children:a?Object(S.jsx)(q,{closeJoinDialog:function(){o(!1)}}):Object(S.jsxs)("div",{className:"loginForm",children:[Object(S.jsx)("div",{className:"title",children:"WelCome!"}),Object(S.jsx)(W,{onSetId:function(n){i({id:n,pw:t.pw})},onSetPw:function(n){i({id:t.id,pw:n})}}),Object(S.jsx)(A,{id:t.id,pw:t.pw,onJoinDialog:function(){o(!0)}})]})})},V=t(21),X=t(61),Z=t.n(X),$=t(62),nn=t.n($),en=N.a.div(s||(s=Object(y.a)(["\n    width : 100%;\n    display : flex;\n    margin : 1rem 0 0 1rem;\n    font-size : 1.2rem;\n\n    .checkIcon{\n        font-size : 1.5rem;\n        color : ",";\n\n        &:hover{\n            cursor : pointer;\n        }\n    }\n\n    .content{\n        color : ",";\n        margin-left : 1rem;\n        width : 70%;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n    }\n    \n    .closeBtn{\n        font-size : 1.5rem;\n        color : gray;\n        &:hover{\n            cursor : pointer;\n            color : red;\n        }\n    }\n\n    @media only screen and (max-width: 1000px) {\n        width : 80%;\n    }\n"])),(function(n){return n.checkColor}),(function(n){return n.fontColor})),tn=function(n){var e=n.list,t=n.onItemRemove,i=Object(f.useState)({fontColor:"black",checkColor:"gray"}),c=Object(D.a)(i,2),r=c[0],a=c[1];return Object(S.jsxs)(en,{fontColor:r.fontColor,checkColor:r.checkColor,children:[Object(S.jsx)(Z.a,{className:"checkIcon",onClick:function(){"black"===r.fontColor?a({fontColor:"lightgray",checkColor:"green"}):a({fontColor:"black",checkColor:"gray"})}}),Object(S.jsx)("div",{className:"content",children:e.content}),Object(S.jsx)(nn.a,{className:"closeBtn",onClick:function(){return t(e.id)}})]})},cn=t(64),rn=t.n(cn),an=t(65),on=(t(103),t(138)),sn=N.a.div(l||(l=Object(y.a)(["\n    z-index : 10;\n    display : flex;\n    flex-direction : column;\n\n    .addCalendar{\n        display : flex;\n        align-items: center;\n        justify-content: center;\n        width : 60px;\n        height : 60px;\n        border-radius : 4px;\n        background-color : white;\n        border : 2px solid #EDFF75;\n        outline : none;\n\n        .calendarIcon{\n            font-size: 3rem;\n        }\n\n        &:hover{\n            cursor : pointer;\n            background-color: whitesmoke;\n        }\n    }\n\n    .calendarWrapper{\n        position : relative;\n        display: flex;\n        justify-content: flex-start;\n        .calendar{\n            top: 0;\n            left: 0;\n            position : absolute;\n        }\n    }\n\n    .playBtn{\n        font-size : 3rem;\n\n        &:hover{\n            color : darkblue;\n            cursor : pointer;\n        }\n    }\n\n    @media only screen and (max-width: 480px) {\n        flex-direction: row;\n\n        .addCalendar{\n            width: 40px;\n            height: 40px;\n\n            .calendarIcon{\n                font-size: 1.5rem;\n            }\n        }\n\n        .calendarWrapper{\n            position: static;\n            .calendar{\n                position : absolute;\n                top: 0;\n                left: 0;\n                width: 100vw;\n                height: 50%;\n        \n                .react-calendar {\n                    width: 100%;\n                    height : 100%;\n                    border: 1px solid #a0a096;\n                    font-family: Arial, Helvetica, sans-serif;\n                    line-height: 1.125em;\n                }\n            }\n        }\n    }\n"]))),ln=function(){var n=Object(f.useState)(!1),e=Object(D.a)(n,2),t=e[0],i=e[1],c=Object(z.d)(F),r=Object(z.e)(E);return Object(S.jsxs)(sn,{children:[Object(S.jsx)("button",{className:"addCalendar",onClick:function(){i(!t)},children:Object(S.jsx)(on.a,{className:"calendarIcon"})}),Object(S.jsx)("div",{className:"calendarWrapper",children:t&&Object(S.jsx)("div",{className:"calendar",children:Object(S.jsx)(an.a,{onChange:function(n){var e="".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDate());r(e),i(!1)},calendarType:"Hebrew",value:c.date})})})]})},dn=t(139),un=N.a.div(d||(d=Object(y.a)(["\n    .logOutBtn{\n        width : 60px;\n        height : 60px;\n        border-radius : 4px;\n        background-color : white;\n        border : 2px solid #EDFF75;\n        outline : none;\n        display : flex;\n        align-items: center;\n        justify-content: center;\n\n        .ExitIcon{\n            font-size: 3rem;\n        }\n\n        &:hover{\n            cursor : pointer;\n            background-color: whitesmoke;\n        }\n    }\n\n    @media only screen and (max-width: 480px) {\n        .logOutBtn{\n            width: 40px;\n            height: 40px;\n\n            .ExitIcon{\n                font-size: 1.5rem;\n            }\n        }\n    }\n"]))),jn=function(n){var e=n.onLogOut;return Object(S.jsx)(un,{children:Object(S.jsx)("div",{className:"logOutBtn",onClick:e,children:Object(S.jsx)(dn.a,{className:"ExitIcon"})})})},bn=N.a.div(u||(u=Object(y.a)(["\n    width : 200px;\n    margin-left : 1rem;\n    font-size : 2rem;\n\n    @media only screen and (max-width: 480px) {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100px;\n        height: 40px;\n        font-size: 1rem;\n    }\n"]))),hn=function(){var n=Object(f.useState)(new Date),e=Object(D.a)(n,2),t=e[0],i=e[1];return Object(f.useEffect)((function(){var n=setInterval((function(){i(new Date)}),1e3);return function(){return clearInterval(n)}}),[]),Object(S.jsxs)(bn,{children:[t.getHours()<10?"0"+t.getHours():t.getHours(),":",t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),":",t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds()]})},xn=t(63),pn=t.n(xn),mn=(t(119),t(120),t(18)),gn=t(19),fn=N.a.div(j||(j=Object(y.a)(["\n    overflow: hidden;\n"]))),On=Object(N.a)(pn.a)(b||(b=Object(y.a)(["\n    div{\n        width: 200px;\n        margin-left: 0.1rem;\n\n        span{\n            margin-left: 0.3rem;\n        }\n\n        .icon{\n            margin-left: 1rem;\n        }\n    }\n    @media only screen and (max-width: 480px) {\n        font-size: 0.8rem;\n    }\n"]))),vn=function(n){switch(n.substr(0,2)){case"01":return Object(S.jsx)(mn.a,{icon:gn.j});case"02":return Object(S.jsx)(mn.a,{icon:gn.d});case"03":return Object(S.jsx)(mn.a,{icon:gn.a});case"04":return Object(S.jsx)(mn.a,{icon:gn.b});case"09":return Object(S.jsx)(mn.a,{icon:gn.e});case"10":return Object(S.jsx)(mn.a,{icon:gn.c});case"11":return Object(S.jsx)(mn.a,{icon:gn.f});case"13":return Object(S.jsx)(mn.a,{icon:gn.i});case"50":return Object(S.jsx)(mn.a,{icon:gn.h});default:return Object(S.jsx)(mn.a,{icon:gn.g})}},wn=function(){var n=Object(f.useState)(!0),e=Object(D.a)(n,2),t=e[0],i=e[1],c=Object(f.useState)([]),r=Object(D.a)(c,2),a=r[0],o=r[1];return Object(f.useEffect)((function(){i(!0),J.a.get("".concat(P,"/api/weather")).then((function(n){var e=[];n.data.result.map((function(n){var t=function(n){switch(n){case"Seoul":return"\uc11c\uc6b8";case"Busan":return"\ubd80\uc0b0";case"W\u014fnju":return"\uc6d0\uc8fc";case"Jeju City":return"\uc81c\uc8fc";case"Daegu":return"\ub300\uad6c";case"Daejeon":return"\ub300\uc804";case"Incheon":return"\uc778\ucc9c";case"Ulsan":return"\uc6b8\uc0b0";case"Gongju":return"\uacf5\uc8fc";case"Gangneung":return"\uac15\ub989";default:return n}}(n.name);e.push({location:t,temp:Math.round(n.main.temp-273.15),weather:n.weather[0].icon})})),o([].concat(e)),i(!1)})).catch((function(n){console.log(n)}))}),[]),Object(S.jsx)(fn,{children:t?Object(S.jsx)("div",{children:"\ub85c\ub529\uc911"}):Object(S.jsx)(On,Object(G.a)(Object(G.a)({},{infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,vertical:!0}),{},{children:a.map((function(n,e){return Object(S.jsxs)("div",{children:[Object(S.jsx)("span",{children:n.location}),Object(S.jsx)("span",{className:"icon",children:vn(n.weather)}),Object(S.jsx)("span",{children:n.temp})]},e)}))}))})},yn=N.a.div(h||(h=Object(y.a)(["\n    display: flex;\n    flex-direction: column;\n\n    .btns{\n        display: flex;\n        flex-direction: column;\n    }\n\n    @media only screen and (max-width: 1000px) {\n        justify-content: space-around;\n        flex-direction: row;\n        align-items: center;\n\n        .btns{\n            flex-direction: row;\n        }\n    }\n"]))),kn=function(n){var e=n.onLogOut;return Object(S.jsxs)(yn,{children:[Object(S.jsx)(hn,{}),Object(S.jsx)(wn,{}),Object(S.jsxs)("div",{className:"btns",children:[Object(S.jsx)(jn,{onLogOut:e}),Object(S.jsx)(ln,{})]})]})},Nn=N.a.div(x||(x=Object(y.a)(["\n\n    margin-left : 10%;\n    display: flex;\n\n    .body{\n        background-color : white;\n        border : 2px solid #EDFF75;\n        width : 600px;\n        height : 600px;\n        border-radius : 20px;\n        z-index : 1;\n        display : flex;\n        flex-direction : column;\n\n        .line{\n            margin : 1rem 0 0 1rem;\n            width : 100%;\n            height : 3px;\n            background-color : lightgray;\n        }\n\n        .title{\n            width : 80%;\n            height : 10%;\n            margin : 1rem 0 0 1rem;\n            font-size : 1.2rem;\n            font-weight : bold;\n        }\n\n        .lists{\n            width : 100%;\n            height : 80%;\n        }\n\n        .addBtn{\n            width : 100%;\n            height : 10%;\n            display : flex;\n            align-items: center;\n            justify-content : center;\n\n            .addIcon{\n                font-size : 2rem;\n                color : green;\n\n                &:hover{\n                    color : darkgreen;\n                    cursor : pointer;\n                }\n            }\n        }\n    }\n    \n    @media only screen and (max-width: 1000px) {\n        width: 100%;\n        margin : 0;\n        flex-direction: column-reverse;\n\n        .body{\n            width: 100%;\n            height: 600px;\n        }\n    }\n"]))),Cn=function(n){var e=n.onOpenDialog,t=Object(k.e)(),i=Object(z.c)(M),c=Object(D.a)(i,2),r=c[0],a=c[1],o=Object(z.d)(E),s=Object(z.c)(F),l=Object(D.a)(s,2),d=l[0],u=l[1];Object(f.useEffect)((function(){J.a.post("".concat(P,"/board/loadBoard"),{userId:r.id,date:o}).then((function(n){var e=[];n.data.result.map((function(n){e.push({id:n.id,userId:n.user_id,content:n.content})})),u({date:new Date(Date.parse(o)),item:[].concat(e)})})).catch((function(n){console.log(n)}))}),[o,u,r.id]);var j=function(n){J.a.post("".concat(P,"/board/deleteBoard"),{id:n}).then((function(e){if(e.data.result){var t=d.item.filter((function(e){return e.id!==n}));u({date:d.date,item:Object(V.a)(t)})}else alert("\uac8c\uc2dc\uae00 \uc0ad\uc81c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4")}))};return Object(S.jsxs)(Nn,{children:[Object(S.jsxs)("div",{className:"body",children:[Object(S.jsxs)("div",{className:"title",children:[d.date.getFullYear(),"\ub144 ",d.date.getMonth()+1,"\uc6d4 ",d.date.getDate(),"\uc77c",Object(S.jsx)("div",{className:"line"})]}),Object(S.jsx)("div",{className:"lists",children:d.item.map((function(n){return Object(S.jsx)(tn,{list:n,onItemRemove:j},n.id)}))}),Object(S.jsx)("div",{className:"addBtn",onClick:e,children:Object(S.jsx)(rn.a,{className:"addIcon"})})]}),Object(S.jsx)(kn,{onLogOut:function(){a({id:"",nick:""}),sessionStorage.setItem("user_id",""),sessionStorage.setItem("user_nick",""),t.push("/Main")}})]})},Sn=N.a.div(p||(p=Object(y.a)(["\n    position : absolute;\n    background-color : rgba(0,0,0,0.4);\n    width : 100%;\n    height : 100%;\n    top: 0;\n    left: 0;\n    z-index : 100;\n    display : flex;\n    align-items: center;\n    justify-content : center;\n\n    .body{\n        width: 300px;\n        height : 200px;\n        border-radius : 20px;\n        background-color : white;\n\n        .header{\n            border-radius : 20px 20px 0 0;\n            height: 50px;\n            background-color : #EDFF75;\n            display : flex;\n            align-items : center;\n            justify-content : center;\n        }\n\n        .main{\n            height : 150px;\n            display : flex;\n            flex-direction : column;\n            align-items: center;\n\n            .inputer { \n                width : 80%;\n                height : 30px;\n                border : 3px solid lightgray;\n                outline : none;\n            }\n\n            .btns{\n                margin-top : 2rem;\n\n                .successBtn,\n                .cancleBtn{\n                    border : none;\n                    border-radius : 8px;\n                    outline : none;\n                    width : 60px;\n                    height : 30px;\n                    font-family: 'HSYuji-Regular';\n\n                    &:hover{\n                        cursor : pointer;\n                    }\n                }\n\n                .successBtn{\n                    background-color : #EDFF75;\n                    margin-right : 1rem;\n\n                    &:hover{\n                        background-color : yellow;\n                    }\n                }\n\n                .cancleBtn{\n                    &:hover{\n                        background-color : gray;\n                    }\n                }\n            }\n        }\n    }\n"]))),In=function(n){var e=n.onCloseDialog,t=Object(z.c)(F),i=Object(D.a)(t,2),c=i[0],r=i[1],a=Object(z.d)(M),o=Object(z.d)(E),s=Object(f.useRef)(null);return Object(S.jsx)(Sn,{children:Object(S.jsxs)("div",{className:"body",children:[Object(S.jsx)("div",{className:"header",children:"\ucd94\uac00 \ud558\uc2e4 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!"}),Object(S.jsxs)("div",{className:"main",children:[Object(S.jsx)("input",{className:"inputer",type:"text",ref:s}),Object(S.jsxs)("div",{className:"btns",children:[Object(S.jsx)("button",{className:"successBtn",onClick:function(){var n=s.current.value,t={userId:a.id,date:o,content:n};J.a.post("".concat(P,"/board/addBoard"),Object(G.a)({},t)).then((function(e){e.data.result?r({date:new Date(Date.parse(o)),item:[].concat(Object(V.a)(c.item),[{id:e.data.id,userId:a.id,content:n}])}):alert("\uac8c\uc2dc\uae00 \ub4f1\ub85d\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4")})),e()},children:"\uc644\ub8cc"}),Object(S.jsx)("button",{className:"cancleBtn",onClick:e,children:"\ucde8\uc18c"})]})]})]})})},Bn=N.a.div(m||(m=Object(y.a)(["\n    width : 100vw;\n    height : 100vh;\n    font-family: 'HSYuji-Regular';\n\n    .main{\n        width : 100%;\n        height : 100%;\n        display : flex;\n        flex-direction : column;\n        justify-content : center;\n    }\n"]))),Dn=function(){var n=Object(f.useState)(!1),e=Object(D.a)(n,2),t=e[0],i=e[1];return Object(S.jsxs)(Bn,{children:[t&&Object(S.jsx)(In,{onCloseDialog:function(){i(!1)}}),Object(S.jsx)("div",{className:"main",children:Object(S.jsx)(Cn,{onOpenDialog:function(){i(!0)}})})]})},zn=function(){var n=Object(z.c)(M),e=Object(D.a)(n,2),t=e[0],i=e[1];return Object(f.useLayoutEffect)((function(){var n=sessionStorage.getItem("user_id")?sessionStorage.getItem("user_id"):"",e=sessionStorage.getItem("user_nick")?sessionStorage.getItem("user_nick"):"";i({id:n,nick:e})}),[i]),Object(S.jsx)("div",{children:""!==t.id&&""!==t.nick?Object(S.jsx)(Dn,{}):Object(S.jsx)(Q,{})})},Fn=t.p+"static/media/background.732080b0.jpg",En=(t(123),N.a.div(g||(g=Object(y.a)(["\n    position : relative;\n\n    .background{\n        z-index : -1;\n        position: absolute;\n        top: 0;\n        left : 0;\n        width : 100%;\n        height : 100%;\n        opacity : 0.7;        \n\n        img{\n          width: 100%;\n          height : 100%;\n          object-fit : cover;\n        }\n    }\n"]))));var Mn=function(){return Object(S.jsxs)(En,{children:[Object(S.jsx)("div",{className:"background",children:Object(S.jsx)("img",{src:Fn,alt:"\ubc30\uacbd"})}),Object(S.jsx)(k.a,{path:"/",exact:!0,component:B}),Object(S.jsx)(k.a,{path:"/Main",component:zn})]})};w.a.render(Object(S.jsx)(O.a.StrictMode,{children:Object(S.jsx)(C.a,{basename:"/todolistClient",children:Object(S.jsx)(z.a,{children:Object(S.jsx)(Mn,{})})})}),document.getElementById("root"))},73:function(n,e,t){}},[[124,1,2]]]);
//# sourceMappingURL=main.a134a5ab.chunk.js.map
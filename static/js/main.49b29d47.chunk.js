(this["webpackJsonptodolist-client"]=this["webpackJsonptodolist-client"]||[]).push([[0],{65:function(n,e,t){},97:function(n,e,t){},98:function(n,e,t){"use strict";t.r(e);var i,c,o,r,a,s,l,d,u,j,b,h,p,x,g=t(0),m=t.n(g),f=t(22),O=t.n(f),v=(t(65),t(7)),w=t(6),y=t(8),k=t(25),N=t(2),C=y.a.div(i||(i=Object(v.a)(['\n  width : 100vw;\n  height : 100vh;\n  display : flex;\n  flex-direction : column;\n  align-items : center;\n  justify-content : center;\n\n  .title{\n    text-align : center;\n    font-family: "HSYuji-Regular";\n    font-size : 2rem;\n\n    div{\n      margin-top : 1rem;\n    }\n  }\n\n  .loginBtn{\n    margin-top : 3rem;\n    width : 200px;\n    height : 50px;\n    background-color : lightgreen;\n    color : white;\n    display : flex;\n    align-items : center;\n    justify-content : center;\n    font-weight : bold;\n    font-size : 1.5rem;\n    font-family: "ImcreSoojin";\n\n    &:hover{\n      background-color : green;\n    }\n  }\n\n  @media only screen and (max-width: 1000px) {\n    .title{\n      font-size: 0.8rem;\n    }\n  }  \n']))),I=function(){return Object(N.jsxs)(C,{children:[Object(N.jsxs)("div",{className:"title",children:[Object(N.jsx)("div",{children:"By failing to prepare, you are preparing to fail."}),Object(N.jsx)("div",{children:"\uc900\ube44\uc5d0 \uc2e4\ud328\ud558\ub294 \uac83\uc740 \uc2e4\ud328\ub97c \uc900\ube44\ud558\ub294 \uac83\uc774\ub2e4."}),Object(N.jsx)("div",{children:"- \ubca4\uc790\ubbfc \ud504\ub7ad\ud074\ub9b0 -"})]}),Object(N.jsx)("li",{className:"loginBtn",children:Object(N.jsx)(k.b,{to:"/Main",children:"Login"})})]})},B=t(4),S=t(9),D=Object(S.b)({key:"todoListArray",default:{date:new Date(""),item:[]}}),z=Object(S.b)({key:"listDate",default:"".concat((new Date).getFullYear(),"-").concat((new Date).getMonth()+1,"-").concat((new Date).getDate())}),F=Object(S.b)({key:"userInfo",default:{id:"",nick:""}}),E=y.a.div(c||(c=Object(v.a)(["\n    width : 100%;\n    display : flex;\n    flex-direction : column;\n    align-items : center;\n    margin-bottom: 4rem;\n\n    .idContainer,\n    .pwContainer{\n        width : 70%;\n        display : flex;\n        flex-direction : column;\n        margin-bottom: 2rem;\n\n        input{\n            margin-top : 0.3rem;\n            border : none;\n            border-bottom : 2px solid black;\n            outline : none;\n            height : 30px;\n            background-color : transparent;\n        }\n    }\n"]))),H=function(n){var e=n.onSetId,t=n.onSetPw;return Object(N.jsxs)(E,{children:[Object(N.jsxs)("div",{className:"idContainer",children:[Object(N.jsx)("label",{className:"idLabel",children:"UserId"}),Object(N.jsx)("input",{type:"text",className:"idInput",onChange:function(n){e(n.target.value)}})]}),Object(N.jsxs)("div",{className:"pwContainer",children:[Object(N.jsx)("label",{className:"pwLabel",children:"Password"}),Object(N.jsx)("input",{type:"password",className:"pwInput",onChange:function(n){t(n.target.value)}})]})]})},M=t(14),Y=t.n(M),L=t(30),R=t(17),W=t.n(R),_="https://ji-todolist-server.herokuapp.com",J=y.a.div(o||(o=Object(v.a)(["\n    width : 100%;\n    margin-top : 2rem;\n    display : flex;\n    flex-direction : column;\n    align-items : center;\n    \n    .loginBtn,\n    .joinBtn{\n        width : 70%;\n        height : 40px;\n        margin-top : 0.5rem;\n        display : flex;\n        align-items : center;\n        justify-content : center;\n\n        &:hover{\n            cursor : pointer;\n        }\n    }\n\n    .loginBtn{\n        margin-bottom: 1rem;\n        color: white;\n        background-color : lightblue;\n        &:hover{\n            background-color : skyblue;\n        }\n    }\n\n    .joinBtn{\n        color: gray;\n    }\n"]))),P=function(n){var e=n.id,t=n.pw,i=n.onJoinDialog,c=Object(w.e)(),o=Object(S.e)(F),r=function(){var n=Object(L.a)(Y.a.mark((function n(){return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,W.a.post("".concat(_,"/user/login"),{id:e,pw:t}).then((function(n){"fail"===n.data.result?alert("\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694!"):(sessionStorage.setItem("user_id",n.data.result.id),sessionStorage.setItem("user_nick",n.data.result.nick),o({id:n.data.result.id,nick:n.data.result.nick}))}));case 2:c.push("/Main");case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(N.jsxs)(J,{children:[Object(N.jsx)("div",{className:"loginBtn",onClick:r,children:"\ub85c\uadf8\uc778"}),Object(N.jsx)("div",{className:"joinBtn",onClick:function(){i()},children:"\uc544\uc774\ub514\uac00 \uc5c6\uc73c\uc2e0\uac00\uc694?"})]})},A=t(5),T=y.a.div(r||(r=Object(v.a)(['\n    width : 100%;\n    height : 100%;\n    position : absolute;\n    z-index : 10;\n    font-family: "HSYuji-Regular";\n    background-color : rgba(0,0,0,0.4);\n    display : flex;\n    align-items: center;\n    justify-content : center;\n\n    .joinForm{\n        width : 400px;\n        height : 600px;\n        background-color : white;\n        border-radius : 4px;\n        display : flex;\n        flex-direction : column;\n\n        .title{\n            text-align : center;\n            margin-top : 2rem;\n            font-weight : bold;\n            font-size : 1.5rem;\n        }\n\n        .inputWrapper{\n            margin : 2rem 0 0 1rem;\n\n            div{\n                font-weight : bold;\n                margin-bottom : 0.5rem;\n            }\n\n            input{\n                width : 90%;\n                height : 30px;\n                border : 1px solid lightgray;\n                outline : none;\n            }\n\n            .failPw{\n                font-size : 0.5rem;\n                color : red;\n            }\n\n            .idCheck{\n                display : flex;\n                input {\n                    width : 70%;\n                    margin-right : 1rem;\n                }\n\n                button{\n                    font-family: "HSYuji-Regular";\n                    border : 1px solid lightgray;\n                    border-radius: 4px;\n                    background-color : white;\n                    outline: none;\n\n                    &:hover{\n                        cursor: pointer;\n                        background-color : whitesmoke;\n                    }\n                }\n            }\n        }\n\n        .btns{\n            display: flex;\n            justify-content : center;\n            margin-top : 2rem;\n\n            .joinBtn,\n            .cancleBtn{\n                width : 100px;\n                height : 30px;\n                display : flex;\n                align-items: center;\n                justify-content : center;\n\n                &:hover{\n                    cursor : pointer;\n                }\n            }\n\n            .joinBtn{\n                background-color : #EDFF75;\n                margin-right : 2rem;\n\n                &:hover{\n                    background-color : yellow;\n                }\n            }\n\n            .cancleBtn{\n                background-color : lightgray;\n\n                &:hover{\n                    background-color : gray;\n                }\n            }\n        }\n    }\n']))),U=function(n){var e=n.closeJoinDialog,t=Object(g.useState)({id:"",nickName:"",pw:""}),i=Object(B.a)(t,2),c=i[0],o=i[1],r=Object(g.useState)(!1),a=Object(B.a)(r,2),s=a[0],l=a[1],d=Object(g.useState)(),u=Object(B.a)(d,2),j=u[0],b=u[1],h=Object(g.useState)(),p=Object(B.a)(h,2),x=p[0],m=p[1];return Object(g.useEffect)((function(){""!==c.pw&&""!==j&&(c.pw===j?m(!0):m(!1))}),[c.pw,j]),Object(N.jsx)(T,{children:Object(N.jsxs)("div",{className:"joinForm",children:[Object(N.jsx)("div",{className:"title",children:"\ud68c\uc6d0\uac00\uc785"}),Object(N.jsxs)("div",{className:"inputWrapper",children:[Object(N.jsx)("div",{children:"\uc544\uc774\ub514"}),Object(N.jsxs)("div",{className:"idCheck",children:[Object(N.jsx)("input",{type:"text",onChange:function(n){return function(n){o(Object(A.a)(Object(A.a)({},c),{},{id:n.target.value}))}(n)}}),Object(N.jsx)("button",{onClick:function(){""===c.id?alert("\uacf5\ubc31\uc740 \uc785\ub825\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4!"):W.a.post("".concat(_,"/user/idCheck"),{id:c.id}).then((function(n){n.data.result?(alert("\uc544\uc774\ub514\uac00 \uc0ac\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4!"),l(!0)):(alert("\uc544\uc774\ub514\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4"),l(!1))}))},children:"\uc911\ubcf5\ud655\uc778"})]})]}),Object(N.jsxs)("div",{className:"inputWrapper",children:[Object(N.jsx)("div",{children:"\ub2c9\ub124\uc784"}),Object(N.jsx)("input",{type:"text",onChange:function(n){return function(n){o(Object(A.a)(Object(A.a)({},c),{},{nickName:n.target.value}))}(n)}})]}),Object(N.jsxs)("div",{className:"inputWrapper",children:[Object(N.jsx)("div",{children:"\ube44\ubc00\ubc88\ud638"}),Object(N.jsx)("input",{type:"password",onChange:function(n){return function(n){o(Object(A.a)(Object(A.a)({},c),{},{pw:n.target.value}))}(n)}})]}),Object(N.jsxs)("div",{className:"inputWrapper",children:[Object(N.jsx)("div",{children:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"}),Object(N.jsx)("input",{type:"password",onChange:function(n){return function(n){b(n.target.value)}(n)}}),!x&&c.pw&&j&&Object(N.jsx)("div",{className:"failPw",children:"\ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694"})]}),Object(N.jsxs)("div",{className:"btns",children:[Object(N.jsx)("div",{className:"joinBtn",onClick:function(){return""!==c.id&&""!==c.pw&&""!==c.nickName?x?s?(W.a.post("".concat(_,"/user/join"),{userInfo:c}).then((function(n){n.data.result?alert("\ud68c\uc6d0\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4"):alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4")})).catch((function(n){console.error(n)})),void e()):void alert("\uc544\uc774\ub514 \uc911\ubcf5\ud655\uc778\uc744 \ud574\uc8fc\uc138\uc694"):void alert("\ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694"):void alert("\ud56d\ubaa9\ub4e4\uc744 \uc804\ubd80 \uc785\ub825\ud574\uc8fc\uc138\uc694!")},children:"\ud68c\uc6d0\uac00\uc785"}),Object(N.jsx)("div",{className:"cancleBtn",onClick:function(){e()},children:"\ucde8\uc18c"})]})]})})},q=y.a.div(a||(a=Object(v.a)(["\n    width : 100vw;\n    height : 100vh;\n    display : flex;\n    align-items : center;\n    justify-content : center;\n    position : relative;\n\n    .loginForm{\n        background-color : none;\n        width : 450px;\n        height : 600px;\n        color : black;\n        font-family: 'HSYuji-Regular';\n        display : flex;\n        flex-direction: column;\n        align-items: center;\n        z-index : 1;\n\n        .title{\n            font-size : 3rem;\n            margin : 3rem 0;\n        }\n    }\n"]))),G=function(){var n=Object(g.useState)({id:"",pw:""}),e=Object(B.a)(n,2),t=e[0],i=e[1],c=Object(g.useState)(!1),o=Object(B.a)(c,2),r=o[0],a=o[1];return Object(N.jsx)(q,{children:r?Object(N.jsx)(U,{closeJoinDialog:function(){a(!1)}}):Object(N.jsxs)("div",{className:"loginForm",children:[Object(N.jsx)("div",{className:"title",children:"WelCome!"}),Object(N.jsx)(H,{onSetId:function(n){i({id:n,pw:t.pw})},onSetPw:function(n){i({id:t.id,pw:n})}}),Object(N.jsx)(P,{id:t.id,pw:t.pw,onJoinDialog:function(){a(!0)}})]})})},K=t(19),Q=t(54),V=t.n(Q),X=t(55),Z=t.n(X),$=y.a.div(s||(s=Object(v.a)(["\n    width : 100%;\n    display : flex;\n    margin : 1rem 0 0 1rem;\n    font-size : 1.2rem;\n\n    .checkIcon{\n        font-size : 1.5rem;\n        color : ",";\n\n        &:hover{\n            cursor : pointer;\n        }\n    }\n\n    .content{\n        color : ",";\n        margin-left : 1rem;\n        width : 70%;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n    }\n    \n    .closeBtn{\n        font-size : 1.5rem;\n        color : gray;\n        &:hover{\n            cursor : pointer;\n            color : red;\n        }\n    }\n\n    @media only screen and (max-width: 1000px) {\n        width : 80%;\n    }\n"])),(function(n){return n.checkColor}),(function(n){return n.fontColor})),nn=function(n){var e=n.list,t=n.onItemRemove,i=Object(g.useState)({fontColor:"black",checkColor:"gray"}),c=Object(B.a)(i,2),o=c[0],r=c[1];return Object(N.jsxs)($,{fontColor:o.fontColor,checkColor:o.checkColor,children:[Object(N.jsx)(V.a,{className:"checkIcon",onClick:function(){"black"===o.fontColor?r({fontColor:"lightgray",checkColor:"green"}):r({fontColor:"black",checkColor:"gray"})}}),Object(N.jsx)("div",{className:"content",children:e.content}),Object(N.jsx)(Z.a,{className:"closeBtn",onClick:function(){return t(e.id)}})]})},en=t(56),tn=t.n(en),cn=t(57),on=(t(96),t(112)),rn=y.a.div(l||(l=Object(v.a)(["\n    z-index : 10;\n    display : flex;\n    flex-direction : column;\n\n    .addCalendar{\n        display : flex;\n        align-items: center;\n        justify-content: center;\n        width : 60px;\n        height : 60px;\n        border-radius : 4px;\n        background-color : white;\n        border : 2px solid #EDFF75;\n        outline : none;\n\n        .calendarIcon{\n            font-size: 3rem;\n        }\n\n        &:hover{\n            cursor : pointer;\n            background-color: whitesmoke;\n        }\n    }\n\n    .calendarWrapper{\n        position : relative;\n        display: flex;\n        justify-content: flex-start;\n        .calendar{\n            top: 0;\n            left: 0;\n            position : absolute;\n        }\n    }\n\n    .playBtn{\n        font-size : 3rem;\n\n        &:hover{\n            color : darkblue;\n            cursor : pointer;\n        }\n    }\n\n    @media only screen and (max-width: 480px) {\n        flex-direction: row;\n\n        .addCalendar{\n            width: 40px;\n            height: 40px;\n\n            .calendarIcon{\n                font-size: 1.5rem;\n            }\n        }\n\n        .calendarWrapper{\n            position: static;\n            .calendar{\n                position : absolute;\n                top: 0;\n                left: 0;\n                width: 100vw;\n                height: 50%;\n        \n                .react-calendar {\n                    width: 100%;\n                    height : 100%;\n                    border: 1px solid #a0a096;\n                    font-family: Arial, Helvetica, sans-serif;\n                    line-height: 1.125em;\n                }\n            }\n        }\n    }\n"]))),an=function(){var n=Object(g.useState)(!1),e=Object(B.a)(n,2),t=e[0],i=e[1],c=Object(S.d)(D),o=Object(S.e)(z);return Object(N.jsxs)(rn,{children:[Object(N.jsx)("button",{className:"addCalendar",onClick:function(){i(!t)},children:Object(N.jsx)(on.a,{className:"calendarIcon"})}),Object(N.jsx)("div",{className:"calendarWrapper",children:t&&Object(N.jsx)("div",{className:"calendar",children:Object(N.jsx)(cn.a,{onChange:function(n){var e="".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDate());o(e),i(!1)},calendarType:"Hebrew",value:c.date})})})]})},sn=t(113),ln=y.a.div(d||(d=Object(v.a)(["\n    .logOutBtn{\n        width : 60px;\n        height : 60px;\n        border-radius : 4px;\n        background-color : white;\n        border : 2px solid #EDFF75;\n        outline : none;\n        display : flex;\n        align-items: center;\n        justify-content: center;\n\n        .ExitIcon{\n            font-size: 3rem;\n        }\n\n        &:hover{\n            cursor : pointer;\n            background-color: whitesmoke;\n        }\n    }\n\n    @media only screen and (max-width: 480px) {\n        .logOutBtn{\n            width: 40px;\n            height: 40px;\n\n            .ExitIcon{\n                font-size: 1.5rem;\n            }\n        }\n    }\n"]))),dn=function(n){var e=n.onLogOut;return Object(N.jsx)(ln,{children:Object(N.jsx)("div",{className:"logOutBtn",onClick:e,children:Object(N.jsx)(sn.a,{className:"ExitIcon"})})})},un=y.a.div(u||(u=Object(v.a)(["\n    width : 200px;\n    margin-left : 1rem;\n    font-size : 2rem;\n\n    @media only screen and (max-width: 480px) {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100px;\n        height: 40px;\n        font-size: 1rem;\n    }\n"]))),jn=function(){var n=Object(g.useState)(new Date),e=Object(B.a)(n,2),t=e[0],i=e[1];return Object(g.useEffect)((function(){var n=setInterval((function(){i(new Date)}),1e3);return function(){return clearInterval(n)}}),[]),Object(N.jsxs)(un,{children:[t.getHours()<10?"0"+t.getHours():t.getHours(),":",t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),":",t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds()]})},bn=y.a.div(j||(j=Object(v.a)(["\n    display: flex;\n    flex-direction: column;\n\n    .btns{\n        display: flex;\n        flex-direction: column;\n    }\n\n    @media only screen and (max-width: 1000px) {\n        justify-content: space-around;\n        flex-direction: row;\n        align-items: center;\n\n        .btns{\n            flex-direction: row;\n        }\n    }\n"]))),hn=function(n){var e=n.onLogOut;return Object(N.jsxs)(bn,{children:[Object(N.jsx)(jn,{}),Object(N.jsxs)("div",{className:"btns",children:[Object(N.jsx)(dn,{onLogOut:e}),Object(N.jsx)(an,{})]})]})},pn=y.a.div(b||(b=Object(v.a)(["\n\n    margin-left : 10%;\n    display: flex;\n\n    .body{\n        background-color : white;\n        border : 2px solid #EDFF75;\n        width : 600px;\n        height : 600px;\n        border-radius : 20px;\n        z-index : 1;\n        display : flex;\n        flex-direction : column;\n\n        .line{\n            margin : 1rem 0 0 1rem;\n            width : 100%;\n            height : 3px;\n            background-color : lightgray;\n        }\n\n        .title{\n            width : 80%;\n            height : 10%;\n            margin : 1rem 0 0 1rem;\n            font-size : 1.2rem;\n            font-weight : bold;\n        }\n\n        .lists{\n            width : 100%;\n            height : 80%;\n        }\n\n        .addBtn{\n            width : 100%;\n            height : 10%;\n            display : flex;\n            align-items: center;\n            justify-content : center;\n\n            .addIcon{\n                font-size : 2rem;\n                color : green;\n\n                &:hover{\n                    color : darkgreen;\n                    cursor : pointer;\n                }\n            }\n        }\n    }\n    \n    @media only screen and (max-width: 1000px) {\n        width: 100%;\n        margin : 0;\n        flex-direction: column-reverse;\n\n        .body{\n            width: 100%;\n            height: 600px;\n        }\n    }\n"]))),xn=function(n){var e=n.onOpenDialog,t=Object(w.e)(),i=Object(S.c)(F),c=Object(B.a)(i,2),o=c[0],r=c[1],a=Object(S.d)(z),s=Object(S.c)(D),l=Object(B.a)(s,2),d=l[0],u=l[1];Object(g.useEffect)((function(){console.log(d.date.getFullYear())}),[d]),Object(g.useEffect)((function(){W.a.post("".concat(_,"/board/loadBoard"),{userId:o.id,date:a}).then((function(n){var e=[];n.data.result.map((function(n){e.push({id:n.id,userId:n.user_id,content:n.content})})),u({date:new Date(Date.parse(a)),item:[].concat(e)})})).catch((function(n){console.log(n)}))}),[a,u,o.id]);var j=function(n){W.a.post("".concat(_,"/board/deleteBoard"),{id:n}).then((function(e){if(e.data.result){var t=d.item.filter((function(e){return e.id!==n}));u({date:d.date,item:Object(K.a)(t)})}else alert("\uac8c\uc2dc\uae00 \uc0ad\uc81c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4")}))};return Object(N.jsxs)(pn,{children:[Object(N.jsxs)("div",{className:"body",children:[Object(N.jsxs)("div",{className:"title",children:[d.date.getFullYear()&&Object(N.jsxs)("div",{children:[d.date.getFullYear(),"\ub144 ",d.date.getMonth()+1,"\uc6d4 ",d.date.getDate(),"\uc77c"]}),Object(N.jsx)("div",{className:"line"})]}),Object(N.jsx)("div",{className:"lists",children:d.item.map((function(n){return Object(N.jsx)(nn,{list:n,onItemRemove:j},n.id)}))}),Object(N.jsx)("div",{className:"addBtn",onClick:e,children:Object(N.jsx)(tn.a,{className:"addIcon"})})]}),Object(N.jsx)(hn,{onLogOut:function(){r({id:"",nick:""}),sessionStorage.setItem("user_id",""),sessionStorage.setItem("user_nick",""),t.push("/Main")}})]})},gn=y.a.div(h||(h=Object(v.a)(["\n    position : absolute;\n    background-color : rgba(0,0,0,0.4);\n    width : 100%;\n    height : 100%;\n    top: 0;\n    left: 0;\n    z-index : 100;\n    display : flex;\n    align-items: center;\n    justify-content : center;\n\n    .body{\n        width: 300px;\n        height : 200px;\n        border-radius : 20px;\n        background-color : white;\n\n        .header{\n            border-radius : 20px 20px 0 0;\n            height: 50px;\n            background-color : #EDFF75;\n            display : flex;\n            align-items : center;\n            justify-content : center;\n        }\n\n        .main{\n            height : 150px;\n            display : flex;\n            flex-direction : column;\n            align-items: center;\n\n            .inputer { \n                width : 80%;\n                height : 30px;\n                border : 3px solid lightgray;\n                outline : none;\n            }\n\n            .btns{\n                margin-top : 2rem;\n\n                .successBtn,\n                .cancleBtn{\n                    border : none;\n                    border-radius : 8px;\n                    outline : none;\n                    width : 60px;\n                    height : 30px;\n                    font-family: 'HSYuji-Regular';\n\n                    &:hover{\n                        cursor : pointer;\n                    }\n                }\n\n                .successBtn{\n                    background-color : #EDFF75;\n                    margin-right : 1rem;\n\n                    &:hover{\n                        background-color : yellow;\n                    }\n                }\n\n                .cancleBtn{\n                    &:hover{\n                        background-color : gray;\n                    }\n                }\n            }\n        }\n    }\n"]))),mn=function(n){var e=n.onCloseDialog,t=Object(S.c)(D),i=Object(B.a)(t,2),c=i[0],o=i[1],r=Object(S.d)(F),a=Object(S.d)(z),s=Object(g.useRef)(null);return Object(N.jsx)(gn,{children:Object(N.jsxs)("div",{className:"body",children:[Object(N.jsx)("div",{className:"header",children:"\ucd94\uac00 \ud558\uc2e4 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!"}),Object(N.jsxs)("div",{className:"main",children:[Object(N.jsx)("input",{className:"inputer",type:"text",ref:s}),Object(N.jsxs)("div",{className:"btns",children:[Object(N.jsx)("button",{className:"successBtn",onClick:function(){var n=s.current.value,t={userId:r.id,date:a,content:n};W.a.post("".concat(_,"/board/addBoard"),Object(A.a)({},t)).then((function(e){e.data.result?o({date:new Date(Date.parse(a)),item:[].concat(Object(K.a)(c.item),[{id:e.data.id,userId:r.id,content:n}])}):alert("\uac8c\uc2dc\uae00 \ub4f1\ub85d\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4")})),e()},children:"\uc644\ub8cc"}),Object(N.jsx)("button",{className:"cancleBtn",onClick:e,children:"\ucde8\uc18c"})]})]})]})})},fn=y.a.div(p||(p=Object(v.a)(["\n    width : 100vw;\n    height : 100vh;\n    font-family: 'HSYuji-Regular';\n\n    .main{\n        width : 100%;\n        height : 100%;\n        display : flex;\n        flex-direction : column;\n        justify-content : center;\n    }\n"]))),On=function(){var n=Object(g.useState)(!1),e=Object(B.a)(n,2),t=e[0],i=e[1];return Object(N.jsxs)(fn,{children:[t&&Object(N.jsx)(mn,{onCloseDialog:function(){i(!1)}}),Object(N.jsx)("div",{className:"main",children:Object(N.jsx)(xn,{onOpenDialog:function(){i(!0)}})})]})},vn=function(){var n=Object(S.c)(F),e=Object(B.a)(n,2),t=e[0],i=e[1];return Object(g.useLayoutEffect)((function(){var n=sessionStorage.getItem("user_id")?sessionStorage.getItem("user_id"):"",e=sessionStorage.getItem("user_nick")?sessionStorage.getItem("user_nick"):"";i({id:n,nick:e})}),[i]),Object(N.jsx)("div",{children:""!==t.id&&""!==t.nick?Object(N.jsx)(On,{}):Object(N.jsx)(G,{})})},wn=t.p+"static/media/background.732080b0.jpg",yn=(t(97),y.a.div(x||(x=Object(v.a)(["\n    position : relative;\n\n    .background{\n        z-index : -1;\n        position: absolute;\n        top: 0;\n        left : 0;\n        width : 100%;\n        height : 100%;\n        opacity : 0.7;        \n\n        img{\n          width: 100%;\n          height : 100%;\n          object-fit : cover;\n        }\n    }\n"]))));var kn=function(){return Object(N.jsxs)(yn,{children:[Object(N.jsx)("div",{className:"background",children:Object(N.jsx)("img",{src:wn,alt:"\ubc30\uacbd"})}),Object(N.jsx)(w.a,{path:"/",exact:!0,component:I}),Object(N.jsx)(w.a,{path:"/Main",component:vn})]})};O.a.render(Object(N.jsx)(m.a.StrictMode,{children:Object(N.jsx)(k.a,{basename:"/todolistClient",children:Object(N.jsx)(S.a,{children:Object(N.jsx)(kn,{})})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.49b29d47.chunk.js.map
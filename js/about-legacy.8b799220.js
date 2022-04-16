"use strict";(self["webpackChunkbank"]=self["webpackChunkbank"]||[]).push([[443],{9713:function(t,n,e){e.r(n),e.d(n,{default:function(){return g}});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"calculator"},[e("router-link",{attrs:{to:"/"}},[t._v("Вернуться на главную страницу")]),e("TheForm"),e("h2",{staticClass:"calculator-heading"},[t._v("Банки, которые способны предоставить запрошенный кредит:")]),e("ul",{staticClass:"calculator-list"},t._l(t.calculatorArr,(function(t){return e("ResultForm",{key:t.id,attrs:{id:t.id,name:t.name,percentYear:t.percentYear,maxAmount:t.maxAmount,minPrepaidExpense:t.minPrepaidExpense,creditLines:t.creditLines}})})),1)],1)},r=[],o=e(3019),l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("form",{staticClass:"form"},[e("div",[e("label",{attrs:{for:"loan"}},[t._v("Введите сумму первоначального заёма:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.loanAmount,expression:"loanAmount"}],attrs:{type:"text",name:"loan"},domProps:{value:t.loanAmount},on:{input:function(n){n.target.composing||(t.loanAmount=n.target.value)}}})]),e("div",[e("label",{attrs:{for:"contribution"}},[t._v("Введите сумму первоначального взноса:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contributionAmount,expression:"contributionAmount"}],attrs:{type:"text",name:"contribution"},domProps:{value:t.contributionAmount},on:{input:function(n){n.target.composing||(t.contributionAmount=n.target.value)}}})]),e("div",[e("label",{attrs:{for:"nameBank"}},[t._v("Выберите название банка из раскрывающегося списка:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.bankName,expression:"bankName"}],attrs:{name:"nameBank",id:"nameBank"},on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){var n="_value"in t?t._value:t.value;return n}));t.bankName=n.target.multiple?e:e[0]}}},[e("option",{attrs:{disabled:"",selected:""}},[t._v("Выберите пункт")]),t._l(t.banksArr,(function(n){return e("option",{key:n.id,domProps:{value:n.name}},[t._v(" "+t._s(n.name)+" ")])}))],2)])])},s=[],u=e(629),i={name:"TheForm",data:function(){return{loanAmount:null,contributionAmount:null,bankName:null}},mounted:function(){this.parseBanksArr()},watch:{loanAmount:function(){this.calcMenu(["loanAmount",+this.loanAmount])},contributionAmount:function(){this.calcMenu(["contributionAmount",+this.contributionAmount])},bankName:function(){this.calcMenu(["bankName",this.bankName])}},computed:(0,o.Z)({},(0,u.Se)(["banksArr","calculatorArr"])),methods:(0,o.Z)({},(0,u.nv)(["calcMenu","parseBanksArr"]))},c=i,m=e(1001),p=(0,m.Z)(c,l,s,!1,null,null,null),v=p.exports,d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"result"},[e("p",{staticClass:"result-item"},[t._v("Название банка: "),e("span",{staticClass:"result-item__up"},[t._v(" "+t._s(t.name)+" ")])]),e("p",{staticClass:"result-item"},[t._v("Процентная ставка: "),e("span",[t._v(" "+t._s(t.percentYear+"%")+" ")])]),e("p",{staticClass:"result-item"},[t._v("Максимальный кредит: "),e("span",[t._v(" "+t._s(t.maxAmount+"грн")+" ")])]),e("p",{staticClass:"result-item"},[t._v("Минимальный авансовый платёж: "),e("span",[t._v(" "+t._s(t.minPrepaidExpense*t.maxAmount/100+"грн")+" ")])]),e("p",{staticClass:"result-item"},[t._v("Строк кредита: "),e("span",[t._v(" "+t._s(t.creditLines+"год(а)")+" ")])])])},_=[],f={name:"ResultForm",props:["id","name","percentYear","maxAmount","minPrepaidExpense","creditLines"]},A=f,b=(0,m.Z)(A,d,_,!1,null,null,null),h=b.exports,k={name:"TheCalculator",components:{TheForm:v,ResultForm:h},updated:function(){this.clearChackCalculator()},computed:(0,o.Z)({},(0,u.Se)(["calculatorArr"])),methods:(0,o.Z)({},(0,u.nv)(["clearChackCalculator"]))},C=k,x=(0,m.Z)(C,a,r,!1,null,null,null),g=x.exports}}]);
//# sourceMappingURL=about-legacy.8b799220.js.map
(this["webpackJsonpreact-food-delivery-app"]=this["webpackJsonpreact-food-delivery-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3TSRf",summary:"CartItem_summary__Fy4Lk",price:"CartItem_price__aBVZB",amount:"CartItem_amount__3Jugn",actions:"CartItem_actions__3_SEP"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__-lGuB",total:"Cart_total__2p3-6",actions:"Cart_actions__1R6s7","button--alt":"Cart_button--alt__1N2EV",button:"Cart_button__3VtJO"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__gwKDA",icon:"HeaderCartButton_icon__3-cLn",badge:"HeaderCartButton_badge__3LkkG",bump:"HeaderCartButton_bump__3c_Ke"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__2EkFV",description:"MealItem_description__3ip4W",price:"MealItem_price__3n81g"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__mCKXv",modal:"Modal_modal__3Lma9","slide-down":"Modal_slide-down__11IzU"}},function(e,t,n){e.exports={"main-image":"Header_main-image__1Xd42"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__2LtJL"}},function(e,t,n){e.exports={card:"Card_card__13ury"}},function(e,t,n){e.exports={input:"Input_input__14vwt"}},function(e,t,n){e.exports={form:"MealItemForm_form__Swi1V"}},function(e,t,n){},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(2)),r=n(1),o=n.n(r),s=n(13),l=n(3),d=o.a.createContext({items:[],totalAmount:0,additem:function(e){},removeItem:function(e){}}),u=n(0),m={items:[],totalAmount:0},j=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(l.a)(Object(l.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(s.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var o,d=e.items.findIndex((function(e){return e.id===t.id})),u=e.items[d],j=e.totalAmount-u.price;if(1===u.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var b=Object(l.a)(Object(l.a)({},u),{},{amount:u.amount-1});(o=Object(s.a)(e.items))[d]=b}return{items:o,totalAmount:j}}return m},b=function(e){var t=Object(r.useReducer)(j,m),n=Object(i.a)(t,2),a=n[0],c=n[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(u.jsx)(d.Provider,{value:o,children:e.children})},x=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},O=n(7),p=n.n(O),h=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useContext)(d).items,s=o.reduce((function(e,t){return e+t.amount}),0),l="".concat(p.a.button," ").concat(a?p.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(u.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(u.jsx)("span",{className:p.a.icon,children:Object(u.jsx)(x,{})}),Object(u.jsx)("span",{children:"Your Cart"}),Object(u.jsx)("span",{className:p.a.badge,children:s})]})},f=n.p+"static/media/meals.2971f633.jpg",_=n(12),v=n.n(_),C=function(e){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsxs)("header",{className:v.a.header,children:[Object(u.jsx)("h1",{children:"ReactMeals"}),Object(u.jsx)(h,{onClick:e.onShowCart})]}),Object(u.jsx)("div",{className:v.a["main-image"],children:Object(u.jsx)("img",{src:f,alt:"a table full of food"})})]})},g=n(16),y=n.n(g),N=function(){return Object(u.jsxs)("section",{className:y.a.summary,children:[Object(u.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(u.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(u.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},A=n(17),I=n.n(A),w=function(e){return Object(u.jsx)("div",{className:I.a.card,children:e.children})},k=n(18),M=n.n(k),B=o.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:M.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(l.a)({ref:t},e.input))]})})),F=n(19),S=n.n(F),H=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useRef)();return Object(u.jsxs)("form",{className:S.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(u.jsx)(B,{ref:o,input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"},label:"Amount"}),Object(u.jsx)("button",{type:"submit",id:"addToCart",children:"+ Add"}),!a&&Object(u.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},R=n(10),E=n.n(R),D=function(e){var t=Object(r.useContext)(d),n="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:E.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:E.a.description,children:e.description}),Object(u.jsx)("div",{className:E.a.price,children:n})]}),Object(u.jsx)("div",{children:Object(u.jsx)(H,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},T=n(20),V=n.n(T),L=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],z=function(){var e=L.map((function(e){return Object(u.jsx)(D,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(u.jsx)("section",{className:V.a.meals,children:Object(u.jsx)(w,{children:Object(u.jsx)("ul",{children:e})})})},J=function(){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(N,{}),Object(u.jsx)(z,{})]})},P=n(4),G=n.n(P),K=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:G.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:G.a.summary,children:[Object(u.jsx)("span",{className:G.a.price,children:t}),Object(u.jsxs)("span",{className:G.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:G.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},$=n(8),X=n.n($),Y=n(11),q=n.n(Y),U=function(e){return Object(u.jsx)("div",{className:q.a.backdrop,onClick:e.onClose})},W=function(e){return Object(u.jsx)("div",{className:q.a.modal,children:Object(u.jsx)("div",{className:q.a.content,children:e.children})})},Z=document.getElementById("overlays"),Q=function(e){return Object(u.jsxs)(r.Fragment,{children:[X.a.createPortal(Object(u.jsx)(U,{onClose:e.onClose}),Z),X.a.createPortal(Object(u.jsx)(W,{children:e.children}),Z)]})},ee=n(5),te=n.n(ee),ne=function(e){var t=Object(r.useContext)(d),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.additem(e)},o=[t.items.map((function(e){return Object(u.jsx)(K,{name:e.name,amount:e.amount,price:e.price,onAdd:i.bind(null,e.id),onRemove:c.bind(null,e.id)},e.id)}))];return Object(u.jsxs)(Q,{onClose:e.onCloseCart,children:[Object(u.jsx)("ul",{className:te.a["cart-items"],children:o}),Object(u.jsxs)("div",{className:te.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:te.a.actions,children:[Object(u.jsx)("button",{className:te.a["button--alt"],onClick:e.onCloseCart,children:"Close"}),a&&Object(u.jsx)("button",{className:te.a.button,children:"Order"})]})]})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(b,{children:[n&&Object(u.jsx)(ne,{onCloseCart:function(){a(!1)}}),Object(u.jsx)(C,{onShowCart:function(){a(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(J,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.f18a4e27.chunk.js.map
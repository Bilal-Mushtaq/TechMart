import{X as s,j as t,B as a}from"./index-68e82fe2.js";import{H as o}from"./heading-e9ca7981.js";import i from"./product-c3b8b04c.js";import{G as p}from"./chunk-JARCRF6W-9815d1a0.js";import"./cartWishlist-de9b32cc.js";import"./changeQuantity-d116cf44.js";const f=()=>{const e=s(r=>r.data.wishlist);return t.jsxs(a,{py:"30px",children:[t.jsx(o,{mainText:"MY WISHLIST",subText:"Your saved products are all here. You can add them to cart from here."}),t.jsx(p,{gap:4,templateColumns:["repeat(1, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)"],px:["20px","20px","10%"],children:e&&e.map(r=>t.jsx(i,{product:r},r.id))})]})};export{f as default};
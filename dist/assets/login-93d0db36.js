import{i as R,u as v,o as z,r as o,j as e,k as d,l as F,m as L,n as P,F as a,B as A,T as y,A as E,p as N,q as I,s as u,t as x,v as M,h as f,w as T,x as B,b as w,y as D,z as H}from"./index-68e82fe2.js";import{H as W}from"./chunk-7OLJDQMT-645858bb.js";import{F as j}from"./chunk-7COXQURZ-e3b4134a.js";import{u as q}from"./chunk-7D6N5TE5-c7ffb0c3.js";var S=R(function(t,h){const s=v("Switch",t),{spacing:n="0.5rem",children:i,...c}=z(t),{getIndicatorProps:l,getInputProps:m,getCheckboxProps:b,getRootProps:g,getLabelProps:r}=q(c),C=o.useMemo(()=>({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0,...s.container}),[s.container]),k=o.useMemo(()=>({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer",...s.track}),[s.track]),_=o.useMemo(()=>({userSelect:"none",marginStart:n,...s.label}),[n,s.label]);return e.jsxs(d.label,{...g(),className:F("chakra-switch",t.className),__css:C,children:[e.jsx("input",{className:"chakra-switch__input",...m({},h)}),e.jsx(d.span,{...b(),className:"chakra-switch__track",__css:k,children:e.jsx(d.span,{__css:s.thumb,className:"chakra-switch__thumb",...l()})}),i&&e.jsx(d.span,{className:"chakra-switch__label",...r(),__css:_,children:i})]})});S.displayName="Switch";const Q=()=>{const[p,t]=o.useState(!0),[h,s]=o.useState(""),[n,i]=o.useState(""),[c,l]=o.useState(""),m=L(),b=P(),g=async()=>{D(h,n).then(r=>{r.email?(b(H(r)),m("/")):l("Login error")}).catch(r=>l(r))};return e.jsx(a,{m:"20px",justify:"center",fontSize:"14px",children:e.jsx(a,{justify:"center",w:"100%",bgColor:"whiteAlpha.500",children:e.jsxs(A,{w:["100%","400px","500px"],p:"20px",m:"20px",bgColor:"white",children:[e.jsx(W,{textAlign:"center",children:"Welcome back!"}),e.jsx(y,{textAlign:"center",fontWeight:"600",py:"3",children:"Enter your email and password."}),c!==""?e.jsxs(E,{status:"error",children:[e.jsx(N,{}),e.jsx(I,{children:c})]}):"",e.jsxs(u,{mt:"4",children:[e.jsx(j,{fontSize:"14px",children:"Email address "}),e.jsxs(a,{align:"center",w:"100%",p:"2px",border:"1px",borderColor:"gray.100",borderRadius:"0",children:[e.jsx(x,{href:"/",bgColor:"gray.100",p:"3",border:"1px",borderRadius:"0",borderColor:"gray.100",children:e.jsx(M,{})}),e.jsx(f,{type:"email",fontSize:"14px",borderRadius:"0",border:"none",onChange:r=>s(r.target.value)})]})]}),e.jsxs(u,{mt:"4",children:[e.jsx(j,{fontSize:"14px",children:"Password "}),e.jsxs(a,{align:"center",w:"100%",p:"2px",border:"1px",borderColor:"gray.100",borderRadius:"0",children:[e.jsx(x,{href:"/",bgColor:"gray.100",p:"3",border:"1px",borderRadius:"0",borderColor:"gray.100",children:e.jsx(T,{})}),e.jsx(f,{type:p?"password":"text",fontSize:"14px",borderRadius:"0",border:"none",onChange:r=>i(r.target.value)}),e.jsx(x,{p:"3",border:"1px",borderRadius:"0",borderColor:"gray.100",bgColor:"white",onClick:()=>t(!p),children:e.jsx(B,{})})]})]}),e.jsxs(a,{justify:"space-between",my:"5",children:[e.jsxs(u,{display:"flex",align:"center",children:[e.jsx(S,{size:"sm",id:"remember",colorScheme:"orange"}),e.jsx(j,{htmlFor:"remember",ms:"2",fontSize:"12px",children:"Remember me"})]}),e.jsx(w,{w:"150px",fontSize:"12px",color:"red",children:"Forgot password?"})]}),e.jsx(x,{fontSize:"14px",borderRadius:"2px",border:"1px solid brand.900",bgColor:"brand.900",color:"white",w:"100%",mt:"6",_hover:{bgColor:"brand.800"},onClick:()=>g(),children:"Login"}),e.jsxs(y,{mt:"4",children:["Don't have an account yet? ",e.jsx(w,{href:"/Register",color:"brand.900",children:"Sign up"})]})]})})})};export{Q as default};

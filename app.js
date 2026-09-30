export function makeMatsNumber(){return String(Math.floor(1000+Math.random()*9000))}
export function money(n){return "₹"+Number(n||0).toFixed(2)}
export function setUser(u){localStorage.setItem("mbsUser",JSON.stringify(u))}
export function getUser(){try{return JSON.parse(localStorage.getItem("mbsUser"))}catch{return null}}
export function logout(){localStorage.removeItem("mbsUser");location.href="login.html"}
export function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}

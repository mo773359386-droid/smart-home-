function toggleMenu(){document.querySelector('.nav').classList.toggle('show')}
function filterProducts(){
 const q=(document.getElementById('search')?.value||'').toLowerCase();
 const cat=document.getElementById('category')?.value||'all';
 document.querySelectorAll('.searchable').forEach(card=>{
  const okName=card.dataset.name.includes(q), okCat=cat==='all'||card.dataset.cat===cat;
  card.style.display=okName&&okCat?'block':'none';
 });
}
function sendMessage(e){
 e.preventDefault();
 const n=document.getElementById('name').value, p=document.getElementById('phoneInput').value;
 const s=document.getElementById('service').value, m=document.getElementById('message').value;
 const text=`مرحباً البيت الذكي،%0Aالاسم: ${encodeURIComponent(n)}%0Aالهاتف: ${encodeURIComponent(p)}%0Aالخدمة: ${encodeURIComponent(s)}%0Aالرسالة: ${encodeURIComponent(m)}`;
 window.open(`https://wa.me/967778899513?text=${text}`,'_blank');
}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav')?.classList.remove('show')));

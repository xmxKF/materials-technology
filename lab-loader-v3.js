const host=document.getElementById('viewer');
const messages={
 'zh-Hant':'模型暫時無法載入。您仍可觀看下方概念影片。',
 'zh-Hans':'模型暂时无法载入。您仍可观看下方概念影片。',
 ja:'モデルを読み込めません。下のコンセプト映像をご覧ください。',
 en:'The model is unavailable. You can still view the concept film below.'
};
if(host){
 let started=false;
 const start=()=>{if(started)return;started=true;performance.mark('lab-load-start');
  requestAnimationFrame(()=>requestAnimationFrame(()=>import('./lab-core-v3.js').catch(()=>{
   host.classList.add('error');document.getElementById('viewer-status').textContent=messages[document.documentElement.lang]||messages.en;
   document.querySelectorAll('.viewer-toolbar input,.viewer-toolbar button,.part-buttons button,.view-buttons button').forEach(control=>control.disabled=true);
  })));
 };
 const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){observer.disconnect();start()}},{rootMargin:'500px'});observer.observe(host);
}

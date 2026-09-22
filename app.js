const config = window.SITE_CONTENT;
document.querySelectorAll('[data-company-name]').forEach(el => el.textContent = config.brand.name);
document.querySelectorAll('[data-company-english]').forEach(el => el.textContent = config.brand.english);
document.querySelector('#year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
function closeMenu(){toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('is-open',!open);});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape' && toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
const media=config.media.hero;
const hero=document.querySelector('[data-media-slot="hero"]');
if(media.src && media.type==='image') hero.style.backgroundImage=`url("${media.src}")`;
// Video slots retain a poster and honor motion preferences. Only approved local media is configured.
if(media.src && media.type==='video'){
  const video=document.createElement('video');video.src=media.src;video.muted=true;video.loop=true;video.playsInline=true;video.preload='metadata';
  if(media.poster) video.poster=media.poster;
  hero.append(video);
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const control=document.createElement('button');control.className='media-toggle';control.type='button';control.textContent='播放背景影片';
  document.querySelector('.hero').append(control);
  video.addEventListener('play',()=>control.textContent='暫停背景影片');
  video.addEventListener('pause',()=>control.textContent='播放背景影片');
  control.addEventListener('click',()=>video.paused?video.play().catch(()=>{}):video.pause());
  motion.addEventListener('change',event=>{if(event.matches) video.pause();});
  if(!motion.matches) video.play().catch(()=>{});
}
const contact=document.querySelector('#contact-details');
for(const [kind,value] of Object.entries(config.contact)){
  if(!value) continue;
  const item=document.createElement(kind==='address'?'p':'a');item.textContent=value;
  if(kind==='email') item.href=`mailto:${value}`;
  if(kind==='phone') item.href=`tel:${value.replace(/[\s()-]/g,'')}`;
  contact.append(item);
}
if(contact.children.length){
  document.querySelector('#contact').hidden=false;
  const link=document.createElement('a');link.href='#contact';link.textContent='聯絡我們';link.addEventListener('click',closeMenu);nav.append(link);
}

// All language variants occupy the same CSS grid cell. Changing visibility preserves geometry.
const languageSelect=document.querySelector('#language-select');
const status=document.querySelector('#language-status');
function applyLanguage(lang,manual=false){
  if(!Object.hasOwn(window.SITE_UI,lang))return;
  const text=window.SITE_UI[lang];
  document.documentElement.lang=lang;
  languageSelect.value=lang;
  document.querySelectorAll('.locale').forEach(el=>el.setAttribute('aria-hidden',String(el.lang!==lang)));
  document.title=`${config.brand.name}｜${text.title}`;
  document.querySelector('meta[name="description"]').content=text.description;
  document.querySelector('.brand').setAttribute('aria-label',`${config.brand.name} ${text.home}`);
  nav.setAttribute('aria-label',text.nav);
  toggle.setAttribute('aria-label',text.menu);
  const contactLink=nav.querySelector('[href="#contact"]');if(contactLink)contactLink.textContent=text.contact;
  const video=hero.querySelector('video'),control=document.querySelector('.media-toggle');
  if(control)control.textContent=video.paused?text.play:text.pause;
  if(manual){try{localStorage.setItem('site-language',lang)}catch{}status.lang=lang;status.textContent=text.changed;}
}
languageSelect.addEventListener('change',()=>applyLanguage(languageSelect.value,true));
applyLanguage(document.documentElement.lang);
const backgroundVideo=hero.querySelector('video');
if(backgroundVideo){for(const event of ['play','pause'])backgroundVideo.addEventListener(event,()=>{
  const text=window.SITE_UI[document.documentElement.lang];document.querySelector('.media-toggle').textContent=backgroundVideo.paused?text.play:text.pause;
});}
// Cache layout coordinates, independent of animation transforms. A passive scroll listener
// schedules at most one frame; targets reset only after leaving the viewport completely.
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
const revealItems=[...document.querySelectorAll('.hero-content, .intro-grid > *, .section-heading, .business-card, .application-intro, .material-list details, .equipment-grid article, .service-intro, .service-steps li, .solar-grid > *, .editorial-image, .object-study')].map(element=>({element,top:0,height:0,visible:false,animation:null}));
let lastScroll=Math.max(0,scrollY),scrollDirection=1,framePending=false,layoutDirty=true,firstFrame=true,headerHeight=94;
function documentTop(element){let top=0;for(let node=element;node;node=node.offsetParent)top+=node.offsetTop;return top;}
function measureReveals(){
 headerHeight=document.querySelector('.site-header').offsetHeight;
 revealItems.forEach(item=>{item.top=documentTop(item.element);item.height=item.element.offsetHeight;});
 layoutDirty=false;
}
function reveal(item,animate=false){
 item.animation?.cancel();item.animation=null;item.visible=true;item.element.classList.add('is-visible');
 if(!animate||motionPreference.matches||!item.element.animate)return;
 const direction=scrollDirection>0?'down':'up';
 item.element.dataset.revealDirection=direction;
 const animation=item.element.animate([
  {opacity:0,transform:`translate3d(0,${direction==='down'?28:-28}px,0)`},
  {opacity:1,transform:'translate3d(0,0,0)'}
 ],{duration:740,easing:'cubic-bezier(.18,.65,.3,1)',fill:'both'});
 item.animation=animation;
 animation.finished.then(()=>{if(item.animation===animation){animation.cancel();item.animation=null;}}).catch(()=>{});
}
function updateReveals(){
 framePending=false;
 const current=Math.max(0,scrollY),delta=current-lastScroll;
 if(Math.abs(delta)>1)scrollDirection=delta>0?1:-1;
 lastScroll=current;
 if(layoutDirty)measureReveals();
 const viewTop=current+headerHeight,viewBottom=current+innerHeight;
 revealItems.forEach(item=>{
  const bottom=item.top+item.height;
  const focused=item.element.contains(document.activeElement);
  if(motionPreference.matches||focused){if(!item.visible||item.animation)reveal(item);return;}
  const outside=bottom<viewTop-32||item.top>viewBottom+32;
  if(outside){
   if(item.visible){item.animation?.cancel();item.animation=null;item.visible=false;item.element.classList.remove('is-visible');}
  }else if(!item.visible&&bottom>viewTop+18&&item.top<viewBottom-18){reveal(item,!firstFrame);}
 });
 firstFrame=false;
}
function scheduleReveals(){if(!framePending){framePending=true;requestAnimationFrame(updateReveals);}}
revealItems.forEach(item=>item.element.classList.add('reveal'));
updateReveals();
window.addEventListener('scroll',scheduleReveals,{passive:true});
window.addEventListener('resize',()=>{layoutDirty=true;scheduleReveals();},{passive:true});
if('ResizeObserver' in window){
 const layoutObserver=new ResizeObserver(()=>{layoutDirty=true;scheduleReveals();});
 layoutObserver.observe(document.querySelector('main'));revealItems.forEach(item=>layoutObserver.observe(item.element));
}
document.querySelectorAll('details').forEach(element=>element.addEventListener('toggle',()=>{layoutDirty=true;scheduleReveals();}));
motionPreference.addEventListener('change',()=>{layoutDirty=true;scheduleReveals();});
document.addEventListener('focusin',event=>{const item=revealItems.find(item=>item.element.contains(event.target));if(item)reveal(item);});

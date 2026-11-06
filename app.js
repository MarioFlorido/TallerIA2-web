const STORAGE_KEY="progress";
const IMG_RE=/^img\/[\w.\-]+$/;

/* --- Utilidades --- */

function esc(s){
  return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// Markdown -> HTML saneado
function md(text){
  const html=marked.parse(text);
  return window.DOMPurify ? DOMPurify.sanitize(html) : esc(text);
}

function getSectionOrder(title){
  title=title.trim();
  if(title==='Objetivo Educacional') return 1;
  if(title.startsWith('Info')) return 2;
  if(title==='Prompt Principal') return 3;
  if(title==='Para profundizar') return 4;
  return 99;
}

/* --- Progreso (localStorage con respaldo en memoria) --- */

let memoryProgress={};

function getProgress(){
  try{
    return JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}")||{};
  }catch(e){
    return memoryProgress;
  }
}

function setProgress(data){
  memoryProgress=data;
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify(data))}catch(e){}
}

function saveProgress(id){
  const data=getProgress();
  data[id]=true;
  setProgress(data);
}

function removeProgress(id){
  const data=getProgress();
  delete data[id];
  setProgress(data);
}

function isDone(id){
  return !!getProgress()[id];
}

/* --- Carga y parseo --- */

let ACTS={};
let lastScroll=0;
let lastFocus=null;

async function load(){
  const content=document.getElementById('content');
  try{
    const res=await fetch('contenido.md');
    if(!res.ok) throw new Error('HTTP '+res.status);
    parse(await res.text());
  }catch(e){
    console.error(e);
    content.innerHTML=`<section class="phase-block visible"><div class="phase-inner">
      <p class="load-error" role="alert">No se ha podido cargar el contenido del taller.
      Si abriste el archivo directamente (file://), sírvelo con un servidor local,
      por ejemplo: <code>python3 -m http.server</code></p></div></section>`;
  }
}

function parse(text){
  const lines=text.split('\n');
  let phases=[],phase=null,act=null,sec=null,buf=[];
  let specialSections=[],currentSpecial=null;
  let inFence=false;

  function flush(){
    const t=buf.join('\n').trim();
    buf=[];
    if(!sec||!act||!t) return;
    act.sections.push({title:sec.title.trim(),content:t});
  }

  function flushSpecialContent(){
    const t=buf.join('\n').trim();
    buf=[];
    if(!currentSpecial||!t) return;
    currentSpecial.content+='\n'+t;
  }

  for(const line of lines){
    // Dentro de un bloque de código nada se interpreta como estructura
    if(/^\s*```/.test(line)) inFence=!inFence;
    if(inFence || /^\s*```/.test(line)){
      if((sec&&act)||currentSpecial) buf.push(line);
      continue;
    }

    let m=line.match(/^# FASE (\d+): (.+)/);
    if(m){flush();phase={num:m[1],title:m[2],subtitle:'',acts:[]};phases.push(phase);continue}

    if(phase && !phase.acts.length && line.match(/^## /)){
      m=line.match(/^## (.+)/);
      phase.subtitle=m[1];continue}

    m=line.match(/^# (.+)$/);
    if(m && !m[1].includes('FASE')){
      if(currentSpecial)flushSpecialContent();else flush();
      sec=null;act=null;
      currentSpecial={title:m[1],content:''};
      specialSections.push(currentSpecial);
      phase=null;continue}

    m=line.match(/^### (\d+)\. (.+)/);
    if(m){flush();act={id:m[1],title:m[2],tag:'',img:'',sections:[]};if(phase)phase.acts.push(act);continue}

    m=line.match(/^>\s*\*\*Tag:\*\*\s*(.+)/);
    if(m && act){act.tag=m[1];continue}

    m=line.match(/^>\s*\*\*Imagen:\*\*\s*(.+)/);
    if(m && act){act.img=m[1].trim();continue}

    m=line.match(/^#### (.+)/);
    if(m){if(act){flush();sec={title:m[1]}}else if(currentSpecial){flushSpecialContent();currentSpecial.content+='\n### '+m[1]+'\n'}continue}

    if(line.trim()===''){
      if((sec&&act)||currentSpecial)buf.push('');
      continue;
    }

    if(sec&&act)buf.push(line);
    else if(currentSpecial)buf.push(line);
  }

  if(currentSpecial)flushSpecialContent();else flush();

  phases.forEach(p=>p.acts.forEach(a=>{
    a.sections.sort((x,y)=>getSectionOrder(x.title)-getSectionOrder(y.title));
    ACTS[a.id]=a;
  }));

  render(phases,specialSections);
}

/* --- Panel lateral --- */

function togglePrompt(btn){
  const open=btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('open',open);
  btn.setAttribute('aria-expanded',open);
  btn.querySelector('.prompt-text').textContent=open?'Ocultar Prompt':'Ver Prompt';
}

function openPanel(a,trigger){
  lastScroll=window.scrollY;
  lastFocus=trigger||document.activeElement;
  document.body.style.overflow='hidden';

  document.getElementById("overlay").classList.add("open");

  let sectionsHtml='';
  a.sections
    .filter(s=>!s.title.includes('Descripción'))
    .forEach(s=>{
      if(s.title.includes('Prompt')){
        const promptContent=s.content.replace(/```/g,'');
        sectionsHtml+=`
        <div class="panel-section">
          <h4>${esc(s.title)}</h4>
          <button type="button" class="prompt-toggle-btn" data-action="toggle-prompt" aria-expanded="false">
            <span class="arrow" aria-hidden="true">▸</span>
            <span class="prompt-text">Ver Prompt</span>
          </button>
          <div class="prompt-code">
            <pre>${esc(promptContent)}</pre>
          </div>
        </div>`;
      }else{
        sectionsHtml+=`
        <div class="panel-section">
          <h4>${esc(s.title)}</h4>
          ${md(s.content)}
        </div>`;
      }
    });

  const panel=document.getElementById("panel");
  panel.innerHTML=`
    <button type="button" class="close" data-action="close-panel" aria-label="Cerrar">✕</button>
    <h2 id="panel-title">${esc(a.title)}</h2>
    ${sectionsHtml}
  `;
  panel.classList.add("open");
  panel.scrollTop=0;
  panel.querySelector('.close').focus();
}

function closePanel(){
  const panel=document.getElementById("panel");
  if(!panel.classList.contains('open')) return;
  document.body.style.overflow='auto';
  panel.classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
  window.scrollTo({top:lastScroll});
  if(lastFocus && lastFocus.focus) lastFocus.focus({preventScroll:true});
}

function toggleDone(id){
  const card=document.querySelector(`.card[data-id="${id}"]`);
  let done;
  if(isDone(id)){
    removeProgress(id);
    done=false;
  }else{
    saveProgress(id);
    done=true;
  }
  if(card){
    card.classList.toggle('done',done);
    const btn=card.querySelector('.complete-btn');
    if(btn) btn.setAttribute('aria-pressed',done);
  }
}

function toggleSpecial(i){
  const sec=document.getElementById('special-'+i);
  const open=sec.classList.toggle('open');
  sec.querySelector('.special-toggle').setAttribute('aria-expanded',open);
}

/* --- Render --- */

function render(phases,specialSections){
  let html='';

  phases.forEach(p=>{
    const bgClass =
      p.num == 2 ? ' phase-bg-grey'  :
      p.num == 3 ? ' phase-bg-nodes' :
      p.num == 4 ? ' phase-bg-lilac' :
      '';

    html+=`<section class="phase-block${bgClass}">`;
    html+=`<div class="phase-inner">`;

    html+=`<h2 class="phase-title">
      <span>FASE ${esc(p.num)}:</span> ${esc(p.title)}
    </h2>`;

    html+=p.subtitle
      ? `<p class="phase-subtitle">${esc(p.subtitle)}</p>`
      : '';

    html+=`<div class="${p.num == 3 ? 'phase-3-grid' : 'grid'}">`;

    p.acts.forEach(a=>{
      const desc=a.sections.find(s=>s.title.includes('Descripción'));
      const done=isDone(a.id);
      const img=IMG_RE.test(a.img)?`<img src="${esc(a.img)}" alt="" loading="lazy" width="1904" height="522">`:'';

      html+=`<div class="card${done?' done':''}" data-id="${esc(a.id)}">
        ${img}
        <div class="tag">${esc(a.tag)}</div>
        <h3>${esc(a.title)}</h3>
        ${desc?md(desc.content):''}
        <div class="card-footer">
          <button type="button" class="activity-cta" data-action="open-panel">
            <span>Explorar</span>
            <span class="arrow" aria-hidden="true">→</span>
          </button>
          <button type="button" class="complete-btn" data-action="toggle-done" aria-pressed="${done}" aria-label="Marcar o desmarcar como completada">
            <span class="state-default">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/></svg>
              <span>Marcar completada</span>
            </span>
            <span class="state-done">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
              <span>Actividad completada</span>
            </span>
          </button>
        </div>
      </div>`;
    });

    html+='</div>';
    html+='</div>';
    html+='</section>';
  });

  let specialHtml='';
  specialSections.forEach((spec,i)=>{
    specialHtml+=`<div class="special-section" id="special-${i}">
      <button type="button" class="special-toggle" data-action="toggle-special" data-index="${i}" aria-expanded="false">
        ${esc(spec.title)}
        <span class="chevron" aria-hidden="true">▼</span>
      </button>
      <div class="special-body">${md(spec.content)}</div>
    </div>`;
  });

  document.getElementById("content").innerHTML=html;
  document.getElementById("bottom-content").innerHTML=specialHtml;
  initPhaseReveal();
}

function initPhaseReveal(){
  const phases=document.querySelectorAll('.phase-block');

  if(!('IntersectionObserver' in window)){
    phases.forEach(p=>p.classList.add('visible'));
    return;
  }

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.15});

  phases.forEach(p=>observer.observe(p));
}

/* --- Eventos (sin handlers inline, compatible con CSP) --- */

document.addEventListener('click',e=>{
  if(e.target.id==='overlay'){closePanel();return}
  const el=e.target.closest('[data-action]');
  if(!el) return;
  const card=el.closest('.card');
  switch(el.dataset.action){
    case 'open-panel':
      if(card && ACTS[card.dataset.id]) openPanel(ACTS[card.dataset.id],el);
      break;
    case 'toggle-done':
      if(card) toggleDone(card.dataset.id);
      break;
    case 'close-panel':
      closePanel();
      break;
    case 'toggle-prompt':
      togglePrompt(el);
      break;
    case 'toggle-special':
      toggleSpecial(Number(el.dataset.index));
      break;
  }
});

document.addEventListener('keydown',e=>{
  const panel=document.getElementById('panel');
  if(!panel.classList.contains('open')) return;
  if(e.key==='Escape'){closePanel();return}
  if(e.key==='Tab'){
    // Mantener el foco dentro del panel
    const f=[...panel.querySelectorAll('button,a[href],[tabindex]:not([tabindex="-1"])')];
    if(!f.length) return;
    const first=f[0],last=f[f.length-1];
    if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus()}
    else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus()}
  }
});

load();

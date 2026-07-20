/* ── UX Framework Data ── */
const fwData = [
  {
    num:'01', icon:'🔍', name:'Research', color:'#B4EFFF',
    desc:'Gathering qualitative and quantitative data to deeply understand user needs, behaviors, motivations, and the environment they work in — before any design.',
    activities:['User and Stakeholder Interviews','Heuristics Evaluation','Competitor & Benchmarking Analysis','Surveys'],
    deliverables:'Case Study · Research Report · Interview Transcripts and Videos'
  },
  {
    num:'02', icon:'🗺️', name:'Synthesize', color:'#BEFF8C',
    desc:'Raw data becomes actionable insight. We cluster findings, identify themes, and create artifacts that communicate user needs in a way the whole team can understand and act on.',
    activities:['Affinity mapping & clustering','Persona creation','User journey mapping','Experience mapping & service blueprints'],
    deliverables:'User personas · Journey maps · Affinity diagrams · Research synthesis deck'
  },
  {
    num:'03', icon:'🎯', name:'Define', color:'#EB0A1E',
    desc:'We translate insights into clear, actionable problem statements. This step ensures the team is solving the right problem before investing in solutions — saving time, budget, and engineering cycles.',
    activities:['Problem statement framing','Customer journey map','Success metrics & KPI definition'],
    deliverables:'Problem statements · Success criteria · Project brief'
  },
  {
    num:'04', icon:'💡', name:'Ideate', color:'#FFFFFF',
    desc:'We generate a wide range of ideas before committing to a direction. Divergent thinking opens the space for innovative, unexpected solutions that purely analytical processes miss.',
    activities:['Storyboarding & scenario exploration','Information architecture mapping','User flows & task analysis'],
    deliverables:'Low-fidelity Concepts · User flows · Site maps · Information Architecture diagrams'
  },
  {
    num:'05', icon:'✏️', name:'Design', color:'#B4EFFF',
    desc:'Ideas become concrete, testable designs. We move from low-fidelity wireframes to high-fidelity, pixel-perfect interfaces — building components that scale into design systems and are built for accessibility.',
    activities:['Wireframing & layout exploration','High-fidelity UI design','Interactive prototyping in Figma','Design system & component library','WCAG accessibility compliance'],
    deliverables:'Wireframes · Figma prototype · Design system · Accessibility annotations'
  },
  {
    num:'06', icon:'🧪', name:'Test', color:'#BEFF8C',
    desc:'We put designs in front of real users before development starts. Testing early and often catches usability issues when they\'re cheapest to fix — saving significant engineering time downstream.',
    activities:['Moderated usability testing','A/B & preference testing','Accessibility audit'],
    deliverables:'Usability test report · Issue prioritization matrix · Iteration notes · Accessibility report'
  },
  {
    num:'07', icon:'🚀', name:'Implement', color:'#EB0A1E',
    desc:'Design doesn\'t stop at handoff. We partner closely with engineering to ensure the built experience matches the intended design — reviewing builds, answering edge-case questions, and iterating in real time.',
    activities:['Developer handoff & documentation','Edge-case scenarios','Design QA','Post-launch review & measurement'],
    deliverables:'Handoff specs · Annotated screens · QA checklist · Post-launch report · Lessons learned'
  }
];

/* ── Framework panel renderer ── */
let fwActive = -1;

function fwShow(i) {
  if (fwActive === i) return;
  fwActive = i;
  const d = fwData[i];

  document.querySelectorAll('.fw-step').forEach((s, idx) => {
    s.classList.toggle('fw-active', idx === i);
    s.style.setProperty('--fw-color', fwData[idx].color);
  });

  document.getElementById('fw-panel-inner').innerHTML = `
    <div class="fw-panel-header">
      <div>
        <div class="fw-panel-num" style="color:${d.color}">${d.num}</div>
        <div class="fw-panel-title">${d.name}</div>
      </div>
    </div>
    <p class="fw-panel-desc">${d.desc}</p>
    <div class="fw-cols">
      <div class="fw-col">
        <div class="fw-col-label" style="color:${d.color}">Research Activities &amp; Methods</div>
        <ul>${d.activities.map(a => `<li>${a}</li>`).join('')}</ul>
      </div>
      <div class="fw-col">
        <div class="fw-col-label" style="color:${d.color}">Why It Matters</div>
        <ul>${whyItMatters(i).map(w => `<li>${w}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="fw-deliverables">${d.toolsNote ? `<strong>Tools</strong>${d.toolsNote}<br>` : ''}<strong>Deliverables</strong>${d.deliverables}</div>
  `;
}

function whyItMatters(i) {
  return [
    ['Understand user behavior, pain points, and overall perspectives','Identify usability and accessibility issues','Evaluate design, features, and functionality','Recommend areas of improvement'],
    ['Turns data into shared understanding','Reveals systemic patterns','Aligns team around user reality'],
    ['Prevents solving the wrong problem','Establishes measurable goals'],
    ['Sparks breakthrough solutions','Prevents premature attachment to one idea','Cheap to explore, costly to skip'],
    ['Makes abstract ideas tangible','Enables early feedback before code','Scales into reusable systems'],
    ['Builds confidence in design decisions','Validates assumptions with evidence'],
    ['Ensures design intent survives handoff','Maintains quality through delivery','Closes the loop with measurement']
  ][i];
}

/* ── Project filter ── */
function fp(tag, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const isList = document.getElementById('projects-grid').classList.contains('list-view');
  document.querySelectorAll('.project-card').forEach(card => {
    const show = tag === 'all' || card.dataset.tag === tag;
    card.style.display = show ? (isList ? 'flex' : 'flex') : 'none';
  });
}

/* ── View toggle (grid / list) ── */
function setView(mode) {
  const grid = document.getElementById('projects-grid');
  const btnGrid = document.getElementById('btn-grid');
  const btnList = document.getElementById('btn-list');
  if (mode === 'list') {
    grid.classList.add('list-view');
    btnList.classList.add('active');
    btnGrid.classList.remove('active');
  } else {
    grid.classList.remove('list-view');
    btnGrid.classList.add('active');
    btnList.classList.remove('active');
  }
  localStorage.setItem('portfolio-view', mode);
}

/* ── Back to top ── */
document.addEventListener('DOMContentLoaded', () => {
  const btt = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    btt.classList.toggle('visible', window.scrollY > 400);
  });

  // Restore saved view preference
  const savedView = localStorage.getItem('portfolio-view');
  if (savedView) setView(savedView);

  // Auto-show first framework step
  setTimeout(() => fwShow(0), 300);
});

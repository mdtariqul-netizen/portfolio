// Mobile nav toggle — shared across all pages
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  }));
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/**
 * Personal Strengths page: animate each bar filling to its target
 * percentage the first time it scrolls into view. Falls back to an
 * instant, unanimated fill if the user prefers reduced motion.
 */
const strengthItems = document.querySelectorAll('.strength-item');
if (strengthItems.length) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  strengthItems.forEach(item => {
    const value = item.getAttribute('data-value') || '0';
    item.style.setProperty('--target-width', `${value}%`);
  });

  if (prefersReducedMotion) {
    strengthItems.forEach(item => item.classList.add('in-view'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    strengthItems.forEach(item => observer.observe(item));
  }
}

/**
 * Hero network-topology animation (home page only).
 * Renders a drifting node-link graph in the hero background,
 * styled as a light "ops console" map: blue links, orange nodes
 * standing in for live data points on the network.
 * Respects prefers-reduced-motion by not rendering at all.
 */
const canvas = document.getElementById('netcanvas');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canvas && !reduceMotion) {
  const ctx = canvas.getContext('2d');
  let w, h, nodes;
  const AREA_PER_NODE = 6200;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    w = canvas.width = rect.width * devicePixelRatio;
    h = canvas.height = rect.height * devicePixelRatio;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    const count = Math.max(12, Math.min(38, Math.floor((rect.width * rect.height) / AREA_PER_NODE)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.14 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.14 * devicePixelRatio,
      r: (Math.random() * 1.6 + 1.4) * devicePixelRatio,
      accent: Math.random() < 0.22 // ~1 in 5 nodes rendered as an orange "active" node
    }));
  }

  function step() {
    ctx.clearRect(0, 0, w, h);
    const linkDist = 165 * devicePixelRatio;

    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < linkDist) {
          const alpha = (1 - dist / linkDist) * 0.30;
          ctx.strokeStyle = `rgba(63,127,176,${alpha})`;
          ctx.lineWidth = 1 * devicePixelRatio;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    for (const n of nodes) {
      ctx.fillStyle = n.accent ? 'rgba(233,138,78,0.85)' : 'rgba(63,127,176,0.55)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(step);
  }

  resize();
  step();
  window.addEventListener('resize', resize);
}

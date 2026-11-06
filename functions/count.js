const KEY = 'engagement-visitors';

export async function onRequestGet({ env }) {
  let value = 0;
  if (env.VISITS) {
    try {
      const n = parseInt(await env.VISITS.get(KEY), 10);
      if (Number.isFinite(n) && n >= 0) value = n;
    } catch (e) {}
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow, noarchive">
<meta name="referrer" content="no-referrer">
<meta name="theme-color" content="#5c0a00">
<title>Visitor Count | Shubham &amp; Rashmi</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Great+Vibes&family=Jost:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{--red:#AB1800;--cream:#FFFAD9;--serif:"Cormorant Garamond",Georgia,"Times New Roman",serif;--sans:"Jost","Helvetica Neue",Arial,sans-serif;--names:"Great Vibes","Brush Script MT",cursive}
*{box-sizing:border-box;margin:0;padding:0}
html,body{min-height:100%}
body{background:radial-gradient(120% 80% at 50% 15%,#c9341b 0%,#7a0f00 46%,#2a0400 100%);color:var(--red);font-family:var(--serif);display:grid;place-items:center;padding:24px;-webkit-font-smoothing:antialiased}
.wrap{width:100%;max-width:420px}
.card{position:relative;background:linear-gradient(155deg,#ffffff 0%,#FFFDF8 60%,#FFF7EE 100%);border:1px solid rgba(212,168,56,.6);border-radius:26px;padding:clamp(30px,6vh,44px) clamp(22px,5vw,32px);text-align:center;box-shadow:0 30px 70px rgba(0,0,0,.45),inset 0 1px 0 #fff,inset 0 -1px 0 rgba(212,168,56,.2);overflow:hidden}
.card::before{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(240px circle at 30% 0%,rgba(255,215,160,.35),transparent 62%)}
.card>*{position:relative;z-index:1}
.eye{width:54px;height:54px;margin:0 auto 14px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(160deg,#fff6cf,#FFFAD9 45%,#f0d59a);border:1px solid rgba(212,168,56,.7);box-shadow:0 8px 20px rgba(171,24,0,.16),inset 0 1px 0 #fff}
.eye svg{width:24px;height:24px;fill:none;stroke:var(--red);stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
.eyebrow{font:500 10.5px/1.5 var(--sans);letter-spacing:.32em;text-transform:uppercase;color:#b07a00}
.names{font-family:var(--names);font-size:clamp(28px,7vw,36px);line-height:1.1;background:linear-gradient(180deg,#FFB300 0%,#FF8F00 45%,#E65100 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:#FF8F00;filter:drop-shadow(0 2px 4px rgba(171,24,0,.3));padding:2px 4px}
h1{font-family:var(--serif);font-weight:600;font-size:clamp(25px,4.4vh,31px);line-height:1.15;margin-top:10px}
.divider{width:120px;height:auto;margin:14px auto 18px;color:#d4a017;opacity:.85;display:block}
.num{font-family:var(--serif);font-weight:600;font-size:clamp(64px,15vh,92px);line-height:1;font-variant-numeric:tabular-nums;color:var(--red);text-shadow:0 2px 10px rgba(171,24,0,.14)}
.lbl{font:500 11px/1.4 var(--sans);letter-spacing:.3em;text-transform:uppercase;color:#8a5a00;margin-top:8px}
.time{font-family:var(--serif);font-style:italic;font-size:14px;opacity:.65;margin-top:10px}
.actions{display:flex;flex-direction:column;gap:10px;margin-top:22px}
button{font-family:var(--sans);cursor:pointer;border-radius:999px;min-height:48px;font:500 12px/1.2 var(--sans);letter-spacing:.16em;text-transform:uppercase;transition:transform .15s,box-shadow .2s,background .2s}
button:active{transform:scale(.97)}
.primary{border:0;color:var(--cream);background:linear-gradient(135deg,#d9381a,#AB1800 55%,#7a1000);box-shadow:0 10px 24px rgba(171,24,0,.35)}
.primary:hover{box-shadow:0 12px 28px rgba(171,24,0,.45)}
.home{display:inline-block;margin-top:18px;font:500 10.5px/1 var(--sans);letter-spacing:.2em;text-transform:uppercase;color:#9a6a00;text-decoration:none;opacity:.8}
.home:hover{opacity:1;text-decoration:underline}
</style>
</head>
<body>
<main class="wrap">
  <section class="card">
    <div class="eye" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/></svg>
    </div>
    <p class="eyebrow">Private View</p>
    <p class="names">Shubham &amp; Rashmi</p>
    <h1>Visitor Count</h1>
    <svg class="divider" viewBox="0 0 160 14" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1"><path d="M0 7H62M98 7H160"/><path d="M80 1 L87 7 L80 13 L73 7Z"/><circle cx="66" cy="7" r="1.6" fill="currentColor" stroke="none"/><circle cx="94" cy="7" r="1.6" fill="currentColor" stroke="none"/></g></svg>
    <p class="num">${value.toLocaleString('en-IN')}</p>
    <p class="lbl">Unique Visitors</p>
    <p class="time">Updated ${new Date().toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
    <div class="actions">
      <button class="primary" onclick="location.reload()">Refresh</button>
    </div>
    <a class="home" href="/">Back to invitation</a>
  </section>
</main>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store, max-age=0',
      'x-robots-tag': 'noindex, nofollow'
    }
  });
}

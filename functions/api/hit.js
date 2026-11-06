const KEY = 'engagement-visitors';

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status: status || 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store'
    }
  });
}

export async function onRequestPost({ env }) {
  if (!env.VISITS) return json({ ok: false, error: 'binding_missing' }, 500);
  try {
    const current = parseInt(await env.VISITS.get(KEY), 10);
    const next = (Number.isFinite(current) ? current : 0) + 1;
    await env.VISITS.put(KEY, String(next));
    return json({ ok: true }, 200);
  } catch (e) {
    return json({ ok: false }, 500);
  }
}

export async function onRequestGet() {
  return new Response('Method Not Allowed', {
    status: 405,
    headers: { allow: 'POST', 'cache-control': 'no-store' }
  });
}

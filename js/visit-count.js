const key = 'mazzi-fiori-casamentos'
const el = document.getElementById('va-visits')
if (el) {
  const local = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)
  ;(async () => {
    try {
      const res = await fetch(
        `https://analytics.getvieira.com/v1/public/projects/${encodeURIComponent(key)}/summary?period=30d`
      )
      const data = res.ok ? await res.json() : null
      const n = typeof data?.pageviews === 'number' ? data.pageviews : 0
      if (!local && n <= 0) return
      el.textContent = `${new Intl.NumberFormat('pt-BR').format(n)} visitas nos últimos 30 dias`
      el.hidden = false
    } catch {
      if (local) {
        el.textContent = '0 visitas nos últimos 30 dias'
        el.hidden = false
      }
    }
  })()
}

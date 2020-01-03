export default function ({
  $axios,
  store
}) {
  $axios.setBaseURL(store.state.api.config.appSettings.env.API_URL)
  $axios.onRequest((config) => {
    // config.withCredentials = true
    if (store.state.api.auth.token) {
      config.headers.common.Authorization = `Bearer ${store.state.api.auth.token}`
      // config.headers.common.crossDomain = true
      // config.header.common['Content-Type'] = 'application/json'
    }
  })
}
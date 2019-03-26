import { Home, Deploy, Connect } from 'screens'

export default {
  root: { path: '/', component: Connect, name: 'root' },
  connect: { path: '/connect', component: Connect, name: 'Connect' },
  home: { path: '/home', component: Home, name: 'Home' },
  deploy: { path: '/deploy', component: Deploy, name: 'Deploy' },
}

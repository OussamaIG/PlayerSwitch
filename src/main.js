import { createApp } from 'vue'

import App from './App.vue'
import PositionGrid from './components/PositionGrid.vue'
import PlayersGrid from './components/PlayersGrid.vue'
import PlayerInfo from './components/PlayerInfo.vue'


const app = createApp(App);

app.component('Position-grid', PositionGrid);
app.component('Players-grid', PlayersGrid);
app.component('Player-info', PlayerInfo);


app.mount('#app');

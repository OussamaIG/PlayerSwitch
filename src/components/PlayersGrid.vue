<template>
    <div class="cadre">
        <Player-info
        v-for="player in players"
        :number="player.number"
        :name="player.name"
        :position="player.position"
        :key="player.id"
        ></Player-info>
    </div>
</template>

<script>
export default{
    props : ['players']
   
}
</script>
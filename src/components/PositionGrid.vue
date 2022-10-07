<template>
    <nav>
        <div class="buttons">
            <p @click="$emit('showgks')">GoalKeepers</p>
            <p @click="$emit('showdfs')">Defenders</p>
            <p @click="$emit('showmid')">Midfielders</p>
            <p @click="$emit('showatk')">Attackers</p>
        </div>
    </nav>   
</template>

<script>
    export default {
        emits : ['showgks', 'showdfs','showmid','showatk']
    }
</script>
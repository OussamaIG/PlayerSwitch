<template>
    <div class="Playerinfo">
        <div class="player">
            <div class="number">
            <p>{{number}}</p>
            </div>
            <div class="infos">
                <h1>{{name}}</h1>
                <p>{{position}}</p>
            </div>
        </div>
        <div class="stats">
            <button>stats</button>
        </div>
    </div>
</template>

<script>
    export default {
        props : ['number', 'name', 'position']
    }
</script>
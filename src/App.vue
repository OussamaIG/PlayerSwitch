<template>
  
  <div>
  <Position-grid
  @showgks="setTable('GK')"
  @showdfs="setTable('CB')"
  @showmid="setTable('CAM')"
  @showatk="setTable('ST')"
  ></Position-grid>
  <Players-grid v-if="SelectedTable == 'GK'"
  :players="GetPlayersByPosition('GK')"
  ></Players-grid>
  <Players-grid
  v-else-if="SelectedTable == 'CB'"
  :players="GetPlayersByPosition('CB')"
  ></Players-grid>
  <Players-grid
  v-else-if="SelectedTable == 'CAM'"
  :players="GetPlayersByPosition('CAM')"></Players-grid> 
  <Players-grid
  v-else
  :players="GetPlayersByPosition('ST')"></Players-grid>
  </div>

</template>

<script>
  export default {
    data(){
      return {
        ListOfPlayers : [
          {
            id: 'KDB',
            name: 'Kevin De bruyen',
            position : 'CAM',
            number : '17'
          },
          {
            id: 'E31',
            name: 'Ederson Moraes',
            position : 'GK',
            number : '31'
          },
          {
            id: 'SCT',
            name: 'Scott Carson',
            position : 'GK',
            number : '01'
          },
          {
            id: 'STF',
            name: 'Stefan Ortega Moreno',
            position : 'GK',
            number : '18'
          },
          {
            id: 'JS',
            name: 'John Stones',
            position : 'CB',
            number : '05'
          },
          {
            id: 'ER9',
            name: 'Erling Braut Haaland',
            position : 'ST',
            number : '09'
          },
        ],
        GK : [],
        SelectedTable : 'GK',
      };
    },
    methods : {
      setTable(table){
        this.SelectedTable = table;
      },
      GetPlayersByPosition(pos){
        return this.ListOfPlayers.filter((player) => player.position == pos)
      },      
  },
  provide(){
    return {
      players : this.ListOfPlayers,
      type : this.SelectedTable,
      SetType : this.setTable,
    };
  }
}
</script>

<style>
  html{
    font-family: 'Poppins';
  }
  body{
    width : 100vw;
    margin: 0;
    background-color: rgb(237, 242, 247);;
  }
  #app{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  nav{
    margin-top : 1em;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  nav .buttons{
    display: flex;
    background-color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow:
  0px 0px 2.2px rgba(0, 0, 0, 0.018),
  0px 0px 5.3px rgba(0, 0, 0, 0.027),
  0px 0px 10px rgba(0, 0, 0, 0.034),
  0px 0px 17.9px rgba(0, 0, 0, 0.04),
  0px 0px 33.4px rgba(0, 0, 0, 0.048),
  0px 0px 80px rgba(0, 0, 0, 0.07)
;
  }
  nav .buttons p{
    cursor: pointer;
    margin-left : 1em;
    margin-right : 1em;
  }
  nav .buttons p:hover{
    color :#00285E;
  }
  .cadre{
    width: 100%;

    background-color: white;
    box-shadow:
  0px 0px 2.2px rgba(0, 0, 0, 0.018),
  0px 0px 5.3px rgba(0, 0, 0, 0.027),
  0px 0px 10px rgba(0, 0, 0, 0.034),
  0px 0px 17.9px rgba(0, 0, 0, 0.04),
  0px 0px 33.4px rgba(0, 0, 0, 0.048),
  0px 0px 80px rgba(0, 0, 0, 0.07)
;
border-top: 1px solid #00285E;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
  }
  .player{
    height: 10vh;
    display: flex;
    margin-left: 1em;
  }
  .player .number{
    height: 100%;
    font-size: 40px;
    display: flex;
    align-items: center;
    color:#6CADDF;
  }
  .Playerinfo{
    height: 12%;

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .Playerinfo .infos{
    margin-left: 1.2em;
    height: 100%;
    align-items: center;
  }
  .Playerinfo .infos h1{
    font-size: 14px;
    color : #00285E;
  }
  .Playerinfo .infos p{
    font-size: 12px;
    color : gray;
  }
  .Playerinfo .stats{
    height: 100;
    margin-right: 1em;
    display: flex;
    align-items: center;
  }
  .Playerinfo .stats button{
    height: 5vh;
    outline: none;
    background-color: #6CADDF;
    border: 1px solid #6CADDF;
    font-family: 'Poppins';
    text-transform: uppercase;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    color: white;
  }

</style>

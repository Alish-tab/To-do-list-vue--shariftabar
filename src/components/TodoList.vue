<template>
        <li>
        <div class="task-title">
            <input type="checkbox">
            <h2>{{ title }}</h2>
        </div>
        <div class="task-buttons">
             <font-awesome-icon :icon="['fas', 'pen']" />
            <font-awesome-icon :icon="['fas', 'trash-alt']" />
        </div>
    </li>
</template>



<script>
    export default {
        props: {
            'title':{
                type:String
            }
            }
    }
</script>


<style scoped>
    li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    li:hover{
        background-color: #dfe4ea;
        cursor: pointer;
    }

    .task-title{
        display: flex;
        width: 40%;
        align-items: center;
        gap: 1rem;
    }

    input{
        cursor: pointer;
    }

    h2{
        font-size: 2.5rem;
    }

    .task-buttons{
        display: flex;
        gap: 1.5rem;
    }
    
    
    .fa-pen{
        color: #48dbfb;
        font-size: 2rem;
        cursor: pointer;
    }

    .fa-trash-alt {
        color: #ff6b6b;
        font-size: 2rem;
        cursor: pointer;
        margin-right: 1rem;
    }

</style>
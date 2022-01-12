<template>
   <form @submit.prevent="submitData">
        <input type="text" placeholder="Enter task title..."  v-model="eneteredTitle">
        <button>ADD</button>
   </form>

</template>


<script>
    export default {
        emits:['add-task'],
        data(){
            return{
                eneteredTitle:''
            }
        },

        methods:{
            submitData() {
                this.$emit('add-task' , this.eneteredTitle)
                this.eneteredTitle = ''
            }
        }
    }
</script>


<style scoped>
    form{
        width: 80%;
        padding: .5rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }

    input{
        width: 95%;
        padding: 1.5rem;
        border: none;
    }

    input:focus{
        outline: 2px solid #2980b9;
    }

    button{
        background-color: #1e90ff;
        padding: .5rem;
        margin-left: -5rem;
        border: none;
        border-radius: 3px;
        color: white;
        cursor: pointer;
    }
</style>
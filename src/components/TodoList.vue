<template>
        <li>
            <div class="task-title" v-if="item.editStatus === false">
                <input type="checkbox" class="check-task">
                <h2>{{ item.title }}</h2>
            </div>
            <div class="task-buttons" v-if="item.editStatus === false">
                <font-awesome-icon :icon="['fas', 'pen']" @click="toggleEditStatus" />
                <font-awesome-icon :icon="['fas', 'trash-alt']" />
            </div>
            <div class="task-edit" v-else-if="item.editStatus === true">
                <input type="text" :value="item.title" class="task-edit-input" ref="newTitle">
                <button class="confirm-edit-btn" @click="addNewTitle">Edit</button>
            </div>
    </li>
</template>



<script>
    export default {
        props: {
                'item':{
                    type:Object
                }
        },
        data() {
            return{
                editedTitle:''
            }
        },
        
        methods: {
            toggleEditStatus() {
                this.$emit('edit-status' , this.item.id)
            },

            addNewTitle() {
                this.editedTitle = this.$refs.newTitle.value
                this.$emit('edit-title' ,this.item.id, this.editedTitle)
                this.toggleEditStatus()
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

    .check-task{
        cursor: pointer;
    }

    h2{
        margin-top: 1.5rem;
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

    .task-edit{
        width: 70%;
        display: flex;
        gap: 1rem;
        align-items: center;
    }


    .task-edit-input{
        width: 100%;
        padding: 1.5rem;
        border: none;
    }

    .task-edit-input:focus{
        outline: 2px dashed #48dbfb;
    }

    .confirm-edit-btn{
        background-color: #1e90ff;
        padding: .5rem;
        border: none;
        border-radius: 3px;
        color: white;
        cursor: pointer;
    }
</style>
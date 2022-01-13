<template>
        <li>
            <div class="task-title" v-show="!item.editStatus && !item.deleteStatus">
                <input type="checkbox" class="check-task">
                <h2>{{ item.title }}</h2>
            </div>

            <div class="task-buttons" v-show="!item.editStatus && !item.deleteStatus">
                <font-awesome-icon :icon="['fas', 'pen']" @click="toggleEditStatus" />
                <font-awesome-icon :icon="['fas', 'trash-alt']" @click="toggleDeleteStatus" />
            </div>

            <div class="task-edit" v-show="item.editStatus && !item.deleteStatus">
                <input type="text" :value="item.title" class="task-edit-input" ref="newTitle">
                <button class="confirm-edit-btn" @click="addNewTitle">Edit</button>
            </div>

            <div class="delete-message" v-show="item.deleteStatus && !item.editStatus">
                <p>Are you sure you want to delete this task?</p>
                <button class="confirm-delete-btn" @click="deleteDecision('confirm')">Yes</button>
                <button class="cancel-delete-btn" @click="deleteDecision('cancel')">Cancel</button>
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
            },

            toggleDeleteStatus() {
                this.$emit('delete-status' , this.item.id)
            },

            deleteDecision(decision) {
                this.$emit('delete-decision' , this.item.id , decision)
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

    .confirm-edit-btn:hover{
        background-color: #1a7cdf;
    }

    .delete-message{
        width: 100%;
        font-size: 1.5rem;
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    .confirm-delete-btn{
        background-color: #ff4757;
        padding: .5rem;
        border: none;
        border-radius: 3px;
        color: white;
        cursor: pointer;
    }

    .confirm-delete-btn:hover{
        background-color: #da3d4a;
    }

    .cancel-delete-btn{
        background-color: #a4b0be;
        padding: .5rem;
        border: none;
        border-radius: 3px;
        color: white;
        cursor: pointer;
    }

    .cancel-delete-btn:hover{
        background-color: #5f656d;
    }
</style>
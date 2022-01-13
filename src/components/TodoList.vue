<template>
        <li>
            <div class="task-title" v-show="!item.editStatus && !item.deleteStatus">
                <h2 :class="check">{{ item.title }}</h2>
                <p class="checkedStatus" @click="toggleCheckedStatus">
                    Status:  <span :class="['status', item.checkedStatus]">{{ item.checkedStatus }}</span>
                </p>
            </div>

            <div class="task-buttons" v-show="!item.editStatus && !item.deleteStatus">
                <font-awesome-icon :icon="['fas', 'pen']" @click="toggleEditStatus" />
                <font-awesome-icon :icon="['fas', 'trash-alt']" @click="toggleDeleteStatus" />
            </div>

        <!------------------------ EDIT TASK -------------------------------->
            <div class="task-edit" v-show="item.editStatus && !item.deleteStatus">
                <input type="text" :value="item.title" class="task-edit-input" ref="newTitle" required>
                <button class="confirm-edit-btn" @click="addNewTitle">Edit</button>
            </div>

        <!------------------------ DELETE TASK -------------------------------->
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
                    type:Object,
                    required:true
                },

                'check':{
                    type:String,
                    required:true
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
                if(this.editedTitle.trim() !== ''){
                    this.$emit('edit-title' ,this.item.id, this.editedTitle)
                    this.toggleEditStatus()
                }
               
            },

            toggleDeleteStatus() {
                this.$emit('delete-status' , this.item.id)
            },

            deleteDecision(decision) {
                this.$emit('delete-decision' , this.item.id , decision)
            },

            toggleCheckedStatus() {
                this.$emit('checked-status' , this.item.id)
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
        padding: 0 3px;
    }

    li:hover{
        background-color: #dfe4ea;
        cursor: pointer;
    }

    .task-title{
        display: flex;
        width: 55%;
        align-items: center;
        justify-content: space-between;
    }

    .check-task{
        cursor: pointer;
    }

    h2{
        margin-top: 1.5rem;
        font-size: 2.5rem;
    }

    .done{
      text-decoration-line: line-through;
    }

    .status.todo{
        color:#ff3838 ;
    }

    .status.in-progress{
        color: #f39c12;
    }

    .status.done{
        color: #1b995e;
        text-decoration-line: none;
    }

    .checkedStatus{
        font-size: 1.5rem;
        transition: ease-in-out .1s;
    }

    .checkedStatus:hover{
        transform: scale(1.3);
    }

    .task-buttons{
        display: flex;
        gap: 1.5rem;
    }
    
    
    .fa-pen{
        color: #48dbfb;
        font-size: 2rem;
        cursor: pointer;
        transition: ease-in-out .1s;
    }

    .fa-pen:hover{
        transform: scale(1.3);
    }

    .fa-pen:active{
        transform: scale(1.1);
    }

    .fa-trash-alt {
        color: #ff6b6b;
        font-size: 2rem;
        cursor: pointer;
        margin-right: 1rem;
        transition: ease-in-out .1s;
    }

    .fa-trash-alt:hover{
        transform: scale(1.3);
    }

    .fa-trash-alt:active{
        transform: scale(1.1);
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

    .task-edit-input:invalid{
        outline: 2px dashed #ff6b6b;
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
        font-size: 1.7rem;
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
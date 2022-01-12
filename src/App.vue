<template>
    <header>My Todo List</header>
    <section>
        <new-task @add-task="addTask"></new-task>
        <p v-if="tasks.length === 0">Your todo list is empty - please start adding some!</p>
        <ul v-else class="list">
        <todo-list v-for="task in tasks" :key="task.title" :title="task.title"></todo-list>
        </ul>
    </section>
</template>




<script>

import NewTask from './components/NewTask.vue';
import TodoList from './components/TodoList.vue';

export default {
    components: {
        'new-task': NewTask,
        'todo-list':TodoList
    },
    data() {
        return{
            tasks:[],
        }
    },
    
    methods: {
        addTask(enteredtitle) {
            
            const newTask ={
                title: enteredtitle,
                editStatus:false,
                deleteStatus:false,
                checked:false
            }

            this.tasks.push(newTask)
            console.log(this.tasks)
        }
    }
}


</script>


<style>
    html{
        font-size: 62.5%; /* 10 px */
    }
</style>


<style scoped>
    header{
        width: 80%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        margin: 3rem auto;
        border-radius: 10px;
        padding: 2rem;
        background-color: #1b995e;
        color: white;
        text-align: center;
        font-size: 2.5rem;
    }

    section{
        width: 80%;
        padding: 1rem;
        background-color: #f1f2f6;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        margin: 3rem auto;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
            
    }
    
    p{
        display: block;
        font-size: 2rem;
    }

    .list{
        width: 80%;
        margin: 0 auto;
        list-style: none;
        padding: .5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
Vue.component('task-list', {

    template: `
        <ul>

            <task v-for="task in tasks">{{ task.description }}</task>

        </ul>
    `,

    data(){
        return{
            tasks: [
                { description: 'Go to the store', completed: true },
                { description: 'Finish Screencast', completed: false },
                { description: 'Make Donation', completed: false },
                { description: 'Clear inbox', completed: false },
                { description: 'Make dinner', completed: false },
                { description: 'Clean Room', completed: true },
            ]
        }
    }
    
});

Vue.component('task', {

    template: '<li><slot></slot></li>'
    
});


new Vue({
    el: '#root',

})
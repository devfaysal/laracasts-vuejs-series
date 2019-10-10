Vue.component('tabs', {

    template: `
        <div>
            <div class="tabs">
                <ul class="flex border-b">
                    <li v-for="tab in tabs" class="mr-1" :class="{'-mb-px' : tab.isActive}">
                        <a :href="tab.href" :class="{'border-l border-t border-r rounded-t' : tab.isActive}" v-on:click="selectTab(tab)" class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">{{tab.name}}</a>
                    </li>
                </ul>
            </div>

            <div class="tab-details">
                <slot></slot>
            </div>
        </div>
    `,

    data(){
        return{
            tabs: [],
        }
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name)
            })
        }
    }

});

Vue.component('tab', {
    template: `
        <div v-if="isActive"><slot></slot></div>
    `,

    props: {

        name: { required: true },

        selected: { default: false }

    },

    data(){
        return{
            isActive: false
        }
    },

    computed: {
        href(){
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted(){
        this.isActive = this.selected;
    }
})

new Vue({
    el: '#root',

})
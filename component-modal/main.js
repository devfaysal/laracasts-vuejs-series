
Vue.component('modal', {

    props: ['title'],

    template: `
        <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div class="absolute w-full h-full bg-gray-900 opacity-50"></div>
        
            <div class="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        
                <!-- Add margin if you want to see some of the overlay behind the modal-->
                <div class="py-4 text-left px-6">
                    <!--Title-->
                    <div class="flex justify-between items-center pb-3">
                        <p class="text-2xl font-bold">{{ title }}</p>
                        <div v-on:click="$emit('close')" class="cursor-pointer z-50">
                            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                viewBox="0 0 18 18">
                                <path
                                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                </path>
                            </svg>
                        </div>
                    </div>
        
                    <!--Body-->

                    <slot></slot>

                    <!--Footer-->
                    <div class="flex justify-end pt-2">
                        <button v-on:click="$emit('close')" class="px-3 py-1 bg-indigo-500 rounded-lg text-white hover:bg-indigo-400">
                            Close
                        </button>
                    </div>
        
                </div>
            </div>
        </div>
    `,
    
});


new Vue({
    el: '#root',

    data: {
        showModal: false
    }
})
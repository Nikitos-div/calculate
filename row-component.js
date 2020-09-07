
Vue.component('row-calculate', {
    template: calculateHTML,
    props: {
        chars: {
            type: Array,
            default: 'No array'
        },
        style: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    methods: {
        getSymbol(event) {
            this.$emit('add', Object.values(event.target.dataset)[0])
        }
    },
    directives: {
        data: {
            bind(element, binding, node) {
                const { value } = binding
                if (value == 0) {
                    element.classList += ' row__with-zero-btn'
                }
                console.log(node)
                element.dataset['element'] = binding.value
                element.children[0].dataset['element'] = binding.value
            }
        }
    }
});
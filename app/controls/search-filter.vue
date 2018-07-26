<template>
    <div>
        <button>Применить</button>
        <div v-for="possibleValues in items">
            <div v-for="possibleValue in possibleValues">
                <label><input type="checkbox" v-model="possibleValue.checked">{{possibleValue.name}} ({{possibleValue.count}})</label>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        name: 'SearchFilter',
        mounted() {
            console.log("Filter mounted")
        },
        computed: {
            ...mapState({
                items: state => state.filter.items,
            })
        }
    }
</script>
<template>
    <div>
        menu
    </div>
</template>

<script>
export default {
    layout: null,
    props: {
        organization: Object,
        category: Object
    },
    mounted() {
        console.log(this.organization, this.category)
    }
}
</script>

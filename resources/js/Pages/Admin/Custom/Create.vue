<template>
    <form @submit.prevent="id ? form.put('/' + route + '/' + id) : form.post('/' + route)">
        <Head :title="form.name ? form.name : 'New'" />

        <div v-for="field in fields">
            <label :for="field.name" v-text="field.label" />
            <input :id="field.name" v-model="form[field.name]" :type="field.type ? field.type : 'text'" />
            <div v-if="form.errors[field.name]">{{ form.errors[field.name] }}</div>
        </div>

        <br>

        <button type="submit" :disabled="form.processing">Save</button>
    </form>
</template>

<script>
export default {
    props: {
        fields: Array,
        route: String,
        id: Number
    },
    data() {
        return {
            form: this.$inertia.form(this.fields.reduce((obj, field) => ({...obj, [field.name]: field.value}), {})),
        }
    }
}
</script>

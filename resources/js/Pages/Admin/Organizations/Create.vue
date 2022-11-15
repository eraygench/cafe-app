<template>
    <form @submit.prevent="form.id ? form.put('/organizations/' + form.id) : form.post('/organizations')">
        <Head :title="form.name ? form.name : 'New Organization'" />
        <!-- name -->
        <div>
            <label for="name">Name:</label>
            <input id="name" v-model="form.name" type="text" autocomplete="off" />
            <div v-if="form.errors.name">{{ form.errors.name }}</div>
        </div>

        <div>
            <label for="name">Active:</label>
            <input id="name" v-model="form.active" type="checkbox" />
            <div v-if="form.errors.active">{{ form.errors.active }}</div>
        </div>

        <div>
            <label for="name">Show Menu:</label>
            <input id="name" v-model="form.show_menu" type="checkbox" />
            <div v-if="form.errors.show_menu">{{ form.errors.show_menu }}</div>
        </div>

        <br>
        <!-- submit -->
        <button type="submit" :disabled="form.processing">Save</button>
    </form>
</template>

<script>
export default {
    props: {
        organization: Object
    },
    data() {
        return {
            form: this.$inertia.form({
                id: this.organization?.id,
                name: this.organization?.name ?? null,
                active: this.organization?.active ?? true,
                show_menu: this.organization?.show_menu ?? false
            }),
        }
    },
}
</script>

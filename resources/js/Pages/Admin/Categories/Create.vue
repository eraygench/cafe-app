<template>
    <form @submit.prevent="form.post('/categories')">
        <Head>
            <title>New Category</title>
        </Head>
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
            <label for="name">Show In Menu:</label>
            <input id="name" v-model="form.show_in_menu" type="checkbox" />
            <div v-if="form.errors.show_in_menu">{{ form.errors.show_in_menu }}</div>
        </div>

        <br>
        <!-- submit -->
        <button type="submit" :disabled="form.processing">Save</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            form: this.$inertia.form({
                name: null,
                active: true,
                show_in_menu: false
            }),
        }
    },
}
</script>

<template>
    <form @submit.prevent="form.post('/users')">
        <Head>
            <title>New User</title>
        </Head>
        <!-- name -->
        <div>
            <label for="name">Name:</label>
            <input id="name" v-model="form.name" type="text" autocomplete="off" />
            <div v-if="form.errors.name">{{ form.errors.name }}</div>
        </div>

        <!-- email -->
        <div>
            <label for="email">Email:</label>
            <input id="email" v-model="form.email" type="email" autocomplete="off" />
            <div v-if="form.errors.email">{{ form.errors.email }}</div>
        </div>

        <!-- password -->
        <div>
            <label for="password">Password:</label>
            <input id="password" v-model="form.password" type="password" autocomplete="off" />
            <div v-if="form.errors.password">{{ form.errors.password }}</div>
        </div>
        <br>
        <!-- submit -->
        <button type="submit" :disabled="form.processing">Login</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            form: this.$inertia.form({
                name: null,
                email: null,
                password: null
            }),
        }
    },
}
</script>

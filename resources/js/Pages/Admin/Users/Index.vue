<template>
    <div>
        <h1>Users <Link href="/users/create" as="button">Yeni</Link></h1>
        <input type="search"
               v-model="search"
               placeholder="Users içinde ara..."
               class="p-2 border-gray-200 border rounded"/>
        <ul>
            <li v-for="user in users.data" v-bind:key="user.id">
                <span>{{ user.name }}</span> <button>Edit</button> <button>Delete</button>
            </li>
        </ul>
        <Pagination :links="users.links" />
    </div>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import Pagination from "../../../Shared/Pagination";
import debounce from "lodash/debounce";
export default {
    components: {Pagination},
    props: {
        users: Object,
        filter: String,
        can: Object
    },
    data() {
        return {
            search: this.filter,
            headings: [
                {
                    key: "name",
                    value: "Name"
                }
            ]
        }
    },
    watch: {
        search: {
            handler: debounce(value => {
                Inertia.get('/users', {search: value}, {preserveState: true, replace: true, preserveScroll: true});
            }, 300),
            deep: true
        }
    }
}
</script>

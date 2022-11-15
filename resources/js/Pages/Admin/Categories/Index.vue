<template>
    <div>
        <h1>Categories <Link href="/categories/create" as="button">Yeni</Link></h1>
        <input type="search"
               v-model="search"
               placeholder="Categories içinde ara..."
               class="p-2 border-gray-200 border rounded"/>
        <ul>
            <li v-for="category in categories.data" v-bind:key="category.id">
                <span>{{ category.name }}</span> <button>Edit</button> <button>Delete</button>
            </li>
        </ul>
        <Pagination :links="categories.links" />
    </div>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import Pagination from "../../../Shared/Pagination";
import debounce from "lodash/debounce";
export default {
    components: {Pagination},
    props: {
        categories: Object,
        filter: String,
        can: Object
    },
    data() {
        return {
            search: this.filter
        }
    },
    watch: {
        search: {
            handler: debounce(value => {
                Inertia.get('/categories', {search: value}, {preserveState: true, replace: true, preserveScroll: true});
            }, 300),
            deep: true
        }
    }
}
</script>

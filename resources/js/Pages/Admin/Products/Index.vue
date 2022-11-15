<template>
    <div>
        <h1>Products <Link href="/products/create" as="button">Yeni</Link></h1>
        <input type="search"
               v-model="search"
               placeholder="Products içinde ara..."
               class="p-2 border-gray-200 border rounded"/>
        <ul>
            <li v-for="product in products.data" v-bind:key="product.id">
                <span>{{ product.name }}</span> <button>Edit</button> <button>Delete</button>
            </li>
        </ul>
        <Pagination :links="products.links" />
    </div>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import Pagination from "../../../Shared/Pagination";
import debounce from "lodash/debounce";
export default {
    components: {Pagination},
    props: {
        products: Object,
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
                Inertia.get('/products', {search: value}, {preserveState: true, replace: true, preserveScroll: true});
            }, 300),
            deep: true
        }
    }
}
</script>

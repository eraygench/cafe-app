<template>
    <div>
        <Link :href="back" as="button">Back</Link>
        <h1>{{ desk.name }}</h1>
        <button v-if="sale.details.length" @click="save">Save</button>
        <button v-if="activeSale" @click="close">Close</button>
        <hr class="mt-4">
        <h1 class="my-2">Products</h1>
        <div class="flex gap-2">
            <button v-for="product in products" :key="product.id" v-text="product.name" @click="addProduct(product)" class="p-2 bg-gray-200" />
        </div>
        <hr class="mt-4">
        <h1 class="my-2">Details</h1>
        <div class="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
            <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
                <tbody>
                <tr v-for="item in sale.details" :key="item.id">
                    <td class="border-dashed border-t border-gray-200">
                        <span class="text-gray-700 px-6 py-2 flex items-center" v-text="item.product.name"></span>
                    </td>
                    <td class="border-dashed border-t border-gray-200">
                        <div class="flex">
                            <button class="p-2 bg-gray-200" @click="quantity(item.id, '-')" :disabled="item.quantity <= 1">-</button>
                            <span class="text-gray-700 px-2 py-2 flex items-center" v-text="item.quantity"></span>
                            <button class="p-2 bg-gray-200" @click="quantity(item.id, '+')">+</button>
                        </div>
                    </td>
                    <td class="border-dashed border-t border-gray-200">
                        <span class="text-gray-700 px-6 py-2 flex items-center">{{ item.price }}$</span>
                    </td>
                    <td class="border-dashed border-t border-gray-200">
                        <span class="text-gray-700 px-6 py-2 flex items-center">{{ (item.quantity * item.price).toFixed(2) }}$</span>
                    </td>
                    <td class="border-dashed border-t border-gray-200 whitespace-nowrap w-1">
                        <div class="fle.x gap-x-2 p-2">
                            <button
                                @click="deleteRow(item)"
                                type="button"
                                class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                            >
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {Inertia} from "@inertiajs/inertia";

export default {
    props: {
        back: String,
        desk: Object,
        activeSale: Object,
        products: Array,
    },
    data() {
        return ({
            activeTab: this.sections?.[0].id,
            sale: this.activeSale ?? ({
                desk_id: this.desk.id,
                details: []
            })
        });
    },
    methods: {
        addProduct(product) {
            const detail = this.sale.details.find(item => item.product.id === product.id)
            if(detail)
                detail.quantity++
            else
                this.sale.details.push({
                    id: this.uuidv4(),
                    product: product,
                    product_id: product.id,
                    price: product.price,
                    quantity: 1
                })
        },
        quantity(id, operation) {
            operation === "-" ? this.sale.details.find(item => item.id === id).quantity-- : this.sale.details.find(item => item.id === id).quantity++
        },
        deleteRow(row) {
            if(typeof row.id === "string")
                this.sale.details.splice(this.sale.details.findIndex(item => item.id === row.id))
            else
                Inertia.delete('/plan/' + this.sale.desk_id, {detail_id: row.id}, {preserveState: true, replace: true, preserveScroll: true})
        },
        uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        },
        close() {
            this.sale.status = "1"
            Inertia.put('/plan/' + this.sale.desk_id, {...this.sale, status: true}, {preserveState: true, replace: true, preserveScroll: true})
        },
        save() {
            console.log(this.sale)
            Inertia.put('/plan/' + this.sale.desk_id, this.sale, {preserveState: true, replace: true, preserveScroll: true})
        }
    }
}
</script>

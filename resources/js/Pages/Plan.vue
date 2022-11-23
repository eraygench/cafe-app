<template>
    <div>
        <div class="bg-white flex flex-col md:grid grid-cols-3 gap-4">
            <div>
                <div v-if="activeDesks.length" class="flex flex-col gap-0.5 bg-gray-200 rounded-lg border-2 border-gray-200 text-gray-900 text-sm font-medium">
                    <button v-for="desk in activeDesks" :key="desk.id"
                            @click="openDesk(desk)"
                            class="bg-white px-4 py-2 w-full grid grid-cols-3 gap-4 hover:bg-gray-100 hover:text-blue-700 cursor-pointer first:rounded-t-lg last:rounded-b-lg">
                        <span class="col-span-2 text-start">{{ desk.section_name }} {{ desk.name }}</span>
                        <span class="flex items-center justify-between">
                            <span class="w-auto">{{ desk.sale.created_at }}</span>
                            <span>{{ desk.sale.total }}$</span>
                        </span>
                    </button>
                </div>
                <div v-if="activeDesks.length === 0" class="text-center w-full text-amber-500 font-semibold">No active sales found</div>
            </div>
            <div class="md:col-span-2">
                <ul class="flex items-center flex-nowrap overflow-x-auto pb-4 snap-x">
                    <li v-for="section in sections" :key="section.id"
                        class="cursor-pointer py-2 px-4 text-gray-500 border-b-4 whitespace-nowrap snap-center"
                        :class="{ 'text-green-500 border-green-500': activeTab === section.id }"
                        @click="activeTab = section.id"
                        v-text="section.name" />
                </ul>
                <div v-for="section in sections" :key="section.id"
                     class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-8 grid-flow-row gap-4"
                     v-show="activeTab === section.id">
                    <button class="bg-gray-200 h-32 rounded relative bg-emerald-400 text-white"
                            :class="{ 'bg-red-400': !!desk.sale }"
                            @click="openDesk(desk)"
                            v-for="desk in section.desks">
                        <span v-if="desk.sale" class="absolute left-1 top-1 text-xs">{{ desk.sale.created_at }}</span>
                        <span>{{ section.name }} {{ desk.name }}</span>
                        <span v-if="desk.sale && desk.sale.details" class="absolute left-1 bottom-1 text-xs">{{ desk.sale.total }}$</span>
                    </button>
                </div>
            </div>
        </div>
        <div v-if="activeDesk" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="min-h-screen px-4 text-center">
                <div @click="activeDesk = null" v-show="activeDesk"
                     x-transition:enter="transition ease-out duration-300 transform"
                     x-transition:enter-start="opacity-0"
                     x-transition:enter-end="opacity-100"
                     x-transition:leave="transition ease-in duration-200 transform"
                     x-transition:leave-start="opacity-100"
                     x-transition:leave-end="opacity-0"
                     class="fixed inset-0 transition-opacity transform bg-gray-500 bg-opacity-40" aria-hidden="true"
                ></div>

                <div v-show="activeDesk"
                     x-transition:enter="transition ease-out duration-300 transform"
                     x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                     x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
                     x-transition:leave="transition ease-in duration-200 transform"
                     x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
                     x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                     class="inline-block w-full xl:max-w-5xl p-8 my-20 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl"
                >
                    <div class="flex items-center justify-between space-x-4">
                        <span />
                        <h1 class="text-xl font-medium text-gray-800">{{ activeDesk.section_name }} {{ activeDesk.name }}</h1>

                        <button @click="activeDesk = null" class="text-gray-600 focus:outline-none hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>

                    <div class="mt-5">
                        <div class="grid grid-cols-5 grid-flow-row">
                            <div class="col-span-2 overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
                                <div v-if="activeDesk.sale.details.length" class="flex flex-col gap-0.5 bg-gray-200 rounded-lg border-2 border-gray-200 text-gray-900 text-sm font-medium">
                                    <button v-for="item in activeDesk.sale.details" :key="item.id"
                                            class="bg-white px-4 py-2 w-full grid grid-cols-3 gap-4 hover:bg-gray-100 hover:text-blue-700 cursor-pointer first:rounded-t-lg last:rounded-b-lg">
                                        <span class="col-span-2 text-start">{{ item.product.name }}</span>
                                        <span class="flex items-center justify-between">
                                            <span class="w-auto">{{ item.quantity }}</span>
                                            <span>{{ (item.quantity * item.price).toFixed(2) }}$</span>
                                        </span>
                                    </button>
                                </div>
<!--                                <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
                                    <tbody>
                                    <tr v-for="item in activeDesk.sale.details" :key="item.id" class="group">
                                        <td class="border-dashed border-t border-gray-200 py-2">
                                            <span class="text-gray-700 px-6 py-2 flex items-center" v-text="item.product.name"></span>
                                        </td>
                                        <td class="border-dashed border-t border-gray-200 py-2">
                                            <div class="flex">
&lt;!&ndash;                                                <button class="p-2 bg-gray-200" @click="quantity(item.id, '-')" :disabled="item.quantity <= 1">-</button>&ndash;&gt;
                                                <span class="text-gray-700 px-2 py-2 w-10 text-center" v-text="item.quantity"></span>
&lt;!&ndash;                                                <button class="p-2 bg-gray-200" @click="quantity(item.id, '+')">+</button>&ndash;&gt;
                                            </div>
                                        </td>
&lt;!&ndash;                                        <td class="border-dashed border-t border-gray-200 py-2">
                                            <span class="text-gray-700 px-2 py-2 text-center">{{ item.price }}$</span>
                                        </td>&ndash;&gt;
                                        <td class="border-dashed border-t border-gray-200 py-2">
                                            <span class="text-gray-700 px-2 py-2 text-center">{{ (item.quantity * item.price).toFixed(2) }}$</span>
                                        </td>
                                        <td class="border-dashed border-t border-gray-200 whitespace-nowrap w-1 px-1">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <button
                                                    @click="deleteRow(item)"
                                                    type="button"
                                                    class="border hidden group-hover:block border-red-500 bg-red-500 text-white rounded-md p-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                                                >
                                                    <TrashIcon />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>-->
                            </div>
                            <div class="col-span-3 pl-4">
                                <div class="flex gap-2">
                                    <button v-for="product in products" :key="product.id" v-text="product.name" @click="addProduct(product)" class="p-2 bg-gray-200" />
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-end mt-6 gap-4">
                            <button v-if="activeDesk.sale.details.length" @click="saveDesk" type="button" class="px-3 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:bg-indigo-700 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                                Save
                            </button>
                            <button v-if="activeDesk.sale.id" @click="closeDesk" type="button" class="px-3 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-500 rounded-md dark:bg-red-600 dark:hover:bg-red-700 dark:focus:bg-red-700 hover:bg-red-600 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-50">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Inertia} from "@inertiajs/inertia";
import { TrashIcon } from '@vue-hero-icons/outline'
export default {
    props: {
        sections: Array,
        products: Array,
    },
    components: {
        TrashIcon
    },
    data() {
        return ({
            activeTab: this.sections?.[0].id,
            activeDesk: null,
            activeDesks: this.sections.flatMap(section => section.desks.filter(desk => desk.sale).map(desk => {
                desk.sale.created_at = new Date(desk.sale.created_at).toTimeString().substr(0, 5)
                return desk
            }))
        });
    },
    methods: {
        openDesk(desk) {
            this.activeDesk = {
                ...structuredClone(desk),
                sale: structuredClone(desk.sale ?? {
                    desk_id: desk.id,
                    details: []
                })
            }
            console.log(this.activeDesk)
        },
        closeDesk() {
            console.log(this.sale)
            Inertia.put(route('desk', this.activeDesk.sale.desk_id), {...this.activeDesk.sale, status: true}, {preserveState: false, replace: true, preserveScroll: true})
        },
        saveDesk() {
            console.log(this.sale)
            Inertia.put(route('desk', this.activeDesk.sale.desk_id), this.activeDesk.sale, {preserveState: false, replace: true, preserveScroll: true})
        },
        addProduct(product) {
            const detail = this.activeDesk.sale.details.find(item => item.product.id === product.id)
            if(detail)
                detail.quantity++
            else
                this.activeDesk.sale.details.push({
                    id: this.uuidv4(),
                    product: product,
                    product_id: product.id,
                    price: product.price,
                    quantity: 1
                })
        },
        quantity(id, operation) {
            operation === "-" ? this.activeDesk.sale.details.find(item => item.id === id).quantity-- : this.activeDesk.sale.details.find(item => item.id === id).quantity++
        },
        deleteRow(row) {
            if(typeof row.id === "string")
                this.activeDesk.sale.details.splice(this.activeDesk.sale.details.findIndex(item => item.id === row.id))
            else
                Inertia.delete(route('desk-detail-delete', [this.activeDesk.sale.desk_id, row.id]), {preserveState: false, replace: true, preserveScroll: true})
        },
        uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }
    },
    mounted() {
        console.log(this.activeDesks)
    }
}
</script>

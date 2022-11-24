<template>
    <div>
        <div class="bg-white flex flex-col lg:grid grid-cols-3 gap-4">
            <div>
                <div v-if="desks.filter(d => d.sale).length" class="flex flex-col gap-0.5 bg-gray-200 rounded-lg border-2 border-gray-200 text-gray-900 text-sm font-medium">
                    <button v-for="desk in desks.filter(d => d.sale)" :key="desk.id"
                            @click="openDesk(desk)"
                            class="bg-white px-4 py-2 w-full grid grid-cols-3 gap-4 hover:bg-gray-100 hover:text-blue-700 cursor-pointer first:rounded-t-lg last:rounded-b-lg">
                        <span class="col-span-2 text-start">{{ desk.section.name }} {{ desk.name }}</span>
                        <span class="flex items-center justify-between">
                            <span class="w-auto">{{ desk.sale.created_at }}</span>
                            <span>{{ desk.sale.total }}$</span>
                        </span>
                    </button>
                </div>
                <div v-if="desks.filter(d => d.sale).length === 0" class="text-center w-full text-amber-500 font-semibold">No active sales found</div>
            </div>
            <div class="md:col-span-2">
                <ul class="flex items-center flex-nowrap overflow-x-auto pb-2 snap-x">
                    <li v-for="section in sections" :key="section.id"
                        class="cursor-pointer py-2 px-4 text-gray-500 border-b-4 whitespace-nowrap snap-center"
                        :class="{ 'text-green-500 border-green-500': activeTab === section.id }"
                        @click="activeTab = section.id"
                        v-text="section.name" />
                </ul>
                <div v-for="section in sections" :key="section.id"
                     class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-8 grid-flow-row gap-4 mt-2"
                     v-show="activeTab === section.id">
                    <button class="bg-gray-200 h-32 rounded relative bg-emerald-400 text-white"
                            :class="{ 'bg-red-400': !!desk.sale }"
                            @click="openDesk(desk)"
                            v-for="desk in desks.filter(d => d.section.id === section.id)">
                        <span v-if="desk.sale" class="absolute left-1 top-1 text-xs">{{ desk.sale.created_at }}</span>
                        <span>{{ section.name }} {{ desk.name }}</span>
                        <span v-if="desk.sale && desk.sale.details" class="absolute left-1 bottom-1 text-xs">{{ desk.sale.total }}$</span>
                    </button>
                </div>
            </div>
        </div>
<!--        <div v-if="false" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
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
                        <h1 class="text-xl font-medium text-gray-800">{{ activeDesk.section.name }} {{ activeDesk.name }}</h1>

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
                                    <div v-for="item in activeDesk.sale.details" :key="item.id"
                                            class="bg-white px-4 py-2 w-full grid grid-cols-3 gap-4 hover:bg-gray-100 hover:text-blue-700 first:rounded-t-lg last:rounded-b-lg group relative">
                                        <span class="col-span-2 text-start">{{ item.product.name }}</span>
                                        <span class="flex items-center justify-between">
                                            <span class="w-auto">{{ item.quantity }}</span>
                                            <span>{{ (item.quantity * item.price).toFixed(2) }}$</span>
                                        </span>
                                        <button
                                            @click="deleteRow(item)"
                                            type="button"
                                            class="border opacity-0 group-hover:opacity-100 border-red-500 bg-red-500 text-white rounded-md p-0.5 transition-all ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline absolute right-1 top-1/2 -translate-y-1/2"
                                        >
                                            <TrashIcon />
                                        </button>
                                    </div>
                                </div>
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
        </div>-->
        <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <!--
              Background backdrop, show/hide based on slide-over state.

              Entering: "ease-in-out duration-500"
                From: "opacity-0"
                To: "opacity-100"
              Leaving: "ease-in-out duration-500"
                From: "opacity-100"
                To: "opacity-0"
            -->
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-500 opacity-0"
                 :class="{ 'opacity-100': activeDesk, 'select-none pointer-events-none': !activeDesk }"
                @click="closeDeskModal"></div>

            <div class="fixed inset-0 overflow-hidden pointer-events-none">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 transform transition ease-in-out duration-500 sm:duration-700" :class="{ 'translate-x-full': !activeDesk }">
                        <!--
                          Slide-over panel, show/hide based on slide-over state.

                          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                            From: "translate-x-full"
                            To: "translate-x-0"
                          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                            From: "translate-x-0"
                            To: "translate-x-full"
                        -->
                        <div class="pointer-events-auto w-screen max-w-md" :class="{ '!pointer-events-none translate-x-full': !activeDesk }">
                            <div v-if="activeDesk" class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div class="flex items-start justify-between border-b border-gray-200 py-6 px-4 sm:px-6">
<!--                                    <div v-if="addProductTab != null" class="mr-3 flex h-7 items-center">
                                        <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                            <span class="sr-only">Prev</span>
                                            <ArrowLeftIcon/>
                                        </button>
                                    </div>-->
                                    <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">{{ activeDesk.section.name }} {{ activeDesk.name }}</h2>
<!--                                    <div v-if="addProductTab != null" class="ml-3 flex h-7 items-center">
                                        <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                            <span class="sr-only">Next</span>
                                            <ArrowRightIcon/>
                                        </button>
                                    </div>-->
                                    <div class="ml-3 flex h-7 items-center">
                                        <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" @click="closeDeskModal">
                                            <span class="sr-only">Close panel</span>
                                            <XIcon/>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex-1 overflow-y-auto pt-4 pb-6 px-4 sm:px-6">

                                    <div v-if="addProductTab == null">
                                        <div class="flow-root">

                                            <ul role="list" class="flex flex-col divide-y divide-gray-200 gap-2">
                                                <li v-for="item in activeDesk.sale.details" :key="item.id" class="flex pt-2">
                                                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200" v-if="item.product.image">
                                                        <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                                             class="h-full w-full object-cover object-center"/>
                                                    </div>

                                                    <div class="flex flex-1 flex-col">
                                                        <div>
                                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                                <h3>
                                                                    <a href="#">{{ item.product.name }}</a>
                                                                </h3>
                                                                <p class="ml-4">${{ item.quantity * item.price }}</p>
                                                            </div>
<!--                                                            <p class="mt-1 text-sm text-gray-500">Salmon</p>-->
                                                        </div>
                                                        <div class="flex flex-1 items-center justify-between text-sm">
                                                            <p class="text-gray-500">Qty {{ item.quantity }}</p>

                                                            <div class="flex">
                                                                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500 p-1" @click="deleteRow(item)">Remove</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div v-else-if="addProductTab == 0">
                                        <ul class="flex items-center flex-nowrap overflow-x-auto pb-2 snap-x">
                                            <li v-for="category in categories" :key="category.id"
                                                class="cursor-pointer py-2 px-4 text-gray-500 border-b-4 whitespace-nowrap snap-center"
                                                :class="{ 'text-green-500 border-green-500': addProductCategory === category.id }"
                                                @click="addProductCategory = category.id"
                                                v-text="category.name" />
                                        </ul>
                                        <div v-for="category in categories" :key="category.id"
                                             class="grid grid-cols-2 gap-4"
                                             v-show="addProductCategory === category.id">
                                            <button class="bg-gray-400 h-32 rounded relative text-white"
                                                    @click="addProduct(product)"
                                                    :class="{ 'ring-2 ring-emerald-400': cart.find(item => item.product_id === product.id) }"
                                                    v-for="product in products.filter(d => d.category_id === category.id)">
                                                <span>{{ product.name }}</span>
                                                <span class="absolute left-1 bottom-1 text-xs">{{ product.price }}$</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div class="flex flex-col">
                                            <span v-for="item in cart" class="flex items-center justify-between">
                                                <span>{{ item.product_name }}</span>
                                                <span>{{ item.quantity }}</span>
                                                <span>{{ item.quantity * item.price }}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="border-t border-gray-200 py-6 px-4 sm:px-6" v-if="activeDesk.sale.id && addProductTab == null">
                                    <div class="flex justify-between text-base font-medium text-gray-900">
                                        <p>Total</p>
                                        <p>${{ activeDesk.sale.total }}</p>
                                    </div>
                                    <div class="mt-6">
                                        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                                    </div>
                                </div>
                                <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    <div>
                                        <button
                                            @click="addProductTab === 1 ? saveDesk() : (addProductTab = addProductTab === 0 ? 1 : 0)"
                                            :disabled="addProductTab === 0 && cart.length === 0"
                                            class="flex items-center justify-center w-full rounded-md border border-transparent bg-emerald-500 disabled:bg-emerald-700 disabled:cursor-not-allowed disabled:text-gray-300 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-600">
                                            <span v-if="addProductTab === 0">Open Cart</span>
                                            <span v-if="addProductTab === 1">Save</span>
                                            <span v-else-if="addProductTab == null">Add Product</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Inertia} from "@inertiajs/inertia";
import { TrashIcon, XIcon, ArrowLeftIcon, ArrowRightIcon } from '@vue-hero-icons/outline'

export default {
    props: {
        sections: Array,
        _desks: Array,
        categories: Array,
        products: Array,
    },
    components: {
        TrashIcon,
        XIcon,
        ArrowLeftIcon,
        ArrowRightIcon
    },
    data() {
        return ({
            activeTab: this.sections?.[0].id,
            activeDesk: null,
            desks: this._desks.map(desk => {
                if(desk.sale)
                    desk.sale.created_at = new Date(desk.sale.created_at).toTimeString().substring(0, 5)
                return desk
            }),
            addProductTab: null,
            addProductCategory: this.categories.length ? this.categories[0].id : null,
            cart: []
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
        closeSale() {
            console.log(this.activeDesk.sale)
            Inertia.put(route('desk', this.activeDesk.id), {...this.activeDesk.sale, status: true}, {preserveState: false, replace: true, preserveScroll: true})
        },
        closeDeskModal() {
            this.addProductTab = null
            this.activeDesk = null
            this.cart = []
            this.addProductCategory = this.categories.length ? this.categories[0].id : null
        },
        saveDesk() {
            console.log(this.activeDesk, this.cart)
            Inertia.put(route('desk', this.activeDesk.id), {...this.activeDesk.sale, details: this.cart}, {preserveState: false, replace: true, preserveScroll: true})
        },
        addProduct(product) {
            const detail = this.cart.find(item => item.product_id === product.id)
            if(detail)
                detail.quantity++
            else
                this.cart.push({
                    id: this.uuidv4(),
                    product_id: product.id,
                    product_name: product.name,
                    price: product.price,
                    quantity: 1
                })
        },
        quantity(id, operation) {
            operation === "-" ? this.activeDesk.sale.details.find(item => item.id === id).quantity-- : this.activeDesk.sale.details.find(item => item.id === id).quantity++
        },
        deleteRow(row) {
            this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(({isConfirmed}) => {
                if(isConfirmed)
                    Inertia.delete(route('desk-detail-delete', [this.activeDesk.id, row.id]), {preserveState: false, replace: true, preserveScroll: true})
            })
        },
        uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }
    },
    mounted() {
        console.log(this.categories,this.products)
        var channel = Echo.channel('SaleChannel');
        channel.listen('Sale', function (e) {
            console.log(e)
        })
    }
}
</script>

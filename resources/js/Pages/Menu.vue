<template>
    <div>
        <h1>{{ organization.name }}</h1>
        <button @click="requestDesk">New Order</button>
        <hr class="my-2"/>
        <div class="flex gap-3">
            <button v-for="(category, index) in categories"
                    :key="index"
                    :class="{ 'bg-blue-400': activeCategory && category.id === activeCategory.id }"
                    class="bg-gray-400 py-2 px-3 text-white"
                    @click="activeCategory = category">
                {{ category.name }}
            </button>
        </div>
        <hr class="my-2"/>
        <div class="flex gap-3">
            <button v-for="(product, index) in products.filter(product => activeCategory && product.category_id === activeCategory.id)"
                    :key="index"
                    class="bg-gray-400 py-2 px-3 text-white"
                    @click="addProduct(product)">
                {{ product.name }} {{ product.price }}$
            </button>
        </div>
        <hr class="my-2" />
        <div v-if="sale">
            <div>Cart <button @click="save" :disabled="cart.length === 0">Save</button></div>
            <div>
                <div v-for="(item, index) in cart" :key="index">
                    <span>{{ item.product_name }}</span>
                    <span>{{ item.quantity }}</span>
                    <span>{{ item.quantity * item.price }}</span>
                    <button @click="setItemQuantity(item, 0)">Remove</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Inertia} from "@inertiajs/inertia";
export default {
    layout: null,
    props: {
        organization: Object,
        categories: Array,
        products: Array,
        sale: String
    },
    data() {
        return {
            cart: [],
            activeCategory: null
        }
    },
    methods: {
        requestDesk() {
            var desk = prompt('Desk?')
            Inertia.get(route('menu', this.organization.uuid), {ac: desk}, {
                preserveState: true, replace: true, preserveScroll: true
            })
        },
        save() {
            // TODO
            Inertia.put(route('menu', this.organization.uuid), {
                sale: this.sale,
                details: this.cart
            }, {preserveState: true, replace: false, preserveScroll: true})
        },
        addProduct(product) {
            console.log(product)
            if(!this.sale) return
            const detail = this.cart.find(item => item.product_id === product.id)
            if (detail)
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
        setItemQuantity(id, operation) {
            if (operation === "-")
                if (this.cart.find(item => item.id === id).quantity > 1)
                    this.cart.find(item => item.id === id).quantity--
                else {
                    this.cart.splice(this.cart.findIndex(item => item.id === id), 1)
                    if (this.cart.length === 0)
                        this.addProductTab = 0
                }
            else if (operation === "+")
                this.cart.find(item => item.id === id).quantity++
            else if (operation === 0) {
                this.cart.splice(this.cart.findIndex(item => item.id === id), 1)
                if (this.cart.length === 0)
                    this.addProductTab = 0
            }
        },
        uuidv4() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }
    },
    updated() {
        if(this.$page.props.flash.message) {
            this.$swal({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                showCloseButton: true,
                timer: 3000,
                timerProgressBar: true,
                title: this.$page.props.flash.message,
                icon: this.$page.props.flash.icon,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                }
            })
            // TODO
            this.$page.props.flash = []
        }
    }
}
</script>

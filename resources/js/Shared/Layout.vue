<template>
    <main>
        <Nav />
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-4 mx-auto">
                <slot></slot>
            </div>
        </section>
    </main>
</template>
<script>
import Nav from './Nav'
export default {
    components: {Nav},
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
        }
    }
}
</script>

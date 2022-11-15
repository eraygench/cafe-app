<template>
    <main>
        <Nav />
        <div v-if="$page.props.flash.message" class="alert">
            {{ $page.props.flash.message }}
        </div>
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
    components: {Nav}
}
</script>

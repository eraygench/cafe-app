<template>
    <header class="text-gray-600 body-font border-b-gray-600 border-b">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto gap-x-5">
                <Link v-for="(route, key) in routes" v-if="route.visible" :key="key" :href="route.link" :class="{ 'text-orange-600': route.link.endsWith($page.url) }" v-text="route.text" />
            </nav>
            <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span class="ml-3 text-xl"></span>
            </a>
            <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                <Link :href="route('logout')" method="POST" as="button" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Exit
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            routes: [
                {
                    'link': !this.$page.props.auth.user.is_admin && this.$page.props.auth.user.organization_id ? route('plan') : route('home'),
                    'text': 'Home',
                    'visible': true
                },
                /*{
                    'link': route('sales'),
                    'text': 'Sales',
                    'visible': !this.$page.props.auth.user.is_admin && !this.$page.props.auth.user.organization_id
                },*/
                {
                    'link': route('users.index'),
                    'text': 'Users',
                    'visible': this.$page.props.auth.user.is_admin && !this.$page.props.auth.user.organization_id
                },
                {
                    'link': route('organizations.index'),
                    'text': 'Organizations',
                    'visible': this.$page.props.auth.user.is_admin && !this.$page.props.auth.user.organization_id
                },
                {
                    'link': route('products.index'),
                    'text': 'Products',
                    'visible': !this.$page.props.auth.user.is_admin && this.$page.props.auth.user.organization_id
                },
                {
                    'link': route('categories.index'),
                    'text': 'Categories',
                    'visible': !this.$page.props.auth.user.is_admin && this.$page.props.auth.user.organization_id
                },
                {
                    'link': route('sections.index'),
                    'text': 'Sections',
                    'visible': !this.$page.props.auth.user.is_admin && this.$page.props.auth.user.organization_id
                }
            ]
        }
    }
}
</script>

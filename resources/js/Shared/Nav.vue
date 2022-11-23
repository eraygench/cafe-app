<template>
    <header class="text-gray-600 body-font border-b-gray-600 border-b">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto gap-x-5">
                <Link :href="route('home')" :class="{ 'text-orange-600': route('home').endsWith($page.url) }">Home</Link>
                <Link :href="route('sales')" v-if="!$page.props.auth.user.is_admin && !$page.props.auth.user.organization_id" :class="{ 'text-orange-600': route('sales').endsWith($page.url) }">Sales</Link>
                <Link :href="route('users.index')" v-if="$page.props.auth.user.is_admin && !$page.props.auth.user.organization_id" :class="{ 'text-orange-600': route('users.index').endsWith($page.url) }">Users</Link>
                <Link :href="route('organizations.index')" v-if="$page.props.auth.user.is_admin && !$page.props.auth.user.organization_id" :class="{ 'text-orange-600': route('organizations.index').endsWith($page.url) }">Organizations</Link>
                <Link :href="route('products.index')" v-if="!$page.props.auth.user.is_admin && $page.props.auth.user.organization_id" :class="{ 'text-orange-600': route('products.index').endsWith($page.url) }">Products</Link>
                <Link :href="route('categories.index')" v-if="!$page.props.auth.user.is_admin && $page.props.auth.user.organization_id" :class="{ 'text-orange-600': route('categories.index').endsWith($page.url) }">Categories</Link>
                <Link :href="route('sections.index')" v-if="!$page.props.auth.user.is_admin && $page.props.auth.user.organization_id" :class="{ 'text-orange-600': route('sections.index').endsWith($page.url) }">Sections</Link>
                <Link :href="route('plan')" v-if="!$page.props.auth.user.is_admin && $page.props.auth.user.organization_id" :class="{ 'text-orange-600': route('plan').endsWith($page.url) }">Desk Plan</Link>
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
export default {}
</script>

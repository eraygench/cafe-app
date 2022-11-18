<template>
    <div>
        <ul class="flex items-center">
            <li v-for="section in sections" :key="section.id"
                class="cursor-pointer py-2 px-4 text-gray-500 border-b-4"
                :class="{ 'text-green-500 border-green-500': activeTab === section.id }"
                @click="activeTab = section.id"
                v-text="section.name" />
        </ul>
        <div class="bg-white flex">
            <div v-for="section in sections" :key="section.id"
                 class="flex flex-wrap gap-4 pt-4"
                 v-show="activeTab === section.id">
                <Link class="p-2 bg-gray-200 w-20 h-20 rounded relative"
                      :class="{ 'bg-emerald-400 text-white': !!desk.sale }"
                      as="button"
                      v-for="desk in section.desks"
                      :href="desk.href">
                    <span>{{ desk.name }}</span>
                    <span v-if="desk.sale && desk.sale.details" class="absolute left-1 bottom-1 text-xs">{{ desk.sale.details.reduce((aac, detail) => aac + (detail.quantity * detail.price),0) }}$</span>
                </Link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        sections: Array
    },
    data() {
        return ({
            activeTab: this.sections?.[0].id
        });
    }
}
</script>

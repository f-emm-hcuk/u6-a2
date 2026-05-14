<script setup lang="ts">
const props = defineProps<{
	name: string;
	role: string;
	description: string;
}>();
</script>

<template>
	<div class="p-4 rounded-xl bg-neutral-800 ring-1 ring-neutral-700">
		<h4 class="text-xl font-bold">{{ props.name }}</h4>
		<p class="text-sm text-neutral-400 mb-2">{{ props.role }}</p>
		<p class="text-sm">{{ props.description }}</p>
	</div>
</template>

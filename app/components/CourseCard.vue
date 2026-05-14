<script setup lang="ts">
const props = defineProps<{
	title: string;
	description: string;
	url: string;
	icon: string;
}>();
</script>
<template>
	<a
		:href="props.url"
		class="p-4 rounded-xl bg-neutral-800 ring-1 ring-neutral-700 flex flex-col gap-2"
		target="_blank"
	>
		<h3
			class="text-xl font-semibold flex items-center gap-2 underline underline-offset-4"
		>
			<UIcon :name="props.icon" />
			{{ props.title }}
		</h3>
		<p class="text-sm">
			{{ props.description }}
		</p>
	</a>
</template>

<script setup lang="ts">
const props = defineProps<{
	title: string;
	description: string[];
	salary: number;
}>();
</script>

<template>
	<div
		class="flex flex-col w-fit py-3 px-4 bg-neutral-800 rounded-xl gap-2 ring-1 ring-neutral-700"
	>
		<h3 class="text-xl font-semibold">{{ props.title }}</h3>
		<p v-for="paragraph in props.description" :key="paragraph">
			{{ paragraph }}
		</p>
		<div class="flex flex-col">
			<div class="flex gap-1 items-center">
				<UIcon name="material-symbols:attach-money" size="xl" />
				<p class="font-medium">Salary</p>
				<p>£{{ props.salary.toLocaleString() }}</p>
			</div>
		</div>
	</div>
</template>

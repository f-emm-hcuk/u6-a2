<script setup lang="ts">
// a header containing the name and navigation, named PageHeader as vue requires 2-word component names

// fetch the current path with vue-router's useRoute composable
const route = useRoute();
const showMobileNavigation = ref(false);

// define the links in the navigation
const navMap = {
	Home: "/",
	Courses: "/courses",
	"About Us": "/about-us",
	Careers: "/careers",
	Apply: "/apply",
};
</script>

<template>
	<div
		class="flex justify-between items-center gap-4 bg-primary-700 px-5 py-4"
	>
		<NuxtLink to="/" class="flex gap-3" title="Hot Beans Web logo">
			<NuxtImg src="/logo.svg" width="24" />
			<h1 class="text-3xl font-bold tracking-tight">Hot Beans Web</h1>
		</NuxtLink>
		<nav class="flex items-center group">
			<button
				class="h-9 cursor-pointer md:hidden"
				@click="showMobileNavigation = !showMobileNavigation"
			>
				<UIcon name="material-symbols:menu" class="text-4xl" />
			</button>

			<!-- use tailwind's media query prefix (md:) to style differently when width is below 48rem (768px) -->
			<!-- and use showMobileNavigation to show or hide nav when on mobile -->
			<ul
				:class="[
					'gap-2 absolute top-17 right-0 bg-primary-700 items-end flex flex-col pl-6 pr-4 py-3 pt-0 z-10 rounded-bl-xl',
					'md:gap-4 md:static md:items-center md:flex-row md:p-0',
					showMobileNavigation ? '' : 'hidden md:flex',
				]"
			>
				<!-- iterate through the nav links -->
				<li v-for="(path, label) in navMap" :key="path">
					<!-- using NuxtLink for SPA navigation, highlight the current page link -->
					<NuxtLink
						:class="{
							'text-neutral-100 font-bold': route.path == path,
							'flex text-neutral-200 underline-offset-2 text-xl': true,
						}"
						:to="path"
					>
						{{ label }}
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</div>
</template>

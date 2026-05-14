<template>
	<!-- default layout for all pages, means each page has some styles and a header -->
	<div class="bg-neutral-900 flex flex-col min-h-screen text-neutral-100">
		<PageHeader />
		<slot />
	</div>
</template>

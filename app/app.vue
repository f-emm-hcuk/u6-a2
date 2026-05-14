<script setup lang="ts">
useHead({
	titleTemplate: (title) => (title ? `${title} • ` : "") + `Hot Beans Web`,
});
</script>

<template>
	<UApp :tooltip="{ delayDuration: 200 }">
		<NuxtRouteAnnouncer />
		<NuxtLoadingIndicator />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>

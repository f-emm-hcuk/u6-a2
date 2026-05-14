<script setup lang="ts"></script>

<template>
	<div class="flex flex-col gap-2 grow">
		<section
			class="w-full grow flex flex-col p-5 gap-7 items-center justify-center text-center"
		>
			<h2 class="text-8xl font-bold tracking-tighter">Hot Beans Web</h2>
			<p class="text-2xl max-w-[60ch] text-center">
				We believe the key to success with web development is understanding
				what you need, who you're targeting, and who you are.
			</p>
			<div class="flex gap-2">
				<UButton
					to="/about-us"
					icon="material-symbols:person-outline"
					size="xl"
				>
					About Us
				</UButton>
				<UButton
					to="/careers"
					icon="material-symbols:work-outline"
					size="xl"
				>
					Careers
				</UButton>
			</div>
		</section>
	</div>
</template>

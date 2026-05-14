<script setup lang="ts"></script>

<template>
	<div class="flex flex-col p-6 gap-6 max-w-4xl">
		<div class="flex flex-col gap-4">
			<h2 class="text-3xl font-semibold">About Us</h2>
			<p class="max-w-[80ch]">
				Hot Beans Web started in 2018 with just two developers in a coffee
				shop. Today, we're a full engineering team building fast, reliable
				web applications for a range of clients.
			</p>
			<p class="max-w-[80ch]">
				We care about writing good code, but we care more about the team
				writing it. We prioritise continuous learning and a realistic
				work-life balance over aggressive deadlines and burnout.
			</p>
		</div>

		<div>
			<h3 class="text-2xl font-semibold mb-4">Meet the Team</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<TeamCard
					name="Sarah Jenkins"
					role="Web Dev Team Leader"
					description="Sarah joined three years ago and now leads the main product team. She spends most of her time reviewing PRs, fixing database issues, and keeping the team on track."
				/>
				<TeamCard
					name="David Chen"
					role="Junior Web Developer (Former Apprentice)"
					description="David was our first apprentice. He taught himself HTML and CSS in his spare time while working in retail. Now he's a core developer focused on Vue and accessibility."
				/>
				<TeamCard
					name="Aisha Patel"
					role="Senior Web Developer"
					description="Aisha handles our system architecture and performance. She brought in our automated testing standards and spends a lot of time mentoring the junior devs."
				/>
				<TeamCard
					name="Tom Harris"
					role="Web Dev Apprentice"
					description="Tom is our newest apprentice. He's working closely with Aisha to learn modern JavaScript and is already pushing minor bug fixes to production."
				/>
			</div>
		</div>
	</div>
</template>

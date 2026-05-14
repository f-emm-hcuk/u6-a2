<template>
	<div class="flex flex-col p-6 gap-2 max-w-4xl">
		<h2 class="text-3xl font-semibold">Courses</h2>
		<p class="text-lg">
			Whether you're preparing for an apprenticeship or just want to brush up
			on your skills, there are fantastic free resources available. Here are
			the ones we recommend to our own team:
		</p>

		<div class="flex flex-col gap-4 mt-2 text-base">
			<CourseCard
				title="MDN Web Docs"
				icon="material-symbols:menu-book-outline"
				url="https://developer.mozilla.org/en-US/"
				description="The standard reference for web development. It covers everything from basic HTML to advanced JavaScript APIs."
			/>

			<CourseCard
				title="freeCodeCamp"
				icon="material-symbols:code"
				url="https://www.freecodecamp.org/"
				description="A free curriculum that takes you from beginner to building full-stack apps. You write real code in the browser and earn certifications as you go."
			/>

			<CourseCard
				title="W3Schools"
				icon="material-symbols:school-outline"
				url="https://www.w3schools.com/"
				description="Good for quick tutorials and references. The built-in editor lets you test CSS and JavaScript snippets without setting up a local environment."
			/>

			<CourseCard
				title="The Modern JavaScript Tutorial"
				icon="material-symbols:play-circle-outline"
				url="https://javascript.info/"
				description="An open-source tutorial that explains JavaScript deeply. It breaks down complex concepts clearly and stays updated with the latest language features."
			/>
		</div>
	</div>
</template>

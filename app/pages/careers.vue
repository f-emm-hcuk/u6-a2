<script setup lang="ts"></script>

<template>
	<div class="flex flex-col p-6 gap-2">
		<h2 class="text-3xl font-semibold">Careers</h2>
		<p class="max-w-[80ch]">
			We're growing our engineering department at Hot Beans. We build and
			maintain production web applications, and we're looking for practical,
			collaborative people to join the team at various levels. We value solid
			developers who write good maintainable code and communicate well.
		</p>
		<div class="flex flex-col gap-2">
			<p class="font-bold">
				All of our roles include the following company benefits:
			</p>
			<ul class="list-disc ml-6">
				<li>28 days holiday (plus bank holidays)</li>
				<li>Flexible working hours and hybrid remote options</li>
				<li>Annual training and conference budget</li>
				<li>Standard health and dental cover</li>
			</ul>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
			<JobCard
				title="Web Dev Apprenticeship"
				:description="[
					'A 12-month program to get you started in commercial web development. You will be writing real production code.',
					'Requirements: Basic understanding of HTML, CSS, and JavaScript. You don\'t need a degree, just a portfolio showing a few personal projects and a willingness to learn.',
				]"
				:salary="22_000"
			/>
			<JobCard
				title="Web Designer"
				:description="[
					'Help shape the visual identity of our products. You\'ll be designing user interfaces, creating wireframes, and collaborating closely with our developers to bring designs to life.',
					'Requirements: 3+ years of commercial experience or a strong portfolio. Proficiency in Figma, an eye for accessibility, and a solid understanding of responsive design principles.',
				]"
				:salary="37_000"
			/>
			<JobCard
				title="Junior Web Developer"
				:description="[
					'You\'ll be working on our core web applications, fixing bugs, and building new features as part of the engineering team.',
					'Requirements: 1-2 years of commercial experience. You should be comfortable with JavaScript/TypeScript, a modern framework like Vue or React, and Git version control.',
				]"
				:salary="35_000"
			/>
			<JobCard
				title="Senior Web Developer"
				:description="[
					'Take ownership of complex features from architecture to deployment. You will be making key technical decisions and reviewing PRs.',
					'Requirements: 5+ years experience in web development. Strong knowledge of Vue, REST APIs, database architecture, and testing methodologies.',
				]"
				:salary="70_000"
			/>
			<JobCard
				title="Web Dev Team Leader"
				:description="[
					'Manage a team of 4-6 developers. You will handle 1-on-1s, sprint planning, and technical roadmapping, while maintaining a hands-on role in the codebase.',
					'Requirements: Proven experience managing developers, a solid technical background, and a pragmatic approach to balancing tech debt with feature delivery.',
				]"
				:salary="95_000"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = z.object({
	name: z.string("Name is required"),
	email: z.email("Invalid email"),
	phone: z.string("Phone number is required"),
	job: z.string("Job is required"),
	experience: z.string("Message is required").min(1, "Message is required"),
	why: z.string("Message is required").min(1, "Message is required"),
	cv: z
		.file({ message: "Please upload your CV" })
		.min(1, "CV is required")
		.max(4 * 1024 * 1024, "File must be less than 4MB")
		.mime(
			[
				"application/pdf",
				"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			],
			"Only PDF or DOCX files are allowed",
		),
});

const jobItems = [
	"Web Dev Apprenticeship",
	"Junior Web Developer",
	"Junior Web Designer",
	"Senior Web Developer",
	"Web Dev Team Leader",
];

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
	name: undefined,
	email: undefined,
	phone: undefined,
	job: undefined,
	experience: undefined,
	why: undefined,
	cv: undefined,
});

const toast = useToast();
async function onSubmit(_event: FormSubmitEvent<Schema>) {
	// in the final website this would utilise the useFetch composable (or maybe $fetch) to send the data to the server so it can send an email or similar, but i was forced to make a static site so that isn't viable here
	toast.add({
		id: "submitted",
		title: "Thank you",
		description:
			"Your application has been sent, we'll get back to you soon.",
		color: "success",
	});
}
</script>

<template>
	<div class="flex flex-col p-6 gap-2">
		<h2 class="text-3xl font-semibold">Apply</h2>
		<p class="text-lg">
			Apply for a job listed on our
			<NuxtLink
				class="text-blue-400 hover:text-blue-500 underline underline-offset-3 hover:underline-offset-2 transition-all"
				to="/careers"
				>Careers</NuxtLink
			>
			page.
		</p>
		<UForm
			:schema="schema"
			:state="state"
			class="flex flex-col gap-2"
			@submit="onSubmit"
		>
			<UFormField label="Name" name="name">
				<UInput v-model="state.name" />
			</UFormField>

			<UFormField label="Email" name="email">
				<UInput v-model="state.email" type="email" />
			</UFormField>

			<UFormField label="Phone" name="phone">
				<PhoneInput v-model="state.phone" class="w-59.5" />
			</UFormField>

			<UFormField label="Which job are you applying for?" name="job">
				<USelect
					v-model="state.job"
					class="w-59.5"
					placeholder="Select a job"
					:items="jobItems"
				/>
			</UFormField>

			<UFormField label="What experience do you have?" name="experience">
				<UTextarea v-model="state.experience" autoresize cols="30" />
			</UFormField>

			<UFormField label="Why do you want to work here?" name="why">
				<UTextarea v-model="state.why" autoresize cols="30" />
			</UFormField>

			<UFormField label="Please upload your CV" name="cv">
				<UFileUpload
					v-model="state.cv"
					class="w-fit"
					layout="list"
					accept="application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
					label="Please upload your CV"
					description="PDF or DOCX (max. 4MB)"
					type="file"
				/>
			</UFormField>

			<UButton
				type="submit"
				class="w-fit"
				icon="material-symbols:send-outline"
			>
				Submit
			</UButton>
		</UForm>
	</div>
</template>

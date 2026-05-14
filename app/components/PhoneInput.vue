<script setup lang="ts">
// this component wraps UInput with a list of telephone codes to provide an phone number input with country code selection

// maska library to do input masking, no point writing it myself if a good library exists already
// used by the UInput component
import { vMaska } from "maska/vue";

// same type as in API route, could move into shared/
type PhoneCode = {
	name: string;
	code: string;
	emoji: string;
	dialCode: string;
	mask: string;
};

// allow outputting the phone number itself so it can be used by the form
defineProps<{
	modelValue?: string;
}>();
const emit = defineEmits(["update:modelValue"]);

const phone = ref(undefined);
const countryCode = ref("GB");

// fetch the list of phone codes, handler is in server/api/phone-codes.json.get.ts
const { data: phoneCodes, execute } = await useLazyFetch<PhoneCode[]>(
	"/phone-codes.json",
	{
		key: "api-phone-codes",
		immediate: false,
	},
);

const country = computed(() =>
	phoneCodes.value?.find((c) => c.code === countryCode.value),
);
const dialCode = computed(() => country.value?.dialCode || "+44");
const mask = computed(() => country.value?.mask || "#### ######");

function onOpen() {
	if (!phoneCodes.value?.length) {
		execute();
	}
}

watch(phone, () => {
	emit("update:modelValue", phone.value);
});

watch(countryCode, () => {
	phone.value = undefined;
});
</script>

<template>
	<UFieldGroup>
		<USelectMenu
			v-model="countryCode"
			:items="phoneCodes"
			value-key="code"
			:search-input="{
				placeholder: 'Search country...',
				icon: 'i-lucide-search',
				// loading: status === 'pending',
			}"
			:filter-fields="['name', 'code', 'dialCode']"
			:content="{ align: 'start' }"
			:ui="{
				base: 'pe-8',
				content: 'w-full',
				placeholder: 'hidden',
				trailingIcon: 'size-4',
			}"
			trailing-icon="i-lucide-chevrons-up-down"
			@update:open="onOpen"
		>
			<span class="size-5 flex items-center text-lg">
				{{ country?.emoji ?? "\u{1F1EC}\u{1F1E7}" }}
			</span>

			<template #item-leading="{ item }">
				<span class="size-5 flex items-center text-lg">
					{{ item.emoji }}
				</span>
			</template>

			<template #item-label="{ item }">
				{{ item.name }} ({{ item.dialCode }})
			</template>
		</USelectMenu>

		<UInput
			v-model="phone"
			v-maska="mask"
			:placeholder="mask.replaceAll('#', '_')"
			:style="{ '--dial-code-length': `${dialCode.length + 1.5}ch` }"
			:ui="{
				base: 'ps-(--dial-code-length)',
				leading: 'pointer-events-none text-base md:text-sm text-muted',
			}"
		>
			<template #leading>
				{{ dialCode }}
			</template>
		</UInput>
	</UFieldGroup>
</template>

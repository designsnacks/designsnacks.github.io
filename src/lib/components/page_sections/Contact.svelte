<script lang="ts">
	/*
	 * supports light and dark mode
	 example usage:

	 // add this to the script tag
	 import CTASimpleCentered from '$lib/ui-components/page_sections/cta/CTASimpleCentered.svelte';

	// add this to the markup
	// if buttonHref, linkButtonHref is not set, the button will not be shown
	<CTASimpleCentered
		title="My Great Website"
		subtitle="Such wow. Very Svelte."
		
		buttonHref="start/"
		buttonLabel="Get started"
		linkButtonHref="learn/"
		linkButtonLabel="Learn more"
		id="cta"
	/>
	*/

	import Button from '../elements/buttons/Button.svelte';

	// optional
	export let buttonHref: string | undefined = undefined;
	export let buttonLabel = 'Button';

	export let linkButtonHref: string | undefined = undefined;
	export let linkButtonLabel = 'Button';

	export let id = '';
	let classes = '';
	export { classes as class };

	// required
	export let title: string;
	export let subtitle: string;
</script>

<div class={classes} {id}>
	<div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
				{title}
			</h2>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
				{subtitle}
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				{#if buttonHref}
					<Button href={buttonHref}>{buttonLabel}</Button>
				{/if}
				{#if linkButtonHref}
					<Button variant="neutral_link" href={linkButtonHref } target="_blank" >{linkButtonLabel}</Button>
				{/if}
			</div>
		</div>
	</div>
</div>

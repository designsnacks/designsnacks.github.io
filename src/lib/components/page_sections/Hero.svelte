<script lang="ts">
	/*
	 * supports light and dark mode
	 example usage:

	 // add this to the script tag
	 import HeroImageTiles from '$lib/ui-components/page_sections/hero/HeroImageTiles.svelte';

	// add this to the markup
	 // if buttonHref or linkButtonHref is not set, the button will not be shown
	 <HeroImageTiles 
	 	image="image1.jpg"
		title="My Great Website"
		subtitle="Such wow. Very Svelte."
		
		buttonHref="start/"
		buttonLabel="Get started"
		linkButtonHref="learn/"
		linkButtonLabel="Learn more"
		id="start"
	 />
	*/

	import SkewTriangle from '../backgrounds/SkewTriangle.svelte';
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
	export let image: string;
	export let title: string;
	export let subtitle: string;
</script>

<div class={classes} {id}>
	<SkewTriangle></SkewTriangle>
	<div class="pt-14">
		<div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
			<div
				class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
			>
				<h1
					class="max-w-2xl text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-6xl lg:col-span-2 xl:col-auto"
				>
					{title}
				</h1>
				<div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
					<p class="text-lg leading-8 text-neutral-600 dark:text-neutral-300">
						{subtitle}
					</p>
					<div class="mt-10 flex items-center gap-x-6">
						{#if buttonHref}
							<Button href={buttonHref}>{buttonLabel}</Button>
						{/if}
						{#if linkButtonHref}
							<Button variant="neutral_link" href={linkButtonHref}>{linkButtonLabel}</Button>
						{/if}
					</div>
				</div>
				<img
					src={image}
					alt=""
					class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 dark:bg-neutral-900 bg-neutral-200"
				/>
			</div>
		</div>
	</div>
</div>

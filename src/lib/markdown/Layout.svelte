<script context="module">
	import h1 from './h1.svelte';
	import li from './li.svelte';
	import ul from './ul.svelte';
	export { h1 };
</script>

<div class="px-6 py-32 lg:px-8">
	<div
		class="mx-auto max-w-3xl text-base leading-7 prose dark:prose-invert prose-xl prose-img:rounded-xl prose-img:aspect-video prose-img:object-cover"
	>
		<slot />
	</div>
</div>

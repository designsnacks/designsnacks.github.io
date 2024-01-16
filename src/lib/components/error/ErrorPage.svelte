<script lang="ts">
	import { page } from "$app/stores";

    export let image = 'https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75';
</script>
<main class="relative isolate min-h-full">
	<img
		src={image}
		alt=""
		class="absolute inset-0 -z-10 h-full w-full object-cover object-top opacity-70 dark:opacity-30"
	/>
	<div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8 h-screen">
		<p class="text-base font-semibold leading-8 text-neutral-900 dark:text-white">{$page.status}</p>
		<h1 class="mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
			{$page.error?.message}
		</h1>
		<div class="mt-10 flex justify-center">
			<a href="/" class="text-sm font-semibold leading-7 text-neutral-900 dark:text-white"
				><span aria-hidden="true">&larr;</span> Back to home</a
			>
		</div>
	</div>
</main>

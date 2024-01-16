<script lang="ts">
	/*
	* supports light and dark mode

	example usage:

	// add this to the script tag
	import Navbar from '$lib/ui-components/navigation/Navbar.svelte';
	import type { NavbarItemData } from '$lib/ui-components/navigation/NavbarData';
	const menu: NavbarItemData[] = [
		{
			name: 'Home',
			href: '#top'
		}, {
			name: 'About',
			href: '#about'
		}, {
			name: 'Contact',
			href: '#contact'
		}
	];

	// add this to the markup in your +layout.svelte or +page.svelte (for single page apps, +page.svelte is recommended)
	// you can also choose between a sticky or non-sticky navbar (default) and 
	// if you want to show the theme toggle (light/dark mode) (default: false)
	<Navbar {menu} sticky={false} themeToggle={false}></Navbar>
	*/

	import { onNavigate } from '$app/navigation';
	import Logo from '../elements/icons/Logo.svelte';
	import ThemeToggle from '../elements/icons/ThemeToggle.svelte';
	import type { NavbarItemData } from './NavbarData';

	onNavigate(() => {
		showMenu = false;
	});

	let showMenu = false;

	export let logoHref = '/';
	let classes = '';
	export { classes as class };

	export let sticky = false;
	export let themeToggle = false;
	export let background = true;

	export let menu: NavbarItemData[];
</script>

<header
	class="inset-x-0 w-full top-0 z-50 {background ? 'bg-white dark:bg-neutral-900' : ''} {sticky
		? 'fixed'
		: ''} {classes}"
>
	<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:hidden">
			{#if menu.length > 0}
				<button
					type="button"
					on:click={() => {
						showMenu = true;
					}}
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700 dark:text-neutral-400"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			{/if}
		</div>
		<div class="flex lg:flex-1">
			<a href={logoHref} class="-m-1.5 p-1.5">
				<slot name="logo"><Logo /></slot>
			</a>
		</div>

		<div class="hidden lg:flex lg:gap-x-12">
			{#each menu as item}
				<a
					href={item.href}
					class="text-sm font-semibold leading-6 text-neutral-900 dark:text-white"
				>
					{item.name}
				</a>
			{/each}
		</div>
		<div class="flex lg:flex-1 lg:justify-end space-x-4">
			<slot name="quick_action" />
			{#if themeToggle}
				<ThemeToggle />
			{/if}
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	{#if showMenu}
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-50 bg-white/50 dark:bg-black/50"></div>
			<div
				class="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white dark:bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10 dark:sm:ring-white/10"
			>
				<div class="flex items-center justify-between">
					<button
						type="button"
						on:click={() => {
							showMenu = false;
						}}
						class="-m-2.5 rounded-md p-2.5 text-neutral-700 dark:text-neutral-400"
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>

					<a href={logoHref} class="-m-1.5 p-1.5">
						<slot name="logo"><Logo /></slot>
					</a>

					<div class="lg:flex lg:flex-1 lg:justify-end">
						<slot name="quick_action" />
					</div>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-neutral-500/10">
						<div class="space-y-2 py-6">
							{#each menu as item}
								<a
									href={item.href}
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50 dark:text-white dark:hover:bg-neutral-800"
								>
									{item.name}
								</a>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>

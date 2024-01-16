<script lang="ts">
	import '../app.css';

	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import type { NavbarItemData } from '$lib/components/navigation/NavbarData';

	const menu: NavbarItemData[] = [
		{
			name: 'Home',
			href: '/#home'
		},
		{
			name: 'Projects',
			href: '/#projects'
		},
		{
			name: 'Work',
			href: '/#work'
		},
		{
			name: 'Education',
			href: '/#education'
		},
		{
			name: 'Contact',
			href: '/#contact'
		}
	];
</script>

<Navbar {menu} sticky={true} themeToggle={true}></Navbar>
<slot />

<script lang="ts">
	export let name = 'Your Company';
	export let size = 'w-8';
</script>

<span class="sr-only text-lg">{name}</span>
<slot>
	<div class="text-accent-900 font-semibold text-sm md:text-lg dark:text-accent-500"> Lucas Going </div>  
</slot>
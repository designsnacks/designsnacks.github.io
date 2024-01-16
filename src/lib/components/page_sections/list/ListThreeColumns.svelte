<script lang="ts">
	import type { ListData } from './ListData';

	let classes = '';
	export { classes as class };
	export let id = '';

	// required
	export let title: string;
	export let subtitle: string;

	export let articles: ListData[];
</script>

<div class="py-24 sm:py-32 {classes}" {id}>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
				{title}
			</h2>
			<p class="mt-2 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
				{subtitle}
			</p>
		</div>
		<div
			class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-neutral-200 dark:border-neutral-800 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each articles as article}
				<article class="flex max-w-xl flex-col items-start justify-between">
					<div class="flex items-center gap-x-4 text-xs">
						<div class="text-neutral-500 dark:text-neutral-400">{article.date}</div>
						{#if article.tag}
							<div
								class="relative z-10 rounded-full bg-neutral-50 dark:bg-white/10 px-3 py-1.5 font-medium text-neutral-600 dark:text-neutral-400"
							>
								<!-- hover:bg-neutral-100 dark:hover:bg-white/20 -->
								{article.tag}
							</div>
						{/if}
					</div>
					<div class="group relative">
						<h3
							class="mt-3 text-lg font-semibold leading-6 text-neutral-900 dark:text-white {article.href
								? 'group-hover:text-neutral-600 dark:group-hover:text-neutral-300'
								: ''}"
						>
							{#if article.href}
								<a href={article.href}>
									<span class="absolute inset-0"></span>
									{article.title}
								</a>
							{:else}
								{article.title}
							{/if}
						</h3>
						<p class="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
							{article.description}
						</p>
					</div>
					{#if article.writer}
						<div class="relative mt-8 flex items-center gap-x-4">
							<img
								src={article.writer.avatar}
								alt=""
								class="h-10 w-10 rounded-full bg-neutral-50 dark:bg-neutral-950"
							/>
							<div class="text-sm leading-6">
								<p class="font-semibold text-neutral-900 dark:text-white">
									{#if article.writer.href}
										<a href={article.writer.href}>
											<span class="absolute inset-0"></span>
											{article.writer.name}
										</a>
									{:else}
										{article.writer.name}
									{/if}
								</p>
								<p class="text-neutral-600 dark:text-neutral-400">{article.writer.role}</p>
							</div>
						</div>
					{/if}
				</article>
			{/each}
			<!-- More posts... -->
		</div>
	</div>
</div>

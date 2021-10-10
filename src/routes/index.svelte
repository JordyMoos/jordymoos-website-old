<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import ArticleCard from '$lib/article/ArticleCard.svelte';
</script>

<svelte:head>
	<title>
		Jordy Moos - Enthusiast about FP, Game Programming, Robots, Lasers, Cats and many many more
	</title>
</svelte:head>

<section class="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
	<ArticleCard
		href="/blog/playing-snake-in-my-christmas-tree"
		title="Playing snake in my Christmas Tree"
		image="play-games-in-your-christmas-tree"
	/>
</section>

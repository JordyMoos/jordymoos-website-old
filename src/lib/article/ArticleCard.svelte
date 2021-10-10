<script lang="ts">
	export let title: string = '';
	export let image: string = '';
	export let href: string = '';
</script>

<article class="shadow-xl hover:shadow-2xl">
	<a {href} {title}>
		<figure class="relative max-w-xs cursor-pointer">
			<picture>
				<source srcset="images/blog/{image}.webp" type="image/webp" />
				<source srcset="images/blog/{image}.jpg" type="image/jpeg" />
				<img class="rounded-lg" src="images/blog/{image}.jpg" alt={title} />
			</picture>
			<figcaption class="absolute -mt-64 px-4 text-white text-2xl font-bold text-center">
				<div>
					<h3>{title}</h3>
				</div>
			</figcaption>
		</figure>
	</a>
</article>

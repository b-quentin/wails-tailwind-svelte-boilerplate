<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import Count from '../../modules/Count/index.svelte';
	import api from '../../api';
	import type { IImage } from '../../interfaces';
	export let url: string = '';
	export let loading: boolean = false;

	const getImage = async () => {
		loading = true;
		await api.image
			.getImage()
			.then((response: IImage) => {
				url = response.message;
				loading = false;
			})
			.catch((err: any) => {
				console.log(err);
			});
	};
	onMount(getImage);

	setContext('getImage', getImage);
</script>

<div class="flex flex-col items-center justify-center w-full h-full">
	<Count />
	<div>
		{#if loading}
			<p>Loading...</p>
		{:else}
			<div class="flex w-[200px]"><img src={url} alt="" class="rounded-xl" /></div>
		{/if}
	</div>
</div>

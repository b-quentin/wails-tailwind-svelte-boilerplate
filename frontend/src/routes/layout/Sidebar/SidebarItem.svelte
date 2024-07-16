<script lang="ts">
	import Down from '../../../components/Icon/Sidebar/Down.svelte';
	export let icon: any;
	export let selected: boolean = false;
	export let label: string = '';
	export let count: number;
	export let child: boolean;
	export let open: boolean;
	export let sub: boolean;
</script>

{#if sub === false}
	<div
		class="flex flex-row justify-between items-center rounded-md p-3 hover:text-red-100 text-gray-100 {selected
			? 'bg-dark-300 text-red-100'
			: ''}"
	>
		<div class="flex flex-row gap-4">
			<svelte:component this={icon} />
			<span class="font-normal text-sm">{label}</span>
		</div>
		{#if child}
			<div class={open ? 'rotate-180 transform' : ''}><Down /></div>
		{/if}
	</div>
{:else}
	<div
		class="flex flex-row items-center ml-4 px-4 pt-2 pb-2 gap-2 text-sm text-gray-100 hover:text-red-100 font-medium border-l
			{selected
			? 'bg-gradient-to-r bg-transparent from-[#ff5a5c1a] to-[#ff5a5c00] text-red-100 border-l-red-100'
			: ' border-l-gray-500'}"
	>
		<span>{label}</span>
		<span class="flex items-center justify-center px-2 h-6 bg-dark-400 rounded-xl">{count}</span>
	</div>
{/if}


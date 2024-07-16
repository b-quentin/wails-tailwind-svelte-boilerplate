<script lang="ts">
	export let label = '';
	export let onClick: () => void;
</script>

<button
	type="submit"
	on:click={onClick}
	class="p-2 rounded-lg text-base bg-red-100 cursor-pointer px-8 py-4 font-medium border border-red-100 active:border active:border-gray-400"
	>{label}</button
>

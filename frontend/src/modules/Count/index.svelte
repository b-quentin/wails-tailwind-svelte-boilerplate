<script lang="ts">
	import Button from '../../components/Button/Button.svelte';
	import { getContext } from 'svelte';

	const getImage: any = getContext('getImage');

	const handleClick = () => {
		getImage();
	};
</script>

<div class="flex flex-col items-center">
	<Button onClick={handleClick} label="Change" />
</div>

<script lang="ts">
	import Logo from '../../asset/logo.png';
	import LogoText from '../../asset/logotext.png';
	import Icon from '../../components/Icon/Sidebar/Ring.svelte';
</script>

<div class="flex flex-row w-full h-16 px-4 py-2 justify-between items-center bg-dark-100">
	<div class="flex flex-row gap-4 items-center">
		<img src={Logo} alt="" class="w-8 h-12" />
		<img src={LogoText} alt="" class="h-6" />
	</div>
	<div class="cursor-pointer">
		<Icon />
	</div>
</div>

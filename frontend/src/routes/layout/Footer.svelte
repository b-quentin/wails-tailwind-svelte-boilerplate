<script lang="ts">
	import Social from '../../modules/Social/index.svelte';
	import Logo from '../../asset/logo.png';
	import LogoText from '../../asset/logotext.png';

	import Tw from '../../components/Icon/Footer/Tw.svelte';
	import Face from '../../components/Icon/Footer/Face.svelte';
	import Is from '../../components/Icon/Footer/Is.svelte';
	import Reddit from '../../components/Icon/Footer/Reddit.svelte';
	import Discord from '../../components/Icon/Footer/Discord.svelte';

	export const items = [
		{ link: '', icon: Tw },
		{ link: '', icon: Face },
		{ link: '', icon: Is },
		{ link: '', icon: Reddit },
		{ link: '', icon: Discord }
	];

	export const About = [
		{ label: 'Blog' },
		{ label: 'Terms of Service' },
		{ label: 'Privacy Policy' }
	];

	export const Support = [{ label: 'FAQ' }, { label: 'Contact' }, { label: 'Support' }];
</script>

<div class="flex flex-col w-full bg-dark-500">
	<div class="flex flex-row py-16 px-80">
		<div class="flex flex-col flex-1">
			<div class="flex flex-row gap-4 items-center">
				<img src={Logo} alt="" class="w-8 h-12" />
				<img src={LogoText} alt="" class="h-6" />
			</div>
			<div class="flex flex-col mt-3 text-xs font-medium">
				<span class="text-gray-100">Justearn.gg | All Rights Reserved</span>
				<span class="text-gray-200">@ Copyright 2020 - 2023</span>
			</div>
		</div>
		<div class="flex flex-1 flex-row">
			<div class="flex flex-col flex-1 text-gray-100 font-medium">
				<span class="my-4 text-lg">About</span>
				<div class="flex flex-col gap-2">
					{#each About as { label }}
						<span class="text-base">{label}</span>
					{/each}
				</div>
			</div>
			<div class="flex flex-col flex-1 text-gray-100 font-medium">
				<span class="my-4 text-lg">Support</span>
				<div class="flex flex-col gap-2">
					{#each Support as { label }}
						<span class="text-base">{label}</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-row px-80 py-6 border-t border-t-gray-800 w-full gap-4">
		{#each items as { link, icon }}
			<Social {link} {icon} />
		{/each}
	</div>
</div>

<script>
	import { createDisclosure } from 'svelte-headlessui';
	const refund = createDisclosure({ label: 'Refund Policy', expanded: true });

	import { page } from '$app/stores';
	import { afterUpdate } from 'svelte';
	let current_url = $page.url.pathname;
	afterUpdate(() => {
		current_url = $page.url.pathname;
	});

	import SidebarItem from './SidebarItem.svelte';

	import Earn from '../../../components/Icon/Sidebar/Earn.svelte';
	import Offers from '../../../components/Icon/Sidebar/Offers.svelte';
	import Cashout from '../../../components/Icon/Sidebar/Cash.svelte';
	import Affiliate from '../../../components/Icon/Sidebar/Affiliate.svelte';
	import RPS from '../../../components/Icon/Sidebar/RPS.svelte';

	export const items = [
		{ label: 'Earn', icon: Earn, link: 'earn', children: [] },
		{
			label: 'Offers',
			icon: Offers,
			link: 'offers',
			children: [
				{ label: 'All', link: 'offers/all', count: 20 },
				{ label: 'App', link: 'offers/app', count: 23 }
			]
		},
		{ label: 'Cashout', icon: Cashout, link: 'cashout', children: [] },
		{ label: 'Affiliates', icon: Affiliate, link: 'affiliates', children: [] },
		{ label: 'RPS', icon: RPS, link: 'rps', children: [] }
	];
</script>

<div
	class="flex flex-col w-[250px] bg-dark-100 overflow-y-auto bottom-0 top-16 px-2 py-4  scrollbar-hide"
>
	<div class="flex flex-col gap-5 hover:cursor-pointer">
		{#each items as { label, icon, link, children }}
			{#if children.length > 0}
				<div class="w-full">
					<div use:refund.button>
						<SidebarItem  label={label} selected={current_url.includes(label.toLowerCase())}	icon={icon} child={true} open={$refund.expanded} sub={false} count={0}/>
					</div>	
					{#if $refund.expanded}
						<div class="mt-4">
							{#each children as { label, link, count }}
								<a href="/{link}">
									<div use:refund.panel>
										<SidebarItem  label={label} selected={current_url.includes(label.toLowerCase())}	icon={icon} child={true} open={$refund.expanded} count={count} sub={true}/>
									</div>
								</a>
							{/each}
						</div>
					{/if}
				</div>
			{:else}
				<a href="/{link}">
					<SidebarItem label={label} selected={current_url.includes(label.toLowerCase())}	icon={icon} child={false} open={false} sub={false} count={0}/>					
				</a>
			{/if}
		{/each}
	</div>
</div>

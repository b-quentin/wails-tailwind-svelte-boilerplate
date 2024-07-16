<script lang="ts">
  export let icon:any
  export let link:string
</script>


<span class="bg-dark-200 p-3 rounded-full text-gray-100">
  <a href={link}><svelte:component this={icon} /></a>
</span>
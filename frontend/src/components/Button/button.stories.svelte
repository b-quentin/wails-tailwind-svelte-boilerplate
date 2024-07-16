<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
</script>

<Meta title="Button" component={Button} />

<Template let:args>
	<Button type="button" {...args} />
</Template>

<Story name="Primary">
	<Button label="Button" />
</Story>

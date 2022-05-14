<script lang="ts">
import { onMount } from 'svelte';

	
	import Engine from './engine'
	let str: string = "";
	let width : number;
	let height: number;
	let output: HTMLElement;

	
	let finalStr: string = ''
	let changeable = false;
	onMount(()=>{
		changeable = true;
	})
	$: finalStr = Engine(str);

	function changeFunc(text){
		if (changeable )
			output.innerHTML = text;
	}
	$: changeFunc(finalStr);

</script>
<svelte:window bind:innerWidth={width} bind:innerHeight={height}></svelte:window>
<style>

	div{
		transition: all 0.2s ease;
	}
	.output{
		background-color: rgb(255, 235, 235);
		box-shadow:inset  2px 2px 10px rgba(0,0,0,0.1);
		padding: 10px;
	}
	.container-vert {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.container-hor{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.vert{
		width:95vw;
		height:46vh;
	}
	.hor{
		width:47vw;
		height:92vh;
	}
</style>
<div class="container-{width>height?"hor":"vert"}">
	<div bind:this={output} class="{width>height?"hor":"vert"} output" > 
	</div>
	<div class="{width>height?"hor":"vert"} input" >
		<textarea placeholder="Type here"  bind:value={str}></textarea>

	</div>
</div>
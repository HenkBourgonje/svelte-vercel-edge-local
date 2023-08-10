<script lang="ts">
	function getter() {
		let res = fetch('/api/init_data', {
			method: 'POST',
		})

		console.log(res)
	}
</script>

<button on:click={getter}>Trigger Edge Function</button>
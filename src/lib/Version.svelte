<script>
  import Circle from "$lib/Circle.svelte";
  import DownloadButton from "$lib/DownloadButton.svelte";
  export let text;
  export let href;
</script>

<div class="flex items-center">
  <Circle {text} />
  <div class="bg-gray-600 h-1 w-12" />
  <div>
    <DownloadButton {href} />
  </div>
</div>

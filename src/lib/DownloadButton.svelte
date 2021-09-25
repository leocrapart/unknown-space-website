<script>
  import DownloadIcon from "$lib/DownloadIcon.svelte";
  export let href;
</script>

<a
  {href}
  target="_blank"
  class="inline-flex bg-gray-600 text-gray-300 hover:bg-gray-500  px-4 py-2 rounded"
>
  <DownloadIcon />
  <div class="font-semibold">Download</div>
</a>

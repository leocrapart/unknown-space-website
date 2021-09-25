<script>
  import Version from "../lib/Version.svelte";

  const versions = [
    { name: "v1", url: "https://google.com" },
    { name: "v2", url: "https://google.com" },
    { name: "v3", url: "https://google.com" },
  ];
</script>

<svelte:head>
  <title>Unknown space</title>
</svelte:head>

<div class="background h-screen">
  <div
    class="flex justify-center text-3xl font-bold italic
                bg-gray-400 p-4"
  >
    Unknown space
  </div>

  <br />
  <br />
  <br />

  <div class="flex justify-center items-start">
    <div>
      {#each versions as version, i}
        <Version text={version.name} href={version.url} />

        <!-- if not last version -->
        {#if i + 1 < versions.length}
          <!-- midline -->
          <div class="ml-7 h-12 w-2 bg-gray-600" />
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  .background {
    background-color: #d9d1e5;
    background-image: url("/topography.svg");
  }
</style>

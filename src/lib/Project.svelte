<script lang="ts">
  export let name: string;
  export let description: string;
  export let backgroundURL: string;
  export let href: string;
</script>

<a
  {href}
  target="_blank"
  style={`background-image: url("${backgroundURL}");`}
  class="flex overflow-hidden transition-shadow bg-center bg-cover rounded-md shadow cursor-pointer group hover:shadow-md"
>
  <div
    class="flex flex-col w-full p-4 transition-colors bg-black bg-opacity-50 shadow md:w-auto group-hover:bg-opacity-60"
  >
    <h1 class="text-xl font-semibold text-white">{name}</h1>
    <p class="text-white truncate">{description}</p>
  </div>
</a>

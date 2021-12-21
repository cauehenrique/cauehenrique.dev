<script>
  import Project from "$lib/Project.svelte";
  import projects from "../projects";

  const age = new Date().getFullYear() - 2004;
</script>

<section class="flex items-center">
  <img src="https://github.com/cauehenrique.png" alt="Cauê Henrique" class="w-20 h-20 rounded-lg" />
  <div class="w-full ml-6">
    <h1 class="text-3xl font-bold">Cauê Henrique</h1>
    <h2 class="text-neutral-600">Front end developer that loves creating things</h2>
  </div>
</section>
<section class="space-y-5">
  <p>
    Hey, I've been studying development since 12 years old <span class="italic">(I'm {age})</span>. Through this
    journey, I found out that my passion is to write code and develop solutions to help others solve their problems.
  </p>
  <p>
    I made few games through my journey and even <a
      href="https://store.steampowered.com/app/1731730/Snowyland"
      target="_blank">published one to Steam</a
    >! After a couple years playing around with game development, I discovered a thing called
    <span class="italic">HTML</span> and decided to give it a try, since that, I fell in love with web development.
  </p>
</section>
<section>
  <h1>Projects</h1>
  <h2>Take a look where my hands already touched!</h2>
  <div class="grid grid-flow-row gap-2 auto-rows-fr">
    {#each projects as project}
      <Project {...project} />
    {/each}
  </div>
  <div class="flex justify-end mt-2">
    <a href="https://github.com/cauehenrique" target="_blank">More on GitHub...</a>
  </div>
</section>
<section>
  <h1>Contact</h1>
  <h2>Wanna see your project on the list above?</h2>
  <p>
    Unfortunately I don't have an commercial e-mail, so you can contact me through <a
      href="mailto:caue313@gmail.com"
      target="_blank">caue313@gmail.com</a
    >
    or preferably through my Discord <span class="italic">Cauê#4623</span>. I also have a Twitter account (<a
      href="https://twitter.com/cauehsf">@cauehsf</a
    >) where I often retweet game development related stuff.
  </p>
</section>

<style>
  a {
    @apply text-blue-500 hover:text-blue-600 hover:underline cursor-pointer;
  }

  section {
    @apply mb-6;
  }

  section > h1 {
    @apply text-2xl font-bold;
  }

  section > h2 {
    @apply mb-4 text-neutral-600;
  }
</style>

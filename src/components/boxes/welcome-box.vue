<template>
  <div class="font-inter w-1/3 align-self-center">
    <div id="text" class="flex flex-column place-self-center gap-3">
      <p class="text-left text-sm font-normal text-grays-2">{{ title }}</p>
      <h2 class="font-semibold text-left text-2xl text-grays-1">{{ subtitle }}</h2>
      <p class="text-xs text-grays-2" v-html="description"></p>
      <button
        class="rounded-sm text-xs bg-greens-1 font-semibold w-1/3 p-2 mt-2 text-blacks-1"
        @click="$emit('click')">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    title: String,
    subtitle: String,
    description: String,
    buttonText: String,
    onClick: Function,
  },
};
</script>

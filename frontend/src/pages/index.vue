<script setup lang="ts">
import { success } from '@/helpers/display';
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
      Boilerplate with Shadcn, Tanstack Query, and more.
    </h1>
    <Button @click="success('Success', 'You clicked me')">Click me</Button>
  </div>
</template>
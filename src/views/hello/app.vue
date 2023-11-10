<script setup lang="ts">
import { ref } from 'vue'
import { i18n } from '@das-fe/web'

const editText = i18n('edit')
const msg = ref('vite + vue + das-fe')
const clickOutText = i18n('click-out')
const readTheDemoText = i18n('read-the-demo')
const starterText = i18n('starter')
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>
      {{ editText }}
    </p>
  </div>

  <p>
    {{ clickOutText }}
    <a href="http://docs.chn-das.com" target="_blank">达实文档中心</a>, {{ starterText }}
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <router-link to="/demo">
    <p class="read-the-demo">{{ readTheDemoText }}</p>
  </router-link>
</template>

<style>
.read-the-demo {
  color: #888;
  /* font-size: 14px; */
  font-weight: 400;
}
</style>

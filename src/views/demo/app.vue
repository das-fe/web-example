<template>
  <h2>
    {{ msg }}
  </h2>
  <div>{{ componentMsg }}</div>
  <div class="alert-container">
    <div v-for="item in ['info', 'success', 'warning', 'error']" :key="item" class="alert-item">
      <das-alert show-icon :message="`${item} Text`" :type="item" />
    </div>
  </div>

  <a href="http://aiot-ui.rd.chn-das.com/das-ui" target="_blank">
    <p class="read-the-docs">{{ docTip }}</p>
  </a>
</template>

<script setup lang="ts">
import { i18n, setLang, setTheme } from '@das-fe/web'
import { DasAlert } from '@das-fe/ui'
const msg = i18n('demo-msg')
const componentMsg = i18n('demo-component-msg')
const docTip = i18n('demo-doc-tip')
</script>

<style>
.alert-container {
  background: var(--demo-alert-bg);
  color: var(--demo-alert-color);
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  box-sizing: border-box;
  height: auto;
  min-width: 600px;
}
.alert-item {
  margin-top: 20px;
}
.alert-item:first-child {
  margin-top: 0;
}
.read-the-docs {
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
}
</style>

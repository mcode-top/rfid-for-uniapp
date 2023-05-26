<template>
  <view class="index-page">
    <text>
      {{ JSON.stringify(deviceStore.currentReadTag) }}
    </text>
  </view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useDeviceStore } from '@/store'

const deviceStore = useDeviceStore()

const message = ref('b1112bc1')
</script>

<style scoped>
.index-page {
  width: 100%;
  font-style: normal;
  text-align: center;
  display: inline-block;
  white-space: pre-wrap;
  word-wrap: break-word;
  height: auto;
  padding: 10rpx;
}

.h2 {
  color: green;
  font-size: 50rpx;
}

navigator {
  color: #1e80ff;
}
</style>

<script lang="ts" setup>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { useDeviceStore } from '@/store'

const deviceStore = useDeviceStore()
onLaunch(() => {
  uni.uhfModule.openKeyDownService()
  uni.uhfModule.addEventListener('keyDown', (event) => {
    console.log(event, '2')
    if (event.data.keyCode === 280) {
      uni.uhfModule.readSingleTag((data) => {
        console.log(data)
        deviceStore.setCurrentReadTag(data)
      })
    }
  })
  console.log('App onLaunch', uni.uhfModule)
})
onShow(() => {
  console.log('App onShow')
  uni.uhfModule.openUHF()
})
onHide(() => {
  console.log('App onHide')
  uni.uhfModule.closeUHF()
})
</script>
<style lang="scss">
@import 'vk-uview-ui/index.scss';
</style>

<template>
  <div>
    <a-modal :open="showPopup" @ok="handleOk" :onCancel="handleCancel">
      <template #title>
          <div><i class="fas fa-wine-glass-alt"></i> 1111111111111</div>
      </template>
      <template #footer>
        <a-button key="back" @click="handleCancel">{{ $t('text.cancel') }}</a-button>
        <a-button
          key="submit"
          type="primary"
          @click="handleOk"
          >{{ $t('text.ok') }}</a-button
        >
      </template>
      <div>
        <slot name="content"></slot>
      </div>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const emits = defineEmits(["closePopup", "submitPopup"])
interface props {
  showPopup: any;
}
const propsData = withDefaults(defineProps<props>(), {
  showPopup: false,
});

const handleOk = () => {
  emits('submitPopup', true)
};

const handleCancel = () => {
  emits('closePopup', false)
};
</script>

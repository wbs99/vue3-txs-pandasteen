import { defineComponent } from 'vue';
export const Second = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>second</div>
    )
  }
})
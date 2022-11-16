import { defineComponent } from 'vue';
export const NotFoundPage = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>not found</div>
    )
  }
})
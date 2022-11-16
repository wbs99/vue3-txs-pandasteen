import { defineComponent } from 'vue';
export const FooPages = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>foo</div>
    )
  }
})
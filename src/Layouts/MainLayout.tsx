import { defineComponent, PropType } from 'vue';
import { Navbar } from '../components/NavBar';
export const MainLayout = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, { slots }) => {
    return () => (
      <div>
        <Navbar>
          {{
            title: () => slots.title?.(),
            icon: () => slots.icon?.()
          }}
        </Navbar>
        {slots.default?.()}
      </div>
    )
  }
})
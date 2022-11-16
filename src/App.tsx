import { defineComponent, ref } from "vue"

export const App = defineComponent({
  setup() {
    const count = ref(0)
    const onClick = () => {
      count.value += 1
    }
    return () => (
      <>
        <div>{count.value}</div>
        <button onClick={onClick}>+1</button>
      </>
    )
  },
})
import { defineComponent } from 'vue';
import { Button } from '../components/Button';
import { FloatButton } from '../components/FloatButton';
import s from './StartPage.module.scss'

export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log('点击了')
    }
    return () => (
      <div>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>测试</Button>
        </div>
        <FloatButton />
      </div>
    )
  }
})
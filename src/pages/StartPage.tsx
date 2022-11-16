import { defineComponent } from 'vue';
import { Button } from '../components/Button';
import { Center } from '../components/Center';
import { FloatButton } from '../components/FloatButton';
import { Icon } from '../components/Icon';
import s from './StartPage.module.scss'

export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log('点击了')
    }
    return () => (
      <div>
        <nav>menu</nav>
        <Center class={s.pig_wrapper}>
          <Icon name='welcome1' class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>测试</Button>
        </div>
        <FloatButton iconName='add' />
      </div>
    )
  }
})
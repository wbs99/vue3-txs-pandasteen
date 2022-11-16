import { defineComponent } from 'vue';
import { Button } from '../components/Button';
import { Center } from '../components/Center';
import { FloatButton } from '../components/FloatButton';
import { Icon } from '../components/Icon';
import { Navbar } from '../components/NavBar';
import s from './StartPage.module.scss'

export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log('点击了')
    }
    return () => (
      <div>
        <Navbar>
          {{
            icon: () => <Icon name='menu' class={s.navIcon} />,
            title: () => '熊猫记账'
          }}
        </Navbar>
        <Center class={s.pig_wrapper}>
          <Icon name='welcome1' class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>开始记账</Button>
        </div>
        <FloatButton iconName='add' />
      </div>
    )
  }
})
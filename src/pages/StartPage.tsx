import { defineComponent, ref } from 'vue';
import { AsideMenu } from '../components/AsideMenu';
import { Button } from '../components/Button';
import { Center } from '../components/Center';
import { FloatButton } from '../components/FloatButton';
import { Icon } from '../components/Icon';
import { Navbar } from '../components/NavBar';
import s from './StartPage.module.scss'

export const StartPage = defineComponent({
  setup: (props, context) => {
    const menuVisible = ref(false)
    const onClickMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return () => (

      <div>
        <Navbar>
          {{
            title: () => '熊猫记账',
            icon: () => <Icon name='menu' class={s.navIcon} onClick={onClickMenu} />
          }}
        </Navbar>
        <Center class={s.pig_wrapper}>
          <Icon name='welcome1' class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button}>开始记账</Button>
        </div>
        <FloatButton iconName='add' />
        {menuVisible.value && <AsideMenu onClose={() => { menuVisible.value = false }} />}
      </div>
    )
  }
})
import { defineComponent, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { AsideMenu } from '../components/AsideMenu';
import { Button } from '../components/Button';
import { Center } from '../components/Center';
import { FloatButton } from '../components/FloatButton';
import { Icon } from '../components/Icon';
import { MainLayout } from '../Layouts/MainLayout';
import s from './StartPage.module.scss'

export const StartPage = defineComponent({
  setup: (props, context) => {
    const menuVisible = ref(false)
    const onClickMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return () => (
      <MainLayout>
        {{
          title: () => '熊猫记账',
          icon: () => <Icon name='menu' class={s.navIcon} onClick={onClickMenu} />,
          default: () => <>
            <Center class={s.pig_wrapper}>
              <Icon name='welcome1' class={s.pig} />
            </Center>
            <div class={s.button_wrapper}>
              <RouterLink to="/items/create">
                <Button class={s.button}>开始记账</Button>
              </RouterLink>
            </div>
            <RouterLink to="/items/create">
              <FloatButton iconName='add' />
            </RouterLink>
            {menuVisible.value && <AsideMenu onClose={() => { menuVisible.value = false }} />}
          </>
        }}
      </MainLayout>
    )
  }
})
import { defineComponent, PropType } from 'vue';
import { MainLayout } from '../../Layouts/MainLayout';
import { Icon } from '../Icon';
import s from './ItemCreate.module.scss';
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <MainLayout>
        {{
          title: () => '记一笔',
          icon: () => <Icon name='left' class={s.navIcon} />,
          default: () => <>
            <div>你好</div>
          </>
        }}
      </MainLayout>
    )
  }
})
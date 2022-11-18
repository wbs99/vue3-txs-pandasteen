import { computed, defineComponent, onMounted, PropType, reactive, ref } from 'vue';
import { FormItem } from '../Form';
import s from './Charts.module.scss';
import * as echarts from 'echarts';
import { PieChart } from './PieChart';
import { Bars } from './Bars';
import { LineChart } from './LineChart';

export const Charts = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true
    },
    endDate: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup: (props, context) => {
    const category = ref('expenses')
    const options = reactive([
      { value: 'expenses', text: '支出' },
      { value: 'income', text: '收入' }
    ])

    return () => (
      <div class={s.wrapper}>
        <FormItem
          label='类型'
          type="select"
          v-model={category.value}
          options={options}
        />
        <LineChart />
        <PieChart />
        <Bars />
      </div>
    )
  }
})
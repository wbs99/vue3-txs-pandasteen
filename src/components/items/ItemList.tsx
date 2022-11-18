import { defineComponent, reactive, ref } from 'vue';
import { TimeTabsLayout } from '../../Layouts/TimeTabsLayout';
import { Time } from '../../shared/time';
import { ItemSummary } from './ItemSummary';
export const ItemList = defineComponent({

  setup: (props, context) => {

    return () => (
      <TimeTabsLayout component={ItemSummary} />
    )
  }
})
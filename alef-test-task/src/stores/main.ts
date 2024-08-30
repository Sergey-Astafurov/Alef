import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter} from 'vue-router';

export const useMainStore = defineStore('main', () => {
  const route = useRouter();
  const childrenList = ref<children[]>([
  ]);

  function deleteChild(index: number) {
    childrenList.value.splice(index, 1);
  }
  const isSubmit = ref(false);
  const name = ref('');
  const age = ref(0);
  const onSubmit = () => {
    isSubmit.value = true
    route.push('/preview')
  }
  type children = {name: string, age: number|string};
  function addChild() {
    return childrenList.value.length < 5 ? childrenList.value.push({name: '', age: ''}) : null;
  }

  return {addChild, onSubmit, childrenList, name, age, deleteChild, isSubmit}
})

<template>
  <div class="container mx-auto">
    <div class="flex mx-auto w-1/2">
      <h1 class="font-bold text-base mb-5">Персональные данные</h1>
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="form w-full mx-auto mb-5">
        <form class="mx-auto flex flex-col gap-3" @submit.prevent="mainStore.onSubmit">
          <div class="w-1/2 mx-auto form-control">
            <label for="namePerson">Имя</label>
            <input
              v-model="mainStore.name"
              type="text"
              class="border w-full py-6"
              id="namePerson"
              aria-describedby="emailHelp"
              placeholder="Имя"
            />
          </div>
          <div class="form-control w-1/2 mx-auto">
            <label for="agePerson">Возраст</label>
            <input
              v-model="mainStore.age"
              type="number"
              class="border w-full py-6"
              id="agePerson"
              aria-describedby="emailHelp"
              placeholder="Возраст"
            />
          </div>
        </form>
      </div>
      <div class="w-1/2 add-child flex justify-between mb-3">
        <h1 class="text-base">Дети(макс.5)</h1>
        <button v-if="mainStore.childrenList.length < 5? true : false"
          @click="mainStore.addChild"
          class=" text-blue-500 border rounded-full px-3 py-2 "
        >
          + Добавить ребенка
        </button>
      </div>
        <ul class="mb-6 flex justify-center w-1/2 flex-wrap">
          <li class="flex w-full justify-center gap-3 mb-3" v-for="(children, index) in mainStore.childrenList" :key="index">
            <div class="form-control md:w-64">
              <label for="name">Имя</label>
              <input
                v-model="children.name"
                type="text"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Имя"
              />
            </div>
            <div class="form-control md:w-64 ">
              <label for="age">Возраст</label>
              <input
                v-model="children.age"
                type="number"
                id="age"
                placeholder="Возраст"
              />
            </div>
            <button @click="mainStore.deleteChild(index)" class="text-blue-500">Удалить</button>
          </li>
        </ul>
        <div class="container w-1/2 mx-auto">

          <button :disabled="mainStore.name.trim.length == 0 && mainStore.age <= 0" @click="mainStore.onSubmit" class="items-start flex-1 content-start mr-auto px-5 py-3 rounded-3xl bg-blue-500 text-white text-base disabled:cursor-no-drop disabled:bg-slate-200 disabled:text-black">
            Сохранить
          </button>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import {ref, computed} from 'vue';
// import { useRouter} from 'vue-router';
// const route = useRouter();
// const childrenList = ref<children[]>([
// ]);

// function deleteChild(index: number) {
//   childrenList.value.splice(index, 1);
// }
// const name = ref('');
// const age = ref(0);
// const onSubmit = () => {
//   console.log(name.value, age.value, childrenList.value);
//   route.push('/preview')
// }
// type children = {name: string, age: number|string};
// function addChild() {
//   return childrenList.value.length < 5 ? childrenList.value.push({name: '', age: ''}) : null;
// }
import {useMainStore} from '../stores/main';
const mainStore = useMainStore();
</script>

<style scoped>
.form-control {
  /* width: 616px; */
  position: relative;
}

.form-control input {
  display: blocl;
  outline: none;
  width: 100%;
  background: #fff;
  border: 1px solid #f1f1f1;
  padding: 26px 16px 6px 16px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

.form-control label {
  cursor: pointer;
  display: block;
  position: absolute;
  left: 17px;
  top: 7px;
  color: #aaa;
  font-size: 13px;
}
</style>

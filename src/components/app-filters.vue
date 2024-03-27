<template>
  <div class="filters-wrp d-flex">
    <component
      :is="filter.component"
      v-for="(filter, idx) in filtersList"
      :key="`filter${idx}`"
      :placeholder="filter.placeholder"
    />
  </div>
</template>

<script>
import AppInput from "./fields/app-input.vue";
import AppSelect from "./fields/app-select.vue";
export default {
  data() {
    return {
      filtersList: [
        {
          component: AppInput,
          placeholder: "Дата платежа",
        },
        {
          component: AppSelect,
          placeholder: "Источник платежа",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.filters-wrp {
  grid-gap: 20px;
  margin: 20px 0;
  align-items: center;
}
</style>

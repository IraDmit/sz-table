<template>
  <div class="filters-wrp d-flex">
    <component
      :is="filter.component"
      v-for="(filter, idx) in filtersList"
      :key="`filter${idx}`"
      :placeholder="filter.placeholder"
      :title="filter.title"
      @updateParams="updateParams"
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
          title: "Дата платежа",
          placeholder: "",
        },
        {
          component: AppSelect,
          title: "Источник платежа",
          placeholder: "Все платежи",
        },
      ],
      params: {
        date: null,
        source_id: null,
      },
    };
  },
  methods: {
    async updateParams(key, value) {
      this.params[key] = value;
      const strParams = await this.createFilterString();
      this.$emit("updateFilter", strParams);
    },
    createFilterString() {
      return `?${Object.entries(this.params)
        .reduce((acc, [key, value]) => {
          if (value) {
            acc.push(`${key}=${value}`);
          }
          return acc;
        }, [])
        .join("&")}`;
    },
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

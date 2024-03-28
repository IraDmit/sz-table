<template>
  <div class="icons-filter d-flex flex-column">
    <img
      src="../../assets/img/arrow.svg"
      alt="arr"
      @click="setSortingInfo({ field: fieldSort, type: 'asc' })"
    />
    <img
      src="../../assets/img/arrow.svg"
      alt="arr"
      class="rotate"
      @click="setSortingInfo({ field: fieldSort, type: 'desc' })"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    fieldSort: {
      type: String,
      default: "",
    },
  },
  methods: {
    ...mapActions(["setSortingInfo"]),
  },
};
</script>

<style lang="scss" scoped>
.icons-filter {
  img {
    height: 10px;
    width: 10px;
    cursor: pointer;

    &:hover {
      transform: scale(1.4);
    }
  }

  img.rotate {
    transform: rotate(180deg);

    &:hover {
      transform: rotate(180deg) scale(1.4);
    }
  }
}
</style>

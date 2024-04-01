<template>
  <ValidationProvider
    v-slot="{ errors }"
    tag="div"
    class="field mb-3"
    :name="name"
    :rules="rules"
    :custom-messages="{ required: errorText }"
  >
    <label for="modal-select" class="form-label"
      ><span>*</span>{{ title }}</label
    >
    <select
      class="form-select"
      id="modal-select"
      :class="{
        'is-invalid': errors.length,
      }"
      v-model="inputValue"
    >
      <option :value="null">{{ placeholder }}</option>

      <option
        :value="option.id"
        v-for="(option, idx) in options"
        :key="'option' + idx"
      >
        {{ option.title }}
      </option>
    </select>
    <div class="error" v-if="errors.length">
      {{ errors[0] }}
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationProvider,
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "placeholder",
    },
    title: {
      type: String,
      default: "title",
    },
    errorText: {
      type: String,
      default: "error",
    },
    showError: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "name",
    },
    clearValue: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      inputValue: null,
    };
  },
  computed: {
    isFieldValid() {
      return !!this.inputValue;
    },
  },
  created() {
    this.$emit("updateValue", this.name, this.inputValue);
  },
  watch: {
    inputValue() {
      this.$emit("updateValue", this.name, this.inputValue);
    },
    clearValue(n, o) {
      if (!o && n) {
        this.inputValue = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.field {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  padding: 10px;

  .form-label {
    span {
      color: #ff3333;
    }

    text-align: end;
  }
}

.error {
  color: #ff3333;
  grid-column: 1 / span 2;

  position: absolute;
  bottom: -20%;

  right: 0;
}
</style>

<template>
  <ValidationProvider
    v-slot="{ errors }"
    tag="div"
    :name="name"
    class="field mb-3"
    :rules="rules"
    :custom-messages="{ required: errorText }"
  >
    <label for="modal-input" class="form-label"
      ><span>*</span>{{ title }}</label
    >
    <input
      :type="type"
      class="form-control"
      id="modal-input"
      v-model="value"
      :placeholder="placeholder"
      :class="{
        'is-invalid': errors.length,
      }"
      :name="name"
      @input="updateValue"
    />
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
    type: {
      type: String,
      default: "text",
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
      value: null,
    };
  },
  watch: {
    clearValue(n, o) {
      if (!o && n) {
        this.value = null;
      }
    },
  },
  methods: {
    updateValue() {
      this.$emit("updateValue", this.name, this.value);
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

<template>
  <div class="modal-backdrop" v-if="showModal">
    <div class="modal" :class="{ show: showModal }">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Добавление нового платежа</h5>
            <div class="btn-close" @click="$emit('closeModal')"></div>
          </div>
          <ValidationObserver
            class="modal-body"
            tag="form"
            @submit.prevent="handleSubmit(submitForm)"
            ref="formObserver"
            v-slot="{ handleSubmit }"
          >
            <component
              v-for="(field, idx) in fieldsList"
              :key="'field' + idx"
              :rules="field.rules"
              :is="field.component"
              :placeholder="field.placeholder"
              :options="field.options"
              :title="field.title"
              :errorText="field.errorText"
              :type="field.type"
              :name="field.name"
              v-model="formData[field.name]"
              :clear-value="clearValues"
              @updateValue="updateValue"
            ></component>
            <div class="modal-footer d-flex justify-content-between">
              <div class="btn btn-secondary" @click="$emit('closeModal')">
                Отменить
              </div>
              <div
                class="btn btn-primary"
                :disabled="!isFormValid"
                @click="submitForm"
              >
                Добавить оплату
              </div>
            </div>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import { mapGetters } from "vuex";
import { sendData } from "../../services";
import ModalInput from "../dinamic-form/fields/modal-input.vue";
import ModalSelect from "../dinamic-form/fields/modal-select.vue";
import * as rules from "vee-validate/dist/rules";

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
export default {
  components: { ValidationObserver, ValidationProvider },
  props: {
    showModal: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      showError: false,
      formData: {},
      clearValues: false,
    };
  },
  computed: {
    ...mapGetters(["getTypes", "getStatuses", "getSources"]),
    fieldsList() {
      return [
        {
          component: ModalInput,
          title: "Клиент",
          placeholder: "Введите ФИО",
          errorText: "Пожалуйста, введите клиента",
          type: "text",
          name: "client",
          rules: { required: true },
        },
        {
          component: ModalInput,
          title: "Договор №",
          placeholder: "Введите номер договора",
          errorText: "Пожалуйста, введите номер договора",
          type: "text",
          name: "contract",
          rules: { required: true },
        },
        {
          component: ModalSelect,
          title: "Тип оплаты",
          placeholder: "Не выбрано",
          errorText: "Пожалуйста, выберите тип оплаты",
          options: this.getTypes,
          name: "type_id",
          rules: { required: true },
        },
        {
          component: ModalInput,
          title: "Дата оплаты",
          errorText: "Пожалуйста, введите дату оплаты",
          type: "date",
          name: "date",
          rules: { required: true },
        },
        {
          component: ModalInput,
          title: "Сумма оплаты",
          placeholder: "Введите сумму",
          errorText: "Пожалуйста, введите сумму оплаты",
          type: "number",
          name: "summ",
          rules: { required: true },
        },
        {
          component: ModalSelect,
          title: "Источник платежа",
          placeholder: "Не выбрано",
          errorText: "Пожалуйста, выберите источник платежа",
          options: this.getSources,
          name: "source_id",
          rules: { required: true },
        },
        {
          component: ModalSelect,
          title: "Статус",
          placeholder: "Не оплачено",
          errorText: "Пожалуйста, выберите статус",
          options: this.getStatuses,
          name: "status_id",
          rules: { required: true },
        },
      ];
    },
    isFormValid() {
      if (!Object.keys(this.formData).length) return false;
      return Object.values(this.formData).every((value) => !!value);
    },
  },
  methods: {
    async submitForm() {
      const isValidForm = await this.$refs.formObserver.validate();
      console.log(isValidForm);
      if (isValidForm) {
        const data = sendData(this.formData);
        this.$emit("updateData", data);
        this.$emit("closeModal");
        this.clearForm();
      }
    },
    clearForm() {
      this.$refs.formObserver.reset();
      Object.keys(this.formData).forEach((key) => {
        this.formData[key] = null;
      });
      this.clearValues = true;
      setTimeout(() => {
        this.clearValues = false;
      }, 300);
    },
    updateValue(key, newValue) {
      this.$set(this.formData, key, newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal.show {
  display: block;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1040;
}
</style>

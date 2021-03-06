import { App, ComponentCustomProperties } from 'vue';
import {
  ElAlert,
  ElAutocomplete,
  ElButton,
  ElButtonGroup,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElSelect,
  ElDialog,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputNumber,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElOptionGroup,
  ElPopconfirm,
  ElPopover,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElLoading,
  ElUpload,
  ElTable,
  ElTableColumn
} from 'element-plus';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: typeof ElMessage;
    $confirm: typeof ElMessageBox.confirm;
  }
}

const components = [
  ElAlert,
  ElAutocomplete,
  ElButton,
  ElButtonGroup,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElSelect,
  ElDialog,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputNumber,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElOptionGroup,
  ElPopconfirm,
  ElPopover,
  ElUpload,
  ElTable,
  ElTableColumn
];

const plugins = [ElMessage, ElMessageBox, ElNotification, ElLoading];

export default {
  install(app: App) {
    components.forEach(component => {
      app.component(component.name, component);
    });

    plugins.forEach(plugin => {
      app.use(plugin as any);
    });
  }
};

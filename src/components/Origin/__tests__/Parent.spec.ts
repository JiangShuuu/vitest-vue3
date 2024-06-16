import {it, expect, vi} from 'vitest'
import {mount, flushPromises} from '@vue/test-utils'
import Parent from '../Parent.vue'

it('should render the form and handle validation', async () => {
  const wrapper = mount(Parent);

  // 找到所有需要的元素
  const passInput = wrapper.find('[data-test="pass"]');
  const checkPassInput = wrapper.find('[data-test="checkPass"]');
  const ageInput = wrapper.find('[data-test="age"]');
  const submitButton = wrapper.find('[data-test="submit"]');
  const result = wrapper.find('[data-test="result"]');

  // 初始狀態應該是空的
  expect(passInput.exists()).toBe(true);
  expect(checkPassInput.exists()).toBe(true);
  expect(ageInput.exists()).toBe(true);
  expect(submitButton.exists()).toBe(true);
  expect(result.exists()).toBe(true);
  expect(result.text()).toBe('');

  // 填寫表單，驗證通過
  await passInput.setValue('password123');
  await checkPassInput.setValue('password123');
  await ageInput.setValue("25");

  // 確定有 setValue
  expect(passInput.element.value).toBe('password123');
  expect(checkPassInput.element.value).toBe('password123');
  expect(ageInput.element.value).toBe("25");

  // 提交表單
  await wrapper.find('form').trigger('submit.prevent')

  // 等待驗證完成
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // await flushPromises();
  // await wrapper.vm.$nextTick();

  // 檢查結果
  expect(result.text()).toBe('success');
});

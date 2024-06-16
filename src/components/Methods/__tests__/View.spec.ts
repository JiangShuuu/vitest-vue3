import {it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import View from '../View.vue'

it('after click button should display correct content', async () => {
  const wrapper = mount(View)

  await wrapper.find('[data-test="button"]').trigger('click')
  expect(wrapper.find('[data-test="content"]').text()).toBe('1')
  await wrapper.find('[data-test="button"]').trigger('click')
  expect(wrapper.find('[data-test="content"]').text()).toBe('2')
  await wrapper.find('[data-test="button"]').trigger('dblclick') // 觸發不到 @click 事件
  expect(wrapper.find('[data-test="content"]').text()).not.toBe('4') // AssertionError
})

it('input', async () => {
  const wrapper = mount(View)
  // input
  await wrapper.find('[data-test="text"]').setValue('Hello, World!')
  expect(wrapper.find('[data-test="result_text"]').text()).toBe('Hello, World!')

  // date
  await wrapper.find('[data-test="date"]').setValue('2022-10-06')
  expect(wrapper.find('[data-test="result_date"]').text()).toBe('2022-10-06')

  // radio
  await wrapper.find('[data-test="radio_1"]').setValue(true)
  expect(wrapper.find('[data-test="result"]').text()).toEqual('1')
  await wrapper.find('[data-test="radio_2"]').setValue(true)
  expect(wrapper.find('[data-test="result"]').text()).toEqual('2')

  // checkbox
  await wrapper.find('[data-test="checkbox_1"]').setValue(true)
  expect(wrapper.find('[data-test="checkbox_result"]').text()).toBe('1')
  await wrapper.find('[data-test="checkbox_2"]').setValue(true)
  expect(wrapper.find('[data-test="checkbox_result"]').text()).toEqual('1,2')
  await wrapper.find('[data-test="checkbox_1"]').setValue(false)
  expect(wrapper.find('[data-test="checkbox_result"]').text()).toEqual('2')

  // select
  await wrapper.find('[data-test="selectTarget"]').setValue('orange')
  expect(wrapper.find('[data-test="selectResult"]').text()).toEqual('orange')
})


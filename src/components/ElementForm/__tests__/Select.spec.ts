import Select from '../Select.vue';
import { render, screen } from '@testing-library/vue'
import { it, expect, describe } from 'vitest'
import userEvent from '@testing-library/user-event'

import { mount, flushPromises } from '@vue/test-utils'
import { nextTick } from 'vue';

describe('Select', () => {
  it('testing-library el-select 測試', async () => {
    render(Select)
    const elSelect = screen.getByTestId('el_select')
    expect(elSelect).toBeInTheDocument()

    await userEvent.click(elSelect)
    const selectOption = screen.queryByText('Option4')

    if (selectOption) {
      await userEvent.click(selectOption)
    } else {
      throw new Error('Option "Option4" not found')
    }

    // 確認選擇值
    expect(elSelect.textContent).toBe("Option4")
  })

  it('vue-test-utils el-select 測試', async () => {
    const wrapper = mount(Select);

    // 確保下拉選單存在
    const elSelectWrapper = wrapper.find('[data-test="el_select"]');
    expect(elSelectWrapper.exists()).toBe(true);

    // 點擊下拉選單打開選項列表
    await elSelectWrapper.trigger('click');
    await nextTick();

    // 確保選項列表已經打開
    const optionsWrapper = document.querySelector('.el-select-dropdown__list');
    expect(optionsWrapper).toBeTruthy();
    
    if (!optionsWrapper) return

    // 要用原生 Dom 去選擇, 否則選不到 template 開關的 Dom
    // 選擇 Option4 
    const option4 = optionsWrapper.querySelector('[data-test="Option4"]');
    expect(option4).toBeTruthy();
    if (!option4) return
    option4.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await flushPromises()

    // 檢查選中的值是否更新
    const result = wrapper.find('[data-test="result"]');
    expect(result.text()).toBe('Option4');

    // X 失敗寫法
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // await flushPromises()
    // const option4 = wrapper.find('[data-test="Option4"]');
    // expect(option4.exists()).toBe(true);
    // await option4.trigger('click');
    // await nextTick();
    // const result = wrapper.find('[data-test="result"]');
    // expect(result.text()).toBe('Option4');
  })
})
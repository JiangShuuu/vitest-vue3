import DatePicker from '../DatePicker.vue';
import { render, screen } from '@testing-library/vue'
import { it, expect, describe } from 'vitest'


describe('DatePicker', () => {
  it('testing-library el-date-picker 測試', async () => {
    render(DatePicker)
    const datePickerId = screen.getByTestId('date_picker')
    expect(datePickerId).toBeInTheDocument()
  })
})
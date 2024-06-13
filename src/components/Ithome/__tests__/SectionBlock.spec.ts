import {it, expect, vi} from 'vitest'
import {mount, shallowMount} from '@vue/test-utils'
import axios from 'axios'
import { getAxios } from '@/api/index'
import SectionBlock from '../SectionBlock.vue'

it('mount', () => {
    const wrapper = mount(SectionBlock) // 實際上依賴於 SectionBlockTitle 元件

    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<section>
        <h2></h2>
      </section>"
    `)
})

it('shallowMount', () => {
  const wrapper = shallowMount(SectionBlock) // 透過 shallowMount 底下的元件將強迫渲染成 <-stub> 元件

  expect(wrapper.html()).toMatchInlineSnapshot(`
    "<section>
      <section-block-title-stub></section-block-title-stub>
    </section>"
  `)
})

it('should stubs by custom component', () => {
  const StubComponent = {
    name: 'StubComponent',
    template: '<p>stub content</p>'
  }

  const wrapper = mount(SectionBlock, {
    global: {
      stubs: { SectionBlockTitle: StubComponent }
    }
  })

  expect(wrapper.html()).toMatchInlineSnapshot(`
    "<section>
      <p>stub content</p>
    </section>"
  `)
})

it('stub fn', () => {
  const getApples = vi.fn(() => 0)

  const collectFruit = () => getApples()

  collectFruit()
  collectFruit()

  expect(getApples).toHaveBeenCalledTimes(2)
})



it('fetch something and axios.get should have been called', async () => {
  vi.mock('axios', () => {
    return {
      default: {
        get: vi.fn(),
      },
    }
  })
  
  await getAxios()

  expect(axios.get).toHaveBeenCalledTimes(1)
})
import {render, screen} from "@testing-library/vue"
import {describe, it, expect} from "vitest"
import View from "@/components/Erik/View.vue"

describe("View", () => {
  const viewTest = "Hello from view123"

  it("render", async () => {
    // arrange
    // const viewId = "viewId"
    render(View, {
      props: {
        element: "span",
        // inject
        // id: viewId,
      },
      slots: {default: viewTest}
    })

    const view = await screen.findByText(viewTest)
    // assert
    // expect(view.id).toBe(viewId)
    expect(view.innerHTML).toBe(viewTest)
    expect(view.nodeName).toBe("SPAN")
  })

  // 快照, 對比產出 dom
  // it("snap shot matches", () => {
  //   const wrapper = render(View, {props: {element: "div"}})
  //   expect(wrapper).toMatchSnapshot()
  // })
})
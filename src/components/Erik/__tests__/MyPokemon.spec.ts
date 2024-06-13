import { render, screen, fireEvent } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import MyPokemon from "../MyPokemon.vue";

describe("my-pokemon", () => {
  it("render span correctly", async () => {
    // arrange
    render(MyPokemon);

    // act
    const pokemon = await screen.findByText("Get Pokemon");
    await fireEvent.click(pokemon);

    // assert
    const value = await screen.findByText("bulbasaur");
    expect(value.innerHTML).toBe("bulbasaur");
  });
});
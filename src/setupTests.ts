import { beforeAll, afterEach, afterAll } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { pokemonResponse } from "@/components/Erik/__tests__/mockPokemon";
import "whatwg-fetch";
import '@testing-library/jest-dom'

export const restHandlers = [
  http.get("https://pokeapi.co/api/v2/pokemon", () => {
    return HttpResponse.json({ ...pokemonResponse }, { status: 200 })
  })
];
const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
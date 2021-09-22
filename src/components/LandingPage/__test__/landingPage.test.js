/**
 * @jest-environment jsdom
 */

import React from "react";
import { expect, test } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react";
import { LandingPage, fizzBuzz } from "../landingPage";
import { count } from "console";

// test("", () => {
//   expect().toBe();
// });
// test("", () => {
//   expect().toEqual();
// });

describe("fizzBuzz", () => {
  test("Multiples of both 3 and 5 should return FizzBuzz", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
    expect(fizzBuzz(75)).toBe("FizzBuzz");
    expect(fizzBuzz(-15)).toBe("FizzBuzz");
  });
  test("Multiples of 3 should return Fizz", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(18)).toBe("Fizz");
    expect(fizzBuzz(57)).toBe("Fizz");
    expect(fizzBuzz(-3)).toBe("Fizz");
  });
  test("Multiples of 5 should return Buzz", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(40)).toBe("Buzz");
    expect(fizzBuzz(70)).toBe("Buzz");
    expect(fizzBuzz(-5)).toBe("Buzz");
  });
  test("Zero should return 0", () => {
    expect(fizzBuzz(0)).toEqual(0);
  });
  test("Any number that is not a multiple of 3 or 5 should return as said number", () => {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(29)).toEqual(29);
    expect(fizzBuzz(82)).toEqual(82);
    expect(fizzBuzz(-1)).toEqual(-1);
  });
});

describe("LandingPage", () => {
  test("Clicking increment button increases the count", () => {
    const result = render(<LandingPage />);
    const incrementBtn = result.container.querySelector("#increment");
    const countOutput = result.container.querySelector("#count");

    fireEvent.click(incrementBtn);

    expect(countOutput.textContent).toBe("1");
  });
  test("Clicking decrement button decreases the count", () => {
    const result = render(<LandingPage startCount={2} />);
    const decrementBtn = result.container.querySelector("#decrement");
    const countOutput = result.container.querySelector("#count");

    fireEvent.click(decrementBtn);

    expect(countOutput.textContent).toBe("1");
  });
  test("Count does not go below zero", () => {
    const result = render(<LandingPage startCount={1} />);
    const decrementBtn = result.container.querySelector("#decrement");
    const countOutput = result.container.querySelector("#count");

    fireEvent.click(decrementBtn);

    expect(countOutput.textContent).toBe("0");
    expect(count.textContent).not.toBe("-1");

    // TODO: add test for alert
  });
  test("Count does not exceed 100", () => {
    const result = render(<LandingPage startCount={99} />);
    const incrementBtn = result.container.querySelector("#increment");
    const countOutput = result.container.querySelector("#count");

    fireEvent.click(incrementBtn);

    expect(countOutput.textContent).toBe("Buzz");
    expect(count.textContent).not.toBe("101");

    // TODO: add test for alert
  });
  test("Multiples of 3 return Fizz", () => {
    const result = render(<LandingPage startCount={2} />);
    const incrementBtn = result.container.querySelector("#increment");
    const countOutput = result.container.querySelector("#count");

    fireEvent.click(incrementBtn);

    expect(countOutput.textContent).toBe("Fizz");
    expect(count.textContent).not.toBe("3");
  });
  test("Multiples of 5 Buzz", () => {
    const result = render(<LandingPage startCount={4} />);
    const incrementBtn = result.container.querySelector("#increment");
    const countOutput = result.container.querySelector("#count");

    fireEvent.click(incrementBtn);

    expect(countOutput.textContent).toBe("Buzz");
    expect(count.textContent).not.toBe("5");
  });
  test("Multiples of 3 and 5 return FizzBuzz", () => {
    const result = render(<LandingPage startCount={14} />);
    const incrementBtn = result.container.querySelector("#increment");
    const countOutput = result.container.querySelector("#count");

    fireEvent.click(incrementBtn);

    expect(countOutput.textContent).toBe("FizzBuzz");
    expect(count.textContent).not.toBe("15");
  });
});

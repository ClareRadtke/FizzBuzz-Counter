/**
 * @jest-environment jsdom
 */

import React from "react";
import { expect, test } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react";
import { LandingPage, fizzBuzz } from "../landingPage";

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
  // test("Count does not go below zero", () => {
  //   // expect().toBe();
  // });
  // test("Count does not exceed 100", () => {
  //   // expect().toBe();
  // });
  // test("Multiples of 3, 5 and 3 and 5 return Fizz, Buzz and FIzzBuzz respectively", () => {
  //   // expect().toBe("Fizz");
  //   // expect().toBe("Buzz");
  //   // expect().toBe("FizzBuzz");
  // });
});

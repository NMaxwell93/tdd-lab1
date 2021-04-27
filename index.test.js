const { test, expect } = require("@jest/globals");
const {translateToPig} = require("./index");
// apple
// else
// giraffe
describe("Pig latin translate", () => {
    
    test("starts with a vowel", () => {
        let result = translateToPig("apple");
        expect(result).toEqual("appleway")
    });

    test("starts with a vowel", () => {
        let result = translateToPig("else");
        expect(result).toEqual("elseway")
    });

    test("starts with a vowel", () => {
        let result = translateToPig("Individual");
        expect(result).toEqual("individualway")
    });

    test("starts with a vowel", () => {
        let result = translateToPig("Often");
        expect(result).toEqual("oftenway")
    });

    test("starts with a vowel", () => {
        let result = translateToPig("Under");
        expect(result).toEqual("underway")
    });

    test("starts with consonant", () => {
        let result = translateToPig("giraffe");
        expect(result).toEqual("iraffegay")
    });

    test("starts with consonant", () => {
        let result = translateToPig("Carnival");
        expect(result).toEqual("arnivalcay")
    });

    test("starts with two consonants", () => {
        let result = translateToPig("Glock");
        expect(result).toEqual("ockglay")
    });

    test("starts with three consonants", () => {
        let result = translateToPig("scrape");
        expect(result).toEqual("apescray")
    });

    test("capitals", () => {
        let result = translateToPig("GIRAFFE");
        expect(result).toEqual("iraffegay")
    });

    test("contraction", () => {
        let result = translateToPig("can't");
        expect(result).toEqual("an'tcay")
    });
})
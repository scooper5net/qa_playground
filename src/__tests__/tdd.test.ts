/**
 * Checks if the string given is a Palindrome
 * @param word - This is a string you input to check if it is a palindrom
 * @returns - If no word is give, returns false. If word = string, reverses
 * it and string matches it to the input. Returns boolean based on this 
 * comparison.
 */
function checkIfPalindrome(word: string): boolean {
    console.log(word);
    
    if (!word) return false;
    const reversedWord: string = word.trim().split("").reverse().join("");
    console.log(reversedWord);
    return reversedWord.toLowerCase() == word.trim().toLowerCase();
}

describe("Palindrome Checker", () => {
    it("Tests is the word racecar is a palindrome.", () => {
        expect(checkIfPalindrome("racecar")).toBeTruthy();
    })
    it("Tests is tacobell is a palindrome", () => {
        expect(checkIfPalindrome("Tacboell")).toBeFalsy();
    })
})

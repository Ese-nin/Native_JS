export const value01 = "01";

const sentence = "Hello my friend!"

export function splitIntoWords(sentence: string) {
    const words = sentence.toLowerCase().split(" ");
    return words.filter(w => w !== "" && w !== "-")
        .map(w => w
            .replace("!", "")
            .replace(".", "")
            .replace(",", ""));
}

export const sum = (a: number, b: number) => {
    return a + b;
}

export const mult = (a: number, b: number) => {
    return a * b;
}
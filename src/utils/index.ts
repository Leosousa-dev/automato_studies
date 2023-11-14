


export function isSpace(char: string): boolean{
    return char === ' ' || char === '\n' || char === '\t';
}

export function isDigit(char: string): boolean{
    return char >= '0' && char <= '9';
}

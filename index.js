export function isTrue (bool) {
    return bool ? 'This is True' : 'This is False';
}

export async function getSomething (str = '1') {
    return (await fetch('https://pokeapi.co/api/v2/berry/' + str + '/')).json();
} 
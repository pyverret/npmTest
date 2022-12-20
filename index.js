export function isTrue (bool) {
    return bool ? 'This is True' : 'This is False';
}

export function getSomething (str = '1') {
    fetch('https://pokeapi.co/api/v2/berry/' + str + '/').then(function (response) {
        console.log(response);
        return response;
    });
} 
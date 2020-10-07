const countries = [
    {
        name: 'Russian'
    },
    {
        name: 'Germany'
    },
    {
        name: 'Austria'
    },
    {
        name: 'USA'
    },
    {
        name: 'Roumanie'
    }
];

const searchInput = document.querySelector('.search-input');
const autocompleteBlock = document.querySelector('.autocomplete');

searchInput.addEventListener('keyup', function() {
    const input = searchInput.value;
    autocompleteBlock.innerHTML = '';
    const autocomplete = countries.filter(function(country) {
        return country.name.toLowerCase().startsWith(input);
    });
    autocomplete.forEach(function(auto) {
        const div = document.createElement('div');
        div.innerHTML = auto.name;
        autocompleteBlock.appendChild(div);
    });
    if (input === '') {
        autocompleteBlock.innerHTML = '';
    }
});


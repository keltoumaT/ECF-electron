async function doFetch(symbol) {
    try {
        const resp = await fetch("https://restcountries.eu/rest/v2/alpha/" + symbol + "?fields=name;capital;currencies\n", { method: 'GET' });
        if (resp.ok) {
            return await resp.json();
        } else {
            return `error fetching endpoint: /${symbol}`;
        }
    } catch (err) {
        console.log(err);
    }
}

function display(data, selector) {
    const container = document.querySelector(selector);
    container.innerHTML = data.name;
    container.classList.add('be-bold');
}

async function fetchA() {
    const data = await doFetch('col');
    display(data, '#component-a');
}

async function fetchB() {
    const data = await doFetch('fr');
    display(data, '#component-b');
}

async function fetchC() {
    const data = await doFetch('de');
    display(data, '#component-c');
}

async function fetchD() {
    const data = await doFetch('es');
    display(data, '#component-d');
}

function fetchAndDisplayData() {
    fetchA();
    fetchB();
    fetchC();
    fetchD();
}
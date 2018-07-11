const $root = document.getElementById('Root');

function createHeading() {
    const h1 = document.createElement('h1');
    const h1text = document.createTextNode('Webpack Primer: Introduction');

    h1.appendChild(h1text);
    return h1;
}

$root.appendChild(createHeading());

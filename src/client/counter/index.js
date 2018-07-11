function createButton(copy) {
    const $btn = document.createElement('button');
    const btnCopy = document.createTextNode(copy);

    $btn.appendChild(btnCopy);
    return $btn;
}

function createCountDisplay(copy) {
    const $disp = document.createElement('span');
    const dispCopy = document.createTextNode(copy);

    $disp.appendChild(dispCopy);

    $disp.style.display = 'inline-block';
    $disp.style.padding = '5px';
    $disp.style.border = '1px solid black';
    $disp.style.margin = '0 5px';
    $disp.style.width = '40px';
    $disp.style.textAlign = 'center';

    return $disp;
}

function countInterface() {
    return (function interfaceFactory() {
        let count = 0;
        
        function increment() {
            count += 1;
            return count;
        }

        function decrement() {
            count -= 1;
            return count;
        }

        function get() {
            return count;
        }

        return {
            increment,
            decrement,
            get,
        };
    })();
}

function bindCounterBtnClicks($decBtn, $countDisplay, $incBtn) {
    const count = countInterface();

    $incBtn.addEventListener('click', function incrementHandler() {
        $countDisplay.innerText = count.increment();
    });

    $decBtn.addEventListener('click', function decrementHandler() {
        count.decrement();
        $countDisplay.innerText = count.decrement();
    });

    $countDisplay.innerText = count.get();
}

export default function create() {
    const $container = document.createElement('div');
    $container.classList.add('counter');

    const $decBtn = createButton('-');
    const $count = createCountDisplay('0');
    const $incBtn = createButton('+');

    bindCounterBtnClicks($decBtn, $count, $incBtn);

    $container.appendChild($decBtn);
    $container.appendChild($count);
    $container.appendChild($incBtn);

    return $container;
}

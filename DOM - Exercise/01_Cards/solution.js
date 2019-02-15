function solve() {
    Array.from(document.getElementsByTagName('img')).forEach((img) => {
        img.addEventListener('click', clickEvent);
    });

    function clickEvent(e) {
        let card = e.target;
        card.src = './images/whiteCard.jpg';
        let parent = card.parentNode;

        card.removeEventListener('click', clickEvent);

        let spans = document.getElementById('result').children;

        let leftSpan = spans[0];
        let rightSpan = spans[2];

        if (parent.id === 'player1Div') {
            leftSpan.textContent = card.name;
        } else if (parent.id === 'player2Div') {
            rightSpan.textContent = card.name;
        }

        if (leftSpan.textContent && rightSpan.textContent) {
            let winner;
            let looser;

            if (+leftSpan.textContent > +rightSpan.textContent) {
                winner = document.querySelector(`#player1Div img[name="${leftSpan.textContent}"]`);
                looser = document.querySelector(`#player2Div img[name="${rightSpan.textContent}"]`);
            } else {
                looser = document.querySelector(`#player1Div img[name="${leftSpan.textContent}"]`);
                winner = document.querySelector(`#player2Div img[name="${rightSpan.textContent}"]`);
            }

            winner.style.border = '2px solid green';
            looser.style.border = '2px solid darkred';

            document.getElementById('history').textContent += `[${leftSpan.textContent} vs ${rightSpan.textContent}] `;

            leftSpan.textContent = '';
            rightSpan.textContent = '';
        }

    }
}
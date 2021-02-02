(function(){
    'use strict';

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = document.querySelectorAll("input[type=text]");
        processData(formData);
    });

    function processData(formData) {
        let emptyFields = 0;
        const words = [];
        for (const eachWord of formData) {
            if (eachWord.value) {
                words.push(eachWord.value);
                eachWord.value = "";

            } else {emptyFields++; }
        }
        if (emptyFields > 0) {
            madlib.innerHTML = 'Please fill out the fields';
        } else { makeMadlib(words);}
    }

    

    function makeMadlib(wordsArray) {
        
        document.getElementById('myform').style.display = "none";


        const myText = `
        To: ${wordsArray[0]}hotwheels07@gmail.com
        <br>____________________________________________________<br><br>
        Subject: Hey!
        <br>____________________________________________________<br><br>
        Hey there ${wordsArray[0]}!
        <br><br>
        How's ${wordsArray[1]}? Is it as ${wordsArray[2]} as it is in the movies?
        I recently ran into your ${wordsArray[3]} at the mall yesterday. She mentioned how 
        you got a pet ${wordsArray[4]}... how cool! One time, I was walking with my sisters through
        a park and two ${wordsArray[4]}s ran up to us and almost bit my ${wordsArray[5]} off! It was
        crazy! Anyway, I hope you're doing well and your ${wordsArray[6]} SUV is still running okay.
        The last time I was there, your car was barely working haha! Have a great week and the next time
        I come visit you, we can ${wordsArray[7]} our way through the city!
        <br><br>
        Yours Truly,
        <br>
        ${wordsArray[8]}`;

        madlib.innerHTML = myText;
    }

   
})();
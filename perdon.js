let increment = 50;
    let decrement = 50;

    let frases = [
        'Si <3!',
        'Porfi',
        'andale di que si',
        'porfitas!!!',
        'Si, porfi amorcito'
    ]

    let i = 0;

    function si() {
        $('#bno').addClass('hidden');
        $('#bsi').addClass('hidden');
        $('#o1').addClass('hidden');
        $('#o2').removeClass('hidden');
        $('#love').removeClass('hidden');
    }

    function no () {
        increment += 15;
        decrement -= 1;
        $('#bsi').css('width', increment);
        $('#bsi').css('height', increment);

        $('#bno').css('width', decrement);
        $('#bno').css('height', decrement);
        if(decrement < 10) {
            $('#bno').addClass('hidden');
        }

        $('#bsi').text(frases[i++]);
        if(i>4) {
            i=0;
        }
    }

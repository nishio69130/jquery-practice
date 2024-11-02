$(function(){
    let num = 0;

    $('#append').on('click', function(){
        num ++ ;
        $('ul').append('<li>appendで追加'+ num + '</li>');
    });

    $('#remove').on('click', function(){
        if(num >= 1){
            num -- ;
            $('li:last').remove();
            if(num <0) {
                num = 0;
            }
        }
    });

    $('#show').on('click', function(){
        $('ul').show();
    })

    $('#hide').on('click', function(){
        $('ul').hide();
    })
})




// $(function(){
//     const p = $('p').text();
//     console.log(p);
//     $('p').text('jQueryを勉強しよう');
// })
$('form').on('submit', function (e) {
    e.preventDefault();
    const novaTarefa = $('#tarefa').val();
    const novoItem = $('<li></li>').text(novaTarefa);

    $(novoItem).on('click', function(){

        $(this).toggleClass('aplicaRisco');
     
       });

    $(novoItem).appendTo('ul')
    $('#tarefa').val('');
})

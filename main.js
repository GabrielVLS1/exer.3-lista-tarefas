let listaTarefas = []

$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li style="display: none"></li>');

        if (listaTarefas.includes(nomeTarefa)) {
            alert('Essa tarefa já existe!');
        } else {
            listaTarefas.push(nomeTarefa);
            $(`<p>${nomeTarefa}</p>`).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(500);
            $('#nome-tarefa').val('');

            if (listaTarefas.length == 1) {
                $('#voltar').css('margin-top', '2%');
            };
            // console.log(listaTarefas);
        };
    });

    // $('body').on('click', 'p', function() {
    //     $(this).css('text-decoration', 'line-through');
    // }); -> risca a linha permanentemente

    // $(document).on('click', 'li', function() {
    //     $(this).find('p').toggleClass('risco');
    // }); -> risca a linha e a retira quando clicado novamente (versão mais simples abaixo)

    $(document).on('click', 'p', function() {
        $(this).toggleClass('risco');
    });

    $('#btn-limpar').on('click', function() {
        $('ul').empty();
        listaTarefas = []
        $('#voltar').css('margin-top', '0%');
    });
});
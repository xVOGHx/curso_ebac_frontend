$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        const tarefaAdicionada = $('<li></li>');
        const tarefaConcluida = $(`<a>${novaTarefa}</a>`);

        tarefaConcluida.click(function(){
            tarefaConcluida.css('text-decoration', 'line-through');
        });
        tarefaConcluida.appendTo(tarefaAdicionada);
        tarefaAdicionada.appendTo('ul');
        $('#tarefa').val('');
    });
});
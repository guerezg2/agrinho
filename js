document.addEventListener("DOMContentLoaded", function() {
    // Função para exibir o quiz
    function exibirQuiz() {
        // Aqui você pode adicionar o código para exibir o quiz na seção interativa
        // Por exemplo, você pode criar elementos HTML dinamicamente para as perguntas e opções do quiz
        // E adicionar esses elementos à div com o id "quiz"
        alert("Quiz em breve!");
    }

    // Obter o botão do quiz
    const botaoQuiz = document.getElementById("quiz-button");

    // Adicionar um ouvinte de evento para o clique no botão do quiz
    botaoQuiz.addEventListener("click", exibirQuiz);
});

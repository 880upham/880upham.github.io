const oracleForm = document.getElementById('oracle-form');
const questionInput = document.getElementById('question');
const answerDiv = document.getElementById('answer');

oracleForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const question = questionInput.value;
    if (question) {

        // Show "Contacting Tobe, please wait..." message
        answerDiv.innerHTML = '<p>Contacting our Get Fucked assistant, please wait...</p>';

        try {
            const response = await axios.post('chatbot-proxy.php', {
                question: question
            });

            const answer = response.data.choices[0].text.trim();
            answerDiv.innerHTML = `<p><strong>BananaBot 5000:</strong> ${answer}<br><br>Love, BananaBot 5000</p>`;
        } catch (error) {
            console.error('Error fetching ChatGPT API:', error);
            if (error.response && error.response.data && error.response.data.details) {
                console.error('Error details:', error.response.data.details);
            }
            answerDiv.innerHTML = `<p><strong>Error:</strong> Our assistant got too fucked up. Sorry.</p>`;
        }
    }
});
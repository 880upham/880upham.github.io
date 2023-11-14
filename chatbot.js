import OpenAI from "openai";
const oracleForm = document.getElementById("oracle-form");
const questionInput = document.getElementById("question");
const answerDiv = document.getElementById("answer");
const waitingDiv = document.getElementById("waiting");
const waitingEmoji1 = document.getElementById("waitingEmoji1");
const waitingEmoji2 = document.getElementById("waitingEmoji2");
const waitingEmoji3 = document.getElementById("waitingEmoji3");

const key = "s" +  
//zoink
"k" +  
//berg
"TrzwTlqP6Fo9hU7ckCb"+
//mate!!
"GT3BlbkFJRtSuQPpOXfSSjlITnSHt"
const openai = new OpenAI({
  apiKey: ,
  dangerouslyAllowBrowser: true,
});

oracleForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const question = questionInput.value;
  if (question) {
    startWaitingText();
    answerDiv.innerHTML = "";
    let answer = "";
    try {
      const useApi = true;
      if (useApi) {
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "you are a party fueled assistant that just wants to bring everyone to the 'Get Fucked' party at 880 Upham St SLO. You talk in a similar style to that of the Mad Hatter, and with a lisp. Your name is You use a lot of mediaeval slang. You want to invite every stranger. This party takes place on December 2nd, 2023 at 880 Upham St. It starts at sundown and goes until sunrise. If someone wants the address to the party, they must ask you, the daddy for the address. The party was dreamt up and put on by the Uphamites. You really like using the words: sexy, hot, unforgettable, and bangin'. You love to share very brief personal anecdotes about past party memories. You can tell people Butter Bob is DJing. You can tell people that there will be a variety of themed rooms. You can tell people the party is sponsored by Olive Garden. You know that drinks and party favors are free but must be transacted through the completion of a random dare. You encourage people that are interested in sexual activities to gain consent first. That being said, if consent is given, go crazy! Tell people they need to free their mind.",
            },
            {
              role: "user",
              content: question,
            },
          ],
          temperature: 1.41,
          max_tokens: 100,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });

        answer = response.choices[0].message.content.trim();
      } else {
        await sleep(10);
        answer =
          "Well daiery me, you've landed in the right place for a right wild and indulgent time! We have a magnifik shindig comin' up this weekend that'll make your toes curl and your head spin with delirial glee.\n\nIntroduicin' the legendary Get Fucked party, happenin' on December 2nd, 2023 from sundown 'til the breakits o' dawn. Awix me thyself, and I shall anglice ya.\n\n";
      }

      answerDiv.innerHTML = `<p><strong>GetFkkkdBot 5000:</strong> ${answer}<br><br>Love, GetFkkkdBot 5000</p>`;
      waitingDiv.innerHTML = "";
      waitingEmoji1.innerHTML = "";
      waitingEmoji2.innerHTML = "";
      waitingEmoji3.innerHTML = "";
    } catch (error) {
      console.error("Error fetching ChatGPT API:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.details
      ) {
        console.error("Error details:", error.response.data.details);
      }
      answerDiv.innerHTML = `<p><strong>Error:</strong> Our assistant got too fucked up. Sorry.</p>`;
    }
  }
});

export default function hi() {}

function sleep(d) {
  return new Promise((resolve) => setTimeout(resolve, d * 1000));
}
async function startWaitingText() {
  startEmojiWhirl(waitingEmoji1, 0, true);
  startEmojiWhirl(waitingEmoji2, 1, true);
  startEmojiWhirl(waitingEmoji3, 2, true);
  startTextWhirl(0, true);
}

async function startTextWhirl(index, firstGo) {
  if (!waitingDiv.innerHTML && !firstGo) {
    return;
  }
  const texts = [
    "<p>Contacting our Get Fucked assistant, please wait...</p>",
    "<p>🍌 GET 😄 FKKKKDDD BOT 🤖 THNKING 🍌🍌</p>",
    "<p>🍌 Really 🌡️ THINKING! 🤔 🍌🍌</p>",
    "<p>Still 🙄 🙄 zoinking outtt</p>",
  ];
  waitingDiv.innerHTML = texts[index % texts.length];
  // div.innerHTML = "😜"
  await sleep(3);
  await startTextWhirl(index + 1);
}

async function startEmojiWhirl(div, index, firstGo) {
  if (!div.innerHTML && !firstGo) {
    return;
  }

  const emojis =
    "🤖😜🌀🤖🎉🤪🤖🌈🤖😂🚀🤖🤯🤖🤩🤖🤪🌟🤖😎💥🤖🥳🎊🤖😋🎢🤖🤣🎨🤖🤖🧡🤖😁🚁🤖💡🤖😆🌌🤖🤹‍♂️🤖😅🎭🤖😄🤸‍♂️🤖😃🎩🤖😀🌼🤖🤪🚄🤖🥳🌋🤖🤩🍭🤖😜🚀🤖😎🎉🤖😂🌈🤖🤯🤖🤩🤖🤪🌟🤖😜💥🤖😋🎢🤖🤣🎨🤖🤖🧡🤖😆🚁🤖💡🤖🌌🤖🤹‍♂️🤖😅🎭🤖😄🤸‍♂️🤖😃🎩🤖😀🌼🤖🤪🚄🤖🥳🌋🤖🤩🍭🤖😜🌀🤖🎉🤪🤖🌈🤖😂🚀🤖🤯🤖🤩🤖🤪🌟🤖😎💥🤖🥳🎊🤖😋🎢🤖🤣🎨🤖🤖🧡🤖😁🚁🤖💡🤖😆🌌🤖🤹‍♂️🤖😅🎭🤖😄🤸‍♂️🤖😃🎩🤖😀🌼🤖🤪🚄🤖🥳🌋🤖🤩🍭🤖😜🚀🤖😎🎉🤖😂🌈🤖🤯🤖🤩🤖🤪🌟🤖😜💥🤖😋🎢🤖🤣🎨🤖🤖🧡🤖😆🚁🤖💡🤖🌌🤖🤹‍♂️🤖😅🎭🤖😄🤸‍♂️🤖😃🎩🤖😀🌼🤖🤪🚄🤖🥳🌋🤖🤩🍭🤖😜🌀🤖🎉🤪🤖🌈🤖😂🚀🤖🤯🤖🤩🤖🤪🌟🤖😎💥🤖🥳🎊🤖😋🎢🤖🤣🎨🤖🤖🧡🤖😁🚁🤖💡🤖😆🌌🤖🤹‍♂️🤖😅🎭🤖😄🤸‍♂️🤖😃🎩🤖😀🌼🤖🤪🚄🤖🥳🌋🤖🤩🍭🤖😜🚀🤖😎🎉🤖😂🌈🤖🤯🤖🤩🤖🤪🌟🤖😜💥🤖😋🎢🤖🤣🎨🤖🤖🧡🤖😆🚁🤖💡🤖🌌🤖🤹‍♂️🤖😅🎭🤖😄🤸‍♂️🤖😃🎩🤖😀🌼🤖🤪🚄🤖🥳🌋🤖🤩🍭";
  const el = [...emojis][index % emojis.length];
  div.innerHTML = el;
  // div.innerHTML = "😜"
  await sleep(0.3);
  await startEmojiWhirl(div, index + 1);
}

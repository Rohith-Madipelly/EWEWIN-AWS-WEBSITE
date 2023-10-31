import Faq from "react-faq-component";
import "./LPattern4.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from 'react';
const data = {
    title: "",
    rows: [
        {
            title: "Why is Quiz on Ezewin than all other online quiz games ?",
            content: ` <></> `,
        },
        {
            title: "How to play Quiz on Ezewin?",
            content:
                <ol class="text-sm" style={{ paddingLeft: '60px' }}>
                    <li> One game of Quizzy can have one or more questions.
                    </li>
                    <li> The goal is to answer all questions correctly before everyone else.
                    </li>
                    <li> Each question has 2 to 4 options with only 1 right answer.
                    </li>
                    <li>You get 10 seconds to answer a question.
                    </li>
                    <li>For every correct answer, you will get a score based on your answering speed. For a wrong answer, the score for that question will be zero.
                    </li>
                    <li>As soon as you answer a question, the next question will appear.
                    </li>
                    <li>If the timer for a question runs out before you could answer, then the question is skipped, and your score for that question will be zero.</li>
                    <li>You will see the final scores only after all players have answered. If you complete the quiz before others, you might have to wait for a few seconds for them to finish too.
                    </li>
                    <li>The ranking is based on the total score of all the questions. </li>
                    <li>The final prize money distribution is based on the total number of players in that game.
                    </li>
                </ol>,
        },
        {
            title: "How can I play Quiz online and win cash ?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "How can I win the quiz game?",
            content: `oreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu a`,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    bgColor: '#efedee',
    // background-color: #efedee,
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};

function FAQSection() {
    const div3Ref = useRef(null);
    return (
        <div className="container" id="FAQ" ref={div3Ref}>
            <h2 class="heading">Frequently Asked Questions (FAQ)</h2>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}

export default FAQSection
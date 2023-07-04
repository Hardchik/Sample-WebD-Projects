import React from 'react'
import styles from "./Blogs.module.css";

export default function Markdown(props) {
    /* 
        ***** Markdown Syntex *****
        Headings - #
        Bold - **  **
        Italics - *  *
        Image - !!!path!!!
        Underline - !__ !__
        Crossed - !--  !--
        New Line - \n
    */

    const { content } = props;

    function markdownCompiler(line) {
        if (line[0] === '#') {
            const words = line.split(" ");
            const word = words[0];
            const size = 64 - 7 * (word.length - 1);
            return (
                <div style={{fontSize: `${size}px`}}>
                    {line.substring(word.length)}
                </div>
            )
        }
        else {
            const words = line.split("**");
            return words.map(word => {
                if (words.indexOf(word) % 2 === 0) {
                    const italicsWords = word.split("*");
                    return italicsWords.map(word => {
                        if (italicsWords.indexOf(word) % 2 === 0) {
                            const underlineWords = word.split("!__");
                            return underlineWords.map(word => {
                                if (underlineWords.indexOf(word) % 2 === 0) {
                                    const crossedWords = word.split("!--");
                                    return crossedWords.map(word => {
                                        if (crossedWords.indexOf(word) % 2 === 0) {
                                            const pathWords = word.split("!!!");
                                            return pathWords.map(word => {
                                                if (pathWords.indexOf(word) % 2 === 0) {
                                                    return (
                                                        <span>{word}</span>
                                                    )
                                                }
                                                else {
                                                    word = word.trim();
                                                    const par = word.split(",")
                                                    const path = par[0].trim();
                                                    return (
                                                        <img src={ require(`../../Assets/${path}`) } alt="" style={{ display: "block", height: "500px", width: "500px", margin: "auto" }} />
                                                    )
                                                }
                                            })
                                        }
                                        else {
                                            return (
                                                <><s>{word.trim()}</s><span> </span></>
                                            )
                                        }
                                    })
                                }
                                else {
                                    return (
                                        <><u>{word.trim()}</u><span> </span></>
                                    )
                                }
                            })
                        }
                        else {
                            return (
                                <i>{word}</i>
                            )
                        }
                    })
                }
                else {
                    return (
                        <strong>{word}</strong>
                    )
                }
            })
        }
    }

    function markdown(string) {
        const lines = string.split('\n');
        return lines.map(line => {
            return (
                <div className={styles.blogPara}>
                    { markdownCompiler(line) }
                </div>
            )
        });
    }

    return (
        <div className={styles.blogContent}>
            { markdown(content) }
        </div>
    )
}

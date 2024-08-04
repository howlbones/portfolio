import React from 'react'
import './TypewriterText.css'
import { useRef, useEffect } from 'react';

// function([string1, string2],target id,[color1,color2])    

function consoleText(words, id, underscore, colors) {
  if (colors === undefined) colors = ['rgb(20,20,20)'];
  var visible = true;
  var con = underscore;
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = id;
  con.setAttribute('style', 'color:' + colors[0]);
  target.setAttribute('style', 'color:' + colors[0]);
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'typewriter-text__underscore hidden'
      visible = false;

    } else {
      con.className = 'typewriter-text__underscore'

      visible = true;
    }
  }, 400)
}

function TypewriterText() {
  const consoleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current && consoleRef.current) {
      consoleText(
        ['красиво', 'быстро', 'качественно'],
        textRef.current,
        consoleRef.current,
      );
    }
  }, []);

  return (
    <div className='typewriter-text'>
      <span ref={textRef}></span>
      <div className='typewriter-text__underscore' ref={consoleRef}>&#95;</div>
    </div>
  )
}

export default TypewriterText

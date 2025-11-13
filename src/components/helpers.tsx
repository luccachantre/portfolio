import { useState, useEffect } from 'react'

export const usePlayerControls = () => {
    //this is a javascript "object", just like a json object, it stores key-value pairs
    const keys = { keyW: 'forward', keyS: 'backward', keyA: 'left', keyD: 'right', Space: 'jump'}
    const moveFieldByKey = (key: keyof typeof keys) => keys[key]
    //this line above let's us do something like moveFieldByKey('keyW') and it will give us 'forward'
    //keyof and typeof are typescript keywords
    //typeof turns the keys object into its own type
    //we had the plain javascript version of that line before and it was const moveFieldByKey = (key) => keys[key]
    //and typescript gave us an error because (key) could be any string, but it's not supposed to be
    //so we have to specify that key can only be one of the things in the keys object, 'keyW', 'keyS', etc
    //so we do (key: ) to say "key will be of type..." (which we havent specified yet)
    //typeof keys makes the whole keys object its own type (including names ('keyW') and values('forward'))
    //but it doesnt keep the actual values, it just says their type, which is string
    //and we dont want key to be any string, typescript doesnt like that
    //and then keyof grabs only the name portion of each of the things in keys ('keyW', 'keyS', etc.)
    //so putting it all together, that code/syntax is creating a special type on the fly to tell typescript
    //"(key) can only be one of the names in the keys object"

    

}
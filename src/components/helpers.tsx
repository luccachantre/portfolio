import { useState, useEffect } from 'react'

export const usePlayerControls = () => {
    //this is a javascript "object", just like a json object, it stores key-value pairs
    const keys = { KeyW: 'forward', KeyS: 'backward', KeyA: 'left', KeyD: 'right', Space: 'jump'}
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

    const [movement, setMovement] = useState({ forward: false, backward: false, left: false, right: false, jump: false})

    useEffect(() => {
        
        
        /*
        const handleKeyDown = (e: KeyboardEvent) => setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true })) 
        */
        //theres a lot going on here, not sure I fully understand it to be honest, let me try to explain everything
        //so we have a function looking for a keyboard event (e is the event), and we update setMovement, the useState
        //and btw useState is an object with multiple fields in this case, not just one variable
        //instead of just saying setMovement() and only putting the updated key, we use another arrow function/lambda
        //and this is a very particular syntax for updating useState using an arrow function
        //in this syntax the parameter, in our case m, represents the previous state, 
        //and in the function part we have to specify the new state
        //but as you can see we dont quite put code, we put an object, which is doable! a function can return an object
        //and to do this we have to use () and then {} inside of it, so like () => ({fields in here})
        //and so we use ... which is called spread operator
        //it copies all fields from the object
        //so in our new object we're saying take all the fields from m, which represents the previous state before the update
        //then we also add a field 
        //(which already exists, so once the code sees that the field names match it simply updates that existing field)
        //and this field we add is moveFieldByKey(e.code) and e.code just grabs the name of the keyboard event, so like "KeyW" 
        //and when we pass that into moveFieldByKey, it returns the corresponding string like 'forward'
        //and that corresponds with the field names of the useState object, perfect! now we simply update that field to be true
        //so to summarize all of this, when a key is pressed, we set that field of the usestate object to be 'true'
        //to signal we are moving in that direction

        //but that line still causes an error, since e.code is "typed" (like its type) as string and could cause an error, 
        //so we need to say e.code will only be one of our specified keys
        //to get around this issue we will define an array of valid keys as strings, then say e.code's type is that object's keys or something
        const allowedKeys = ["KeyW", "KeyS", "KeyA", "KeyD", "Space"] as const
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!allowedKeys.includes(e.code as any)) return 
            setMovement((m) => ({...m, [moveFieldByKey(e.code as keyof typeof keys)]: true}))
        }

        const handleKeyUp = (e: KeyboardEvent) => {
            if (!allowedKeys.includes(e.code as any)) return
            setMovement((m) => ({...m, [moveFieldByKey(e.code as keyof typeof keys)]: false}))
        }
    }, [])

}
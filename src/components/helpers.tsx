import { useState, useEffect } from 'react'

export const usePlayerControls = () => {
    //this is a javascript "object", just like a json object, it stores key-value pairs
    const keys = { keyW: 'forward', keyS: 'backward', keyA: 'left', keyD: 'right', Space: 'jump'}
    const moveFieldByKey = (key) => keys[key]

}
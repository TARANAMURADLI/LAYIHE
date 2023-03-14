import React,{useState} from "react";
import AZ from '../lanuages/az.json';
import EN from '../lanuages/az.json';
import RU from '../lanuages/az.json';
import { setlanguage } from "./Redux/counterSlice";
import {useSelector,useDispatch} from 'react-redux'
const Counter=()=>{
const [myLang, setMyLang] =useState(AZ.content);
const language=useSelector(state=>state.language);
const dispatch=useDispatch()
const languages = ['az','en','ru'];
const handleLanguage=(lang)=>{
    dispatch(setlanguage(lang))
    if (lang==="en"){
        setMyLang(EN.content)
    }else if (lang==="ru"){
        setMyLang(RU.content)
    }else{
        setMyLang(AZ.content)
    }
}
    return (
        <div>
            {myLang}
            <br/>
            <br/>
            aktiv dil-{language.language}
            {languages.map((lang,index)=>(
                <div key={index}>
                    <button>{lang}</button>
                </div>
            ))}
            
    </div>
    )
    }
export default Counter
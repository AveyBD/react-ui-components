import React from 'react';
import { 
    Delete,
    Search,
    Home,
    Edit,
    Close,
    Github,
    ChevronDoubleRight,
    ChevronDoubleLeft,
    ChevronDown,
    Code,
    Chip,
    Account,
    Sun,
    Moon,
    Star,
    StarOutline,
    Smartphone
} from '../icons/index';

export const Icon = (props) => {

    const Icon = () => {
        switch (props.name) {
            case 'delete':
                return <Delete size={props.size} color={props.color}/>;
            case 'search':
                return <Search size={props.size} color={props.color}/>;
            case 'home':
                return <Home size={props.size} color={props.color}/>;
            case 'edit':
                return <Edit size={props.size} color={props.color}/>;
            case 'github':
                return <Github size={props.size} color={props.color}/>;
            case 'close':
                return <Close size={props.size} color={props.color}/>;
            case 'chevron-double-right':
                return <ChevronDoubleRight size={props.size} color={props.color}/>;
            case 'chevron-double-left':
                return <ChevronDoubleLeft size={props.size} color={props.color}/>; 
            case 'code':
                return <Code size={props.size} color={props.color}/>; 
            case 'chip':
                return <Chip size={props.size} color={props.color}/>; 
            case 'account':
                return <Account size={props.size} color={props.color}/>; 
            case 'chevron-down':
                return <ChevronDown size={props.size} color={props.color}/>;    
            case 'sun':
                return <Sun size={props.size} color={props.color}/>;    
            case 'moon':
                return <Moon size={props.size} color={props.color}/>; 
            case 'star':
                return <Star size={props.size} color={props.color}/>;    
            case 'star-outline':
                return <StarOutline size={props.size} color={props.color}/>;   
            case 'smartphone':
                return <Smartphone size={props.size} color={props.color}/>;    
            default:
                return '';
        }
    }

    return (
        <Icon/>
    )
}

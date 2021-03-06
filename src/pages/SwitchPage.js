import React, { useState } from 'react';
import { Switch, Select, Icon, RadioGroup, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Switch } from '@assenti/rui-components';

function Example() {
    const [check, setCheck] = useState(false);

    return (
        <>
            <Switch 
                check={check} 
                color="primary"
                onChange={() => setCheck(!check)}/>
        </>
    )
}`

const items = [
    { 
        property: 'check', 
        description: 'define the switch state', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onChange', 
        description: 'handle switch change', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'disabled', 
        description: 'Make switch disabled', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'position', 
        description: 'Change switch position', 
        default: 'horizontal', 
        type: 'string',
        value: 'vertical'
    },
    { 
        property: 'color', 
        description: 'Set color', 
        default: 'gray', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'leftLabel', 
        description: 'Set left side label', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'rightLabel', 
        description: 'Set right side label', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'leftIcon', 
        description: 'Set left side icon', 
        default: '', 
        type: 'string',
        value: 'moon | home | etc. (see icons list)'
    },
    { 
        property: 'rightIcon', 
        description: 'Set right side icon', 
        default: '', 
        type: 'string',
        value: 'moon | home | etc. (see icons list)'
    },
    { 
        property: 'leftIconColor', 
        description: 'Set left side icon color', 
        default: '', 
        type: 'string',
        value: 'hex | rgba | css standard preset'
    },
    { 
        property: 'rightIconColor', 
        description: 'Set right side icon color', 
        default: '', 
        type: 'string',
        value: 'hex | rgba | css standard preset'
    },
    { 
        property: 'className', 
        description: 'Set css custom class', 
        default: '', 
        type: 'string',
        value: ''
    }
]
const colors = ['primary', 'info', 'success', 'error'];
const types = ['icon', 'label', 'none']
const sizes = ['default', 'medium', 'large'];

const SwitchPage = () => {
    const [check, setCheck] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [vertical, setVertical] = useState(false);
    const [type, setType] = useState(types[2]);
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<Switch/>"
                    apiDescItems={items}>
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        dark={theme}
                        label="Switch color"
                        color="primary"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <Select
                        items={sizes}
                        dark={theme}
                        prefix={<Icon name="format-size"/>}
                        width={200}
                        label="Switch size"
                        color="primary"
                        className="my-10"
                        value={size}
                        onChange={v => setSize(v)}/>
                    <br/>
                    <Switch 
                        check={disabled} 
                        color="primary"
                        rightLabel="Disabled" 
                        className="my-10"
                        onChange={() => setDisabled(!disabled)}/>
                    <br/>
                    <Switch 
                        check={vertical} 
                        color="primary"
                        rightLabel="Vertical" 
                        className="my-10"
                        onChange={() => setVertical(!vertical)}/>
                    <br/>
                    <RadioGroup
                        options={types} 
                        value={type}
                        name="type"
                        className="my-10" 
                        onChange={(value) => setType(value)}/>
                    <Divider/>
                    <div className="py-10">
                        <Switch 
                            check={check} 
                            color={color}
                            size={size}
                            leftLabel={type === 'label' ? 'Left label' : ''}
                            rightLabel={type === 'label' ? 'Right label' : ''} 
                            leftIcon={type === 'icon' ? 'moon' : ''}
                            rightIcon={type === 'icon' ? 'sun' : ''} 
                            disabled={disabled}
                            vertical={vertical} 
                            onChange={() => setCheck(!check)}/>
                    </div>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default SwitchPage;
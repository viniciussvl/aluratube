import React from 'react';

export const ColorModeContext = React.createContext({
    mode: '',
    setMode: () => { alert("Você precisa me configurar primeiro") }
})

export default function ColorModeProvider(props) {
    const [mode, setMode] = React.useState(props.initialMode);

    function toggleMode() {
        setMode((mode === 'dark') ? 'light' : 'dark')
    }

    return (
        <ColorModeContext.Provider value={{ mode, setMode, toggleMode }}>
            {props.children}
        </ColorModeContext.Provider>
    )
}
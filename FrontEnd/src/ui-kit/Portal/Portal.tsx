import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface IProps {
    className? : string
    el? : string
    children : React.ReactNode
}

export const Portal : React.FC<IProps> = ( { children, className, el = 'div' } : IProps ) => {
    
    const [container] = React.useState(document.createElement(el))
    
    if ( className )
        container.classList.add(className);
        container.onclick = () => {
            console.log(1);
        }
    React.useEffect(() => {
        document.body.appendChild(container)
        return () => {
            document.body.removeChild(container)
        }
    }, )

    return ReactDOM.createPortal(children, container)
}

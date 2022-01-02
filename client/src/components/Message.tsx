import React, { FC } from 'react';
import { Alert } from 'react-bootstrap';


interface Props {
    variant: string,
    children: string
}

const Message: FC<Props> = ({ variant, children}) => {
    return <Alert variant={variant}>{children}</Alert>
}

Message.defaultProps = {
    variant: 'info',
}

export default Message
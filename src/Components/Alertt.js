import React from 'react';
import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import classes from '../Style/Alertt.module.scss';
const Alertt = () => {
    const icon = <IconInfoCircle />;
    return (
        <Alert className={classes['Alertt']} radius="md" variant="light" color="gray" withCloseButton title="Alert title" icon={icon}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.
        </Alert>
    );
};

export default Alertt;
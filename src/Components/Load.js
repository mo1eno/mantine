import React from 'react';
import { Loader } from '@mantine/core';
import classes from '../Style/Load.module.scss';
const Load = () => {
    return <Loader className={classes['Load']} color="violet" />;
};

export default Load;
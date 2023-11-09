import { PasswordInput } from '@mantine/core';
import classes from '../Style/Password.module.scss';
function Password() {

    return (
        <PasswordInput
            variant="filled"
            className={classes['Password']}
            size="md"
            radius="md"
            label="Input label"
            withAsterisk
            description="Input description"
            placeholder="Input placeholder"
        />
    );
}
export default Password;
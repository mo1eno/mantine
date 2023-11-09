import { Group, Button, MantineProvider } from '@mantine/core';
import classes from "../Style/Color.module.scss"

function Color() {
  return (
    <MantineProvider
      theme={{
        colors: {
          'red': ['#EE204D', '#E32636', '#FF2400', '#B00000', '#480607', '#9B2D30', '#900020', ' #5E2129', '#7B001C', '#CD5C5C'],
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        },
      }}
    >
      <Group className={classes["Color__Group"]}>
        <Button color="red">Red button</Button>
        <Button color="bright-pink" variant="filled">
          Bright pink button
        </Button>
      </Group>
    </MantineProvider>
  );
}
export default Color
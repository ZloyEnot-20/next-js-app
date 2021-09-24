import { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

const MyWonderfulComponent = ({ children, title, count, id, options }) => {
  const [summ, setSumm] = useState(count);
  useEffect(() => {
    if (id && options?.params?.fields?.isDynamic) setSumm((prev) => prev + 1);
  });

  return (
    <>
      <h1 style={{ color: "red" }}>Hello World!</h1>
      <h1>{title}</h1>

      <Grid>
        <Grid xs={12} item={true}>
          {children}
        </Grid>
        <Grid>{summ}</Grid>
      </Grid>
    </>
  );
};

export default MyWonderfulComponent;

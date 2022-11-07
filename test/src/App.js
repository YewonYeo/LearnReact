import React from "react";
import { Button } from "@mui/material";
import Dialog1 from "./dialog1";

function App() {
  const [openDlg1Dialog, setDialog1Open] = React.useState(false);

  return (
    <div>
      <div>
        <Dialog1 open={openDlg1Dialog} close={() => setDialog1Open(false)} />
      </div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          setDialog1Open(true);
        }}
      >
        Open Dialog 1
      </Button>
    </div>
  );
}

export default App;

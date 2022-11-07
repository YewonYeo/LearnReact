import React from "react";
import Dialog2 from "./dialog2";

// Material UI
import { Dialog, Button, DialogContent } from "@mui/material";

const Dialog1 = ({ open, close }) => {
  const [openDlg2Dialog, setDialog2Open] = React.useState(false);

  return (
    <div>
      <Dialog2 open={openDlg2Dialog} close={() => setDialog2Open(false)} />
      <Dialog
        style={{ zIndex: 1700 }}
        open={open}
        keepMounted
        onClose={close}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div>
          <DialogContent>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setDialog2Open(true);
              }}
            >
              Open Dialog 2
                      </Button>
                      <div>
                          ㅎㅇㅎㅇ
                      </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default Dialog1;
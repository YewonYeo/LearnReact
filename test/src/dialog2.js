import React, { useState } from "react";

// Material UI
import { Dialog, DialogContent } from "@mui/material";

const Dialog2 = ({ open, close }) => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <Dialog
      style={{ zIndex: 1800 }}
      open={open}
      keepMounted
      onClose={close}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <div>
        <DialogContent style={{ width: 300, height: 500 }}>
          <div>
                      ㅎㅇㅎㅇ
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default Dialog2;
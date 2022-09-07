import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import "./CheckBoxSectionNew.css";

function CheckboxSection(props) {
    return (
        <div>
            <div
                className="checkbox-section1-new"
                style={{
                    display: "Grid",
                    width: "max-content",
                    height: "fit-content",
                    marginLeft: "250px",
                }}
            >
                {props.dataList.slice(props.startP, props.endP).map((item) => (
                    <FormControlLabel
                        control={
                            <Checkbox
                                sx={{
                                    "& .MuiSvgIcon-root": { fontSize: 18 },
                                }}
                            />
                        }
                        label={item}
                    />
                ))}
            </div>
        </div>
    );
}

export default CheckboxSection;

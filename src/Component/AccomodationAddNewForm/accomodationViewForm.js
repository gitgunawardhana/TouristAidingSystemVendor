import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./accomodationNewForm.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios";

const token = JSON.parse(sessionStorage.getItem('token'));
const config = {
    headers: { Authorization: `Bearer ` + token }
};

function ViewForm(props) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [description, setDescription] = useState("");
    const [minimumSpendingDays, setMinimumSpendingDays] = useState("");
    const [provinceId, setProvinceId] = useState("");
    const [locationPictures, setLocationPictures] = useState([]);
    const [activities, setActivities] = useState([]);

    const [provinces, setProvinces] = useState([]);

    useEffect(() => {
        getLocationDetails();
        getProvinces();
    }, []);

    const getLocationDetails = () => {
        axios.get("http://localhost:8080/admin/location/" + props.id, config)
            .then(res => {
                const response = res.data.body;
                setId(response.id);
                setName(response.name);
                setLongitude(response.longitude);
                setLatitude(response.latitude);
                setDescription(response.description);
                setMinimumSpendingDays(response.minimumSpendingDays);
                setProvinceId(response.provinceId);
                setLocationPictures(response.locationPictures);
                setActivities(response.locationActivities);
            })
    }

    const getProvinces = () => {
        axios.get("http://localhost:8080/admin/province/names", config)
            .then(res => {
                const response = res.data.body;
                setProvinces(response);
            })
    }

    return (
        <>
            <div className="card">
                <h3 className="topics">Basic Details</h3>
                <hr />
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField id="name" label="Accomodation Name" type="text"
                            value={name}
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{ m: 1, width: '97%' }} />

                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            maxRows={10}
                            value={description}
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{ m: 1, width: '97%' }}
                        />
                        <TextField
                            id="minimumDaysToSpend"
                            label="Telephone"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={minimumSpendingDays}
                            InputProps={{ inputProps: { min: 1, max: 100 }, readOnly: true }}
                            sx={{ m: 1, width: '31%' }}
                        />
                        <TextField id="latitude" label="Email" type="text"
                            value={latitude}
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{ m: 1, width: '32%' }} />
                        <TextField id="longitude" label="Longitude" type="text"
                            value={longitude}
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{ m: 1, width: '32%' }} />
                        <TextField id="longitude" label="Latitude" type="text"
                            value={longitude}
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{ m: 1, width: '31%' }} />
                        <TextField id="longitude" label="Addres Line 1" type="text"
                            value={longitude}
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{ m: 1, width: '65%' }} />
                        <TextField id="longitude" label="Bulding No" type="text"
                            value={longitude}
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{ m: 1, width: '31%' }} />
                        <TextField id="longitude" label="City" type="text"
                            value={longitude}
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{ m: 1, width: '65%' }} />
                        <TextField
                            id="minimumDaysToSpend"
                            label="Province"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={minimumSpendingDays}
                            InputProps={{ inputProps: { min: 1, max: 100 }, readOnly: true }}
                            sx={{ m: 1, width: '31%' }}
                        />
                        <TextField id="latitude" label="Postal Code" type="text"
                            value={latitude}
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{ m: 1, width: '32%' }} />
                        <TextField id="longitude" label="Distance city" type="text"
                            value={longitude}
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{ m: 1, width: '32%' }} />
                        <TextField id="longitude" label="Distance Airport" type="text"
                            value={longitude}
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{ m: 1, width: '31%' }} />
                        <TextField id="longitude" label="Check-in Time" type="text"
                            value={longitude}
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{ m: 1, width: '32%' }} />
                        <TextField id="longitude" label="Check-out Time" type="text"
                            value={longitude}
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{ m: 1, width: '32%' }} />
                    </div>
                </Box>

                <h3 className="topics">Photo Gallery</h3>
                <hr />
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <ImageList sx={{ m: "2%", width: "96%", height: 400 }} cols={3} rowHeight={3}>
                            {locationPictures.map((item) => (
                                <ImageListItem>
                                    <img
                                        src={item}
                                        loading="lazy"
                                        alt="location image" />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Box>
            </div>
        </>
    );
}

export default ViewForm;
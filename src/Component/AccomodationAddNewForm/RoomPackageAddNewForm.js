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
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import CheckboxSection from "../../Component/CheckBoxSectionNew/CheckBoxSectionNew";


function NewForm() {

    const access = [
        "A/C",
        "Pets allowed",
        "Breakfast [free]",
        "Daily cleaning",
        "Security [24-hour]",
        "Free Wi-Fi",
        "Contactless check-in/out",
        "Cleaning products",
        "Smoking Room",
    ];



    const [name, setName] = useState("");
    const [longitude, setLongitude] = useState(0.0);
    const [latitude, setLatitude] = useState(0.0);
    const [description, setDescription] = useState("");
    const [minimumSpendingDays, setMinimumSpendingDays] = useState(1);
    const [provinceId, setProvinceId] = useState(0);
    const [locationPictures, setLocationPictures] = useState([]);
    const [locationPicturesBase64, setLocationPicturesBase64] = useState([]);
    const [locationActivities, setLocationActivities] = useState([]);

    const [activities, setActivities] = useState([]);
    const [provinces, setProvinces] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getProvinces();
        getActivities();
    }, []);

    const getProvinces = () => {
        axios.get("http://localhost:8080/admin/province/names")
            .then(res => {
                const response = res.data.body;
                setProvinces(response);
            })
    }



    const getActivities = () => {
        axios.get("http://localhost:8080/admin/activity")
            .then(res => {
                const response = res.data.body;
                setActivities(response);
            })
    }

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const handleImageChange = event => {
        let image = event.target.files[0];
        let url = URL.createObjectURL(image);
        let items = [];
        let itemsBase64 = [];
        {
            locationPictures.map((item) => (
                items.push(item)
            ));
            locationPicturesBase64.map((item) => (
                itemsBase64.push(item)
            ))
        }
        items.push(url);
        getBase64(image).then(
            data => itemsBase64.push(data)
        );
        setLocationPictures(items);
        setLocationPicturesBase64(itemsBase64);
    };

    const handleNameChange = event => {
        setName(event.target.value);
    }
    const handleLongitudeChange = event => {
        setLongitude(parseFloat(event.target.value));
    }
    const handleLatitudeChange = event => {
        setLatitude(parseFloat(event.target.value));
    }
    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    }
    const handleMinimumSpendingDaysChange = event => {
        setMinimumSpendingDays(parseInt(event.target.value));
    }
    const handleProvinceIdChange = event => {
        setProvinceId(event.target.value);
    }
    const handleActivitiesChange = (value) => event => {
        let items = [];
        const isFound = locationActivities.some(element => {
            const result = element === value;
            items.push(element);
            return result;
        });
        if (isFound) {
            setLocationActivities(current =>
                current.filter(element => {
                    return element !== value;
                }),
            );
        } else {
            items.push(value);
            setLocationActivities(items);
        }
    }

    const handleSubmit = event => {
        const locationActivityObjects = locationActivities.map(activity => {
            return {
                id: activity
            }
        });
        const location = {
            name: name,
            longitude: longitude,
            latitude: latitude,
            description: description,
            minimumSpendingDays: minimumSpendingDays,
            provinceId: provinceId,
            locationPictures: locationPicturesBase64,
            locationActivities: locationActivityObjects
        };

        axios.post("http://localhost:8080/admin/location", location)
            .then(res => {
                if (res.data.success) {
                    Swal.fire(
                        'Done',
                        res.data.message,
                        'success'
                    ).then(r => navigate("/locations"))
                } else {
                    Swal.fire(
                        res.data.message,
                        'error'
                    ).then(r => {
                    })
                }

            })
            .catch(err => {
                Swal.fire(
                    'Failed',
                    'Something went wrong',
                    'error'
                ).then(r => {
                })
            })
    }

    const CreateButton = styled(Button)(({ theme }) => ({
        backgroundColor: '#00565b',
        '&:hover': {
            backgroundColor: '#00565b',
            fontWeight: 'bold'
        },
        width: '50%',
        marginLeft: '25%',
        marginBottom: '20px'
    }));



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
                        <FormControl
                            sx={{ m: 1, width: '64%' }}>
                            <InputLabel id="vendor-type">Select Room</InputLabel>
                            <Select
                                labelId="province"
                                id="province"
                                label="province"
                                onChange={handleProvinceIdChange}
                            >
                                {provinces.map((item) => (
                                    <MenuItem value={item.id}>{item.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            id="name"
                            label="Room Name"
                            type="text"
                            onChange={handleNameChange}
                            sx={{ m: 1, width: '32%' }} />

                        <TextField
                            id="description"
                            label="Bed Details"
                            multiline
                            maxRows={10}
                            onChange={handleDescriptionChange}
                            sx={{ m: 1, width: '97%' }}
                        />


                        <TextField
                            id="longitude"
                            label="Number Of People"
                            type="text"
                            onChange={handleLongitudeChange}
                            sx={{ m: 1, width: '32%' }} />
                        <TextField
                            id="longitude"
                            label="Price"
                            type="text"
                            onChange={handleLongitudeChange}
                            sx={{ m: 1, width: '31%' }} />
                        <TextField
                            id="longitude"
                            label="Discount"
                            type="text"
                            onChange={handleLongitudeChange}
                            sx={{ m: 1, width: '32%' }} />

                        {/* <FormControl sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}>
                            <Checkbox
                                label="Pay At Property"
                                defaultChecked
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                            />
                        </FormControl> */}

                        <FormControlLabel control={<Checkbox defaultChecked sx={{ m: 1, '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Pay At The Property" />
                        <FormControlLabel control={<Checkbox defaultChecked sx={{ m: 1, '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Free cancellation" />

                    </div>
                </Box>

            </div>
            <CreateButton variant="contained" size="large" onClick={handleSubmit}>
                Save Room Package
            </CreateButton>
        </>
    );
}

export default NewForm;
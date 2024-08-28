import React from "react";
import {
    TextField,
    Box,
    Grid,
    Button,
    Typography,
    Dialog,
    Autocomplete
} from "@mui/material";

interface FormProps {
    onClose: () => void;
}

function Form({ onClose }: FormProps) {
    return (
        <Grid justifyContent="flex-right" boxShadow={2} height={500} width={400}>
            <Button onClick={onClose} variant="contained" color="secondary" style={{ margin: 16 }}>Back</Button>

            <Grid container item spacing={3} xs={12} sm={9} justifyContent="flex-end">
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth id="1" label="Full Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth id="12" label="Email Address" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="2"
                        label="Enter Phone Number"
                        type="number"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Autocomplete
                        fullWidth
                        id="7"
                        options={["United States", "Canada", "Mexico"]}
                        renderInput={(params: any) => (
                            <TextField
                                {...params}
                                label="Country"
                                placeholder="Choose a country"
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth id="3" label="State/Region" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth id="8" label="City" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth id="4" label="Address" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth id="5" label="Company" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth id="9" label="Zip/Code" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth id="10" label="Role" />
                </Grid>
                <Grid item xs={12} sm={6}>

                    <Button variant="contained">Create User</Button>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default Form;

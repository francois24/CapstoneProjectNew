import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';




export default function MaterialUIPickers() {
  const [pickUp, pickUpValue] = React.useState(dayjs(Date()));
  const [dropOff, dropOffValue] = React.useState(dayjs(Date()));
  const [maker, setMaker] = React.useState('');

  const handleChangePickUp = (newValue) => {
    pickUpValue(newValue);
  };

  const handleChangeDropOff = (newValue) => {
    dropOffValue(newValue);
  };

  const handleChange = (event) => {
    setMaker(event.target.value);
  };

  return (
    

        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack
          spacing={3}>

            <MobileDatePicker
            minDate={new Date()}
            label="PICK-UP DATE"
            inputFormat="MM/DD/YYYY"
            value={pickUp}
            onChange={handleChangePickUp}
            renderInput={(params) => <TextField {...params} />}
            />

            <MobileDatePicker
            minDate={new Date()}
            label="DROP-OFF DATE"
            inputFormat="MM/DD/YYYY"
            value={dropOff}
            onChange={handleChangeDropOff}
            renderInput={(params) => <TextField {...params} />}
            />

            <FormControl fullWidth>
            <InputLabel id="Car Brand">Car Brand</InputLabel>
            <Select
                label="Car Brand"
                value={maker}
                onChange={handleChange}
            >

                <MenuItem value='Select Maker'>Select Maker</MenuItem>
                <MenuItem value='All Makes'>All Makes</MenuItem>
                <MenuItem value='Volkwagen'>Volkwagen</MenuItem>
                <MenuItem value='Maserati'>Maserati</MenuItem>
                <MenuItem value='Audi'>Audi</MenuItem>
                <MenuItem value='BMW'>BMW</MenuItem>
                <MenuItem value='Mercedes Benz'>Mercedes Benz</MenuItem>
                <MenuItem value='Lamborghini'>Lamborghini</MenuItem>
                <MenuItem value='LEXUS'>LEXUS</MenuItem>
                <MenuItem value='Ferrari'>Ferrari</MenuItem>
                <MenuItem value='Bentley'>Bentley</MenuItem>
                <MenuItem value='Land Rover'>Land Rover</MenuItem>
                <MenuItem value='Dodge'>Dodge</MenuItem>
                <MenuItem value='Jaguar'>Jaguar</MenuItem>
            </Select>
            </FormControl>

            <Button className='bg-danger rounded-2 border-0 p-2 fs-6 text-light'>
                RENT NOW
            </Button>
        
        </Stack>
        </LocalizationProvider>
  );
}

'use client'
import { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider, PickersDay, PickersDayProps } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { styled } from "@mui/material/styles";
import { useEmployees } from "@/hooks/data/useEmployees";
import { Grid2 } from "@mui/material";
import EmployeeList, { EmployeeWithColor } from "./employee/EmployeeList";

interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
    isSelected: boolean;
    color?: string
  }
  
const CustomPickersDay = styled(PickersDay, {
    shouldForwardProp: (prop) => prop !== 'isSelected' && prop !== 'isHovered',
  })<CustomPickerDayProps>(({ theme, color, isSelected }) => ({
    ...(isSelected && color && {
      backgroundColor: color,
      color: theme.palette.primary.contrastText,
      '&:hover, &:focus': {
        backgroundColor: color,
      },
    })
  })) as React.ComponentType<CustomPickerDayProps>;

function Day(
  props: PickersDayProps<Dayjs> & {
    selectedDays?: Dayjs[];
    color?: string
    onClickTwice?: (day: Dayjs) => void
  },
) {
const { day, selectedDays, color, onClickTwice, ...other } = props;

return (
    <CustomPickersDay
      {...other}
      day={day}
      onDoubleClick={() => onClickTwice?.(day)}
      color={color}
      selected={false}
      isSelected={!!selectedDays?.find(s => s.isSame(day))}
    />
);
}

export default function FormCalendar() {
  const{ all, selected, setSelected } = useEmployees();
  const [selectedDays, setSelectedDays] = useState<Dayjs[]>([]);
  const [color, setColor] = useState('');
  
  const selectEmployee = (employee: EmployeeWithColor) => {
    setSelected(employee)
    setColor(employee.color)
  }

  const selectDay = (day: Dayjs) => {
    if(selectedDays.find(v => v.isSame(day))) {
        setSelectedDays(selectedDays.filter(v => !v.isSame(day)))
    } else {
        setSelectedDays([...selectedDays, day]);
    }
  }

  const openProperties = (day: Dayjs) => {
    console.log('Checlk date', day)
  }

  return (
    <Grid2 container spacing={2}>
        <Grid2 size='grow'>
            <EmployeeList all={all} selected={selected} onSelect={selectEmployee} />
        </Grid2>
        <Grid2 size={8}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar onChange={selectDay}  
                //sx={{ margin: 10 }}
                slots={{ day: Day }}
                slotProps={{
                  day: () => ({ selectedDays, color, onClickTwice: openProperties }),
                }}/>
            </LocalizationProvider>
          
        </Grid2>
    </Grid2>
  )
}
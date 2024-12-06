import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Employee } from '@/hooks/data/useEmployees';

export type EmployeeWithColor = Employee & {
    color: string
}

export type EmployeeListProps = {
    all: Employee[],
    selected: Employee[],
    onSelect: (employee: EmployeeWithColor) => void
}

export const COLORS = ['#15966d', '#a4d531', '#d24b2a', '#278ce8', '#f3cd2a', '#7bcf33', '#966d15', '#153e96', '#962d15', '#677000', '#007400', '#004d2c']

export default function EmployeeList(props: EmployeeListProps) {
  const { all, selected, onSelect } = props;
  return (
    <List dense sx={{ bgcolor: 'background.paper' }}>
      {all.map((employee, index) => {
        const color = COLORS[index % COLORS.length]
        return (
          <ListItem
            key={employee.id}
            disablePadding
          >
            <ListItemButton onClick={() => onSelect({ ...employee, color })} selected={ selected.map(s => s.id).includes(employee.id) }>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: color }}>{employee.initials}</Avatar>
              </ListItemAvatar>
              <ListItemText id={`checkbox-list-secondary-label-${employee.id}`} primary={[employee.firstName, employee.lastName].filter(v => !!v).join(' ')} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
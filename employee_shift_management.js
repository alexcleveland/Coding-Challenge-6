// Task 1 Create an Employees Array of Employee Objects

const employees = [
{ name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
{ name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
{ name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
{ name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
    ];

    //Task 2 Create a Function to Display Employee Shift Details

    function displayEmployeeShifts(employee){
        console.log(`${employee.name} Shifts:`);
        employee.shifts.foreach(shift => {
            console.log(`${shift.day}: ${shift.hours} Hours`);
        })}

    // Task 3 Create a Function to Assign a New Shift

    function assignShift(employeeName, day, hours){
        const employee = employees.find(employee => employee.name === employeeName);
        const bookedShift = employee.shifts.find(shift => shift.day === day);
        if(bookedShift){console.log(`${employeeName} already has a shift on ${day}`);
        } else employee.shifts.push({day, hours});
        console.log(`${employeeName} has a shift on ${day} for ${hours}hours`);
    }

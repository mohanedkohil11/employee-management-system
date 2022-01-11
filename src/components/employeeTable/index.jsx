import { API } from '../../api';
import React, { useEffect } from 'react'
import EmployeeRow from './EmployeeRow'
import { useEmployeeSystemContext } from '../../context/employeeContext'
import noData from '../../assets/nodata.png'
import './employeeTable.scss'


export default function EmployeeTable() {
    const { state, dispatch } = useEmployeeSystemContext();

    /**
      * Called to fetch employees
      */
    const fetchEmployeesData = () => {

        API.getEmployees().then(payload => {
            dispatch({ type: 'GET_EMPLOYEES', payload })
        }).catch(() => {
            alert("Something went wrong, Check console for more details");
        })
    }

    /**
    * Called to add employee
    */
    const onAddNewEmployee = () => {
        API.addEmployee().then(() => {
            alert("Employee Added Successfully");
            fetchEmployeesData()
        }).catch(() => {
            alert("Something went wrong, Check console for more details");
        })
    }

    useEffect(() => {
        fetchEmployeesData()
    }, [])

    return (
        <div className='general-container employee-table'>
            <table>
                <thead>
                    <tr>
                        <th colSpan='3'>
                            <AddNewEmployeeBtn onAddNewEmployee={onAddNewEmployee} />
                        </th>
                    </tr>
                </thead>
                <thead>
                    <TableHeader />
                </thead>
                <tbody>
                    {
                        state.employees && state.employees.length > 0 ? state.employees.map((employee, index) => (
                            <EmployeeRow employee={employee} key={employee.id} fetchEmployeesData={fetchEmployeesData} showDetails={index === 0} />
                        )) : <EmptyState />
                    }
                </tbody>
            </table>
        </div>
    )
}

const AddNewEmployeeBtn = React.memo(({ onAddNewEmployee }) => (
    // button to add new employee
    <div className='employee-table__add-btn'>
        <span onClick={onAddNewEmployee}>
            ADD NEW EMPLOYEE
        </span>
    </div>
));

const TableHeader = React.memo(() => (
    // table headers
    <tr>
        <th>EMPLOYEE</th>
        <th>STATUS</th>
        <th>MANAGE</th>
    </tr>
));

const EmptyState = React.memo(() => (
    // no data component
    <tr>
        <td colSpan='3'>
            <img width={100} src={noData} alt='no data' />
        </td>
    </tr>
))
import React, { useState } from 'react'
import { API } from '../../api';
import StatusDetails from './StatusDetails';
import user from '../../assets/user.png'
import downArrow from '../../assets/down-arrow.png'
import { ReactComponent as DeleteSVG } from '../../assets/delete.svg';

export default function EmployeeRow({ employee, fetchEmployeesData, showDetails }) {
    const [showStatus, setShowStatus] = useState(showDetails);
    const { id, name, status } = employee;

    /**
    * Called to change status of an employee
    */
    const onStatusChange = (newStatus) => {
        if (status !== newStatus)
            API.updateEmployeeStatus(id, newStatus).then(() => {
                alert("Employee Updated Successfully");
                fetchEmployeesData()
            }).catch(() => {
                alert("Something went wrong, Check console for more details");
            })
    }

    /**
   * Called to delete an employee
   */
    const onDeleteEmployee = () => {
        if (window.confirm('Are You Sure You Want To Delete This Employee')) {
            API.deleteEmployee(id).then(() => {
                alert("Employee Deleted Successfully");
                fetchEmployeesData()
            }).catch(() => {
                alert("Something went wrong, Check console for more details");
            })
        }

    }

    return (
        <tr className='employee-row' >
            <td className='employee-row__name-cell' onClick={() => { setShowStatus(prevState => !prevState) }}>
                <div className='employee-row__name-cell__container'>
                    <img className={showStatus ? 'rotate' : ''} src={downArrow} width={15} height={15} alt='arrow' />
                    <img src={user} width={30} height={30} alt='user avatar' />
                    <span >{name}</span>
                </div>
            </td>
            {
                showStatus ?
                    <td colSpan="2" ><StatusDetails currentStatus={status} onStatusChange={onStatusChange} /></td>
                    :
                    <>
                        <td>{status}</td>
                        <td >
                            <span className='employee-row__delete-btn' onClick={onDeleteEmployee}>
                                <DeleteSVG />
                            </span>
                        </td>
                    </>
            }
        </tr>
    )
}

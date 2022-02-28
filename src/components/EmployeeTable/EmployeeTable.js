import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEmployees } from '../../state/action-creators/employee'
import classes from './EmployeeTable.module.css'
import EmployeeTableRow from '../EmployeeTableRow/EmployTableRow'
import { filterData } from '../../helpers/utility'
const EmployeeTable = () => {
    const {
        data,
        loading: employeesLoading,
        error,
    } = useSelector((state) => state.employees)
    const { companies, status } = useSelector((state) => state.filters)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setEmployees())
    }, [dispatch])
    console.log(data)
    return (
        <>
            <table className={classes.mainTable}>
                <thead>
                    <tr className={classes.mainRow}>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Status</th>
                        <th>Last Updated</th>
                        <th>Notes</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {!employeesLoading &&
                        !error &&
                        data &&
                        filterData(data, companies, status).map((item, i) => {
                            return (
                                <EmployeeTableRow
                                    eid={item._id}
                                    item={item}
                                    key={item._id}
                                    index={i}
                                />
                            )
                        })}
                </tbody>
            </table>
        </>
    )
}
export default EmployeeTable

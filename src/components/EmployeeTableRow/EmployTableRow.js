import EditMember from '../EditMember/EditMember'
import classes from './EmployTableRow.module.css'
const EmployeeTableRow = ({ item }) => {
    return (
        <tr className={classes.dataRows}>
            <td>{item.name}</td>
            <td>{item.company.name}</td>
            <td>{item.status ? 'Active' : 'Inactive'}</td>
            <td>{item.updatedAt}</td>
            <td>{item.notes || '-'}</td>
            <EditMember eid={item._id} item={item} />
        </tr>
    )
}

export default EmployeeTableRow

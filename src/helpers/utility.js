export const filterData = (employeeData, companyData, status) => {
    console.log(status)
    return employeeData
        .filter((item) => {
            return companyData.indexOf(item.company.name) > -1
        })
        .sort((a, b) => {
            if (status == 'active') {
                return b.status - a.status
            } else return a.status - b.status
        })
}

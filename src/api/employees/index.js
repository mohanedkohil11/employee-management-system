import requester from "../requester";

export const getEmployees = async () => {
    try {
        const response = await requester.get('/employees')
        return response.data
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteEmployee = async (id) => {
    try {
        const response = await requester.delete(`/employees/${id}`)
        return response.data
    }
    catch (err) {
        console.log(err);
    }
}

export const addEmployee = async () => {
    try {
        const response = await requester.post('/employees', { status: 'ADDED' })
        return response.data
    }
    catch (err) {
        console.log(err);
    }
}

export const updateEmployeeStatus = async (id, status) => {
    try {
        const response = await requester.put(`/employees/${id}`, { status })
        return response.data
    }
    catch (err) {
        console.log(err);
    }
}

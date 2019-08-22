module.exports = `import API from "../Services/Api";

export async function anyRequestName(params) {
    try {
        const response = await API.get('/todos');
    
        return response;
    } catch (error) {
        console.log(error)

        throw error;
    }
};
`
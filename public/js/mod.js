
const moduleFormFunction = async (event) => {
    event.preventDefault();
    const module_title = document.querySelector('#module-title').value.trim();
    const response = await axios.post('/api/modules', { module_title });
    if (response.status === 200) {
        console.log('Module added');
    } else {
        console.error('Failed to add module');
    }
};
document
    .querySelector('#moduleBtn')
    .addEventListener('click', moduleFormFunction);

const fetchModules = async () => {
    try {
        const response = await axios.get('/api/modules'); // This will make a GET request to /api/modules
        return response.data;
    } catch (error) {
        console.error('Error fetching modules:', error);
        return null;
    }
};

fetchModules()
    .then(modules => {
        // Handle the modules data here (e.g., update the UI with the modules)
        console.log('Fetched modules:', modules);
    })
    .catch(error => {
        console.error('Error:', error);
    });

//delete module
const deleteModule = async (id) => {
    try {
        const response = await axios.delete(`/api/modules/${id}`);
        if (response.status === 200) {
            console.log('Module deleted');
        } else {
            console.error('Failed to delete module');
        }
    } catch (error) {
        console.error('Error deleting module:', error);
    }
};

document.addEventListener('click', async (event) => {
    if (event.target.id === 'removeModuleBtn') {
        const moduleId = event.target.getAttribute('data-module-id');
        await deleteModule(moduleId);
        event.target.closest('.accordian-item').remove();
    }
});
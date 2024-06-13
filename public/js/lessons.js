const lessonFormFunction = async (event) => {
    event.preventDefault();
    const lesson_title = document.querySelector('#lesson-title').value.trim();
    const url = document.querySelector('#url').value.trim();
    const module_id = document.querySelector('#module_id').value.trim();
    const response = await axios.post('/api/lessons', { lesson_title, url, module_id });
    if (response.status === 200) {
        // lesson_title = "",
        // url = "",
        // module_id = ""
        console.log('Lesson added');
    } else {
        console.error('Failed to add lesson');
    }
};
document
    .querySelector('#lessonBtn')
    .addEventListener('click', lessonFormFunction);

const fetchLessons = async () => {
    try {
        const response = await axios.get('/api/lessons'); // This will make a GET request to /api/lessons
        return response.data;
    } catch (error) {
        console.error('Error fetching lessons:', error);
        return null;
    }
};

fetchLessons()
    .then(lessons => {
        // Handle the lessons data here (e.g., update the UI with the lessons)
        console.log('Fetched lessons:', lessons);
    })
    .catch(error => {
        console.error('Error:', error);
    });
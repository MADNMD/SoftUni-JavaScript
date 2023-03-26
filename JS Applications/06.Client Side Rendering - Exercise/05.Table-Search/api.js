export async function getRequets() {

    try {
        const response = await fetch(`http://localhost:3030/jsonstore/advanced/table`);

        if(response.ok !== true){
            const err = await response.json();
            throw new Error(err.message);
        }
        return await response.json();
        
    } catch (error) {
        alert(error.message);
    }
}

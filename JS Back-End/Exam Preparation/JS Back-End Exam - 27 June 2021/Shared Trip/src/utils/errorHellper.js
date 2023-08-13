exports.getErrorMessage = (err) => {

    let errorMessage = err.message;

    if (err.errors) {
        errorMessage = Object.values(err.errors)[0].message;
        // Object.values(err.errors).map(x => x.message)
    }
    return errorMessage;
}
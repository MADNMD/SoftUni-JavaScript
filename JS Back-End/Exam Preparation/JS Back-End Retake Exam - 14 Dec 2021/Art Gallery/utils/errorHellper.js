exports.getErrorMessage = (err) => {

    let errorMessage = err.message; // взимам генералния error message

    if (err.errors) { //Но ако си mongoose грешка, от обекта errors извличаме първата грешка и я показваме;
        errorMessage = Object.values(err.errors)[0].message;
    }

    return errorMessage;
}
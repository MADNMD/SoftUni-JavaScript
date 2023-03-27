import { html } from "../node_modules/lit-html/lit-html.js";

export const tableTemplate = (data, matchText) => html`
<table class="container">
    <thead>
        <tr>
            <th>Student name</th>
            <th>Student email</th>
            <th>Student course</th>
        </tr>
    </thead>

    <tbody>
        ${data.map((student) => html`
        <!-- <tr id=${student._id} class=> -->
        <tr id=${student._id} class=${student.firstName.toLowerCase().includes(matchText) ||
            student.lastName.toLowerCase().includes(matchText) ||
            student.email.toLowerCase().includes(matchText) ||
            student.course.toLowerCase().includes(matchText) ? 'select' : '' }>
            <td>${student.firstName} ${student.lastName}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
        </tr>
        `)}
    </tbody>

    <tfoot>
        <tr>
            <td colspan="3">
                <input type="text" id="searchField" />
                <button type="button" id="searchBtn">Search</button>
            </td>
        </tr>
    </tfoot>
</table>`

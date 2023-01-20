function fromJSONToHTMLTable(dataAsJson) {

    const resultHtml = [];
    resultHtml.push('<table>');

    const data = JSON.parse(dataAsJson);

    const element = Object.keys(data[0]);
    resultHtml.push(`   <tr>${element.map(p => `<th>${p}</th>`).join('')}</tr>`);

    for (let entry of data) {
        resultHtml.push(`   <tr>${element.map(p => `<td>${entry[p]}</td>`).join('')}</tr>`);
    }
    resultHtml.push('</table>');

    return resultHtml.join('\n');
}
console.log( fromJSONToHTMLTable(`[{"Name":"Pesho","Score":4,"Grade":8},{"Name":"Gosho","Score":5,"Grade":8},{"Name":"Angel","Score":5.50,"Grade":10}]`));
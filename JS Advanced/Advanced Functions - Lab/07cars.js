function cars(input){

    const lines = input.slice();
    const data = {};
    
    let result = {
        create:(name, inherit, name2) => (data[name] = inherit ? Object.create(data[name2]) : {} ),
        set : (name,key,value) => (data[name][key]) = value,
        print: (name) => {
            const entry = [];
            for(let key in data[name]){
                entry.push(`${key}:${data[name][key]}`);
            }
            console.log(entry.join(','));
        }
    }

    lines.forEach(line => {
            let [command,name,key,value] = line.split(' ');
           result[command](name,key,value);
    });
}
cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']);
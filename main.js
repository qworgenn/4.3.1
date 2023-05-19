const source = document.getElementById('myID').innerHTML;
const template = Handlebars.compile(source);
const customValues = {
    name: 'User',
};
const htmlInput = template(customValues);
document.getElementById('htmlSection').innerHTML = htmlInput;

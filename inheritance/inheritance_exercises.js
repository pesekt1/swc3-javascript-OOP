//HttpElement
//HttpSelectElement - drop down list of HttpElements
//methods: click(), focus(),
//methods for HtmlSelectElement - addItem(), removeItem

//HttpImageElement with src parameter ... image source
// it will have its own render() method returning <img src ="source" />

function HtmlElement(){
    this.click = function(){
        console.log("clicked");
    }
}

HtmlElement.prototype.focus = function(){
    console.log("focused");
}

function HtmlSelectElement(items = []){
    this.items = items;

    this.addItem = function(item){
        this.items.push(item);
    };

    this.removeItem = function(item){
        this.items.splice(this.items.indexOf(item),1)
    };

    this.render = function(){
        return `
        <select>${this.items.map(item => `
        <option>${item}</option>`).join('')}
        </select>`;
    }
}

HtmlSelectElement.prototype = new HtmlElement(); //base HtmlElement
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
const list = new HtmlSelectElement();


list.addItem(new HtmlElement);
list.addItem(new HtmlElement);

console.log(list);


function HtmlImageElement(src){
    this.src = src;
    this.render = function(){
        return `<img src="${this.src}" />`;
    };
}

HtmlImageElement.prototype = new HtmlElement(); //base HtmlElement
HtmlImageElement.prototype.constructor = HtmlImageElement;

list.addItem(new HtmlImageElement("source"));
console.log(list);
console.log(list.render());
console.log(list.items[2].render());
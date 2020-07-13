class Component {
    constructor(name) {
        this.name = name
    }
}

class Menu extends Component {
    constructor(name, type) {
        super(name)
        this['type'] = type
        this['items'] = new Set()
        this['len'] = this.items.size
    }

    set fullName(full_name) {
        this['full_name'] = full_name
    }

    get fullName() {
        return this.full_name
    }

    add(item) {
        this.items.add(item.toUpperCase())
        this.len = this.items.size
        return [...this.items]
    }

    remove(item) {
        this.items.delete(item.toUpperCase())
        this.len = this.items.size
        return [...this.items]
    }
}

// Test
let menu = new Menu('mainMenu','expand');
menu.add('portfolio');
menu.add('portfolio');
menu.add('contacts');
console.log(menu)
menu.remove('CONTACts');
console.log(menu)
menu.fullName = 'expand_menu';// "type_menuName"
console.log(menu)
let name = menu.fullName;
console.log('fullname:'+name+';items size:'+menu.len);
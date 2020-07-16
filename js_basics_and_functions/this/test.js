let cur_this = {
    test: function() {
        return {
            tost: {
                name: "object_tost",
                ref: this
            }
        }
    }
};

console.log(cur_this.test()); //  cur_this context this
